/**
 * Compresses portfolio images with Bun.Image before `next build`.
 * Requires Bun with Bun.Image support (Bun 1.2+).
 */
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const IMG_DIR = join(ROOT, "public", "assets", "img");
const MANIFEST_PATH = join(ROOT, "data", "image-manifest.json");

type ImageJob = {
  name: string;
  input: string;
  output: string;
  maxWidth: number;
  quality: number;
};

const photoJobs: ImageJob[] = [
  {
    name: "hero-bg",
    input: join(IMG_DIR, "hero-bg.jpg"),
    output: join(IMG_DIR, "hero-bg.webp"),
    maxWidth: 1920,
    quality: 82,
  },
];

type ManifestEntry = {
  webp: string;
  width: number;
  height: number;
  bytes: number;
};

async function compressPhoto(job: ImageJob): Promise<ManifestEntry | null> {
  if (!existsSync(job.input)) {
    console.warn(`[compress-images] skip missing: ${job.input}`);
    return null;
  }

  const file = Bun.file(job.input);
  if (!("image" in file) || typeof file.image !== "function") {
    throw new Error(
      "Bun.Image is not available. Upgrade Bun to the latest version: https://bun.com/docs/runtime/image",
    );
  }

  await file
    .image()
    .resize(job.maxWidth, undefined, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: job.quality })
    .write(job.output);

  const meta = await Bun.file(job.output).image().metadata();
  const bytes = (await Bun.file(job.output).arrayBuffer()).byteLength;

  console.log(`[compress-images] ${job.name}: ${meta.width}x${meta.height} → ${(bytes / 1024).toFixed(1)} KB`);

  return {
    webp: `/assets/img/${job.name}.webp`,
    width: meta.width,
    height: meta.height,
    bytes,
  };
}

async function main() {
  await mkdir(join(ROOT, "data"), { recursive: true });

  const manifest: Record<string, ManifestEntry> = {};

  for (const job of photoJobs) {
    const entry = await compressPhoto(job);
    if (entry) manifest[job.name] = entry;
  }

  await Bun.write(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`[compress-images] wrote ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error("[compress-images] failed:", err);
  process.exit(1);
});

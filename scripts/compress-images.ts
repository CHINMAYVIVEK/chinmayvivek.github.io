/**
 * Compresses portfolio images with Bun.Image before `next build`.
 * Requires Bun with Bun.Image support (Bun 1.2+).
 *
 * Compresses every `*.jpg` under public/assets/img/ → `.webp`
 * (hero uses /assets/img/hero-bg.webp; project covers use image.src in data).
 */
import { existsSync } from "node:fs";
import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const IMG_DIR = join(ROOT, "public", "assets", "img");

type ImageJob = {
  name: string;
  input: string;
  output: string;
  maxWidth: number;
  quality: number;
};

function jobFor(name: string): ImageJob {
  const isHero = name === "hero-bg";
  return {
    name,
    input: join(IMG_DIR, `${name}.jpg`),
    output: join(IMG_DIR, `${name}.webp`),
    maxWidth: isHero ? 1920 : 1400,
    quality: isHero ? 82 : 80,
  };
}

async function discoverJobs(): Promise<ImageJob[]> {
  if (!existsSync(IMG_DIR)) return [];
  const files = await readdir(IMG_DIR);
  return files
    .filter((f) => f.toLowerCase().endsWith(".jpg"))
    .map((f) => jobFor(f.replace(/\.jpg$/i, "")))
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function compressPhoto(job: ImageJob): Promise<boolean> {
  if (!existsSync(job.input)) {
    console.warn(`[compress-images] skip missing: ${job.input}`);
    return false;
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
  return true;
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true });

  const jobs = await discoverJobs();
  let written = 0;

  if (jobs.length === 0) {
    console.warn(`[compress-images] no .jpg files in ${IMG_DIR}`);
  }

  for (const job of jobs) {
    if (await compressPhoto(job)) written += 1;
  }

  console.log(`[compress-images] done (${written} images)`);
}

main().catch((err) => {
  console.error("[compress-images] failed:", err);
  process.exit(1);
});

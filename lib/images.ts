import manifest from "@/data/image-manifest.json";

type ImageManifestEntry = {
  webp: string;
  width: number;
  height: number;
  bytes: number;
};

const images = manifest as Record<string, ImageManifestEntry>;

function getOptimizedImage(name: string): ImageManifestEntry {
  const entry = images[name];
  if (!entry || entry.bytes === 0) {
    return {
      webp: `/assets/img/${name}.jpg`,
      width: 1920,
      height: 1080,
      bytes: 0,
    };
  }
  return entry;
}

const hero = getOptimizedImage("hero-bg");

/** Public surface: only the path used by Hero */
export const heroImage = { webp: hero.webp };

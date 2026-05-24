import manifest from "@/data/image-manifest.json";

export type ImageManifestEntry = {
  webp: string;
  width: number;
  height: number;
  bytes: number;
};

export type ImageManifest = Record<string, ImageManifestEntry>;

const images = manifest as ImageManifest;

export function getOptimizedImage(name: string): ImageManifestEntry {
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

export const heroImage = getOptimizedImage("hero-bg");

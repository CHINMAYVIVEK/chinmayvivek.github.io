# Chinmay Vivek | Portfolio

Personal portfolio built with **Next.js 16.2.6**, **React 19**, **TypeScript**, and **Bun**.

## Stack

- [Next.js 16](https://nextjs.org/) App Router with static export (GitHub Pages)
- Built-in SEO: `metadata`, `sitemap.ts`, `robots.ts`, JSON-LD
- [Bun.Image](https://bun.com/docs/runtime/image) for build-time WebP compression
- Tailwind CSS 3

## Development

```bash
bun install
bun run compress:images   # optional: generate WebP assets with Bun.Image
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
```

Runs `scripts/compress-images.ts` (Bun.Image) then `next build`. Static site output is in `out/`.

```bash
bun run start   # serves production build (after export, use a static server for `out/`)
```

## Deploy (GitHub Pages)

1. Push to `main` (include `bun.lock`).
2. **Settings → Pages → Source: GitHub Actions**.
3. Workflow uploads the `out/` directory.

Custom domain: `public/CNAME` → `chinmayvivek.com`.

## Project structure

```
app/              layout, page, globals.css, sitemap, robots
components/       UI sections
data/             typed data + image manifest
lib/              SEO config, colors, images helper
scripts/          compress-images.ts (Bun.Image)
public/assets/    icons, source photos
```

## Image compression

`scripts/compress-images.ts` uses **Bun.Image** to:

- Resize hero photo (max 1920px, `fit: inside`) and encode WebP
- Write `data/image-manifest.json` for `next/image` paths

Requires a recent Bun with `Bun.file().image()` support.

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

## Deploy

Two independent deployments from the same repo. No redirects between them.

### GitHub Pages → [chinmayvivek.github.io](https://chinmayvivek.github.io)

Static export published to the `docs/` folder by CI.

1. Push to `main` (include `bun.lock`).
2. **Settings → Pages → Deploy from a branch** → **main** → **/docs** (not /root).
3. Do **not** set a custom domain on GitHub Pages.
4. Workflow sets `NEXT_PUBLIC_SITE_URL=https://chinmayvivek.github.io` at build time.

Run **Actions → Deploy to GitHub Pages → Run workflow** once if `docs/` is empty.

### Docker → [chinmayvivek.com](https://chinmayvivek.com)

Production image serves the static `out/` folder with nginx on port 8080.

```bash
docker compose up web --build
```

Build sets `NEXT_PUBLIC_SITE_URL=https://chinmayvivek.com`. Point DNS for `chinmayvivek.com` at this host only—not at GitHub Pages.

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

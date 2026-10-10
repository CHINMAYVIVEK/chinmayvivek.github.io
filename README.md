# Chinmay Vivek | Portfolio

Personal portfolio built with **Next.js 16.2.11**, **React 19**, **TypeScript**, and **Bun**.

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

Link URLs have defaults in code. Copy `.env.example` to `.env` to override them. GitHub Pages can override the same names with Actions secrets. Those links are still public in the built HTML.

## Build

```bash
bun run build         # next build → out/
bun run build:local   # compress images, then next build
```

CI and Docker run image compression before build. Serve the export locally with any static server, e.g. `npx serve out`.

## Deploy

Two independent deployments from the same repo. No redirects between them.

### GitHub Pages → [chinmayvivek.github.io](https://chinmayvivek.github.io)

CI builds the static export and deploys it as a GitHub Actions artifact. **Nothing is committed back to the repo** by the bot.

1. Push to `main` (include `bun.lock`).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions** (not "Deploy from a branch").
3. Do **not** set a custom domain on GitHub Pages.
4. Workflow sets `NEXT_PUBLIC_SITE_URL=https://chinmayvivek.github.io` at build time. Optional Actions secrets with the `NEXT_PUBLIC_*` names from `.env.example` override the link defaults. Empty secrets keep the defaults.

The `docs/` folder is not used; built output stays in CI only (`out/` is gitignored).

### Docker → [chinmayvivek.com](https://chinmayvivek.com)

Production image serves the static `out/` folder with nginx on port 8080.

```bash
docker compose up web --build
```

Build sets `NEXT_PUBLIC_SITE_URL=https://chinmayvivek.com`. Point DNS for `chinmayvivek.com` at this host only—not at GitHub Pages.

## Project structure

```
app/              layout, page, globals.css, sitemap, robots
components/       UI sections (+ ThemeToggle)
data/             typed content (projects, timeline, expertise)
lib/              SEO, images, theme
hooks/            active section, theme, observers
scripts/          compress-images.ts (Bun.Image)
public/assets/    icons, photos, project covers
```

## Image compression

`scripts/compress-images.ts` uses **Bun.Image** to:

- Resize local photos under `public/assets/img/` (hero max 1920px, `fit: inside`) and encode WebP
- Hero uses `/assets/img/hero-bg.webp`; project covers set `image.src` in `data/projects.ts`

Requires a recent Bun with `Bun.file().image()` support.

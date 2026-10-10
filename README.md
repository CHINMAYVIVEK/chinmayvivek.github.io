# Chinmay Vivek | Portfolio

Next.js static portfolio. Two deploys from this repo, with no redirects between them.

## Local

```bash
bun install
bun dev
```

Open http://localhost:3000. `bun run build` writes the site to `out/`.

Copy `.env.example` to `.env` and set every link variable before `bun dev` or `bun run build`. Those links still appear in the built HTML.

## Deploy

- **GitHub Pages** → [chinmayvivek.github.io](https://chinmayvivek.github.io). Push to `main`. Pages source is GitHub Actions. The workflow sets `NEXT_PUBLIC_SITE_URL=https://chinmayvivek.github.io`. Do not add a custom domain.
- **Docker** → [chinmayvivek.com](https://chinmayvivek.com). `docker compose up web --build` serves `out/` with nginx on port 8080. The image sets `NEXT_PUBLIC_SITE_URL=https://chinmayvivek.com`. In Dokploy, set every name from `.env.example` as a build-time variable. Point that domain at this host only.

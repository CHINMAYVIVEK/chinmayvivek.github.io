# syntax=docker/dockerfile:1

FROM oven/bun:1-alpine AS base
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# --- Development ---
FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "bun run compress:images && bunx next dev -H 0.0.0.0 -p 3000"]

# --- Production build (static export → out/) ---
FROM base AS builder

COPY next.config.ts tsconfig.json postcss.config.js tailwind.config.js next-env.d.ts ./
COPY app ./app
COPY components ./components
COPY data ./data
COPY hooks ./hooks
COPY lib ./lib
COPY public ./public
COPY scripts ./scripts

RUN bunx next telemetry disable \
  && (bun run scripts/compress-images.ts || true) \
  && bunx next build

# --- Production runtime: nginx only, no Node/Bun in final image ---
FROM nginx:1.27-alpine AS production

RUN rm -rf /usr/share/nginx/html/* \
  && rm /etc/nginx/conf.d/default.conf

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

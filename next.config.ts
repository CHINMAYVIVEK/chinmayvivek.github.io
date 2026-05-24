import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 92],
  },
  reactStrictMode: true,
};

export default nextConfig;

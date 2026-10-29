import type { NextConfig } from "next";

// Export estático: `next build` deja HTML en out/ y Caddy lo sirve como archivos (ver scripts/publicar.sh).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

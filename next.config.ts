import type { NextConfig } from "next";

// Export estático: `next build` deja HTML en out/ y Caddy lo sirve como archivos (ver scripts/publicar.sh).
// BASE_PATH=/borrador arma una copia que vive en academy.woorky.app/borrador/ (ver scripts/borrador.sh).
const nextConfig: NextConfig = {
  output: "export",
  ...(process.env.BASE_PATH ? { basePath: process.env.BASE_PATH } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

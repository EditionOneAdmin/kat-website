import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kat-website",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Required for static HTML export in Next.js 13+ App Router
  reactStrictMode: true, // ✅ Optional but recommended
  swcMinify: true,       // ✅ Optional for better performance
};

export default nextConfig;

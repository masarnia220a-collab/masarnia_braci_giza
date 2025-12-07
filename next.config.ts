import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aeikwtjzfewx7fmh.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
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

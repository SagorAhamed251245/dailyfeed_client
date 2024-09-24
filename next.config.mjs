/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allow images from subdomains of example.com
      },
    ],
  },
};

export default nextConfig;

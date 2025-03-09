/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable optimizing static images
  images: {
    unoptimized: true,
  },
  // Add your Tailwind CSS
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // Enable optimizing static images
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Clean up any old build artifacts
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    return config;
  },
};

module.exports = nextConfig;

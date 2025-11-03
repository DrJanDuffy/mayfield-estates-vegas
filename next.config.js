/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
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

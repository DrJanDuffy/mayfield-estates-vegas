/** @type {import('next').NextConfig} */
const MAYFIELD_DEST = '/las-vegas-neighborhoods/mayfield-estates';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Redirect old /mayfield-estates/* URLs (404 in GSC) to canonical page
  async redirects() {
    return [
      { source: '/mayfield-estates', destination: MAYFIELD_DEST, permanent: true },
      { source: '/mayfield-estates/location', destination: MAYFIELD_DEST, permanent: true },
      { source: '/mayfield-estates/floor-plans', destination: MAYFIELD_DEST, permanent: true },
      { source: '/mayfield-estates/gallery', destination: MAYFIELD_DEST, permanent: true },
      { source: '/mayfield-estates/availability', destination: MAYFIELD_DEST, permanent: true },
    ];
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

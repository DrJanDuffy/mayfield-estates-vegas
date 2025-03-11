/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    return config;
  },
}

export default nextConfig 
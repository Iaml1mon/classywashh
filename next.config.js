/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ['react', 'react-dom'],
  },
};

module.exports = nextConfig;
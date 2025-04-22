/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  trailingSlash: true,
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: '.next',
  trailingSlash: true,
};

module.exports = nextConfig;
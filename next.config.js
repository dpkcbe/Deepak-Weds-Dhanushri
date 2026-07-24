/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: 'export',
  basePath: '/Deepak-Weds-Dhanushri',
};

module.exports = nextConfig;

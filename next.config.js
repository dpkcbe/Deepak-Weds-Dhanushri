/** @type {import('next').NextConfig} */
delete process.env.NEXT_PUBLIC_BASE_PATH;
delete process.env.NEXT_PUBLIC_ASSET_PREFIX;
delete process.env.ASSET_PREFIX;
delete process.env.BASE_PATH;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;

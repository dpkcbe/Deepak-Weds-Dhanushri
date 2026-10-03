/** @type {import('next').NextConfig} */
const isGithubPages = process.env.IS_GITHUB_PAGES === 'true';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: '/Deepak-Weds-Dhanushri',
      }
    : {}),
};

module.exports = nextConfig;

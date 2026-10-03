/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  ...(isGithubActions
    ? {
      output: 'export',
      basePath: '/Deepak-Weds-Dhanushri',
    }
    : {}),
};

module.exports = nextConfig;

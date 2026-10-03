/** @type {import('next').NextConfig} */
const isGithubPages = Boolean(process.env.GITHUB_REPOSITORY) && !process.env.VERCEL;

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

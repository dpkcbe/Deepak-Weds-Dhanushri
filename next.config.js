/** @type {import('next').NextConfig} */
const isVercel = Boolean(process.env.VERCEL || process.env.NEXT_PUBLIC_VERCEL_ENV);
const isGithubPages = !isVercel && (process.env.IS_GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true');

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

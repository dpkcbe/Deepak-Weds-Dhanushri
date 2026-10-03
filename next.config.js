/** @type {import('next').NextConfig} */
const isGithubPages = process.env.BUILD_FOR_GITHUB_PAGES === 'true';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/Deepak-Weds-Dhanushri' : '',
  assetPrefix: isGithubPages ? '/Deepak-Weds-Dhanushri' : '',
};

module.exports = nextConfig;

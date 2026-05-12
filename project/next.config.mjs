import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 加入下面這段自動重新導向
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
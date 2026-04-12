import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/introduce_page.github.io',
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);

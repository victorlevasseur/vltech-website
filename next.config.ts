import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    // @ts-expect-error because plugins must be transmitted as strings for Turbo.
    remarkPlugins: [['remark-frontmatter'], ['remark-mdx-frontmatter']]
  }
});

export default withMDX(nextConfig);

import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  distDir: 'build/dist',
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/magic-portfolio' : '',
};

export default withMDX(nextConfig);

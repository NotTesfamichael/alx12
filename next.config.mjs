import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: 'export', // REQUIRED for static export
  images: {
    unoptimized: true, // REQUIRED for static
  },
  basePath: process.env.NODE_ENV === 'production' ? '/before' : '',
};

export default withMDX(nextConfig);

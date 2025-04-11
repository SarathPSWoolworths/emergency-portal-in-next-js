import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/emergency-portal-in-next-js', // Repository name
  // GitHub Pages serves from the "docs" folder and requires a .nojekyll file
  output: 'export', // Export static files
  images: { unoptimized: true }, // Disable image optimization for static export
  assetPrefix: './', // Serve assets from the current directory,
  distDir: 'docs'
};


export default nextConfig;

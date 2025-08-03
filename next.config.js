
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack will automatically read aliases from jsconfig.json
  // No need for webpack config unless you have special needs
  experimental: {
    turbo: {
      turbo: false,
      resolveAlias: {
        '@': './src',
        '@/components': './src/components'
      }
    }
  }
};

export default nextConfig;



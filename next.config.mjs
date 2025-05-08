//**  @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;


import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack will automatically read aliases from jsconfig.json
  // No need for webpack config unless you have special needs
  experimental: {
    turbo: {
      // Optional: Explicitly define aliases here if needed
      resolveAlias: {
        '@': './src',
        '@/components': './src/components'
      }
    }
  }
};

export default nextConfig;



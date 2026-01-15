// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   turbopack: {
//     enabled: true,
//   },
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you want to enable Turbopack in development (optional)
  experimental: {
    turbopack: true // or false to disable
  }
}

module.exports = nextConfig



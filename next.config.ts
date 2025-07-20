/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge',
  },
  distDir: '.vercel',
}

module.exports = nextConfig

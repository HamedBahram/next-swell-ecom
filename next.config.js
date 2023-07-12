/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['cdn.schema.io', 'cdn.swell.store']
  }
}

module.exports = nextConfig

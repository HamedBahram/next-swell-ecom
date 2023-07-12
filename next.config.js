/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['cdn.schema.io']
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['coutz.com.br'],
  },
  distDir: 'build',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

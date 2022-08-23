/** @type {import('next').NextConfig} */

const withPurgeCss = require('next-purgecss')

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

module.exports = withPurgeCss(nextConfig)

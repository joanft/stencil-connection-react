/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "components",
    "components-react"
  ]
}

module.exports = nextConfig

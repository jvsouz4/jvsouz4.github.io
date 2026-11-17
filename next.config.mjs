/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
  allowedDevOrigins: ['10.1.11.123'],
}

export default nextConfig

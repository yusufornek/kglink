/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  webpack: (config, { dev }) => {
    // Development indicator'ı tamamen kapat
    if (dev) {
      config.devtool = false;
    }
    return config;
  },
  experimental: {
    // Development overlay'i tamamen kapat
    optimizePackageImports: [],
  },
}

export default nextConfig

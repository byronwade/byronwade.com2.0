/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['playwright']
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Important: return the modified config
    if (isServer) {
      config.externals = ['@sparticuz/chromium', ...config.externals];
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'copyui.com',
        port: '',
        pathname: '**'
      }
    ]
  }
};

module.exports = nextConfig;

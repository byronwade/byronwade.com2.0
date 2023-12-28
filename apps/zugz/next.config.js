/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.supabase.io',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'supabase.com',
        port: '',
        pathname: '**'
      }
    ]
  }
};

module.exports = nextConfig;

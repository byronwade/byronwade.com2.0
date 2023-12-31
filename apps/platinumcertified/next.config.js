/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'copyui.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'vmwqvrqwcunruqdoyxpo.supabase.co',
        port: '',
        pathname: '**'
      },
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
        hostname: 'example.com',
        port: '',
        pathname: '**'
      }
    ]
  }
};

module.exports = nextConfig;

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin'
    },
    sitemap: 'https://www.shroomageddon.com/sitemap.xml'
  };
}

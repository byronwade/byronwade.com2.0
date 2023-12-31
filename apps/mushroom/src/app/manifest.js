export default function manifest() {
  return {
    name: 'Shroomageddon - Mushroom Database',
    short_name: 'Shroomageddon',
    description: 'A database of mushrooms and their properties.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#bc6f30', // You can change this to match your brand color
    icons: [
      {
        src: 'images/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png'
      },
      {
        src: 'images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    // Optionally, you can include orientation, scope, and other properties
    orientation: 'portrait',
    scope: '/',
    lang: 'en-US'
  };
}

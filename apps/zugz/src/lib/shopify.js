import { createStorefrontClient } from '@shopify/hydrogen-react';
export const client = createStorefrontClient({
  // load environment variables according to your framework and runtime
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  publicStorefrontToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
});

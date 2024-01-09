'use server';
/* 
Here's a brief documentation of each function in your code:

1. shopifyFetch<T>
Purpose: To perform GraphQL operations against the Shopify Storefront API.
Parameters:
cache: Defines the cache mode for the request.
headers: Custom headers for the request.
query: The GraphQL query or mutation.
tags: Tags for caching.
variables: Variables for the GraphQL query or mutation.
Returns: A promise that resolves to the GraphQL operation's result.

2. removeEdgesAndNodes
Purpose: Transforms a GraphQL connection type to a simpler array format.
Parameter: array: The GraphQL connection object.

Returns: An array of nodes.
3. reshapeCart
Purpose: Transforms the Shopify cart data to a custom Cart type.
Parameter: cart: The original Shopify cart object.
Returns: The reshaped cart object.

4. reshapeCollection
Purpose: Transforms a Shopify collection object to a custom Collection type.
Parameter: collection: The original Shopify collection object.
Returns: The reshaped collection object or undefined if input is falsy.

5. reshapeCollections
Purpose: Transforms an array of Shopify collection objects to an array of custom Collection types.
Parameter: collections: Array of Shopify collection objects.
Returns: An array of reshaped collection objects.

6. reshapeImages
Purpose: Transforms a GraphQL connection of images to an array of images with additional alt text.
Parameters:
images: The GraphQL connection object for images.
productTitle: Title of the product for generating alt text.
Returns: An array of images with alt text.

7. reshapeProduct
Purpose: Transforms a Shopify product object to a custom Product type.
Parameters:
product: The original Shopify product object.
filterHiddenProducts: Flag to exclude products with a specific tag.
Returns: The reshaped product object or undefined.

8. reshapeProducts
Purpose: Transforms an array of Shopify product objects to an array of custom Product types.
Parameter: products: Array of Shopify product objects.
Returns: An array of reshaped product objects.

9. createCart
Purpose: Creates a new cart in Shopify.
Returns: A promise that resolves to the created cart object.

10. addToCart
Purpose: Adds items to a Shopify cart.
Parameters:
cartId: The ID of the cart.
lines: Array of items to add to the cart.
Returns: A promise that resolves to the updated cart object.

11. removeFromCart
Purpose: Removes items from a Shopify cart.
Parameters:
cartId: The ID of the cart.
lineIds: Array of line item IDs to remove from the cart.
Returns: A promise that resolves to the updated cart object.

12. updateCart
Purpose: Updates items in a Shopify cart.
Parameters:
cartId: The ID of the cart.
lines: Array of items with their updated quantities.
Returns: A promise that resolves to the updated cart object.

13. getCart
Purpose: Retrieves a specific Shopify cart.
Parameter: cartId: The ID of the cart.
Returns: A promise that resolves to the cart object or undefined.

14. getCollection
Purpose: Retrieves a specific Shopify collection.
Parameter: handle: The handle of the collection.
Returns: A promise that resolves to the collection object or undefined.

15. getCollectionProducts
Purpose: Retrieves products of a specific Shopify collection.
Parameters:
collection: Handle of the collection.
reverse: Flag to reverse the order of products.
sortKey: Key to sort the products.
Returns: A promise that resolves to an array of products.

16. getCollections
Purpose: Retrieves all Shopify collections.
Returns: A promise that resolves to an array of collection objects.

17. getMenu
Purpose: Retrieves a specific menu from Shopify.
Parameter: handle: The handle of the menu.
Returns: A promise that resolves to an array of menu items.

18. getPage
Purpose: Retrieves a specific page from Shopify.
Parameter: handle: The unique identifier or handle of the page.
Returns: A promise that resolves to the page object.

19. getPages
Purpose: Fetches all pages from Shopify.
Returns: A promise that resolves to an array of page objects.

20. getProduct
Purpose: Retrieves a specific product from Shopify.
Parameter: handle: The unique identifier or handle of the product.
Returns: A promise that resolves to the product object or undefined.

21. getProductRecommendations
Purpose: Fetches product recommendations based on a specific product.
Parameter: productId: The ID of the product for which recommendations are sought.
Returns: A promise that resolves to an array of recommended product objects.

22. getProducts
Purpose: Fetches products from Shopify based on certain criteria.
Parameters:
query: Optional search query string.
reverse: Optional boolean to reverse the order of products.
sortKey: Optional sort key.
Returns: A promise that resolves to an array of product objects.

23. revalidate
Purpose: Triggers a revalidation of pages in response to Shopify webhooks.
Parameter: req: The Next.js request object.
Returns: A promise that resolves to a Next.js response object, typically indicating successful revalidation.

Additional Notes:
The shopifyFetch function is the core function for all Shopify API interactions, with different GraphQL queries and mutations passed to it.
The reshaping functions (reshapeCart, reshapeCollection, reshapeProducts, etc.) are used to transform the data received from Shopify into a more convenient and structured format for front-end use.
The revalidate function is specifically designed to work with Shopify's webhook system for content updates, ensuring that the Next.js app remains in sync with the changes in the Shopify store.
 */

import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from '../constants';
import { isShopifyError } from '../type-guards';
import { ensureStartsWith } from '../utils';
import { revalidateTag } from 'next/cache';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import {
  addToCartMutation,
  createCartMutation,
  editCartItemsMutation,
  removeFromCartMutation
} from './mutations/cart';
import { getCartQuery } from './queries/cart';
import {
  getCollectionProductsQuery,
  getCollectionQuery,
  getCollectionsQuery
} from './queries/collection';
import { getMenuQuery } from './queries/menu';
import { getPageQuery, getPagesQuery } from './queries/page';
import {
  getProductQuery,
  getProductRecommendationsQuery,
  getProductsQuery
} from './queries/product';
import {
  Cart,
  Collection,
  Connection,
  Image,
  Menu,
  Page,
  Product,
  ShopifyAddToCartOperation,
  ShopifyCart,
  ShopifyCartOperation,
  ShopifyCollection,
  ShopifyCollectionOperation,
  ShopifyCollectionProductsOperation,
  ShopifyCollectionsOperation,
  ShopifyCreateCartOperation,
  ShopifyMenuOperation,
  ShopifyPageOperation,
  ShopifyPagesOperation,
  ShopifyProduct,
  ShopifyProductOperation,
  ShopifyProductRecommendationsOperation,
  ShopifyProductsOperation,
  ShopifyRemoveFromCartOperation,
  ShopifyUpdateCartOperation
} from './types';

const domain = process.env.SHOPIFY_STORE_DOMAIN
  ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
  : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function shopifyFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
  variables
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || 'unknown',
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
}

const removeEdgesAndNodes = (array: Connection<any>) => {
  return array.edges.map((edge) => edge?.node);
};

const reshapeCart = (cart: ShopifyCart): Cart => {
  if (!cart.cost?.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: '0.0',
      currencyCode: 'USD'
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines)
  };
};

const reshapeCollection = (collection: ShopifyCollection): Collection | undefined => {
  if (!collection) {
    return undefined;
  }

  return {
    ...collection,
    path: `/search/${collection.handle}`
  };
};

const reshapeCollections = (collections: ShopifyCollection[]) => {
  const reshapedCollections = [];

  for (const collection of collections) {
    if (collection) {
      const reshapedCollection = reshapeCollection(collection);

      if (reshapedCollection) {
        reshapedCollections.push(reshapedCollection);
      }
    }
  }

  return reshapedCollections;
};

const reshapeImages = (images: Connection<Image>, productTitle: string) => {
  const flattened = removeEdgesAndNodes(images);

  return flattened.map((image) => {
    const filename = image.url.match(/.*\/(.*)\..*/)[1];
    return {
      ...image,
      altText: image.altText || `${productTitle} - ${filename}`
    };
  });
};

const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
  if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
    return undefined;
  }

  const { images, variants, ...rest } = product;

  return {
    ...rest,
    images: reshapeImages(images, product.title),
    variants: removeEdgesAndNodes(variants)
  };
};

const reshapeProducts = (products: ShopifyProduct[]) => {
  const reshapedProducts = [];

  for (const product of products) {
    if (product) {
      const reshapedProduct = reshapeProduct(product);

      if (reshapedProduct) {
        reshapedProducts.push(reshapedProduct);
      }
    }
  }

  return reshapedProducts;
};

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: editCartItemsMutation,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
    tags: [TAGS.cart],
    cache: 'no-store'
  });

  // Old carts becomes `null` when you checkout.
  if (!res.body.data.cart) {
    return undefined;
  }

  return reshapeCart(res.body.data.cart);
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  const res = await shopifyFetch<ShopifyCollectionOperation>({
    query: getCollectionQuery,
    tags: [TAGS.collections],
    variables: {
      handle
    }
  });

  return reshapeCollection(res.body.data.collection);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyCollectionProductsOperation>({
    query: getCollectionProductsQuery,
    tags: [TAGS.collections, TAGS.products],
    variables: {
      handle: collection,
      reverse,
      sortKey: sortKey === 'CREATED_AT' ? 'CREATED' : sortKey
    }
  });

  if (!res.body.data.collection) {
    console.log(`No collection found for \`${collection}\``);
    return [];
  }

  return reshapeProducts(removeEdgesAndNodes(res.body.data.collection.products));
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<ShopifyCollectionsOperation>({
    query: getCollectionsQuery,
    tags: [TAGS.collections]
  });
  const shopifyCollections = removeEdgesAndNodes(res.body?.data?.collections);
  const collections = [
    {
      handle: '',
      title: 'All',
      description: 'All products',
      seo: {
        title: 'All',
        description: 'All products'
      },
      path: '/search',
      updatedAt: new Date().toISOString()
    },
    // Filter out the `hidden` collections.
    // Collections that start with `hidden-*` need to be hidden on the search page.
    ...reshapeCollections(shopifyCollections).filter(
      (collection) => !collection.handle.startsWith('hidden')
    )
  ];

  return collections;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  const res = await shopifyFetch<ShopifyMenuOperation>({
    query: getMenuQuery,
    tags: [TAGS.collections],
    variables: {
      handle
    }
  });

  return (
    res.body?.data?.menu?.items.map((item: { title: string; url: string }) => ({
      title: item.title,
      path: item.url.replace(domain, '').replace('/collections', '/search').replace('/pages', '')
    })) || []
  );
}

export async function getPage(handle: string): Promise<Page> {
  const res = await shopifyFetch<ShopifyPageOperation>({
    query: getPageQuery,
    variables: { handle }
  });

  return res.body.data.pageByHandle;
}

export async function getPages(): Promise<Page[]> {
  const res = await shopifyFetch<ShopifyPagesOperation>({
    query: getPagesQuery
  });

  return removeEdgesAndNodes(res.body.data.pages);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    tags: [TAGS.products],
    variables: {
      handle
    }
  });

  return reshapeProduct(res.body.data.product, false);
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
    query: getProductRecommendationsQuery,
    tags: [TAGS.products],
    variables: {
      productId
    }
  });

  return reshapeProducts(res.body.data.productRecommendations);
}

export async function getProducts({
  query,
  reverse,
  sortKey
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductsOperation>({
    query: getProductsQuery,
    tags: [TAGS.products],
    variables: {
      query,
      reverse,
      sortKey
    }
  });

  return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
  // We always need to respond with a 200 status code to Shopify,
  // otherwise it will continue to retry the request.
  const collectionWebhooks = ['collections/create', 'collections/delete', 'collections/update'];
  const productWebhooks = ['products/create', 'products/delete', 'products/update'];
  const topic = headers().get('x-shopify-topic') || 'unknown';
  const secret = req.nextUrl.searchParams.get('secret');
  const isCollectionUpdate = collectionWebhooks.includes(topic);
  const isProductUpdate = productWebhooks.includes(topic);

  if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
    console.error('Invalid revalidation secret.');
    return NextResponse.json({ status: 200 });
  }

  if (!isCollectionUpdate && !isProductUpdate) {
    // We don't need to revalidate anything for any other topics.
    return NextResponse.json({ status: 200 });
  }

  if (isCollectionUpdate) {
    revalidateTag(TAGS.collections);
  }

  if (isProductUpdate) {
    revalidateTag(TAGS.products);
  }

  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}

/* export async function createCheckout(cartId: string): Promise<string> {
  // Example GraphQL mutation to create a checkout session
  const createCheckoutMutation = `
    mutation {
      checkoutCreate(input: {
        // Define the checkout creation input (like line items from the cart)
      }) {
        checkout {
          // fields you need, typically including a webUrl
        }
      }
    }
  `;

  // Call Shopify API to create a checkout session
  const res = await shopifyFetch({
    query: createCheckoutMutation,
    variables: { cartId },
    // other required fields
  });

  // Extract the checkout URL from the response
  const checkoutUrl = res.body.data.checkoutCreate.checkout.webUrl;

  return checkoutUrl;
} */

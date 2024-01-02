import { getProducts } from '../../lib/shopify';

export default async function GrowBags() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getProducts();
  console.log(homepageItems);
  return <div>test</div>;
}

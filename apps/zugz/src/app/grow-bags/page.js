import Link from 'next/link';
import Image from 'next/image';
import AddToCartButton from '../../components/client-data/AddToCartButton';

import { getProduct } from '../../lib/shopify';

export default async function GrowBags() {
  const product = await getProduct('grow-bags');
  console.log(product.id);
  return (
    <>
      <div className="absolute top-0 right-0 z-0 w-full h-full bg-black"></div>
      <div className="relative z-10 h-full bg-black">
        <div className="flex flex-col mx-auto space-y-2 max-w-7xl">
          <div className="flex">
            <div className="py-32">
              <div className="flex flex-row space-x-6">
                <Image
                  src="/grow-bag.png"
                  alt="asdf"
                  width={150}
                  height={150}
                  className="w-20 h-20 rounded-md"
                />
                <h1 className="font-bold text-7xl">Grow Bags</h1>
              </div>
              <div>
                <h3 className="max-w-lg mt-8 mb-8 text-3xl font-medium md:mb-12">
                  The best Grow Bags on the market currently
                </h3>
              </div>
              <div className="font-normal text-lg text-gray-900 dark:text-gray-50 text-opacity-75 max-w-[650px] pb-6">
                <p>
                  The complete bundle includes every wallpaper in the collection, adds dynamic
                  desktop wallpapers for macOS, additional mobile & tablet wallpapers, plus handy
                  iOS shortcuts to download & apply them.
                </p>
              </div>
            </div>
            <div>
              <AddToCartButton merchandiseId={product.id} quantity={1} />
            </div>
          </div>

          <div className="flex items-center p-2 border rounded-md border-neutral-200 dark:bg-black dark:border-neutral-800">
            <Link href="/agar-plates">Product Info</Link>
          </div>

          <div className="">
            <div className="space-y-2">
              <div className="p-32 border rounded-md border-neutral-200 dark:bg-black dark:border-neutral-800">
                This is a box
              </div>
              <div className="p-32">This is a box</div>
              <div className="p-32">This is a box</div>
              <div className="p-32">This is a box</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

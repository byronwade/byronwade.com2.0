import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <div className="flex gap-4 p-10 mx-auto max-w-7xl">
      {/* {[
        [32, 40, 32, 32, 32],
        [32, 40, 64],
        [64, 40, 40]
      ].map((card, index) => (
        <div className="flex-1" key={index}>
          {card.map((height, index) => (
            <div
              className={`mb-4 h-${height} rounded-md border border-neutral-800 bg-neutral-100 p-4 dark:bg-neutral-900`}
              key={index}
            ></div>
          ))}
        </div>
      ))} */}
      <div className="flex-1 space-y-4">
        <div className="p-4 mb-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <h2 className="text-2xl font-bold">Strain</h2>
          <p className="text-sm">Full Moon Party</p>
        </div>

        <div className="flex flex-row w-full gap-4">
          <div className="flex-1 space-y-4">
            <div className="p-4 mb-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <div className="text-sm">
                <span className="font-bold">$20.00</span>
                <span>/10ml</span>
              </div>
            </div>
            <div className="p-4 mb-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <div className="text-sm">
                <span>300 In Stock</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="p-4 mb-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <h2 className="text-2xl font-bold">Views</h2>
              <p className="text-sm">1000 people have viewed this in the last hour</p>
            </div>
          </div>
        </div>

        <div className="relative p-4 overflow-hidden rounded-md shadow-lg border-neutral-800 bg-zugz-50">
          <Image
            src="/icon.png"
            height={300}
            width={300}
            className="absolute opacity-30 -top-28 -right-28"
          />
          <div className="relative z-10 pt-20 pr-36">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-sm">
              Dive into the cosmic fiesta with the Full Moon Party strain of magic mushroom liquid
              culture, where each drop is a VIP ticket to intergalactic enlightenment, sprinkled
              with cosmic chuckles and served up on Earth with a side of 🌕✨🍄.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <Image
          src="/images/bg/bg1.png"
          height={600}
          width={600}
          className="w-full rounded-md shadow-lg aspect-square"
        />
        <div className="flex flex-row w-full gap-2">
          {[...Array(4)].map((_, index) => (
            <div className="flex-1" key={index}>
              <Image
                src="/images/bg/bg.png"
                height={100}
                width={100}
                layout="responsive"
                className="rounded-md shadow-lg aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="p-4 text-black rounded-md shadow-lg border-neutral-800 bg-sky-200">
          <h2 className="text-2xl font-bold">Liquid Cultures</h2>
          <p className="text-sm">
            Liquid cultures are nutrient-rich solutions used for growing and rapidly propagating
            microorganisms, such as bacteria, fungi, and yeasts, in a controlled and efficient
            manner.
          </p>
        </div>
        <div className="flex">
          <Link
            href="/cart"
            className="w-full p-4 text-black bg-orange-600 rounded-md shadow-lg border-neutral-800"
          >
            <div className="relative flex flex-row justify-between">
              <span>Buy Now</span>
              <span className="font-bold">$20.00/10ml</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

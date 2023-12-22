import Image from 'next/image';

import Header from '../../components/header';
import Comments from '../../components/comments';

export default function ProductPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-2 px-4 py-10 mx-auto dark:text-white max-w-screen-2xl md:px-6">
        <div className="grid gap-4 mb-20 sm:grid-cols-2 lg:grid-cols-12">
          <div className="relative space-y-4 lg:col-span-5">
            <Image
              src="/images/strains/full-moon-party.png"
              height={1600}
              width={600}
              alt="alt"
              className="w-full !mt-0 rounded-md shadow-lg aspect-square bg-neutral-800/80"
            />
            <div className="grid w-full grid-cols-4 gap-4 sm:grid-cols-4">
              {[...Array(6)].map((_, index) => (
                <div key={index}>
                  <Image
                    src="https://inoculatetheworld.com/wp-content/uploads/2021/01/IMG_5360.jpg"
                    height={100}
                    width={100}
                    alt="alt"
                    className="w-full rounded-md shadow-lg aspect-square bg-neutral-800/80"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden space-y-4 lg:block lg:col-span-4">
            <div className="relative p-4 space-y-2 overflow-hidden border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <h2 className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300 inline-block">
                Strain
              </h2>
              <p className="text-2xl font-bold">Full Moon Party</p>
              <Image
                src="/images/strains/full-moon-party_noBackground.png"
                height={300}
                width={300}
                alt="alt"
                className="absolute opacity-30 -top-28 -right-28"
              />
            </div>

            <div className="flex flex-row w-full gap-4">
              <div className="flex-1 h-full space-y-4">
                <div className="p-4 bg-pink-100 rounded-md shadow-lg dark:bg-[#FF69B4] flex flex-row items-center justify-between">
                  <h2>Healthy & Safe</h2>
                  <Image
                    className="aspect-square"
                    src="/health.png"
                    alt="alt"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <div className="relative flex-1 h-full">
                <div className="text-black p-4 bg-pink-100 border border-[#ADD8E6] rounded-md shadow-lg dark:bg-[#ADD8E6] flex flex-row items-center justify-between">
                  <p className="text-sm">Guaranteed no contaminants</p>
                  <Image
                    className="aspect-square"
                    alt="alt"
                    src="/images/safe.png"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full gap-4">
              <div className="w-4/6">
                <div className="h-full p-4 text-black bg-yellow-200 rounded-md shadow-lg border-neutral-800">
                  <h2 className="text-2xl font-bold">Liquid Cultures</h2>
                  <p className="text-sm">
                    Liquid cultures are nutrient-rich solutions used for growing and rapidly
                    propagating microorganisms, such as bacteria, fungi, and yeasts, in a controlled
                    and efficient manner.
                  </p>
                </div>
              </div>

              <div className="w-2/6">
                <div className="flex items-center justify-center h-full p-4 bg-purple-100 border border-purple-500 rounded-md shadow-lg dark:bg-purple-500">
                  <Image
                    className="aspect-square"
                    alt="alt"
                    src="/quality.png"
                    height={150}
                    width={150}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-stretch w-full gap-4">
              <div className="w-1/12">
                <div className="flex flex-col h-full p-4 bg-red-100 border border-red-800 rounded-md shadow-lg dark:bg-red-900">
                  <div className="flex-grow">
                    <div className="flex items-center justify-center h-full">
                      <div className="font-mono origin-center transform -rotate-90 text-md whitespace-nowrap">
                        <span>20% Off This Week</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12">
                <div className="relative flex flex-col h-full p-4 mb-4 overflow-hidden rounded-md shadow-lg border-neutral-800 bg-sky-800">
                  <div className="flex-grow">
                    <Image
                      src="/icon.png"
                      height={300}
                      width={300}
                      alt="alt"
                      className="absolute opacity-30 -top-28 -right-28"
                    />
                    <div className="relative z-10 pr-36">
                      <h2 className="text-2xl font-bold">Description</h2>
                      <p className="text-sm">
                        Dive into the cosmic fiesta with the Full Moon Party strain of magic
                        mushroom liquid culture, where each drop is a VIP ticket to intergalactic
                        enlightenment, sprinkled with cosmic chuckles and served up on Earth with a
                        side of 🌕✨🍄.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center h-1 rounded-md shadow-lg bg-neutral-600"></div> */}
          </div>

          <div className="relative space-y-4 lg:col-span-3">
            <div className="hidden w-full flex-2 lg:block">
              <div className="flex flex-col h-full rounded-md shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Substrate:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      Hardwoods, sawdust
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Difficulty:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Fruiting Time:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      14 days from pinning
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Typical Yield:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      1-2 kg per log
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Cultivation Time:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">6 months</span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Incubation Period:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      30-60 days
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Fruiting Conditions:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      Low light, indirect sunlight
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Relative Humidity:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">90-95%</span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Temperature Range:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      20-24°C (68-75°F)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Comments />
      </div>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function MushroomImages({ isTrue }) {
  return (
    <>
      {isTrue ? (
        <>
          <Image
            src="/images/strains/full-moon-party.png"
            height={1600}
            width={600}
            alt="alt"
            className="w-full !mt-0 rounded-md shadow-lg aspect-square bg-gray-800/80"
          />
          <div className="sticky grid w-full grid-cols-4 gap-4 sm:grid-cols-4 top-24">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <Image
                  src="https://inoculatetheworld.com/wp-content/uploads/2021/01/IMG_5360.jpg"
                  height={100}
                  width={100}
                  alt="alt"
                  className="w-full rounded-md shadow-lg aspect-square bg-gray-800/80"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center min-h-[80vh] rounded-md shadow-lg bg-gray-800/80">
            <Image
              src="/no-mushroom.png"
              height={200}
              width={200}
              alt="alt"
              className="rounded-md aspect-square"
            />
          </div>
          <Link
            href="/"
            className="absolute inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black transition-colors bg-white rounded-md shadow top-5 right-5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9"
          >
            Upload an image
          </Link>

          <div className="sticky grid w-full grid-cols-4 gap-4 sm:grid-cols-4 top-24">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <Image
                  src="/no-mushroom.png"
                  height={100}
                  width={100}
                  alt="alt"
                  className="w-full p-10 rounded-md shadow-lg aspect-square bg-gray-800/80"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

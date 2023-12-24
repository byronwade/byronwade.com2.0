import Image from 'next/image';
import Link from 'next/link';

export default function MushroomImages({ isTrue }) {
  const imageRows = [
    [
      'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
    ],
    [
      'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      'https://docs.material-tailwind.com/img/team-3.jpg'
    ]
    // ... other rows
  ];

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
          <div className="sticky grid w-full grid-cols-2 gap-4 sm:grid-cols-2 top-24">
            {imageRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid w-full gap-4">
                {row.map((imageSrc, imageIndex) => (
                  <div key={imageIndex}>
                    <Image
                      src={imageSrc}
                      className="object-cover object-center h-auto max-w-full rounded-lg"
                      alt={`gallery-photo-${rowIndex}-${imageIndex}`}
                      width={1000} // Set appropriate width
                      height={2000} // Set appropriate height
                    />
                  </div>
                ))}
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

          <div className="sticky grid w-full grid-cols-2 gap-4 sm:grid-cols-2 top-24">
            {imageRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid w-full gap-4">
                {row.map((imageSrc, imageIndex) => (
                  <div key={imageIndex}>
                    <Image
                      src={imageSrc}
                      className="object-cover object-center h-auto max-w-full rounded-lg"
                      alt={`gallery-photo-${rowIndex}-${imageIndex}`}
                      width={1000} // Set appropriate width
                      height={2000} // Set appropriate height
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

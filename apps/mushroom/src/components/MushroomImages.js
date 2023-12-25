import Image from 'next/image';
import Link from 'next/link';

export default function MushroomImages({ CanEdit, isTrue }) {
  const imageRows = [
    // [
    //   'https://images.unsplash.com/photo-1519305124423-5ccccff55da9?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   'https://images.unsplash.com/photo-1630921121767-81e86d066a5d?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   'https://images.unsplash.com/photo-1586686804243-d763a9afb755?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // ],
    // [
    //   'https://images.unsplash.com/photo-1629457442277-918387fec70c?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   'https://images.unsplash.com/photo-1570161387493-1ad88c522eba?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   'https://images.unsplash.com/photo-1555726698-8248142dc630?q=80&w=3358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // ]
    [
      'https://fakeimg.pl/600x300?text=Mushroom+Image',
      'https://fakeimg.pl/600x800?text=Mushroom+Image',
      'https://fakeimg.pl/500x500?text=Mushroom+Image'
    ],
    [
      'https://fakeimg.pl/600x200?text=Mushroom+Image',
      'https://fakeimg.pl/600x1200?text=Mushroom+Image',
      'https://fakeimg.pl/800x300?text=Mushroom+Image'
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

          {CanEdit ? (
            <Link
              href="/"
              className="absolute inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black transition-colors bg-white rounded-md shadow top-5 right-5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9"
            >
              Upload an image
            </Link>
          ) : null}

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

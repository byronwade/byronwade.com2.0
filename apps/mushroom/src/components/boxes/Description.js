import Image from 'next/image';
export default function Description({ width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative flex flex-col h-full p-4 mb-4 overflow-hidden border-gray-800 rounded-md shadow-lg bg-light-blue-800">
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
              Dive into the cosmic fiesta with the Full Moon Party strain of magic mushroom liquid
              culture, where each drop is a VIP ticket to intergalactic enlightenment, sprinkled
              with cosmic chuckles and served up on Earth with a side of 🌕✨🍄.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

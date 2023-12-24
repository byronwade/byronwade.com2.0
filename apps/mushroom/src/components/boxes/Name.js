import Image from 'next/image';

export default function Name({ name, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden border rounded-md shadow-lg border-gray-800 bg-gray-900">
        <h2 className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
          Strain
        </h2>
        <p className="text-2xl font-bold text-white">{name}</p>
        <Image
          src="/images/strains/full-moon-party_noBackground.png"
          height={300}
          width={300}
          alt="alt"
          className="absolute opacity-30 -top-28 -right-28"
        />
      </div>
    </div>
  );
}

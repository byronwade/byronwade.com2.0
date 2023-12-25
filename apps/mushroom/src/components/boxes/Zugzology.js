import Link from 'next/link';
import Image from 'next/image';

export default function Zugz({ width }) {
  return (
    <Link
      href="https://www.zugzology.com"
      className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}
    >
      <div className="p-4 bg-blue-500 border border-blue-500 rounded-md shadow-lg">
        <Image src="/shroomageddon_black.png" height={1600} width={600} alt="alt" />
        <h2 className="mb-2 font-bold">Buy this Mushroom from Zugzology.com</h2>
      </div>
    </Link>
  );
}

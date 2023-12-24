import Image from 'next/image';
import Link from 'next/link';

export default function Poisonous({ isTrue, width }) {
  if (isTrue) {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="relative p-4 rounded-md shadow-lg bg-[#6A0DAD] flex md:flex-row justify-between h-full items-center flex-col">
          <Image
            src="/boxes/Poisonous.png"
            alt="alt"
            height={150}
            width={150}
            className="aspect-square max-h-[150px]"
          />
          <div className="flex flex-col justify-between pl-0 md:pl-10">
            <div>
              <h2 className="text-2xl font-bold">Poisonous Mushroom</h2>
              <p className="text-sm">
                Please be aware that the mushroom displayed is poisonous and can pose serious health
                risks if consumed or improperly handled; seek immediate medical attention if contact
                or ingestion occurs.
              </p>
            </div>
            <Link href="https://PoisonHelp.org" className="mt-6 text-sm hover:underline">
              Poison emergency? Call 1-800-222-1222 or visit PoisonHelp.org
            </Link>
          </div>
        </div>
      </div>
    );
  } else null;
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'react-feather';
import { track } from '@vercel/analytics';

export default function SearchBox({ item, width }) {
  return (
    <Link
      href={`/mushroom/${item.slug}`}
      target="_blank"
      onClick={() =>
        track('Click', {
          event: 'mushroom_search',
          mushroom: `https://www.shroomageddon.com/mushroom/${item.slug}`
        })
      }
      className={`hover:cursor-pointer group relative w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12 h-64 p-4 border rounded-md text-black bg-gray-300 border-gray-400 dark:border-gray-800 dark:bg-gray-900 overflow-hidden`}
    >
      <Image
        src={`/no-mushroom.png`}
        alt={item.common_name}
        height={60}
        width={60}
        className="items-center justify-center object-center text-center"
      />
      <div className="absolute z-20 flex bottom-5 left-5">
        <h1 className="text-xl font-bold text-black dark:text-white">{item.common_name}</h1>
      </div>
      <div className="absolute z-20 text-black opacity-100 dark:text-white top-5 right-5 group-hover:opacity-100">
        <ExternalLink className="w-5 h-5" />
      </div>
    </Link>
  );
}

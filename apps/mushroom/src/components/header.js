import Link from 'next/link';
import Image from 'next/image';

import { IconButton } from '../utils/wrapper';

import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full flex flex-col md:flex-row md:items-center gap-3 p-3 lg:px-4 md:h-16 supports-[backdrop-filter]:bg-white/60 bg-white/95 backdrop-blur dark:supports-[backdrop-filter]:bg-black/60 dark:bg-black/95">
      <div className="flex items-center w-full gap-8">
        <div className="flex items-center gap-2">
          <a
            className="flex flex-row items-center justify-center rounded focus-visible:bg-zinc-200 focus:ring-0 focus:outline-0"
            href="/"
          >
            <span className="sr-only">Home</span>
            <Image
              className="p-1 mr-2 bg-gray-300 rounded-lg"
              src="/shroomageddon_black.png"
              alt="Shroomageddon"
              width={50}
              height={50}
            />
            <span className="hidden text-2xl font-black md:block">Shroomageddon</span>
          </a>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/upload" className="mr-4 text-sm hover:underline">
            Upload a Shroom
          </Link>
          <div className="flex items-center h-8 px-3 text-xs font-medium text-center bg-[#503014] text-white rounded-full">
            Beta
          </div>

          <ThemeSwitch />

          {/* <button
            className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-500 transition-colors border rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 hover:text-gray-900 shrink-0"
            id="menu-trigger-button"
            type="button"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <img
              alt="bcw1995"
              width={32}
              height={32}
              className="rounded-full select-none shrink-0"
              src="https://vercel.com/api/www/avatar/QAmJlLcxVwNZxmxaJtzppe1n?s=64"
            />
            <span className="sr-only">Toggle Menu</span>
          </button> */}
        </div>
      </div>
    </header>
  );
}

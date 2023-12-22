import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-20 flex flex-col w-full gap-3 p-2 text-black bg-white shadow-2xl md:flex-row md:items-center">
      <div className="flex items-center w-full gap-8">
        <div className="flex items-center gap-2">
          <a
            className="flex flex-row items-center justify-center rounded focus-visible:bg-zinc-200 focus:ring-0 focus:outline-0"
            href="/"
          >
            <span className="sr-only">Home</span>
            <Image
              className="p-1 mr-2 rounded-lg bg-neutral-300"
              src="/shroomageddon_black.png"
              alt="Shroomageddon"
              width={50}
              height={50}
            />
            <span className="hidden text-2xl font-black md:block">Shroomageddon</span>
          </a>
          <div className="hidden md:flex">
            <div className="flex items-center w-full gap-2" />
          </div>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Link href="/upload" className="mr-4 text-sm hover:underline">
            Upload a Shroom
          </Link>
          <div className="flex items-center h-8 px-3 text-xs font-medium text-center bg-[#503014] text-white rounded-full">
            Beta
          </div>
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

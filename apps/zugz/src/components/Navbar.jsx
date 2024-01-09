'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search, Menu, User } from 'react-feather';

import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 left-0 z-30 flex items-center w-full p-2 px-4 md:px-6">
        <div className="flex-none block md:hidden">
          <button
            aria-label="Open mobile menu"
            className="p-2 mr-1 bg-white border rounded-md border-neutral-200 dark:bg-black dark:border-neutral-800 md:hidden"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between w-full">
          <Link
            className="h-[34px] mr-1 flex items-center justify-center w-auto lg:mr-6 bg-black p-2 rounded-md border border-neutral-800"
            href="/"
          >
            <div className="flex flex-row space-x-2">
              <Image src="/logo.png" alt="Zugs" width={11} height={11} />
              <span className="text-sm font-bold text-white">Zugzology</span>
            </div>
          </Link>
          <ul className="h-[34px] hidden gap-6 text-sm md:flex md:items-center bg-white border-neutral-200 dark:bg-black p-2 rounded-md border dark:border-neutral-800">
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/"
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/subscriptions"
              >
                Subscription Boxes
              </Link>
            </li> */}
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/liquid-cultures"
              >
                Liquid Cultures
              </Link>
            </li>
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/agar-plates"
              >
                Agar Plates
              </Link>
            </li>
            {/* <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/products"
              >
                Tincture
              </Link>
            </li>
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/zugzblend"
              >
                ZugzBlend
              </Link>
            </li> */}
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/strains"
              >
                Strains
              </Link>
            </li>
            {/* <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/strains"
              >
                Cultures x CBD
              </Link>
            </li>
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/merch"
              >
                Merch
              </Link>
            </li> */}
            <li>
              <Link
                className="text-black underline-offset-4 hover:text-black hover:underline dark:text-white dark:hover:text-neutral-300"
                href="/learn"
              >
                Learn
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            {/* <div className="hidden mx-1 md:flex">
							<Link href="/">
								<span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-black">
									<svg className="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true">
										<circle cx={3} cy={3} r={3} />
									</svg>
									View Our New Products
								</span>
							</Link>
						</div> */}
            <div className="flex bg-white border rounded-md border-neutral-200 dark:bg-black dark:border-neutral-800">
              <div className="relative flex p-2 text-black transition-colors cursor-pointer dark:border-neutral-700 dark:text-white">
                <ThemeSwitch />
              </div>

              <Link href="/search" aria-label="Open Search">
                <div className="relative flex p-2 text-black transition-colors dark:border-neutral-700 dark:text-white">
                  <Search className="h-4 transition-all ease-in-out hover:scale-110" />
                </div>
              </Link>

              <Link href="/search" aria-label="Open Search">
                <div className="relative flex p-2 text-black transition-colors dark:border-neutral-700 dark:text-white">
                  <User className="h-4 transition-all ease-in-out hover:scale-110" />
                </div>
              </Link>

              {/*$*/}
              <Link href="/cart" aria-label="Open cart">
                <div className="relative flex p-2 text-black transition-colors dark:border-neutral-700 dark:text-white">
                  <ShoppingBag className="h-4 transition-all ease-in-out hover:scale-110" />
                  <div className="absolute flex items-center justify-center right-0 top-0 z-10 h-4 w-4 rounded-full bg-red-500 text-[9px] font-medium text-white">
                    1
                  </div>
                </div>
              </Link>
              {/*/$*/}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

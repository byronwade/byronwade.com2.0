import Link from 'next/link';
import Image from 'next/image';
import { Search, Moon, Menu } from 'react-feather';
import { FloatingAI } from './floatingAI';

export default function Header() {
  return (
    <div className="header fixed sm:fixed xl:static left-0 top-0 right-0 h-[70px] w-full flex justify-between items-center px-4 pr-4 z-10 bg-white dark:bg-black dark:border-b dark:border-b-neutral-800">
      <div className="flex flex-row">
        <Link href="/" className="mr-2">
          <Image src="https://copyui.com/favicon.ico" width={40} height={40} alt="Favicon" />
        </Link>
        <FloatingAI />
      </div>
      <div className="flex items-center justify-end">
        <button className=" py-2 text-sm ml-2 text-black dark:text-white dark:hover:bg-dark-500  hover:bg-light-100 transition px-3 rounded-full hidden sm:hidden md:block lg:block xl:block">
          <Moon strokeWidth="1" className="w-5 h-5" />
        </button>
        <div className="flex h-fit w-fit font-[400] ">
          <Link
            href="/signin"
            className="py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="py-1.5 text-sm ml-2 bg-black text-white dark:bg-white dark:text-black px-3 rounded-lg"
          >
            Sign up
          </Link>
        </div>
        <button className="py-2 text-sm ml-2 text-black dark:text-white px-3 rounded-full block md:block lg:block xl:hidden">
          <Menu strokeWidth="1" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

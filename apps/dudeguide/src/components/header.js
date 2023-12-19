import Link from 'next/link';
import Image from 'next/image';
import { Moon, Menu } from 'react-feather';
import { FloatingAI } from './floatingAI';

export default function Header() {
  return (
    <div className="fixed sm:fixed py-1 xl:static left-0 top-0 right-0 w-full flex justify-between items-center px-4 pr-4 z-10 bg-white dark:bg-black dark:border-b dark:border-b-neutral-800">
      <div className="flex flex-row justify-start space-x-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/ai.png"
            className="border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 p-2 rounded-lg"
            width={75}
            height={75}
            alt="AI Logo"
          />
        </Link>
        <FloatingAI />
        <div className="flex flex-row items-center space-x-4">
          <Link href="/" className="flex text-sm w-auto whitespace-nowrap hover:underline">
            Home
          </Link>
          <Link href="/" className="flex text-sm w-auto whitespace-nowrap hover:underline">
            Santa Cruz
          </Link>
          <Link href="/" className="flex text-sm w-auto whitespace-nowrap hover:underline">
            San Jose
          </Link>
        </div>
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

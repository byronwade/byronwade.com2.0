'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Moon, Menu } from 'react-feather';
import { FloatingAI } from './floatingAI';

import { createClient } from '../utils/supabase/client';

export default function Header() {
  const supabase = createClient();

  const handleSignOut = async () => {
    const { data, error } = await supabase.auth.signOut();
    console.log('data', data);
    console.log('error', error);
  };
  return (
    <div className="header fixed sm:fixed xl:static left-0 top-0 right-0 h-[70px] w-full flex justify-between items-center px-4 pr-4 z-10 bg-white dark:bg-black dark:border-b dark:border-b-neutral-800">
      <div className="flex flex-row">
        <Link href="/" className="mr-2">
          <Image src="https://copyui.com/favicon.ico" width={40} height={40} alt="Favicon" />
        </Link>
        <FloatingAI />
      </div>
      <div className="flex items-center justify-end">
        <button className="hidden px-3 py-2 ml-2 text-sm text-black transition rounded-full dark:text-white dark:hover:bg-dark-500 hover:bg-light-100 sm:hidden md:block lg:block xl:block">
          <Moon strokeWidth="1" className="w-5 h-5" />
        </button>
        <div className="flex h-fit w-fit font-[400] ">
          <Link
            href="/login"
            className="py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg"
          >
            Login
          </Link>
          <button
            className="py-1.5 text-sm ml-2 bg-black text-white dark:bg-white dark:text-black px-3 rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
        <button className="block px-3 py-2 ml-2 text-sm text-black rounded-full dark:text-white md:block lg:block xl:hidden">
          <Menu strokeWidth="1" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

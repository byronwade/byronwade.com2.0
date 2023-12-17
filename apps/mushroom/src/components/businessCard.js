import Link from 'next/link';
import { ArrowUpRight } from 'react-feather';
import { ScrollingImage } from './scrollingImage';

export function BusinessCard(business) {
  return (
    <div role="list-item" className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4">
      <Link href="/" className="hover:opacity-90 transition">
        <div
          className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
          alt=""
        >
          <ScrollingImage src={business.screenshot} alt="Blob Image" />
        </div>
      </Link>
      <div className="flex justify-between items-center mt-2">
        <Link href="/" className="">
          <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
            {business.name}
          </h2>
        </Link>
        <div className="flex justify-end gap-2 font-normal">
          <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
            <ArrowUpRight strokeWidth="1" />
          </button>
        </div>
      </div>
    </div>
  );
}

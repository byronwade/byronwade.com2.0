import Link from 'next/link';
import { Related } from '../../components/related';
import { ScrollingImage } from '../../components/scrollingImage';
import Header from '../../components/header';
import { ArrowUpRight } from 'react-feather';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env['SUPABASE_URL'], process.env['SUPABASE_API_KEY']);
const { data: businessData } = await supabase.from('business').select('*');

const business = businessData[0];

export default function Page() {
  return (
    <div className="main w-full max-h-[100vh] scrollbar-hide overflow-y-auto">
      <Header />
      <div className="p-10 text-center">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white  animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
            {business.name}
          </h1>
          <p className="text-dark-200 dark:text-gray-400 mt-4 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
            {business.description}
          </p>
          <div className="flex justify-center gap-2.5 mb-4 mt-2">
            <time className="opacity-60 text-xs" dateTime="2023-08-24T09:04:32.048Z">
              Last Updated 3m ago
            </time>
            <span className="opacity-60 text-xs">·</span>
            <span className="opacity-60 text-xs">4.1K views</span>
          </div>
        </div>
        <div className="flex flex-row space-x-4 justify-center">
          {business?.email ? (
            <a target="_blank" href={`mailto:${business.email}`}>
              <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                Email Us
              </button>
            </a>
          ) : (
            <Link href="/edit">
              <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                Add a email
              </button>
            </Link>
          )}
          {business?.website ? (
            <Link target="_blank" href={business.website}>
              <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                Visit Website
                <ArrowUpRight strokeWidth="1" />
              </button>
            </Link>
          ) : (
            <Link href="/edit">
              <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                Add a website
              </button>
            </Link>
          )}
          {business?.phone ? (
            <a target="_blank" href={`tel:${business.phone}`}>
              <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                {business.phone}
              </button>
            </a>
          ) : (
            <Link href="/edit">
              <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                Add a phone number
              </button>
            </Link>
          )}
          {business?.address ? (
            <Link target="_blank" href={business.google_maps_link}>
              <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                Get Directions
              </button>
            </Link>
          ) : (
            <Link href="/edit">
              <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                Add a location
              </button>
            </Link>
          )}
        </div>
        {business.categories && (
          <div className="flex flex-wrap justify-center mt-4">
            {business.categories.map((category) => (
              <div
                key={category.title}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full mr-2 mb-2"
              >
                {category.title}
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-4">
          <Link href="/" className="text-sm hover:underline text-teal-600">
            Is this info incorrect? Make changes here
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-[80%] p-5 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
          <ScrollingImage src={business.screenshot} alt="Blob Image" />
        </div>
      </div>
      <div className="max-w-lg mx-auto w-full px-4">
        <div className="columns-2 gap-4 pt-9 md:columns-3">
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Type</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/personal"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/photography"
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/motion"
                >
                  Motion
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Style</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/black-and-white"
                >
                  Black &amp; White
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/minimal"
                >
                  Minimal
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/clean"
                >
                  Clean
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/transitions"
                >
                  Transitions
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/small-type"
                >
                  Small Type
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/horizontal-scrolling"
                >
                  Horizontal Scrolling
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Font</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/circular-std"
                >
                  Circular Std
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Database</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/mysql"
                >
                  MySQL
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Platform</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/wordpress"
                >
                  WordPress
                </Link>
              </li>
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/flywheel"
                >
                  Flywheel
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Language</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/php"
                >
                  PHP
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">Analytics</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/google-analytics"
                >
                  Google Analytics
                </Link>
              </li>
            </ul>
          </div>
          <div className="break-inside-avoid flex-col gap-1 pb-4">
            <h4 className="font-medium opacity-40">CDN</h4>
            <ul className="grid list-none">
              <li>
                <Link
                  className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                  href="/websites/cloudflare"
                >
                  Cloudflare
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Related />
    </div>
  );
}

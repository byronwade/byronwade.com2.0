import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-center w-full py-10 space-y-4 text-center border-t border-blue-gray-50 dark:border-gray-900 md:justify-between">
      <div className="w-full font-normal">&copy; 2023 Shroomageddon.com</div>
      <div className="text-xs font-normal text-gray-500">
        Designed and Developed by{' '}
        <Link className="text-blue-500 hover:underline" href="https://www.byronwade.com">
          byronwade.com
        </Link>
      </div>
      {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            href="/"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Upload a shroom
          </Link>
        </li>
      </ul> */}
    </footer>
  );
}

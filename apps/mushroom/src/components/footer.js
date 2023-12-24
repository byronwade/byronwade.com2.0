import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center w-full p-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 dark:border-gray-900 md:justify-between">
      <div className="font-normal">&copy; 2023 Shroomageddon.com</div>
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

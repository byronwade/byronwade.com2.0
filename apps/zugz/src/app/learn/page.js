import Image from 'next/image';
import Link from 'next/link';

import { ExternalLink } from 'react-feather';

const contentData = [
  {
    category: 'Mycology Basics',
    date: '15 Mar 2022',
    title: 'Introduction to Mycology: The Fascinating World of Fungi',
    description:
      'Explore the basics of mycology and discover the diverse roles fungi play in our ecosystem and daily lives.',
    imagesrc: '/images/bg/bg.png'
  },
  {
    category: 'Fungi Identification',
    date: '22 Mar 2022',
    title: "Mastering Mushroom Identification: A Beginner's Guide",
    description:
      'Learn the art of identifying different mushroom species with tips on recognizing key characteristics.',
    imagesrc: '/images/bg/bg1.png'
  },
  {
    category: 'Mycological History',
    date: '29 Mar 2022',
    title: 'Historical Perspectives: The Evolution of Mycology',
    description:
      'Dive into the history of mycology and understand how the study of fungi has evolved over the centuries.',
    imagesrc: '/images/bg/bg2.png'
  },
  {
    category: 'Culinary Fungi',
    date: '5 Apr 2022',
    title: 'Edible Fungi: A Culinary Adventure',
    description:
      'Uncover the world of edible mushrooms and their use in global cuisines, including safety tips for foraging.',
    imagesrc: '/images/bg/bg.png'
  },
  {
    category: 'Medicinal Mushrooms',
    date: '12 Apr 2022',
    title: 'Mushrooms in Medicine: Healing with Fungi',
    description:
      'Explore the medicinal properties of mushrooms and their potential benefits in modern healthcare.',
    imagesrc: '/images/bg/bg1.png'
  },
  {
    category: 'Fungi in Ecosystems',
    date: '19 Apr 2022',
    title: 'Fungi as Ecosystem Engineers',
    description:
      'Discover how fungi contribute to ecosystem health and balance, from decomposers to symbiotic relationships.',
    imagesrc: '/images/bg/bg2.png'
  },
  {
    category: 'Mushroom Cultivation',
    date: '26 Apr 2022',
    title: 'Growing Mushrooms at Home: A Practical Guide',
    description:
      'Step-by-step instructions on cultivating your own mushrooms, covering various methods suitable for beginners.',
    imagesrc: '/images/bg/bg.png'
  },
  {
    category: 'Fungal Ecology',
    date: '3 May 2022',
    title: 'Fungi and Their Environmental Interactions',
    description:
      'Understand the ecological significance of fungi and their interaction with other organisms and the environment.',
    imagesrc: '/images/bg/bg1.png'
  },
  {
    category: 'Mycorrhizal Networks',
    date: '10 May 2022',
    title: 'The Wood Wide Web: Mycorrhizal Networks Explained',
    description:
      "Learn about mycorrhizal networks, the 'internet of the forest', and how they facilitate plant communication.",
    imagesrc: '/images/bg/bg2.png'
  },
  {
    category: 'Psychoactive Fungi',
    date: '17 May 2022',
    title: 'Psychedelic Mushrooms: Mycology and Mind',
    description:
      'An exploration of psychoactive mushrooms, discussing their historical use, effects, and modern research.',
    imagesrc: '/images/bg/bg.png'
  }
];

export default function Learn() {
  function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  function getRandomWidthsForThree() {
    let widths = [];
    let total = 12;

    // First random width, ensuring at least 3 for the smallest
    let random1 = Math.floor(Math.random() * (total - 6 - 3)) + 3;

    // Second random width, ensuring at least 3 for the smallest
    let random2 = Math.floor(Math.random() * (total - random1 - 3 - 3)) + 3;

    // The third width is whatever is left, but must be at least 3
    let random3 = total - random1 - random2;

    // If the last width is less than 3, adjust the other widths down
    if (random3 < 3) {
      let adjustment = 3 - random3;
      if (random1 > random2) {
        random1 -= adjustment;
      } else {
        random2 -= adjustment;
      }
      random3 = 3;
    }

    widths.push(random1, random2, random3);
    return widths;
  }

  const rows = chunkArray(contentData, 3); // This function needs to be defined to split the data into rows of 3

  return (
    <div className="flex flex-col gap-4 px-4 py-10 mx-auto max-w-screen-2xl">
      <div className="py-12 overflow-hidden lg:py-20">
        <div className="container px-8 mx-auto sm:px-16 xl:px-20">
          <div className="mx-auto ">
            <div className="w-full cursor-pointer">
              <a
                className="grid gap-8 lg:grid-cols-2 lg:gap-16"
                href="/blog/postgres-language-server-implementing-parser"
              >
                <div className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-md border border-neutral-800">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      position: 'absolute',
                      inset: '0px'
                    }}
                  >
                    <Image
                      alt="blog thumbnail"
                      src="https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flwx-how-design-works-at-supabase%2Fdesign-at-supabase-thumb.jpg&w=3840&q=75"
                      className="object-cover"
                      width={600}
                      height={300}
                      style={{
                        position: 'absolute',
                        inset: '0px',
                        boxSizing: 'border-box',
                        padding: '0px',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0px',
                        height: '0px',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 text-sm text-light">
                    <span>8 December 2023</span>
                    <span>•</span>
                    <span>26 minute read</span>
                  </div>
                  <div>
                    <h2 className="h2">Postgres Language Server: implementing the Parser</h2>
                    <p className="text-xl p">
                      A detailed analysis of our iterations to implement a Parser for Postgres
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex-wrap items-center flex-grow hidden gap-2 lg:flex">
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-brand-600 bg-brand-200 hover:bg-brand-400 border-brand-600 focus-visible:border-brand-300 focus-visible:outline-brand-600 shadow-sm text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">All</span>{' '}
          </button>
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">Product</span>{' '}
          </button>
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">Company</span>{' '}
          </button>
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">Postgres</span>{' '}
          </button>
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">Developers</span>{' '}
          </button>
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">Engineering</span>{' '}
          </button>
          <button
            type="button"
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border border-neutral-800 text-foreground bg-transparent border-strong hover:border-stronger focus-visible:outline-border-strong text-xs px-2.5 py-1"
          >
            {' '}
            <span className="truncate">Launch Week</span>{' '}
          </button>
        </div>
        <div className="w-full lg:max-w-[240px] xl:max-w-[280px]" style={{ opacity: 1 }}>
          <div className="grid w-full gap-2 text-sm leading-4 md:grid md:grid-cols-12">
            <div className="col-span-12">
              <div className="">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id=""
                    name=""
                    placeholder="Search blog"
                    type="search"
                    className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-neutral-800 border-control text-sm leading-4 px-3 py-2 pl-10"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-foreground-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sbuiIcon"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full p-10 space-y-10">
        {rows.map((row, rowIndex) => {
          // Get random widths for each set of 3 items
          const widths = getRandomWidthsForThree();
          return (
            <div className="flex flex-row w-full gap-10" key={rowIndex}>
              {row.map((item, itemIndex) => (
                <div
                  className={`hover:cursor-pointer group relative w-${widths[itemIndex]}/12 h-64 p-4 border rounded-md border-neutral-800 bg-neutral-100 dark:bg-neutral-900 overflow-hidden`}
                  key={itemIndex}
                >
                  {/* Text container */}
                  <div className="absolute z-20 flex bottom-5 left-5">
                    <h1 className="text-xl font-bold text-white">{item.title}</h1>
                  </div>

                  {/* Feather icon, hidden by default and shown on hover */}
                  <div className="absolute z-20 text-white opacity-0 top-5 right-5 group-hover:opacity-100">
                    <ExternalLink className="w-5 h-5" />
                  </div>

                  {/* Image */}
                  <Image
                    alt="blog thumbnail"
                    src={item.imagesrc}
                    width={1200}
                    height={600}
                    className="absolute inset-0 z-10 object-cover w-full h-full transition-all duration-300 ease-in-out bg-black rounded-md opacity-50 hover:blur-sm"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

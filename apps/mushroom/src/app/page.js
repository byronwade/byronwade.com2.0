'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

import { Spinner } from '@material-tailwind/react';

import Header from '../components/header';
import Footer from '../components/footer';
import SearchBox from '../components/boxes/SearchBox';

import algoliasearch from 'algoliasearch/lite';

// Algolia configuration
const algoliaAppId = process.env.NEXT_PUBLIC_AGOLIA_APP_ID;
const algoliaApiKey = process.env.NEXT_PUBLIC_AGOLIA_API_KEY;

const algoliaIndexName = 'mushrooms';
const algoliaClient = algoliasearch(algoliaAppId, algoliaApiKey);
const algoliaIndex = algoliaClient.initIndex(algoliaIndexName);

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const widthsRef = useRef(null); // useRef to store the widths

  const fetchSearchResults = async () => {
    setIsLoading(true);
    let hits = []; // Define hits outside of the try block

    try {
      // Perform a search using Algolia
      const { hits: searchHits } = await algoliaIndex.search(searchTerm);
      console.log('Algolia hits:', searchHits);

      if (!searchHits || searchHits.length === 0) {
        throw new Error(`Error: ${searchHits.status}`);
      }

      hits = searchHits; // Assign the hits inside the try block
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
    return hits;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchPerformed(true);
    setResults([]); // Clear previous results
    const newResults = await fetchSearchResults();
    if (Array.isArray(newResults)) {
      track('Search', {
        query: searchTerm,
        results: newResults.length
      });
      setResults(newResults);
    }

    // Generate new widths for each row of the new results
    const numberOfRows = Math.ceil(newResults.length / 3);
    const newWidths = Array.from({ length: numberOfRows }, () => getRandomWidthsForThree());
    saveWidthsToLocalStorage(newWidths);
  };

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

  function saveWidthsToLocalStorage(widths) {
    localStorage.setItem('searchWidths', JSON.stringify(widths));
  }

  function getWidthsFromLocalStorage() {
    // Check if window is defined (i.e., running on client-side)
    if (typeof window !== 'undefined') {
      const storedWidths = localStorage.getItem('searchWidths');
      return storedWidths ? JSON.parse(storedWidths) : null;
    }
    return null; // Return a default value if on server-side
  }

  useEffect(() => {
    // Reset widthsRef when results change
    widthsRef.current = [];
  }, [results]);

  function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  const widths = getWidthsFromLocalStorage();
  const rows = chunkArray(results, 3);

  return (
    <>
      <Header />
      <main className="flex-1 mt-16">
        <div className="flex py-[10vh] my-12 justify-center items-center">
          <div className="relative flex flex-col items-center w-full px-6">
            <div className="mb-10">
              <h1 className="text-lg font-bold">Quick Notice</h1>
              <p className="max-w-md text-sm">
                Some data may not be accurate, we are in the process of improving the data while
                Shroomageddon is still in beta, if anyone would like to contribute or suggest a
                feature please email me at{' '}
                <a href="mailto:shroomdatabase@gmail.com" className="underline">
                  shroomdatabase@gmail.com
                </a>
              </p>
              {/* <Progress className="h-2" value={loadingProgress} /> */}
            </div>
            <div className="overflow-hidden max-w-[90%] z-10 flex flex-col w-full sm:max-w-md m-auto shadow-lg divide-zinc-600 min-h-12 bg-gray-900 shadow-black/40 rounded-[24px]">
              <div className="relative z-10 flex items-center flex-1 min-w-0 px-3 bg-gray-900 md:pl-4">
                <form className="w-full h-full" onSubmit={handleSearch}>
                  <div className="relative flex items-center w-full min-h-full transition-all duration-300 h-[47px]">
                    <label htmlFor="home-prompt" className="sr-only">
                      Search
                    </label>
                    <input
                      className="h-[47px] flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white text-sm bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pr-2 leading-relaxed py-3 pl-1 [&_textarea]:px-0"
                      spellCheck="true"
                      placeholder="Search for a shroom..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {isLoading ? (
                      <Spinner />
                    ) : (
                      <button
                        className="shrink-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white hover:bg-gray-800 flex items-center justify-center focus-visible:ring-0 focus-visible:bg-gray-800 rounded-full w-[28px] h-[28px]"
                        type="submit"
                        disabled=""
                        id="send-button"
                        data-state="closed"
                      >
                        <span className="sr-only">Send</span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="block w-full mx-auto mt-10">
              {console.log('Rendering states:', {
                isLoading,
                searchPerformed,
                results,
                resultsLength: results.length
              })}

              {!isLoading && searchPerformed && results.length === 0 ? (
                <div className="text-center">
                  <p className="w-full p-4 mx-auto">No data</p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-black transition-colors bg-white rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90"
                  >
                    Upload a shroom
                  </Link>
                </div>
              ) : (
                <div className={`relative space-y-4 w-full`}>
                  {rows.map((row, rowIndex) => {
                    const rowWidths = widths && widths[rowIndex] ? widths[rowIndex] : [4, 4, 4];

                    return (
                      <div
                        className="flex flex-col items-stretch w-full gap-4 md:flex-row"
                        key={rowIndex}
                      >
                        {row.map((item, itemIndex) => (
                          <SearchBox
                            width={{
                              sm: 12,
                              md: rowWidths[itemIndex],
                              lg: rowWidths[itemIndex]
                            }}
                            item={item}
                            key={itemIndex}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

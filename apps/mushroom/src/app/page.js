'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { ExternalLink } from 'react-feather';
import Header from '../components/header';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const widthsRef = useRef(null); // useRef to store the widths

  async function fetchSearchResults() {
    const response = await fetch(`/api/search?query=${searchTerm}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
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

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchPerformed(true);
    setIsLoading(true);

    try {
      const responseData = await fetchSearchResults();

      if (Array.isArray(responseData.data)) {
        setResults(responseData.data);
        // Generate new widths for each row of the new results
        const numberOfRows = Math.ceil(responseData.data.length / 3);
        const newWidths = Array.from({ length: numberOfRows }, () => getRandomWidthsForThree());
        saveWidthsToLocalStorage(newWidths);
        track('Search', {
          query: searchTerm,
          payload: responseData.data
        });
      } else {
        setResults([]);
        saveWidthsToLocalStorage([]);
      }
    } catch (error) {
      console.error('There was an error:', error);
      setResults([]);
      saveWidthsToLocalStorage([]);
    } finally {
      setIsLoading(false);
    }
  };

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
              <h1 className="text-lg font-bold dark:text-white">Quick Notice</h1>
              <p className="max-w-md text-sm dark:text-white">
                Some data may not be accurate, we are in the process of improving the data while
                Shroomageddon is still in beta, if anyone would like to contribute or suggest a
                feature please email me at{' '}
                <a href="mailto:bw@wadesinc.io" className="underline">
                  bw@wadesinc.io
                </a>
              </p>
            </div>
            <div className="overflow-hidden max-w-[90%] z-10 flex flex-col w-full sm:max-w-md m-auto shadow-lg divide-zinc-600 min-h-12 bg-gray-900 shadow-black/40 rounded-[24px]">
              <div className="relative z-10 flex items-center flex-1 min-w-0 px-3 bg-gray-900 md:pl-4">
                <form className="w-full h-full" onSubmit={handleSearch}>
                  <div
                    className="relative flex items-center w-full min-h-full transition-all duration-300 h-fit"
                    style={{ height: 47 }}
                  >
                    <label htmlFor="home-prompt" className="sr-only">
                      Search
                    </label>
                    <input
                      className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white text-sm bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pr-2 leading-relaxed py-3 pl-1 [&_textarea]:px-0"
                      style={{ colorScheme: 'dark', height: '47px !important' }}
                      spellCheck="true"
                      rows={1}
                      placeholder="Search for a shroom..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
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

              {isLoading ? (
                <div className="w-full p-4 mx-auto mb-10 text-center">
                  <div className="mx-auto spinner"></div>
                </div>
              ) : !isLoading && searchPerformed && results.length === 0 ? (
                <div className="text-center dark:text-white">
                  <p className="w-full p-4 mx-auto">No data</p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-black transition-colors bg-white rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90"
                  >
                    Upload a shroom
                  </Link>
                </div>
              ) : (
                <div className="w-full p-10 space-y-10">
                  {rows.map((row, rowIndex) => {
                    const rowWidths = widths && widths[rowIndex] ? widths[rowIndex] : [4, 4, 4];

                    return (
                      <div className="flex flex-row w-full gap-10" key={rowIndex}>
                        {row.map((item, itemIndex) => (
                          <div
                            className={`hover:cursor-pointer group relative w-${rowWidths[itemIndex]}/12 h-64 p-4 border rounded-md border-neutral-800 bg-neutral-900 overflow-hidden`}
                            key={itemIndex}
                          >
                            <div className="absolute z-20 flex bottom-5 left-5">
                              <h1 className="text-xl font-bold text-white">{item.common_name}</h1>
                            </div>
                            <div className="absolute z-20 text-white opacity-0 top-5 right-5 group-hover:opacity-100">
                              <ExternalLink className="w-5 h-5" />
                            </div>
                          </div>
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
    </>
  );
}

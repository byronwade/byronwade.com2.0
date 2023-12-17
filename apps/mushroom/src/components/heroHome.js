import Image from 'next/image';
export default function HeroHome() {
  const isLoading = false;
  return (
    <div className="flex py-[26vh] my-12 justify-center items-center">
      <div className="flex relative flex-col w-full items-center px-6">
        <div className="max-w-[90%] absolute bottom-0 z-10 flex flex-col w-full sm:max-w-lg m-auto">
          <div style={{ height: 0, transformOrigin: '50% 50% 0px' }} />
          <div className="flex items-center flex-1 min-w-0 px-3 md:pl-4 relative z-10">
            <form className="w-full h-full">
              <div
                className="relative w-full flex items-center transition-all duration-300 min-h-full"
                style={{ height: 44 }}
              >
                <div className="w-full drop-shadow mb-safe">
                  <div className="w-full max-w-md space-y-4 mx-auto">
                    <form
                      onSubmit={null}
                      className="flex w-full flex-row items-center bg-black dark:bg-white px-1 rounded-lg"
                    >
                      <input
                        autoComplete="on"
                        type="text"
                        placeholder="find any business, service or product"
                        className="h-10 w-full resize-none bg-transparent dark:text-black dark:placeholder:text-neutral-800 px-2 font-mono text-base text-white placeholder:text-gray-400 sm:text-sm border-0 outline-none ring-0 focus:ring-0 transition-all duration-300"
                        name="prompt"
                      />

                      {isLoading ? (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            stroke="currentColor"
                            strokeWidth={4}
                            cx={12}
                            cy={12}
                            r={10}
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      ) : (
                        <button
                          type="submit"
                          aria-disabled={isLoading}
                          className={`flex aspect-square h-8 w-8 items-center justify-center rounded-lg text-white dark:text-black bg-white
              ${isLoading ? 'text-black' : ''}
              `}
                        >
                          <Image
                            src="/ai.png"
                            alt="arrow-right"
                            className="lucide lucide-corner-down-left shrink-0 -ml-px"
                            width={18}
                            height={18}
                            strokeWidth="1.5"
                          />
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute flex flex-wrap items-center justify-center max-w-full gap-2 px-4 mx-auto mt-6 text-sm top-full whitespace-nowrap">
          <button className="rounded-full border border-zinc-200 px-2 py-0.5 inline-flex gap-1 items-center whitespace-nowrap select-none hover:border-zinc-800 transition-colors">
            Product categories
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="rounded-full border border-zinc-200 px-2 py-0.5 inline-flex gap-1 items-center whitespace-nowrap select-none hover:border-zinc-800 transition-colors">
            Hero section
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="rounded-full border border-zinc-200 px-2 py-0.5 inline-flex gap-1 items-center whitespace-nowrap select-none hover:border-zinc-800 transition-colors">
            Contact form
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="rounded-full border border-zinc-200 px-2 py-0.5 inline-flex gap-1 items-center whitespace-nowrap select-none hover:border-zinc-800 transition-colors">
            Ecommerce dashboard
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

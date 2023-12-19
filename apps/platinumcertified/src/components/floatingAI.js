import Image from 'next/image';

export async function FloatingAI() {
  const isLoading = false;

  return (
    <div className="w-full drop-shadow mb-safe">
      <div className="w-full max-w-md space-y-4 mx-auto">
        <form
          onSubmit={null}
          className="flex h-fit w-full flex-row items-center rounded-lg bg-black dark:bg-white px-1 shadow-lg"
        >
          <input
            autoComplete="on"
            type="text"
            placeholder="Search for any buisness..."
            className="h-10 w-full resize-none bg-transparent dark:text-black dark:placeholder:text-neutral-800 px-2 text-base text-white placeholder:text-gray-400 sm:text-sm border-0 outline-none ring-0 focus:ring-0 transition-all duration-300"
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
  );
}

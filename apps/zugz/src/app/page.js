import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <div
        className="relative flex items-center justify-center w-full overflow-hidden -mt-14 h-96"
        style={{ boxShadow: 'inset 0 10px 15px -10px rgba(0, 0, 0, 0.5)' }}
      >
        <Image
          src="/images/bg/bg.png"
          alt="ZugZug"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 object-cover w-full h-full transition-all duration-300 ease-in-out bg-black rounded-md opacity-50 blur-sm"
        />
      </div>
      <div className="flex flex-col gap-4 p-2 px-4 py-10 mx-auto max-w-screen-2xl md:px-6">
        <div className="flex gap-4">
          <div className="w-1/2 border-black">
            <div className="p-4 mb-4 border rounded-md border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              Testing
            </div>
          </div>
          <div className="w-2 min-h-full rounded-md bg-zugz-500"></div>
          <div className="w-1/2">
            <div className="p-4 mb-4 border rounded-md border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              Test
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from 'next/image';

export default function Season({ isTrue, width }) {
  if (isTrue === true) {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="text-white p-4 border border-[#2f1a00] rounded-md shadow-lg bg-[#2f1a00] flex flex-row items-center justify-between h-full">
          <div>
            <p className="text-xl font-black">Currently in Season</p>
            <p>It will be out of season around October</p>
          </div>
          <Image alt="alt" src="/boxes/InSeason.png" height={90} width={90} className="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="flex flex-row items-center justify-between h-full p-4 text-black border rounded-md shadow-lg bg-neutral-300 border-neutral-800 dark:bg-neutral-300">
          <div>
            <p className="text-xl font-black">Out of Season</p>
            <p>Should be back in season around August</p>
          </div>
          <Image alt="alt" src="/boxes/NotInSeason.png" height={90} width={90} />
        </div>
      </div>
    );
  }
}

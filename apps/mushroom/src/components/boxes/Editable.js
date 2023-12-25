import Image from 'next/image';

export default function Editable({ isTrue, width }) {
  console.log(isTrue);
  if (isTrue === true) {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="text-black p-4 border border-[#ADD8E6] rounded-md shadow-lg bg-[#ADD8E6] flex flex-row items-center justify-between h-full">
          <p>Safe to eat</p>
          <Image
            alt="alt"
            src="/boxes/SafeToEat.png"
            height={50}
            width={50}
            className="w-auto h-auto"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="flex flex-row items-center justify-between h-full p-4 text-white bg-red-100 border border-red-500 rounded-md shadow-lg dark:bg-red-500">
          <p>Not safe to eat</p>
          <Image
            alt="alt"
            src="/boxes/NotSafeToEat.png"
            height={50}
            width={50}
            className="w-auto h-auto"
          />
        </div>
      </div>
    );
  }
}

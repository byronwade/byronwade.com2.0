import Image from 'next/image';

import { isInvalidValue } from '../../utils/invalidValues';

// I still need to update the first half of this component to let users edit the year if its not avliable
export default function Description({ data, width }) {
  if (isInvalidValue(data))
    return (
      <>
        <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
          <div className="flex flex-col items-center h-full p-4 space-y-2 text-center bg-gray-900 border border-gray-800 rounded-md shadow-lg">
            <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
              Description
            </span>
            <span className="font-bold text-center text-gray-300 text-7xl">None</span>
          </div>
        </div>
      </>
    );

  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative flex flex-col h-full p-4 mb-4 overflow-hidden border-gray-800 rounded-md shadow-lg bg-light-blue-800">
        <div className="flex-grow">
          <Image
            src="/icon.png"
            height={300}
            width={300}
            alt="alt"
            className="absolute opacity-30 -top-28 -right-28"
          />
          <div className="relative z-10 pr-36">
            <h2 className="text-2xl font-bold">Description</h2>
            <p className="text-sm">{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

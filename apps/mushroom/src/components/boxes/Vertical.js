export default function Vertical({ data, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="flex flex-col h-full p-4 bg-red-900 border border-red-800 rounded-md shadow-lg">
        <div className="flex-grow">
          <div className="flex flex-col items-center justify-center h-full">
            <span className="flex flex-col items-center justify-center mb-2 font-black text-center text-white">
              ID{' '}
              {/* <span
                className="-m-1 rotate-90 "
                style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
              >
                :
              </span> */}
            </span>
            <div
              className="font-mono text-white origin-center text-md whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
            >
              {data}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

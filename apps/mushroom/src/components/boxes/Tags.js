import { isInvalidValue } from '../../utils/invalidValues';

export default function Tags({ data, width }) {
  console.log(data);

  // Check if data is defined before filtering
  if (!data || !Array.isArray(data)) {
    return (
      <>
        <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
          <div className="flex flex-col items-center h-full p-4 space-y-2 text-center bg-gray-900 border border-gray-800 rounded-md shadow-lg">
            <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
              Tags
            </span>
            <span className="font-bold text-center text-gray-300 text-7xl">None</span>
          </div>
        </div>
      </>
    );
  }

  // Filter the data to remove invalid values
  const filteredData = data.filter((x) => !isInvalidValue(x));

  // Check if there are no valid tags
  if (filteredData.length === 0) {
    return (
      <>
        <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
          <div className="flex flex-col items-center h-full p-4 space-y-2 text-center bg-gray-900 border border-gray-800 rounded-md shadow-lg">
            <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
              Tags
            </span>
            <span className="font-bold text-center text-gray-300 text-7xl">None</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      {filteredData.map((string, index) => (
        <span
          className="inline-flex items-center px-2 py-1 mb-4 mr-4 text-xs font-medium text-gray-600 rounded-md bg-gray-50 ring-1 ring-inset ring-gray-500/10"
          key={index}
        >
          {string}
        </span>
      ))}
    </div>
  );
}

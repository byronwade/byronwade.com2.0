export default function Year({ width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="flex flex-col items-center h-full p-4 space-y-2 text-center border rounded-md shadow-lg border-gray-800 bg-gray-900">
        <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
          Year discovered
        </span>
        <span className="font-bold text-center text-gray-300 text-7xl">1889</span>
      </div>
    </div>
  );
}

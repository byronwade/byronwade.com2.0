export default function Generic({ width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden text-white border rounded-md shadow-lg border-gray-800 bg-gray-900">
        Substrate: <span className="block text-sm text-gray-300">Hardwoods, sawdust</span>
      </div>
    </div>
  );
}

export default function Generic({ width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden border rounded-md shadow-lg border-neutral-800 bg-neutral-900">
        Substrate:{' '}
        <span className="block text-sm text-gray-600 dark:text-gray-300">Hardwoods, sawdust</span>
      </div>
    </div>
  );
}

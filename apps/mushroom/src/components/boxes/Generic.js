export default function Generic({ title, content, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden text-black bg-gray-300 border border-gray-400 rounded-md shadow-lg dark:text-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="font-bold">{title}</h3>
        <span className="block text-sm text-gray-900 dark:text-gray-300">{content}</span>
      </div>
    </div>
  );
}

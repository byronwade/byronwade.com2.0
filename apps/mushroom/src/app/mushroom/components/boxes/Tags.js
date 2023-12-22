export default function Tags({ width }) {
  const strings = [
    'African',
    'American',
    'Arabian',
    'Asian',
    'Australian',
    'British',
    'Canadian',
    'Chinese'
  ];
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      {strings.map((string, index) => (
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

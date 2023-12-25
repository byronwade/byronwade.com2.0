export default function FlavorProfile({ data, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="p-4 bg-yellow-500 border border-yellow-500 rounded-md shadow-lg">
        <h2 className="mb-2 font-bold">Flavor Profile</h2>
        <p>{data}</p>
      </div>
    </div>
  );
}

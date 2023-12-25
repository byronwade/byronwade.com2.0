export default function MedicalEffects({ data, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="p-4 bg-blue-500 border border-blue-500 rounded-md shadow-lg">
        <h2 className="mb-2 font-bold">Medical Effects</h2>
        <p>{data}</p>
      </div>
    </div>
  );
}

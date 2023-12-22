import Image from 'next/image';
export default function Classification({ data, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden rounded-md shadow-lg">
        <Image
          src="/boxes/Classification.png"
          height={1600}
          width={600}
          alt="alt"
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-20"
        />
        <div className="z-10">
          <h2 className="mb-2 font-bold">Classification</h2>
          <p>
            <strong>Class:</strong> {data.class}
          </p>
          <p>
            <strong>Genus:</strong> {data.genus}
          </p>
          <p>
            <strong>Order:</strong> {data.order}
          </p>
          <p>
            <strong>Family:</strong> {data.family}
          </p>
          <p>
            <strong>Kingdom:</strong> {data.kingdom}
          </p>
          <p>
            <strong>Species:</strong> {data.species}
          </p>
          <p>
            <strong>Division:</strong> {data.division}
          </p>
        </div>
      </div>
    </div>
  );
}

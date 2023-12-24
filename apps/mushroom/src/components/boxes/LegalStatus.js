import Image from 'next/image';

export default function LegalStatus({ data, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden rounded-md shadow-lg">
        {/* <Image
          src="/boxes/LegalStatus.png"
          height={1600}
          width={600}
          alt="alt"
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-20"
        /> */}
        <div className="z-10">
          <h2 className="mb-2 font-bold">Legal Status</h2>
          <p>
            <strong>Note:</strong> {data.note}
          </p>
          <p>
            <strong>General:</strong> {data.general}
          </p>
          <p>
            <strong>Specific Regulations:</strong> {data.specific_regulations}
          </p>
          <p>
            <strong>Legal Resources Links:</strong> {data.legal_resources_links}
          </p>
        </div>
      </div>
    </div>
  );
}

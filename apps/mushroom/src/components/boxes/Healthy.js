import Image from 'next/image';

export default function HealthyBox({ isTrue, width }) {
  if (isTrue) {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="text-white p-4 rounded-md shadow-lg bg-[#FF69B4] flex flex-row items-center justify-between h-full">
          <h2>Healthy & Safe</h2>
          <Image className="aspect-square" src="/health.png" alt="alt" height={50} width={50} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="flex flex-row items-center justify-between h-full p-4 text-white bg-red-500 rounded-md shadow-lg">
          <h2>Not Healthy & Possibly Toxic</h2>
          <Image className="aspect-square" src="/noHealth.png" alt="alt" height={50} width={50} />
        </div>
      </div>
    );
  }
}

import Image from 'next/image';

export default function HealthyBox({ isTrue, width }) {
  if (isTrue) {
    return (
      <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
        <div className="p-4 rounded-md shadow-lg bg-[#FF69B4] flex flex-row items-center justify-between h-full">
          <h2>Healthy & Safe</h2>
          <Image className="aspect-square" src="/health.png" alt="alt" height={50} width={50} />
        </div>
      </div>
    );
  } else null;
}

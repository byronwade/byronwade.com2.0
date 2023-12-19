export default function Home() {
  return (
    <>
      <div className="flex gap-4 p-10">
        {[
          [32, 40, 32, 32, 32],
          [32, 40, 64],
          [64, 40, 40]
        ].map((card, index) => (
          <div className="flex-1" key={index}>
            {card.map((height, index) => (
              <div
                className={`mb-4 h-${height} rounded-md border border-neutral-800 bg-neutral-100 p-4 dark:bg-neutral-900`}
                key={index}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

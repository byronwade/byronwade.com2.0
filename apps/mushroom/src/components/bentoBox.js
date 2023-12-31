export default function BentoBox({ colSpan, rowSpan, children }) {
  return (
    <div className={`col-span-${colSpan} row-span-${rowSpan} bg-white rounded-lg shadow-md`}>
      {children}
    </div>
  );
}

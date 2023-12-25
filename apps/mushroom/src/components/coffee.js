import { Coffee } from 'react-feather';

export default function FloatingCoffee() {
  return (
    <div className="fixed z-30 bottom-6 right-6">
      <a
        href="https://www.buymeacoffee.com/vfyle26"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-4 py-2 font-medium text-black transition duration-300 ease-in-out bg-yellow-600 rounded-md shadow-lg hover:bg-yellow-600"
      >
        <Coffee className="mr-2" />
        Buy me a coffee
      </a>
    </div>
  );
}

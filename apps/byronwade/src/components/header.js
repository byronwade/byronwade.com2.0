import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <div className="flex flex-row w-full">
      <div>
        <h1>Byron Wade</h1>
        <p>Frontend Developer</p>
        <ThemeSwitch />
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
}

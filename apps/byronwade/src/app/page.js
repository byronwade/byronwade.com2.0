import Header from '../components/header';
import Twitter from '../components/boxes/twitter';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <div>
        <h1 className="text-analogous">Byron Wade</h1>
        <p>Frontend Developer</p>
      </div>
      <div className="relative flex flex-row w-full h-98 bg-[#1da1f2]">
        <Twitter width="w-5/12" />
      </div>
    </div>
  );
}

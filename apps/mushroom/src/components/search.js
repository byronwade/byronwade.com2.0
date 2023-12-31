import Image from 'next/image';

export default function Search() {
  return (
    <div className="bg-white w-[90%] sm:w-[90%] md:w-[90%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%] h-fit max-h-[90%] sm:h-fit md:h-fit rounded-xl shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[500px] transition-transform min-h-[50vh]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="py-4 pl-8 w-full text-sm rounded-t-lg border-b border-b-1 border-light-200 focus:outline-none"
          defaultValue=""
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-light-200 dark:text-dark-200"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.873-4.873" />
            <circle cx={10} cy={10} r={7} />
          </svg>
        </div>
      </div>
      <div className="">
        <ul className="divide-y divide-light-200 dark:divide-dark-200 p-2 max-h-[80vh] custom-scrollbar overflow-auto transition-all">
          <a href="/view/Atlas">
            <li className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl">
              <video
                src="https://video.godly.website/video/upload/w_1280/q_70/godly/recordings/tahdqadtfichtz4hwidt.mp4"
                className="w-20 h-20 rounded-xl object-cover"
                autoPlay=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Atlas</p>
                <p className="text-xs text-dark-400">
                  Atlas is a data labeling platform that provides the best solution for computer
                  vision teams who want to iterate faster and scale globally.
                </p>
              </div>
            </li>
          </a>
          <a href="/view/Scale AI">
            <li className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl">
              <Image
                alt="Sacle AI"
                width={80}
                height={80}
                src="https://uploads-ssl.webflow.com/63bea64d5a430503eed2e6cc/64ec6e65addeee5e0e3faef2_Scale%20AI%20Cover.png"
                className="w-20 h-20 rounded-xl"
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Scale AI</p>
                <p className="text-xs text-dark-400">
                  Scale AI is the data platform for AI. Scale AI’s API for human-powered data
                  annotation and synthetic data generation is used by Alphabet, Zoox, Lyft,
                  Pinterest, Airbnb, nuTonomy, and many more leading AI companies.
                </p>
              </div>
            </li>
          </a>
          <a href="/view/Family">
            <li className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl">
              <video
                src="https://video.godly.website/video/upload/w_720/q_70/godly/recordings/ehfwkubzzv8fpsmh4uzx.mp4"
                className="w-20 h-20 rounded-xl object-cover"
                autoPlay=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Family</p>
                <p className="text-xs text-dark-400">
                  An inspirational web3 mobile app website built with react, using inter as their
                  primary font.
                </p>
              </div>
            </li>
          </a>
          <a href="/view/Phantom">
            <li className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl">
              <video
                src="https://video.godly.website/video/upload/w_720/q_70/godly/recordings/xi9ghp5bygni2u8vikzo.webm"
                className="w-20 h-20 rounded-xl object-cover"
                autoPlay=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Phantom</p>
                <p className="text-xs text-dark-400">
                  An inspirational cryptocurrency mobile app website built with emotion, using
                  phantom as their primary font.
                </p>
              </div>
            </li>
          </a>
          <a href="/view/Wise Design">
            <li className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl">
              <video
                src="https://video.godly.website/video/upload/w_720/q_70/godly/recordings/rwgc9wy8puhhgnhp3l8n.webm"
                className="w-20 h-20 rounded-xl object-cover"
                autoPlay=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Wise Design</p>
                <p className="text-xs text-dark-400">
                  An inspirational business &amp; finance animation website built with react, using
                  inter as their primary font.
                </p>
              </div>
            </li>
          </a>
          <a href="/view/Chenzoku">
            <li className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl">
              <video
                src="https://video.godly.website/video/upload/w_2560/q_100/godly/recordings/pyaqvjjimo6vixa0mdab.webm"
                className="w-20 h-20 rounded-xl object-cover"
                autoPlay=""
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Chenzoku</p>
                <p className="text-xs text-dark-400">
                  An inspirational nft animation website built with gsap, using druk as their
                  primary font.
                </p>
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

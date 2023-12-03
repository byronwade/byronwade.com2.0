import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="main w-full max-h-[100vh] scrollbar-hide overflow-y-auto">
        <Header />
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 justify-between items-center mt-[100px] sm:mt-[100px] xl:mt-[50px] mb-10 px-5 xl:px-8">
          <div className="px-0 sm:px-2 md:px-10 max-w-auto xl:max-w-[500px] w-full">
            <h1 className="text-[45px] font-bold leading-[1] mb-3 capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#707070] to-black dark:to-dark-300 dark:from-white">
              All the best SaaS resources in one place
            </h1>
            <p className="text-[18px] font-light text-[#8a8a8a]">
              UI resources that will boost your creative workflow and save you time and money.
            </p>
            <div className="flex items-center mt-3">
              <button className="py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black hover:bg-light-100 transition-all duration-300 px-5 rounded-full">
                Subscribe
              </button>
              <div
                role="modal"
                className="fixed inset-0 z-20 animate-fadeIn"
                style={{ display: 'none' }}
              >
                <div className="modal-bg absolute w-full h-full bg-black opacity-60" />
                <div className="bg-white w-[90%] sm:w-[90%] md:w-[90%] lg:w-[50%] xl:w-[40%] 2xl:w-[40%] h-fit max-h-[90%] sm:h-fit md:h-fit rounded-xl shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-5">
                  <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8f8f8f] to-black text-center mt-5 mb-2">
                    Get Your Daily Dose of News with a Dash of Humor
                  </h1>
                  <form className="mt-4 relative">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-[100%] px-4 py-4 border border-1 rounded-full focus:outline-light-300"
                    />
                    <button className="px-2 py-2 rounded-full absolute right-2 top-[50%] translate-y-[-50%]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </button>
                  </form>
                  <p className="py-5 text-sm text-dark-200 text-center">
                    Join over 4 million people who kickstart their day with CopyUI&apos;s daily
                    newsletter - delivering the latest headlines worldwide with a touch of humor,
                    all for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl max-w-auto xl:max-w-[650px]">
            <a href="/view/Chenzoku" className="hover:opacity-90 transition">
              <div
                style={{ backgroundImage: 'url("")' }}
                className="relative w-full rounded-xl h-[250px] lg:h-[400px] bg-cover bg-no-repeat bg-center border-[1px] border-light-100 border-solid transition duration-20"
                alt=""
              >
                <video
                  className="ease block w-full h-full object-cover rounded-xl transition duration-200"
                  autoPlay=""
                  loop=""
                  src="https://video.godly.website/video/upload/w_2560/q_100/godly/recordings/pyaqvjjimo6vixa0mdab.webm"
                />
              </div>
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  ChainZoku
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <a href="">
                  <button className="flex flex-1 justify-end items-center text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-[20px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div role="list" className="flex flex-wrap p-5">
          <div
            role="list-item"
            className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
          >
            <a href="/view/Atlas" className="hover:opacity-90 transition">
              <div
                className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
                alt=""
              >
                <video
                  className="ease block w-full h-full object-cover rounded-xl transition duration-200"
                  autoPlay=""
                  loop=""
                  src="https://video.godly.website/video/upload/w_1280/q_70/godly/recordings/tahdqadtfichtz4hwidt.mp4"
                />
              </div>
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="" className="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  Atlas
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[20px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            role="list-item"
            className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
          >
            <a href="/view/Scale AI" className="hover:opacity-90 transition">
              <div
                className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
                alt=""
                style={{
                  backgroundImage:
                    'url("https://uploads-ssl.webflow.com/63bea64d5a430503eed2e6cc/64ec6e65addeee5e0e3faef2_Scale%20AI%20Cover.png")'
                }}
              />
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="" className="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  Scale AI
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[20px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            role="list-item"
            className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
          >
            <a href="/view/Family" className="hover:opacity-90 transition">
              <div
                className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
                alt=""
              >
                <video
                  className="ease block w-full h-full object-cover rounded-xl transition duration-200"
                  autoPlay=""
                  loop=""
                  src="https://video.godly.website/video/upload/w_720/q_70/godly/recordings/ehfwkubzzv8fpsmh4uzx.mp4"
                />
              </div>
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="" className="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  Family
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[20px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            role="list-item"
            className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
          >
            <a href="/view/Phantom" className="hover:opacity-90 transition">
              <div
                className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
                alt=""
              >
                <video
                  className="ease block w-full h-full object-cover rounded-xl transition duration-200"
                  autoPlay=""
                  loop=""
                  src="https://video.godly.website/video/upload/w_720/q_70/godly/recordings/xi9ghp5bygni2u8vikzo.webm"
                />
              </div>
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="" className="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  Phantom
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[20px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            role="list-item"
            className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
          >
            <a href="/view/Wise Design" className="hover:opacity-90 transition">
              <div
                className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
                alt=""
              >
                <video
                  className="ease block w-full h-full object-cover rounded-xl transition duration-200"
                  autoPlay=""
                  loop=""
                  src="https://video.godly.website/video/upload/w_720/q_70/godly/recordings/rwgc9wy8puhhgnhp3l8n.webm"
                />
              </div>
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="" className="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  Wise Design
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[20px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            role="list-item"
            className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[33.3%] rounded-xl p-4"
          >
            <a href="/view/Chenzoku" className="hover:opacity-90 transition">
              <div
                className="relative w-full rounded-xl h-[250px] bg-cover bg-center border-[1px] border-light-100 dark:border-dark-500 border-solid transition duration-200 overflow-hidden"
                alt=""
              >
                <video
                  className="ease block w-full h-full object-cover rounded-xl transition duration-200"
                  autoPlay=""
                  loop=""
                  src="https://video.godly.website/video/upload/w_2560/q_100/godly/recordings/pyaqvjjimo6vixa0mdab.webm"
                />
              </div>
            </a>
            <div className="flex justify-between items-center mt-2">
              <a href="" className="">
                <h2 className="text-dark-300 hover:text-dark-500  dark:text-white dark:hover:text-dark-100 transition duration-200">
                  Chenzoku
                </h2>
              </a>
              <div className="flex justify-end gap-2 font-normal">
                <button className="flex flex-1 justify-end items-center text-dark-300 dark:text-white hover:text-dark-500 dark:hover:text-dark-100 transition duration-200 text-[16px] gap-1 cursor-pointer hover:opacity-75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[20px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

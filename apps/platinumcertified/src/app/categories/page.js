import Header from '../../components/header';

export default function Page() {
  return (
    <div className="main w-full max-h-[100vh] scrollbar-hide overflow-y-auto">
      <Header />
      <div className=" max-w-[600px] text-center mx-auto mt-10">
        <h1 className="text-4xl font-bold  capitalize text-transparent bg-clip-text bg-gradient-to-r from-[#dcdcdc] dark:from-white dark:via-white to-black dark:to-dark-400">
          portfolio
        </h1>
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
  );
}

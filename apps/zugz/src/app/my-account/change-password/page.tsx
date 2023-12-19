import Sidebar from "@/components/account/Sidebar";

export default function ChangePassword() {
  return (
    <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex md:flex-row w-full ">
      <div className="flex flex-col md:flex-row w-full gap-6">
        <Sidebar />
        <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0 bg-black rounded-md border border-neutral-800 p-4">
          <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
            Change Password
          </h2>
          <div
            className="w-full flex  h-full lg:w-8/12 flex-col"
            style={{ position: "relative", top: 0, opacity: 1 }}
          >
            <form className="w-full mx-auto flex flex-col justify-center ">
              <div className="flex flex-col space-y-3">
                <div className="mb-4">
                  <label
                    htmlFor="oldPassword"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      id="oldPassword"
                      name="oldPassword"
                      type="password"
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out text-input text-xs lg:text-sm font-body placeholder-gray-600  transition duration-200 ease-in-out bg-black rounded-md border border-neutral-800 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    />
                    <label
                      htmlFor="oldPassword"
                      className="absolute ltr:right-4 rtl:left-4 top-5 -mt-2 text-gray-500 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="newPassword"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out text-input text-xs lg:text-sm font-body placeholder-gray-600  transition duration-200 ease-in-out bg-black rounded-md border border-neutral-800 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    />
                    <label
                      htmlFor="newPassword"
                      className="absolute ltr:right-4 rtl:left-4 top-5 -mt-2 text-gray-500 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-13 mt-3"
                    type="submit"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChangePassword() {
  return (
    <div className="flex w-full px-0 py-16 mx-auto lg:py-20 xl:max-w-screen-xl md:flex-row ">
      <div className="flex flex-col w-full gap-6 md:flex-row">
        <div className="p-4 mt-4 bg-black border rounded-md md:w-4/6 2xl:w-8/12 md:mt-0 border-neutral-800">
          <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">
            Change Password
          </h2>
          <div
            className="flex flex-col w-full h-full lg:w-8/12"
            style={{ position: 'relative', top: 0, opacity: 1 }}
          >
            <form className="flex flex-col justify-center w-full mx-auto ">
              <div className="flex flex-col space-y-3">
                <div className="mb-4">
                  <label
                    htmlFor="oldPassword"
                    className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                  >
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      id="oldPassword"
                      name="oldPassword"
                      type="password"
                      className="w-full px-4 py-2 text-xs placeholder-gray-600 transition duration-150 duration-200 ease-in-out bg-black border rounded-md appearance-none md:px-5 text-input lg:text-sm font-body border-neutral-800 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    />
                    <label
                      htmlFor="oldPassword"
                      className="absolute -mt-2 text-gray-500 cursor-pointer ltr:right-4 rtl:left-4 top-5"
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
                    className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      className="w-full px-4 py-2 text-xs placeholder-gray-600 transition duration-150 duration-200 ease-in-out bg-black border rounded-md appearance-none md:px-5 text-input lg:text-sm font-body border-neutral-800 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    />
                    <label
                      htmlFor="newPassword"
                      className="absolute -mt-2 text-gray-500 cursor-pointer ltr:right-4 rtl:left-4 top-5"
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

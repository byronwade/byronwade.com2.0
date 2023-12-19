export default function Account() {
  return (
    <div className="flex w-full px-0 py-16 mx-auto lg:py-20 xl:max-w-screen-xl md:flex-row">
      <div className="flex flex-col w-full gap-6 md:flex-row">
        <div className="mt-4 md:w-4/6 2xl:w-8/12 md:mt-0">
          <div
            className="flex flex-col w-full"
            style={{ position: 'relative', top: 0, opacity: 1 }}
          >
            <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">
              Account Details
            </h2>
            <form className="flex flex-col justify-center w-full mx-auto">
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <div className="flex flex-col space-y-4 sm:flex-row sm:gap-x-3 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 text-xs transition duration-150 duration-200 ease-in-out bg-white border border-gray-300 rounded-md appearance-none md:px-5 text-input lg:text-sm font-body placeholder-body min-h-12 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder=""
                      className="w-full px-4 py-2 text-xs transition duration-150 duration-200 ease-in-out bg-white border border-gray-300 rounded-md appearance-none md:px-5 text-input lg:text-sm font-body placeholder-body min-h-12 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="block">
                  <label
                    htmlFor="displayName"
                    className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                  >
                    Display Name *
                  </label>
                  <input
                    id="displayName"
                    name="displayName"
                    type="text"
                    placeholder=""
                    className="w-full px-4 py-2 text-xs transition duration-150 duration-200 ease-in-out bg-white border border-gray-300 rounded-md appearance-none md:px-5 text-input lg:text-sm font-body placeholder-body min-h-12 focus:outline-none focus:border-heading h-11 md:h-12"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:gap-x-3 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                    >
                      Phone/Mobile *
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder=""
                      className="w-full px-4 py-2 text-xs transition duration-150 duration-200 ease-in-out bg-white border border-gray-300 rounded-md appearance-none md:px-5 text-input lg:text-sm font-body placeholder-body min-h-12 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="email"
                      className="block mb-3 text-sm font-semibold leading-none text-gray-600 cursor-pointer"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=""
                      className="w-full px-4 py-2 text-xs transition duration-150 duration-200 ease-in-out bg-white border border-gray-300 rounded-md appearance-none md:px-5 text-input lg:text-sm font-body placeholder-body min-h-12 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="relative flex flex-col">
                  <span className="block pb-1 mt-2 text-sm font-semibold text-heading">Gender</span>
                  <div className="flex items-center mt-2 gap-x-6">
                    <label className="flex items-center text-sm cursor-pointer group text-heading">
                      <input
                        type="radio"
                        className="w-5 h-5 transition duration-500 ease-in-out border border-gray-300 rounded-full cursor-pointer form-radio text-heading focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                        name="gender"
                        defaultValue="male"
                      />
                      <span className="relative text-sm ms-2 text-heading">Male</span>
                    </label>
                    <label className="flex items-center text-sm cursor-pointer group text-heading">
                      <input
                        type="radio"
                        className="w-5 h-5 transition duration-500 ease-in-out border border-gray-300 rounded-full cursor-pointer form-radio text-heading focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                        name="gender"
                        defaultValue="female"
                      />
                      <span className="relative text-sm ms-2 text-heading">Female</span>
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 mt-3 w-full sm:w-32"
                    type="submit"
                  >
                    Save
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

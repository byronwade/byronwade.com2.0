import Sidebar from "@/components/account/Sidebar";

export default function Account() {
  return (
    <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex md:flex-row w-full">
      <div className="flex flex-col md:flex-row w-full gap-6">
        <Sidebar />
        <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
          <div
            className="w-full flex flex-col"
            style={{ position: "relative", top: 0, opacity: 1 }}
          >
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
              Account Details
            </h2>
            <form className="w-full mx-auto flex flex-col justify-center">
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder=""
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder=""
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="block">
                  <label
                    htmlFor="displayName"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Display Name *
                  </label>
                  <input
                    id="displayName"
                    name="displayName"
                    type="text"
                    placeholder=""
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      Phone/Mobile *
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder=""
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=""
                      className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="relative flex flex-col">
                  <span className="mt-2 text-sm text-heading font-semibold block pb-1">
                    Gender
                  </span>
                  <div className="mt-2 flex items-center gap-x-6">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                        name="gender"
                        defaultValue="male"
                      />
                      <span className="ms-2 text-sm text-heading relative">
                        Male
                      </span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                        name="gender"
                        defaultValue="female"
                      />
                      <span className="ms-2 text-sm text-heading relative">
                        Female
                      </span>
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

import Sidebar from "@/components/account/Sidebar";

export default function MyAccount() {
  return (
    <div className="mx-auto px-4 md:px-8 2xl:px-16">
      <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex md:flex-row w-full">
        <div className="flex flex-col md:flex-row w-full gap-6">
          <Sidebar />
          <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
              Dashboard
            </h2>
            <p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
              From your account dashboard you can view your{" "}
              <a
                className="text-heading underline font-semibold"
                href="/my-account/orders"
              >
                recent orders
              </a>
              , manage your{" "}
              <a
                className="text-heading underline font-semibold"
                href="/my-account/account-details"
              >
                Account Details
              </a>{" "}
              and{" "}
              <a
                className="text-heading underline font-semibold"
                href="/my-account/change-password"
              >
                change your password
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

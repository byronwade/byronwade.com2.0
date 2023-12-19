export default function MyAccount() {
  return (
    <div className="px-4 mx-auto md:px-8 2xl:px-16">
      <div className="flex w-full px-0 py-16 mx-auto lg:py-20 xl:max-w-screen-xl md:flex-row">
        <div className="flex flex-col w-full gap-6 md:flex-row">
          <div className="mt-4 md:w-4/6 2xl:w-8/12 md:mt-0">
            <h2 className="mb-3 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-5">
              Dashboard
            </h2>
            <p className="text-sm leading-7 lowercase  md:text-base md:leading-loose">
              From your account dashboard you can view your{' '}
              <a className="font-semibold underline text-heading" href="/my-account/orders">
                recent orders
              </a>
              , manage your{' '}
              <a
                className="font-semibold underline text-heading"
                href="/my-account/account-details"
              >
                Account Details
              </a>{' '}
              and{' '}
              <a
                className="font-semibold underline text-heading"
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

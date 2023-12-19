export default function Orders() {
  return (
    <div className="flex w-full px-0 py-16 mx-auto lg:py-20 xl:max-w-screen-xl md:flex-row">
      <div className="flex flex-col w-full gap-6 md:flex-row">
        <div className="mt-4 md:w-4/6 2xl:w-8/12 md:mt-0">
          <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">
            Orders
          </h2>
          <div
            className="flex flex-col w-full"
            style={{
              position: 'relative',
              top: 0,
              opacity: 1,
              transform: 'none',
              transformOrigin: '50% 50% 0px'
            }}
          >
            <table>
              <thead className="text-sm lg:text-base">
                <tr>
                  <th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
                    Order
                  </th>
                  <th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right lg:text-center">
                    Date
                  </th>
                  <th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right lg:text-center">
                    Status
                  </th>
                  <th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right lg:text-center">
                    Total
                  </th>
                  <th className="p-4 font-semibold bg-gray-100 text-heading ltr:text-left rtl:text-right ltr:lg:text-right rtl:lg:text-left ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-base">
                <tr className="border-b border-gray-300 last:border-b-0">
                  <td className="px-4 py-5 ltr:text-left rtl:text-right">
                    <a
                      className="underline hover:no-underline text-body"
                      href="/my-account/orders/3203"
                    >
                      #3203
                    </a>
                  </td>
                  <td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
                    March 18, 2021
                  </td>
                  <td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
                    Completed
                  </td>
                  <td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
                    $16,950.00 for 93 items
                  </td>
                  <td className="px-4 py-5 ltr:text-right rtl:text-left text-heading">
                    <a
                      className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
                      href="/my-account/orders/3203"
                    >
                      view
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 last:border-b-0">
                  <td className="px-4 py-5 ltr:text-left rtl:text-right">
                    <a
                      className="underline hover:no-underline text-body"
                      href="/my-account/orders/3204"
                    >
                      #3204
                    </a>
                  </td>
                  <td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
                    March 18, 2021
                  </td>
                  <td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
                    Completed
                  </td>
                  <td className="px-4 py-5 ltr:text-left rtl:text-right lg:text-center text-heading">
                    $16,950.00 for 93 items
                  </td>
                  <td className="px-4 py-5 ltr:text-right rtl:text-left text-heading">
                    <a
                      className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
                      href="/my-account/orders/3204"
                    >
                      view
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Orders() {
  return (
    <div className="xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20">
      <div className="border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8">
        <span className="w-10 h-10 ltr:mr-3 rtl:ml-3 ltr:xl:mr-4 rtl:xl:ml-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="w-5 h-5 text-green-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" />
          </svg>
        </span>
        Thank you. Your order has been received.
      </div>
      <ul className="border border-gray-300 bg-gray-50 rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10">
        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-body font-normal leading-5">
            Order number:
          </span>
          XRQ4567
        </li>
        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-body font-normal leading-5">
            Date:
          </span>
          April 22, 2021
        </li>
        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-body font-normal leading-5">
            Email:
          </span>
          customer@demo.com
        </li>
        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-body font-normal leading-5">
            Total:
          </span>
          $149.00
        </li>
        <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
          <span className="uppercase text-[11px] block text-body font-normal leading-5">
            Payment method:
          </span>
          cash on delivery
        </li>
      </ul>
      <p className="text-heading text-sm md:text-base mb-8">
        Pay with cash upon delivery.
      </p>
      <div className="pt-10 lg:pt-12">
        <h2 className="mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8">
          Order details:
        </h2>
        <table className="w-full text-sm font-semibold text-heading lg:text-base">
          <thead>
            <tr>
              <th className="w-1/2 p-4 bg-gray-150 ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md">
                Product
              </th>
              <th className="w-1/2 p-4 bg-gray-150 ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-normal border-b border-gray-300 last:border-b-0">
              <td className="p-4">Nike Black - Black, S * 1</td>
              <td className="p-4">$10.00</td>
            </tr>
            <tr className="font-normal border-b border-gray-300 last:border-b-0">
              <td className="p-4">Hermes Carlton London - Red, XL * 2</td>
              <td className="p-4">$80.00</td>
            </tr>
            <tr className="font-normal border-b border-gray-300 last:border-b-0">
              <td className="p-4">Gucci Carlton UK, Green, M * 1</td>
              <td className="p-4">$7.00</td>
            </tr>
            <tr className="font-normal border-b border-gray-300 last:border-b-0">
              <td className="p-4">Regular Fit Flannel Shirt, Blue, X * 7</td>
              <td className="p-4">$35.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="odd:bg-gray-150">
              <td className="p-4 italic">Subtotal:</td>
              <td className="p-4">$132.00</td>
            </tr>
            <tr className="odd:bg-gray-150">
              <td className="p-4 italic">Shipping:</td>
              <td className="p-4">
                $17.00
                <span className="text-[13px] font-normal ltr:pl-1.5 rtl:pr-1.5 inline-block">
                  via Flat rate
                </span>
              </td>
            </tr>
            <tr className="odd:bg-gray-150">
              <td className="p-4 italic">Payment method:</td>
              <td className="p-4">cash on delivery</td>
            </tr>
            <tr className="odd:bg-gray-150">
              <td className="p-4 italic">Total:</td>
              <td className="p-4">$149.00</td>
            </tr>
            <tr className="odd:bg-gray-150">
              <td className="p-4 italic">Note:</td>
              <td className="p-4">new order</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

import Sidebar from "@/components/account/Sidebar";

export default function Order() {
  return (
    <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex md:flex-row w-full">
      <div className="flex flex-col md:flex-row w-full gap-6">
        <Sidebar />
        <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
          <div className="p-0">
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
                  <td className="p-4">
                    Regular Fit Flannel Shirt, Blue, X * 7
                  </td>
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
      </div>
    </div>
  );
}

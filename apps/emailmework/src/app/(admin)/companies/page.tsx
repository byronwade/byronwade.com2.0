import Link from 'next/link';
import { Calendar, Shield } from 'react-feather';
import MenuBar from '../../../components/MenuBar/MenuBar';
import { DataTable } from '../../../components/Leads';

export const payments = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com'
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com'
  }
  // ...
];

export const columns = [
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'amount',
    header: 'Amount'
  }
];

export default async function Index() {
  return (
    <div className="flex-1 w-full px-6 py-8 mx-auto sm:px-12 sm:py-12">
      <div className="h-full mx-auto max-w-7xl">
        <MenuBar />
        <div className="flex flex-col justify-between mb-8 gap-x-4 gap-y-2 md:flex-row">
          <div className="flex pr-4">
            <div className="flex items-center space-x-2">
              <h1 className="flex items-center space-x-1 text-2xl font-semibold">
                <span>Wade&#39;s Plumbing & Septic</span>
              </h1>
              <div className="flex items-center space-x-1">
                <div className="inline-flex items-center px-2 space-x-1 text-sm font-medium border rounded-full text-primary border-dark/20 dark:border-white/20 bg-dark dark:bg-white">
                  <div className="pt-px text-white whitespace-nowrap dark:text-dark">Free</div>
                </div>
                <a className="text-xs font-medium text-blue-400" href="#">
                  Upgrade
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto space-x-2">
            <button
              type="button"
              className="box-border relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-semibold leading-none text-center no-underline transition border rounded select-none focus-ring hover:bg-brown-600/10 text-primary bg-primary shrink-0 whitespace-nowrap border-dark/20 dark:border-white/20"
            >
              New branch
            </button>
            <button
              type="button"
              className="box-border relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-semibold leading-none text-center no-underline transition bg-gray-800 border border-transparent rounded cursor-pointer select-none focus-ring shrink-0 whitespace-nowrap text-gray-50 hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900"
            >
              Connect
            </button>
          </div>
        </div>

        <div className="flex flex-col items-stretch mb-8 gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0 xl:gap-x-6">
          <div className="flex flex-col lg:w-2/3">
            <DataTable columns={columns} data={payments} />
          </div>
          <div className="lg:w-1/3">
            <div className="space-y-8">
              <div className="border rounded boder-dark/20 dark:border-white/20">
                <div className="grid grid-flow-col gap-1">
                  <div className="flex justify-between text-center border-b boder-dark/20 dark:border-white/20">
                    <a className="text-primary hover:bg-brown-600/10 flex flex-1 flex-col justify-self-center rounded-l border-r border-dark/20 dark:border-white/20 py-2.5 text-center">
                      Table A
                    </a>
                    <a className="text-primary hover:bg-brown-600/10 flex flex-1 flex-col space-y-1 justify-self-center rounded-r py-2.5 text-center">
                      Branch B
                    </a>
                  </div>
                </div>
                <div className="flex justify-around py-3">
                  <div className="flex flex-col items-center justify-center space-y-1 shrink-0 grow-0 basis-1/3">
                    Statistic A
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 shrink-0 grow-0 basis-1/3">
                    Statistic B
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 shrink-0 grow-0 basis-1/3">
                    Statistic C
                  </div>
                </div>
                <div className="px-4 py-2 text-xs border-t rounded-b bg-brown-600/5 border-dark/20 dark:border-white/20">
                  <p>
                    Usage as of{' '}
                    <time
                      dateTime="2023-10-04T05:00:00.000Z"
                      title="October 3, 2023, 10:00:00 PM PDT"
                    >
                      33 minutes ago
                    </time>{' '}
                    <span className="text-gray-400">(updated hourly)</span>
                  </p>
                  <p className="text-gray-400">
                    Monthly usage resets in 27 days.{' '}
                    <Link className="text-blue-400" href="/bcw1995/byronwade-com/settings/plans">
                      Manage plan
                    </Link>
                  </p>
                </div>
              </div>
              <a className="space-x-2-box-border focus-ring hover:bg-brown-600/10text-white relative inline-flex w-full shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-2 py-1.5 text-center font-semibold leading-none no-underline transition">
                View More Details
              </a>
              <div className="p-3 space-y-4 text-white border rounded border-brown-700 bg-brown-950">
                <h3 className="text-lg font-semibold">This database has no production branches</h3>
                <p>
                  Production branches have an additional replica used for high availability as well
                  as zero-downtime upgrades and failovers.{' '}
                </p>
                <form
                  action="https://api.planetscale.com/v1/organizations/bcw1995/databases/byronwade-com/branches/main/promote"
                  method="post"
                >
                  <button
                    type="submit"
                    className="space-x-2-box-border focus-ring hover:bg-brown-600/10 text-white relative inline-flex w-full shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-2 py-1.5 text-center font-semibold leading-none no-underline transition"
                  >
                    <Shield width={16} height={16} className="mr-1 text-green-600" />
                    Promote to production
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

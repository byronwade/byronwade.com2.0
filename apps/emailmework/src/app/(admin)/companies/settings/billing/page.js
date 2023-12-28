import { DollarSign, User, Shield } from "react-feather";
import Link from "next/link";

export default function Billing() {
	return (
		<>
			<div className="space-y-8">
				<div className="border-red-700 bg-red-950 space-y-4 rounded border p-3 text-white">
					<h3 className="text-lg font-semibold">This database has no production branches</h3>
					<p>Production branches have an additional replica used for high availability as well as zero-downtime upgrades and failovers. </p>
					<form action="https://api.planetscale.com/v1/organizations/bcw1995/databases/byronwade-com/branches/main/promote" method="post">
						<button type="button" className="focus-ring bg-red-600/60 text-white dark:text-white bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
							Update Payment Method
						</button>
					</form>
				</div>

				<div className="rounded border border-dark/20 dark:border-white/20">
					<div className="grid grid-flow-col gap-1">
						<div className="flex justify-between border-b border-dark/20 dark:border-white/20 text-center">
							<a className="text-dark dark:text-white hover:bg-brown-600/10 flex flex-1 flex-col justify-self-center rounded-l border-r border-dark/20 dark:border-white/20 py-2.5 text-center">Table A</a>
							<a className="text-dark dark:text-white hover:bg-brown-600/10 flex flex-1 flex-col space-y-1 justify-self-center rounded-r py-2.5 text-center">Branch B</a>
						</div>
					</div>
					{/* <div className="flex justify-around py-3">
						<div className="flex shrink-0 grow-0 basis-1/3 flex-col items-center justify-center space-y-1">Statistic A</div>
						<div className="flex shrink-0 grow-0 basis-1/3 flex-col items-center justify-center space-y-1">Statistic B</div>
						<div className="flex shrink-0 grow-0 basis-1/3 flex-col items-center justify-center space-y-1">Statistic C</div>
					</div> */}
					<div className="flex justify-around flex-col p-2.5">
						{/* <div className="-mx-4 mb-6 flex flex-wrap items-center justify-between">
							<div className="mb-2 w-full px-4 sm:mb-0 sm:w-auto">
								<h4 className="text-lg font-semibold text-gray-100" data-config-id="auto-txt-7-9">
									Payment methods
								</h4>
							</div>
							<div className="w-full px-4 sm:w-auto">
								<a className="text-brown-500 hover:text-brown-400 inline-flex items-center text-sm font-bold" href="#">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-9">
										<path
											d="M12.667 7.33332H8.66699V3.33332C8.66699 3.15651 8.59675 2.98694 8.47173 2.86192C8.34671 2.73689 8.17714 2.66666 8.00033 2.66666C7.82351 2.66666 7.65395 2.73689 7.52892 2.86192C7.4039 2.98694 7.33366 3.15651 7.33366 3.33332V7.33332H3.33366C3.15685 7.33332 2.98728 7.40356 2.86225 7.52859C2.73723 7.65361 2.66699 7.82318 2.66699 7.99999C2.66699 8.1768 2.73723 8.34637 2.86225 8.47139C2.98728 8.59642 3.15685 8.66666 3.33366 8.66666H7.33366V12.6667C7.33366 12.8435 7.4039 13.013 7.52892 13.1381C7.65395 13.2631 7.82351 13.3333 8.00033 13.3333C8.17714 13.3333 8.34671 13.2631 8.47173 13.1381C8.59675 13.013 8.66699 12.8435 8.66699 12.6667V8.66666H12.667C12.8438 8.66666 13.0134 8.59642 13.1384 8.47139C13.2634 8.34637 13.3337 8.1768 13.3337 7.99999C13.3337 7.82318 13.2634 7.65361 13.1384 7.52859C13.0134 7.40356 12.8438 7.33332 12.667 7.33332Z"
											fill="currentColor"
										></path>
									</svg>
									<span className="ml-2" data-config-id="auto-txt-8-9">
										Add method
									</span>
								</a>
							</div>
						</div> */}
						<div className="mb-4 sm:flex sm:items-start sm:justify-between border-b border-dark/20 dark:border-white/20 p-2.5">
							<h4 className="sr-only">Visa</h4>
							<div className="sm:flex sm:items-start">
								<svg className="h-8 w-auto sm:h-6 sm:flex-shrink-0" viewBox="0 0 36 24" aria-hidden="true">
									<rect width={36} height={24} fill="#224DBA" rx={4} />
									<path
										fill="#fff"
										d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
									/>
								</svg>
								<div className="mt-3 sm:ml-4 sm:mt-0">
									<div className="text-sm font-medium text-dark dark:text-white">Ending with 4242</div>
									<div className="mt-1 text-sm text-neutral-400 sm:flex sm:items-center">
										<div>Expires 12/20</div>
										<span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
											&middot;
										</span>
										<div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
									</div>
								</div>
							</div>
							<div className="">
								<button type="button" className="focus-ring hover:bg-brown-600/10 text-dark dark:text-white bg-primary relative mr-4 box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									Edit
								</button>

								<button type="button" className="focus-ring bg-red-600 text-white dark:text-white bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									Delete
								</button>
							</div>
						</div>

						<div className="sm:flex sm:items-start sm:justify-between p-2.5">
							<h4 className="sr-only">Visa</h4>
							<div className="sm:flex sm:items-start">
								<svg className="h-8 w-auto sm:h-6 sm:flex-shrink-0" viewBox="0 0 36 24" aria-hidden="true">
									<rect width={36} height={24} fill="#224DBA" rx={4} />
									<path
										fill="#fff"
										d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
									/>
								</svg>
								<div className="mt-3 sm:ml-4 sm:mt-0">
									<div className="text-sm font-medium text-dark dark:text-white">Ending with 4242</div>
									<div className="mt-1 text-sm text-neutral-400 sm:flex sm:items-center">
										<div>Expires 12/20</div>
										<span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
											&middot;
										</span>
										<div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
									</div>
								</div>
							</div>
							<div className="">
								<button type="button" className="focus-ring hover:bg-brown-600/10 text-dark dark:text-white bg-primary relative mr-4 box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									Edit
								</button>

								<button type="button" className="focus-ring bg-red-600 text-white dark:text-white bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									Delete
								</button>
							</div>
						</div>
					</div>
					<div className="bg-brown-600/5 rounded-b border-t border-dark/20 dark:border-white/20 px-4 py-2 text-xs text-dark dark:text-white">
						<p>
							Usage as of{" "}
							<time dateTime="2023-10-04T05:00:00.000Z" title="October 3, 2023, 10:00:00 PM PDT">
								33 minutes ago
							</time>{" "}
							<span className="text-gray-400">(updated hourly)</span>
						</p>
						<p className="text-gray-400">
							Monthly usage resets in 27 days.{" "}
							<Link className="text-blue-400" href="/bcw1995/byronwade-com/settings/plans">
								Manage plan
							</Link>
						</p>
					</div>
				</div>
				{/* <a className="space-x-2-box-border focus-ring hover:bg-brown-600/10 text-primary bg-primary relative inline-flex w-full shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-2 py-1.5 text-center font-semibold leading-none no-underline transition">View More Details</a> */}

				<div className="mt-3 rounded border border-dark/20 dark:border-white/20">
					<div className="grid grid-flow-col gap-1">
						<div className="flex justify-between">
							<div className="w-1/2 text-dark dark:text-white hover:bg-brown-600/10 flex flex-col rounded-l border-r border-dark/20 dark:border-white/20 p-2.5">
								<h4 className="mb-1 font-bold text-dark dark:text-white" data-config-id="auto-txt-43-9">
									Auto renewal
								</h4>
								<p className="mb-4 text-xs font-medium leading-5 text-dark dark:text-white">All subscriptions are set to automatically renew, unless you cancel before the next renewal date.</p>
								<div className="flex items-center">
									<button className="bg-brown-500 mr-3 flex h-6 w-11 items-center justify-center rounded-full">
										<div className="h-5 w-5 rounded-full bg-transparent"></div>
										<div className="h-5 w-5 rounded-full bg-white"></div>
									</button>
									<span className="text-xs font-medium text-dark dark:text-white">Auto renewal is turrned on</span>
								</div>
							</div>
							<div className="w-1/2 text-dark dark:text-white hover:bg-brown-600/10 flex flex-col space-y-1 rounded-r p-2.5">
								<h4 className="mb-1 font-bold text-dark dark:text-white" data-config-id="auto-txt-46-9">
									Cancel Subscription
								</h4>
								<p className="mb-5 text-xs font-medium leading-5 text-dark dark:text-white">You will lose access to all premium features in your current subscription plan</p>
								<a className="inline-block text-xs font-medium text-red-600 hover:underline" href="#">
									Cancel Subscription
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-3">
					<div className="w-full overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr>
									<th scope="col" colSpan={1} className="w-full border-dark/20 dark:border-white/20">
										Invoice ID
									</th>
									<th scope="col" colSpan={1} className="w-full border-dark/20 dark:border-white/20">
										Amount
									</th>
									<th scope="col" colSpan={1} className="w-full border-dark/20 dark:border-white/20">
										Date
									</th>
									<th scope="col" colSpan={1} className="w-full border-dark/20 dark:border-white/20">
										Status
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border-dark/20 dark:border-white/20">Invoice #3405</td>
									<td className="border-dark/20 dark:border-white/20">$25.00</td>
									<td className="border-dark/20 dark:border-white/20">July 06, 2022</td>
									<td className="border-dark/20 dark:border-white/20">
										<div className="flex items-center">
											<span className="mr-1 inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
											<span className="text-sm font-medium text-dark dark:text-white" data-config-id="auto-txt-22-9">
												Pending
											</span>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

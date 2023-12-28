export default function Settings() {
	return (
		<>
			<div className="text-white mb-5 flex flex-col justify-between space-y-4 rounded border border-blue-700 bg-blue-950 px-6 py-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
				<div>
					<p className="font-semibold">This database is currently on the free Hobby plan</p>
					<p>Paid plans offer higher usage limits, additional branches, and more.</p>
				</div>
				<div className="w-auto">
					<a className="focus-ring text-dark relative box-border inline-flex shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-transparent bg-white px-2 py-1.5 text-center font-semibold leading-none no-underline transition hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900" href="/bcw1995/byronwade-com/settings/plans">
						View plans
					</a>
				</div>
			</div>
			<div className="relative rounded border border-red-600">
				<div className="-z-1 bg-warning-gradient absolute inset-0 opacity-5"></div>
				<div className="flex flex-col justify-between space-y-4 rounded px-6 py-4 md:flex-row md:items-center md:space-x-12">
					<div className="text-dark dark:text-white">
						<h2 className="mb-1 font-semibold text-red-600">Delete database</h2>
						<p>
							Delete the <strong>byronwade-com</strong> database, all of its branches, data, and backups. Applications connected to the database will be disconnected.
						</p>
					</div>
					<div className="w-auto">
						<button type="button" className="focus-ring bg-red-600 text-white dark:text-white bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
							Delete database
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default function Settings() {
	return (
		<>
			<div className="mb-4 flex flex-col gap-4 sm:flex-row sm:justify-between">
				<div>
					<h1 className="mb-sm text-xl font-semibold text-dark dark:text-white">Administrators</h1>
					<p className="text-dark dark:text-white">Database administrators are able to create, manage, and connect to production branches.</p>
				</div>
				<div>
					<button type="button" className="focus-ring relative box-border inline-flex shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-transparent bg-gray-800 px-2 py-1.5 text-center font-semibold leading-none text-gray-50 no-underline transition hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900">
						Add administrator
					</button>
				</div>
			</div>
			<div className="mt-3">
				<div className="w-full overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr>
								<th scope="col" colSpan={2} className="w-full border-dark/20 dark:border-white/20 text-dark dark:text-white">
									Administrator
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border-dark/20 dark:border-white/20">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-1">
											<span className="flex shrink-0 items-center">
												<div title="Byron Wade" className="relative inline-flex flex-shrink-0 rounded-full align-top">
													<div className="grid">
														<div className="relative col-start-1 col-end-1 row-start-1 row-end-1 flex items-center justify-center">
															<img src="https://app.planetscale.com/letters/b.svg" className="h-5 w-5" alt="" />
														</div>
													</div>
												</div>
											</span>
											<div>
												<div className="whitespace-nowrap font-medium text-dark dark:text-white">Byron Wade</div>
												<div className="text-sm text-dark dark:text-white">bcw1995@gmail.com</div>
											</div>
										</div>
										<div>
											<button type="button" className="focus-ring bg-red-600 text-white dark:text-white bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
												Remove
											</button>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

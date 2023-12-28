"use client";

export default function Leads() {
	return (
		<div className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
			<div className="mx-auto h-full max-w-7xl">
				<div className="mb-4 flex flex-col items-center space-y-2 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0">
					<div>
						<h1 className="mb-sm text-xl font-semibold">Branches</h1>
						<p className="text-[#ccc]">
							Your plan includes 1 production and 1 development branch. <a href="/bcw1995/byronwade-com/settings/plans">Upgrade your plan</a> for additional branches.
						</p>
					</div>
				</div>
				<div className="mb-4 w-full sm:w-1/2">
					<input type="search" aria-label="Find a branch" placeholder="Filter branches…" autoComplete="off" autoCorrect="off" autoCapitalize="none" className="shadow-inner-sm py-sm focus-ring w-full rounded border border-white/20 bg-[#1c1c1c] px-1.5 text-sm leading-none text-[#fafafa] ring-offset-0" defaultValue="" />
				</div>

				<div className="mb-6 overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-white/20 text-[#fafafa]">
								<th scope="border-white/20">Branch</th>
								<th scope="border-white/20">Region</th>
								<th scope="border-white/20">Updated</th>
								<th scope="border-white/20">Created</th>
								<th scope="border-white/20" />
							</tr>
						</thead>
						<tbody className="space-y-4">
							<tr className="border-white/20 hover:bg-[#1c1c1c]">
								<td className="w-1/2 border-white/20 p-0">
									<a className="group relative block py-0 pl-2" href="/bcw1995/byronwade-com/main" style={{ zIndex: 30 }}>
										<div className="relative flex items-center space-x-1 py-2" style={{ paddingLeft: 0 }}>
											<div className="relative">
												<div className="group-hover:ring-gray-850 flex h-3 w-3 items-center justify-center rounded-full bg-blue-800 text-blue-400 ring-4 ring-gray-900">
													<svg width={16} height={16}>
														<use href="https://app.planetscale.com/_next/static/media/icons.f95cb430.svg#branch" />
													</svg>
												</div>
											</div>
											<div className="flex h-3 items-center">
												<span className="text-purple !text-primary whitespace-nowrap font-mono font-medium">main</span>
											</div>
										</div>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="text-primary font-medium" href="/bcw1995/byronwade-com/main">
										AWS us-east-1
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-10-06T03:51:19.058Z" title="October 5, 2023, 8:51:19 PM PDT">
											14 minutes ago
										</time>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-02-05T00:04:45.610Z" title="February 4, 2023, 4:04:45 PM PST">
											8 months ago
										</time>
									</a>
								</td>
								<td className="w-1/6 text-right">
									<button>
										<div className="inline-flex items-center space-x-1 rounded-full border border-blue-700 bg-blue-950 px-1.5 py-1 text-xs font-medium leading-none text-blue-400">
											<div className="whitespace-nowrap pt-px">Default</div>
										</div>
									</button>
								</td>
							</tr>
							<tr className="border-white/20 hover:bg-[#1c1c1c]">
								<td className="w-1/2 border-white/20 p-0">
									<a className="group relative block py-0 pl-2" href="/bcw1995/byronwade-com/main" style={{ zIndex: 30 }}>
										<div className="relative flex items-center space-x-1 py-2" style={{ paddingLeft: 0 }}>
											<div className="relative">
												<div className="group-hover:ring-gray-850 flex h-3 w-3 items-center justify-center rounded-full bg-blue-800 text-blue-400 ring-4 ring-gray-900">
													<svg width={16} height={16}>
														<use href="/_next/static/media/icons.f95cb430.svg#branch" />
													</svg>
												</div>
											</div>
											<div className="flex h-3 items-center">
												<span className="text-purple !text-primary whitespace-nowrap font-mono font-medium">main</span>
											</div>
										</div>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="text-primary font-medium" href="/bcw1995/byronwade-com/main">
										AWS us-east-1
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-10-06T03:51:19.058Z" title="October 5, 2023, 8:51:19 PM PDT">
											14 minutes ago
										</time>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-02-05T00:04:45.610Z" title="February 4, 2023, 4:04:45 PM PST">
											8 months ago
										</time>
									</a>
								</td>
								<td className="w-1/6 text-right">
									<button>
										<div className="inline-flex items-center space-x-1 rounded-full border border-blue-700 bg-blue-950 px-1.5 py-1 text-xs font-medium leading-none text-blue-400">
											<div className="whitespace-nowrap pt-px">Default</div>
										</div>
									</button>
								</td>
							</tr>
							<tr className="border-white/20 hover:bg-[#1c1c1c]">
								<td className="w-1/2 border-white/20 p-0">
									<a className="group relative block py-0 pl-2" href="/bcw1995/byronwade-com/main" style={{ zIndex: 30 }}>
										<div className="relative flex items-center space-x-1 py-2" style={{ paddingLeft: 0 }}>
											<div className="relative">
												<div className="group-hover:ring-gray-850 flex h-3 w-3 items-center justify-center rounded-full bg-blue-800 text-blue-400 ring-4 ring-gray-900">
													<svg width={16} height={16}>
														<use href="/_next/static/media/icons.f95cb430.svg#branch" />
													</svg>
												</div>
											</div>
											<div className="flex h-3 items-center">
												<span className="text-purple !text-primary whitespace-nowrap font-mono font-medium">main</span>
											</div>
										</div>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="text-primary font-medium" href="/bcw1995/byronwade-com/main">
										AWS us-east-1
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-10-06T03:51:19.058Z" title="October 5, 2023, 8:51:19 PM PDT">
											14 minutes ago
										</time>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-02-05T00:04:45.610Z" title="February 4, 2023, 4:04:45 PM PST">
											8 months ago
										</time>
									</a>
								</td>
								<td className="w-1/6 text-right">
									<button>
										<div className="inline-flex items-center space-x-1 rounded-full border border-blue-700 bg-blue-950 px-1.5 py-1 text-xs font-medium leading-none text-blue-400">
											<div className="whitespace-nowrap pt-px">Default</div>
										</div>
									</button>
								</td>
							</tr>
							<tr className="border-white/20 hover:bg-[#1c1c1c]">
								<td className="w-1/2 border-white/20 p-0">
									<a className="group relative block py-0 pl-2" href="/bcw1995/byronwade-com/main" style={{ zIndex: 30 }}>
										<div className="relative flex items-center space-x-1 py-2" style={{ paddingLeft: 0 }}>
											<div className="relative">
												<div className="group-hover:ring-gray-850 flex h-3 w-3 items-center justify-center rounded-full bg-blue-800 text-blue-400 ring-4 ring-gray-900">
													<svg width={16} height={16}>
														<use href="/_next/static/media/icons.f95cb430.svg#branch" />
													</svg>
												</div>
											</div>
											<div className="flex h-3 items-center">
												<span className="text-purple !text-primary whitespace-nowrap font-mono font-medium">main</span>
											</div>
										</div>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="text-primary font-medium" href="/bcw1995/byronwade-com/main">
										AWS us-east-1
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-10-06T03:51:19.058Z" title="October 5, 2023, 8:51:19 PM PDT">
											14 minutes ago
										</time>
									</a>
								</td>
								<td className="w-1/6 whitespace-nowrap p-0">
									<a className="block p-2 text-[#ccc]" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-02-05T00:04:45.610Z" title="February 4, 2023, 4:04:45 PM PST">
											8 months ago
										</time>
									</a>
								</td>
								<td className="w-1/6 text-right">
									<button>
										<div className="inline-flex items-center space-x-1 rounded-full border border-blue-700 bg-blue-950 px-1.5 py-1 text-xs font-medium leading-none text-blue-400">
											<div className="whitespace-nowrap pt-px">Default</div>
										</div>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

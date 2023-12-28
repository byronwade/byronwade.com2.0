export default function Settings() {
	return (
		<div className="text-dark dark:text-white">
			<div className="mb-4">
				<h1 className="mb-sm text-xl font-semibold text-dark dark:text-white">Plans</h1>
				<p className="text-dark dark:text-white">
					Choose the plan that best meets the needs of your database. <a href="https://planetscale.com/contact">Contact sales</a> to discuss custom Enterprise plans.
				</p>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr>
							<th className="w-1/4 !border-0 bg-transparent p-3 align-bottom font-normal" />
							<th className="text-dark dark:text-white w-1/4 rounded-tl border-b-0 border-l border-dark/20 dark:border-white/20 p-3 align-top text-base">
								<h2 className="text-base font-semibold md:text-lg text-dark dark:text-white">Hobby</h2>
								<div className="mb-2 font-medium text-dark dark:text-white">Free</div>
								<button disabled="" type="button" className="focus-ring border-secondary relative box-border inline-flex w-full shrink-0 cursor-not-allowed select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border px-2 py-1.5 text-center font-semibold leading-none no-underline opacity-40 transition">
									Current plan
								</button>
							</th>
							<th className="text-primary w-1/4 border-b-0 border-l border-dark/20 dark:border-white/20  p-3 align-top text-base">
								<h2 className="text-base font-semibold md:text-lg text-dark dark:text-white">Scaler</h2>
								<div className="mb-2 font-medium">
									$29 <span className="text-dark dark:text-white">/ month</span>
								</div>
								<button type="button" className="focus-ring relative box-border inline-flex w-full shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-transparent bg-gray-800 px-2 py-1.5 text-center font-semibold leading-none text-gray-50 no-underline transition hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900">
									Upgrade
								</button>
							</th>
							<th className="text-primary w-1/4 !rounded-br-none border-b-0 border-l border-r border-dark/20 dark:border-white/20  p-3 align-top text-base">
								<h2 className="text-base font-semibold md:text-lg text-dark dark:text-white">Scaler Pro</h2>
								<div className="mb-2 font-medium">
									From $39 <span className="text-dark dark:text-white">/ month</span>
								</div>
								<button type="button" className="focus-ring relative box-border inline-flex w-full shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-transparent bg-gray-800 px-2 py-1.5 text-center font-semibold leading-none text-gray-50 no-underline transition hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900">
									Upgrade
								</button>
							</th>
						</tr>
					</thead>
					<tbody className="text-sm md:text-base">
						<tr>
							<td className="rounded-tl border-l border-t border-dark/20 dark:border-white/20  font-medium">Storage</td>
							<td className="border-l border-t border-dark/20 dark:border-white/20 ">5 GB</td>
							<td className="border-l border-t border-dark/20 dark:border-white/20 ">
								<div className="flex flex-col">
									<span>10 GB included</span>
									<span className="text-sm text-dark dark:text-white">$2.50 / additional GB</span>
								</div>
							</td>
							<td className="border-l border-r border-t border-dark/20 dark:border-white/20 ">
								<div className="flex flex-col">
									<span>10 GB included</span>
									<span className="text-sm text-dark dark:text-white">$1.50 / additional GB</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Row reads/month</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1 billion</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex flex-col">
									<span>100 billion included</span>
									<span className="text-sm text-dark dark:text-white">$1.00 / additional billion</span>
								</div>
							</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">Unlimited</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Row writes/month</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">10 million</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex flex-col">
									<span>50 million included</span>
									<span className="text-sm text-dark dark:text-white">$1.50 / additional million</span>
								</div>
							</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">Unlimited</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Available cluster sizes</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">7</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">
								Availability zones<sup>1</sup>
							</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">3</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Production branches</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">2</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex flex-col">
									<span>Pay-as-you-go</span>
									<span className="text-sm text-dark dark:text-white">1 included</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Development branches</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">5</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex flex-col">
									<span>Pay-as-you-go</span>
									<span className="text-sm text-dark dark:text-white">2 included</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Concurrent connections</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">1,000</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">10,000</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">10,000</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Query insights</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">24 hours</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">7 days</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">7 days</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Read-only regions</td>
							<td className="border-l border-dark/20 dark:border-white/20 " />
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Web console</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">PlanetScale CLI</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Included</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Single sign-on</td>
							<td className="border-l border-dark/20 dark:border-white/20 " />
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Additional charge</span>
								</div>
							</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Additional charge</span>
								</div>
							</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Audit log retention</td>
							<td className="border-l border-dark/20 dark:border-white/20 " />
							<td className="border-l border-dark/20 dark:border-white/20 ">15 days</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">15 days</td>
						</tr>
						<tr>
							<td className="border-l border-dark/20 dark:border-white/20  font-medium">Automatic backups</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">Daily</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">Every 12 hours</td>
							<td className="border-l border-r border-dark/20 dark:border-white/20 ">Every 12 hours</td>
						</tr>
						<tr>
							<td className="rounded-bl border-l border-dark/20 dark:border-white/20  font-medium">Support</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">Community</td>
							<td className="border-l border-dark/20 dark:border-white/20 ">
								<div className="flex items-center space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>Standard</span>
								</div>
							</td>
							<td className="rounded-br border-l border-r border-dark/20 dark:border-white/20 ">
								<div className="flex space-x-1">
									<span className="inline-block h-2 w-2 shrink-0">
										<svg width={16} height={16} className="text-green">
											<use href="/_next/static/media/icons.f95cb430.svg#check" />
										</svg>
									</span>
									<span>
										Standard
										<a href="https://planetscale.com/docs/support/support-overview" className="block text-sm" rel="opener" target="_blank">
											Business support available
										</a>
									</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<p className="mt-2 text-sm text-dark dark:text-white">
					<sup>1</sup> For production branches. Development branches are deployed to 1 availability zone.
				</p>
			</div>
		</div>
	);
}

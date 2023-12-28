export default function Settings() {
	return (
		<div className="mx-auto my-40 max-w-7xl px-4 sm:px-6 lg:px-8">
			<form className="mb-8" action="">
				<div className="rounded-md bg-[#252525] px-4 py-12 md:px-10">
					<h2 className="text-base font-semibold leading-7 text-white">Notifications</h2>
					<p className="mt-1 text-sm leading-6 text-gray-400">We&#39;ll always let you know about important changes, but you pick what else you want to hear about.</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
								First name
							</label>
							<div className="mt-2">
								<input type="text" name="first-name" id="first-name" autoComplete="given-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
								Last name
							</label>
							<div className="mt-2">
								<input type="text" name="last-name" id="last-name" autoComplete="family-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-4">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
								Email address
							</label>
							<div className="mt-2">
								<input id="email" name="email" type="email" autoComplete="email" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
								Country
							</label>
							<div className="mt-2">
								<select id="country" name="country" autoComplete="country-name" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 [&_*]:text-black">
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</div>
						</div>

						<div className="col-span-full">
							<label htmlFor="street-address" className="block text-sm font-medium leading-6 text-white">
								Street address
							</label>
							<div className="mt-2">
								<input type="text" name="street-address" id="street-address" autoComplete="street-address" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
								City
							</label>
							<div className="mt-2">
								<input type="text" name="city" id="city" autoComplete="address-level2" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-2">
							<label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
								State / Province
							</label>
							<div className="mt-2">
								<input type="text" name="region" id="region" autoComplete="address-level1" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>

						<div className="sm:col-span-2">
							<label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-white">
								ZIP / Postal code
							</label>
							<div className="mt-2">
								<input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="focus:ring-brown-500 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className="mb-10 rounded-md bg-[#252525] px-4 py-12 md:px-10">
				<div className="-mx-4 mb-12 flex items-center justify-between">
					<div className="max-w-md px-4">
						<h4 className="font-bold text-gray-50" data-config-id="auto-txt-9-8">
							Announcements
						</h4>
						<p className="text-xs font-medium leading-normal text-gray-300" data-config-id="auto-txt-10-8">
							Occasional announcments of new features
						</p>
					</div>
					<div className="px-4">
						<button className="bg-brown-500 flex h-6 w-11 items-center justify-center rounded-full">
							<div className="h-5 w-5 rounded-full bg-transparent"></div>
							<div className="h-5 w-5 rounded-full bg-white"></div>
						</button>
					</div>
				</div>
				<div className="-mx-4 mb-12 flex items-center justify-between">
					<div className="max-w-md px-4">
						<h4 className="font-bold text-gray-50" data-config-id="auto-txt-11-8">
							Feedback requests
						</h4>
						<p className="text-xs font-medium leading-normal text-gray-300" data-config-id="auto-txt-12-8">
							Occasional requests for feedback
						</p>
					</div>
					<div className="px-4">
						<button className="bg-brown-500 flex h-6 w-11 items-center justify-center rounded-full">
							<div className="h-5 w-5 rounded-full bg-transparent"></div>
							<div className="h-5 w-5 rounded-full bg-white"></div>
						</button>
					</div>
				</div>
				<div className="-mx-4 flex items-center justify-between">
					<div className="max-w-md px-4">
						<h4 className="font-bold text-gray-50" data-config-id="auto-txt-13-8">
							Billing and account
						</h4>
						<p className="text-xs font-medium leading-normal text-gray-300" data-config-id="auto-txt-14-8">
							Transactional emails and account notifications
						</p>
					</div>
					<div className="px-4">
						<button className="bg-brown-500 flex h-6 w-11 items-center justify-center rounded-full">
							<div className="h-5 w-5 rounded-full bg-transparent"></div>
							<div className="h-5 w-5 rounded-full bg-white"></div>
						</button>
					</div>
				</div>
			</div>
			<div className="mb-10 rounded-md bg-[#252525] px-4 py-12 md:px-10">
				<div className="-mx-4 flex flex-wrap">
					<div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
						<div className="max-w-xs">
							<h4 className="mb-1 font-bold text-gray-50" data-config-id="auto-txt-15-8">
								Public profile
							</h4>
							<p className="mb-4 text-xs font-medium leading-normal text-gray-300" data-config-id="auto-txt-16-8">
								When this is on, peoiple on the platform can find an view your profile gobally
							</p>
							<div className="flex items-center">
								<button className="bg-brown-500 mr-3 flex h-6 w-11 items-center justify-center rounded-full">
									<div className="h-5 w-5 rounded-full bg-transparent"></div>
									<div className="h-5 w-5 rounded-full bg-white"></div>
								</button>
								<span className="text-xs font-medium text-gray-300" data-config-id="auto-txt-17-8">
									Currently you are visible
								</span>
							</div>
						</div>
					</div>
					<div className="w-full px-4 md:w-1/2">
						<div className="max-w-xs">
							<h4 className="mb-1 font-bold text-gray-50" data-config-id="auto-txt-18-8">
								Read receipt
							</h4>
							<p className="mb-4 text-xs font-medium leading-normal text-gray-300" data-config-id="auto-txt-19-8">
								When this is on, peoiple on the platform can find an view your profile gobally
							</p>
							<div className="flex items-center">
								<button className="mr-3 flex h-6 w-11 items-center justify-center rounded-full bg-gray-400">
									<div className="h-5 w-5 rounded-full bg-white"></div>
									<div className="h-5 w-5 rounded-full bg-transparent"></div>
								</button>
								<span className="text-xs font-medium text-gray-300" data-config-id="auto-txt-20-8">
									Read receipts are off
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-10 flex items-center justify-end gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-white">
					Cancel
				</button>
				<button type="submit" className="bg-brown-500 hover:bg-brown-400 focus-visible:outline-brown-500 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
					Save
				</button>
			</div>
			<div className="mt-40 flex flex-wrap items-center justify-between rounded-md bg-[#252525] px-4 py-12 md:px-10">
				<div className="mb-6 w-full px-4 md:mb-0 md:w-auto">
					<div className="max-w-xs">
						<h4 className="mb-1 font-bold text-gray-50" data-config-id="auto-txt-21-8">
							Delete your account
						</h4>
						<p className="text-xs font-medium leading-normal text-gray-300" data-config-id="auto-txt-22-8">
							Before deleting your account, please note that if you detete your account, Trizzle cannot recover it
						</p>
					</div>
				</div>
				<div className="w-full px-4 md:w-auto">
					<button className="inline-block rounded-lg bg-red-500 px-5 py-2 text-center font-semibold leading-6 text-white transition duration-200 hover:bg-red-600" data-config-id="auto-txt-23-8">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

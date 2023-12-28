"use client";

export default function Profile() {
	return (
		<div className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
			<div className="mx-auto h-full max-w-7xl">
				<div className="mb-8 flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0 xl:gap-x-6">
					<div className="mb-4 flex w-full flex-col items-center space-y-2 sm:flex-row sm:justify-between sm:space-x-4 sm:space-y-0">
						<div>
							<h1 className="mb-sm text-xl font-semibold">Reviews</h1>
							<p className="text-[#ccc]">
								Your plan includes 1 production and 1 development branch. <a href="/bcw1995/byronwade-com/settings/plans">Upgrade your plan</a> for additional branches.
							</p>
						</div>
					</div>
				</div>
				<div className="mb-6 overflow-x-auto">test</div>
			</div>
		</div>
	);
}

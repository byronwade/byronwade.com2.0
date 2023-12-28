import { DollarSign, User } from "react-feather";

const tabs = [
	{ name: "Applied", href: "#", current: false },
	{ name: "Phone Screening", href: "#", current: false },
	{ name: "Interview", href: "#", current: true },
	{ name: "Offer", href: "#", current: false },
	{ name: "Hired", href: "#", current: false },
];

export default function Example() {
	return (
		<div className="mx-auto my-40 max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="-mx-4 mb-10 flex flex-wrap">
				<div className="dark:border-muted-800 mb-10 grid gap-4 border-b border-gray-200 pb-10 md:grid-cols-2 xl:gap-8">
					<div className="grid grid-cols-2 gap-2 xl:gap-6">
						<div className="group/nui-radio-headless relative">
							{/**/}
							<div className="relative">
								<input id="ninja-input-4282" type="radio" defaultValue="starter" name="radio_custom" className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0" />
								{/*[*/}
								<div className="nui-card nui-card-rounded nui-card-white text-muted-400/50 peer-checked:!border-success-500 peer-checked:text-success-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100">
									{/*[*/}
									<div className="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0">
										<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" style={{}} width="1em" height="1em" viewBox="0 0 24 24" data-v-26e5b7b0="">
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
										</svg>
									</div>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style={{ enableBackground: "new 0 0 500 500" }} xmlSpace="preserve" className="mx-auto mb-2 h-9 w-9 shrink-0">
										<g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_1_"
														d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_1_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_2_">
													<use xlinkHref="#LOGOSVGID_1_" className="overflow-visible" />
												</clipPath>
												<rect x="17.4" y={78} clipPath="url(#LOGOSVGID_2_)" width={422} height={422} fill="currentColor" />
											</g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_3_"
														d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_3_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_4_">
													<use xlinkHref="#LOGOSVGID_3_" className="overflow-visible" />
												</clipPath>
												<rect x={351} y={0} clipPath="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor" />
											</g>
										</g>
									</svg>
									<h4 className="nui-heading nui-heading-sm nui-weight-medium nui-lead-normal text-muted-800 dark:text-white">
										{/*[*/} Starter {/*]*/}
									</h4>
									<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-muted-400">
										{/*[*/}A basic plan made for quickstarts{/*]*/}
									</p>
									{/*]*/}
								</div>
								{/*]*/}
							</div>
						</div>
						<div className="group/nui-radio-headless relative">
							{/**/}
							<div className="relative">
								<input id="ninja-input-4283" type="radio" defaultValue="freelancer" name="radio_custom" className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0" />
								{/*[*/}
								<div className="nui-card nui-card-rounded nui-card-white text-muted-400/50 group relative p-6 text-center peer-checked:!border-yellow-400 peer-checked:text-yellow-400 peer-checked:[&_.child]:!opacity-100">
									{/*[*/}
									<div className="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0">
										<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" style={{}} width="1em" height="1em" viewBox="0 0 24 24" data-v-26e5b7b0="">
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
										</svg>
									</div>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style={{ enableBackground: "new 0 0 500 500" }} xmlSpace="preserve" className="mx-auto mb-2 h-9 w-9 shrink-0">
										<g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_1_"
														d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_1_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_2_">
													<use xlinkHref="#LOGOSVGID_1_" className="overflow-visible" />
												</clipPath>
												<rect x="17.4" y={78} clipPath="url(#LOGOSVGID_2_)" width={422} height={422} fill="currentColor" />
											</g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_3_"
														d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_3_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_4_">
													<use xlinkHref="#LOGOSVGID_3_" className="overflow-visible" />
												</clipPath>
												<rect x={351} y={0} clipPath="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor" />
											</g>
										</g>
									</svg>
									<h4 className="nui-heading nui-heading-sm nui-weight-medium nui-lead-normal text-muted-800 dark:text-white">
										{/*[*/} Freelancer {/*]*/}
									</h4>
									<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-muted-400">
										{/*[*/}A plan for heavy working freelancers{/*]*/}
									</p>
									{/*]*/}
								</div>
								{/*]*/}
							</div>
						</div>
						<div className="group/nui-radio-headless relative">
							{/**/}
							<div className="relative">
								<input id="ninja-input-4284" type="radio" defaultValue="business" name="radio_custom" className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0" />
								{/*[*/}
								<div className="nui-card nui-card-rounded nui-card-white text-muted-400/50 group relative p-6 text-center peer-checked:!border-indigo-500 peer-checked:text-indigo-500 peer-checked:[&_.child]:!opacity-100">
									{/*[*/}
									<div className="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0">
										<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" style={{}} width="1em" height="1em" viewBox="0 0 24 24" data-v-26e5b7b0="">
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
										</svg>
									</div>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style={{ enableBackground: "new 0 0 500 500" }} xmlSpace="preserve" className="mx-auto mb-2 h-9 w-9 shrink-0">
										<g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_1_"
														d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_1_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_2_">
													<use xlinkHref="#LOGOSVGID_1_" className="overflow-visible" />
												</clipPath>
												<rect x="17.4" y={78} clipPath="url(#LOGOSVGID_2_)" width={422} height={422} fill="currentColor" />
											</g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_3_"
														d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_3_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_4_">
													<use xlinkHref="#LOGOSVGID_3_" className="overflow-visible" />
												</clipPath>
												<rect x={351} y={0} clipPath="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor" />
											</g>
										</g>
									</svg>
									<h4 className="nui-heading nui-heading-sm nui-weight-medium nui-lead-normal text-muted-800 dark:text-white">
										{/*[*/} Business {/*]*/}
									</h4>
									<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-muted-400">
										{/*[*/}An affordable medium business plan{/*]*/}
									</p>
									{/*]*/}
								</div>
								{/*]*/}
							</div>
						</div>
						<div className="group/nui-radio-headless relative">
							{/**/}
							<div className="relative">
								<input id="ninja-input-4285" defaultChecked="" type="radio" defaultValue="enterprise" name="radio_custom" className="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0" />
								{/*[*/}
								<div className="nui-card nui-card-rounded nui-card-white text-muted-400/50 peer-checked:!border-primary-500 peer-checked:text-primary-500 group relative p-6 text-center peer-checked:[&_.child]:!opacity-100">
									{/*[*/}
									<div className="child border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute end-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border bg-white opacity-0">
										<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" style={{}} width="1em" height="1em" viewBox="0 0 24 24" data-v-26e5b7b0="">
											<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
										</svg>
									</div>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style={{ enableBackground: "new 0 0 500 500" }} xmlSpace="preserve" className="mx-auto mb-2 h-9 w-9 shrink-0">
										<g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_1_"
														d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_1_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_2_">
													<use xlinkHref="#LOGOSVGID_1_" className="overflow-visible" />
												</clipPath>
												<rect x="17.4" y={78} clipPath="url(#LOGOSVGID_2_)" width={422} height={422} fill="currentColor" />
											</g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_3_"
														d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_3_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_4_">
													<use xlinkHref="#LOGOSVGID_3_" className="overflow-visible" />
												</clipPath>
												<rect x={351} y={0} clipPath="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor" />
											</g>
										</g>
									</svg>
									<h4 className="nui-heading nui-heading-sm nui-weight-medium nui-lead-normal text-muted-800 dark:text-white">
										{/*[*/} Enterprise {/*]*/}
									</h4>
									<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-muted-400">
										{/*[*/}A corporate and full fledged company plan{/*]*/}
									</p>
									{/*]*/}
								</div>
								{/*]*/}
							</div>
						</div>
					</div>
					<div>
						<div className="nui-card nui-card-rounded nui-card-white p-8">
							{/*[*/}
							<div className="flex gap-12">
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style={{ enableBackground: "new 0 0 500 500" }} xmlSpace="preserve" className="text-success-500 h-12 w-12 shrink-0 shrink-0">
									<g>
										<g>
											<defs>
												<path
													id="LOGOSVGID_1_"
													d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
												/>
											</defs>
											<use xlinkHref="#LOGOSVGID_1_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
											<clipPath id="LOGOSVGID_2_">
												<use xlinkHref="#LOGOSVGID_1_" className="overflow-visible" />
											</clipPath>
											<rect x="17.4" y={78} clipPath="url(#LOGOSVGID_2_)" width={422} height={422} fill="currentColor" />
										</g>
										<g>
											<defs>
												<path
													id="LOGOSVGID_3_"
													d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
												/>
											</defs>
											<use xlinkHref="#LOGOSVGID_3_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
											<clipPath id="LOGOSVGID_4_">
												<use xlinkHref="#LOGOSVGID_3_" className="overflow-visible" />
											</clipPath>
											<rect x={351} y={0} clipPath="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor" />
										</g>
									</g>
								</svg>
								<div>
									<p className="nui-text nui-content-md nui-weight-semibold nui-lead-tight">
										{/*[*/}$9 <span className="text-muted-400 font-normal">/per month</span>
										{/*]*/}
									</p>
									<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-success-500 mb-2">
										{/*[*/}Billed $99 yearly{/*]*/}
									</p>
									<p className="nui-paragraph nui-paragraph-xs nui-weight-normal nui-lead-normal text-muted-500 dark:text-muted-400">
										{/*[*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilitatis causa amicitia est quaesita.{/*]*/}
									</p>
								</div>
							</div>
							<div className="my-4">
								<p className="nui-paragraph nui-paragraph-sm nui-weight-normal nui-lead-tight text-muted-500 dark:text-muted-400">
									{/*[*/} Tairo has incredible features and each plan perfectly adapts to your company, wether it is a small business or a bigger one. Tairo can also scale smoothly with you, as your business grows. {/*]*/}
								</p>
							</div>
							<div className="grid grid-cols-2 gap-6 font-sans text-xs">
								<div>
									<ul>
										{/*[*/}
										<li className="text-success-500 flex items-center gap-2">
											<svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" width="1em" height="1em" viewBox="0 0 24 24">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
											</svg>
											<span className="text-muted-400">3 seats</span>
										</li>
										<li className="text-success-500 flex items-center gap-2">
											<svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" width="1em" height="1em" viewBox="0 0 24 24">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
											</svg>
											<span className="text-muted-400">20 projects</span>
										</li>
										<li className="text-success-500 flex items-center gap-2">
											<svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" width="1em" height="1em" viewBox="0 0 24 24">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
											</svg>
											<span className="text-muted-400">20GB storage</span>
										</li>
										{/*]*/}
									</ul>
								</div>
								<div>
									<ul>
										{/*[*/}
										<li className="text-success-500 flex items-center gap-2">
											<svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" width="1em" height="1em" viewBox="0 0 24 24">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
											</svg>
											<span className="text-muted-400">Free 1 year support</span>
										</li>
										<li className="text-success-500 flex items-center gap-2">
											<svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" width="1em" height="1em" viewBox="0 0 24 24">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
											</svg>
											<span className="text-muted-400">Free 1 year updates</span>
										</li>
										<li className="text-success-500 flex items-center gap-2">
											<svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-3 w-3 text-current" width="1em" height="1em" viewBox="0 0 24 24">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
											</svg>
											<span className="text-muted-400">Free 1 year hosting</span>
										</li>
										{/*]*/}
									</ul>
								</div>
							</div>
							{/*]*/}
						</div>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-6">
					<div className="ltablet:col-span-7 col-span-12 sm:col-span-6 lg:col-span-7">
						<div className="flex flex-col gap-6">
							<div className="nui-card nui-card-rounded nui-card-white p-6">
								{/*[*/}
								<div className="mb-4 flex items-center justify-between">
									<h4 className="nui-heading nui-heading-sm nui-weight-semibold nui-lead-normal">
										{/*[*/} Used seats {/*]*/}
									</h4>
									<div>
										<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-muted-400">
											{/*[*/}6/8 remaining{/*]*/}
										</p>
									</div>
								</div>
								<div className="xs:flex-wrap ptablet:flex-wrap ltablet:justify-between flex items-center gap-2 lg:justify-between">
									<div className="xs:flex-wrap ptablet:flex-wrap flex items-center gap-2">
										<div className="nui-avatar nui-avatar-sm nui-avatar-full" data-nui-tooltip="Maya R.">
											<div className="nui-avatar-inner">
												{/*[*/}
												<img src="/img/avatars/2.svg" className="nui-avatar-img" />
												{/**/}
												{/**/}
												{/*]*/}
											</div>
											{/**/}
											{/**/}
										</div>
										<div className="nui-avatar nui-avatar-sm nui-avatar-full" data-nui-tooltip="Kendra W.">
											<div className="nui-avatar-inner">
												{/*[*/}
												<img src="/img/avatars/10.svg" className="nui-avatar-img" />
												{/**/}
												{/**/}
												{/*]*/}
											</div>
											{/**/}
											{/**/}
										</div>
										<div className="nui-avatar nui-avatar-sm nui-avatar-full bg-lime-500/20 text-lime-500" data-nui-tooltip="Oliver D.">
											<div className="nui-avatar-inner">
												{/*[*/}
												{/**/}
												{/**/}
												<span className="nui-avatar-text">OD</span>
												{/*]*/}
											</div>
											{/**/}
											{/**/}
										</div>
										<div className="nui-avatar nui-avatar-sm nui-avatar-full" data-nui-tooltip="Hermann M.">
											<div className="nui-avatar-inner">
												{/*[*/}
												<img src="/img/avatars/16.svg" className="nui-avatar-img" />
												{/**/}
												{/**/}
												{/*]*/}
											</div>
											{/**/}
											{/**/}
										</div>
										<div className="nui-avatar nui-avatar-sm nui-avatar-full bg-info-500/20 text-info-500" data-nui-tooltip="Matteus C.">
											<div className="nui-avatar-inner">
												{/*[*/}
												{/**/}
												{/**/}
												<span className="nui-avatar-text">MC</span>
												{/*]*/}
											</div>
											{/**/}
											{/**/}
										</div>
										<div className="nui-avatar nui-avatar-sm nui-avatar-full bg-purple-500/20 text-purple-500" data-nui-tooltip="Gorav M.">
											<div className="nui-avatar-inner">
												{/*[*/}
												{/**/}
												{/**/}
												<span className="nui-avatar-text">GM</span>
												{/*]*/}
											</div>
											{/**/}
											{/**/}
										</div>
									</div>
									<div>
										<button type="button" className="border-muted-200 dark:border-muted-700 hover:border-primary-500 dark:hover:border-primary-500 text-muted-400 dark:text-muted-600 hover:text-primary-500 dark:hover:text-primary-500 h-10 w-10 rounded-full border-2 border-dashed transition-all duration-300 hover:border-solid" data-nui-tooltip="Manage plan seats">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon h-4 w-4" style={{}} width="1em" height="1em" viewBox="0 0 24 24" data-v-26e5b7b0="">
												<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1l1-4L16.5 3.5z" />
											</svg>
										</button>
									</div>
								</div>
								{/*]*/}
							</div>
							<div className="nui-card nui-card-rounded nui-card-white p-6">
								{/*[*/}
								<div className="mb-8 flex items-center justify-between">
									<h4 className="nui-heading nui-heading-sm nui-weight-semibold nui-lead-normal">
										{/*[*/} Billing options {/*]*/}
									</h4>
									<div>
										<p className="nui-text nui-content-xs nui-weight-normal nui-lead-tight text-muted-400">
											{/*[*/}
											{/*]*/}
										</p>
									</div>
								</div>
								<div className="space-y-6">
									<label htmlFor="billing-ball-1" className="nui-switch-ball nui-switch-ball-primary">
										<span className="nui-switch-ball-outer">
											<input id="billing-ball-1" type="checkbox" className="nui-switch-ball-input peer" />
											<span className="nui-switch-ball-handle" />
											<span className="nui-switch-ball-track" />
											<svg aria-hidden="true" viewBox="0 0 17 12" className="nui-switch-ball-icon">
												<path fill="currentColor" d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z" />
											</svg>
										</span>
										<span className="nui-switch-ball-dual-label">
											<span className="nui-switch-ball-label">Invoicing</span>
											<span className="nui-switch-ball-sublabel">Send new invoices to my inbox</span>
										</span>
									</label>
									<label htmlFor="billing-ball-2" className="nui-switch-ball nui-switch-ball-primary">
										<span className="nui-switch-ball-outer">
											<input id="billing-ball-2" defaultChecked="" type="checkbox" className="nui-switch-ball-input peer" />
											<span className="nui-switch-ball-handle" />
											<span className="nui-switch-ball-track" />
											<svg aria-hidden="true" viewBox="0 0 17 12" className="nui-switch-ball-icon">
												<path fill="currentColor" d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z" />
											</svg>
										</span>
										<span className="nui-switch-ball-dual-label">
											<span className="nui-switch-ball-label">Warnings</span>
											<span className="nui-switch-ball-sublabel">Warn me before the end of the billing period</span>
										</span>
									</label>
									<label htmlFor="billing-ball-3" className="nui-switch-ball nui-switch-ball-primary">
										<span className="nui-switch-ball-outer">
											<input id="billing-ball-3" defaultChecked="" type="checkbox" className="nui-switch-ball-input peer" />
											<span className="nui-switch-ball-handle" />
											<span className="nui-switch-ball-track" />
											<svg aria-hidden="true" viewBox="0 0 17 12" className="nui-switch-ball-icon">
												<path fill="currentColor" d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z" />
											</svg>
										</span>
										<span className="nui-switch-ball-dual-label">
											<span className="nui-switch-ball-label">Reports</span>
											<span className="nui-switch-ball-sublabel">Send monthly reports to my inbox</span>
										</span>
									</label>
								</div>
								{/*]*/}
							</div>
							<div className="nui-card nui-card-rounded nui-card-white p-6">
								{/*[*/}
								<div className="mb-8 flex items-center justify-between">
									<h4 className="nui-heading nui-heading-sm nui-weight-semibold nui-lead-normal">
										{/*[*/} Billing cycle {/*]*/}
									</h4>
									<div>
										<a className="text-primary-500 font-sans text-xs underline underline-offset-4">My invoices</a>
									</div>
								</div>
								<div className="flex items-center gap-6">
									<div className="nui-radio nui-radio-primary">
										<div className="nui-radio-outer">
											<input id="demo-cycle-1" defaultChecked="" name="monthly_billing" type="radio" defaultValue="monthly" className="nui-radio-input" />
											<div className="nui-radio-inner" />
											<div className="nui-radio-dot" />
										</div>
										<div className="nui-radio-label-wrapper">
											<label htmlFor="demo-cycle-1" className="nui-radio-label-text">
												{/*[*/}Monthly{/*]*/}
											</label>
											{/**/}
										</div>
									</div>
									<div className="nui-radio nui-radio-primary">
										<div className="nui-radio-outer">
											<input id="demo-cycle-2" name="semestral_billing" type="radio" defaultValue="semestral" className="nui-radio-input" />
											<div className="nui-radio-inner" />
											<div className="nui-radio-dot" />
										</div>
										<div className="nui-radio-label-wrapper">
											<label htmlFor="demo-cycle-2" className="nui-radio-label-text">
												{/*[*/}Semestral{/*]*/}
											</label>
											{/**/}
										</div>
									</div>
									<div className="nui-radio nui-radio-primary">
										<div className="nui-radio-outer">
											<input id="demo-cycle-3" name="yearly_billing" type="radio" defaultValue="yearly" className="nui-radio-input" />
											<div className="nui-radio-inner" />
											<div className="nui-radio-dot" />
										</div>
										<div className="nui-radio-label-wrapper">
											<label htmlFor="demo-cycle-3" className="nui-radio-label-text">
												{/*[*/}Yearly{/*]*/}
											</label>
											{/**/}
										</div>
									</div>
								</div>
								{/*]*/}
							</div>
						</div>
					</div>
					<div className="ltablet:col-span-5 col-span-12 sm:col-span-6 lg:col-span-5">
						<div className="nui-card nui-card-rounded nui-card-white p-6">
							{/*[*/}
							<div className="mb-4">
								<h4 className="nui-heading nui-heading-sm nui-weight-semibold nui-lead-normal">
									{/*[*/} Payment information {/*]*/}
								</h4>
							</div>
							<div className="dark:bg-muted-900 border-muted-200 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative mx-auto h-[200px] w-full max-w-[315px] rounded-xl border bg-white p-6 shadow-xl">
								<div className="flex h-full flex-col gap-3">
									<div className="flex items-center gap-2">
										<div className="bg-muted-200 dark:bg-muted-700 h-2 w-2 rounded-full" />
										<span className="text-muted-400 font-sans text-sm"> Mastercard </span>
									</div>
									<div className="mt-auto space-y-1">
										<img className="mb-3 w-11" src="/img/illustrations/card-chip.svg" alt="Card chip" width={44} height={31} />
										<div>
											<h5 className="font-heading text-muted-500 text-sm" x-text="cardholder">
												•••••• ••••••
											</h5>
										</div>
										<div>
											<p className="font-heading text-muted-400 text-xs">
												<span>•••• •••• •••• ••••</span>
											</p>
										</div>
										<div className="font-heading text-muted-400 flex w-full items-center gap-2 text-xs">
											<div className="flex items-center gap-2">
												<span>EXP</span>
												<span>••/••</span>
											</div>
											<div className="flex items-center gap-2">
												<span>CVC</span>
												<span>•••</span>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute end-5 top-4 flex">
									<div className="-me-2 h-9 w-9 rounded-full bg-rose-500/60" />
									<div className="relative z-10 -ms-2 h-9 w-9 rounded-full bg-yellow-500/60" />
								</div>
								<div className="absolute bottom-7 end-5 flex">
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style={{ enableBackground: "new 0 0 500 500" }} xmlSpace="preserve" className="text-primary-500 h-10 w-10 shrink-0">
										<g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_1_"
														d="M228.4,181.2c59.6,0,107.8,48.3,107.8,107.8c0,59.6-48.3,107.8-107.8,107.8
					c-59.6,0-107.8-48.3-107.8-107.8C120.6,229.5,168.8,181.2,228.4,181.2 M228.4,78c-116.5,0-211,94.5-211,211
					c0,116.5,94.5,211,211,211c116.5,0,211-94.5,211-211c0-25.2-4.4-49.5-12.6-71.9c-5.2-14.4-16.9-24.2-32-26.9
					c-45.1-7.9-82-39.7-97.1-81.9c-5.2-14.5-16.8-24.3-31.9-27C253.7,79.2,241.2,78,228.4,78z"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_1_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_2_">
													<use xlinkHref="#LOGOSVGID_1_" className="overflow-visible" />
												</clipPath>
												<rect x="17.4" y={78} clipPath="url(#LOGOSVGID_2_)" width={422} height={422} fill="currentColor" />
											</g>
											<g>
												<defs>
													<path
														id="LOGOSVGID_3_"
														d="M416.8,0c36.3,0,65.8,29.5,65.8,65.8c0,36.3-29.5,65.8-65.8,65.8c-36.3,0-65.8-29.5-65.8-65.8
					C351,29.5,380.5,0,416.8,0"
													/>
												</defs>
												<use xlinkHref="#LOGOSVGID_3_" clipRule="evenodd" fillRule="evenodd" fill="currentColor" className="overflow-visible" />
												<clipPath id="LOGOSVGID_4_">
													<use xlinkHref="#LOGOSVGID_3_" className="overflow-visible" />
												</clipPath>
												<rect x={351} y={0} clipPath="url(#LOGOSVGID_4_)" width="131.6" height="131.6" fill="currentColor" />
											</g>
										</g>
									</svg>
								</div>
							</div>
							<div className="mt-5">
								<form>
									<div className="grid grid-cols-12 gap-4">
										<div className="col-span-12">
											<div className="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded">
												<label className="nui-input-label" htmlFor="ninja-input-5">
													Name on card
												</label>
												<div className="nui-input-outer">
													<div>
														<input id="ninja-input-5" type="text" className="nui-input" placeholder="ex: John Doe" />
														{/**/}
														{/**/}
														{/**/}
													</div>
													{/**/}
												</div>
											</div>
										</div>
										<div className="col-span-12">
											<div className="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded">
												<label className="nui-input-label" htmlFor="ninja-input-6">
													Card number
												</label>
												<div className="nui-input-outer">
													<div>
														<input id="ninja-input-6" type="text" className="nui-input" placeholder="ex: 4242 4242 4242 4242" />
														{/**/}
														{/**/}
														{/**/}
													</div>
													{/**/}
												</div>
											</div>
										</div>
										<div className="col-span-12">
											<div className="grid gap-4 sm:grid-cols-3">
												<div>
													<div className="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded">
														<label className="nui-select-label" htmlFor="ninja-input-7">
															Exp. month
														</label>
														<div className="nui-select-outer">
															<select id="ninja-input-7" className="nui-select">
																{/**/}
																<option value="">Month</option>
																<option value="01">01</option>

																<option value="02">02</option>
																<option value="03">03</option>
																<option value="04">04</option>
																<option value="05">05</option>
																<option value="06">06</option>
																<option value="07">07</option>
																<option value="08">08</option>
																<option value="09">09</option>

																<option value={10}>10</option>
																<option value={11}>11</option>
																<option value={12}>12</option>
															</select>
															{/**/}
															{/**/}
															{/**/}
															<div className="nui-select-chevron">
																<svg aria-hidden="true" viewBox="0 0 24 24" className="nui-select-chevron-inner">
																	<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
																</svg>
															</div>
															{/**/}
														</div>
													</div>
												</div>
												<div>
													<div className="nui-select-wrapper nui-select-default nui-select-md nui-select-rounded">
														<label className="nui-select-label" htmlFor="ninja-input-8">
															Exp. month
														</label>
														<div className="nui-select-outer">
															<select id="ninja-input-8" className="nui-select">
																{/**/}
																<option value="">Year</option>
																<option value={23}>23</option>
																<option value={24}>24</option>
																<option value={25}>25</option>
																<option value={26}>26</option>
																<option value={27}>27</option>
																<option value={28}>28</option>
																<option value={29}>29</option>
																<option value={30}>30</option>
															</select>
															{/**/}
															{/**/}
															{/**/}
															<div className="nui-select-chevron">
																<svg aria-hidden="true" viewBox="0 0 24 24" className="nui-select-chevron-inner">
																	<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
																</svg>
															</div>
															{/**/}
														</div>
													</div>
												</div>
												<div>
													<div className="nui-input-wrapper nui-input-default nui-input-md nui-input-rounded">
														<label className="nui-input-label" htmlFor="ninja-input-9">
															CVC
														</label>
														<div className="nui-input-outer">
															<div>
																<input id="ninja-input-9" type="text" className="nui-input" placeholder="ex: 239" />
																{/**/}
																{/**/}
																{/**/}
															</div>
															{/**/}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
							{/*]*/}
						</div>
					</div>
				</div>

				<div className="mb-4 w-full px-4 md:mb-0 md:w-1/2">
					<div className="h-full rounded-md bg-[#252525] p-6">
						<div className="flex items-center">
							<div className="bg-brown-600 mr-4 flex h-12 w-12 items-center justify-center self-start rounded-md">
								<DollarSign className={`text-brown-900`} size="20" />
							</div>
							<div>
								<h5 className="text-xs font-semibold leading-6 text-gray-300" data-config-id="auto-txt-1-9">
									Monthly Payment
								</h5>
								<div className="flex items-end font-semibold leading-none text-gray-100">
									<span className="text-2xl" data-config-id="auto-txt-2-9">
										$10
									</span>
									<span className="pb-1 text-sm" data-config-id="auto-txt-3-9">
										/month
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full px-4 md:w-1/2">
					<div className="h-full rounded-md bg-[#252525] p-6">
						<div className="flex items-center">
							<div className="bg-brown-600 mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center self-start rounded-md">
								<User className={`text-brown-900`} size="20" />
							</div>
							<div>
								<h5 className="text-xs font-semibold leading-6 text-gray-300" data-config-id="auto-txt-4-9">
									Total Clients
								</h5>
								<div className="flex items-center text-2xl font-semibold leading-none text-gray-100">
									<span data-config-id="auto-txt-5-9">145</span>
									<span className="ml-2 inline-block rounded-full bg-teal-900 px-2 py-1 text-xs font-medium text-green-500" data-config-id="auto-txt-6-9">
										+12.0%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-10 rounded-md bg-[#252525] px-10 pb-10 pt-6">
				<div className="-mx-4 mb-6 flex flex-wrap items-center justify-between">
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
				</div>
				<div className="mb-4 rounded-md bg-[#383a3a] px-6 py-5 sm:flex sm:items-start sm:justify-between">
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
							<div className="text-sm font-medium text-white">Ending with 4242</div>
							<div className="mt-1 text-sm text-neutral-400 sm:flex sm:items-center">
								<div>Expires 12/20</div>
								<span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
									&middot;
								</span>
								<div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
							</div>
						</div>
					</div>
					<div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
						<button type="button" className="mr-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
							Edit
						</button>

						<button type="button" className="inline-block rounded-md bg-red-500 px-5 py-2 text-center text-sm font-semibold text-white transition duration-200 hover:bg-red-600">
							Delete
						</button>
					</div>
				</div>

				<div className="rounded-md bg-[#383a3a] px-6 py-5 sm:flex sm:items-start sm:justify-between">
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
							<div className="text-sm font-medium text-white">Ending with 4242</div>
							<div className="mt-1 text-sm text-neutral-400 sm:flex sm:items-center">
								<div>Expires 12/20</div>
								<span className="hidden sm:mx-2 sm:inline" aria-hidden="true">
									&middot;
								</span>
								<div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
							</div>
						</div>
					</div>
					<div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0">
						<button type="button" className="mr-2 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
							Edit
						</button>

						<button type="button" className="inline-block rounded-md bg-red-500 px-5 py-2 text-center text-sm font-semibold text-white transition duration-200 hover:bg-red-600">
							Delete
						</button>
					</div>
				</div>
			</div>
			<div className="mb-10 rounded-md bg-[#252525] p-6">
				<h4 className="mb-6 text-lg font-semibold text-gray-100" data-config-id="auto-txt-14-9">
					Invoices
				</h4>
				<div className="mt-6 w-full overflow-x-scroll pb-4">
					<table className="w-full min-w-max">
						<thead>
							<tr className="text-left">
								<th className="p-0">
									<div className="rounded-l-xl bg-gray-600 px-6 py-3">
										<span className="text-xs font-semibold text-gray-300" data-config-id="auto-txt-15-9">
											INVOICE ID
										</span>
									</div>
								</th>
								<th className="p-0">
									<div className="bg-gray-600 px-6 py-3">
										<span className="text-xs font-semibold text-gray-300" data-config-id="auto-txt-16-9">
											AMOUNT
										</span>
									</div>
								</th>
								<th className="p-0">
									<div className="bg-gray-600 px-6 py-3">
										<button className="inline-flex items-center text-xs font-semibold text-gray-300">
											<span className="mr-2" data-config-id="auto-txt-17-9">
												DATE
											</span>
											<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-9">
												<path
													d="M7.8598 8.52669L4.9998 11.3934L2.1398 8.52669C2.01426 8.40115 1.844 8.33063 1.66646 8.33063C1.48893 8.33063 1.31867 8.40115 1.19313 8.52669C1.0676 8.65222 0.99707 8.82249 0.99707 9.00002C0.99707 9.17756 1.0676 9.34782 1.19313 9.47335L4.52646 12.8067C4.58844 12.8692 4.66217 12.9188 4.74341 12.9526C4.82465 12.9865 4.91179 13.0039 4.9998 13.0039C5.08781 13.0039 5.17494 12.9865 5.25618 12.9526C5.33742 12.9188 5.41116 12.8692 5.47313 12.8067L8.80646 9.47335C8.86862 9.41119 8.91793 9.3374 8.95157 9.25619C8.98521 9.17497 9.00252 9.08793 9.00252 9.00002C9.00252 8.91211 8.98521 8.82507 8.95157 8.74385C8.91793 8.66264 8.86862 8.58885 8.80646 8.52669C8.7443 8.46453 8.67051 8.41522 8.5893 8.38158C8.50808 8.34794 8.42104 8.33063 8.33313 8.33063C8.24522 8.33063 8.15818 8.34794 8.07696 8.38158C7.99575 8.41522 7.92196 8.46453 7.8598 8.52669ZM2.1398 5.47335L4.9998 2.60669L7.8598 5.47335C7.92177 5.53584 7.99551 5.58544 8.07675 5.61928C8.15799 5.65313 8.24512 5.67055 8.33313 5.67055C8.42114 5.67055 8.50828 5.65313 8.58952 5.61928C8.67075 5.58544 8.74449 5.53584 8.80646 5.47335C8.86895 5.41138 8.91855 5.33764 8.95239 5.2564C8.98624 5.17517 9.00366 5.08803 9.00366 5.00002C9.00366 4.91201 8.98624 4.82488 8.95239 4.74364C8.91855 4.6624 8.86895 4.58866 8.80646 4.52669L5.47313 1.19335C5.41116 1.13087 5.33742 1.08127 5.25618 1.04743C5.17494 1.01358 5.08781 0.996155 4.9998 0.996155C4.91179 0.996155 4.82465 1.01358 4.74341 1.04743C4.66217 1.08127 4.58844 1.13087 4.52646 1.19335L1.19313 4.52669C1.0676 4.65222 0.99707 4.82249 0.99707 5.00002C0.99707 5.17756 1.0676 5.34782 1.19313 5.47335C1.31867 5.59889 1.48893 5.66941 1.66646 5.66941C1.844 5.66941 2.01426 5.59889 2.1398 5.47335Z"
													fill="currentColor"
												></path>
											</svg>
										</button>
									</div>
								</th>
								<th className="p-0">
									<div className="rounded-r-xl bg-gray-600 px-5 py-3">
										<span className="text-xs font-semibold text-gray-300" data-config-id="auto-txt-18-9">
											STATUS
										</span>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="p-0">
									<div className="h-16 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-19-9">
											INVOICE #3405
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-20-9">
											$25.00
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-21-9">
											July 06, 2022
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<div className="flex h-full items-center">
											<span className="mr-1 inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
											<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-22-9">
												Pending
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td className="p-0">
									<div className="h-16 rounded-l-xl bg-gray-600 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-23-9">
											INVOICE #3405
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 bg-gray-600 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-24-9">
											$25.00
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 bg-gray-600 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-25-9">
											July 06, 2022
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="flex h-16 items-center rounded-r-xl bg-gray-600 p-6">
										<span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"></span>
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-26-9">
											Delivered
										</span>
									</div>
								</td>
							</tr>
							<tr>
								<td className="p-0">
									<div className="h-16 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-27-9">
											INVOICE #3405
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-28-9">
											$25.00
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-29-9">
											July 06, 2022
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<div className="flex h-full items-center">
											<span className="mr-1 inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
											<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-30-9">
												Pending
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td className="p-0">
									<div className="h-16 rounded-l-xl bg-gray-600 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-31-9">
											INVOICE #3405
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 bg-gray-600 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-32-9">
											$25.00
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 bg-gray-600 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-33-9">
											July 06, 2022
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="flex h-16 items-center rounded-r-xl bg-gray-600 p-6">
										<span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-500"></span>
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-34-9">
											Refunded
										</span>
									</div>
								</td>
							</tr>
							<tr>
								<td className="p-0">
									<div className="h-16 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-35-9">
											INVOICE #3405
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-36-9">
											$25.00
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-37-9">
											July 06, 2022
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 p-6">
										<div className="flex h-full items-center">
											<span className="mr-1 inline-block h-2 w-2 rounded-full bg-yellow-500"></span>
											<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-38-9">
												Pending
											</span>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td className="p-0">
									<div className="h-16 rounded-l-xl bg-gray-600 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-39-9">
											INVOICE #3405
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 bg-gray-600 p-6">
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-40-9">
											$25.00
										</span>
									</div>
								</td>
								<td className="p-0">
									<div className="h-16 bg-gray-600 p-6">
										<h5 className="text-sm font-medium text-gray-100" data-config-id="auto-txt-41-9">
											July 06, 2022
										</h5>
									</div>
								</td>
								<td className="p-0">
									<div className="flex h-16 items-center rounded-r-xl bg-gray-600 p-6">
										<span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-500"></span>
										<span className="text-sm font-medium text-gray-100" data-config-id="auto-txt-42-9">
											Refunded
										</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="flex flex-wrap rounded-md bg-[#252525] p-6">
				<div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
					<div className="mx-auto max-w-xs">
						<h4 className="mb-1 font-bold text-gray-50" data-config-id="auto-txt-43-9">
							Auto renewal
						</h4>
						<p className="mb-4 text-xs font-medium leading-5 text-gray-300" data-config-id="auto-txt-44-9">
							All subscriptions are set to automatically renew, unless you cancel before the next renewal date.
						</p>
						<div className="flex items-center">
							<button className="bg-brown-500 mr-3 flex h-6 w-11 items-center justify-center rounded-full">
								<div className="h-5 w-5 rounded-full bg-transparent"></div>
								<div className="h-5 w-5 rounded-full bg-white"></div>
							</button>
							<span className="text-xs font-medium text-gray-300" data-config-id="auto-txt-45-9">
								Auto renewal is turrned on
							</span>
						</div>
					</div>
				</div>
				<div className="w-full px-4 md:w-1/2">
					<div className="mx-auto max-w-xs">
						<h4 className="mb-1 font-bold text-gray-50" data-config-id="auto-txt-46-9">
							Cancel Subscription
						</h4>
						<p className="mb-5 text-xs font-medium leading-5 text-gray-300" data-config-id="auto-txt-47-9">
							You will lose access to all premium features in your current subscription plan
						</p>
						<a className="inline-block text-xs font-medium text-red-600 hover:underline" href="#" data-config-id="auto-txt-48-9">
							Cancel Subscription
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

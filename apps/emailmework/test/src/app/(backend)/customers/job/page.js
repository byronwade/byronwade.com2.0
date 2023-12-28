import Link from "next/link";

export default function Job() {
	return (
		<div className="mx-auto my-40 max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="grid w-full grid-cols-12 justify-items-center lg:gap-8">
				<div className="col-span-12 lg:w-10/12 xl:col-span-8 xl:w-full">
					<div>
						<div className="rounded-md bg-[#252525] p-8 text-white">
							<Link href="/customers" className="bg-base-content/5 text-base-content/60 hover:bg-primary hover:text-primary-content flex w-fit items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium transition hover:duration-500">
								<span>
									<svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M5.13591 0.598461C4.87963 0.34218 4.46412 0.34218 4.20784 0.598461L0.270336 4.53596C0.0140553 4.79224 0.0140553 5.20776 0.270336 5.46404L4.20784 9.40154C4.46412 9.65782 4.87963 9.65782 5.13591 9.40154C5.3922 9.14526 5.3922 8.72974 5.13591 8.47346L2.3187 5.65625H9.26562C9.62806 5.65625 9.92188 5.36244 9.92188 5C9.92188 4.63756 9.62806 4.34375 9.26562 4.34375H2.3187L5.13591 1.52654C5.3922 1.27026 5.3922 0.854743 5.13591 0.598461Z"
											fill="currentColor"
										/>
									</svg>
								</span>
								Back
							</Link>
							<div className="mt-6 flex flex-col items-start gap-6 pb-6 md:flex-row md:items-center">
								<img alt="company logo" loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="bg-primary rounded-md p-2" srcSet="https://jobboard-template.vercel.app/_next/image?url=%2Fimages%2Fcompany-logo.png&w=96&q=75" style={{ color: "transparent" }} />
								<div>
									<p className="text-base-content text-base font-medium">Microsoft</p>
									<h6 className="text-base-content mt-1 text-3xl font-medium">Need Senior MERN Stack Developer</h6>
								</div>
							</div>
							<div className="block xl:hidden">
								<div className="rounded-md bg-[#252525]">
									<button className="bg-primary hover:bg-primary-focus text-primary-content flex w-fit items-center gap-3 rounded-md px-5 py-3 text-base font-semibold transition hover:duration-500">
										Apply Now
										<span>
											<svg className="text-xl" width={18} height={18} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g opacity="0.6">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M6.86409 2.59846C7.12037 2.34218 7.53588 2.34218 7.79216 2.59846L11.7297 6.53596C11.9859 6.79224 11.9859 7.20776 11.7297 7.46404L7.79216 11.4015C7.53588 11.6578 7.12037 11.6578 6.86409 11.4015C6.6078 11.1453 6.6078 10.7297 6.86409 10.4735L9.6813 7.65625H2.73438C2.37194 7.65625 2.07812 7.36244 2.07812 7C2.07812 6.63756 2.37194 6.34375 2.73438 6.34375H9.6813L6.86409 3.52654C6.6078 3.27026 6.6078 2.85474 6.86409 2.59846Z"
														fill="currentColor"
													/>
												</g>
											</svg>
										</span>
									</button>
									<div className="mt-3">
										<div className="flex items-center justify-between py-5">
											<p className="text-base-content text-base">Date Posted</p>
											<p className="text-base-content text-base font-medium">Apr 04, 2023</p>
										</div>
										<div className="flex items-center justify-between py-5">
											<p className="text-base-content text-base">Job Type</p>
											<p className="text-base-content text-base font-medium">Full Time</p>
										</div>
										<div className="flex items-center justify-between py-5">
											<p className="text-base-content text-base">Job Role</p>
											<p className="text-base-content text-base font-medium">Product Designer</p>
										</div>
										<div className="flex items-center justify-between py-5">
											<p className="text-base-content text-base">Salary</p>
											<p className="text-base-content text-base font-medium">$5k - 7k</p>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-8 pb-8">
								<h5 className="text-base-content text-2xl font-bold">Description</h5>
								<h6 className="text-base-content mt-8 text-xl font-bold">Overview</h6>
								<p className="text-base-content/80 mt-3 text-lg">
									Here is a sample job description for a social media manager: Are you passionate about creating engaging and creative content for social media platforms? Do you have experience in managing and growing online communities? If yes, then we are looking for you! We are a leading digital marketing agency that helps clients achieve their business goals through effective social media strategies. We are looking for a social media manager who can plan, create, and
									execute campaigns for various platforms such as Facebook, Instagram, Twitter, and LinkedIn.
								</p>
								<div className="mt-8">
									<h6 className="text-base-content text-xl font-bold">Requirements</h6>
									<ul className="mt-3 flex flex-col gap-3" style={{ listStyle: "disc" }}>
										<li className="text-base-content/80 text-lg">You have at least 4 years of experience including solid experience as a UI designer in SaaS or an ecommerce solution with a strong portfolio of related projects</li>
										<li className="text-base-content/80 text-lg">You are proficient in Adobe Creative Suite (specifically Illustrator, InDesign and Photoshop)</li>
										<li className="text-base-content/80 text-lg">You are proficient in prototyping tools such as Sketch</li>
										<li className="text-base-content/80 text-lg">Basic HTML5, CSS3, and JavaScript skills are a plus</li>
										<li className="text-base-content/80 text-lg">You pay strong attention to detail and have a keen eye for aesthetics</li>
										<li className="text-base-content/80 text-lg">You have excellent communication skills and can clearly articulate your ideas, designs, and suggestions</li>
										<li className="text-base-content/80 text-lg">You have an amazing track record of success, are highly goal-driven, and work well in fast-paced environments</li>
									</ul>
								</div>
								<div className="mt-8">
									<h6 className="text-base-content text-xl font-bold">Skill &amp; Experience</h6>
									<ul className="mt-3 flex flex-col gap-3" style={{ listStyle: "disc" }}>
										<li className="text-base-content/80 text-lg">You have at least 4 years of experience including solid experience as a UI designer in SaaS or an ecommerce solution with a strong portfolio of related projects</li>
										<li className="text-base-content/80 text-lg">You are proficient in Adobe Creative Suite (specifically Illustrator, InDesign and Photoshop)</li>
										<li className="text-base-content/80 text-lg">You are proficient in prototyping tools such as Sketch</li>
										<li className="text-base-content/80 text-lg">Basic HTML5, CSS3, and JavaScript skills are a plus</li>
										<li className="text-base-content/80 text-lg">You pay strong attention to detail and have a keen eye for aesthetics</li>
										<li className="text-base-content/80 text-lg">You have excellent communication skills and can clearly articulate your ideas, designs, and suggestions</li>
										<li className="text-base-content/80 text-lg">You have an amazing track record of success, are highly goal-driven, and work well in fast-paced environments</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden xl:col-span-4 xl:block">
					<div className="rounded-md bg-[#252525] p-8">
						<button className="bg-primary hover:bg-primary-focus text-primary-content flex w-full items-center justify-end rounded-md px-5 py-3 text-base font-semibold transition hover:duration-500">
							<span className="mr-12"> Apply for this position</span>
							<span>
								<svg className="text-xl" width={18} height={18} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g opacity="0.6">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M6.86409 2.59846C7.12037 2.34218 7.53588 2.34218 7.79216 2.59846L11.7297 6.53596C11.9859 6.79224 11.9859 7.20776 11.7297 7.46404L7.79216 11.4015C7.53588 11.6578 7.12037 11.6578 6.86409 11.4015C6.6078 11.1453 6.6078 10.7297 6.86409 10.4735L9.6813 7.65625H2.73438C2.37194 7.65625 2.07812 7.36244 2.07812 7C2.07812 6.63756 2.37194 6.34375 2.73438 6.34375H9.6813L6.86409 3.52654C6.6078 3.27026 6.6078 2.85474 6.86409 2.59846Z"
											fill="currentColor"
										/>
									</g>
								</svg>
							</span>
						</button>
						<div className="mt-3">
							<div className="flex items-center justify-between py-5">
								<p className="text-base-content text-base">Date Posted</p>
								<p className="text-base-content text-base font-medium">Apr 04, 2023</p>
							</div>
							<div className="flex items-center justify-between py-5">
								<p className="text-base-content text-base">Job Type</p>
								<p className="text-base-content text-base font-medium">Full Time</p>
							</div>
							<div className="flex items-center justify-between py-5">
								<p className="text-base-content text-base">Job Role</p>
								<p className="text-base-content text-base font-medium">Product Designer</p>
							</div>
							<div className="flex items-center justify-between py-5">
								<p className="text-base-content text-base">Salary</p>
								<p className="text-base-content text-base font-medium">$5k - 7k</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

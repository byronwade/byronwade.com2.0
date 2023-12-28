"use client";
import { useTheme } from "../../../../context/ThemeContext"; // Adjust the import path

const colorModes = {
	"bg-[#1c1c1c]": "[#cccccc]",
	"bg-[#cccccc]": "[#1c1c1c]",
};

function getContrastColor(currentMode, inverse = false) {
	const color = colorModes[currentMode];
	if (!color) return currentMode; // Return original mode if not found in the map

	if (inverse) {
		return currentMode === "bg-[#1c1c1c]" ? "bg-[#cccccc]" : "bg-[#1c1c1c]";
	}
	return color;
}

export default function Upgrade() {
	const { mode, toggleMode } = useTheme();

	const color = getContrastColor(mode);
	const inverseColor = getContrastColor(mode, true);
	return (
		<div className="relative mx-auto my-40 w-full max-w-7xl items-center">
			<div className="mx-auto flex w-full flex-wrap items-start justify-center gap-4 px-5 lg:px-0">
				<div className="w-full md:text-center lg:w-2/6 lg:text-left xl:w-1/3">
					<div className="flex flex-col p-8 lg:p-0">
						<strong className="text-brown-500 mb-1 text-xs font-semibold uppercase tracking-widest"> Safe payments with Gumroad </strong>
						<span className="tracking-relaxed mb-8 text-2xl font-bold text-white lg:text-5xl"> Pricing </span>
						<p className="mx-auto mb-4 text-xl font-light text-white text-opacity-70 lg:pr-10">Use the free templates with your whole team or choose a premium.</p>
						<p className="mx-auto mb-2 text-xl font-light text-white text-opacity-70 lg:pr-10">Get the bundle and get lifetime support and one year updates.</p>
					</div>
				</div>
				<div className="w-full md:w-2/6 xl:w-1/4">
					<div className="relative flex h-full flex-col rounded-xl bg-gray-50 p-8 hover:border-white">
						<span className="mb-4 text-base font-medium uppercase tracking-widest text-neutral-600"> Starter </span>
						<span className="mb-8 flex items-center text-base font-medium tracking-tight text-neutral-600"> Try and decide. </span>
						<div className="flex items-end text-3xl font-black leading-none text-neutral-600 lg:text-4xl">
							<span>$0 </span>
						</div>
						<ul>
							<li className="mb-2 mt-8 flex items-center text-base font-medium tracking-tight text-neutral-600">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-neutral-600">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>2 demo templates.</strong>
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-neutral-600">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-neutral-600">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>Fully responsive.</strong>
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-neutral-600 text-opacity-70">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-neutral-600 text-opacity-70">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</span>
								Figma.
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-neutral-600 text-opacity-70">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-neutral-600 text-opacity-70">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</span>
								Lifetime Support.
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-neutral-600 text-opacity-70">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-neutral-600 text-opacity-70">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>{" "}
								</span>
								Free Updates
							</li>
						</ul>

						<div className="mt-8">
							<button className="text-brown-600 block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Free</button>
						</div>
					</div>
				</div>
				<div className="w-full md:w-2/6 xl:w-1/4">
					<div className="bg-brown-600 relative flex h-full flex-col rounded-xl p-8 hover:border-white">
						<span className="mb-4 text-base font-medium uppercase tracking-widest text-white"> Bundle </span>
						<span className="mb-8 flex items-center text-base font-medium tracking-tight text-white"> No need to subscribe </span>
						<div className="flex items-end text-3xl font-black leading-none text-white lg:text-4xl">
							<span>
								<span>$69</span>
								<del className="text-2xl font-normal text-white">$149</del>
							</span>
						</div>
						<ul>
							<li className="mb-2 mt-8 flex items-center text-base font-medium tracking-tight text-white">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-white">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>All templates.</strong>
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-white">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-white">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>Figma files.</strong>
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-white">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-white">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>Free Updates.</strong>
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-white">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-white">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>Fully Responsive</strong>
							</li>
							<li className="mb-2 flex items-center text-base font-medium tracking-tight text-white">
								<span className="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-white">
									<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="h-3 w-3" viewBox="0 0 24 24">
										<path d="M20 6L9 17l-5-5"></path>
									</svg>
								</span>
								<strong>Lifetime Support</strong>
							</li>
						</ul>

						<div className="mt-8">
							<button className="text-brown-600 block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Buy for $69</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

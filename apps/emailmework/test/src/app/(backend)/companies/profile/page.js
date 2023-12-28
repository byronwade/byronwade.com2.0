"use client";
import { useState } from "react";
import Editable from "../../../../components/Editable";
import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const services = ["Septic Tank Installer", "Septic Tank Pumping", "Septic Tank Repair", "Septic Tank Replacement", "Septic Tank Services", "Sewer", "Drain Cleaning", "Pipe Repair", "Leak Detection", "Water Heater Installation", "Water Heater Repair", "Emergency Plumbing", "Toilet Repair", "Faucet Installation", "Garbage Disposal Repair", "Hydro Jetting"];

export default function Profile() {
	const [changeLog, setChangeLog] = useState([]);
	const [jsonData, setJsonData] = useState({});

	const handleContentChange = (changeDetails) => {
		const timeStamp = new Date().toISOString();

		// Determine action type
		const actionType = changeDetails.previousContent === "" ? "addition" : changeDetails.newContent === "" ? "deletion" : "modification";

		// Create the data structure for the current change
		const currentData = {
			content: changeDetails.newContent,
			metadata: {
				editedOn: timeStamp,
				previousContent: changeDetails.previousContent,
				actionType: actionType,
				elementAttributes: Array.from(changeDetails.elementAttributes).reduce((attrs, attr) => {
					attrs[attr.name] = attr.value;
					return attrs;
				}, {}),
				// You can add other metadata here if needed
			},
		};

		// Update the jsonData state
		const updatedData = {
			...jsonData,
			[changeDetails.position]: currentData,
		};

		setJsonData(updatedData);
	};

	console.log(JSON.stringify(jsonData, null, 2));

	return (
		<div className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
			<div className="mx-auto h-full max-w-7xl">
				<div className="mb-5 flex flex-col justify-between space-y-4 rounded border border-blue-700 bg-blue-950 px-6 py-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0">
					<div>
						<p className="font-semibold">How do I make changes?</p>
						<p>Click on any peice of content bellow, make your change then click save.</p>
					</div>
					<div className="w-auto">
						<a className="focus-ring text-dark relative box-border inline-flex shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-transparent bg-white px-2 py-1.5 text-center font-semibold leading-none no-underline transition hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900" href="/bcw1995/byronwade-com/settings/plans">
							Learn More
						</a>
					</div>
				</div>

				<div className="mb-8 flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0 xl:gap-x-6">
					<div className="flex flex-col space-y-8 divide-y divide-white/20 lg:w-2/3">
						<div>
							<h1 className="mb-2 text-5xl font-bold">
								<Editable position="1" onContentChange={handleContentChange}>
									Wade&#39;s Plumbing & Septic
								</Editable>
							</h1>
							<div className="flex items-center">
								<svg className="mr-1 h-4 w-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
									<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
								</svg>
								<p className="ml-2 text-sm font-bold text-white">9.95/10</p>
								<span className="mx-1.5 h-1 w-1 rounded-full bg-gray-400"></span>
								<a href="#" className="text-sm font-medium text-white underline hover:no-underline">
									73 reviews
								</a>
							</div>
							<div className="text-md py-2 font-semibold">
								<span>
									<Editable position="2" onContentChange={handleContentChange}>
										Plumbing
									</Editable>
								</span>
								,{" "}
								<span>
									<Editable position="3" onContentChange={handleContentChange}>
										Heating & Air Conditioning/HVAC
									</Editable>
								</span>
								,{" "}
								<span>
									<Editable position="4" onContentChange={handleContentChange}>
										Water Heater Installation/Repair
									</Editable>
								</span>
							</div>
							<div>
								<span className="text-md font-bold text-green-600">Open</span>
								<span className="pl-2 font-bold text-white/40">Open 24 hours</span>
							</div>
							<div className="space-x-2 pt-4">
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-brown-800 border-brown-800/20 relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border px-4 py-2 text-center font-semibold leading-none no-underline transition">
									<CheckCircleIcon className="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
									Write a review
								</button>
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									<CheckCircleIcon className="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
									Add a photo
								</button>
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									<CheckCircleIcon className="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
									Share
								</button>
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									<CheckCircleIcon className="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
									Save
								</button>
							</div>
						</div>
						<div className="py-8">
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-bold text-lg">Photos & videos</h2>
								<Link href="#">View all photos</Link>
							</div>
							<div className="flex space-x-4">
								{[
									"https://images.unsplash.com/photo-1609443935146-ec21df2ad80b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1hcmlqdWFuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
									"https://images.unsplash.com/photo-1590682751946-a65099676151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1hcmlqdWFuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
									"https://images.unsplash.com/photo-1629406979664-d930f76dc124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hcmlqdWFuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
									"https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80",
								].map((src, index) => (
									<div key={index} className="relative h-40 w-52 rounded-md">
										<Image className="rounded-md" src={src} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} />
									</div>
								))}
							</div>
						</div>
						<div className="py-4">
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-bold text-lg">Services Offered</h2>
							</div>
							<div>
								<div>
									{services.map((service) => (
										<button key={service} type="button" className="mb-2 mr-2 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
											{service}
										</button>
									))}
								</div>
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									See 34 more
									<CheckCircleIcon className="-mr-0.5 ml-2 h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>

						<div className="py-4">
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-bold text-lg">About the buissness</h2>
							</div>
							<div>
								test
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									See 34 more
									<CheckCircleIcon className="-mr-0.5 ml-2 h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>

						<div className="py-4">
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-bold text-lg">Location & Hours</h2>
							</div>
							<div>
								test
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									See 34 more
									<CheckCircleIcon className="-mr-0.5 ml-2 h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>

						<div className="py-4">
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-bold text-lg">Ask the comunity</h2>
							</div>
							<div>
								test
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									See 34 more
									<CheckCircleIcon className="-mr-0.5 ml-2 h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>

						<div className="py-4">
							<div className="mb-4 flex items-center justify-between">
								<h2 className="text-bold text-lg">Recommended Reviews</h2>
							</div>
							<div>
								test
								<button className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
									See 34 more
									<CheckCircleIcon className="-mr-0.5 ml-2 h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3">
						<div className="divide-y divide-white/20 rounded-md border border-white/20 p-4">
							<div className="py-4 text-base font-bold">wadesplumbingandseptic.com</div>
							<div className="py-4 text-base font-bold">(831)-225-4344</div>
							<div className="py-4 text-base">
								<h2 className="font-bold text-blue-600 hover:underline">Get Directions</h2>
								<span className="block font-semibold text-[#ccc]">407 5th Ave SE Waseca, MN 56093</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

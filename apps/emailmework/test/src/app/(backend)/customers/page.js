"use client";
import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const statuses = {
	Complete: "text-green-700 bg-green-50 ring-green-600/20",
	"In progress": "text-gray-600 bg-gray-50 ring-gray-500/10",
	Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
const projects = [
	{
		id: 1,
		name: "GraphQL API",
		href: "/customers/job",
		status: "Complete",
		createdBy: "Leslie Alexander",
		dueDate: "March 17, 2023",
		dueDateTime: "2023-03-17T00:00Z",
	},
	{
		id: 2,
		name: "New benefits plan",
		href: "/customers/job",
		status: "In progress",
		createdBy: "Leslie Alexander",
		dueDate: "May 5, 2023",
		dueDateTime: "2023-05-05T00:00Z",
	},
	{
		id: 3,
		name: "Onboarding emails",
		href: "/customers/job",
		status: "In progress",
		createdBy: "Courtney Henry",
		dueDate: "May 25, 2023",
		dueDateTime: "2023-05-25T00:00Z",
	},
	{
		id: 4,
		name: "iOS app",
		href: "/customers/job",
		status: "In progress",
		createdBy: "Leonard Krasner",
		dueDate: "June 7, 2023",
		dueDateTime: "2023-06-07T00:00Z",
	},
	{
		id: 5,
		name: "Marketing site redesign",
		href: "/customers/job",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
	{
		id: 6,
		name: "Marketing site redesign",
		href: "/customers/job",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
	{
		id: 7,
		name: "Marketing site redesign",
		href: "/customers/job",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
	{
		id: 8,
		name: "Marketing site redesign",
		href: "/customers/job",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function customers() {
	return (
		<div className="mx-auto my-40 max-w-7xl px-4 sm:px-6 lg:px-8">
			<div role="list" className="mt-3">
				{projects.map((project) => (
					<div key={project.id} className="mb-10">
						<div className="mb-2">
							<p className={`text-xs text-neutral-400`}>This job was sent to 23 contractors in Monteray County, CA at 10:40am</p>
						</div>
						<div className="mb-3 flex items-center justify-between gap-x-6 rounded-md bg-[#252525] p-6">
							<div className="min-w-0">
								<div className="flex items-start gap-x-3">
									<p className={`text-sm font-semibold leading-6 text-white`}>{project.name}</p>
									<p className={classNames(statuses[project.status], "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset")}>{project.status}</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
									<p className="whitespace-nowrap">
										Created on <time dateTime={project.dueDateTime}>{project.dueDate}</time>{" "}
										<Link href="#" className="text-brown-700 no-underline hover:underline">
											repost
										</Link>
									</p>
								</div>
							</div>
							<div>
								<div className="flex space-x-2">
									<img className="relative z-30 inline-block h-10 w-10 rounded-md" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
									<img className="relative z-20 inline-block h-10 w-10 rounded-md" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
									<img className="relative z-10 inline-block h-10 w-10 rounded-md" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
									<img className="relative z-0 inline-block h-10 w-10 rounded-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								</div>
							</div>
							<div className="flex flex-none items-center gap-x-4">
								<Link href={project.href} className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
									View job<span className="sr-only">, {project.name}</span>
								</Link>
								<Menu as="div" className="relative flex-none">
									<Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
										<span className="sr-only">Open options</span>
										<EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
									</Menu.Button>
									<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
										<Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
														Edit<span className="sr-only">, {project.name}</span>
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
														Move<span className="sr-only">, {project.name}</span>
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
														Delete<span className="sr-only">, {project.name}</span>
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				))}
				<div className="rounded-md bg-[#252525] px-5 py-6">
					<div className="-m-2 flex flex-wrap items-center justify-between">
						<div className="w-full p-2 sm:w-auto">
							<p className="text-sm font-medium text-gray-400">
								<span>Showing </span>
								<span className="text-gray-200">1</span>
								<span> to </span>
								<span className="text-gray-200"> 10 </span>
								<span data-config-id="auto-txt-5-5">of 20 results</span>
							</p>
						</div>
						<div className="w-full p-2 sm:w-auto">
							<div className="-m-1.5 flex flex-wrap items-center">
								<div className="w-full sm:w-auto">
									<a className="mb-2 mr-3 inline-block w-full rounded-lg bg-gray-600 px-4 py-2 text-center text-xs font-semibold leading-normal text-gray-400 transition duration-200 hover:bg-gray-700 sm:w-auto" href="#" data-config-id="auto-txt-6-5">
										Previous
									</a>
								</div>
								<div className="w-full sm:w-auto">
									<a className="bg-brown-500 text-brown-50 hover:bg-brown-600 mb-2 inline-block w-full rounded-lg px-4 py-2 text-center text-xs font-semibold leading-normal transition duration-200 sm:w-auto" href="#" data-config-id="auto-txt-7-5">
										Next
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default customers;

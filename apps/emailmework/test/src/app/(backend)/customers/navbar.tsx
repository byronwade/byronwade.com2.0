"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Plus } from "react-feather";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [{ name: "Dashboard", href: "/customers", current: true }];
const userNavigation = [
	{ name: "Settings", href: "/customers/settings" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<Disclosure as="nav" className="bg-[#1c1c1c]">
			{({ open }) => (
				<>
					<div className="mx-auto w-full flex-1 px-3 sm:px-6 sm:py-6">
						<div className="flex h-16 justify-between">
							<div className="flex">
								<div className="-ml-2 mr-2 flex items-center md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
									</Disclosure.Button>
								</div>
								<div className="flex flex-shrink-0 items-center">
									<Image src="/images/logo.png" width={45} height={45} alt="Company Logo" />
								</div>
								<div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
									{navigation.map((item) => (
										<Link key={item.name} href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium")} aria-current={item.current ? "page" : undefined}>
											{item.name}
										</Link>
									))}
									<Link href="/contractors" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
										Switch to contractor
									</Link>
								</div>
							</div>
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<Link href="/customers/create-job" type="button" className="bg-brown-600 hover:bg-brown-500 focus-visible:outline-brown-600 ml-4 inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
										<Plus className="-ml-0.5 h-5 w-5" aria-hidden="true" />
										Create New Job
									</Link>
								</div>
								<div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
									<button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
										<span className="absolute -inset-1.5" />
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>

									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="absolute -inset-1.5" />
												<span className="sr-only">Open user menu</span>
												<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
											</Menu.Button>
										</div>
										<Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{userNavigation.map((item) => (
													<Menu.Item key={item.name}>
														{({ active }) => (
															<Link href={item.href} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
																{item.name}
															</Link>
														)}
													</Menu.Item>
												))}
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							{navigation.map((item) => (
								<Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className="border-t border-gray-700 pb-3 pt-4">
							<div className="flex items-center px-5 sm:px-6">
								<div className="flex-shrink-0">
									<img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-white">{user.name}</div>
									<div className="text-sm font-medium text-gray-400">{user.email}</div>
								</div>
								<button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-3 space-y-1 px-2 sm:px-3">
								{userNavigation.map((item) => (
									<Disclosure.Button key={item.name} as="a" href={item.href} className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

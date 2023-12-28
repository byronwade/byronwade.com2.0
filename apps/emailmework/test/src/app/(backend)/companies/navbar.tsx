"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const user = {
	name: "Byron Wade",
	email: "bcw1995@gmail.com",
	imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "/companies" },
	{ name: "Ads", href: "/companies/ads" },
	{ name: "Leads", href: "/companies/leads" },
	{ name: "Profile", href: "/companies/profile" },
	{ name: "Reviews", href: "/companies/reviews" },
	{ name: "Insights", href: "/companies/insights" },
	{ name: "Settings", href: "/companies/settings" },
];

const userNavigation = [
	{ name: "Settings", href: "/companies/settings" },
	{ name: "Billing", href: "/companies/billing" },
	{ name: "Upgrade", href: "/companies/upgrade" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const pathname = usePathname();

	return (
		<Disclosure as="nav" className="border-b border-white/20 bg-[#111]">
			{({ open }) => (
				<>
					<div className="mx-auto w-full flex-1 px-3 sm:px-6">
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
									<span className="text-lg text-white">Byron Wade</span>
									<span className="text-lg text-gray-400">/</span>
									<Link href="/customers" className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
										Wade&#39;s Plumbing & Septic
									</Link>
								</div>
							</div>
							<div className="flex items-center">
								<div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
									<Link href="/customers" className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative mr-4 box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
										Switch to customer
									</Link>
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
														{() => {
															const isActive = pathname === item.href;
															return (
																<Link href={item.href} className={classNames(isActive ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
																	{item.name}
																</Link>
															);
														}}
													</Menu.Item>
												))}
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
						<div className="-mb-px flex space-x-3 overflow-x-auto text-white sm:space-x-0">
							{navigation.map((item) => {
								const isActive = item.href === "/companies/settings" ? pathname.includes("/settings") : pathname === item.href;
								return (
									<Link key={item.name} href={item.href} className={classNames(isActive ? "text-primary whitespace-nowrap border-b border-blue-600 pb-3 pt-2 leading-none transition hover:border-gray-300 dark:hover:border-gray-600 sm:px-4" : "text-primary whitespace-nowrap border-b border-transparent pb-3 pt-2 leading-none transition hover:border-gray-300 dark:hover:border-gray-600 sm:px-4")} aria-current={isActive ? "page" : undefined}>
										{item.name}
									</Link>
								);
							})}
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							{navigation.map((item) => {
								const isActive = item.href === "/companies/settings" ? pathname.includes("/settings") : pathname === item.href;
								return (
									<Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={isActive ? "page" : undefined}>
										{item.name}
									</Disclosure.Button>
								);
							})}
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
								{navigation.map((item) => {
									const isActive = item.href === "/companies/settings" ? pathname.includes("/settings") : pathname === item.href;
									return (
										<Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")} aria-current={isActive ? "page" : undefined}>
											{item.name}
										</Disclosure.Button>
									);
								})}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

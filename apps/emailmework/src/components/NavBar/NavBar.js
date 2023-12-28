"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../DarkModeToggle";

const user = {
	name: "Byron Wade",
	email: "bcw1995@gmail.com",
	imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
	{ name: "Dashboard", href: "/companies" },
	// { name: "Ads", href: "/companies/ads" },
	// { name: "Leads", href: "/companies/leads" },
	// { name: "Profile", href: "/companies/profile" },
	// { name: "Reviews", href: "/companies/reviews" },
	// { name: "Insights", href: "/companies/insights" },
	// { name: "Billing", href: "/companies/billing" },
	// { name: "Upgrade", href: "/companies/settings/plans" },
	{ name: "Settings", href: "/companies/settings" },
];

const userNavigation = [
	{ name: "Settings", href: "/companies/settings" },
	{ name: "Billing", href: "/companies/billing" },
	{ name: "Upgrade", href: "/companies/upgrade" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const pathname = usePathname();

	return (
		<Disclosure as="nav" className="border-b border-dark/20 dark:border-white/20 dark:bg-dark bg-white">
			{({ open }) => (
				<>
					<div className="mx-auto w-full flex-1 px-3 sm:px-6">
						<div className="flex justify-between">
							<div className="flex  py-4">
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
									<span className="text-lg text-dark dark:text-white">Byron Wade</span>
									<span className="text-lg text-dark dark:text-gray-400">/</span>
									<Link href="/customers" className="focus-ring hover:bg-brown-600/10 text-dark dark:text-white bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
										Wade&#39;s Plumbing & Septic
									</Link>
								</div>
							</div>
							<div className="flex">
								<div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
									<Link href="/customers" className="focus-ring hover:bg-brown-600/10 text-dark dark:text-white bg-primary relative mr-4 box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
										Switch to customer
									</Link>
								</div>
								<div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
									<ModeToggle />
								</div>
							</div>
						</div>

						<div className="-mb-px flex space-x-3 overflow-x-auto text-white dark:text-dark sm:space-x-0">
							{navigation.map((item) => {
								const isActive = item.href === "/companies/settings" ? pathname.includes("/settings") : pathname === item.href;
								return (
									<Link key={item.name} href={item.href} className={classNames(isActive ? "text-dark dark:text-white whitespace-nowrap border-b border-blue-600 pb-3 pt-2 leading-none transition hover:border-gray-300 dark:hover:border-gray-600 sm:px-4" : "text-dark dark:text-white whitespace-nowrap border-b border-transparent pb-3 pt-2 leading-none transition hover:border-gray-300 dark:hover:border-gray-600 sm:px-4")} aria-current={isActive ? "page" : undefined}>
										{item.name}
									</Link>
								);
							})}
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
}

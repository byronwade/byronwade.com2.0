"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
	{ name: "General", href: "/companies/settings", current: true },
	{ name: "Administrators", href: "/companies/settings/administrators", current: false },
	{ name: "Beta Features", href: "/companies/settings/beta-features", current: false },
	{ name: "Passwords", href: "/companies/settings/passwords", current: false },
	{ name: "Plans", href: "/companies/settings/plans", current: false },
];

import { ReactNode } from "react";
function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const pathname = usePathname();
	return (
		<main className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
			<div className="mx-auto h-full max-w-7xl">
				<div className="flex h-full flex-col lg:flex-row">
					<div className="w-full shrink-0 lg:w-1/5">
						<div className="-mt-1 hidden flex-col pr-2 lg:flex">
							{navigation.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link key={item.name} href={item.href} className={classNames(isActive ? "text-brown-600 py-1 font-semibold" : "py-1 text-[#ccc] hover:text-white")} aria-current={item.current ? "page" : undefined}>
										{item.name}
									</Link>
								);
							})}
						</div>
						<select name="side_nav" aria-label="Navigation items" className="focus-ring border-secondary bg-primary mb-4 inline-block rounded border py-0 pl-1.5 pr-4 font-semibold shadow-sm lg:hidden">
							{navigation.map((item) => (
								<option key={item.name} value={item.href}>
									{item.name}
								</option>
							))}
						</select>
					</div>
					<div className="flex-1 lg:w-1">{children}</div>
				</div>
			</div>
		</main>
	);
}

import Navbar from "./navbar";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="w-full">
			<Navbar />
			<div className="flex h-screen flex-col text-white">{children}</div>
		</div>
	);
}

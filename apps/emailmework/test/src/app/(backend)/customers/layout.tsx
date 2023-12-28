import Navbar from "./navbar";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="w-full">
			<Navbar />
			<div className="container mx-auto overflow-auto">{children}</div>
		</div>
	);
}

import Navbar from "../../../components/Navbar/NavBar";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="w-full">
			<Navbar />
			<div className="flex h-screen flex-col text-dark dark:text-white">{children}</div>
		</div>
	);
}

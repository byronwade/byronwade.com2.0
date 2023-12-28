"use client";
import { ThemeProvider, useTheme } from "../../context/ThemeContext"; // Adjust the import path

import "./globals.css";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<ThemeProvider>
			<html className="h-full">
				<body className={`h-full bg-[#111]`}>{children}</body>
			</html>
		</ThemeProvider>
	);
}

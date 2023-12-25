import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { CombinedThemeProvider } from '../utils/wrapper';
import FloatingCoffee from '../components/coffee';
import Head from 'next/head';

import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: 'Shroomageddon - Mushroom Database',
  description: 'Your ultimate mushroom database for all things mycology. Explore, learn, and share.'
};

export const viewport = {
  themeColor: '#333',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full min-h-screen dark" suppressHydrationWarning={true}>
      <body
        className={`min-h-screen flex flex-col justify-center bg-white dark:bg-black ${GeistSans.className}`}
      >
        <CombinedThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </CombinedThemeProvider>
        <FloatingCoffee />
      </body>
      {/* <SpeedInsights /> */}
      <Analytics />
    </html>
  );
}

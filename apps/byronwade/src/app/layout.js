import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { CombinedThemeProvider } from '../lib/wrapper';
import { Toaster } from '@/components/ui/toaster';

import ThemeSwitch from '@/components/ThemeSwitch';

import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: 'Byron Wade | Front End Developer',
  description: 'Byron Wade is a Front End Developer based in the Santa Cruz, CA.'
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
        className={`relative bg-white2 text-black2 dark:text-white2 dark:bg-black2 ${GeistSans.className}`}
      >
        <CombinedThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </CombinedThemeProvider>
        {/* <div className="absolute z-20 bottom-10 right-10">
          <ThemeSwitch />
        </div> */}
        <Toaster />
      </body>
      {/* <SpeedInsights /> */}
      <Analytics />
    </html>
  );
}

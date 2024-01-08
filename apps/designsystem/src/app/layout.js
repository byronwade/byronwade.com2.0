import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { CombinedThemeProvider } from '../lib/wrapper';

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
      <body className={`relative ${GeistSans.className}`}>
        <CombinedThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </CombinedThemeProvider>
      </body>
      {/* <SpeedInsights /> */}
      <Analytics />
    </html>
  );
}

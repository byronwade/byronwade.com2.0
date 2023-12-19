import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import '../styles/globals.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html className="h-full bg-zugz-950 dark max-h-min" lang="en" suppressHydrationWarning>
      <body
        className={`relative checkered-bg ${GeistSans.className} dark:selection:bg-zugz-500 min-h-screen bg-neutral-50 text-black antialiased selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:text-white`}
      >
        <Providers>
          <Navbar />
          {/* <WebsiteAlert /> */}
          {children}
          <Footer />
        </Providers>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}

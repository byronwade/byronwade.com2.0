import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: 'Shroomageddon - Mushroom Database',
  description: 'Your ultimate mushroom database for all things mycology. Explore, learn, and share.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full min-h-screen dark">
      <body className={`bg-white ${GeistSans.className}`}>{children}</body>
      {/* <SpeedInsights /> */}
      <Analytics />
    </html>
  );
}

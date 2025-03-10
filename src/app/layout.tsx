import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Luxury Living in Las Vegas',
  keywords: 'Las Vegas Real Estate, Luxury Homes, Mayfield Estates, Real Estate Agent',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Luxury Living in Las Vegas',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mayfieldestates.com',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayfield Estates Las Vegas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Luxury Living in Las Vegas',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://widgets.realscout.com/latest/realscout-widgets.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.homebot.com/widgets/latest/homebot-widgets.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.cloudcma.com/widgets/latest/cloudcma-widgets.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.percy.ai/widgets/latest/percy-widgets.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}

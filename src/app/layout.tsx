import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Analytics from '@/components/Analytics';
import { CalendlyGlobal } from '@/components/CalendlyGlobal';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mayfieldestateslasvegas.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas Real Estate | Dr. Jan Duffy, REALTOR®',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Expert Mayfield Estates Las Vegas real estate agent. Luxury homes for sale, market analysis, and professional guidance in this exclusive gated community. Veteran & women-owned.',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME || 'Mayfield Estates Las Vegas',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Luxury Living in Las Vegas',
    url: siteUrl,
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mayfieldestateslasvegas.com/#organization",
    "name": "Mayfield Estates Las Vegas Real Estate",
    "image": "https://www.mayfieldestateslasvegas.com/images/logos/logo.png",
    "url": "https://www.mayfieldestateslasvegas.com",
    "telephone": "+1-702-500-1953",
    "email": "DrDuffySells@MayfieldEstatesLasVegas.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "priceRange": "$$$",
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas",
      "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Sales",
            "description": "Professional guidance for selling luxury homes in Mayfield Estates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Purchases",
            "description": "Expert assistance finding your dream luxury home in Mayfield Estates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Market Analysis",
            "description": "Comprehensive CMA and home value assessments"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
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
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Analytics />
        {children}
        <CalendlyGlobal />
      </body>
    </html>
  );
}

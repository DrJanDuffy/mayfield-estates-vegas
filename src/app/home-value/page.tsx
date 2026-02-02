'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

declare global {
  interface Window {
    [key: string]: unknown;
  }
}

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Las Vegas Home Value Report",
    "description": "Get a detailed home value report with real-time market data for your Las Vegas property. Includes instant valuation, market comparisons, and investment insights.",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "areaServed": {
        "@type": "City",
        "name": "Las Vegas",
        "state": "NV"
      }
    },
    "serviceType": "Home Valuation",
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas",
      "state": "NV"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Value Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real-Time Market Data Analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Value Updates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Insights"
          }
        }
      ]
    }
  };

export default function HomeValuePage() {
  useEffect(() => {
    // Initialize Homebot with the provided configuration
    if (typeof window !== 'undefined') {
      (function (h: string, b: string) {
        const w = window as Window & { [key: string]: unknown };
        const d = document;
        const s = 'script';
        (w as Record<string, unknown>)['__hb_namespace'] = h;
        w[h] = w[h] || function (this: { q?: unknown[] }, ...args: unknown[]) {
          const self = w[h] as { q?: unknown[] };
          (self.q = self.q || []).push(args);
        };
        const y = d.createElement(s);
        const x = d.getElementsByTagName(s)[0];
        y.async = true;
        y.src = b;
        x?.parentNode?.insertBefore(y, x);
      })('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');

      const token = process.env.NEXT_PUBLIC_HOMEBOT_AGENT_ID || '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43';
      (window as Window & { Homebot?: (sel: string, t: string, opts: { theme: string }) => void }).Homebot?.(
        '#homebot-widget-container',
        token,
        { theme: 'dark-mode-theme' }
      );
    }
  }, []);

  return (
    <>
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>
        
        <main className="pt-16">
        <Script
          id="homebot-widget"
          src="https://embed.homebotapp.com/lgw/v1/widget.js"
          strategy="afterInteractive"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Home Value</li>
            </ol>
          </nav>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Get Your Home&apos;s Value
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the current market value of your Mayfield Estates or Las Vegas property with real-time data. No obligation.
            </p>
          </div>
          <div id="homebot-widget-container" className="min-h-[600px]" aria-label="Home value estimator widget"></div>
          <section className="mt-12 text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Want a custom CMA or to discuss your value?</h2>
            <p className="text-gray-600 mb-4">Dr. Jan Duffy provides free, no-obligation consultations for sellers and buyers in Mayfield Estates.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Free Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
} 
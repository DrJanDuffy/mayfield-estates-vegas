'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    [key: string]: any;
  }
}

export default function HomeValuePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Las Vegas Home Value Report",
    "description": "Get a detailed home value report with real-time market data for your Las Vegas property. Includes instant valuation, market comparisons, and investment insights.",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Las Vegas Real Estate",
      "areaServed": {
        "@type": "City",
        "name": "Las Vegas"
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

  useEffect(() => {
    // Initialize Homebot with the provided configuration
    if (typeof window !== 'undefined') {
      (function (h,b) { 
        var w = window, 
            d = document, 
            s = 'script', 
            x, 
            y; 
        w['__hb_namespace'] = h; 
        w[h] = w[h] || function () { 
          (w[h].q=w[h].q||[]).push(arguments) 
        }; 
        y = d.createElement(s); 
        x = d.getElementsByTagName(s)[0]; 
        y.async = 1; 
        y.src = b; 
        x?.parentNode?.insertBefore(y,x);
      })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');

      // Initialize with your specific token and theme
      window.Homebot?.('#homebot_homeowner', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43', {
        theme: 'dark-mode-theme'
      });
    }
  }, []);

  return (
    <>
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-gray-50">
        <Script
          id="homebot-widget"
          src="https://embed.homebotapp.com/lgw/v1/widget.js"
          strategy="afterInteractive"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Get Your Home's Value
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Discover the current market value of your Mayfield Estates property
            </p>
          </div>
          <div id="homebot-widget-container" className="min-h-[600px]"></div>
        </div>
      </main>
    </>
  );
} 
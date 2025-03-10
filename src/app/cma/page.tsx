'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function CMAPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Comparative Market Analysis (CMA)",
    "description": "Get a detailed Comparative Market Analysis from a local expert. Our professional CMA includes in-depth analysis of comparable properties, market trends, and optimal pricing strategy.",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Las Vegas Real Estate",
      "areaServed": {
        "@type": "City",
        "name": "Las Vegas"
      }
    },
    "serviceType": "Real Estate Market Analysis",
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas",
      "state": "NV"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CMA Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Detailed Market Comparison"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Insights"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pricing Strategy"
          }
        }
      ]
    }
  };

  useEffect(() => {
    // Cleanup function to remove any existing widget script
    return () => {
      const existingScript = document.getElementById('cloudcma_api_widget_script');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <Script 
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get a Professional Home Value Analysis
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Receive a detailed Comparative Market Analysis from a local expert
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Request a Professional CMA?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Detailed Market Comparison</h3>
                      <p className="mt-2 text-gray-600">Get an in-depth analysis of comparable properties in your area, including recent sales and current listings.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Professional Insights</h3>
                      <p className="mt-2 text-gray-600">Receive expert analysis of your home's unique features and how they impact its market value.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Pricing Strategy</h3>
                      <p className="mt-2 text-gray-600">Get recommendations for optimal pricing based on current market conditions and your timeline.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform rotate-3 rounded-2xl opacity-10"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">Request Your Free CMA</h3>
                    <p className="mt-2 text-gray-600">Complete, professional analysis of your home's value</p>
                  </div>
                  
                  {/* CloudCMA Widget */}
                  <div id="cloudcma-widget" className="min-h-[400px] rounded-lg overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Trust Our Analysis?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-900 font-semibold">Years of Experience</div>
                <p className="mt-2 text-gray-600">Deep knowledge of the Las Vegas market</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
                <div className="text-gray-900 font-semibold">Properties Analyzed</div>
                <p className="mt-2 text-gray-600">Extensive local market expertise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-900 font-semibold">Accuracy Rate</div>
                <p className="mt-2 text-gray-600">Precise market valuations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CloudCMA Script */}
        <Script
          id="cloudcma_api_widget_script"
          src="https://cloudcma.com/api_widget/0a2124dd852cffd63e48e79e9b283398/new?format=js"
          strategy="afterInteractive"
        />
      </main>
    </>
  );
} 
'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ValuePage() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = async () => {
      if (!document.querySelector('script[src*="realscout-web-components.umd.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      setIsScriptLoaded(true);
    };

    loadScript().catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      
      <main className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-6">
          What&apos;s Your Home Worth?
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Get an instant estimate of your home&apos;s value based on recent sales in your neighborhood.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Home Value Estimate</h2>
          {isScriptLoaded ? (
            <realscout-simple-search 
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              placeholder="Enter your home address"
            />
          ) : (
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-64 bg-gray-200 rounded w-full"></div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Why Get an Estimate?</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Track your home&apos;s value over time</li>
              <li>• Make informed decisions about selling</li>
              <li>• Understand your local market</li>
              <li>• Plan your financial future</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">What&apos;s Included?</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Estimated market value</li>
              <li>• Recent comparable sales</li>
              <li>• Local market trends</li>
              <li>• Detailed property information</li>
            </ul>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
} 
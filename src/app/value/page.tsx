'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">What&apos;s Your Home Worth?</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold mb-6">
          What&apos;s Your Home Worth?
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Get an instant estimate of your home&apos;s value based on recent sales in your neighborhood. No obligation.
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

        <section className="mt-12 text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Want a custom report or to discuss selling?</h2>
          <p className="text-gray-600 mb-4">Dr. Jan Duffy offers free, no-obligation consultations for Mayfield Estates and Las Vegas sellers.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Book a Free Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </Link>
        </section>
      </div>
      </main>
      <Footer />
    </div>
  );
} 
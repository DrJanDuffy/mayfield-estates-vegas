'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import MarketUpdates from './components/MarketUpdates';

// Main page component for Mayfield Estates Las Vegas
export default function Home() {
  // Mobile menu toggle functionality
  useEffect(() => {
    const handleMobileMenu = () => {
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    };
    
    handleMobileMenu();
    
    return () => {
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" 
        strategy="afterInteractive" 
      />

      <div className="font-sans text-gray-800">
        {/* Navigation */}
        <nav className="bg-white shadow-md fixed w-full z-10">
          {/* Navigation content here */}
        </nav>

        {/* Hero Section */}
        <header className="relative flex items-center justify-center text-white text-center" style={{ height: "80vh" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Mayfield Estates</h1>
              <p className="text-xl md:text-2xl mb-8">Luxury Living in Las Vegas</p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/cma" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Your Home Value
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          {/* About content here */}
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
            <div 
              className="realscout-office-listings"
              data-agent-encoded-id={process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID}
              data-sort-order="price-desc"
              data-listing-status="active"
              data-property-types="single-family"
              data-price-min="500000"
              data-days-on-market-max="30"
              data-beds-min="3"
              data-baths-min="2"
            />
          </div>
        </section>
        
        {/* Market Updates Section */}
        <section className="w-full py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MarketUpdates />
          </div>
        </section>

        {/* Market Analysis Tools Section */}
        <section className="w-full py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Market Analysis Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Home Value Estimator</h3>
                <div 
                  className="homebot-widget"
                  data-api-key={process.env.NEXT_PUBLIC_HOMEBOT_API_KEY}
                  data-agent-id={process.env.NEXT_PUBLIC_HOMEBOT_AGENT_ID}
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Buyer Market Analysis</h3>
                <div 
                  className="hvs-widget"
                  data-apikey={process.env.NEXT_PUBLIC_PERCY_API_KEY}
                  data-username={process.env.NEXT_PUBLIC_PERCY_USERNAME}
                  data-placeholder="Enter your address to get started"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-indigo-800 text-white">
          {/* Contact content here */}
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10">
          {/* Footer content here */}
        </footer>
      </div>
    </>
  );
}

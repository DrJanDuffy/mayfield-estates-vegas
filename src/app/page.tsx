'use client';

import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

// Main page component for Mayfield Estates Las Vegas
export default function Home() {
  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" 
        strategy="afterInteractive" 
      />

      <div className="font-sans text-gray-800">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        {/* Hero Section */}
        <header className="relative flex items-center justify-center text-white text-center" style={{ height: "80vh", marginTop: "64px" }}>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-1.jpg"
              alt="Mayfield Estates Las Vegas"
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="opacity-90"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Welcome to Mayfield Estates
              </h1>
              <p className="text-xl md:text-3xl mb-8 drop-shadow-md">
                Luxury Living in Las Vegas
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/cma" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Get Your Home Value
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Mayfield Estates
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Experience the pinnacle of luxury living in Las Vegas at Mayfield Estates. 
                  This exclusive gated community offers world-class amenities, stunning architecture, 
                  and unparalleled privacy in one of the most sought-after neighborhoods in Nevada.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  As your trusted real estate expert, Dr. Jan Duffy brings decades of experience 
                  and a deep understanding of the Las Vegas luxury market to help you find or sell 
                  your perfect home in Mayfield Estates.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More About Our Services
                </Link>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/market-featured.jpg"
                  alt="Mayfield Estates Las Vegas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dr. Jan Duffy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Decades of experience in Las Vegas luxury real estate market
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Veteran & Women-Owned</h3>
                <p className="text-gray-600">
                  Proudly serving with integrity and dedication
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mayfield Estates Specialist</h3>
                <p className="text-gray-600">
                  Deep understanding of this exclusive community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Area Highlights */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Las Vegas Luxury Real Estate
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Mayfield Estates to Summerlin, Green Valley, and beyond—discover the finest neighborhoods in Las Vegas
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mayfield Estates</h3>
                  <p className="text-gray-600 mb-4">Exclusive gated community offering privacy and luxury</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Security & Privacy</li>
                    <li>✓ Luxury Amenities</li>
                    <li>✓ Spacious Estates</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Summerlin</h3>
                  <p className="text-gray-600 mb-4">Master-planned community with world-class amenities</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Top Schools</li>
                    <li>✓ Golf Courses</li>
                    <li>✓ Parks & Trails</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Green Valley</h3>
                  <p className="text-gray-600 mb-4">Established community with excellent schools</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Family Friendly</li>
                    <li>✓ Great Schools</li>
                    <li>✓ Affordable Luxury</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Strip</h3>
                  <p className="text-gray-600 mb-4">Luxury high-rise living in the heart of Vegas</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ City Views</li>
                    <li>✓ Ultra Luxury</li>
                    <li>✓ Entertainment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-20 bg-white">
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

        {/* Market Analysis Tools Section */}
        <section className="w-full py-20 bg-gray-50">
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
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

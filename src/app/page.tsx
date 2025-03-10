import MarketUpdates from '@/components/MarketUpdates';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
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
      </section>

      {/* Market Updates Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketUpdates />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="w-full bg-gray-50 py-12">
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
      <section className="w-full py-12">
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

      {/* CTA Section */}
      <section className="w-full bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Move?</h2>
          <p className="text-xl mb-8">Get a comprehensive market analysis for your property</p>
          <Link 
            href="/cma" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Request a CMA
          </Link>
        </div>
      </section>
    </main>
  );
}

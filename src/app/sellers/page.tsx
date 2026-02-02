import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';

export default function SellersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Sellers</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sell Your Las Vegas or Mayfield Estates Home</h1>
          <p className="text-lg text-gray-700 mb-8">
            Get a clear picture of your home&apos;s value and a tailored listing strategy. Dr. Jan Duffy helps sellers across Las Vegas, Mayfield Estates, Summerlin, Henderson, and Green Valley achieve their goals with expert pricing and marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Link
              href="/home-value"
              className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Get Your Home Value</h2>
              <p className="text-gray-600">Free instant valuation with real-time market data for your Las Vegas area property.</p>
              <span className="inline-block mt-3 text-blue-600 font-medium">Home value report →</span>
            </Link>
            <Link
              href="/cma"
              className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Request a CMA</h2>
              <p className="text-gray-600">A detailed Comparative Market Analysis tailored to your home and neighborhood.</p>
              <span className="inline-block mt-3 text-blue-600 font-medium">Request CMA →</span>
            </Link>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Selling With You</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Accurate pricing based on current market and comparable sales</li>
              <li>• Professional marketing and listing exposure</li>
              <li>• Negotiation and contract support</li>
              <li>• Guidance through inspections, appraisal, and closing</li>
            </ul>
          </section>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to discuss your sale?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call to review your home&apos;s value and next steps.
            </p>
            <div className="flex flex-wrap gap-3">
              <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Book your free 15‑min call
              </CalendlyPopupLink>
              <a href="tel:+17025001953" className="inline-flex items-center px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                Call (702) 500-1953
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

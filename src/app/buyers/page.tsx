import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';

export default function BuyersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <main id="main-content" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">Buyers</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Buy a Home in Las Vegas &amp; Mayfield Estates</h1>
          <p className="text-lg text-gray-700 mb-8">
            Whether you&apos;re looking for a luxury home in Mayfield Estates, a family neighborhood in Summerlin or Green Valley, or an investment in Henderson or North Las Vegas, Dr. Jan Duffy provides expert buyer representation across the Las Vegas valley.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Link
              href="/value"
              className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Search Listings</h2>
              <p className="text-gray-600">Browse current homes for sale in Las Vegas and surrounding areas with real-time MLS data.</p>
              <span className="inline-block mt-3 text-blue-600 font-medium">Search homes →</span>
            </Link>
            <Link
              href="/las-vegas-neighborhoods"
              className="block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Explore Neighborhoods</h2>
              <p className="text-gray-600">Compare Summerlin, Green Valley, Henderson, Mayfield Estates, and more with local insights.</p>
              <span className="inline-block mt-3 text-blue-600 font-medium">Explore neighborhoods →</span>
            </Link>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Clear guidance on financing and pre-approval</li>
              <li>• Personalized search and showings</li>
              <li>• Expert negotiation and contract support</li>
              <li>• Help through inspection, appraisal, and closing</li>
            </ul>
          </section>

          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to start?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call to discuss what you&apos;re looking for and how we can help.
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

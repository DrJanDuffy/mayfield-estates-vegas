import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Southwest Las Vegas | Growing Luxury Area | Real Estate Guide',
  description: 'Discover Southwest Las Vegas, a rapidly growing area with modern luxury homes and master-planned communities. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Southwest Las Vegas | Growing Luxury Area',
    description: 'Explore Southwest Las Vegas, featuring modern luxury homes and master-planned communities.',
  },
};

export default function SouthwestPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Southwest Las Vegas",
    "description": "Rapidly growing luxury area in Las Vegas, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Southwest Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0275",
      "longitude": "-115.2321"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/southwest"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mayfieldestateslasvegas.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Las Vegas Neighborhoods",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Southwest Las Vegas",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/southwest"
      }
    ]
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="fixed w-full z-10">
          <Navigation />
        </div>

        <main className="pt-16">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Southwest Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Growing Luxury Area
                </p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    About Southwest Las Vegas
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Southwest Las Vegas is one of the fastest-growing areas in the valley, featuring 
                    modern master-planned communities, new construction homes, and cutting-edge amenities. 
                    This burgeoning region offers residents the best of suburban living with close proximity 
                    to the Las Vegas Strip and McCarran International Airport.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The area is home to several prestigious master-planned communities including Mountain&apos;s Edge, 
                    Providence, and Rhodes Ranch, each offering unique lifestyles and world-class amenities. 
                    Southwest Las Vegas attracts families and professionals seeking newer construction, modern 
                    floor plans, and community amenities.
                  </p>
                  <p className="text-lg text-gray-700">
                    With continued expansion and development, Southwest Las Vegas represents excellent long-term 
                    value and growth potential for homebuyers and investors.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/properties/property-3.jpg"
                    alt="Contemporary homes with clean lines and desert landscaping"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Southwest Las Vegas by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$555K</div>
                  <div className="text-gray-700">Mtns Edge Avg</div>
                  <div className="text-sm text-gray-500 mt-1">$497K Median</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">150</div>
                  <div className="text-gray-700">Mtns Edge Available</div>
                  <div className="text-sm text-gray-500 mt-1">53.3% Reduced</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">65</div>
                  <div className="text-gray-700">Days on Market</div>
                  <div className="text-sm text-gray-500 mt-1">Active Market</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2.7%</div>
                  <div className="text-gray-700">Distressed Rate</div>
                  <div className="text-sm text-gray-500 mt-1">Low Distressed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Communities Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Featured Communities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Mountain&apos;s Edge', desc: '$555K avg, 150 homes available, 65 DOM, 2.7% distressed' },
                  { title: 'Providence', desc: '$520K avg, 77 homes available, 69 DOM, 41.6% reduced' },
                  { title: 'Rhodes Ranch', desc: '$684K avg, 64 homes available, 73 DOM, 40.6% reduced' },
                  { title: 'Southern Highlands', desc: '$1.56M avg, 187 homes available, 67 DOM, 40.1% reduced' },
                  { title: 'Spanish Trail', desc: '$2.0M avg, 43 homes available, 94 DOM, ultra luxury' },
                  { title: 'Centennial Hills', desc: '$732K avg, 80 homes available, 70 DOM, 55% reduced' },
                ].map((community, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{community.title}</h3>
                    <p className="text-gray-600">{community.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Home in Southwest Las Vegas
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Southwest Las Vegas homes and find the perfect modern property.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-block"
              >
                Contact Dr. Jan Duffy
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}


import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'North Las Vegas | Affordable Growth Area | Real Estate Guide',
  description: 'Discover North Las Vegas, an affordable area with new construction and rapid growth. Learn about value homes, new developments, and investment opportunities. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'North Las Vegas | Affordable Growth Area',
    description: 'Explore North Las Vegas, offering affordable homes and excellent value in a rapidly growing area.',
  },
};

export default function NorthLasVegasPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "North Las Vegas",
    "description": "Affordable growth area in Las Vegas, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1988",
      "longitude": "-115.1175"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/north-las-vegas"
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
        "name": "North Las Vegas",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/north-las-vegas"
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
                  North Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Affordable Growth Area
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
                    About North Las Vegas
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    North Las Vegas is one of the fastest-growing cities in Nevada with a population of over 
                    260,000 residents. The area offers affordable housing options, new construction, and excellent 
                    value for homebuyers looking to enter the Las Vegas market.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The city has experienced significant economic development and infrastructure improvements, 
                    making it an attractive destination for families, first-time homebuyers, and investors. 
                    North Las Vegas features master-planned communities with modern amenities and amenities.
                  </p>
                  <p className="text-lg text-gray-700">
                    With continued growth and development, North Las Vegas represents strong long-term value 
                    and investment potential. The area offers easy access to major employment centers and 
                    affordable living in comparison to other Las Vegas areas.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero/market-featured.jpg"
                    alt="New construction homes with modern features and spacious lots"
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
                North Las Vegas by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$380K+</div>
                  <div className="text-gray-700">Average Home Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">260K+</div>
                  <div className="text-gray-700">Population</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">Rapid</div>
                  <div className="text-gray-700">Growth Rate</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">New</div>
                  <div className="text-gray-700">Construction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Benefits of North Las Vegas
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Affordable Homes', desc: 'Best value in the Las Vegas valley' },
                  { title: 'New Construction', desc: 'Modern floor plans and features' },
                  { title: 'Growing Infrastructure', desc: 'Continuous development and improvements' },
                  { title: 'Economic Development', desc: 'Strong job market and opportunities' },
                  { title: 'Master-Planned Communities', desc: 'Amenities and family-friendly neighborhoods' },
                  { title: 'Investment Potential', desc: 'Strong growth and appreciation potential' },
                ].map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Home in North Las Vegas
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore North Las Vegas homes and find the perfect affordable property with excellent value.
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


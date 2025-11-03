import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Green Valley Las Vegas | Family Community Real Estate Guide',
  description: 'Explore Green Valley, Las Vegas established family community. Learn about affordable homes, excellent schools, parks, and convenient location. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Green Valley Las Vegas | Family-Friendly Community',
    description: 'Discover Green Valley, a perfect blend of established neighborhoods, excellent schools, and convenient amenities.',
  },
};

export default function GreenValleyPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Green Valley",
    "description": "Established family community in Henderson, Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Green Valley",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0553",
      "longitude": "-115.0003"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/green-valley"
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
        "name": "Green Valley",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/green-valley"
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
                  Green Valley Las Vegas
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Established Family Community
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
                    About Green Valley
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Green Valley is a well-established community in Henderson, Nevada, offering an ideal 
                    blend of family-friendly amenities, excellent schools, and affordable housing. Developed 
                    primarily in the 1980s and 1990s, Green Valley has matured into one of Las Vegas most 
                    desirable residential areas.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The community spans approximately 25 square miles and is known for its tree-lined streets, 
                    well-maintained parks, and strong sense of community. Green Valley offers a diverse mix 
                    of housing options, from condominiums to large single-family homes.
                  </p>
                  <p className="text-lg text-gray-700">
                    Green Valley&apos;s strategic location provides easy access to Las Vegas Strip, McCarran 
                    International Airport, and downtown Henderson, making it an ideal choice for families 
                    and professionals alike.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/property-2.jpg"
                    alt="Traditional single-story homes with mature trees and sidewalks"
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
                Green Valley by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$450K+</div>
                  <div className="text-gray-700">Average Home Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
                  <div className="text-gray-700">Square Miles</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-700">Parks</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
                  <div className="text-gray-700">School Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Green Valley?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Excellent Schools', desc: 'Top-rated schools in Clark County School District' },
                  { title: 'Family-Friendly', desc: 'Safe neighborhoods with strong community spirit' },
                  { title: 'Great Parks', desc: '30+ parks including Arroyo Grande Sports Complex' },
                  { title: 'Convenient Location', desc: 'Easy access to freeways and major destinations' },
                  { title: 'Diverse Housing', desc: 'Homes, condos, and townhomes for every budget' },
                  { title: 'Quality Living', desc: 'Well-maintained neighborhoods and amenities' },
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Find Your Home in Green Valley
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Green Valley homes and find the perfect family-friendly property.
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


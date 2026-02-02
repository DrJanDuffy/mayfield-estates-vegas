import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Henderson Nevada | Safe Family Community | Real Estate Guide',
  description: 'Explore Henderson, Nevada second-largest city. Learn about safe neighborhoods, award-winning parks, top schools, and family-friendly living. Expert real estate insights from Dr. Jan Duffy.',
  openGraph: {
    title: 'Henderson Nevada | Safe Family Community',
    description: 'Discover Henderson, one of the safest cities in Nevada with award-winning parks and excellent schools.',
  },
};

export default function HendersonPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Henderson",
    "description": "Safe, family-friendly city in Nevada",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Henderson",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0395",
      "longitude": "-114.9817"
    },
    "url": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/henderson"
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
        "name": "Henderson",
        "item": "https://www.mayfieldestateslasvegas.com/las-vegas-neighborhoods/henderson"
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
                  Henderson Nevada
                </h1>
                <p className="text-xl md:text-2xl text-blue-100">
                  Safe, Growing City
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
                    About Henderson
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Henderson is Nevada second-largest city with over 320,000 residents and is consistently 
                    ranked as one of the safest cities in the state. The city has received numerous accolades 
                    including &quot;Best City to Raise a Family&quot; and &quot;Safest City in Nevada&quot; from various publications.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Henderson offers award-winning parks and recreation facilities, excellent schools, and 
                    a strong sense of community. The city is home to several master-planned communities 
                    including Green Valley, MacDonald Ranch, and Anthem Country Club.
                  </p>
                  <p className="text-lg text-gray-700">
                    Lake Las Vegas, located in Henderson, provides residents with waterfront living, 
                    golf courses, and luxury resorts. The city also boasts a thriving business community 
                    with many corporate headquarters and a strong job market.
                  </p>
                </div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/amenities/amenities001-027-019-4200x2800.jpg"
                    alt="Well-maintained homes in safe residential neighborhood"
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
                Henderson by the Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$475K+</div>
                  <div className="text-gray-700">Average Home Price</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">320K+</div>
                  <div className="text-gray-700">Population</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">#2</div>
                  <div className="text-gray-700">Safety in Nevada</div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Parks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Henderson?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Top Safety Rating', desc: 'Consistently ranked as one of Nevada safest cities' },
                  { title: 'Award-Winning Parks', desc: '50+ parks including world-class facilities' },
                  { title: 'Lake Las Vegas', desc: 'Waterfront living and luxury amenities' },
                  { title: 'Excellent Schools', desc: 'Strong educational system and top-rated schools' },
                  { title: 'Corporate Headquarters', desc: 'Thriving business community' },
                  { title: 'Strong Job Market', desc: 'Growing economy and employment opportunities' },
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
                Find Your Home in Henderson
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let me help you explore Henderson homes and find the perfect safe, family-friendly property.
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


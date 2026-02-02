'use client';

import Script from 'next/script';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlySection } from '@/components/CalendlySection';

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dr. Jan Duffy - Mayfield Estates Las Vegas",
    "description": "Contact Dr. Jan Duffy for Mayfield Estates and Las Vegas luxury real estate. Schedule a free consultation, get a home value, or tour luxury properties.",
    "url": "https://www.mayfieldestateslasvegas.com/contact",
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "telephone": "+1-702-500-1953",
      "email": "DrDuffySells@MayfieldEstatesLasVegas.com",
      "areaServed": { "@type": "Place", "name": "Mayfield Estates, Las Vegas, NV" }
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "image": "https://www.mayfieldestateslasvegas.com/images/team/drjanduffywithgooldcircle.jpg",
    "description": "Mayfield Estates Las Vegas specialist. Veteran-owned and women-owned real estate business providing expert guidance for luxury homes and estates in this premier gated community.",
    "url": "https://www.mayfieldestateslasvegas.com",
    "telephone": "+1-702-500-1953",
    "email": "DrDuffySells@MayfieldEstatesLasVegas.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "areaServed": {
      "@type": "Neighborhood",
      "name": "Mayfield Estates",
      "containedIn": {
        "@type": "City",
        "name": "Las Vegas",
        "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
      }
    },
    "specialties": [
      "Mayfield Estates Las Vegas",
      "Luxury Homes",
      "Gated Communities",
      "Estate Properties"
    ],
    "sameAs": [
      "https://www.bhhsnv.com/agent/dr-jan-duffy",
      "https://www.linkedin.com/in/dr-jan-duffy"
    ],
    "knowsAbout": [
      "Mayfield Estates Las Vegas",
      "Las Vegas Luxury Real Estate",
      "Gated Communities",
      "Estate Properties",
      "Property Valuation",
      "Real Estate Investment"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Doctorate",
        "name": "Doctorate Degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Nevada Real Estate License"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mayfield Estates Property Services",
          "description": "Specialized real estate services for Mayfield Estates luxury homes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Home Valuation",
          "description": "Expert valuation services for luxury properties in Mayfield Estates"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estate Property Consultation",
          "description": "Professional consultation for estate properties in Las Vegas"
        }
      }
    ]
  };

  return (
    <>
      <Script 
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Script 
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="fixed w-full z-10">
          <Navigation />
        </div>
        
        <main className="pt-16">
        {/* Hero Section - unique content for indexing */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Dr. Jan Duffy | Mayfield Estates Las Vegas
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-2">
                Your Trusted Las Vegas Real Estate Expert
              </p>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Contact Dr. Jan Duffy for Mayfield Estates and Las Vegas luxury real estate. Schedule a free consultation, get a home value report, or tour luxury properties. Call (702) 500-1953 or book online. Veteran-owned and women-owned. Responds within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 relative overflow-hidden rounded-full">
                      <Image
                        src="/images/team/drjanduffywithgooldcircle.jpg"
                        alt="Professional real estate agent photo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 64px) 100vw, 64px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900">Dr. Jan Duffy</h2>
                    <p className="text-gray-600">REALTOR®</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+17025001953" className="text-blue-600 hover:text-blue-800 font-medium">(702) 500-1953</a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:DrDuffySells@MayfieldEstatesLasVegas.com" className="text-blue-600 hover:text-blue-800 break-all">DrDuffySells@MayfieldEstatesLasVegas.com</a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Las Vegas, Nevada
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Business Certifications</h3>
                  <div className="flex space-x-4">
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Veteran-Owned
                    </div>
                    <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Women-Owned
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Areas of Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Residential Properties
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Commercial Real Estate
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Property Valuation
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Investment Properties
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly: Schedule time with our team */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <CalendlySection height={700} compact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
} 
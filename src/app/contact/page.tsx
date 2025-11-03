'use client';

import Script from 'next/script';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'buying'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented here
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "image": "https://www.mayfieldestateslasvegas.com/DrJanDuffywithGooldCircle.jpg",
    "description": "Mayfield Estates Las Vegas specialist. Veteran-owned and women-owned real estate business providing expert guidance for luxury homes and estates in this premier gated community.",
    "url": "https://www.mayfieldestateslasvegas.com",
    "telephone": "+1-702-XXX-XXXX",
    "email": "DrDuffy@bhhsnv.com",
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
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Dr. Jan Duffy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Your Trusted Las Vegas Real Estate Expert
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
                        src="/DrJanDuffywithGooldCircle.jpg"
                        alt="Dr. Jan Duffy REALTOR"
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
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    702-XXX-XXXX
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    DrDuffy@bhhsnv.com
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

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investing">Real Estate Investment</option>
                    <option value="valuation">Property Valuation</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 
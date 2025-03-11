'use client';

import { useState } from 'react';
import Image from 'next/image';

// This would typically come from an API or database
const propertyDetails = {
  id: '1',
  title: 'Luxury Villa with Pool',
  price: '$1,250,000',
  location: 'Summerlin, Las Vegas',
  beds: 4,
  baths: 3,
  sqft: 3200,
  yearBuilt: 2020,
  description: 'This stunning luxury villa offers the perfect blend of modern design and comfortable living. The open floor plan seamlessly connects the living areas, creating an ideal space for entertaining. The gourmet kitchen features high-end appliances and a large island. The master suite includes a spa-like bathroom and a private balcony overlooking the pool. The backyard is an entertainer\'s paradise with a sparkling pool, built-in BBQ, and covered patio.',
  features: [
    'Gourmet Kitchen',
    'Open Floor Plan',
    'Master Suite with Balcony',
    'Private Pool',
    'Built-in BBQ',
    'Smart Home Technology',
    '3-Car Garage',
    'Desert Landscaping',
  ],
  images: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c153a9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  ],
};

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {propertyDetails.title}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-2">
            {propertyDetails.price}
          </p>
          <p className="text-gray-600">
            {propertyDetails.location}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-[500px]">
            <Image
              src={propertyDetails.images[activeImage]}
              alt={propertyDetails.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 p-4">
            {propertyDetails.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative h-24 rounded-lg overflow-hidden ${
                  activeImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`${propertyDetails.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Property Details
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="text-lg font-semibold">{propertyDetails.beds}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="text-lg font-semibold">{propertyDetails.baths}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Square Feet</p>
                  <p className="text-lg font-semibold">{propertyDetails.sqft.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Year Built</p>
                  <p className="text-lg font-semibold">{propertyDetails.yearBuilt}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">
                {propertyDetails.description}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Schedule a Viewing
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Viewing
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
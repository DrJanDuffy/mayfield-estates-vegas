'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';

const sampleProperties = [
  {
    id: '1',
    title: 'Luxury Villa with Pool',
    price: '$1,250,000',
    location: 'Summerlin, Las Vegas',
    beds: 4,
    baths: 3,
    sqft: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
  {
    id: '2',
    title: 'Modern Desert Oasis',
    price: '$950,000',
    location: 'Henderson, NV',
    beds: 3,
    baths: 2,
    sqft: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c153a9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Golf Course Estate',
    price: '$1,800,000',
    location: 'Anthem, Las Vegas',
    beds: 5,
    baths: 4,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'Mountain View Retreat',
    price: '$1,450,000',
    location: 'Mountains Edge, Las Vegas',
    beds: 4,
    baths: 3,
    sqft: 3800,
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  },
  {
    id: '5',
    title: 'Luxury Penthouse',
    price: '$2,200,000',
    location: 'Downtown Las Vegas',
    beds: 3,
    baths: 2,
    sqft: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-9b37d0c3c0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '6',
    title: 'Desert Contemporary',
    price: '$1,150,000',
    location: 'Southern Highlands, Las Vegas',
    beds: 3,
    baths: 2,
    sqft: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    maxBeds: '',
    location: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProperties = sampleProperties.filter(property => {
    const price = parseInt(property.price.replace(/[^0-9]/g, ''));
    const minPrice = filters.minPrice ? parseInt(filters.minPrice) : 0;
    const maxPrice = filters.maxPrice ? parseInt(filters.maxPrice) : Infinity;
    const minBeds = filters.minBeds ? parseInt(filters.minBeds) : 0;
    const maxBeds = filters.maxBeds ? parseInt(filters.maxBeds) : Infinity;
    const location = filters.location.toLowerCase();

    return (
      price >= minPrice &&
      price <= maxPrice &&
      property.beds >= minBeds &&
      property.beds <= maxBeds &&
      (location === '' || property.location.toLowerCase().includes(location))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Available Properties
          </h1>
          <p className="text-lg text-gray-600">
            Find your dream home in Las Vegas
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
                Min Price
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="$0"
              />
            </div>

            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
                Max Price
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="$5,000,000"
              />
            </div>

            <div>
              <label htmlFor="minBeds" className="block text-sm font-medium text-gray-700">
                Min Beds
              </label>
              <input
                type="number"
                id="minBeds"
                name="minBeds"
                value={filters.minBeds}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="0"
              />
            </div>

            <div>
              <label htmlFor="maxBeds" className="block text-sm font-medium text-gray-700">
                Max Beds
              </label>
              <input
                type="number"
                id="maxBeds"
                name="maxBeds"
                value={filters.maxBeds}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="10"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter location"
              />
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No properties found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 
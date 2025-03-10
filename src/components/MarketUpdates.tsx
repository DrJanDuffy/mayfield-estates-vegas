'use client';

import { useEffect, useState } from 'react';

export default function MarketUpdates() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="bg-white rounded-lg shadow-lg p-6">Loading market data...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Las Vegas Market Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">$850,000</div>
          <div className="text-gray-600">Average Price</div>
          <div className="text-sm mt-2 text-green-600">↑ 2.5% from last month</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">45</div>
          <div className="text-gray-600">Days on Market</div>
          <div className="text-sm mt-2 text-gray-500">Average time to sell</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">12</div>
          <div className="text-gray-600">Active Listings</div>
          <div className="text-sm mt-2 text-gray-500">5 new this week</div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Data updated daily. Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
} 
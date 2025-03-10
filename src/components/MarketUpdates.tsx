'use client';

import { useEffect, useState } from 'react';

interface MarketData {
  averagePrice: number;
  daysOnMarket: number;
  activeListings: number;
}

export default function MarketUpdates() {
  const [marketData, setMarketData] = useState<MarketData>({
    averagePrice: 0,
    daysOnMarket: 0,
    activeListings: 0
  });

  useEffect(() => {
    // In a real implementation, this would fetch data from your API
    setMarketData({
      averagePrice: 850000,
      daysOnMarket: 45,
      activeListings: 12
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Las Vegas Market Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">${marketData.averagePrice.toLocaleString()}</div>
          <div className="text-gray-600">Average Price</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{marketData.daysOnMarket}</div>
          <div className="text-gray-600">Days on Market</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{marketData.activeListings}</div>
          <div className="text-gray-600">Active Listings</div>
        </div>
      </div>
    </div>
  );
} 
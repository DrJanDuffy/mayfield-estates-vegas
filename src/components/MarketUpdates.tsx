'use client';

import { useEffect, useState } from 'react';

interface MarketData {
  averagePrice: number;
  daysOnMarket: number;
  activeListings: number;
  priceChange: number;
  newListings: number;
}

export default function MarketUpdates() {
  const [marketData, setMarketData] = useState<MarketData>({
    averagePrice: 0,
    daysOnMarket: 0,
    activeListings: 0,
    priceChange: 0,
    newListings: 0
  });

  useEffect(() => {
    // In a real implementation, this would fetch data from your API
    setMarketData({
      averagePrice: 850000,
      daysOnMarket: 45,
      activeListings: 12,
      priceChange: 2.5,
      newListings: 5
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Las Vegas Market Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">${marketData.averagePrice.toLocaleString()}</div>
          <div className="text-gray-600">Average Price</div>
          <div className={`text-sm mt-2 ${marketData.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {marketData.priceChange >= 0 ? '↑' : '↓'} {Math.abs(marketData.priceChange)}% from last month
          </div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{marketData.daysOnMarket}</div>
          <div className="text-gray-600">Days on Market</div>
          <div className="text-sm mt-2 text-gray-500">Average time to sell</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{marketData.activeListings}</div>
          <div className="text-gray-600">Active Listings</div>
          <div className="text-sm mt-2 text-gray-500">{marketData.newListings} new this week</div>
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
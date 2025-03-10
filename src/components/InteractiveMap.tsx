'use client';

import { useState, useEffect } from 'react';
import { neighborhoodData } from '@/data/neighborhoods';
import { crmService } from '@/services/crm';
import LeadForm from './LeadForm';
import { toast } from 'react-hot-toast';

interface InteractiveMapProps {
  filters: {
    pricePoint: string[];
    propertyType: string[];
    lifestyle: string[];
  };
  onNeighborhoodSelect: (neighborhood: string | null) => void;
}

interface NeighborhoodDataCard {
  name: string;
  overview: string;
  medianPrice: number;
  priceChange: number;
  daysOnMarket: number;
  pricePerSqFt: number;
  inventory: number;
  schoolRating: number;
  recentTransactions: number;
  expertQuote: string;
}

export default function InteractiveMap({ filters, onNeighborhoodSelect }: InteractiveMapProps) {
  const [activeNeighborhood, setActiveNeighborhood] = useState<string | null>(null);
  const [dataCard, setDataCard] = useState<NeighborhoodDataCard | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleNeighborhoodClick = async (neighborhood: string) => {
    setActiveNeighborhood(neighborhood);
    onNeighborhoodSelect(neighborhood);
    // Fetch and set neighborhood data
    const data = neighborhoodData[neighborhood];
    if (data) {
      setDataCard(data);
      // Track neighborhood view in CRM
      await crmService.trackNeighborhoodView(neighborhood);
    }
  };

  const getNeighborhoodColor = (neighborhood: string) => {
    const data = neighborhoodData[neighborhood];
    if (!data) return 'rgb(229, 231, 235)'; // gray-200

    // Apply filters
    const matchesFilters = (
      (filters.pricePoint.length === 0 || filters.pricePoint.includes(data.pricePoint)) &&
      (filters.propertyType.length === 0 || data.propertyTypes.some(type => filters.propertyType.includes(type))) &&
      (filters.lifestyle.length === 0 || data.lifestyles.some(style => filters.lifestyle.includes(style)))
    );

    if (!matchesFilters) return 'rgb(229, 231, 235)'; // gray-200

    // Color based on median price
    const maxPrice = 2000000; // $2M
    const priceRatio = Math.min(data.medianPrice / maxPrice, 1);
    const blueIntensity = Math.floor(255 * (1 - priceRatio));
    return `rgb(0, ${blueIntensity}, 255)`;
  };

  const handleLeadFormSuccess = () => {
    setShowLeadForm(false);
    toast.success('Thank you! We will be in touch shortly.');
  };

  const handleLeadFormError = (message: string) => {
    toast.error(message);
  };

  return (
    <div className="relative w-full h-full">
      {/* SVG Map */}
      <svg
        viewBox="0 0 700 700"
        className="w-full h-full"
        style={{ background: '#f8fafc' }}
      >
        <defs>
          <filter id="hover-shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
          </filter>
        </defs>
        <g>
          {Object.keys(neighborhoodData).map(neighborhood => (
            <path
              key={neighborhood}
              d={neighborhoodData[neighborhood].path}
              fill={getNeighborhoodColor(neighborhood)}
              stroke="#fff"
              strokeWidth="2"
              className="transition-all duration-200 hover:opacity-90 cursor-pointer"
              style={{
                filter: activeNeighborhood === neighborhood ? 'url(#hover-shadow)' : 'none',
                transform: activeNeighborhood === neighborhood ? 'scale(1.02)' : 'scale(1)',
                transformOrigin: 'center'
              }}
              onClick={() => handleNeighborhoodClick(neighborhood)}
            >
              <title>{neighborhoodData[neighborhood].name}</title>
            </path>
          ))}
        </g>
        {/* Add neighborhood labels */}
        <g className="text-sm font-medium">
          {Object.keys(neighborhoodData).map(neighborhood => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', neighborhoodData[neighborhood].path);
            const bbox = path.getBBox?.() || { x: 0, y: 0, width: 0, height: 0 };
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;

            return (
              <text
                key={`label-${neighborhood}`}
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#1a202c"
                className="pointer-events-none select-none"
              >
                {neighborhoodData[neighborhood].name}
              </text>
            );
          })}
        </g>
      </svg>

      {/* Neighborhood Data Card */}
      {dataCard && (
        <div className="absolute top-4 right-4 w-96 bg-white rounded-lg shadow-lg p-4 max-h-[calc(100%-2rem)] overflow-y-auto">
          <h3 className="text-xl font-bold mb-2">{dataCard.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{dataCard.overview}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm text-gray-500">Median Price</div>
              <div className="font-bold">${dataCard.medianPrice.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Price Change</div>
              <div className={`font-bold ${dataCard.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {dataCard.priceChange > 0 ? '+' : ''}{dataCard.priceChange}%
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Days on Market</div>
              <div className="font-bold">{dataCard.daysOnMarket}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Price/Sq.Ft</div>
              <div className="font-bold">${dataCard.pricePerSqFt}</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-sm text-gray-500 mb-1">School Rating</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(dataCard.schoolRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-500 mb-4">
            My Recent Transactions: <span className="font-bold">{dataCard.recentTransactions}</span>
          </div>

          <blockquote className="text-sm italic text-gray-600 border-l-4 border-blue-600 pl-4 mb-4">
            "{dataCard.expertQuote}"
          </blockquote>

          {showLeadForm ? (
            <LeadForm
              neighborhood={dataCard.name}
              onSuccess={handleLeadFormSuccess}
              onError={handleLeadFormError}
            />
          ) : (
            <button
              onClick={() => setShowLeadForm(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Schedule Neighborhood Tour
            </button>
          )}
        </div>
      )}
    </div>
  );
} 
'use client';

import { useState } from 'react';

export default function HOACalculator() {
  const [monthlyFee, setMonthlyFee] = useState(300);
  const [years, setYears] = useState(30);
  const interestRate = 0.06; // 6% annual return if invested

  const calculateSavings = () => {
    const monthlyInvestment = monthlyFee;
    const monthlyRate = interestRate / 12;
    const numPayments = years * 12;
    
    // Calculate future value with compound interest
    const futureValue = monthlyInvestment * (Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate;
    
    // Calculate total contributions
    const totalContributions = monthlyInvestment * numPayments;

    return {
      total: Math.round(futureValue),
      contributions: Math.round(totalContributions),
      interest: Math.round(futureValue - totalContributions)
    };
  };

  const savings = calculateSavings();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">HOA Savings Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Monthly HOA Fee Avoided
          </label>
          <input
            type="range"
            min="200"
            max="500"
            step="50"
            value={monthlyFee}
            onChange={(e) => setMonthlyFee(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-lg font-semibold mt-2">
            ${monthlyFee}/month
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Investment Period
          </label>
          <select
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded"
          >
            <option value={5}>5 Years</option>
            <option value={10}>10 Years</option>
            <option value={15}>15 Years</option>
            <option value={30}>30 Years</option>
          </select>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-6">
          <h4 className="text-lg font-semibold mb-4">
            Your Potential Savings
          </h4>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Contributions:</span>
              <span className="font-semibold">
                ${savings.contributions.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Investment Returns (6% annually):</span>
              <span className="font-semibold text-green-600">
                ${savings.interest.toLocaleString()}
              </span>
            </div>
            
            <div className="flex justify-between text-lg font-bold pt-4 border-t">
              <span>Total Value:</span>
              <span className="text-blue-600">
                ${savings.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          * This calculator assumes the monthly HOA savings are invested with a 6% annual return.
          Actual returns may vary. This is for illustrative purposes only.
        </p>
      </div>
    </div>
  );
} 
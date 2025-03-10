'use client';

export default function RealScoutWidgets() {
  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Search Properties</h2>
        <realscout-simple-search 
          agent-encoded-id="QWdlbnQtMjI1MDUw"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale,For Rent,In Contract,Sold,Rented" 
          property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
          price-min="400000"
        />
      </div>
    </>
  );
} 
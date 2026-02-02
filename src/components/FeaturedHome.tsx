'use client';

export default function FeaturedHome() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <div className="mb-8">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">Featured Listing</span>
        <h2 className="text-3xl font-bold mb-3">Stunning Pool Home in Charleston Heights</h2>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>2,143 sqft</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>4 Beds</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>2.5 Baths</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          Remarkable pool home with no HOA in a prime cul-de-sac location. Features two spacious living rooms, elegant tile floors, and a private pool. The primary bedroom boasts grand double doors, a refreshing ceiling fan, and a generous walk-in closet.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="font-semibold text-blue-900">No HOA</div>
            <div className="text-sm text-blue-700">Freedom & Value</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="font-semibold text-blue-900">Private Pool</div>
            <div className="text-sm text-blue-700">Resort Living</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="font-semibold text-blue-900">Cul-de-sac</div>
            <div className="text-sm text-blue-700">Prime Location</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="font-semibold text-blue-900">Move-in Ready</div>
            <div className="text-sm text-blue-700">Immediate Comfort</div>
          </div>
        </div>
      </div>

      <realscout-featured-listing
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        listing-id="2502532"
        show-contact-form="true"
        show-similar-homes="true"
      />
      <p className="mt-4 text-sm text-gray-500" role="contentinfo">
        Listing data deemed reliable but not guaranteed. All listings courtesy of the participant&apos;s MLS. © Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.
      </p>
    </div>
  );
} 
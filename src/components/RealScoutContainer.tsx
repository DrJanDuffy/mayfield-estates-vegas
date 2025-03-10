'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const RealScoutWidgets = dynamic(() => import('./RealScoutWidgets'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
      <div className="h-64 bg-gray-200 rounded"></div>
    </div>
  )
});

export default function RealScoutContainer() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = async () => {
      if (!document.querySelector('script[src*="realscout-web-components.umd.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });

        const style = document.createElement('style');
        style.textContent = `
          realscout-simple-search {
            --rs-ss-font-primary-color: #6a6d72;
            --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
            --rs-ss-button-background: #2563eb;
            --rs-ss-button-hover-background: #1d4ed8;
          }
          realscout-office-listings,
          realscout-featured-listing {
            --rs-listing-divider-color: rgb(101, 141, 172);
            --rs-listing-primary-color: #2563eb;
            --rs-listing-hover-color: #1d4ed8;
            width: 100%;
          }
          realscout-featured-listing {
            --rs-featured-listing-background: transparent;
            --rs-featured-listing-padding: 0;
            --rs-featured-listing-button-background: #2563eb;
            --rs-featured-listing-button-hover-background: #1d4ed8;
          }
        `;
        document.head.appendChild(style);
      }
      setIsScriptLoaded(true);
    };

    loadScript().catch(console.error);
  }, []);

  if (!isScriptLoaded) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return <RealScoutWidgets />;
} 
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'agent-encoded-id': string;
      'sort-order': string;
      'listing-status': string;
      'property-types': string;
      'price-min': string;
      'price-max'?: string;
      'beds-min'?: string;
      'baths-min'?: string;
      'square-feet-min'?: string;
      'square-feet-max'?: string;
      'days-on-market-max'?: string;
      'cities'?: string;
      'zip-codes'?: string;
      suppressHydrationWarning?: boolean;
    };
    'realscout-your-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'agent-encoded-id': string;
      'sort-order': string;
      'listing-status': string;
      'property-types': string;
      suppressHydrationWarning?: boolean;
    };
  }
} 
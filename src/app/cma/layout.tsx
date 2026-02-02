import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request CMA | Comparative Market Analysis | Mayfield Estates Las Vegas | Dr. Jan Duffy',
  description: 'Get a free Comparative Market Analysis for your Mayfield Estates or Las Vegas home. Detailed comps, market trends, and pricing strategy from Dr. Jan Duffy.',
  openGraph: {
    title: 'Request CMA | Mayfield Estates Las Vegas',
    description: 'Free professional CMA for Las Vegas and Mayfield Estates. Comps, market trends, and pricing strategy.',
    url: '/cma',
  },
};

export default function CMALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "What's Your Home Worth? | Mayfield Estates Las Vegas | Dr. Jan Duffy",
  description: 'Get an instant home value estimate for Mayfield Estates and Las Vegas. Based on recent sales and local market data from Dr. Jan Duffy, REALTOR®.',
  openGraph: {
    title: "What's Your Home Worth? | Mayfield Estates Las Vegas",
    description: 'Instant home value estimate for Las Vegas and Mayfield Estates. Recent sales and market trends.',
    url: '/value',
  },
};

export default function ValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

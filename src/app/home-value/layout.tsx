import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Value | Mayfield Estates Las Vegas | Dr. Jan Duffy, REALTOR®',
  description: 'Get your Mayfield Estates home value with real-time market data. Free instant valuation, market comparisons, and insights from Las Vegas specialist Dr. Jan Duffy.',
  openGraph: {
    title: 'Home Value | Mayfield Estates Las Vegas',
    description: 'Free home value report for Mayfield Estates and Las Vegas. Real-time market data from Dr. Jan Duffy.',
    url: '/home-value',
  },
};

export default function HomeValueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

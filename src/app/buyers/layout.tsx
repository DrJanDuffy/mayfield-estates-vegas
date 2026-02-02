import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy a Home in Las Vegas & Mayfield Estates | Dr. Jan Duffy',
  description: 'Find your next home in Las Vegas, Mayfield Estates, Summerlin, Henderson & Green Valley. Search listings, explore neighborhoods, and get expert buyer representation from Dr. Jan Duffy.',
  openGraph: {
    title: 'Buy a Home in Las Vegas & Mayfield Estates',
    description: 'Expert buyer representation for Las Vegas and Mayfield Estates. Search homes and explore neighborhoods.',
  },
};

export default function BuyersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

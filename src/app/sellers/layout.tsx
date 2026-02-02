import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Las Vegas or Mayfield Estates Home | Dr. Jan Duffy',
  description: 'Sell your home in Las Vegas, Mayfield Estates, Summerlin, Henderson & Green Valley. Get a free CMA, home value report, and expert listing strategy from Dr. Jan Duffy.',
  openGraph: {
    title: 'Sell Your Las Vegas or Mayfield Estates Home',
    description: 'Expert seller representation. Free CMA and home value report for Las Vegas and Mayfield Estates.',
  },
};

export default function SellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

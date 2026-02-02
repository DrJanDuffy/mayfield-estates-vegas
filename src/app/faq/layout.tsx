import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Mayfield Estates Las Vegas Real Estate | Dr. Jan Duffy',
  description: 'Frequently asked questions about Mayfield Estates Las Vegas, buying and selling homes, home value, and working with Dr. Jan Duffy, REALTOR®.',
  openGraph: {
    title: 'FAQ | Mayfield Estates Las Vegas Real Estate',
    description: 'Common questions about Mayfield Estates, Las Vegas real estate, and working with Dr. Jan Duffy.',
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

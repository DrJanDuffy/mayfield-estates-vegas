import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mayfield Estates Las Vegas',
  description: 'Luxury real estate in Las Vegas, Nevada',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';

const faqItems = [
  {
    q: 'What is Mayfield Estates Las Vegas?',
    a: 'Mayfield Estates is a premier gated community in the Las Vegas area, known for luxury homes, quality construction, and desirable amenities. Dr. Jan Duffy specializes in helping buyers and sellers in Mayfield Estates and surrounding Las Vegas neighborhoods.',
  },
  {
    q: 'How can I find out what my Las Vegas home is worth?',
    a: 'You can get a free home value report on our Home Value page, which uses real-time market data. For a detailed Comparative Market Analysis (CMA) tailored to your property, request a CMA and Dr. Jan Duffy will provide a professional valuation.',
  },
  {
    q: 'How do I buy a home in Mayfield Estates or Las Vegas?',
    a: 'Start by exploring neighborhoods on our Las Vegas Neighborhoods page, use our property search to view current listings, and book a free 15-minute call to discuss your criteria. Dr. Jan Duffy will guide you through financing, showings, and closing.',
  },
  {
    q: 'How do I sell my home in Las Vegas or Mayfield Estates?',
    a: 'Request a free CMA to see how your home compares to the market, and get your home value estimate on our Home Value page. Then book a call to discuss listing strategy, staging, and timing for the Las Vegas market.',
  },
  {
    q: 'What areas does Dr. Jan Duffy serve?',
    a: 'Dr. Jan Duffy serves Las Vegas, Henderson, Summerlin, Green Valley, North Las Vegas, the Southwest valley, Mayfield Estates, and surrounding communities. She works with buyers and sellers across the greater Las Vegas area.',
  },
  {
    q: 'Is there a fee for a home value report or CMA?',
    a: 'Our online home value tool is free. A detailed CMA is also provided at no obligation when you’re considering selling. There are no upfront fees for these services.',
  },
  {
    q: 'How can I schedule a call with Dr. Jan Duffy?',
    a: 'Use the "Book your free 15‑min call" button on any page to open the scheduling tool, or call (702) 500-1953. You can also reach out via our Contact page.',
  },
];

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <main id="main-content" className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">FAQ</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">
            Common questions about Mayfield Estates Las Vegas, buying and selling, and working with Dr. Jan Duffy.
          </p>

          <dl className="space-y-6">
            {faqItems.map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                <dt className="text-lg font-semibold text-gray-900 mb-2">{q}</dt>
                <dd className="text-gray-700">{a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h2>
            <p className="text-gray-700 mb-4">
              Book a free 15-minute call with Dr. Jan Duffy to discuss your situation.
            </p>
            <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Book your free 15‑min call
            </CalendlyPopupLink>
          </div>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  );
}

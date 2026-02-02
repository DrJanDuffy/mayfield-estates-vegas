import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CalendlyPopupLink } from '@/components/CalendlyPopupLink';

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description: 'Mayfield Estates Las Vegas specialist. Berkshire Hathaway HomeServices Nevada Properties. Veteran-owned and women-owned real estate expertise for luxury homes and gated communities.',
    image: 'https://www.mayfieldestateslasvegas.com/images/team/drjanduffywithgooldcircle.jpg',
    url: 'https://www.mayfieldestateslasvegas.com',
    telephone: '+1-702-500-1953',
    email: 'DrDuffySells@MayfieldEstatesLasVegas.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Nevada Real Estate License S.0197614.LLC' },
    ],
    knowsAbout: ['Mayfield Estates Las Vegas', 'Luxury Homes', 'Gated Communities', 'Las Vegas Real Estate'],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <main id="main-content" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900 font-medium" aria-current="page">About</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Dr. Jan Duffy</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/images/team/drjanduffywithgooldcircle.jpg"
                alt="Dr. Jan Duffy, Mayfield Estates Las Vegas REALTOR"
                width={320}
                height={320}
                className="rounded-xl shadow-lg object-cover aspect-square"
              />
            </div>
            <div className="flex-1 space-y-4 text-gray-700">
              <p>
                Dr. Jan Duffy is your dedicated Mayfield Estates Las Vegas specialist, bringing expertise in luxury homes and gated communities across the Las Vegas valley. As a REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, she helps buyers and sellers navigate one of the most desirable markets in the Southwest.
              </p>
              <p>
                Veteran-owned and women-owned, the practice is built on integrity, local knowledge, and a commitment to client success—whether you&apos;re buying your first home, upgrading to a Mayfield Estates property, or selling with confidence.
              </p>
              <p>
                <strong>License:</strong> Nevada Real Estate License S.0197614.LLC. Serving Las Vegas, Henderson, Summerlin, Green Valley, and Mayfield Estates.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <CalendlyPopupLink className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Book your free 15‑min call
                </CalendlyPopupLink>
                <a href="tel:+17025001953" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  Call (702) 500-1953
                </a>
                <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Services &amp; Areas</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <li>Mayfield Estates Las Vegas</li>
              <li>Luxury homes &amp; gated communities</li>
              <li>Buyer representation</li>
              <li>Seller representation &amp; CMA</li>
              <li>Home value reports</li>
              <li>Summerlin, Green Valley, Henderson</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/home-value" className="text-blue-600 hover:underline font-medium">Get your home value</Link>
              <Link href="/cma" className="text-blue-600 hover:underline font-medium">Request a CMA</Link>
              <Link href="/las-vegas-neighborhoods" className="text-blue-600 hover:underline font-medium">Explore neighborhoods</Link>
            </div>
          </section>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Footer />
    </div>
  );
}

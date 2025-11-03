import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Las Vegas, NV</p>
              <p className="text-gray-300">Phone: (702) 500-1953</p>
              <p className="text-gray-300">Email: DrDuffySells@MayfieldEstatesLasVegas.com</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center bg-blue-900 px-3 py-1 rounded-full">
                  <span className="text-xs">Veteran-Owned</span>
                </div>
                <div className="flex items-center bg-blue-900 px-3 py-1 rounded-full">
                  <span className="text-xs">Women-Owned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/home-value" className="text-gray-300 hover:text-white transition-colors">
                  Home Value
                </Link>
              </li>
              <li>
                <Link href="/cma" className="text-gray-300 hover:text-white transition-colors">
                  Request CMA
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* RealScout Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Property Listings</li>
              <li>Market Analysis</li>
              <li>Real Estate Insights</li>
            </ul>
            <div className="mt-4">
              <Link href="https://www.bhhsnv.com/agent/dr-jan-duffy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm">
                Berkshire Hathaway HomeServices
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mayfield Estates Las Vegas. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            REALTOR® | Licensed in Nevada
          </p>
        </div>
      </div>
    </footer>
  );
}


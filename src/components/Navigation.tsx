'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-900';
  };

  return (
      <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Mayfield Estates Las Vegas" 
              width={180} 
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-1 sm:space-x-4">
            <Link 
              href="/" 
              className={`flex items-center px-3 py-2 ${isActive('/')} hover:text-blue-600`}
            >
              Home
            </Link>
            <Link 
              href="/home-value" 
              className={`flex items-center px-3 py-2 ${isActive('/home-value')} hover:text-blue-600`}
            >
              Home Value
            </Link>
            <Link 
              href="/cma" 
              className={`flex items-center px-3 py-2 ${isActive('/cma')} hover:text-blue-600`}
            >
              Request CMA
            </Link>
            <Link 
              href="/blog" 
              className={`flex items-center px-3 py-2 ${isActive('/blog')} hover:text-blue-600`}
            >
              Blog
            </Link>
            <Link 
              href="/las-vegas-neighborhoods" 
              className={`flex items-center px-3 py-2 ${isActive('/las-vegas-neighborhoods')} hover:text-blue-600`}
            >
              Neighborhoods
            </Link>
          </div>
          
          <div className="flex items-center">
            <Link
              href="/contact"
              className={`inline-flex items-center px-4 py-2 border ${
                isActive('/contact')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-white bg-blue-600 hover:bg-blue-700'
              } text-sm font-medium rounded-md transition-colors`}
            >
              Contact Dr. Jan Duffy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
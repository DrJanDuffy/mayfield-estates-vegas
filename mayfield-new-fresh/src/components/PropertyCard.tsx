import Image from 'next/image';
import Link from 'next/link';

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  imageUrl,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">
          {price}
        </p>
        <p className="text-gray-600 mb-4">
          {location}
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{beds} beds</span>
          <span>{baths} baths</span>
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
        <Link
          href={`/properties/${id}`}
          className="mt-4 block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
} 
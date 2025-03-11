import PropertyCard from '@/components/PropertyCard';

const sampleProperties = [
  {
    id: '1',
    title: 'Luxury Villa with Pool',
    price: '$1,250,000',
    location: 'Summerlin, Las Vegas',
    beds: 4,
    baths: 3,
    sqft: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  },
  {
    id: '2',
    title: 'Modern Desert Oasis',
    price: '$950,000',
    location: 'Henderson, NV',
    beds: 3,
    baths: 2,
    sqft: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c153a9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Golf Course Estate',
    price: '$1,800,000',
    location: 'Anthem, Las Vegas',
    beds: 5,
    baths: 4,
    sqft: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Mayfield Estates
        </h1>
        <p className="text-center text-lg mb-4">
          Luxury Living in Las Vegas
        </p>
        <div className="mt-8 text-center">
          <a
            href="/properties"
            className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            View Properties
          </a>
        </div>
      </div>
    </div>
  )
} 
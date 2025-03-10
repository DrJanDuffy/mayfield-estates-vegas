import MarketUpdates from '@/components/MarketUpdates';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Welcome to Mayfield Estates</h1>
          <p className="mt-4 text-xl">Luxury Living in Las Vegas</p>
        </div>
        <MarketUpdates />
      </div>
    </main>
  );
}

import { Suspense } from 'react';
import { Metadata } from 'next';
import { BlogPost } from '@/components/BlogPost';
import { NewsletterForm } from '@/components/NewsletterForm';
import { fetchRSSFeed } from '@/utils/rss';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Blog | Market Insights & Tips | Mayfield Estates',
  description: 'Expert Las Vegas real estate market insights, home buying tips, selling strategies, and local market trends from Dr. Jan Duffy, your Mayfield Estates specialist.',
  keywords: 'Las Vegas real estate blog, Las Vegas market trends, home buying tips, selling advice, Las Vegas housing market, real estate news, Mayfield Estates insights',
  openGraph: {
    title: 'Las Vegas Real Estate Blog | Expert Market Insights',
    description: 'Stay informed about the Las Vegas real estate market with expert insights and tips.',
  },
};

function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-12"></div>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function BlogPosts() {
  const posts = await fetchRSSFeed();
  
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-10">
        <Navigation />
      </div>
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Las Vegas Real Estate Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Stay informed about the Las Vegas real estate market with our latest insights, tips, and expert analysis from Dr. Jan Duffy, your trusted Mayfield Estates specialist.
          </p>

          <Suspense fallback={<BlogSkeleton />}>
            <BlogPosts />
          </Suspense>

          <div className="mt-16">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
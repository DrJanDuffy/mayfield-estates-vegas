import { Metadata } from 'next';
import { BlogPost } from '@/components/BlogPost';
import { NewsletterForm } from '@/components/NewsletterForm';
import { fetchRSSFeed, type RSSPost } from '@/utils/rss';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Blog | Market Insights & Tips | Mayfield Estates',
  description: 'Expert Las Vegas real estate market insights, home buying tips, selling strategies, and local market trends from Dr. Jan Duffy, your Mayfield Estates specialist.',
  openGraph: {
    title: 'Las Vegas Real Estate Blog | Expert Market Insights',
    description: 'Stay informed about the Las Vegas real estate market with expert insights and tips.',
  },
};

function BlogPostsList({ posts }: { posts: RSSPost[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default async function BlogPage() {
  const posts = await fetchRSSFeed();

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
          <p className="text-xl text-gray-600 mb-8 max-w-3xl">
            Stay informed about the Las Vegas real estate market with our latest insights, tips, and expert analysis from Dr. Jan Duffy, your trusted Mayfield Estates specialist.
          </p>
          
          {/* SEO Rich Content */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Las Vegas Real Estate Insights</h2>
            <p className="text-gray-700 mb-4">
              As a seasoned real estate professional specializing in Mayfield Estates and luxury properties throughout Las Vegas, 
              I bring you market-tested strategies and local knowledge to help you navigate the competitive Las Vegas housing market. 
              Whether you&apos;re buying your first luxury home in Summerlin, selling an estate property in Mayfield Estates, 
              or exploring investment opportunities in Green Valley, our blog provides actionable insights backed by years of experience.
            </p>
            <p className="text-gray-700">
              From understanding HOA restrictions and neighborhood amenities to navigating market trends and pricing strategies, 
              we cover everything you need to make informed decisions about luxury real estate in Las Vegas, Nevada.
            </p>
          </div>

          <BlogPostsList posts={posts} />

          <div className="mt-16">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 
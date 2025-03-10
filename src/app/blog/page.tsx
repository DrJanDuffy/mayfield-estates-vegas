import { Suspense } from 'react';
import { BlogPost } from '@/components/BlogPost';
import { NewsletterForm } from '@/components/NewsletterForm';
import { fetchRSSFeed } from '@/utils/rss';

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
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Real Estate Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Stay informed about the Las Vegas real estate market with our latest insights and tips.
        </p>

        <Suspense fallback={<BlogSkeleton />}>
          <BlogPosts />
        </Suspense>

        <NewsletterForm />
      </div>
    </main>
  );
} 
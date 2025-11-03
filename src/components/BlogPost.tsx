'use client';

import Image from 'next/image';
import { BlogImagePlaceholder } from './BlogImagePlaceholder';
import type { RSSPost } from '@/utils/rss';

export function BlogPost({ post }: { post: RSSPost }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64 w-full">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src={BlogImagePlaceholder({
              width: 800,
              height: 400,
              text: post.title
            })}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-3 hover:text-blue-600">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
        </h2>
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        <a 
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
        >
          Read More 
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
} 
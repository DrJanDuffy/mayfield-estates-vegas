import Parser from 'rss-parser';

const parser = new Parser();
const RSS_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

export interface BlogPost {
  title: string;
  link: string;
  date: string;
  content: string;
  excerpt: string;
  categories?: string[];
  image?: string;
}

function extractImageFromContent(content: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : undefined;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(RSS_URL);
    return feed.items.map(item => {
      const content = item.content || '';
      return {
        title: item.title || '',
        link: item.link || '',
        date: new Date(item.pubDate || '').toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        content: content,
        excerpt: item.contentSnippet?.split('\n')[0] || '',
        categories: item.categories,
        image: extractImageFromContent(content)
      };
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
} 
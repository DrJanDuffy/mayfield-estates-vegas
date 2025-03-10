export interface RSSPost {
  id: number;
  title: string;
  link: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  imageAlt?: string;
}

const RSS_FEED_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

export async function fetchRSSFeed(): Promise<RSSPost[]> {
  try {
    const response = await fetch(RSS_FEED_URL, { next: { revalidate: 3600 } }); // Cache for 1 hour
    const text = await response.text();
    
    // Basic XML parsing
    const posts: RSSPost[] = [];
    const items = text.split('<item>').slice(1);
    
    items.forEach((item, index) => {
      // Extract title
      const titleMatch = item.match(/<title>(.*?)<\/title>/s);
      const title = titleMatch ? titleMatch[1].trim() : '';
      
      // Extract link
      const linkMatch = item.match(/<link>(.*?)<\/link>/s);
      const link = linkMatch ? linkMatch[1].trim() : '';
      
      // Extract description/excerpt
      const descMatch = item.match(/<description>(.*?)<\/description>/s);
      let excerpt = descMatch ? descMatch[1].trim() : '';
      // Clean up excerpt - remove HTML and limit length
      excerpt = excerpt.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
      
      // Extract date
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/s);
      const date = dateMatch 
        ? new Date(dateMatch[1]).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        : '';
      
      // Extract category
      const categoryMatch = item.match(/<category>(.*?)<\/category>/s);
      const category = categoryMatch ? categoryMatch[1].trim() : 'Real Estate';
      
      // Calculate read time (rough estimate based on word count)
      const wordCount = excerpt.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200) + ' min read';
      
      // Try to extract image from content
      const contentMatch = item.match(/<content:encoded>(.*?)<\/content:encoded>/s);
      let image = undefined;
      let imageAlt = undefined;
      
      if (contentMatch) {
        const imgMatch = contentMatch[1].match(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/);
        if (imgMatch) {
          image = imgMatch[1];
          imageAlt = imgMatch[2];
        }
      }
      
      posts.push({
        id: index + 1,
        title,
        link,
        excerpt,
        date,
        readTime,
        category,
        image,
        imageAlt
      });
    });
    
    return posts;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
} 
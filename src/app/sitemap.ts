import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mayfieldestateslasvegas.com'
  
  // Core pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/buyers',
    '/sellers',
    '/home-value',
    '/value',
    '/cma',
    '/blog',
    '/las-vegas-neighborhoods',
    '/las-vegas-neighborhoods/summerlin',
    '/las-vegas-neighborhoods/green-valley',
    '/las-vegas-neighborhoods/southwest',
    '/las-vegas-neighborhoods/henderson',
    '/las-vegas-neighborhoods/north-las-vegas',
    '/las-vegas-neighborhoods/mayfield-estates',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.startsWith('/las-vegas-neighborhoods') ? 'weekly' as const : 'daily' as const,
    priority: route === '' ? 1 : route.startsWith('/las-vegas-neighborhoods/mayfield-estates') ? 0.9 : 0.8,
  }))

  // Add dynamic routes here when implemented
  // Example: blog posts, listings, neighborhood pages

  return routes
} 
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mayfieldestateslasvegas.com'
  
  // Core pages
  const routes = [
    '',
    '/contact',
    '/home-value',
    '/cma',
    '/blog',
    '/las-vegas-neighborhoods',
    '/mayfield-estates',
    '/mayfield-estates/amenities',
    '/mayfield-estates/floor-plans',
    '/mayfield-estates/availability',
    '/mayfield-estates/gallery',
    '/mayfield-estates/location',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.startsWith('/mayfield-estates') ? 'weekly' as const : 'daily' as const,
    priority: route === '' ? 1 : route.startsWith('/mayfield-estates') ? 0.9 : 0.8,
  }))

  // Add dynamic routes here when implemented
  // Example: blog posts, listings, neighborhood pages

  return routes
} 
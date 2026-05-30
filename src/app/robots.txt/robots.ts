import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/internal'],
    },
    sitemap: 'https://smartiptv-hj786115-9836s-projects.vercel.app/sitemap.xml',
  }
}
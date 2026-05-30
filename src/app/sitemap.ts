import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://smartiptv-ge2z9f2sk-hj786115-9836s-projects.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
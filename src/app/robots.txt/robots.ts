import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Agar aapke paas koi admin ya private pages hain, toh unhe yahan disallow kar sakte hain
      // disallow: '/admin',
    },
    sitemap: 'https://smartiptv-ge2z9f2sk-hj786115-9836s-projects.vercel.app/sitemap.xml',
  }
}
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart IPTV | Your TV, Done Right — 10,000+ Channels Delivered',
  description: 'Smart IPTV delivers enterprise IPTV for telecom, hotels, hospitals, and OTT partners. 10,000+ channels with 99.99% SLA and rapid deployment.',
  keywords: [
    'Smart IPTV',
    'enterprise IPTV',
    'IPTV services',
    'telecom operators',
    'hospitality IPTV',
    'OTT provider platform'
  ],
  openGraph: {
    title: 'Smart IPTV',
    description: 'Your TV, Done Right — 10,000+ Channels Delivered for enterprise operators.',
    type: 'website',
    url: 'https://smart-iptv-pro--hj786115.replit.app/',
    images: [
      {
        url: 'https://smart-iptv-pro--hj786115.replit.app/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Smart IPTV'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart IPTV',
    description: 'Enterprise IPTV with 10,000+ channels, global delivery, and rapid deployment.'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Smart IPTV',
  url: 'https://smart-iptv-pro--hj786115.replit.app/',
  logo: 'https://smart-iptv-pro--hj786115.replit.app/favicon.svg',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-860-770-2368',
      contactType: 'sales',
      email: 'salessmartiptv1@gmail.com'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Innovation Drive, Suite 400',
    addressLocality: 'Wilmington',
    addressRegion: 'DE',
    postalCode: '19801',
    addressCountry: 'USA'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="x9KV4VP-Yqmf4xT_tLqNIXPcwKX7pB9EnUw_yezaics" />
        <link rel="icon" href="/favicon.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

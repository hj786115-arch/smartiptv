export function GET() {
  return new Response('User-agent: *\nAllow: /\nSitemap: https://smart-iptv-pro--hj786115.replit.app/sitemap.xml', {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}

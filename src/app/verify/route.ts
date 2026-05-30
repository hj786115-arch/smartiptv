import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Google ke verification file ka content yahan likhein
  const verificationContent = `google-site-verification: MjIq-IUZYmFcUYVn7sWRV92RBwLeir2M0qONFXdZywg`;
  
  return new NextResponse(verificationContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
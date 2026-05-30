import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const fileContent = `<!DOCTYPE html>
<html>
<head>
<meta name="google-site-verification" content="MjIq-IUZYmFcUYVn7sWRV92RBwLeir2M0qONFXdZywg" />
</head>
<body>
Google verification
</body>
</html>`;
  
  return new NextResponse(fileContent, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
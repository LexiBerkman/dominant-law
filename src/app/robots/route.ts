import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *\nDisallow:\nSitemap: https://dominant.law/sitemap.xml\n`;
  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}

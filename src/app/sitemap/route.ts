import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://dominant.law";
  const routes = [
    "",
    "practice-areas",
    "attorneys",
    "results",
    "about",
    "contact",
    "resources",
    "faq",
    "georgia/atlanta",
    "georgia/savannah",
    "georgia/augusta",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`,
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

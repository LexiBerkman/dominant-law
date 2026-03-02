import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/content/site';
import { guides } from '@/lib/content/guides';

const staticRoutes = [
  '/',
  '/practice-areas',
  '/practice-areas/auto-accidents',
  '/practice-areas/truck-accidents',
  '/practice-areas/slip-and-fall',
  '/practice-areas/wrongful-death',
  '/resources',
  '/resources/guides',
  '/resources/faq',
  '/about',
  '/reviews',
  '/contact',
  '/locations',
  '/locations/atlanta',
  '/disclaimer',
  '/privacy',
  '/terms'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const guideRoutes = guides.map((g) => `/resources/guides/${g.slug}`);
  return [...staticRoutes, ...guideRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7
  }));
}

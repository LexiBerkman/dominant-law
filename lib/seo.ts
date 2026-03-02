import type { Metadata } from 'next';
import { siteConfig } from '@/lib/content/site';

export function buildMetadata(title: string, description: string, path: string): Metadata {
  const canonical = `${siteConfig.domain}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.domain),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

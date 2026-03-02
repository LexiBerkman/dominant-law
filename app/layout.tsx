import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyCtaBar } from '@/components/layout/sticky-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/content/site';

export const metadata: Metadata = {
  title: {
    default: 'Dominant Law | Georgia Personal Injury Trial Counsel',
    template: '%s | Dominant Law'
  },
  description: 'Georgia plaintiff personal injury law firm for auto accidents, trucking crashes, slip-and-fall cases, and wrongful death claims.',
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    type: 'website',
    siteName: 'Dominant Law',
    title: 'Dominant Law',
    description: 'Trial-ready Georgia personal injury representation.',
    url: siteConfig.domain
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Dominant Law',
            areaServed: 'Georgia',
            url: siteConfig.domain,
            telephone: siteConfig.phoneDisplay,
            description: 'Georgia plaintiff personal injury trial counsel.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'TODO',
              addressLocality: 'Atlanta',
              addressRegion: 'GA',
              postalCode: 'TODO',
              addressCountry: 'US'
            }
          }}
        />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StickyCtaBar />
      </body>
    </html>
  );
}

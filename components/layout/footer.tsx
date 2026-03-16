import Link from 'next/link';
import { siteConfig } from '@/lib/content/site';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { TrackLink } from '@/components/track-link';

export function Footer() {
  const phoneLabel = siteConfig.phoneDisplay.includes('TODO') ? 'Call now' : `Call now: ${siteConfig.phoneDisplay}`;
  const textLabel = siteConfig.textDisplay.includes('TODO') ? 'Text us' : siteConfig.textDisplay;

  return (
    <footer className="mt-24 border-t border-border/80 bg-card/35">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl">Dominant Law</p>
          <p className="mt-3 max-w-sm text-sm text-mutedForeground">Georgia plaintiff personal injury representation with trial-ready strategy and disciplined case preparation.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold uppercase tracking-[0.1em] text-primary">Quick Links</p>
          <Link href="/practice-areas" className="block text-foreground/90 no-underline hover:text-primary">Practice Areas</Link>
          <Link href="/resources/guides" className="block text-foreground/90 no-underline hover:text-primary">Guides</Link>
          <Link href="/contact" className="block text-foreground/90 no-underline hover:text-primary">Contact</Link>
          <Link href="/disclaimer" className="block text-foreground/90 no-underline hover:text-primary">Disclaimer</Link>
          <Link href="/privacy" className="block text-foreground/90 no-underline hover:text-primary">Privacy</Link>
          <Link href="/terms" className="block text-foreground/90 no-underline hover:text-primary">Terms</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold uppercase tracking-[0.1em] text-primary">Contact</p>
          <TrackLink href={siteConfig.phoneHref} event="call_click" className="block text-foreground/90 no-underline hover:text-primary">
            {phoneLabel}
          </TrackLink>
          <TrackLink href={siteConfig.textHref} event="text_click" className="block text-foreground/90 no-underline hover:text-primary">
            {textLabel}
          </TrackLink>
          <TrackLink href="/contact" event="form_start" className="block text-foreground/90 no-underline hover:text-primary">
            Free case evaluation
          </TrackLink>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <DisclaimerBar />
        <p className="mt-5 border-t border-border/65 pt-5 text-xs text-mutedForeground">No legal advice is provided on this website. Past outcomes, third-party ratings, and testimonials should not be interpreted as guarantees of future results.</p>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { siteConfig } from '@/lib/content/site';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { TrackLink } from '@/components/track-link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/80 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-xl">Dominant Law</p>
          <p className="mt-2 text-sm text-mutedForeground">Georgia plaintiff personal injury representation. Trial-ready strategy. TODO: Replace with official office details.</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Quick Links</p>
          <Link href="/practice-areas" className="block text-mutedForeground no-underline hover:text-foreground">Practice Areas</Link>
          <Link href="/resources/guides" className="block text-mutedForeground no-underline hover:text-foreground">Guides</Link>
          <Link href="/contact" className="block text-mutedForeground no-underline hover:text-foreground">Contact</Link>
          <Link href="/disclaimer" className="block text-mutedForeground no-underline hover:text-foreground">Disclaimer</Link>
          <Link href="/privacy" className="block text-mutedForeground no-underline hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="block text-mutedForeground no-underline hover:text-foreground">Terms</Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Contact</p>
          <TrackLink href={siteConfig.phoneHref} event="call_click" className="block text-mutedForeground no-underline hover:text-foreground">
            Call now: {siteConfig.phoneDisplay}
          </TrackLink>
          <TrackLink href={siteConfig.textHref} event="text_click" className="block text-mutedForeground no-underline hover:text-foreground">
            Text us
          </TrackLink>
          <TrackLink href="/contact" event="form_start" className="block text-mutedForeground no-underline hover:text-foreground">
            Free case evaluation
          </TrackLink>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <DisclaimerBar />
        <p className="mt-4 text-xs text-mutedForeground">Example / Placeholder-replace with real data. No results, awards, or reviews are represented as factual until verified.</p>
      </div>
    </footer>
  );
}

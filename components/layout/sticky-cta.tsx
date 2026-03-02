'use client';

import { Button } from '@/components/ui/button';
import { TrackLink } from '@/components/track-link';
import { siteConfig } from '@/lib/content/site';

export function StickyCtaBar() {
  return (
    <nav aria-label="Quick contact actions" className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        <TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">
          <Button className="w-full" size="sm">Call</Button>
        </TrackLink>
        <TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">
          <Button className="w-full" size="sm" variant="secondary">Text</Button>
        </TrackLink>
        <TrackLink href="/contact" event="form_start" className="no-underline">
          <Button className="w-full" size="sm" variant="ghost">Evaluate</Button>
        </TrackLink>
      </div>
    </nav>
  );
}

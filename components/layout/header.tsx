'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/lib/content/site';
import { Button } from '@/components/ui/button';
import { TrackLink } from '@/components/track-link';
import { BrandMark } from '@/components/layout/brand-mark';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 md:px-8">
        <Link href="/" className="no-underline">
          <BrandMark compact />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm uppercase tracking-[0.08em] text-foreground/90 no-underline hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">
            <Button size="sm">Call now</Button>
          </TrackLink>
          <TrackLink href="/contact" event="form_start" className="no-underline">
            <Button size="sm" variant="secondary">Free case evaluation</Button>
          </TrackLink>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-md border border-border/90 bg-card/45 px-3 py-2 text-sm md:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-border/70 bg-card/95 md:hidden" id="mobile-menu" ref={panelRef}>
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {siteConfig.nav.map((item, idx) => (
              <Link
                key={item.href}
                ref={idx === 0 ? firstLinkRef : undefined}
                href={item.href}
                className="rounded-md px-3 py-2 text-base text-foreground no-underline hover:bg-muted"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">
                <Button className="w-full" onClick={() => setMenuOpen(false)}>Call now</Button>
              </TrackLink>
              <TrackLink href="/contact" event="form_start" className="no-underline">
                <Button className="w-full" variant="secondary" onClick={() => setMenuOpen(false)}>Free case evaluation</Button>
              </TrackLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

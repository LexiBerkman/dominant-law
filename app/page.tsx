import Link from 'next/link';
import Image from 'next/image';
import { ChatConcierge } from '@/components/chat/chat-concierge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { BrandMark } from '@/components/layout/brand-mark';
import { TrackLink } from '@/components/track-link';
import { siteConfig, practiceAreas } from '@/lib/content/site';
import { guides } from '@/lib/content/guides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata(
  'Georgia Personal Injury Trial Counsel',
  'Dominant Law helps Georgia injury victims after auto accidents, trucking crashes, slip and falls, and wrongful death incidents.',
  '/'
);

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-16 pt-8 md:px-8">
      <section className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card/40 p-5 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_5%,rgba(214,177,84,0.18),transparent_33%),radial-gradient(circle_at_82%_4%,rgba(214,177,84,0.12),transparent_30%)]" />
        <div className="relative grid items-start gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 pt-1">
            <div className="rounded-lg border border-primary/40 bg-background/75 p-3">
              <BrandMark />
            </div>

            <div className="flex items-center gap-4">
              <div className="hero-crest-wrap" aria-hidden>
                <div className="hero-crest-orbit" />
                <div className="hero-crest-ring" />
                <div className="hero-crest-logo">
                  <Image
                    src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
                    alt=""
                    fill
                    sizes="140px"
                    className="object-contain p-3"
                  />
                </div>
              </div>
              <div>
                <Badge variant="secondary">Trial-ready Georgia plaintiff counsel</Badge>
                <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.18em] text-primary/90">Dominant in preparation. Disciplined in trial posture.</p>
              </div>
            </div>

            <h1 className="font-serif text-4xl leading-tight md:text-6xl">Built for the courtroom. Focused on your recovery.</h1>
            <p className="max-w-xl text-lg text-mutedForeground">
              Strategic personal injury representation across Georgia for auto accidents, trucking collisions, slip-and-fall claims, and wrongful death matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink></Button>
              <Button size="lg" variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">Text us</TrackLink></Button>
              <Button size="lg" variant="ghost" asChild><TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink></Button>
            </div>
            <DisclaimerBar />
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -right-12 -top-12 h-72 w-72 opacity-10 md:h-80 md:w-80">
              <Image
                src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
                alt=""
                fill
                sizes="320px"
                className="object-contain"
                aria-hidden
              />
            </div>
            <div className="mb-4 overflow-hidden rounded-2xl border border-primary/30 bg-card/30">
              <div className="relative h-48 md:h-56">
                <Image
                  src="/images/lawyer-lion.png"
                  alt="Trial lawyer with lion motif"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-xl text-foreground">Trial-ready counsel. Human strength. Lion focus.</p>
                </div>
              </div>
            </div>
            <ChatConcierge />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl border border-primary/35 bg-card/55 p-5 md:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(214,177,84,0.13),transparent_52%)]" />
        <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-primary/50 bg-background/70">
              <Image
                src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
                alt="Dominant Law lion crest"
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>
            <div>
              <p className="font-serif text-3xl leading-none">Dominant Law</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-primary">Georgia Plaintiff Trial Counsel</p>
            </div>
          </div>
          <p className="max-w-xl text-sm text-mutedForeground">
            Lion-standard preparation. Courtroom discipline. Client-first execution from intake to verdict.
          </p>
        </div>
      </section>

      <section className="grid gap-4 rounded-lg border border-border bg-card/40 p-6 md:grid-cols-3">
        <div><p className="font-semibold">Example / Placeholder-replace with real data</p><p className="text-sm text-mutedForeground">Verified outcomes and credentials pending client-provided proof.</p></div>
        <div><p className="font-semibold">No fabricated awards</p><p className="text-sm text-mutedForeground">Only factual recognition should appear after verification.</p></div>
        <div><p className="font-semibold">No fabricated reviews</p><p className="text-sm text-mutedForeground">Review feed is template-only until connected to a real source.</p></div>
      </section>

      <section>
        <h2 className="font-serif text-3xl">Practice Areas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Card key={area.slug}>
              <CardHeader><CardTitle>{area.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-mutedForeground">{area.summary}</p>
                <Link href={`/practice-areas/${area.slug}`} className="mt-4 inline-block text-sm text-primary no-underline hover:underline">Explore this practice area</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-lg border border-border bg-muted/20 p-6 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl">The trial-ready standard</h2>
          <p className="mt-3 text-mutedForeground">We prepare every case for litigation discipline from day one: factual investigation, timeline control, and strategic communication.</p>
        </div>
        <ol className="space-y-2 text-sm text-mutedForeground">
          <li>1. Immediate intake triage and preservation checklist</li>
          <li>2. Liability and damages case-build framework</li>
          <li>3. Negotiation leverage built from trial preparation</li>
          <li>4. Escalation to litigation when resolution is inadequate</li>
        </ol>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Representative matters</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-mutedForeground">Example / Placeholder-replace with real data. No outcomes are claimed here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Reviews</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-mutedForeground">Template only. Integrate verified review platform data.</p>
            <Link href="/reviews" className="mt-4 inline-block text-sm text-primary no-underline hover:underline">Open reviews template</Link>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="font-serif text-3xl">Quick answers from our guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guides.slice(0, 6).map((guide) => (
            <Card key={guide.slug}>
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link href={`/resources/guides/${guide.slug}`} className="no-underline hover:text-primary">
                    {guide.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-mutedForeground">{guide.description}</p>
                <Link href={`/resources/guides/${guide.slug}`} className="mt-3 inline-block text-sm text-primary no-underline hover:underline">
                  Read guide: {guide.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

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
import { Crown, Scale, Swords, MapPinned } from 'lucide-react';

const dominantStandards = [
  {
    title: 'Rapid attorney access',
    body: 'Call, text, or submit intake to get direct guidance on immediate next steps.',
    Icon: Crown
  },
  {
    title: 'Trial-driven case posture',
    body: 'From day one, we build facts and damages with litigation-ready discipline.',
    Icon: Swords
  },
  {
    title: 'Georgia-specific guidance',
    body: 'Practice-area pages and legal guides are focused on Georgia injury claims.',
    Icon: MapPinned
  }
] as const;

export const metadata = buildMetadata(
  'Georgia Personal Injury Trial Counsel',
  'Dominant Law helps Georgia injury victims after auto accidents, trucking crashes, slip and falls, and wrongful death incidents.',
  '/'
);

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-24 px-4 pb-24 pt-10 md:px-8">
      <section className="lux-panel lux-grid reveal-up relative overflow-hidden rounded-[1.75rem] p-6 md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_6%,rgba(244,195,89,0.2),transparent_34%),radial-gradient(circle_at_87%_14%,rgba(67,129,255,0.19),transparent_32%)]" />
        <div className="relative grid items-start gap-10 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-8">
            <div className="reveal-up reveal-delay-1 rounded-xl border border-primary/30 bg-background/65 p-3">
              <BrandMark />
            </div>

            <div className="reveal-up reveal-delay-1 flex items-center gap-4">
              <div className="hero-crest-wrap float-slow" aria-hidden>
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
              <div className="space-y-2">
                <Badge variant="secondary" className="tracking-[0.06em]">Trial-ready Georgia plaintiff counsel</Badge>
                <p className="max-w-xl text-xs uppercase tracking-[0.24em] text-primary/95 md:text-sm">Dominant in preparation. Disciplined in trial posture.</p>
              </div>
            </div>

            <div className="reveal-up reveal-delay-2 space-y-6">
              <h1 className="font-serif text-5xl leading-[0.96] md:text-7xl">Built for trial leverage. Focused on your recovery.</h1>
              <p className="max-w-2xl text-lg text-mutedForeground md:text-xl">
                Strategic Georgia plaintiff representation for auto collisions, trucking crashes, slip-and-fall injuries, and wrongful death claims.
              </p>
            </div>

            <div className="reveal-up reveal-delay-3 flex flex-wrap gap-3">
              <Button size="lg" asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink></Button>
              <Button size="lg" variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">Text us</TrackLink></Button>
              <Button size="lg" variant="ghost" asChild><TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink></Button>
            </div>
            <div className="reveal-up reveal-delay-3">
              <DisclaimerBar />
            </div>
          </div>

          <div className="relative reveal-up reveal-delay-2">
            <div className="pointer-events-none absolute -right-14 -top-14 h-72 w-72 opacity-15 md:h-96 md:w-96">
              <Image
                src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
                alt=""
                fill
                sizes="360px"
                className="object-contain"
                aria-hidden
              />
            </div>
            <div className="mb-5 overflow-hidden rounded-3xl border border-primary/35 bg-card/20 shadow-[0_20px_48px_rgba(0,0,0,0.45)]">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/images/lawyer-lion.png"
                  alt="Trial lawyer with lion motif"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/18 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-serif text-2xl leading-tight text-foreground md:text-3xl">Trial-ready counsel. Human strength. Lion focus.</p>
                </div>
              </div>
            </div>
            <ChatConcierge />
          </div>
        </div>
      </section>

      <section className="reveal-up rounded-[1.5rem] border border-primary/35 bg-card/55 p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-primary/55 bg-background/70 shadow-[0_0_0_5px_rgba(255,255,255,0.03)]">
              <Image
                src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
                alt="Dominant Law lion crest"
                fill
                sizes="80px"
                className="object-contain p-2"
              />
            </div>
            <div>
              <p className="font-serif text-4xl leading-none">Dominant Law</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-primary">Georgia Plaintiff Trial Counsel</p>
            </div>
          </div>
          <p className="max-w-xl text-sm text-mutedForeground md:text-base">
            Lion-standard preparation. Courtroom discipline. Client-first execution from intake to verdict.
          </p>
        </div>
        <div className="mt-8 grid gap-4 border-t border-primary/20 pt-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Case Architecture</p>
            <p className="mt-2 text-sm text-mutedForeground">Story-first evidence mapping built for negotiation and trial.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Claim Pressure</p>
            <p className="mt-2 text-sm text-mutedForeground">Insurer communications designed to preserve leverage.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Client Command</p>
            <p className="mt-2 text-sm text-mutedForeground">Clear timeline ownership from intake through litigation posture.</p>
          </div>
        </div>
      </section>

      <section className="reveal-up reveal-delay-1">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LionSigil />
            <p className="text-xs uppercase tracking-[0.28em] text-primary">The Dominant Standard</p>
          </div>
          <Scale className="h-5 w-5 text-primary/80" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {dominantStandards.map(({ title, body, Icon }) => (
            <article key={title} className="lux-panel group rounded-2xl p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-background/55">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent transition-all duration-300 group-hover:w-24" />
              </div>
              <p className="font-serif text-2xl">{title}</p>
              <p className="mt-3 text-sm text-mutedForeground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-up reveal-delay-2">
        <div className="mb-7 flex items-center gap-3">
          <LionSigil />
          <p className="text-xs uppercase tracking-[0.28em] text-primary">Practice Portfolio</p>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl">Practice Areas</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Card key={area.slug}>
              <CardHeader><CardTitle className="text-3xl">{area.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-base text-mutedForeground">{area.summary}</p>
                <Link href={`/practice-areas/${area.slug}`} className="mt-5 inline-block text-sm uppercase tracking-[0.12em] text-primary no-underline hover:underline">Explore this practice area</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="reveal-up reveal-delay-3 grid gap-8 rounded-[1.5rem] border border-border/80 bg-muted/20 p-7 md:grid-cols-2 md:p-9">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">Matter Workflow</p>
          <h2 className="font-serif text-4xl md:text-5xl">How we run your case</h2>
          <p className="mt-4 text-mutedForeground md:text-lg">Each matter is managed with a repeatable case-build framework designed to protect evidence, control the story, and preserve leverage.</p>
        </div>
        <ol className="space-y-3 text-sm text-mutedForeground md:text-base">
          <li>1. Immediate triage and evidence preservation planning.</li>
          <li>2. Liability and damages mapping with documentation checkpoints.</li>
          <li>3. Strategic insurer communication under trial-ready posture.</li>
          <li>4. Litigation escalation when pre-suit resolution is inadequate.</li>
        </ol>
      </section>

      <section className="reveal-up grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-3xl">Case readiness checklist</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-mutedForeground md:text-base">
              <li>Police report or incident number</li>
              <li>Photos and video from scene and injuries</li>
              <li>Medical treatment records and timeline</li>
              <li>Insurer claim details and adjuster contacts</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-3xl">What to expect at intake</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-mutedForeground md:text-base">You will get a practical risk and timeline conversation, clear next actions, and an honest assessment of whether your claim should move forward.</p>
            <Link href="/contact" className="mt-5 inline-block text-sm uppercase tracking-[0.12em] text-primary no-underline hover:underline">Start your intake</Link>
          </CardContent>
        </Card>
      </section>

      <section className="reveal-up reveal-delay-1">
        <div className="mb-7 flex items-center gap-3">
          <LionSigil />
          <p className="text-xs uppercase tracking-[0.28em] text-primary">Georgia Guides Library</p>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl">Quick answers from our guides</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {guides.slice(0, 6).map((guide) => (
            <Card key={guide.slug}>
              <CardHeader>
                <CardTitle className="text-2xl">
                  <Link href={`/resources/guides/${guide.slug}`} className="no-underline hover:text-primary">
                    {guide.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-mutedForeground md:text-base">{guide.description}</p>
                <Link href={`/resources/guides/${guide.slug}`} className="mt-5 inline-block text-sm uppercase tracking-[0.11em] text-primary no-underline hover:underline">
                  Read guide: {guide.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="lux-panel reveal-up reveal-delay-2 relative overflow-hidden rounded-[1.5rem] p-7 md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(244,195,89,0.2),transparent_40%),radial-gradient(circle_at_89%_16%,rgba(66,129,255,0.2),transparent_33%)]" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-primary">Start Now</p>
            <h2 className="font-serif text-4xl md:text-5xl">Talk to a Georgia injury lawyer today</h2>
            <p className="mt-3 max-w-2xl text-mutedForeground md:text-lg">No legal advice is provided through this website. Use call, text, or intake to request a direct attorney conversation about your situation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function LionSigil() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/55 bg-background/60 p-1" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-full w-full text-primary">
        <path d="M12 3l2.2 2.7L18 6.8l-1.8 3.1L18.9 13l-3.6.5L14 17l-2-1.4L10 17l-1.3-3.5L5.1 13l2.7-3.1L6 6.8l3.8-1.1L12 3z" fill="currentColor" opacity="0.9" />
      </svg>
    </span>
  );
}

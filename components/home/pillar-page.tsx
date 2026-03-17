import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/content/site';
import { TrackLink } from '@/components/track-link';

interface PProps {
  title: string;
  summary: string[];
  checklist: string[];
  faqs: { q: string; a: string }[];
  timeline: string[];
  evidence: string[];
  insurance: string;
  damages: string;
  notes: string;
  links: { href: string; label: string }[];
  path: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  heroImageClassName?: string;
}

export function PillarPageTemplate(props: PProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-8">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: props.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        }}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Practice Areas', href: '/practice-areas' }, { label: props.title }]} />
      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr,320px]">
        <article className="space-y-8">
          <section className="overflow-hidden rounded-[1.5rem] border border-primary/35 bg-card/55">
            <div className={props.heroImageSrc ? 'grid gap-0 lg:grid-cols-[1fr,360px]' : ''}>
              <div className="space-y-5 p-7 md:p-9">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">Practice Area</p>
                <h1 className="font-serif text-4xl md:text-6xl">{props.title}</h1>
                <DisclaimerBar />
                <ul className="list-disc space-y-2 rounded-xl border border-border bg-card/40 p-5 pl-8 text-sm text-mutedForeground md:text-base">
                  {props.summary.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink></Button>
                  <Button variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">Text us</TrackLink></Button>
                  <Button variant="ghost" asChild><TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink></Button>
                </div>
              </div>
              {props.heroImageSrc ? (
                <div className="relative h-[260px] border-t border-border/70 lg:h-[340px] lg:self-center lg:border-l lg:border-t-0">
                  <Image
                    src={props.heroImageSrc}
                    alt={props.heroImageAlt || props.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className={props.heroImageClassName || 'object-cover'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                </div>
              ) : null}
            </div>
          </section>

          <section id="what-to-do-now" aria-labelledby="what-to-do-now-heading" className="rounded-[1.25rem] border border-border/80 bg-muted/20 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Immediate Actions</p>
            <h2 id="what-to-do-now-heading" className="mt-2 font-serif text-3xl md:text-4xl">What to do now</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-mutedForeground md:text-base">
              {props.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section id="timeline-and-process" aria-labelledby="timeline-and-process-heading" className="rounded-[1.25rem] border border-border/80 bg-card/40 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Claim Lifecycle</p>
            <h2 id="timeline-and-process-heading" className="mt-2 font-serif text-3xl md:text-4xl">Timeline and process</h2>
            <ol className="mt-4 space-y-2 text-sm text-mutedForeground md:text-base">
              {props.timeline.map((item, idx) => <li key={item}>{idx + 1}. {item}</li>)}
            </ol>
          </section>

          <section id="evidence-preservation" aria-labelledby="evidence-preservation-heading" className="rounded-[1.25rem] border border-border/80 bg-muted/20 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Proof Strategy</p>
            <h2 id="evidence-preservation-heading" className="mt-2 font-serif text-3xl md:text-4xl">Evidence preservation</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-mutedForeground md:text-base">
              {props.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section id="insurance-and-claims-overview" aria-labelledby="insurance-and-claims-overview-heading" className="rounded-[1.25rem] border border-border/80 bg-card/40 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Insurer Dynamics</p>
            <h2 id="insurance-and-claims-overview-heading" className="mt-2 font-serif text-3xl md:text-4xl">Insurance and claims overview</h2>
            <p className="mt-4 text-mutedForeground md:text-lg">{props.insurance}</p>
          </section>

          <section id="damages-overview" aria-labelledby="damages-overview-heading" className="rounded-[1.25rem] border border-border/80 bg-muted/20 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Damages Model</p>
            <h2 id="damages-overview-heading" className="mt-2 font-serif text-3xl md:text-4xl">Damages overview</h2>
            <p className="mt-4 text-mutedForeground md:text-lg">{props.damages}</p>
          </section>

          <section id="georgia-specific-notes" aria-labelledby="georgia-specific-notes-heading" className="rounded-[1.25rem] border border-border/80 bg-card/40 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Georgia Context</p>
            <h2 id="georgia-specific-notes-heading" className="mt-2 font-serif text-3xl md:text-4xl">Georgia-specific notes</h2>
            <p className="mt-4 text-mutedForeground md:text-lg">{props.notes}</p>
          </section>

          <section id="faqs" aria-labelledby="faqs-heading" className="rounded-[1.25rem] border border-border/80 bg-muted/20 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Quick Answers</p>
            <h2 id="faqs-heading" className="mt-2 font-serif text-3xl md:text-4xl">FAQs</h2>
            <Accordion type="single" collapsible>
              {props.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="space-y-4 rounded-[1.5rem] border border-primary/30 bg-card/55 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Direct Contact</p>
            <h2 className="font-serif text-3xl md:text-4xl">Need immediate help?</h2>
            <DisclaimerBar compact />
            <div className="flex flex-wrap gap-3">
              <Button asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink></Button>
              <Button variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">Text us</TrackLink></Button>
              <Button variant="ghost" asChild><TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink></Button>
            </div>
          </section>
        </article>

        <aside className="space-y-5 rounded-[1.25rem] border border-border/80 bg-card/40 p-5 lg:sticky lg:top-24 lg:h-fit">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">On this page</p>
            <nav aria-label="Section navigation" className="mt-3 space-y-2 text-sm">
              <Link href="#what-to-do-now" className="block text-mutedForeground no-underline hover:text-primary">What to do now</Link>
              <Link href="#timeline-and-process" className="block text-mutedForeground no-underline hover:text-primary">Timeline and process</Link>
              <Link href="#evidence-preservation" className="block text-mutedForeground no-underline hover:text-primary">Evidence preservation</Link>
              <Link href="#insurance-and-claims-overview" className="block text-mutedForeground no-underline hover:text-primary">Insurance and claims</Link>
              <Link href="#damages-overview" className="block text-mutedForeground no-underline hover:text-primary">Damages overview</Link>
              <Link href="#georgia-specific-notes" className="block text-mutedForeground no-underline hover:text-primary">Georgia notes</Link>
              <Link href="#faqs" className="block text-mutedForeground no-underline hover:text-primary">FAQs</Link>
            </nav>
          </div>
          <div className="h-px bg-border/80" />
          <p className="font-serif text-xl">Related links</p>
          {props.links.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm text-primary no-underline hover:underline">{link.label}</Link>
          ))}
          <Link href={props.path} className="block text-sm text-mutedForeground no-underline">Canonical: {siteConfig.domain}{props.path}</Link>
        </aside>
      </div>
    </div>
  );
}

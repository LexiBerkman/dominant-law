import Link from 'next/link';
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
}

export function PillarPageTemplate(props: PProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
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
      <div className="grid gap-8 lg:grid-cols-[1fr,300px]">
        <article className="space-y-8">
          <section className="space-y-4">
            <h1 className="font-serif text-4xl">{props.title}</h1>
            <DisclaimerBar />
            <ul className="list-disc space-y-2 rounded-lg border border-border bg-card/40 p-4 pl-8 text-sm text-mutedForeground">
              {props.summary.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink></Button>
              <Button variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">Text us</TrackLink></Button>
              <Button variant="ghost" asChild><TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink></Button>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl">What to do now</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-mutedForeground">
              {props.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Timeline and process</h2>
            <ol className="mt-3 space-y-2 text-sm text-mutedForeground">
              {props.timeline.map((item, idx) => <li key={item}>{idx + 1}. {item}</li>)}
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Evidence preservation</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-mutedForeground">
              {props.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Insurance and claims overview</h2>
            <p className="mt-3 text-mutedForeground">{props.insurance}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Damages overview</h2>
            <p className="mt-3 text-mutedForeground">{props.damages}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">Georgia-specific notes</h2>
            <p className="mt-3 text-mutedForeground">{props.notes}</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl">FAQs</h2>
            <Accordion type="single" collapsible>
              {props.faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
            <h2 className="font-serif text-2xl">Need immediate help?</h2>
            <DisclaimerBar compact />
            <div className="flex flex-wrap gap-3">
              <Button asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="no-underline">Call now</TrackLink></Button>
              <Button variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="no-underline">Text us</TrackLink></Button>
              <Button variant="ghost" asChild><TrackLink href="/contact" event="form_start" className="no-underline">Free case evaluation</TrackLink></Button>
            </div>
          </section>
        </article>

        <aside className="space-y-3 rounded-lg border border-border bg-card/40 p-4">
          <p className="font-serif text-xl">Quick answers</p>
          {props.links.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm text-primary no-underline hover:underline">{link.label}</Link>
          ))}
          <Link href={props.path} className="block text-sm text-mutedForeground no-underline">Canonical: {siteConfig.domain}{props.path}</Link>
        </aside>
      </div>
    </div>
  );
}

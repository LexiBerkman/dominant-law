import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { IntakeForm } from '@/components/forms/intake-form';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { TrackLink } from '@/components/track-link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/content/site';
import { env } from '@/lib/env';

export const metadata = buildMetadata('Contact', 'Start a free case evaluation with Dominant Law.', '/contact');

export default function ContactPage() {
  const destinationMissing = process.env.NODE_ENV === 'production' && !env.intakeWebhookUrl;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <section className="mt-5 overflow-hidden rounded-[1.5rem] border border-primary/35 bg-card/55">
        <div className="grid gap-0 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">Contact Dominant Law</p>
            <h1 className="mt-3 font-serif text-4xl md:text-6xl">Free Case Evaluation</h1>
            <p className="mt-4 max-w-2xl text-mutedForeground md:text-lg">Start with a direct conversation about facts, treatment, timing, and next steps. No clutter, no fake urgency, and no need to overexplain sensitive details online.</p>
            <div className="mt-5"><DisclaimerBar /></div>
          </div>
          <div className="relative min-h-[300px] border-t border-border/70 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/consultation-client-neck-brace.png"
              alt="Attorney reviewing paperwork with an injured client wearing a neck brace"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="max-w-sm font-serif text-2xl leading-tight text-foreground">Clear intake. Serious review. Disciplined next steps.</p>
            </div>
          </div>
        </div>
      </section>
      {destinationMissing ? (
        <p className="mt-4 rounded-md border border-primary/50 bg-primary/10 p-3 text-sm">Submission destination is not configured. Please call or text us directly.</p>
      ) : null}
      <div className="mt-10 grid gap-8 md:grid-cols-[1fr,320px]">
        <IntakeForm />
        <aside className="space-y-4 rounded-[1.25rem] border border-border bg-card/50 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Direct Contact</p>
          <p className="font-serif text-2xl">Talk to a lawyer now</p>
          <p className="text-sm text-mutedForeground">Use the intake form for a structured review, or contact the office directly if timing matters.</p>
          <Button className="w-full" asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="block no-underline">Call now</TrackLink></Button>
          <Button className="w-full" variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="block no-underline">Text us</TrackLink></Button>
          <Button className="w-full" variant="ghost" asChild><TrackLink href="/" event="chat_start" className="block no-underline">Chat concierge</TrackLink></Button>
          <div className="rounded-xl border border-border/80 bg-muted/20 p-4 text-sm text-mutedForeground">
            Clients usually ask about treatment status, insurer contacts, deadlines, and what records to gather next.
          </div>
          <DisclaimerBar compact />
        </aside>
      </div>
    </div>
  );
}

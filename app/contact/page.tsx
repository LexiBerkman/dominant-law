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
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <h1 className="font-serif text-4xl">Free Case Evaluation</h1>
      <div className="mt-4"><DisclaimerBar /></div>
      {destinationMissing ? (
        <p className="mt-4 rounded-md border border-primary/50 bg-primary/10 p-3 text-sm">Submission destination is not configured. Please call or text us directly.</p>
      ) : null}
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr,300px]">
        <IntakeForm />
        <aside className="space-y-3 rounded-lg border border-border bg-card/50 p-4">
          <p className="font-serif text-xl">Talk to a lawyer now</p>
          <Button className="w-full" asChild><TrackLink href={siteConfig.phoneHref} event="call_click" className="block no-underline">Call now</TrackLink></Button>
          <Button className="w-full" variant="secondary" asChild><TrackLink href={siteConfig.textHref} event="text_click" className="block no-underline">Text us</TrackLink></Button>
          <Button className="w-full" variant="ghost" asChild><TrackLink href="/" event="chat_start" className="block no-underline">Chat concierge</TrackLink></Button>
          <DisclaimerBar compact />
        </aside>
      </div>
    </div>
  );
}

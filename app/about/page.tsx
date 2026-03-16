import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { Scale, ShieldCheck, Swords } from 'lucide-react';

export const metadata = buildMetadata('About', 'About Dominant Law. Placeholder profile pending verified firm details.', '/about');

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-10 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <section className="mt-5 space-y-5 rounded-[1.5rem] border border-primary/35 bg-card/55 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Firm Profile</p>
        <h1 className="font-serif text-4xl md:text-6xl">About Dominant Law</h1>
        <p className="max-w-3xl text-mutedForeground md:text-lg">Trial-ready Georgia plaintiff advocacy with disciplined preparation, direct communication, and evidence-first strategy.</p>
        <DisclaimerBar />
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="lux-panel rounded-2xl p-6">
          <Scale className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-serif text-2xl">Strategic discipline</h2>
          <p className="mt-2 text-sm text-mutedForeground">Every matter follows structured preparation from intake through negotiation and litigation posture.</p>
        </article>
        <article className="lux-panel rounded-2xl p-6">
          <Swords className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-serif text-2xl">Trial leverage</h2>
          <p className="mt-2 text-sm text-mutedForeground">Case-building and communication strategy are designed to preserve pressure and options.</p>
        </article>
        <article className="lux-panel rounded-2xl p-6">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-serif text-2xl">Client clarity</h2>
          <p className="mt-2 text-sm text-mutedForeground">You get direct expectations, timeline control, and practical next actions without noise.</p>
        </article>
      </section>

      <section className="mt-10 rounded-[1.25rem] border border-border/80 bg-muted/20 p-7">
        <h2 className="font-serif text-3xl">Practice focus</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-mutedForeground md:text-lg">
          <li>Auto and trucking collisions</li>
          <li>Slip-and-fall premises liability</li>
          <li>Wrongful death litigation</li>
        </ul>
      </section>
    </div>
  );
}

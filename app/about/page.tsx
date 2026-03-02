import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('About', 'About Dominant Law. Placeholder profile pending verified firm details.', '/about');

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <h1 className="font-serif text-4xl">About Dominant Law</h1>
      <p className="mt-4 text-lg text-mutedForeground">Trial-ready Georgia plaintiff advocacy with disciplined preparation and client-first communication.</p>
      <div className="mt-4"><DisclaimerBar /></div>
      <section className="mt-8 rounded-xl border border-border bg-card/40 p-6">
        <h2 className="font-serif text-2xl">Attorney Bio Template</h2>
        <p className="mt-3 text-mutedForeground">
          Example / Placeholder-replace with real attorney profile, bar admissions, education, litigation experience, and verified leadership roles.
        </p>
      </section>
      <section className="mt-6 rounded-xl border border-border bg-card/40 p-6">
        <h2 className="font-serif text-2xl">Practice Focus</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-mutedForeground">
          <li>Auto and trucking collisions</li>
          <li>Slip-and-fall premises liability</li>
          <li>Wrongful death litigation</li>
        </ul>
      </section>
    </div>
  );
}

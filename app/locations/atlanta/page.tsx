import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('Atlanta Personal Injury Lawyer Template', 'Template page for Atlanta service area content.', '/locations/atlanta');

export default function AtlantaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Atlanta' }]} />
      <h1 className="font-serif text-4xl">Atlanta Personal Injury - Template</h1>
      <p className="mt-4 text-mutedForeground">TODO: Replace with verified Atlanta-specific office and community content. Example / Placeholder-replace with real data.</p>
      <div className="mt-4"><DisclaimerBar /></div>
    </div>
  );
}

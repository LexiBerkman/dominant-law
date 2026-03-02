import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('Georgia Locations', 'Location pages for Georgia cities served by Dominant Law.', '/locations');

export default function LocationsHub() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} />
      <h1 className="font-serif text-4xl">Locations</h1>
      <p className="mt-4 text-mutedForeground">Template framework for Georgia city pages. Avoid doorway-page thin content and publish only with substantive local detail.</p>
      <div className="mt-4"><DisclaimerBar /></div>
      <ul className="mt-8 space-y-2">
        <li><Link className="text-primary no-underline hover:underline" href="/locations/atlanta">Atlanta template</Link></li>
        <li><Link className="text-primary no-underline hover:underline" href="/locations/savannah">Dynamic city template (example)</Link></li>
      </ul>
    </div>
  );
}

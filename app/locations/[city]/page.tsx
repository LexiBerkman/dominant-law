import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export async function generateMetadata({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city);
  return buildMetadata(`${city} Personal Injury Lawyer Template`, `Template content for ${city}, Georgia.`, `/locations/${city}`);
}

export default function CityTemplatePage({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city);

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: city }]} />
      <h1 className="font-serif text-4xl">{city} Personal Injury - Template</h1>
      <p className="mt-4 text-mutedForeground">TODO: Add substantive local content for {city}, Georgia before publishing. Avoid thin doorway pages.</p>
      <div className="mt-4"><DisclaimerBar /></div>
    </div>
  );
}

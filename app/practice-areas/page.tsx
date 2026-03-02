import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { practiceAreas } from '@/lib/content/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata(
  'Practice Areas',
  'Georgia personal injury practice areas including auto accidents, truck crashes, slip and fall, and wrongful death.',
  '/practice-areas'
);

export default function PracticeAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Practice Areas' }]} />
      <h1 className="font-serif text-4xl">Georgia Practice Areas</h1>
      <div className="mt-4"><DisclaimerBar /></div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {practiceAreas.map((area) => (
          <Card key={area.slug}>
            <CardHeader><CardTitle>{area.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-mutedForeground">{area.summary}</p>
              <Link href={`/practice-areas/${area.slug}`} className="mt-4 inline-block text-primary no-underline hover:underline">Open page</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

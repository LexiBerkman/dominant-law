import Link from 'next/link';
import { guides } from '@/lib/content/guides';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('Georgia Injury Guides', 'Structured Georgia personal injury guides and practical checklists.', '/resources/guides');

export default function GuidesHub() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Guides' }]} />
      <h1 className="font-serif text-4xl">Guides Hub</h1>
      <div className="mt-4"><DisclaimerBar /></div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Card key={guide.slug}>
            <CardHeader>
              <CardTitle className="text-2xl">
                <Link href={`/resources/guides/${guide.slug}`} className="no-underline hover:text-primary">
                  {guide.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-mutedForeground">{guide.description}</p>
              <Link href={`/resources/guides/${guide.slug}`} className="mt-3 inline-block text-primary no-underline hover:underline">
                Read guide: {guide.title}
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { guides } from '@/lib/content/guides';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata('Georgia Injury Guides', 'Structured Georgia personal injury guides and practical checklists.', '/resources/guides');

export default function GuidesHub() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Guides' }]} />
      <section className="mt-5 space-y-5 rounded-[1.5rem] border border-primary/35 bg-card/55 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Guides Library</p>
        <h1 className="font-serif text-4xl md:text-6xl">Guides Hub</h1>
        <p className="max-w-2xl text-mutedForeground md:text-lg">Practical, Georgia-specific guidance organized for fast answers and cleaner decision-making.</p>
        <DisclaimerBar />
      </section>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <Card key={guide.slug}>
            <CardHeader>
              <CardTitle className="text-3xl">
                <Link href={`/resources/guides/${guide.slug}`} className="no-underline hover:text-primary">
                  {guide.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-mutedForeground">{guide.description}</p>
              <Link href={`/resources/guides/${guide.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.11em] text-primary no-underline hover:underline">
                Read guide <ArrowUpRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

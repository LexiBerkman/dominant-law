import Link from 'next/link';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { practiceAreas } from '@/lib/content/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { ChevronRight } from 'lucide-react';

export const metadata = buildMetadata(
  'Practice Areas',
  'Georgia personal injury practice areas including auto accidents, truck crashes, slip and fall, and wrongful death.',
  '/practice-areas'
);

export default function PracticeAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Practice Areas' }]} />
      <section className="mt-5 space-y-5 rounded-[1.5rem] border border-primary/35 bg-card/55 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Practice Portfolio</p>
        <h1 className="font-serif text-4xl md:text-6xl">Georgia Practice Areas</h1>
        <p className="max-w-2xl text-mutedForeground md:text-lg">Focused representation built on strategic preparation, clean case architecture, and disciplined trial posture.</p>
        <DisclaimerBar />
      </section>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {practiceAreas.map((area) => (
          <Card key={area.slug}>
            <CardHeader className="flex flex-row items-start justify-between gap-5">
              <CardTitle className="text-3xl">
                <Link href={`/practice-areas/${area.slug}`} className="no-underline hover:text-primary">
                  {area.title}
                </Link>
              </CardTitle>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/45 bg-background/75 shadow-premium transition hover:border-primary/70"
                aria-label={`Open ${area.title}`}
              >
                <Image
                  src="/images/a_black_and_white_vector_logo_for_dominant_law.png"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain p-2"
                />
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-base text-mutedForeground">{area.summary}</p>
              <Link href={`/practice-areas/${area.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-primary no-underline hover:underline">
                Explore matter strategy <ChevronRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

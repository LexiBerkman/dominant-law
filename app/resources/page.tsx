import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { guides } from '@/lib/content/guides';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';
import { ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata('Resources', 'Georgia personal injury resources, guides, and FAQs.', '/resources');

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
      <section className="mt-5 space-y-5 rounded-[1.5rem] border border-primary/35 bg-card/55 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Knowledge Center</p>
        <h1 className="font-serif text-4xl md:text-6xl">Resources</h1>
        <p className="max-w-2xl text-mutedForeground md:text-lg">Clear, structured legal education designed for fast scanning without noise or speculation.</p>
        <DisclaimerBar />
      </section>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-3xl">Guides</CardTitle></CardHeader>
          <CardContent>
            <p className="text-base text-mutedForeground">Long-form explainers with practical checklists and next-action sequences.</p>
            <Link href="/resources/guides" className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-primary no-underline hover:underline">
              Open guides hub <ArrowUpRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-3xl">FAQ</CardTitle></CardHeader>
          <CardContent>
            <p className="text-base text-mutedForeground">Short answers to common intake and process questions. General information only.</p>
            <Link href="/resources/faq" className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-primary no-underline hover:underline">
              Open FAQ hub <ArrowUpRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>

      <section className="mt-14 rounded-[1.25rem] border border-border/80 bg-muted/20 p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Featured Reads</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Featured guides</h2>
        <ul className="mt-6 space-y-3">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/resources/guides/${guide.slug}`} className="inline-flex items-center gap-2 text-primary no-underline hover:underline">
                {guide.title} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

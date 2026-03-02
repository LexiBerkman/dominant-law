import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { guides } from '@/lib/content/guides';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('Resources', 'Georgia personal injury resources, guides, and FAQs.', '/resources');

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]} />
      <h1 className="font-serif text-4xl">Resources</h1>
      <div className="mt-4"><DisclaimerBar /></div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Guides</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-mutedForeground">Answer-engine guides built for fast scanning and practical next actions.</p>
            <Link href="/resources/guides" className="mt-3 inline-block text-primary no-underline hover:underline">Open guides hub</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>FAQ</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-mutedForeground">General information only. Not legal advice.</p>
            <Link href="/resources/faq" className="mt-3 inline-block text-primary no-underline hover:underline">Open FAQ hub</Link>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10">
        <h2 className="font-serif text-2xl">Featured guides</h2>
        <ul className="mt-3 space-y-2">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/resources/guides/${guide.slug}`} className="text-primary no-underline hover:underline">{guide.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

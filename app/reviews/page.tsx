import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('Reviews', 'Reviews template page. Connect verified real reviews only.', '/reviews');

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />
      <h1 className="font-serif text-4xl">Client Reviews</h1>
      <p className="mt-4 text-mutedForeground">Template only. Example / Placeholder-replace with real, verified reviews.</p>
      <div className="mt-4"><DisclaimerBar /></div>
    </div>
  );
}

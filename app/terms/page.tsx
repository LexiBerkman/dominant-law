import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata('Terms', 'Terms of use template for Dominant Law.', '/terms');

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4 pb-16 pt-8 md:px-8">
      <h1 className="font-serif text-4xl">Terms</h1>
      <p>TODO: Replace with finalized terms approved by counsel.</p>
      <p>Use of this site is informational only and does not create an attorney-client relationship.</p>
    </div>
  );
}

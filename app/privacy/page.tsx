import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata('Privacy', 'Privacy policy template for Dominant Law.', '/privacy');

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4 pb-16 pt-8 md:px-8">
      <h1 className="font-serif text-4xl">Privacy</h1>
      <p>TODO: Replace with finalized privacy policy reviewed by counsel.</p>
      <p>We do not intentionally log sensitive free-text details or medical information in analytics events.</p>
    </div>
  );
}

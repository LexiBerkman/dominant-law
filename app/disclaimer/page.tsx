import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata('Disclaimer', 'Legal disclaimer for Dominant Law website and chat.', '/disclaimer');

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 px-4 pb-16 pt-8 md:px-8">
      <h1 className="font-serif text-4xl">Disclaimer</h1>
      <p>Not legal advice.</p>
      <p>No attorney-client relationship is created by this website, chat, or forms.</p>
      <p>Do not send confidential information.</p>
    </div>
  );
}

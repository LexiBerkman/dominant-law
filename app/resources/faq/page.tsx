import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('FAQ', 'General Georgia injury FAQ. Not legal advice.', '/resources/faq');

export default function FAQHub() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'FAQ' }]} />
      <h1 className="font-serif text-4xl">FAQ Hub</h1>
      <div className="mt-4"><DisclaimerBar /></div>
      <Accordion type="single" collapsible className="mt-8">
        <AccordionItem value="1"><AccordionTrigger>Is this legal advice?</AccordionTrigger><AccordionContent>No. This website provides general information only.</AccordionContent></AccordionItem>
        <AccordionItem value="2"><AccordionTrigger>Do I have an attorney-client relationship?</AccordionTrigger><AccordionContent>No attorney-client relationship is created by browsing, chatting, or submitting forms.</AccordionContent></AccordionItem>
        <AccordionItem value="3"><AccordionTrigger>Should I send confidential information?</AccordionTrigger><AccordionContent>No. Use high-level facts and call for sensitive discussions.</AccordionContent></AccordionItem>
      </Accordion>
    </div>
  );
}

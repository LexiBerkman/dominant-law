import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DisclaimerBar } from '@/components/layout/disclaimer';

export const metadata = buildMetadata('FAQ', 'General Georgia injury FAQ. Not legal advice.', '/resources/faq');

export default function FAQHub() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-10 md:px-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'FAQ' }]} />
      <section className="mt-5 space-y-5 rounded-[1.5rem] border border-primary/35 bg-card/55 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-primary">Intake FAQ</p>
        <h1 className="font-serif text-4xl md:text-6xl">FAQ Hub</h1>
        <p className="max-w-2xl text-mutedForeground md:text-lg">Clear baseline answers before you call or submit intake. General information only.</p>
        <DisclaimerBar />
      </section>
      <section className="mt-10 rounded-[1.25rem] border border-border/80 bg-muted/20 p-6 md:p-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>Is this legal advice?</AccordionTrigger>
            <AccordionContent>No. This website provides general information only.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Do I have an attorney-client relationship?</AccordionTrigger>
            <AccordionContent>No attorney-client relationship is created by browsing, chatting, or submitting forms.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Should I send confidential information?</AccordionTrigger>
            <AccordionContent>No. Use high-level facts and call for sensitive discussions.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}

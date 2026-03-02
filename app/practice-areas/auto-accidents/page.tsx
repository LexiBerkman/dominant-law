import { PillarPageTemplate } from '@/components/home/pillar-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata(
  'Georgia Auto Accident Lawyer Information',
  'General information about Georgia auto accident injury claims, process, evidence, and next steps.',
  '/practice-areas/auto-accidents'
);

export default function Page() {
  return (
    <PillarPageTemplate
      title="Georgia Auto Accidents"
      path="/practice-areas/auto-accidents"
      summary={[
        'Focused on severe injury and liability disputes after Georgia vehicle collisions.',
        'Trial-ready preparation from intake through litigation posture.',
        'Clear communication on options, risks, and practical next steps.'
      ]}
      checklist={[
        'Get medical evaluation and keep treatment documentation.',
        'Preserve crash scene photos, vehicle damage images, and witness contacts.',
        'Avoid discussing fault publicly or posting incident details online.',
        'Collect insurer letters, claim numbers, and adjuster communications.'
      ]}
      timeline={[
        'Initial investigation and document preservation.',
        'Records collection and liability analysis.',
        'Demand strategy and negotiation posture.',
        'Litigation and trial preparation when needed.'
      ]}
      evidence={[
        'Police report and supplement requests.',
        'Vehicle photos, repair records, and telematics when available.',
        'Medical records and billing chronology.',
        'Witness statements and scene documentation.'
      ]}
      insurance="Insurers often request recorded statements early. Keep responses factual and concise, and verify your strategy before making admissions or estimates about injuries."
      damages="Potential categories can include medical expenses, lost income, and non-economic impacts. Case value depends on documented facts and legal proof; outcomes are never guaranteed."
      notes="Georgia timelines can be short and fact-dependent. Verify current law and deadlines with counsel before relying on any general summary."
      faqs={[
        { q: 'Should I talk to the adjuster immediately?', a: 'General information: provide basic facts, then consider legal guidance before detailed recorded statements.' },
        { q: 'Do I need treatment records?', a: 'Yes. Organized medical records help establish both timeline and injury impact.' },
        { q: 'Can this settle without trial?', a: 'Some matters resolve pre-suit, but preparation for trial often improves negotiation leverage.' }
      ]}
      links={[
        { href: '/contact', label: 'Start free case evaluation' },
        { href: '/resources/guides/georgia-car-wreck', label: 'Guide: after a Georgia car wreck' },
        { href: '/practice-areas/truck-accidents', label: 'Truck accident page' },
        { href: '/practice-areas/slip-and-fall', label: 'Slip and fall page' },
        { href: '/practice-areas/wrongful-death', label: 'Wrongful death page' },
        { href: '/resources/guides/insurance-adjusters', label: 'Guide: insurance adjusters' }
      ]}
    />
  );
}

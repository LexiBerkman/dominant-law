import { PillarPageTemplate } from '@/components/home/pillar-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata(
  'Georgia Truck Accident Lawyer Information',
  'General guidance for Georgia truck crash claims, evidence preservation, and strategic case development.',
  '/practice-areas/truck-accidents'
);

export default function Page() {
  return (
    <PillarPageTemplate
      title="Georgia Truck Accidents"
      path="/practice-areas/truck-accidents"
      heroImageSrc="/images/truck-accident-atlanta-285.png"
      heroImageAlt="Serious truck accident scene on Interstate 285 in Atlanta"
      summary={[
        'Commercial crash matters involve layered liability and records.',
        'Early preservation requests can materially affect recoverable evidence.',
        'Trial-ready strategy aligns technical facts with damages proof.'
      ]}
      checklist={[
        'Seek immediate medical care and document symptoms over time.',
        'Preserve photos, witness contacts, and all insurer communications.',
        'Track carrier name, trailer details, and any available identifiers.',
        'Avoid speculative statements about speed, fault, or injury severity.'
      ]}
      timeline={[
        'Emergency intake and commercial record preservation strategy.',
        'Carrier, broker, and driver documentation review.',
        'Liability and damages narrative build-out.',
        'Negotiation or litigation based on defense posture.'
      ]}
      evidence={[
        'Driver logs, dispatch and telematics records where available.',
        'Vehicle maintenance and inspection documentation.',
        'Crash reconstruction materials and photos.',
        'Medical timeline, diagnosis, and treatment records.'
      ]}
      insurance="Commercial insurers and defense teams may engage quickly. Maintain disciplined communications and preserve all written exchanges."
      damages="Damages assessment can include economic and non-economic categories and requires detailed factual support. No promise of any specific result is made."
      notes="Georgia timelines and notice requirements can be short. Verify current law and deadlines directly with counsel."
      faqs={[
        { q: 'Are truck cases different from car cases?', a: 'Yes, they often include additional entities, records, and technical liability issues.' },
        { q: 'Can evidence disappear quickly?', a: 'Yes. Some records are retained for limited periods, so early action is important.' },
        { q: 'Should I speak with the carrier insurer alone?', a: 'General information: keep communications factual and consider counsel before detailed interviews.' }
      ]}
      links={[
        { href: '/contact', label: 'Start free case evaluation' },
        { href: '/resources/guides/truck-crash', label: 'Guide: after a truck crash' },
        { href: '/practice-areas/auto-accidents', label: 'Auto accident page' },
        { href: '/practice-areas/slip-and-fall', label: 'Slip and fall page' },
        { href: '/practice-areas/wrongful-death', label: 'Wrongful death page' },
        { href: '/resources/guides/medical-documentation', label: 'Guide: medical documentation tips' }
      ]}
    />
  );
}

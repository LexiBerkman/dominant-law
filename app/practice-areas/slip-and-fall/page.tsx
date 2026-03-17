import { PillarPageTemplate } from '@/components/home/pillar-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata(
  'Georgia Slip and Fall Lawyer Information',
  'General information for Georgia slip and fall injury claims, evidence priorities, and process overview.',
  '/practice-areas/slip-and-fall'
);

export default function Page() {
  return (
    <PillarPageTemplate
      title="Georgia Slip and Fall"
      path="/practice-areas/slip-and-fall"
      heroImageSrc="/images/slip-and-fall-grocery-scene.png"
      heroImageAlt="Person slipping and falling on a wet grocery store floor"
      heroImageClassName="object-cover object-center"
      summary={[
        'Premises cases turn on hazard evidence, notice, and documentation.',
        'Scene conditions can change quickly, making early records important.',
        'Clear injury documentation supports defensible damages analysis.'
      ]}
      checklist={[
        'Seek medical evaluation and keep records organized.',
        'Photograph condition, lighting, footwear, and surrounding area.',
        'Document witness names and incident report details.',
        'Preserve clothing and shoes in current condition when possible.'
      ]}
      timeline={[
        'Incident reconstruction and premises condition analysis.',
        'Notice and maintenance record review.',
        'Damages development with medical timeline.',
        'Negotiation or litigation based on liability evidence.'
      ]}
      evidence={[
        'Scene photos and videos from multiple angles.',
        'Incident reports and witness statements.',
        'Store policies and maintenance logs when obtainable.',
        'Medical records tied to the incident timeline.'
      ]}
      insurance="Property insurers frequently evaluate liability and notice defenses early. Detailed factual chronology helps avoid avoidable disputes."
      damages="Potential damages depend on documented injury impact and legal proof. No specific outcome can be promised."
      notes="Georgia legal timelines and requirements can be short. Verify current rules and deadlines with licensed counsel."
      faqs={[
        { q: 'Should I file an incident report?', a: 'General information: documenting the incident promptly can preserve key factual details.' },
        { q: 'Do photos matter if I have witnesses?', a: 'Yes. Visual records and witness statements together often improve clarity.' },
        { q: 'Can I still have a claim if I did not fall in a store?', a: 'Premises incidents may occur in many settings; liability depends on facts and legal standards.' }
      ]}
      links={[
        { href: '/contact', label: 'Start free case evaluation' },
        { href: '/resources/guides/slip-and-fall-evidence', label: 'Guide: slip and fall evidence' },
        { href: '/practice-areas/auto-accidents', label: 'Auto accident page' },
        { href: '/practice-areas/truck-accidents', label: 'Truck accident page' },
        { href: '/practice-areas/wrongful-death', label: 'Wrongful death page' },
        { href: '/resources/guides/insurance-adjusters', label: 'Guide: insurance adjusters' }
      ]}
    />
  );
}

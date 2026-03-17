import { PillarPageTemplate } from '@/components/home/pillar-page';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata(
  'Georgia Wrongful Death Lawyer Information',
  'General information for Georgia wrongful death matters, process expectations, and family-first guidance.',
  '/practice-areas/wrongful-death'
);

export default function Page() {
  return (
    <PillarPageTemplate
      title="Georgia Wrongful Death"
      path="/practice-areas/wrongful-death"
      heroImageSrc="/images/client-consultation-crutches.png"
      heroImageAlt="Attorney meeting with an injured client using crutches during a legal consultation"
      summary={[
        'Sensitive, disciplined guidance for families after preventable loss.',
        'Early document organization can reduce avoidable stress later.',
        'Trial-ready preparation focused on accountability and clarity.'
      ]}
      checklist={[
        'Secure death-related records and official reports.',
        'Keep all communications with insurers and involved parties.',
        'Avoid signing releases before legal review.',
        'Use one organized timeline for family and case records.'
      ]}
      timeline={[
        'Initial consultation and document triage.',
        'Liability and damages investigation.',
        'Claim strategy and negotiation.',
        'Litigation pathway when resolution is insufficient.'
      ]}
      evidence={[
        'Official reports and scene documentation.',
        'Medical and death records relevant to causation.',
        'Witness information and communication logs.',
        'Financial records used in damages analysis.'
      ]}
      insurance="Insurer communications in fatal cases are sensitive and high-stakes. Clear written records and counsel-led strategy can protect family interests."
      damages="Wrongful death and related claims can involve multiple categories depending on facts and law. No outcome or amount is guaranteed."
      notes="Georgia deadlines and standing requirements can be complex and time-sensitive. Verify current law directly with counsel."
      faqs={[
        { q: 'Who can bring a wrongful death claim?', a: 'Eligibility depends on Georgia law and family circumstances; legal verification is essential.' },
        { q: 'How soon should we take action?', a: 'Timelines can be short, so early legal consultation is usually prudent.' },
        { q: 'Will this require trial?', a: 'Some matters resolve before trial; strong trial preparation remains important regardless.' }
      ]}
      links={[
        { href: '/contact', label: 'Start free case evaluation' },
        { href: '/resources/guides/wrongful-death-basics', label: 'Guide: wrongful death basics' },
        { href: '/practice-areas/auto-accidents', label: 'Auto accident page' },
        { href: '/practice-areas/truck-accidents', label: 'Truck accident page' },
        { href: '/practice-areas/slip-and-fall', label: 'Slip and fall page' },
        { href: '/resources/guides/medical-documentation', label: 'Guide: medical documentation tips' }
      ]}
    />
  );
}

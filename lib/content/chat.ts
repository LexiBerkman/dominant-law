export const answerCards: Record<string, { title: string; body: string; links: { href: string; label: string }[] }> = {
  'auto-accidents': {
    title: 'After a Georgia car wreck: first priorities',
    body: 'Get medical care, preserve photos, keep all insurance communications, and avoid discussing fault online. We can explain next steps in plain language.',
    links: [
      { href: '/resources/guides/georgia-car-wreck', label: 'Read the car wreck guide' },
      { href: '/practice-areas/auto-accidents', label: 'Auto accident representation' }
    ]
  },
  'truck-accidents': {
    title: 'Truck crash claims involve layered evidence',
    body: 'Commercial claims often involve logbooks, carrier records, and insurer teams. Early preservation and focused intake can materially affect outcomes.',
    links: [
      { href: '/resources/guides/truck-crash', label: 'Read the truck crash guide' },
      { href: '/practice-areas/truck-accidents', label: 'Truck accident representation' }
    ]
  },
  'slip-and-fall': {
    title: 'Slip-and-fall cases are evidence-driven',
    body: 'Document the scene, identify witnesses, and preserve footwear and medical records. Early factual clarity matters before conditions change.',
    links: [
      { href: '/resources/guides/slip-and-fall-evidence', label: 'Slip and fall evidence guide' },
      { href: '/practice-areas/slip-and-fall', label: 'Slip and fall representation' }
    ]
  },
  'wrongful-death': {
    title: 'Wrongful death matters need careful handling',
    body: 'Families often need immediate guidance on records, communications, and timelines. We provide general information and rapid access to legal counsel.',
    links: [
      { href: '/resources/guides/wrongful-death-basics', label: 'Wrongful death basics' },
      { href: '/practice-areas/wrongful-death', label: 'Wrongful death representation' }
    ]
  },
  insurance: {
    title: 'Insurance adjuster calls: protect your position',
    body: 'Keep communications factual, avoid speculation, and preserve all written exchanges. We can review your situation before you provide recorded statements.',
    links: [
      { href: '/resources/guides/insurance-adjusters', label: 'Insurance adjuster guide' },
      { href: '/contact', label: 'Free case evaluation' }
    ]
  }
};

export const urgencyKeywords = ['deadline', 'trial', 'police', 'hospital', 'insurance adjuster'];

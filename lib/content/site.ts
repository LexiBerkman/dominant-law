export const siteConfig = {
  name: 'Dominant Law',
  domain: 'https://dominant.law',
  phoneDisplay: 'TODO: (404) 000-0000',
  phoneHref: 'tel:+14040000000',
  textDisplay: 'TODO: Text us',
  textHref: 'sms:+14040000000',
  email: 'TODO: intake@dominant.law',
  georgiaPrimary: 'Georgia',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' }
  ]
};

export const complianceLines = {
  short: 'Not legal advice. No attorney-client relationship. Do not send confidential information.',
  legalAdvice: 'Not legal advice.',
  relationship: 'No attorney-client relationship is created by using this website or chat.',
  confidential: 'Do not send confidential information through this site, forms, or chat.'
};

export const practiceAreas = [
  {
    slug: 'auto-accidents',
    title: 'Georgia Auto Accidents',
    summary: 'Strategic representation for injured drivers and passengers after serious collisions.'
  },
  {
    slug: 'truck-accidents',
    title: 'Georgia Truck Accidents',
    summary: 'Litigation-focused counsel for high-stakes commercial trucking injury cases.'
  },
  {
    slug: 'slip-and-fall',
    title: 'Georgia Slip and Fall',
    summary: 'Evidence-first approach for unsafe property and premises liability claims.'
  },
  {
    slug: 'wrongful-death',
    title: 'Georgia Wrongful Death',
    summary: 'Compassionate, trial-ready advocacy for families after preventable loss.'
  }
] as const;

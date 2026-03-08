import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dominant Law - Atlanta’s Premier Legal Advocates',
  description: 'Formidable courtroom expertise and strategic legal counsel for Georgia plaintiffs and businesses.',
  openGraph: {
    title: 'Dominant Law',
    description: 'Georgia’s trusted legal representation for high-value cases.',
    url: 'https://dominant.law',
  },
};

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>Dominant Law</h1>
        <p>Atlanta’s Premier Legal Advocates</p>
      </header>
      <section>
        <p>
          Trusted legal counsel serving plaintiffs and businesses across Georgia with
          formidable courtroom expertise and strategic guidance.
        </p>
        <nav>
          <ul>
            <li><Link href="/practice-areas">Practice Areas</Link></li>
            <li><Link href="/attorneys">Attorneys</Link></li>
            <li><Link href="/results">Case Results</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/georgia/atlanta">Georgia Locations</Link></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

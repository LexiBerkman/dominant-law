import React from 'react';

export const metadata = {
  title: 'Resources & Legal Guides - Dominant Law',
  description: 'Download legal resources and guides tailored for Georgia clients.',
  openGraph: {
    title: 'Resources & Legal Guides',
    description: 'Helpful legal documents and templates for Georgia law.',
    url: 'https://dominant.law/resources',
  },
};

export default function Resources() {
  return (
    <main className="container">
      <h1>Legal Guides & Resources</h1>
      <ul>
        <li><a href="/downloads/personal-injury-guide.pdf" download>Personal Injury Guide (PDF)</a></li>
        <li><a href="/downloads/legal-checklist.pdf" download>Legal Checklist (PDF)</a></li>
        <li><a href="/downloads/business-litigation-guide.pdf" download>Business Litigation Guide (PDF)</a></li>
      </ul>
    </main>
  );
}

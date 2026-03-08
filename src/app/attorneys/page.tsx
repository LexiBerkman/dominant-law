import React from 'react';

export const metadata = {
  title: 'Attorneys - Dominant Law',
  description: 'Meet the skilled legal team at Dominant Law.',
  openGraph: {
    title: 'Attorneys',
    description: 'Trusted Georgia attorneys with proven results.',
    url: 'https://dominant.law/attorneys',
  },
};

export default function Attorneys() {
  return (
    <main className="container">
      <h1>Our Attorneys</h1>
      <div>
        <section>
          <h2>Jane Smith, Partner</h2>
          <p>Expert in personal injury and class actions with 15+ years of courtroom experience.</p>
        </section>
        <section>
          <h2>John Doe, Senior Associate</h2>
          <p>Specializes in medical malpractice and business litigation.</p>
        </section>
      </div>
    </main>
  );
}

import React from 'react';

export const metadata = {
  title: 'FAQ - Dominant Law',
  description: 'Frequently Asked Questions about our legal services and processes.',
  openGraph: {
    title: 'FAQ',
    description: 'Answers to common questions about Dominant Law.',
    url: 'https://dominant.law/faq',
  },
};

export default function FAQ() {
  return (
    <main className="container">
      <h1>Frequently Asked Questions</h1>
      <dl>
        <dt>What areas of law do you specialize in?</dt>
        <dd>We specialize in personal injury, medical malpractice, business litigation, employment law, and class actions.</dd>

        <dt>How long does a typical case take?</dt>
        <dd>The timeline varies per case complexity; we provide transparent updates throughout.</dd>

        <dt>How do I request a consultation?</dt>
        <dd>You can use our contact form or call us directly; we respond promptly.</dd>
      </dl>
    </main>
  );
}

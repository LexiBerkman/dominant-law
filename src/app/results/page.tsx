import React from 'react';

export const metadata = {
  title: 'Case Results - Dominant Law',
  description: 'Successful Georgia legal outcomes showcasing our expertise.',
  openGraph: {
    title: 'Case Results',
    description: 'Proven track record of winning high-stakes cases.',
    url: 'https://dominant.law/results',
  },
};

export default function Results() {
  return (
    <main className="container">
      <h1>Case Results</h1>
      <ul>
        <li>$5M verdict in personal injury case</li>
        <li>$2M settlement for medical malpractice</li>
        <li>Class action certification success for employment law</li>
      </ul>
    </main>
  );
}

import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Practice Areas - Dominant Law',
  description: 'Explore our comprehensive legal services tailored for Georgia clients.',
  openGraph: {
    title: 'Practice Areas',
    description: 'Expert legal services for a wide range of Georgia legal matters.',
    url: 'https://dominant.law/practice-areas',
  },
};

export default function PracticeAreas() {
  return (
    <main className="container">
      <h1>Practice Areas</h1>
      <ul>
        <li>Personal Injury</li>
        <li>Medical Malpractice</li>
        <li>Business Litigation</li>
        <li>Class Actions</li>
        <li>Employment Law</li>
        <li>Product Liability</li>
      </ul>
      <Link href="/contact">Request Consultation</Link>
    </main>
  );
}

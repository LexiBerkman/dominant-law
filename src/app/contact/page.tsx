import React from 'react';

export const metadata = {
  title: 'Contact Dominant Law',
  description: 'Get in touch with Dominant Law for a consultation.',
  openGraph: {
    title: 'Contact',
    description: 'Reach out for trusted legal assistance in Georgia.',
    url: 'https://dominant.law/contact',
  },
};

export default function Contact() {
  return (
    <main className="container">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit">Request Consultation</button>
      </form>
    </main>
  );
}

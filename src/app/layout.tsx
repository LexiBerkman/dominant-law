import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dominant Law',
  description: 'Elite Georgia law firm providing strategic legal solutions',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="header-container">
            <Link href="/">Dominant Law</Link>
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
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2026 Dominant Law. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

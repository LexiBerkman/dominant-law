import "./globals.css";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Dominant Law",
  description: "Elite Georgia trial counsel for catastrophic injury, wrongful death, and business disputes.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

const navItems = [
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="topbar">
              <span>Georgia trial counsel for plaintiffs, founders, and families</span>
              <div className="topbar-links">
                <span>Confidential consultations statewide</span>
                <Link href="/contact">Request a case review</Link>
              </div>
            </div>
            <div className="nav-wrap">
              <Link className="wordmark" href="/">
                <span className="wordmark-mark">DL</span>
                <span className="wordmark-copy">
                  <strong>Dominant Law</strong>
                  <span>High-stakes counsel, built for decisive pressure</span>
                </span>
              </Link>
              <nav aria-label="Primary">
                <ul className="nav-list">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link className="nav-cta" href="/contact">
                Start confidential review
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="footer-grid">
              <div>
                <p className="footer-kicker">Dominant Law</p>
                <p>
                  Strategic Georgia counsel for high-stakes litigation, serious injury, wrongful death, and bet-the-company disputes.
                </p>
              </div>
              <div>
                <p className="footer-kicker">Core Offices</p>
                <p>Atlanta, Augusta, and Savannah</p>
              </div>
              <div>
                <p className="footer-kicker">Start Here</p>
                <p>
                  <Link href="/contact">Schedule a consultation</Link>
                </p>
              </div>
            </div>
            <p className="footer-meta">© 2026 Dominant Law. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

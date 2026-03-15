import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Dominant Law - Georgia Trial Counsel for High-Stakes Cases",
  description:
    "Dominant Law represents plaintiffs, founders, and businesses across Georgia in catastrophic injury, wrongful death, and complex litigation matters.",
  openGraph: {
    title: "Dominant Law",
    description: "Georgia trial counsel for high-stakes plaintiff and business litigation.",
    url: "https://dominant.law",
  },
};

const results = [
  { value: "$42M", label: "Wrongful death resolution" },
  { value: "$18.5M", label: "Commercial fraud recovery" },
  { value: "24/7", label: "Rapid-response intake for urgent matters" },
];

const practiceAreas = [
  "Catastrophic personal injury",
  "Wrongful death litigation",
  "Business and partnership disputes",
  "Medical negligence claims",
];

const advantages = [
  "Direct senior-attorney access from intake through resolution",
  "Trial-first strategy that strengthens negotiation leverage",
  "Georgia market fluency across metro and regional venues",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Dominant Law | Georgia Litigation Counsel</p>
          <h1>When the case is too important for a volume firm, bring in a team built for pressure.</h1>
          <p className="hero-lead">
            We represent plaintiffs, families, and businesses in matters where the stakes are financial, reputational, and deeply personal.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a case review
            </Link>
            <Link className="button button-secondary" href="/results">
              Review outcomes
            </Link>
          </div>
        </div>
        <aside className="hero-panel">
          <p className="panel-kicker">Why clients move their case to us</p>
          <ul className="advantage-list">
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="stats-band" aria-label="Firm highlights">
        {results.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="split-section">
        <div>
          <p className="eyebrow">High-stakes representation</p>
          <h2>Built for complex disputes, catastrophic harm, and cases that demand precision.</h2>
          <p>
            Dominant Law is structured to move quickly, investigate deeply, and present a disciplined case narrative from day one.
          </p>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article className="practice-card" key={area}>
              <h3>{area}</h3>
              <p>Strategic counsel shaped around leverage, documentation, and courtroom readiness.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-banner">
        <div>
          <p className="eyebrow">Georgia footprint</p>
          <h2>From Atlanta to Savannah, we bring local venue awareness to statewide litigation.</h2>
        </div>
        <div className="feature-links">
          <Link href="/georgia/atlanta">Atlanta</Link>
          <Link href="/georgia/augusta">Augusta</Link>
          <Link href="/georgia/savannah">Savannah</Link>
        </div>
      </section>

      <section className="cta-block">
        <div>
          <p className="eyebrow">Start with clarity</p>
          <h2>Tell us what happened. We’ll tell you what matters next.</h2>
        </div>
        <Link className="button button-primary" href="/contact">
          Schedule consultation
        </Link>
      </section>
    </div>
  );
}

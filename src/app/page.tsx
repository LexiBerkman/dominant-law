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
  { value: "$42M", label: "Wrongful death matter resolved" },
  { value: "$18.5M", label: "Commercial fraud recovery" },
  { value: "72 hrs", label: "Fast-track case assessment window" },
];

const practiceAreas = [
  "Catastrophic personal injury",
  "Wrongful death litigation",
  "Business and partnership disputes",
  "Medical negligence claims",
];

const advantages = [
  "Direct partner-level strategy from intake through resolution",
  "Trial-first preparation that creates real negotiating leverage",
  "Georgia venue fluency across Atlanta, Augusta, Savannah, and beyond",
];

const processSteps = [
  {
    title: "Case triage",
    copy: "We isolate leverage points, deadlines, exposure, and evidentiary gaps before the other side sets the tone.",
  },
  {
    title: "Pressure architecture",
    copy: "Pleadings, experts, documents, and venue strategy are built as one coordinated pressure system.",
  },
  {
    title: "Trial posture",
    copy: "Every negotiation is supported by a record that looks credible in front of a judge or jury.",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy hero-copy-main">
          <p className="eyebrow">Dominant Law | Georgia Litigation Counsel</p>
          <h1>Not a billboard firm. Not a settlement mill. Trial counsel for cases that can change a life or a company.</h1>
          <p className="hero-lead">
            Dominant Law represents plaintiffs, families, founders, and businesses in catastrophic injury, wrongful death, and complex disputes where the pressure is real and the case cannot be handled generically.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request confidential review
            </Link>
            <Link className="button button-secondary" href="/results">
              Review representative outcomes
            </Link>
          </div>
          <div className="hero-badges">
            <span>Catastrophic injury</span>
            <span>Wrongful death</span>
            <span>Business disputes</span>
          </div>
        </div>
        <aside className="hero-stack">
          <div className="hero-panel hero-panel-primary">
            <p className="panel-kicker">Why clients move their case to us</p>
            <ul className="advantage-list">
              {advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="signal-card">
            <p className="panel-kicker">What matters first</p>
            <div className="signal-grid">
              <div>
                <strong>Venue</strong>
                <span>Where the story lands changes leverage.</span>
              </div>
              <div>
                <strong>Timeline</strong>
                <span>Fast action preserves documents and witness memory.</span>
              </div>
              <div>
                <strong>Posture</strong>
                <span>The other side should feel trial risk early.</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="ticker-band" aria-label="Focus areas">
        <div className="ticker-track">
          <span>Georgia trial counsel</span>
          <span>Wrongful death</span>
          <span>Catastrophic injury</span>
          <span>Business litigation</span>
          <span>Medical negligence</span>
          <span>High-stakes disputes</span>
        </div>
      </section>

      <section className="stats-band" aria-label="Firm highlights">
        {results.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="editorial-grid">
        <article className="editorial-callout">
          <p className="eyebrow">Operating principle</p>
          <h2>Pressure wins cases before verdicts do.</h2>
          <p>
            We build litigation strategy as a pressure campaign: tighter facts, cleaner narratives, stronger experts, and fewer wasted motions.
          </p>
        </article>
        <article className="editorial-quote">
          <p>
            “The difference between a firm that files paper and a firm that changes leverage is visible in the first thirty days.”
          </p>
          <span>Dominant Law litigation philosophy</span>
        </article>
      </section>

      <section className="split-section">
        <div className="section-intro">
          <p className="eyebrow">Representative matters</p>
          <h2>Built for disputes, catastrophic harm, and cases that demand disciplined narrative control.</h2>
          <p>
            We focus on matters where evidence, timing, and courtroom posture can materially change the outcome.
          </p>
        </div>
        <div className="practice-grid">
          {practiceAreas.map((area) => (
            <article className="practice-card" key={area}>
              <span className="practice-index">0{practiceAreas.indexOf(area) + 1}</span>
              <h3>{area}</h3>
              <p>Strategy, investigation, and litigation planning designed around leverage instead of volume.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-intro">
          <p className="eyebrow">How we work</p>
          <h2>Every serious matter moves through a clear pressure sequence.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.title}>
              <span className="process-step">{step.title}</span>
              <p>{step.copy}</p>
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
          <p>Confidential consultations for serious injury, wrongful death, and complex disputes across Georgia.</p>
        </div>
        <Link className="button button-primary" href="/contact">
          Schedule consultation
        </Link>
      </section>
    </div>
  );
}

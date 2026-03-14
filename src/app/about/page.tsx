import React from "react";

export const metadata = {
  title: "About Us - Dominant Law",
  description: "Learn about Dominant Law’s mission and values in Georgia.",
  openGraph: {
    title: "About Dominant Law",
    description: "Committed to excellence in legal representation.",
    url: "https://dominant.law/about",
  },
};

export default function About() {
  return (
    <main className="container">
      <h1>About Dominant Law</h1>
      <p>
        We are a Georgia-based law firm focused on delivering strategic and
        effective legal solutions for high-value plaintiffs and businesses. Our
        team combines deep local expertise with relentless advocacy in and out
        of the courtroom.
      </p>
    </main>
  );
}

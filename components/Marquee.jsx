"use client";

const ROWS = [
  ["Clean formulas", "Refillable", "Carbon-neutral", "Cruelty-free"],
  ["Designed to be kept", "Small batch", "Made in detail", "No filler"],
  ["Free your senses", "Considered", "Multi-sensory", "Less waste"],
];

function Row({ words, cls }) {
  const doubled = [...words, ...words];
  return (
    <div className={`marquee-row ${cls}`}>
      {doubled.map((w, i) => (
        <span key={i}>
          {w} <b>·</b>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <Row words={ROWS[0]} cls="r1" />
      <Row words={ROWS[1]} cls="r2" />
      <Row words={ROWS[2]} cls="r3" />
    </div>
  );
}

"use client";

const WORDS = [
  "Clean formulas",
  "Refillable",
  "Carbon-neutral shipping",
  "Cruelty-free",
  "Designed to be kept",
  "Made in small batches",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-row">
        {row.map((w, i) => (
          <span key={`a${i}`}>
            {w} <span style={{ color: "var(--red)" }}>·</span>
          </span>
        ))}
      </div>
      <div className="marquee-row reverse">
        {row.map((w, i) => (
          <span key={`b${i}`}>
            {w} <span style={{ color: "var(--red)" }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Each phrase is a list of segments; `accent` renders in red.
const PHRASES = [
  [{ t: "Free your " }, { t: "senses.", accent: true }],
  [{ t: "Made to be " }, { t: "kept.", accent: true }],
  [{ t: "Clean by " }, { t: "design.", accent: true }],
  [{ t: "Considered, " }, { t: "multi-sensory.", accent: true }],
];

function Phrase({ segments, active }) {
  // build a flat array of chars, preserving spaces, tagging accent
  const chars = [];
  segments.forEach((seg, si) => {
    [...seg.t].forEach((c, ci) => {
      chars.push({ c, accent: seg.accent, key: `${si}-${ci}` });
    });
  });

  return (
    <span className={`rotator-phrase${active ? " active" : ""}`} aria-hidden={!active}>
      {chars.map((ch, i) => (
        <span
          key={ch.key}
          className={`ch${ch.c === " " ? " space" : ""}${
            ch.accent ? " accent" : ""
          }`}
          style={{ transitionDelay: `${active ? i * 34 : 0}ms` }}
        >
          {ch.c === " " ? " " : ch.c}
        </span>
      ))}
    </span>
  );
}

export default function Statement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
    }, 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="statement block pad">
      <Link href="/about" className="statement-name">
        Libersens<span className="reg">®</span>
      </Link>
      <div className="rotator">
        {PHRASES.map((segments, i) => (
          <Phrase key={i} segments={segments} active={i === index} />
        ))}
      </div>
    </section>
  );
}

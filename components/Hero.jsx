"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINES = ["Free your", "senses."];

export default function Hero() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero${inView ? " in" : ""}`}>
      <div className="hero-media">
        <img src="/img/hero.svg" alt="Libersens" />
      </div>

      <div className="hero-content block pad">
        <p className="hero-eyebrow">Libersens — Personal care, refined</p>
        <h1>
          {LINES.map((line, i) => (
            <span className="reveal-line" key={i}>
              <span style={{ transitionDelay: `${i * 110}ms` }}>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-sub">
          Considered tools and clean formulas for a calmer daily ritual.
          Designed in detail, made to be kept.
        </p>
        <div className="hero-actions">
          <Link href="/shop" className="btn btn-red">
            Shop the range
          </Link>
          <Link href="/about" className="btn">
            Our story
          </Link>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="bar" />
        Scroll
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { mockJournal } from "@/lib/mock-data";

export const metadata = {
  title: "Journal — Libersens",
  description: "Notes on rituals, ingredients and design from Libersens.",
};

// A few more entries so the journal index feels fuller than the home preview.
const extra = [
  { handle: "refills-not-replacements", date: "04.09.2026", headline: "Refills, not replacements", image: "/img/journal/journal-5.svg" },
  { handle: "the-quiet-glow", date: "03.21.2026", headline: "On the quiet glow", image: "/img/journal/journal-6.svg" },
  { handle: "small-batch-thinking", date: "03.02.2026", headline: "Why we make in small batches", image: "/img/journal/journal-7.svg" },
  { handle: "packaging-we-keep", date: "02.14.2026", headline: "Packaging you actually keep", image: "/img/journal/journal-8.svg" },
];

export default function Journal() {
  const all = [...mockJournal, ...extra];
  return (
    <>
      <section className="page-intro block pad">
        <p className="eyebrow">Journal</p>
        <h1>Notes & rituals</h1>
        <p>
          Slow reading on ingredients, design decisions and the daily ritual.
        </p>
      </section>

      <section className="block pad" style={{ paddingBottom: 100 }}>
        <Reveal>
          <div className="journal-grid">
            {all.map((j, i) => (
              <Link key={j.handle + i} href="/journal" className="journal-item">
                <div className="media">
                  <img src={j.image} alt={j.headline} />
                </div>
                <div className="date">{j.date}</div>
                <div className="headline">{j.headline}</div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

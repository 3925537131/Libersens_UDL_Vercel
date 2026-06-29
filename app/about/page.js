import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Libersens",
  description: "Why Libersens exists, and how we build.",
};

export default function About() {
  return (
    <>
      <section className="page-intro block pad">
        <p className="eyebrow">About</p>
        <h1>Made to be kept.</h1>
        <p>
          Libersens began with a simple frustration: personal care had become
          disposable. We set out to build the opposite — fewer, better objects
          and formulas, considered down to the last detail.
        </p>
      </section>

      <section className="block pad" style={{ paddingBottom: 60 }}>
        <Reveal>
          <div className="prose">
            <p>
              We design tools the way good hardware is designed — weighted,
              precise, repairable. The Model L razor takes a single blade and is
              meant to last a lifetime. The Shell travels with you and refills
              endlessly.
            </p>
            <p>
              Our formulas are short and honest. We name every active, skip the
              filler, and test until they feel like nothing on the skin. Nothing
              we make is tested on animals, and our shipping is carbon-neutral.
            </p>
            <p>
              We make in small batches, sell direct, and reinvest in better
              materials rather than louder marketing. If it cannot be made well,
              we do not make it yet.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="block pad" style={{ paddingBottom: 100 }}>
        <div className="section-head">
          <h2>Principles</h2>
          <span className="count">How we work</span>
        </div>
        <Reveal>
          <div className="shop-grid">
            {[
              ["01 — Fewer, better", "We would rather make ten things well than a hundred to fill a shelf."],
              ["02 — Honest formulas", "Every ingredient earns its place, and we tell you what it does."],
              ["03 — Designed to last", "Refillable, repairable, recyclable. Disposability is a design failure."],
            ].map(([h, b]) => (
              <div key={h}>
                <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>
                  {h}
                </h3>
                <p style={{ color: "#333", lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

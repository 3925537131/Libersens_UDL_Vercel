import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Libersens",
  description: "Why Libersens exists, and how we build.",
};

export default function About() {
  return (
    <>
      {/* full-width banner */}
      <div className="about-top block">
        <div className="about-banner">
          <img src="/img/about.svg" alt="Libersens studio" />
        </div>
      </div>

      <div className="block pad">
        {/* intro — title left, content right */}
        <section className="about-section">
          <div className="col-title">
            <p className="eyebrow">About</p>
            <h2>We are Libersens.</h2>
          </div>
          <div className="col-body">
            <Reveal>
              <p>
                Libersens is a personal-care studio. We design considered tools
                and clean formulas for a calmer daily ritual — objects made to
                be used every day and kept for years.
              </p>
              <p>
                We began with a simple frustration: personal care had become
                disposable. We set out to build the opposite — fewer, better
                things, considered down to the last detail, and honest about
                what goes into them.
              </p>
            </Reveal>
          </div>
        </section>

        {/* what we make */}
        <section className="about-section">
          <div className="col-title">
            <p className="eyebrow">What we make</p>
            <h2>Tools &amp; formulas.</h2>
          </div>
          <div className="col-body">
            <Reveal>
              <dl className="about-list">
                <div>
                  <dt>Tools</dt>
                  <dd>
                    Precision razors and refillable objects, machined to last a
                    lifetime.
                  </dd>
                </div>
                <div>
                  <dt>Formulas</dt>
                  <dd>
                    Short, honest skincare — every active named, nothing to hide.
                  </dd>
                </div>
                <div>
                  <dt>Refills</dt>
                  <dd>
                    Systems designed to be topped up, not thrown away.
                  </dd>
                </div>
                <div>
                  <dt>Care</dt>
                  <dd>Guides and rituals for a slower, quieter morning.</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* how we work */}
        <section className="about-section">
          <div className="col-title">
            <p className="eyebrow">How we work</p>
            <h2>Made to be kept.</h2>
          </div>
          <div className="col-body">
            <Reveal>
              <p>
                We design tools the way good hardware is designed — weighted,
                precise, repairable. Our formulas are kept short and tested until
                they feel like nothing on the skin.
              </p>
              <p>
                We make in small batches, sell direct, and reinvest in better
                materials rather than louder marketing. If it cannot be made
                well, we do not make it yet.
              </p>
            </Reveal>
          </div>
        </section>

        {/* standards */}
        <section className="about-section">
          <div className="col-title">
            <p className="eyebrow">Standards</p>
            <h2>The basics, held.</h2>
          </div>
          <div className="col-body">
            <Reveal>
              <dl className="about-list">
                <div>
                  <dt>Cruelty-free</dt>
                  <dd>Never tested on animals — no exceptions.</dd>
                </div>
                <div>
                  <dt>Carbon-neutral</dt>
                  <dd>Every order ships carbon-neutral.</dd>
                </div>
                <div>
                  <dt>Recyclable</dt>
                  <dd>Packaging designed to be recycled or refilled.</dd>
                </div>
                <div>
                  <dt>Small batch</dt>
                  <dd>Made in limited runs for freshness and control.</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}

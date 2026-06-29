import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";
import { mockJournal } from "@/lib/mock-data";

export default async function Home() {
  const products = await getProducts(7);
  const [feature, ...rest] = products;

  return (
    <>
      <Hero />

      {/* Manifesto */}
      <section className="manifesto block pad">
        <Reveal>
          <p className="eyebrow">Libersens — est. 2026</p>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            Personal care, stripped back to what matters.{" "}
            <em>Better tools, cleaner formulas, less waste.</em>
          </h2>
        </Reveal>
      </section>

      {/* Featured products */}
      <section className="block pad">
        <div className="section-head">
          <h2>Featured</h2>
          <span className="count">The essentials</span>
        </div>
        <Reveal>
          <div className="work-grid">
            {feature && <ProductCard product={feature} feature />}
            {rest.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Reveal>
        <div className="more-row">
          <Link href="/shop" className="btn">
            View all products
          </Link>
        </div>
      </section>

      {/* Values marquee */}
      <Marquee />

      {/* Journal */}
      <section className="block pad" style={{ paddingBottom: 40 }}>
        <div className="section-head">
          <h2>Journal</h2>
          <span className="count">Notes & rituals</span>
        </div>
        <Reveal>
          <div className="journal-grid">
            {mockJournal.map((j) => (
              <Link
                key={j.handle}
                href="/journal"
                className="journal-item"
              >
                <div className="media">
                  <img src={j.image} alt={j.headline} />
                </div>
                <div className="date">{j.date}</div>
                <div className="headline">{j.headline}</div>
              </Link>
            ))}
          </div>
        </Reveal>
        <div className="more-row">
          <Link href="/journal" className="btn">
            View all journal
          </Link>
        </div>
      </section>
    </>
  );
}

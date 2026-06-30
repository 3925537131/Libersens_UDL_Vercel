import Link from "next/link";
import Banner from "@/components/Banner";
import Statement from "@/components/Statement";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";
import { mockJournal } from "@/lib/mock-data";

export default async function Home() {
  const products = await getProducts(8);
  const large = products.slice(0, 2);
  const small = products.slice(2, 5);

  return (
    <>
      <Banner />
      <Statement />

      {/* Selected / featured products */}
      <section className="block pad">
        <div className="section-head">
          <h2>Selected products</h2>
          <span className="count">The essentials</span>
        </div>
        <Reveal>
          <div className="work-grid">
            {large.map((p) => (
              <ProductCard key={p.id} product={p} size="large" />
            ))}
            {small.map((p) => (
              <ProductCard key={p.id} product={p} size="small" />
            ))}
          </div>
        </Reveal>
        <div className="more-row">
          <Link href="/shop" className="more">
            View all products
          </Link>
        </div>
      </section>

      {/* Values marquee */}
      <Marquee />

      {/* Journal */}
      <section className="block pad">
        <div className="section-head">
          <h2>Journal</h2>
          <span className="count">Notes &amp; rituals</span>
        </div>
        <Reveal>
          <div className="journal-grid">
            {mockJournal.map((j) => (
              <Link key={j.handle} href="/journal" className="journal-item">
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
          <Link href="/journal" className="more">
            View all journal
          </Link>
        </div>
      </section>
    </>
  );
}

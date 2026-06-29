import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: "Shop — Libersens",
  description: "The full Libersens range of tools and clean personal-care formulas.",
};

export default async function Shop() {
  const products = await getProducts(24);

  return (
    <>
      <section className="page-intro block pad">
        <p className="eyebrow">Shop</p>
        <h1>The range</h1>
        <p>
          Every Libersens piece is designed to be used daily and kept for years.
          Tools you refill, formulas you finish.
        </p>
      </section>

      <section className="block pad" style={{ paddingBottom: 80 }}>
        <div className="section-head">
          <h2>All products</h2>
          <span className="count">{products.length} items</span>
        </div>
        <Reveal>
          <div className="shop-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { getProduct, getProducts } from "@/lib/shopify";

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return { title: "Not found — Libersens" };
  return {
    title: `${product.title} — Libersens`,
    description: product.subtitle || "Libersens personal care.",
  };
}

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  const all = await getProducts(12);
  const related = all.filter((p) => p.handle !== handle).slice(0, 3);

  const gallery = product.images?.length
    ? product.images
    : [product.featuredImage].filter(Boolean);

  return (
    <>
      <div className="block pad">
        <div className="pdp">
          <div className="pdp-gallery">
            {gallery.map((src, i) => (
              <div className="shot" key={i}>
                <img src={src} alt={`${product.title} ${i + 1}`} />
              </div>
            ))}
          </div>
          <ProductDetail product={product} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="block pad" style={{ paddingBottom: 80 }}>
          <div className="section-head">
            <h2>You may also like</h2>
            <Link href="/shop" className="count">
              View all
            </Link>
          </div>
          <Reveal>
            <div className="shop-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}

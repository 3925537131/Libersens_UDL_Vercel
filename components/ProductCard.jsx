import Link from "next/link";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n
  );

export default function ProductCard({ product, feature = false }) {
  const price = product.priceRange?.min ?? 0;
  return (
    <Link
      href={`/products/${product.handle}`}
      className={`work-item${feature ? " feature" : ""}`}
    >
      <div className="media">
        {product.tag && <span className="tag">{product.tag}</span>}
        {product.featuredImage && (
          <img src={product.featuredImage} alt={product.title} />
        )}
      </div>
      <div className="work-caption">
        <div>
          <div className="title">{product.title}</div>
          {product.subtitle && <div className="sub">{product.subtitle}</div>}
        </div>
        <div className="price">{fmt(price)}</div>
      </div>
    </Link>
  );
}

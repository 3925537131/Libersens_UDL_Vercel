import Link from "next/link";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n
  );

export default function ProductCard({ product, size = "small" }) {
  const price = product.priceRange?.min ?? 0;
  return (
    <Link
      href={`/products/${product.handle}`}
      className={`work-item ${size === "large" ? "large" : "small"}`}
    >
      <div className="media">
        {product.tag && <span className="tag">{product.tag}</span>}
        {product.featuredImage && (
          <img src={product.featuredImage} alt={product.title} />
        )}
      </div>
      <div className="work-caption">
        <div>
          <span className="title">{product.title}</span>
          {product.subtitle && <span className="sub">{product.subtitle}</span>}
        </div>
        <div className="price">{fmt(price)}</div>
      </div>
    </Link>
  );
}

"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n
  );

export default function ProductDetail({ product }) {
  const { addItem } = useCart();
  const firstAvailable =
    product.variants.find((v) => v.available) || product.variants[0];
  const [selected, setSelected] = useState(firstAvailable);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!selected?.available) return;
    addItem({
      variantId: selected.id,
      title: product.title,
      variantTitle: selected.title,
      price: selected.price,
      image: product.featuredImage,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="pdp-info">
      <p className="eyebrow">{product.subtitle || "Libersens"}</p>
      <h1>{product.title}</h1>
      <div className="pdp-price">{fmt(selected?.price ?? product.priceRange.min)}</div>

      <div
        className="pdp-desc"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
      />

      {product.variants.length > 1 && (
        <div className="variant-select">
          <span className="eyebrow">
            {product.options?.[0]?.name || "Option"}
          </span>
          <div className="variant-opts">
            {product.variants.map((v) => (
              <button
                key={v.id}
                className={v.id === selected?.id ? "active" : ""}
                disabled={!v.available}
                onClick={() => setSelected(v)}
                style={!v.available ? { opacity: 0.4 } : undefined}
              >
                {v.title}
                {!v.available ? " — Sold out" : ""}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        className="add-btn"
        onClick={handleAdd}
        disabled={!selected?.available}
      >
        {!selected?.available
          ? "Sold out"
          : added
          ? "Added to bag ✓"
          : `Add to bag — ${fmt(selected.price)}`}
      </button>

      {product.details && Object.keys(product.details).length > 0 && (
        <div className="pdp-meta">
          {Object.entries(product.details).map(([k, v]) => (
            <div className="row" key={k}>
              <div className="k">{k}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

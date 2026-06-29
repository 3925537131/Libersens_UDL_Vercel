"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n
  );

export default function CartDrawer() {
  const { items, open, setOpen, updateQty, removeItem, subtotal, count } =
    useCart();
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");

  async function checkout() {
    setNote("");
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lines: items.map((i) => ({
            variantId: i.variantId,
            quantity: i.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setNote(
          "Checkout opens once a Shopify store is connected. Your bag is saved."
        );
      }
    } catch {
      setNote("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        className={`cart-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`cart-drawer${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <div className="cart-header">
          <h3>Your Bag {count > 0 && `(${count})`}</h3>
          <button
            className="cart-close"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <p className="cart-empty">Your bag is empty.</p>
          ) : (
            items.map((item) => (
              <div className="cart-line" key={item.variantId}>
                <div className="thumb">
                  {item.image && <img src={item.image} alt={item.title} />}
                </div>
                <div className="info">
                  <span className="name">{item.title}</span>
                  {item.variantTitle && (
                    <span className="variant">{item.variantTitle}</span>
                  )}
                  <div className="qty">
                    <button
                      onClick={() => updateQty(item.variantId, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.variantId, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove"
                    onClick={() => removeItem(item.variantId)}
                  >
                    Remove
                  </button>
                </div>
                <span className="lineprice">
                  {fmt(item.price * item.quantity)}
                </span>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <p className="cart-note">
              {note || "Shipping & taxes calculated at checkout."}
            </p>
            <button
              className="checkout-btn"
              onClick={checkout}
              disabled={loading}
            >
              {loading ? "One moment…" : "Checkout"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

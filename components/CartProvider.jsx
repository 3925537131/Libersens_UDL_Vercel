"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "libersens_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);

  // persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  // lock scroll while drawer open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const addItem = useCallback((line) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.variantId === line.variantId);
      if (i > -1) {
        const next = [...prev];
        next[i] = { ...next[i], quantity: next[i].quantity + line.quantity };
        return next;
      }
      return [...prev, line];
    });
    setOpen(true);
  }, []);

  const updateQty = useCallback((variantId, quantity) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((x) => x.variantId !== variantId)
        : prev.map((x) => (x.variantId === variantId ? { ...x, quantity } : x))
    );
  }, []);

  const removeItem = useCallback((variantId) => {
    setItems((prev) => prev.filter((x) => x.variantId !== variantId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((n, x) => n + x.quantity, 0);
  const subtotal = items.reduce((s, x) => s + x.price * x.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        open,
        setOpen,
        addItem,
        updateQty,
        removeItem,
        clear,
        count,
        subtotal,
        hydrated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

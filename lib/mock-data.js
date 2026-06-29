// Auto-generated placeholder catalogue for Libersens.
// Used when Shopify Storefront credentials are absent or a request fails,
// so the storefront always renders during development.

const img = (slug) => `/img/products/${slug}.svg`;

export const mockProducts = [
  {
    id: "gid://mock/Product/1",
    handle: "model-l-razor",
    title: "Model L Razor",
    subtitle: "Single-blade precision",
    tag: "Signature",
    descriptionHtml:
      "<p>The Model L is a weighted, single-blade safety razor machined from a solid billet of aircraft-grade aluminium. Engineered for a closer, calmer shave with a fraction of the waste.</p><p>A tool designed to be kept, not replaced.</p>",
    priceRange: { min: 95, max: 95 },
    options: [
      { name: "Finish", values: ["Graphite", "Sand", "Chrome"] },
    ],
    images: [img("model-l-1"), img("model-l-2"), img("model-l-3")],
    featuredImage: img("model-l-1"),
    variants: [
      { id: "v1-1", title: "Graphite", price: 95, available: true },
      { id: "v1-2", title: "Sand", price: 95, available: true },
      { id: "v1-3", title: "Chrome", price: 105, available: true },
    ],
    details: {
      Material: "Aircraft-grade aluminium",
      Weight: "98g",
      Includes: "5 blades + travel case",
    },
  },
  {
    id: "gid://mock/Product/2",
    handle: "aura-serum",
    title: "Aura Serum",
    subtitle: "Daily renewal",
    tag: "Bestseller",
    descriptionHtml:
      "<p>A lightweight, fast-absorbing serum built around niacinamide and squalane. Aura restores balance and a quiet glow without residue.</p>",
    priceRange: { min: 62, max: 62 },
    options: [{ name: "Size", values: ["30ml", "50ml"] }],
    images: [img("aura-1"), img("aura-2")],
    featuredImage: img("aura-1"),
    variants: [
      { id: "v2-1", title: "30ml", price: 62, available: true },
      { id: "v2-2", title: "50ml", price: 88, available: true },
    ],
    details: {
      Format: "Serum",
      "Key actives": "Niacinamide, Squalane",
      Scent: "Unscented",
    },
  },
  {
    id: "gid://mock/Product/3",
    handle: "lume-moisturiser",
    title: "Lume Moisturiser",
    subtitle: "Illuminating hydration",
    tag: null,
    descriptionHtml:
      "<p>A featherweight gel-cream that hydrates for 24 hours and leaves skin with a soft, lit-from-within finish. Suitable for every skin type.</p>",
    priceRange: { min: 48, max: 48 },
    options: [{ name: "Size", values: ["50ml"] }],
    images: [img("lume-1"), img("lume-2")],
    featuredImage: img("lume-1"),
    variants: [{ id: "v3-1", title: "50ml", price: 48, available: true }],
    details: {
      Format: "Gel-cream",
      "Key actives": "Hyaluronic acid, Glycerin",
      Finish: "Dewy",
    },
  },
  {
    id: "gid://mock/Product/4",
    handle: "shell-care-kit",
    title: "The Shell Kit",
    subtitle: "The complete ritual",
    tag: "Set",
    descriptionHtml:
      "<p>Everything to begin: the Model L razor, Aura serum, Lume moisturiser and a refillable travel shell, presented in recyclable packaging. Save 15% over individual pieces.</p>",
    priceRange: { min: 175, max: 175 },
    options: [{ name: "Finish", values: ["Graphite", "Sand"] }],
    images: [img("shell-1"), img("shell-2"), img("shell-3")],
    featuredImage: img("shell-1"),
    variants: [
      { id: "v4-1", title: "Graphite", price: 175, available: true },
      { id: "v4-2", title: "Sand", price: 175, available: false },
    ],
    details: {
      Includes: "Razor, Serum, Moisturiser, Shell",
      Value: "Save 15%",
      Packaging: "Recyclable",
    },
  },
  {
    id: "gid://mock/Product/5",
    handle: "clear-cleanser",
    title: "Clear Cleanser",
    subtitle: "Gentle daily wash",
    tag: null,
    descriptionHtml:
      "<p>A pH-balanced gel cleanser that lifts away the day without stripping. Foams softly, rinses clean.</p>",
    priceRange: { min: 34, max: 34 },
    options: [{ name: "Size", values: ["150ml"] }],
    images: [img("clear-1"), img("clear-2")],
    featuredImage: img("clear-1"),
    variants: [{ id: "v5-1", title: "150ml", price: 34, available: true }],
    details: {
      Format: "Gel cleanser",
      pH: "5.5",
      Scent: "Cedar + Citrus",
    },
  },
  {
    id: "gid://mock/Product/6",
    handle: "balm-post-shave",
    title: "Settle Balm",
    subtitle: "Post-shave repair",
    tag: null,
    descriptionHtml:
      "<p>A cooling, alcohol-free balm that calms and protects skin straight after the blade. Absorbs in seconds.</p>",
    priceRange: { min: 38, max: 38 },
    options: [{ name: "Size", values: ["75ml"] }],
    images: [img("balm-1"), img("balm-2")],
    featuredImage: img("balm-1"),
    variants: [{ id: "v6-1", title: "75ml", price: 38, available: true }],
    details: {
      Format: "Balm",
      "Key actives": "Allantoin, Aloe",
      Scent: "Cedar",
    },
  },
];

export const mockJournal = [
  {
    handle: "the-case-for-single-blade",
    date: "06.18.2026",
    headline: "The case for a single blade",
    image: "/img/journal/journal-1.svg",
  },
  {
    handle: "what-goes-into-aura",
    date: "05.30.2026",
    headline: "What actually goes into Aura",
    image: "/img/journal/journal-2.svg",
  },
  {
    handle: "designing-the-shell",
    date: "05.12.2026",
    headline: "Designing the refillable Shell",
    image: "/img/journal/journal-3.svg",
  },
  {
    handle: "a-calmer-morning",
    date: "04.27.2026",
    headline: "Notes on a calmer morning",
    image: "/img/journal/journal-4.svg",
  },
];

export function getMockProduct(handle) {
  return mockProducts.find((p) => p.handle === handle) || null;
}

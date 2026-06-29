// Shopify Storefront API client with graceful mock fallback.
//
// When SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_ACCESS_TOKEN are set, all data
// comes from the live Storefront API. Otherwise (or if a request fails) the
// storefront falls back to lib/mock-data.js so it always renders.

import { mockProducts, getMockProduct } from "./mock-data";

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const VERSION = process.env.SHOPIFY_API_VERSION || "2024-10";

export const isShopifyConfigured = Boolean(DOMAIN && TOKEN);

const endpoint = isShopifyConfigured
  ? `https://${DOMAIN}/api/${VERSION}/graphql.json`
  : null;

async function shopifyFetch(query, variables = {}) {
  if (!isShopifyConfigured) throw new Error("Shopify not configured");

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Shopify HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message || "Shopify error");
  return json.data;
}

const money = (m) => (m ? parseFloat(m.amount) : 0);

function normalizeProduct(node) {
  if (!node) return null;
  const variants = (node.variants?.edges || []).map(({ node: v }) => ({
    id: v.id,
    title: v.title,
    price: money(v.price),
    available: v.availableForSale,
  }));
  const images = (node.images?.edges || []).map(({ node: i }) => i.url);
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    subtitle: node.productType || "",
    tag: node.tags?.[0] || null,
    descriptionHtml: node.descriptionHtml,
    priceRange: {
      min: money(node.priceRange?.minVariantPrice),
      max: money(node.priceRange?.maxVariantPrice),
    },
    options: (node.options || []).map((o) => ({
      name: o.name,
      values: o.values,
    })),
    images: images.length ? images : [node.featuredImage?.url].filter(Boolean),
    featuredImage: node.featuredImage?.url || images[0] || null,
    variants,
    details: {},
  };
}

const PRODUCT_FIELDS = `
  id
  handle
  title
  productType
  tags
  descriptionHtml
  featuredImage { url }
  priceRange {
    minVariantPrice { amount }
    maxVariantPrice { amount }
  }
  options { name values }
  images(first: 6) { edges { node { url } } }
  variants(first: 20) {
    edges { node { id title availableForSale price { amount } } }
  }
`;

export async function getProducts(limit = 12) {
  if (!isShopifyConfigured) return mockProducts.slice(0, limit);
  try {
    const data = await shopifyFetch(
      `query Products($n: Int!) {
        products(first: $n, sortKey: BEST_SELLING) {
          edges { node { ${PRODUCT_FIELDS} } }
        }
      }`,
      { n: limit }
    );
    return data.products.edges.map((e) => normalizeProduct(e.node));
  } catch (err) {
    console.warn("[shopify] getProducts fell back to mock:", err.message);
    return mockProducts.slice(0, limit);
  }
}

export async function getProduct(handle) {
  if (!isShopifyConfigured) return getMockProduct(handle);
  try {
    const data = await shopifyFetch(
      `query Product($handle: String!) {
        product(handle: $handle) { ${PRODUCT_FIELDS} }
      }`,
      { handle }
    );
    return normalizeProduct(data.product);
  } catch (err) {
    console.warn("[shopify] getProduct fell back to mock:", err.message);
    return getMockProduct(handle);
  }
}

// Create a cart and return its checkout URL. Falls back to null when Shopify is
// not configured (CartDrawer shows a friendly message in that case).
export async function createCheckout(lines) {
  if (!isShopifyConfigured) return null;
  try {
    const data = await shopifyFetch(
      `mutation CartCreate($lines: [CartLineInput!]!) {
        cartCreate(input: { lines: $lines }) {
          cart { checkoutUrl }
          userErrors { message }
        }
      }`,
      {
        lines: lines.map((l) => ({
          merchandiseId: l.variantId,
          quantity: l.quantity,
        })),
      }
    );
    return data.cartCreate?.cart?.checkoutUrl || null;
  } catch (err) {
    console.warn("[shopify] createCheckout failed:", err.message);
    return null;
  }
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="block pad"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "calc(var(--nav-h) + 60px)",
        paddingBottom: 80,
      }}
    >
      <p className="eyebrow" style={{ color: "var(--red)", marginBottom: 20 }}>
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 120px)",
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
        }}
      >
        Page not found.
      </h1>
      <p style={{ marginTop: 24, color: "#333", maxWidth: "44ch" }}>
        The page you were looking for has moved or never existed.
      </p>
      <div style={{ marginTop: 30 }}>
        <Link href="/" className="btn btn-red">
          Back home
        </Link>
      </div>
    </section>
  );
}

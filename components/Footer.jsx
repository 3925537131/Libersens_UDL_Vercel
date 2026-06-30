"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Clock({ label, timeZone }) {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone,
        }).format(new Date())
      );
    };
    tick();
    const id = setInterval(tick, 1000 * 10);
    return () => clearInterval(id);
  }, [timeZone]);
  return (
    <div className="clock">
      <div className="label">{label}</div>
      <div className="time">{time}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div className="btt-bar block">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </button>
      </div>

      <div className="foot-links block">
        <Link href="/shop">Shop the range</Link>
        <Link href="/contact">Get in touch</Link>
      </div>

      <footer className="footer">
        <div className="block pad">
          <div className="footer-top">
            <div>
              <div className="clocks">
                <Clock label="London" timeZone="Europe/London" />
                <Clock label="Singapore" timeZone="Asia/Singapore" />
              </div>
              <p
                style={{
                  marginTop: 28,
                  maxWidth: "30ch",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--grey)",
                }}
              >
                A personal-care studio building considered tools and clean
                formulas for a calmer daily ritual.
              </p>
            </div>

            <div className="footer-col">
              <h4>Shop</h4>
              <Link href="/shop">All products</Link>
              <Link href="/products/model-l-razor">Model L Razor</Link>
              <Link href="/products/aura-serum">Aura Serum</Link>
              <Link href="/products/shell-care-kit">The Shell Kit</Link>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/contact">Contact</Link>
              <a href="mailto:hello@libersens.com">hello@libersens.com</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-meta">
              <span>© {new Date().getFullYear()} Libersens</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
            <button
              className="back-to-top"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Back to top ↑
            </button>
          </div>

          <div className="footer-bottom" style={{ marginTop: 30 }}>
            <div className="footer-logo">
              Libersens<span style={{ color: "var(--red)" }}>.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function Clock({ label, timeZone }) {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone,
        }).format(new Date())
      );
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
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>

      <div className="foot-links block">
        <Link href="/shop">Shop the range</Link>
        <Link href="/contact">Get in touch</Link>
      </div>

      <footer className="footer">
        <div className="block pad">
          <div className="footer-grid">
            {/* world clocks, stacked */}
            <div className="footer-clocks">
              <Clock label="London" timeZone="Europe/London" />
              <Clock label="Singapore" timeZone="Asia/Singapore" />
            </div>

            {/* contact + social + addresses */}
            <div className="footer-contact">
              <div className="fc-block">
                <div className="fc-label">Customer Care</div>
                <a href="mailto:hello@libersens.com">hello@libersens.com</a>
              </div>
              <div className="fc-block">
                <div className="fc-label">Press &amp; Wholesale</div>
                <a href="mailto:press@libersens.com">press@libersens.com</a>
              </div>
              <div className="fc-block">
                <div className="fc-label">Careers</div>
                <Link href="/contact">Current Openings</Link>
              </div>

              <ul className="fc-social">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    Instagram <span className="arr">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                    TikTok <span className="arr">↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                    Pinterest <span className="arr">↗</span>
                  </a>
                </li>
              </ul>

              <div className="fc-address">
                <div>
                  <b>London</b>
                  Unit 4, Maker Yard, Bethnal Green, London E2 8HD, United
                  Kingdom
                </div>
                <div>
                  <b>Singapore</b>
                  1 Design District, #04-12, Singapore 069118
                </div>
              </div>
            </div>
          </div>

          {/* giant wordmark */}
          <div className="footer-wordmark">
            Libersens<span className="dot">.</span>
          </div>

          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Libersens</span>
            <span className="footer-copy-links">
              <Link href="/">Privacy</Link>
              <Link href="/">Terms</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

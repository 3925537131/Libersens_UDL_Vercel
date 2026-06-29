"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useCart();
  const pathname = usePathname();

  // home page has a full-bleed hero, so the nav floats over it (blend mode)
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  const solid = (!overHero || scrolled) && !menuOpen;

  return (
    <>
      <header
        className={`header${solid ? " solid" : ""}${
          menuOpen ? " menu-open" : ""
        }`}
      >
        <div className="block pad header-inner">
          <Link href="/" className="logo" aria-label="Libersens home">
            Libersens<span className="dot" />
          </Link>

          <nav className="main-nav">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-right">
            <button className="cart-btn" onClick={() => setOpen(true)}>
              Cart {count > 0 && <span className="count">({count})</span>}
            </button>
            <button
              className="burger"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      {/* full-screen overlay menu */}
      <div className={`overlay${menuOpen ? " open" : ""}`}>
        <nav className="overlay-nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="overlay-foot">
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
          <a href="mailto:hello@libersens.com">hello@libersens.com</a>
        </div>
      </div>
    </>
  );
}

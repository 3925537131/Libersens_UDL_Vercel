"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    // skip on touch / coarse pointers
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      el.classList.add("visible");
    };
    const leave = () => el.classList.remove("visible");

    const isInteractive = (t) =>
      t.closest(
        "a, button, input, textarea, select, [role='button'], .work-item, .journal-item"
      );

    const over = (e) => {
      el.classList.toggle("hovering", Boolean(isInteractive(e.target)));
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    loop();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-follow" ref={ref} aria-hidden="true" />;
}

"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="page-intro block pad">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p>
          Questions about an order, an ingredient, or a wholesale enquiry — we
          read everything.
        </p>
      </section>

      <section className="block pad">
        <div className="contact-grid">
          <div>
            {sent ? (
              <p style={{ fontSize: 20, lineHeight: 1.5 }}>
                Thanks — your message is on its way. We&apos;ll reply within one
                working day.
              </p>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
                <button type="submit" className="btn btn-red">
                  Send message
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="footer-col" style={{ color: "var(--black)" }}>
              <h4 style={{ color: "var(--grey)" }}>Customer care</h4>
              <a href="mailto:hello@libersens.com">hello@libersens.com</a>
              <p style={{ color: "#333" }}>Mon–Fri, 9–6</p>
            </div>
            <div className="footer-col" style={{ marginTop: 30 }}>
              <h4 style={{ color: "var(--grey)" }}>Press & wholesale</h4>
              <a href="mailto:press@libersens.com">press@libersens.com</a>
            </div>
            <div className="footer-col" style={{ marginTop: 30 }}>
              <h4 style={{ color: "var(--grey)" }}>Studio</h4>
              <p style={{ color: "#333", lineHeight: 1.7 }}>
                Unit 4, Maker Yard
                <br />
                London E2, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

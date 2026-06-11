import { useEffect, useRef, useState } from "react";

const css = `
  .fs-wrapper {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    column-gap: 0.4rem;
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    align-items: start;
  }
  .fs-title {
    grid-column: 1 / 15;
    margin-top: clamp(6.331rem, 18vw, 10rem);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 3rem;
    text-align: center;
    color: #fff;
    line-height: 1.25;
  }
  .fs-cta-title {
    grid-column: 1 / 8;
    margin-top: 2.441rem;
    padding-right: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 1.563rem;
    color: #fff;
    line-height: 1.25;
  }
  .fs-cta-caption {
    grid-column: 8 / 15;
    margin-top: 2.441rem;
    padding-top: 0.25em;
    font-size: 1rem;
    color: #fff;
    line-height: 1.25;
  }
  .fs-button {
    grid-column: 8 / 10;
    grid-row: 3;
    justify-self: start;
    margin-top: 1rem;
    display: inline-block;
    padding: 0.64rem 1rem;
    background-color: #3687FF;
    border-radius: 0.4rem;
    font-size: 0.8rem;
    color: #fff;
    cursor: pointer;
  }

  /* Footer grid */
  .fs-footer-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: auto auto 1fr auto;
    column-gap: 0.4rem;
    margin-left: 1.6rem;
    margin-right: 1.6rem;
    min-height: 100vh;
    align-items: start;
  }
  .fs-logo {
    grid-column: 1 / 7;
    grid-row: 1;
    justify-self: start;
    margin-top: calc(clamp(6.331rem, 18vw, 10rem) + 2.441rem);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 2.441rem;
    color: #fff;
  }
  .fs-nav-menu {
    grid-column: 1 / 8;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.563rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: semibold;
    font-size: 1.563rem;
    gap: 0.4em;
  }
  .fs-nav-help {
    grid-column: 8 / 15;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1.563rem;
    font-size: 1rem;
    gap: 0.4em;
  }
  .fs-nav-legal {
    grid-column: 1 / 8;
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: clamp(6.331rem, 18vw, 10rem);
    font-size: 0.8rem;
    gap: 0.4em;
  }
  .fs-nav-socials {
    grid-column: 8 / 15;
    grid-row: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: clamp(6.331rem, 18vw, 10rem);
    font-size: 0.8rem;
    gap: 0.4em;
  }
  .fs-copy {
    grid-column: 1 / 8;
    grid-row: 5;
    justify-self: start;
    margin-top: clamp(6.331rem, 18vw, 10rem);
    margin-bottom: calc(clamp(6.331rem, 18vw, 10rem) * 2);
    font-size: 0.64rem;
    text-transform: uppercase;
    color: #fff;
    line-height: 1.4;
  }
  .fs-nav-link {
    color: #fff;
    text-decoration: none;
  }

  /* Desktop overrides */
  @media (min-width: 1024px) {
    .fs-wrapper {
      margin-left: 3.2rem;
      margin-right: 3.2rem;
    }
    .fs-title {
      grid-column: 4 / 12;
    }
    .fs-cta-title {
      grid-column: 5 / 8;
    }
    .fs-cta-caption {
      grid-column: 8 / 11;
    }
    .fs-footer-grid {
      margin-left: 3.2rem;
      margin-right: 3.2rem;
    }
    .fs-logo {
      grid-column: 3 / 7;
    }
    .fs-nav-menu {
      grid-column: 8 / 11;
      grid-row: 1;
      margin-top: calc(clamp(6.331rem, 18vw, 10rem) + 2.441rem);
    }
    .fs-nav-help {
      grid-column: 11 / 15;
      grid-row: 1;
      margin-top: calc(clamp(6.331rem, 18vw, 10rem) + 2.441rem);
    }
    .fs-nav-legal {
      grid-column: 8 / 11;
      grid-row: 2;
    }
    .fs-nav-socials {
      grid-column: 11 / 15;
      grid-row: 2;
    }
    .fs-copy {
      grid-column: 3 / 11;
      grid-row: 4;
      margin-bottom: clamp(6.331rem, 18vw, 10rem);
    }
  }
`;

export default function FooterShift() {
  const footerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Inject scoped CSS once
  useEffect(() => {
    const id = "footer-shift-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = css;
      document.head.appendChild(tag);
    }
    return () => {
      const tag = document.getElementById(id);
      if (tag) tag.remove();
    };
  }, []);

  // Scroll-driven progress
  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;

      const footerH = footer.offsetHeight;
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;

      const maxScroll = docH - winH;
      const animStart = maxScroll - footerH;
      const animEnd = maxScroll;

      const raw = (scrollY - animStart) / (animEnd - animStart);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerTranslate = `translate3d(0, calc(-50% + 50% * ${progress}), 0)`;
  const overlayOpacity = 1 - progress;

  return (
    <>
      {/* ── Main content ─────────────────────── */}
      <div id="contact" style={{ minHeight: "100vh", position: "relative", zIndex: 20, backgroundColor: "#000", color: "#fff" }}>
        <div className="fs-wrapper">
          <p className="fs-title pt-30">
            Ready to Restore Natural Balance?
          </p>
          <span className="fs-cta-title ">
            yaha pe kuch badhiya sa text.
          </span>
          <p className="fs-cta-caption">
            Schedule a consultation with our naturopathic practitioners and receive a personalised therapeutic protocol tailored to your body's needs.
          </p>
          <span className="fs-button">Book a Consultation</span>
        </div>
      </div>

      {/* ── Footer ───────────────────────────── */}
      <footer
        ref={footerRef}
        style={{
          position: "relative",
          backgroundColor: "#3687FF",
          color: "#fff",
          willChange: "transform",
          transform: footerTranslate,
        }}
      >
        {/* Dark overlay fading out as footer reveals */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000",
            opacity: overlayOpacity,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="fs-footer-grid">
          <span className="fs-logo">Dahiya Naturopathy</span>

          <nav className="fs-nav-menu">
            {["Shop", "About", "Support"].map((item) => (
              <a key={item} href="#" className="fs-nav-link">{item}</a>
            ))}
          </nav>

          <nav className="fs-nav-help">
            {["FAQs", "Shipping & Returns", "Warranty", "Contact"].map((item) => (
              <a key={item} href="#" className="fs-nav-link">{item}</a>
            ))}
          </nav>

          <nav className="fs-nav-legal">
            {["Privacy Policy", "Terms & Conditions", "Cookies"].map((item) => (
              <a key={item} href="#" className="fs-nav-link">{item}</a>
            ))}
          </nav>

          <nav className="fs-nav-socials">
            {["Instagram", "Pinterest", "YouTube", "LinkedIn"].map((item) => (
              <a key={item} href="#" className="fs-nav-link">{item}</a>
            ))}
          </nav>

          <div className="fs-copy">
            © 2026 Dahiya Naturopathy.<br />All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
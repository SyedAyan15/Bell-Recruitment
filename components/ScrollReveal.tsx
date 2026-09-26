"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Elements that fade/slide in as they scroll into view. Keep in sync with the
// `html.js :is(...)` hiding rule in globals.css, which hides them before hydration
// so there is no flash of content. `.process-grid` is observed separately: it only
// receives the `in` class, which starts the vetting-process sequence (its steps are
// revealed one by one by CSS, not by this list).
const REVEAL = [
  ".hero-inner > *",
  ".page-hero .container > *",
  ".stats-grid > *",
  ".section-label",
  ".section h2",
  ".section-intro",
  ".value-card",
  ".service-card",
  ".sector-card",
  ".why-card",
  ".testimonial-card",
  ".julie-photo",
  ".julie-text > *",
  ".services-block > *",
  ".blog-card",
  ".split-photo",
  ".photo-banner-box > *",
  ".form-panel",
  ".contact-card",
  ".partners-label",
  ".footer-cta > *",
].join(", ");

const MAX_STAGGER = 6;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = (selector: string) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)).filter((el) => !el.classList.contains("in"));
    const targets = pending(REVEAL);
    const processGrids = pending(".process-grid");

    if (!("IntersectionObserver" in window)) {
      [...targets, ...processGrids].forEach((el) => el.classList.add("in"));
      return;
    }

    const reveal = (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    };
    // Content waits until it is a little way into the viewport so the entrance is seen.
    const observer = new IntersectionObserver(reveal, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    // The vetting process builds up step by step, so it starts as soon as its top edge is
    // a little way into view: early enough to catch quick scrollers, late enough that
    // step 1 is on screen when it appears.
    const eagerObserver = new IntersectionObserver(reveal, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
    processGrids.forEach((el) => eagerObserver.observe(el));

    for (const el of targets) {
      // Stagger siblings (cards in a grid, lines of a heading block) one after another.
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.matches(REVEAL));
      const index = Math.min(siblings.indexOf(el), MAX_STAGGER);
      el.style.setProperty("--reveal-i", String(Math.max(index, 0)));
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
      eagerObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

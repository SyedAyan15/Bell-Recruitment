"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Elements that fade/slide in as they scroll into view. Keep in sync with the
// `html.js :is(...)` hiding rule in globals.css, which hides them before hydration
// so there is no flash of content. `.process-grid` only receives the `in` class
// (it starts the vetting-process dot animation) and is not hidden itself.
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
  ".process-step",
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
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(`${REVEAL}, .process-grid`),
    ).filter((el) => !el.classList.contains("in"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    for (const el of targets) {
      // Stagger siblings (cards in a grid, lines of a heading block) one after another.
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.matches(REVEAL));
      const index = Math.min(siblings.indexOf(el), MAX_STAGGER);
      el.style.setProperty("--reveal-i", String(Math.max(index, 0)));
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

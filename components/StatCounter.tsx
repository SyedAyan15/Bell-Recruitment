"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1600;

// Counts up from 0 to the number in `value` (e.g. "500+") once scrolled into view.
// The server renders the final value, so it still reads correctly without JS.
export default function StatCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCurrent(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          setCurrent(Math.round(target * (1 - Math.pow(1 - t, 3)))); // ease-out cubic
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div className="stat-number" ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {current ?? target}
        {suffix}
      </span>
    </div>
  );
}

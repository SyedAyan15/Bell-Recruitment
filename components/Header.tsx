"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

// Sticky header with the main nav (collapses to a hamburger menu below 1080px).
// It is transparent over the burgundy banner at the top of every page, and turns solid
// burgundy once the visitor scrolls (the "scrolled" class).
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // On scroll: fill the gold progress bar (via the --progress CSS variable, no re-render)
  // and switch to the slimmer "scrolled" header. Throttled to one update per frame.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
      setScrolled(window.scrollY > 40);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo" onClick={close}>
          <Image src="/images/logo-white.png" alt="Bell Recruitment" width={1699} height={765} priority />
        </Link>

        <nav className={`main-nav${open ? " open" : ""}`} aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : undefined}
                onClick={close}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link href="/cv-upload/" className="nav-cta" onClick={close}>
            Upload CV
          </Link>
        </nav>

        <button
          className={`menu-toggle${open ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}

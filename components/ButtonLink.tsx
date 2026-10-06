import Link from "next/link";

export type ButtonSpec = { label: string; href: string; variant?: "light" | "outline" | "burgundy" | "ghost" };

// /jobs/ pages are redirects (see next.config.ts) and external URLs leave the site, so they
// use a plain <a>; everything else uses Next's <Link> for fast in-site navigation.
export function isPlainHref(href: string) {
  return href.startsWith("http") || href.startsWith("/jobs/");
}

export default function ButtonLink({ label, href, variant = "burgundy" }: ButtonSpec) {
  const className = `btn btn-${variant}`;
  const content = (
    <>
      {label} <i className="fas fa-arrow-right" aria-hidden="true" />
    </>
  );
  return isPlainHref(href) ? (
    <a className={className} href={href}>
      {content}
    </a>
  ) : (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}

export function ButtonRow({ buttons, center = false }: { buttons: ButtonSpec[]; center?: boolean }) {
  return (
    <div className={`btn-row${center ? " btn-row-center" : ""}`}>
      {buttons.map((b) => (
        <ButtonLink key={b.href + b.label} {...b} />
      ))}
    </div>
  );
}

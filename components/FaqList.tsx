import Link from "next/link";

export type Faq = {
  q: string;
  a: string;
  // Optional numbered steps shown after the answer.
  steps?: string[];
  // Optional link shown after the answer, e.g. to the client process page.
  link?: { label: string; href: string };
};

// Plain-text version of an answer, used for the FAQ schema on /faqs/.
export function faqAnswerText(f: Faq) {
  return [f.a, ...(f.steps ?? []).map((s, i) => `${i + 1}. ${s}`)].join(" ");
}

// Expandable question-and-answer list built on <details>, so it works without JavaScript
// and the answers stay in the page for search engines. The first question starts open.
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details className="faq-item" key={f.q} open={i === 0}>
          <summary>
            <span>{f.q}</span>
            <i className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-a">
            <p>{f.a}</p>
            {f.steps && (
              <ol className="num-list">
                {f.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            )}
            {f.link && (
              <p>
                <Link className="text-link" href={f.link.href}>
                  {f.link.label} <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
              </p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";

// Client quotes with company logos; content comes from TESTIMONIALS in lib/content.ts.
// `swipeOnMobile` turns the grid into a horizontal swipe row on phones (used on Home,
// where six stacked cards would make the page very long).
export default function TestimonialGrid({ swipeOnMobile = false }: { swipeOnMobile?: boolean }) {
  return (
    <div className={`testimonial-grid${swipeOnMobile ? " mobile-swipe" : ""}`}>
      {TESTIMONIALS.map((t) => (
        <figure className="testimonial-card" key={t.name}>
          <div className="testimonial-logo">
            <Image src={t.logo.src} alt={t.company} width={t.logo.w} height={t.logo.h} />
          </div>
          <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption>
            <span className="testimonial-author">{t.name}</span>
            <span className="testimonial-role">
              {t.role}, {t.company}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

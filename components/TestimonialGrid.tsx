import Image from "next/image";
import { TESTIMONIALS, type TestimonialId } from "@/lib/content";

// Client quotes with company logos, chosen by id from TESTIMONIALS in lib/content.ts.
// `swipeOnMobile` turns the grid into a horizontal swipe row on phones.
export default function TestimonialGrid({ ids, swipeOnMobile = false }: { ids: TestimonialId[]; swipeOnMobile?: boolean }) {
  return (
    <div className={`testimonial-grid${ids.length === 2 ? " testimonial-grid-2" : ""}${swipeOnMobile ? " mobile-swipe" : ""}`}>
      {ids.map((id) => {
        const t = TESTIMONIALS[id];
        return (
          <figure className="testimonial-card" key={id}>
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
        );
      })}
    </div>
  );
}

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";

export default function TestimonialGrid() {
  return (
    <div className="testimonial-grid">
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

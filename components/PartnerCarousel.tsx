import Image from "next/image";
import { PARTNERS } from "@/lib/content";

export default function PartnerCarousel() {
  // The list is rendered twice so the CSS scroll animation loops seamlessly.
  const logos = [...PARTNERS, ...PARTNERS];
  return (
    <section className="partners">
      <div className="partners-label">Trusted by Northern Ireland&rsquo;s leading FMCG brands</div>
      <div className="logo-carousel">
        <div className="logo-track">
          {logos.map((p, i) => (
            <Image
              key={i}
              src={p.src}
              alt={i < PARTNERS.length ? p.alt : ""}
              aria-hidden={i >= PARTNERS.length}
              width={p.w}
              height={p.h}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

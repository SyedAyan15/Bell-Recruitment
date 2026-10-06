import type { ReactNode } from "react";
import { CONTACT } from "@/lib/content";
import { ButtonRow, type ButtonSpec } from "./ButtonLink";
import LetterReveal from "./LetterReveal";

// Closing call to action at the bottom of each page ("Talk to Julie", "Still have a
// question?"...): a photo banner with the heading typed in, optional text, Julie's
// phone and email, and buttons.
export default function CtaBand({
  title,
  image,
  buttons,
  children,
}: {
  title: string;
  image: string;
  buttons: ButtonSpec[];
  children?: ReactNode;
}) {
  return (
    <section className="photo-banner cta-band" style={{ backgroundImage: `url("${image}")` }}>
      <div className="photo-banner-box">
        <h2>
          <LetterReveal text={title} />
        </h2>
        {children && <p>{children}</p>}
        <p className="cta-contact">
          <a href={CONTACT.phoneHref}>
            <i className="fas fa-phone" aria-hidden="true" /> {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`}>
            <i className="fas fa-envelope" aria-hidden="true" /> {CONTACT.email}
          </a>
        </p>
        <ButtonRow buttons={buttons.map((b, i) => ({ variant: i === 0 ? "gold" : "outline", ...b }))} />
      </div>
    </section>
  );
}

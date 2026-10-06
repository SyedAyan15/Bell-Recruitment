import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonRow, type ButtonSpec } from "./ButtonLink";
import LetterReveal from "./LetterReveal";

// Banner at the top of inner pages, holding the page's single H1 (typed in letter by
// letter). With `image`, the photo sits behind a burgundy overlay with a slow zoom;
// `imagePosition` sets which part of the photo stays in view.
export default function PageHero({
  eyebrow,
  title,
  accent,
  image,
  imagePosition = "center",
  buttons,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  image?: string;
  imagePosition?: string;
  buttons?: ButtonSpec[];
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${image ? " has-photo" : ""}`}>
      {image && (
        <Image
          className="page-hero-img"
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: imagePosition }}
        />
      )}
      <div className="container">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>
          <LetterReveal text={title} accent={accent} />
        </h1>
        {children && <p>{children}</p>}
        {buttons && <ButtonRow buttons={buttons.map((b, i) => ({ variant: i === 0 ? "gold" : "outline", ...b }))} />}
      </div>
    </section>
  );
}

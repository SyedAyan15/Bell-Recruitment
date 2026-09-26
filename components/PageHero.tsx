import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  image,
  imagePosition = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  image?: string;
  imagePosition?: string;
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
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}

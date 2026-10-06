import Image from "next/image";
import type { ReactNode } from "react";
import Tilt from "./Tilt";

// Julie Bell's photo (with mouse tilt) beside a heading and free-form content.
// Used on Home ("Meet Julie Bell") and About ("Julie Bell, Founder and CEO").
export default function Founder({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="julie-wrap">
      <Tilt className="julie-photo">
        <Image
          src="/images/julie-bell.jpg"
          alt="Julie Bell, Founder and CEO of Bell Recruitment"
          width={870}
          height={1305}
          sizes="(max-width: 900px) 100vw, 420px"
        />
      </Tilt>
      <div className="julie-text">
        <div className="section-label">Founder &amp; CEO</div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

import Image from "next/image";
import { SECTORS } from "@/lib/content";

export default function SectorGrid() {
  return (
    <div className="sector-grid">
      {SECTORS.map((s) => (
        <div className="sector-card" key={s.title}>
          <Image src={s.image} alt="" fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 300px" />
          <div className="sector-body">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

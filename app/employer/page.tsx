import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import SectorGrid from "@/components/SectorGrid";
import { CONTACT, SERVICES } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="For employers" title="Services" image="/images/handshake-bg.webp">
        We are experts in FMCG recruitment and Executive Search.
      </PageHero>

      <section className="section">
        <div className="container">
          {SERVICES.map((s) => (
            <div className="services-block" key={s.title}>
              <div className="services-media">
                <Image src={s.image} alt={s.title} width={1200} height={900} sizes="(max-width: 900px) 100vw, 560px" />
              </div>
              <div className="services-text">
                <h2>{s.title}</h2>
                <p className="tagline">{s.tagline}</p>
                <p>{s.intro}</p>
                <ul className="tick-list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a className="btn btn-burgundy" href={CONTACT.jobsUrl} target="_blank" rel="noopener">
              Find a Job
            </a>
            <Link className="btn btn-ghost" href="/contact-us/">
              Find Talent
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Sectors we recruit for</div>
          <h2>Specialists across the FMCG supply chain</h2>
          <p className="section-intro">
            From the shop floor to the boardroom, across food, beverage, bakery, grocery, wholesale, and distribution.
          </p>
          <SectorGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Quality guarantee</div>
          <h2>Our 5-stage candidate vetting process</h2>
          <p className="section-intro">
            No candidate reaches your desk without being thoroughly vetted. Our multi-stage screening saves you time
            and reduces hiring risk.
          </p>
          <ProcessSteps />
        </div>
      </section>

      <PartnerCarousel />
    </>
  );
}

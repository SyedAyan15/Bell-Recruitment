import type { Metadata } from "next";
import CvBanner from "@/components/CvBanner";
import MeetJulie from "@/components/MeetJulie";
import PageHero from "@/components/PageHero";
import PartnerCarousel from "@/components/PartnerCarousel";
import { VALUES } from "@/lib/content";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Northern Ireland's specialist FMCG recruitment consultancy"
        image="/images/hero-bg.png"
        imagePosition="70% 30%"
      >
        Founded in 1999 by Julie Bell, built on 25+ years of relationships with FMCG brands and the people who power
        them.
      </PageHero>

      <section className="section">
        <div className="container">
          <MeetJulie />
        </div>
      </section>

      <PartnerCarousel />

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">What we stand for</div>
          <h2>Recruitment with FMCG in our DNA</h2>
          <p className="section-intro">
            Every brief is personally managed, and every candidate is personally screened.
          </p>
          <div className="card-grid-3">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">
                  <i className={`fas ${v.icon}`} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CvBanner />
    </>
  );
}

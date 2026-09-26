import Image from "next/image";
import Link from "next/link";
import CvBanner from "@/components/CvBanner";
import MeetJulie from "@/components/MeetJulie";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProcessSteps from "@/components/ProcessSteps";
import SectorGrid from "@/components/SectorGrid";
import StatCounter from "@/components/StatCounter";
import Tilt from "@/components/Tilt";
import TestimonialGrid from "@/components/TestimonialGrid";
import { CANDIDATE_REASONS, CONTACT, PARTNERS, SERVICES, STATS, VALUES } from "@/lib/content";

// A few recognisable client logos for the "Trusted by" strip under the hero buttons.
const HERO_CLIENTS = PARTNERS.filter((p) => ["Tennent's NI", "Irwin's Bakery", "Henderson Group", "Richmond Marketing"].includes(p.alt));

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot" /> FMCG Recruitment Specialists &middot; Belfast
            </div>
            <h1>
              Sourcing the best <em>FMCG talent</em>
            </h1>
            <p>
              Julie Bell, Founder &amp; CEO of Bell Recruitment, has been delivering the best FMCG talent and
              Executive Search solutions for over 25 years, connecting leading food, beverage, and consumer
              goods brands with exceptional commercial talent across Northern Ireland, Ireland, and the UK.
            </p>
            <div className="btn-row">
              <a className="btn btn-gold" href={CONTACT.jobsUrl} target="_blank" rel="noopener">
                I am a jobseeker <i className="fas fa-arrow-right" />
              </a>
              <Link className="btn btn-outline" href="/employer/">
                I am an employer
              </Link>
            </div>
            <div className="hero-trust">
              <span>Trusted by</span>
              <div className="hero-trust-logos">
                {HERO_CLIENTS.map((p) => (
                  <Image key={p.src} src={p.src} alt={p.alt} width={p.w} height={p.h} />
                ))}
              </div>
            </div>
          </div>
          <Tilt className="hero-photo">
            <Image
              src="/images/hero-bg.png"
              alt="Julie Bell on a call with a client"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 520px"
              priority
            />
            <div className="hero-chip hero-chip-years">
              <strong>25+</strong>
              <span>
                years placing
                <br />
                FMCG talent
              </span>
            </div>
            <div className="photo-caption">
              <strong>Julie Bell</strong>
              <span>Founder &amp; CEO, Bell Recruitment</span>
            </div>
          </Tilt>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <StatCounter value={s.value} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-label">Why Bell Recruitment</div>
          <h2>FMCG recruitment, done right</h2>
          <p className="section-intro">
            We don&rsquo;t just fill vacancies. We find the people who move your business forward.
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

      <PartnerCarousel />

      <section className="section">
        <div className="container">
          <div className="section-label">Sectors we recruit for</div>
          <h2>Specialists across the FMCG supply chain</h2>
          <p className="section-intro">
            From the shop floor to the boardroom, across food, beverage, bakery, grocery, wholesale, and distribution.
          </p>
          <SectorGrid />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Our services</div>
          <h2>Specialist FMCG recruitment services</h2>
          <p className="section-intro">
            Whether you need a senior leader or a high-performing sales professional, our FMCG expertise delivers the
            right people, every time.
          </p>
          <div className="card-grid-3 mobile-swipe">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-media">
                  <Image src={s.image} alt="" fill sizes="(max-width: 900px) 100vw, 380px" />
                </div>
                <div className="service-header">
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                </div>
                <div className="service-body">
                  <ul className="tick-list">
                    {s.points.slice(-4).map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 40 }}>
            <Link className="btn btn-burgundy" href="/employer/">
              Explore our services
            </Link>
          </div>
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

      <section className="photo-banner handshake-banner">
        <div className="photo-banner-box">
          <h2>Recruitment, done right</h2>
          <p>
            With over 25 years&rsquo; experience, we&rsquo;ve built lasting partnerships with organisations that trust
            us to find the best people. We know recruitment inside out, and we genuinely care about getting it
            right.
          </p>
          <div className="btn-row">
            <Link className="btn btn-gold" href="/contact-us/">
              <i className="fas fa-address-book" /> Talk to us today
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-head">
            <div>
              <div className="section-label">For candidates</div>
              <h2>Why FMCG professionals choose Bell Recruitment</h2>
              <p className="section-intro">
                Over 25 years, we&rsquo;ve become the name that FMCG professionals across Northern Ireland turn to for
                their next career move.
              </p>
            </div>
            <div className="split-photo">
              <Image
                src="/images/cta-bg.jpg"
                alt="FMCG professional searching for roles on a laptop"
                width={1200}
                height={802}
                sizes="(max-width: 900px) 100vw, 520px"
              />
            </div>
          </div>
          <div className="why-grid">
            {CANDIDATE_REASONS.map((r) => (
              <div className="why-card" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <a className="btn btn-burgundy" href={CONTACT.jobsUrl} target="_blank" rel="noopener">
              View all jobs
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-center">
            <div className="section-label">Client testimonials</div>
            <h2>What our FMCG clients say</h2>
            <p className="section-intro">We don&rsquo;t ask you to take our word for it.</p>
          </div>
          <TestimonialGrid swipeOnMobile />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <MeetJulie />
        </div>
      </section>

      <CvBanner />
    </>
  );
}

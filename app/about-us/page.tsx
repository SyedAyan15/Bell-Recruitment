import type { Metadata } from "next";
import Image from "next/image";
import { ButtonRow } from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Founder from "@/components/Founder";
import PageHero from "@/components/PageHero";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProofStrip from "@/components/ProofStrip";
import { JULIE_ROLES, URLS } from "@/lib/content";

// Copy: "3. About Us" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "About Bell Recruitment | FMCG Recruitment Specialists Northern Ireland" },
  description:
    "Bell Recruitment is an FMCG executive search firm founded in 1999 by Julie Bell, who spent ten years at Pepsi, 7UP, Ballygowan and Budweiser before starting the business.",
};

const APPROACH = [
  {
    icon: "fa-clipboard-list",
    lead: "We start with the work, not the CV.",
    text: "Before searching, we agree what you sell, who to, the territory, and how success is measured.",
  },
  {
    icon: "fa-layer-group",
    lead: "We assess against five Cs.",
    text: "Compensation, Commute, Culture, Career and Competence. These decide whether a hire accepts the job and stays.",
  },
  { icon: "fa-bolt", lead: "We move quickly.", text: "The search starts within 24 hours of receiving your job description." },
  {
    icon: "fa-shield-halved",
    lead: "We stand behind the placement.",
    text: "If a candidate leaves within 90 days, we provide a replacement.",
  },
  {
    icon: "fa-user-tie",
    lead: "Julie manages the briefs herself.",
    text: "No call centre, no handing you over to a junior.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Bell Recruitment: FMCG Recruitment Specialists in Northern Ireland"
        image="/images/hero-bg.png"
        imagePosition="70% 30%"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
          { label: "Talk to Julie", href: URLS.contact },
        ]}
      >
        Bell Recruitment was founded in 1999 by Julie Bell with one aim: to be the best FMCG recruiter in Northern
        Ireland, by combining real FMCG experience with a personal, people-first approach. More than 25 years later,
        that is still how we work.
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <div className="section-label">Our story</div>
            <h2>Why Bell Recruitment exists</h2>
            <p>
              Before she started Bell, Julie Bell spent ten years working in FMCG, in promotions, merchandising and
              sales roles at Pepsi, 7UP, Ballygowan Water and Budweiser. She saw how FMCG hires succeed or fail in
              practice: <mark className="hl">on a sales route, in a depot, in front of a buyer</mark>.
            </p>
            <p>
              Most CVs don&rsquo;t show that. So Julie built a recruitment business around judging people the way an
              FMCG employer would, not just by job titles and previous employers.
            </p>
            <p>
              The business has grown steadily since 1999, built on long relationships with clients and candidates and a
              reputation for quality, integrity and results.
            </p>
          </div>
          <div className="split-photo split-photo-tall">
            <Image
              src="/images/supermarket-shelves.jpg"
              alt="Supermarket aisle stocked with FMCG brands"
              width={1920}
              height={1440}
              sizes="(max-width: 900px) 100vw, 540px"
            />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-label">What we do</div>
          <h2>FMCG executive search, and nothing else</h2>
          <p className="lead">
            Executive search is the only service we provide, and FMCG is the only sector. We find commercial and sales
            leaders for FMCG businesses across Northern Ireland, approach them directly (including people who
            aren&rsquo;t looking), assess each one and present a short list.
          </p>
          <p className="lead">
            Because we do one thing, we know the market: who&rsquo;s moving, who&rsquo;s performing, and what a role
            really involves.
          </p>
          <ButtonRow buttons={[{ label: "See our executive search service", href: URLS.services, variant: "gold" }]} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">How we work</div>
          <h2>The Bell approach</h2>
          <div className="feature-grid">
            {APPROACH.map((a) => (
              <div className="value-card" key={a.lead}>
                <div className="value-icon">
                  <i className={`fas ${a.icon}`} aria-hidden="true" />
                </div>
                <h3>{a.lead.replace(/\.$/, "")}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <ButtonRow buttons={[{ label: "See the full client process", href: URLS.hire }]} />
        </div>
      </section>

      <section className="section section-alt section-tight">
        <div className="container">
          <h2 className="center">Bell Recruitment at a glance</h2>
        </div>
      </section>
      <ProofStrip
        items={[
          { value: "1999", label: "Founded by Julie Bell", countUp: false },
          { value: "25+", label: "Years placing FMCG talent" },
          { value: "500+", label: "Placements" },
          { value: "13", label: "Brand partners" },
          { value: "20+", label: "Years with some clients" },
        ]}
      />

      <section className="section">
        <div className="container">
          <Founder title="Julie Bell, Founder and CEO">
            <p>
              Julie leads Bell Recruitment and personally manages client relationships. Alongside the business, she is
              involved in Northern Ireland&rsquo;s wider business community:
            </p>
            <ul className="roles-list">
              {JULIE_ROLES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Founder>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <div className="section-label">Our clients</div>
          <h2 className="center">Trusted by FMCG businesses across Northern Ireland</h2>
          <p className="section-intro center">
            We work with FMCG employers who come back to us year after year. Some of our client relationships go back
            more than 20 years, and we measure our work by whether they call us for the next hire.
          </p>
          <ButtonRow center buttons={[{ label: "Read what they say", href: URLS.testimonials }]} />
        </div>
      </section>
      <PartnerCarousel />

      <CtaBand
        title="Let’s talk about your next FMCG hire"
        image="/images/team-success.jpg"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
          { label: "Talk to Julie", href: URLS.contact },
        ]}
      />
    </>
  );
}

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
    lead: "We start with the work.",
    text: "Before searching, we agree what you sell, who to, the territory, and how success is measured.",
  },
  {
    icon: "fa-layer-group",
    lead: "We assess against five Cs.",
    text: "Compensation, Commute, Culture, Career and Competence. These decide whether a hire accepts the job and stays.",
  },
  { icon: "fa-bolt", lead: "We move quickly.", text: "The search starts within 24 hours of receiving your job description." },
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
            <h2>Built around people. Driven by relationships</h2>
            <p className="lead">
              From the beginning, the aim was never simply to fill vacancies. It was to understand people, understand
              businesses and build relationships that last. By combining genuine industry knowledge with a personal
              approach, Bell Recruitment set out to create a recruitment experience built on trust, integrity, quality
              and results.
            </p>
            <p>More than 25 years later, that philosophy remains at the heart of the business.</p>
            <p>
              Bell Recruitment has grown through long standing relationships with clients and candidates, many of whom
              have worked with us for years. We believe that successful recruitment is not about making the quickest
              placement. It is about making the right connection between the right person and the right organisation.
            </p>
            <p>
              Today, Bell Recruitment continues to bring together industry expertise, personal relationships and a
              genuine understanding of people.
            </p>
            <div className="story-close">
              <p>Because businesses are built by people.</p>
              <p>And at Bell Recruitment, people will always come first.</p>
            </div>
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
          <h2>FMCG executive search</h2>
          <p className="lead">
            We find commercial and sales leaders for FMCG businesses across Northern Ireland, approach them directly (including people who
            aren&rsquo;t looking), assess each one and present a short list.
          </p>
          <p className="lead">
            We know the market: who&rsquo;s moving, who&rsquo;s performing, and what a role
            really involves.
          </p>
          <ButtonRow buttons={[{ label: "See our executive search service", href: URLS.services, variant: "light" }]} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">How we work</div>
          <h2>The Bell Recruitment approach</h2>
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
          <Founder title="Julie Bell">
            <p>
              Bell Recruitment was launched in 1999 by Founder and CEO Julie Bell, with a clear vision: to be the best
              FMCG Recruiter by combining her FMCG industry knowledge with a personal, people-first approach.
            </p>
            <p>
              Now with over 25 years&rsquo; experience, the business has grown steadily, built on long-standing
              relationships with both clients and candidates, and a reputation for quality, integrity, and results.
            </p>
            <p>
              Before founding the business, Julie spent a decade working within FMCG for brands including Pepsi, 7UP,
              Ballygowan water and Budweiser, across promotional activity, merchandising, and sales roles &ndash;
              experience that continues to shape the way Bell Recruitment works with clients today.
            </p>
            <p>Julie is also active beyond the business, holding several notable roles:</p>
            <ul className="roles-list">
              {JULIE_ROLES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p>
              <strong>At Bell Recruitment, people are at the heart of everything we do.</strong>
            </p>
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
        ]}
      />
    </>
  );
}

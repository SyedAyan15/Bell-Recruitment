import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ProofStrip from "@/components/ProofStrip";
import TestimonialGrid from "@/components/TestimonialGrid";
import { URLS } from "@/lib/content";

// Copy: "4. Testimonials" in the client's Website Content document. Quotes stay word for word.

export const metadata: Metadata = {
  title: { absolute: "FMCG Recruitment Client Reviews | Bell Recruitment Northern Ireland" },
  description:
    "What FMCG employers say about Bell Recruitment: long-standing clients including Irwin’s Bakery, Richmond Marketing and Courtney and Nelson.",
};

const IN_COMMON = [
  { icon: "fa-rotate", lead: "Years of repeat work.", text: "Several have used Bell Recruitment for 20 years or more." },
  { icon: "fa-briefcase", lead: "Commercial hires.", text: "Sales and commercial roles come up in almost every quote." },
  { icon: "fa-phone", lead: "Reliability.", text: "Clients describe Bell Recruitment as the first call when a role opens." },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client reviews"
        title="What FMCG Employers Say About Bell Recruitment"
        image="/images/team-success.jpg"
        imagePosition="50% 30%"
      >
        We don&rsquo;t ask you to take our word for it. Here is what FMCG businesses across Northern Ireland say about
        working with Bell Recruitment.
      </PageHero>

      <ProofStrip
        items={[
          { value: "25+", label: "Years" },
          { value: "500+", label: "Placements" },
          { value: "13", label: "Brand partners" },
          { value: "20+", label: "Year client relationships" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-label">Long-standing clients</div>
          <h2>Repeat clients who have worked with us for years</h2>
          <TestimonialGrid ids={["richmond", "courtneyNelson"]} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">First call</div>
          <h2>Employers who go to Bell Recruitment first</h2>
          <TestimonialGrid ids={["irwins", "gmMarketing", "prepHouse"]} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What these clients have in common</h2>
          <div className="card-grid-3">
            {IN_COMMON.map((c) => (
              <div className="value-card" key={c.lead}>
                <div className="value-icon">
                  <i className={`fas ${c.icon}`} aria-hidden="true" />
                </div>
                <h3>{c.lead.replace(/\.$/, "")}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Hiring for an FMCG role?"
        image="/images/grocery-aisle.jpg"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
        ]}
      >
        Send us the job description and we start the search within 24 hours.
      </CtaBand>
    </>
  );
}

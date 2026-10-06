import type { Metadata } from "next";
import Image from "next/image";
import { ButtonRow } from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import RoleGroups from "@/components/RoleGroups";
import { URLS } from "@/lib/content";

// Copy: "2. Services (Executive Search)" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "FMCG Executive Search Northern Ireland | Bell Recruitment" },
  description: "Confidential FMCG executive search in Northern Ireland since 1999. Search begins within 24 hours.",
};

const INCLUDES = [
  { icon: "fa-crosshairs", lead: "Targeted headhunting.", text: "We approach people directly, backed by our knowledge of the NI FMCG market." },
  { icon: "fa-clipboard-list", lead: "A brief built around your business.", text: "We agree the role, territory, customers and targets with you." },
  { icon: "fa-user-lock", lead: "A confidential process.", text: "From the first approach to the offer." },
  { icon: "fa-layer-group", lead: "The 5C framework.", text: "Every candidate is assessed on Compensation, Commute, Culture, Career and Competence." },
  { icon: "fa-list-check", lead: "A focused shortlist.", text: "Only the strongest matches, with notes on why each one fits." },
  { icon: "fa-handshake", lead: "Support to the start date.", text: "Interviews, negotiation and onboarding." },
  { icon: "fa-shield-halved", lead: "A 90-day replacement guarantee.", text: "If the person leaves within 90 days, we provide a replacement." },
];

const WHY = [
  { lead: "Founded in 1999 by someone from the trade.", text: "Julie spent ten years in FMCG before starting Bell Recruitment." },
  { lead: "Long relationships.", text: "Many of our clients have worked with us for years, some for over 20, and come to us first when a role opens." },
  { lead: "Backed up.", text: "A replacement if the hire leaves within 90 days." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our service"
        title="FMCG Executive Search in Northern Ireland"
        image="/images/handshake-bg.webp"
        buttons={[{ label: "Discuss a vacancy", href: URLS.contact }]}
      >
        For the hires that decide how your FMCG business performs with customers, the best candidates are usually
        already in a good job and not applying anywhere. We find them, approach them directly and assess each one
        before you meet them. Julie Bell founded Bell Recruitment after a decade at Pepsi, 7UP, Ballygowan and
        Budweiser.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-label">What&rsquo;s included</div>
          <h2>What FMCG executive search with Bell Recruitment includes</h2>
          <div className="feature-grid">
            {INCLUDES.map((f) => (
              <div className="value-card" key={f.lead}>
                <div className="value-icon">
                  <i className={`fas ${f.icon}`} aria-hidden="true" />
                </div>
                <h3>{f.lead.replace(/\.$/, "")}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Roles we recruit</div>
          <h2>FMCG roles we recruit in Northern Ireland</h2>
          <RoleGroups
            groups={[
              { label: "Commercial and sales leadership", roles: ["Commercial Director", "Head of Sales", "Commercial Manager"] },
              {
                label: "Sales and business development",
                roles: ["Sales Executive", "Sales Representative", "Business Development Manager", "Business Development Executive"],
              },
              {
                label: "National and key accounts",
                roles: ["National Account Manager", "Key Account Manager", "On-Trade Account Manager", "Off-Trade Account Manager"],
              },
              {
                label: "Brand and marketing",
                roles: ["Marketing Director", "Marketing Manager", "Senior Brand Manager", "Brand Manager", "Assistant Brand Manager"],
              },
              { label: "Commercial support", roles: ["Commercial Executive", "Commercial Admin"] },
              {
                label: "Operations, product and finance within FMCG businesses",
                roles: [
                  "Production Manager",
                  "Product Development Manager",
                  "Management Accountant",
                  "Assistant Accountant",
                  "Accounts Assistant",
                ],
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">The process</div>
          <h2>How our FMCG executive search works</h2>
          <ProcessSteps
            steps={[
              {
                title: "Brief",
                text: (
                  <>
                    Send us the job description and we start the search <mark className="hl">within 24 hours</mark>. We
                    agree what you sell, to whom, the territory and how performance is measured.
                  </>
                ),
              },
              { title: "Search", text: "We look through our network and approach people who aren’t applying for jobs." },
              { title: "Assess", text: "Every candidate goes through the 5C framework." },
              { title: "Shortlist", text: "You see the strongest matches, with the context you need to decide." },
              {
                title: "Offer and start",
                text: "We support interviews, negotiation and onboarding. If the hire leaves within 90 days, we provide a replacement.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <div className="section-label">When to call us</div>
            <h2>When FMCG employers call us</h2>
            <ul className="tick-list">
              <li>You need a Key Account Manager who already knows the NI retail and wholesale trade</li>
              <li>You&rsquo;re replacing a sales rep and can&rsquo;t afford a long gap in the territory</li>
              <li>You&rsquo;re opening a new channel, such as on-trade, off-trade or foodservice</li>
              <li>The role is senior and can&rsquo;t be advertised</li>
              <li>Previous adverts brought plenty of CVs but no one who could do the job</li>
            </ul>
          </div>
          <div className="split-photo">
            <Image
              src="/images/team-meeting.jpg"
              alt="FMCG team meeting about a new hire"
              width={1920}
              height={1260}
              sizes="(max-width: 900px) 100vw, 540px"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Why Bell Recruitment</div>
          <h2>Why FMCG employers choose Bell Recruitment</h2>
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-card" key={w.lead}>
                <h3>{w.lead}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container container-faq">
          <div className="section-label">FAQs</div>
          <h2>Frequently asked questions</h2>
          <FaqList
            items={[
              {
                q: "What is executive search?",
                a: "Approaching suitable people directly, including those not looking for a job, instead of waiting for applications. It’s usually confidential.",
              },
              { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
              { q: "Do you offer a replacement guarantee?", a: "Yes. If a candidate leaves within 90 days, we provide a replacement." },
              {
                q: "What should I give you when briefing a vacancy?",
                a: "The job description, salary and package, territory and travel, reporting line, what’s essential versus preferred, how performance is measured, and your interview process.",
              },
            ]}
          />
          <ButtonRow buttons={[{ label: "See all FAQs", href: URLS.faqs, variant: "ghost" }]} />
        </div>
      </section>

      <CtaBand
        title="Tell us about the role you need to fill"
        image="/images/warehouse-aisle.jpg"
        buttons={[{ label: "Discuss a vacancy", href: URLS.contact }]}
      />
    </>
  );
}

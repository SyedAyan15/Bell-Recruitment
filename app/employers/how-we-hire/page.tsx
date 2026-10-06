import type { Metadata } from "next";
import { ButtonRow } from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import { URLS } from "@/lib/content";

// Copy: "5. Client Process" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "FMCG Recruitment Process for Employers | Bell Recruitment" },
  description:
    "How Bell Recruitment hires for FMCG employers in Northern Ireland: search begins in 24 hours, with 5C candidate assessment.",
};

const FASTER = [
  {
    icon: "fa-list-check",
    lead: "Agree the essentials early.",
    text: "A shortlist is quickest when “must have” and “nice to have” are separated at the start.",
  },
  {
    icon: "fa-bolt",
    lead: "Move quickly on strong candidates.",
    text: "Good FMCG people are often in demand, and delays lose them.",
  },
  {
    icon: "fa-comments",
    lead: "Give feedback within a few days.",
    text: "It keeps candidates engaged and helps us refine the search.",
  },
];

export default function HowWeHirePage() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title="How Bell Recruitment Hires for FMCG Employers"
        image="/images/interview.jpg"
        imagePosition="50% 35%"
      >
        Send us the job description and we start the search within 24 hours. This page explains what happens from
        your first call to your new hire&rsquo;s start date, so you know what to expect at each step.
      </PageHero>

      <section className="section">
        <div className="container with-aside">
          <div>
            <div className="section-label">Step by step</div>
            <h2>Our FMCG executive search process, step by step</h2>
            <ProcessSteps
              vertical
              steps={[
                {
                  title: "The brief",
                  text: (
                    <p>
                      We talk to you about the role before we search. What do you sell, and to whom? Is the job new
                      business, account management or both? Which territory does it cover and how much travel is
                      involved? How is performance measured, and which experience is essential versus preferred?
                    </p>
                  ),
                },
                {
                  title: "The search begins within 24 hours",
                  text: (
                    <p>
                      Once we have the job description, we start. We search our network and approach people directly,
                      including those who aren&rsquo;t looking for a job. Many of the strongest FMCG candidates never
                      apply to adverts.
                    </p>
                  ),
                },
                {
                  title: "Assessment against the 5C framework",
                  text: (
                    <>
                      <p>Every candidate is assessed on five things:</p>
                      <ul className="tick-list">
                        <li>
                          <strong>Compensation.</strong> Does the package work for them?
                        </li>
                        <li>
                          <strong>Commute.</strong> Is the territory or location realistic?
                        </li>
                        <li>
                          <strong>Culture.</strong> Will they fit your team and way of working?
                        </li>
                        <li>
                          <strong>Career.</strong> Does the role move them forward?
                        </li>
                        <li>
                          <strong>Competence.</strong> Can they do the job, based on results, customers and targets?
                        </li>
                      </ul>
                      <p>We also take references.</p>
                    </>
                  ),
                },
                {
                  title: "The shortlist",
                  text: (
                    <p>
                      You get the strongest matches only, with notes on each person: what they&rsquo;ve achieved, what
                      they&rsquo;re looking for and why we think they fit.
                    </p>
                  ),
                },
                {
                  title: "Interviews and offer",
                  text: (
                    <p>
                      We coordinate interviews, collect feedback, support salary and package negotiation, and keep both
                      sides informed until an offer is accepted.
                    </p>
                  ),
                },
                {
                  title: "Start date and 90-day guarantee",
                  text: (
                    <p>
                      We stay in touch up to the start date. If a candidate we place leaves within 90 days, we
                      provide a replacement.
                    </p>
                  ),
                },
              ]}
            />
          </div>
          <aside className="aside-card" aria-label="At a glance">
            <div className="aside-item">
              <strong>24 hours</strong>
              <span>The search begins within 24 hours of receiving your job description.</span>
            </div>
            <div className="aside-item">
              <strong>5C</strong>
              <span>Compensation, Commute, Culture, Career and Competence, plus references.</span>
            </div>
            <ButtonRow buttons={[{ label: "Send us a vacancy", href: URLS.contact, variant: "light" }]} />
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-top">
          <div>
            <div className="section-label">Your brief</div>
            <h2>What to have ready when you brief us</h2>
            <ul className="tick-list">
              <li>The job description</li>
              <li>Salary and package, including commission, car or van and benefits</li>
              <li>Territory, travel and working pattern</li>
              <li>Reporting line</li>
              <li>What&rsquo;s essential and what&rsquo;s only preferred</li>
              <li>How performance is measured</li>
              <li>Your interview stages and who takes part</li>
            </ul>
            <p className="note">
              Missing one of these? Send what you have and we&rsquo;ll work through the rest on the call.
            </p>
          </div>
          <div>
            <div className="section-label">Speed</div>
            <h2>What makes a search go faster</h2>
            <div className="stack-cards">
              {FASTER.map((f) => (
                <div className="value-card value-card-row" key={f.lead}>
                  <div className="value-icon">
                    <i className={`fas ${f.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{f.lead.replace(/\.$/, "")}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-faq">
          <div className="section-label">FAQs</div>
          <h2>Frequently asked questions</h2>
          <FaqList
            items={[
              { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
              {
                q: "How do you find candidates?",
                a: "We start with your brief, search our network and approach people directly, including those who aren’t applying for jobs.",
              },
              {
                q: "How do you check candidates?",
                a: "Through our 5C framework: Compensation, Commute, Culture, Career and Competence, plus references.",
              },
              { q: "Can the search be confidential?", a: "Yes. Our process is confidential from first approach to offer." },
            ]}
          />
          <ButtonRow buttons={[{ label: "See all FAQs", href: URLS.faqs, variant: "ghost" }]} />
        </div>
      </section>

      <CtaBand
        title="Ready to brief us on your next FMCG hire?"
        image="/images/warehouse-logistics.jpg"
        buttons={[{ label: "Send us a vacancy", href: URLS.contact }]}
      />
    </>
  );
}

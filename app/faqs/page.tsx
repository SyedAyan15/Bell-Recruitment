import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FaqList, { faqAnswerText, type Faq } from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import { CONTACT, URLS } from "@/lib/content";

// Copy: "7. FAQs" in the client's Website Content document. This is the only page with
// FAQ schema (client instruction); it is generated from the same questions shown below.

export const metadata: Metadata = {
  title: { absolute: "FMCG Recruitment FAQs | Bell Recruitment Northern Ireland" },
  description:
    "Answers for FMCG candidates and employers in Northern Ireland: how Bell Recruitment works and the 5C framework.",
};

const ROLES_ANSWER =
  "Commercial Directors, Heads of Sales, Commercial Managers, Sales Executives and Representatives, Business Development Managers and Executives, National, Key, On-Trade and Off-Trade Account Managers, Marketing and Brand Managers, and commercial roles inside FMCG businesses.";

const CANDIDATE_FAQS: Faq[] = [
  { q: "Which FMCG roles does Bell Recruitment recruit?", a: ROLES_ANSWER },
  {
    q: "Do I need FMCG experience?",
    a: "It depends on the role. Some employers want direct FMCG sales experience and others will consider transferable experience, such as retail or wholesale.",
  },
  {
    q: "Do candidates pay Bell Recruitment anything?",
    a: "No. Bell Recruitment never charges candidates. Our fee is paid by the employer.",
  },
  {
    q: "What happens after I upload my CV?",
    a: "We read your CV, check it against the roles we’re working on and call you if there’s a possible fit. We talk through the role with you before your details go to any employer.",
  },
  {
    q: "Will you send my CV to an employer without asking me?",
    a: "No. We speak to you first, and your CV only goes to an employer with your agreement.",
  },
  {
    q: "Do you have jobs that aren’t advertised?",
    a: "Yes. Many roles are filled before they reach a job board, because employers ask us to approach suitable people directly.",
  },
  {
    q: "What is the 5C framework?",
    a: "The five things we check before putting you forward: Compensation, Commute, Culture, Career and Competence. It helps make sure a role suits you as well as the employer.",
  },
  {
    q: "What should I include on my FMCG CV?",
    a: "The territory or accounts you managed, the customers you sold to (retail, wholesale, foodservice, on-trade, off-trade), the products or categories you handled, your sales targets and what you achieved against them, and any growth you delivered, with numbers where you can.",
  },
];

const EMPLOYER_FAQS: Faq[] = [
  {
    q: "What does Bell Recruitment do?",
    a: "We provide FMCG executive search in Northern Ireland. We find commercial and sales leaders for FMCG businesses, approach them directly, assess each one and send you a short list. It’s the only service we provide.",
  },
  {
    q: "What is executive search?",
    a: "Executive search means approaching suitable people directly, including those not looking for a job, instead of waiting for applications. It’s usually confidential.",
  },
  { q: "Which FMCG roles do you recruit?", a: ROLES_ANSWER },
  {
    q: "How does Bell Recruitment find candidates?",
    a: "We start with your brief, then search from there:",
    steps: [
      "Brief. We agree what you sell, to whom, the territory, how performance is measured and which experience is essential.",
      "Search. We look through our network and approach people who aren’t applying for jobs.",
      "Assess. Every candidate goes through our 5C framework: Compensation, Commute, Culture, Career and Competence.",
      "Shortlist. You get the strongest matches, with notes on why each one fits.",
      "Offer. We support interviews, negotiation and the move to a start date.",
    ],
  },
  { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
  {
    q: "How do you check candidates?",
    a: "Through our 5C framework: Compensation, Commute, Culture, Career and Competence, plus references. The full process is on our Client Process page.",
    link: { label: "See the Client Process page", href: URLS.hire },
  },
  {
    q: "Do you offer a replacement guarantee?",
    a: "Yes. We assess every candidate through our 5C framework to put forward the right person for the job. If the candidate leaves within 90 days, we provide a replacement.",
  },
  { q: "Can you recruit confidentially for a senior role?", a: "Yes. Our process is confidential from first approach to offer." },
  {
    q: "What should I give you when briefing a vacancy?",
    a: "The job description, salary and package, territory and travel, reporting line, what’s essential versus preferred, how performance is measured, and your interview process.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...CANDIDATE_FAQS, ...EMPLOYER_FAQS].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: faqAnswerText(f) },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PageHero eyebrow="FAQs" title="FMCG Recruitment FAQs">
        Answers to the questions we hear most from FMCG candidates and employers in Northern Ireland. Can&rsquo;t find
        yours? Call Julie on <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
      </PageHero>

      <nav className="jump-links" aria-label="FAQ sections">
        <a href="#candidates">
          <i className="fas fa-user" aria-hidden="true" /> Candidate FAQs
        </a>
        <a href="#employers">
          <i className="fas fa-building" aria-hidden="true" /> Employer FAQs
        </a>
      </nav>

      <section className="section anchor-target" id="candidates">
        <div className="container container-faq">
          <div className="section-label">For candidates</div>
          <h2>Candidate FAQs</h2>
          <FaqList items={CANDIDATE_FAQS} />
        </div>
      </section>

      <section className="section section-alt anchor-target" id="employers">
        <div className="container container-faq">
          <div className="section-label">For employers</div>
          <h2>Employer FAQs</h2>
          <FaqList items={EMPLOYER_FAQS} />
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        image="/images/team-meeting.jpg"
        buttons={[
          { label: "Talk to Julie", href: URLS.contact },
          { label: "Hire FMCG talent", href: URLS.hire },
        ]}
      />
    </>
  );
}

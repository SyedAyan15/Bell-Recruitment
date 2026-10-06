import type { Metadata } from "next";
import Image from "next/image";
import { ButtonRow } from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import FiveCs from "@/components/FiveCs";
import LetterReveal from "@/components/LetterReveal";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import RoleGroups from "@/components/RoleGroups";
import { ROLE_GROUPS, URLS } from "@/lib/content";

// Copy: "6. Candidate Process" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "FMCG Jobs Northern Ireland: How Bell Recruitment Works for Candidates" },
  description:
    "How to get an FMCG job in Northern Ireland through Bell Recruitment: what happens after you send your CV, how we match you to roles, and what to expect.",
};

export default function CandidateProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="For candidates"
        title="FMCG Jobs in Northern Ireland: How Bell Recruitment Works for Candidates"
        image="/images/cta-bg.jpg"
        buttons={[
          { label: "Upload your CV", href: URLS.cvUpload },
        ]}
      >
        Bell Recruitment has placed FMCG people in Northern Ireland since 1999. Many of the roles we work on are never
        advertised, because employers ask us to approach the right person directly. This page explains what happens
        when you register with us, so you know what to expect before you send your CV.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2>How does an FMCG recruitment agency work for candidates?</h2>
          <p className="section-intro">
            We&rsquo;re hired by FMCG employers to fill a specific role, so we only put you forward when there&rsquo;s a
            genuine fit.
          </p>
          <ProcessSteps
            steps={[
              {
                title: "You register",
                text: "Send us your CV and tell us what you’re looking for: the type of role, the area you can cover, and what you need from the package.",
              },
              {
                title: "We talk to you",
                text: "We speak to you about your career so far, looking at your customers, territories, targets and results.",
              },
              {
                title: "We match you to roles",
                text:
                  "When an employer brief fits your experience, we call you first and talk it through before anything goes further.",
              },
              {
                title: "We assess the fit using the 5C framework",
                text: "We go through the same five Cs we use with employers, so you know whether the role works for you before you spend time on interviews.",
              },
              {
                title: "Interviews and offer",
                text: "We arrange interviews and support you through package negotiation until an offer is agreed.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-label">The 5C framework</div>
          <h2>
            <LetterReveal text="The five things we check before you take an FMCG role" />
          </h2>
          <p className="section-intro">
            A role can look right on paper and still be wrong for you. Before we put anyone forward, we talk through:
          </p>
          <FiveCs
            items={[
              { name: "Compensation", text: "Is the full package right for you: basic, commission, car or van, benefits?" },
              { name: "Commute", text: "Is the territory or location realistic, including daily driving?" },
              { name: "Culture", text: "Will the team and management style suit you?" },
              { name: "Career", text: "Does the role lead somewhere you want to go?" },
              { name: "Competence", text: "Does your experience match what the job demands?" },
            ]}
          />
          <p className="callout">
            <i className="fas fa-shield-halved" aria-hidden="true" />
            <span>
              That&rsquo;s why people we place tend to stay, so we take care to get the match right.
            </span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container answer-grid">
          <div className="answer-card">
            <div className="answer-head">
              <div className="value-icon">
                <i className="fas fa-file-lines" aria-hidden="true" />
              </div>
              <div className="section-label">After you apply to Bell Recruitment</div>
            </div>
            <h2>What happens after I send my CV to a recruitment agency?</h2>
            <ol className="num-list">
              <li>We read your CV and check it against the roles we&rsquo;re working on.</li>
              <li>If there&rsquo;s a possible fit, we contact you.</li>
              <li>We talk through the role with you before your details go to any employer.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Roles we recruit</div>
          <h2>What FMCG jobs does Bell Recruitment recruit in Northern Ireland?</h2>
          <RoleGroups groups={ROLE_GROUPS} />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <div className="section-label">CV tips</div>
            <h2>What to include in your FMCG CV</h2>
            <p className="lead">Employers in this sector look for specifics. Include:</p>
            <ul className="tick-list">
              <li>The territory or accounts you managed</li>
              <li>The customers you sold to (retail, wholesale, foodservice, on-trade, off-trade)</li>
              <li>The products or categories you handled</li>
              <li>Sales targets and what you achieved against them</li>
              <li>Any growth you delivered, with numbers where you can</li>
            </ul>
          </div>
          <div className="split-photo">
            <Image
              src="/images/interview.jpg"
              alt="Recruiter talking through a candidate’s experience and taking notes"
              width={1920}
              height={1280}
              sizes="(max-width: 900px) 100vw, 540px"
            />
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
                q: "Do I need FMCG experience?",
                a: "It depends on the role. Some employers want direct FMCG sales experience and others will consider transferable experience, such as retail or wholesale.",
              },
              {
                q: "Do you have jobs that aren’t advertised?",
                a: "Yes. Many roles are filled before they reach a job board, because employers ask us to approach suitable people directly.",
              },
            ]}
          />
          <ButtonRow buttons={[{ label: "See all FAQs", href: URLS.faqs, variant: "ghost" }]} />
        </div>
      </section>

      <CtaBand
        title="Looking for your next FMCG role in Northern Ireland?"
        image="/images/grocery-aisle.jpg"
        buttons={[
          { label: "Upload your CV", href: URLS.cvUpload },
        ]}
      >
        Send your CV and we&rsquo;ll talk it through, or call Julie directly.
      </CtaBand>
    </>
  );
}

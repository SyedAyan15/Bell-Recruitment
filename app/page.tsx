import type { Metadata } from "next";
import Image from "next/image";
import { ButtonRow } from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import FiveCs from "@/components/FiveCs";
import Founder from "@/components/Founder";
import LetterReveal from "@/components/LetterReveal";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProofStrip from "@/components/ProofStrip";
import RoleGroups from "@/components/RoleGroups";
import TestimonialGrid from "@/components/TestimonialGrid";
import Tilt from "@/components/Tilt";
import { PARTNERS, URLS } from "@/lib/content";

// Copy: "1. Home" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "FMCG Recruitment Northern Ireland | Bell Recruitment" },
  description:
    "FMCG executive search in Northern Ireland since 1999. Sales, key account and commercial hires. Search begins within 24 hours.",
};

// The document names these logos for the hero ("and others" are in the carousel below).
const HERO_CLIENTS = PARTNERS.filter((p) =>
  ["Tennent's NI", "Irwin's Bakery", "Henderson Group", "Richmond Marketing"].includes(p.alt),
);

const LOCATIONS = ["Belfast", "Bangor", "Lisburn", "Newry", "Portadown", "Ballymena", "Derry/Londonderry"];

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
            <ButtonRow
              buttons={[
                { label: "Hire FMCG talent", href: URLS.hire, variant: "light" },
                { label: "Find FMCG jobs", href: URLS.jobs, variant: "outline" },
                { label: "Submit your CV", href: URLS.cvUpload, variant: "outline" },
              ]}
            />
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

      <ProofStrip
        items={[
          { value: "1999", label: "Recruiting since", countUp: false },
          { value: "500+", label: "Placements" },
          { value: "13", label: "Brand partners" },
          { value: "20+", label: "Year client relationships" },
          { value: "90-day", label: "Replacement guarantee" },
        ]}
      />

      <PartnerCarousel />

      <section className="section">
        <div className="container">
          <div className="section-label">Roles we recruit</div>
          <h2>FMCG sales and commercial recruitment in Northern Ireland</h2>
          <p className="section-intro">
            Whether a hire works depends on the customers, the territory and the targets, not just the job title.
            These are the roles we recruit:
          </p>
          <RoleGroups
            groups={[
              { label: "Leadership", roles: ["Commercial Director", "Head of Sales", "Commercial Manager"] },
              {
                label: "Sales and business development",
                roles: [
                  "Sales Executive",
                  "Sales Representative",
                  "Business Development Manager",
                  "Business Development Executive",
                ],
              },
              {
                label: "Key accounts",
                roles: [
                  "National Account Manager",
                  "Key Account Manager",
                  "On-Trade Account Manager",
                  "Off-Trade Account Manager",
                ],
              },
              {
                label: "Brand and marketing",
                roles: ["Marketing Director", "Marketing Manager", "Brand Manager", "Assistant Brand Manager"],
              },
              {
                // The home page copy gives only this heading; the titles come from the
                // Services page's "Commercial support" and "Operations, product and finance" groups.
                label: "Commercial, operations and finance roles inside FMCG businesses",
                roles: [
                  "Commercial Executive",
                  "Commercial Admin",
                  "Production Manager",
                  "Product Development Manager",
                  "Management Accountant",
                  "Assistant Accountant",
                  "Accounts Assistant",
                ],
              },
            ]}
          />
          <ButtonRow
            buttons={[{ label: "Browse FMCG jobs in Northern Ireland", href: URLS.jobs }]}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <div className="section-label">For employers</div>
            <h2>Hiring in FMCG? We start with the work behind the vacancy</h2>
            <p className="lead">
              Send us the job description and we start the search <mark className="hl">within 24 hours</mark>.
              First, we want to know:
            </p>
            <ul className="q-list">
              <li>What do you sell, and who are your customers?</li>
              <li>Is the role new business, account management, or both?</li>
              <li>Which territory does it cover, and how much travel is involved?</li>
              <li>How is performance measured?</li>
              <li>Which experience is essential, and which is only preferred?</li>
            </ul>
            <p className="list-heading">Employers usually call us when they:</p>
            <ul className="tick-list">
              <li>Need a Key Account Manager who already knows the NI retail and wholesale trade</li>
              <li>Are replacing a sales rep and can&rsquo;t afford a long gap in the territory</li>
              <li>Are opening a new channel, such as on-trade, off-trade or foodservice</li>
              <li>Need a confidential senior hire that can&rsquo;t be advertised</li>
            </ul>
            <ButtonRow buttons={[{ label: "How we hire for you", href: URLS.hire }]} />
          </div>
          <div className="split-photo split-photo-tall">
            <Image
              src="/images/interview.jpg"
              alt="Briefing meeting about an FMCG vacancy"
              width={1920}
              height={1280}
              sizes="(max-width: 900px) 100vw, 540px"
            />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-label">The 5C framework</div>
          <h2>
            <LetterReveal text="How we make sure a hire lasts: the 5C framework" />
          </h2>
          <p className="section-intro">
            A good CV doesn&rsquo;t make a good hire. Every candidate we put forward is assessed against five Cs:
          </p>
          <FiveCs
            items={[
              { name: "Compensation", text: "Does the package work for them: basic, commission, car and benefits?" },
              { name: "Commute", text: "Is the territory or location realistic, including daily travel?" },
              { name: "Culture", text: "Will they fit your team, management style and way of working?" },
              { name: "Career", text: "Does the role move them forward, so they’ll want to stay?" },
              { name: "Competence", text: "Can they do the job, based on results, customers, category and targets?" },
            ]}
          />
          <p className="callout">
            <i className="fas fa-shield-halved" aria-hidden="true" />
            <span>
              And if a candidate we place leaves within 90 days, we provide a replacement.
            </span>
          </p>
          <ButtonRow buttons={[{ label: "See the full process", href: URLS.hire, variant: "light" }]} />
        </div>
      </section>

      <section className="section">
        <div className="container split split-reverse">
          <div className="split-photo">
            <Image
              src="/images/cta-bg.jpg"
              alt="FMCG professional looking for a new role on a laptop"
              width={1200}
              height={802}
              sizes="(max-width: 900px) 100vw, 540px"
            />
          </div>
          <div>
            <div className="section-label">For candidates</div>
            <h2>Looking for an FMCG job in Northern Ireland?</h2>
            <p className="lead">
              Many FMCG roles are filled before they&rsquo;re advertised. Register with Bell Recruitment and we&rsquo;ll talk
              through each opportunity against five things that decide whether a job is right: compensation, commute,
              culture, career and competence.{" "}
              <mark className="hl">We don&rsquo;t send your CV to an employer without speaking to you first.</mark>
            </p>
            <ButtonRow
              buttons={[
                { label: "Learn more about the candidate process", href: URLS.candidates },
                { label: "Upload your CV", href: URLS.cvUpload, variant: "ghost" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="photo-banner handshake-banner">
        <div className="photo-banner-box">
          <h2>
            <LetterReveal text="FMCG Executive Search" />
          </h2>
          <p>
            Executive search is the one thing we do, and we do it for FMCG only. We approach people directly,
            including those who aren&rsquo;t looking, assess them against our 5C framework, and send you a short list.
            The whole process is confidential, from first approach to offer.
          </p>
          <ButtonRow buttons={[{ label: "Learn more about FMCG executive search", href: URLS.services, variant: "light" }]} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <div className="section-label">Where we work</div>
          <h2 className="center">Recruiting for FMCG employers across Northern Ireland</h2>
          <p className="section-intro center">
            We work with FMCG businesses throughout Northern Ireland.
          </p>
          <ul className="loc-pills" aria-label="Locations">
            {LOCATIONS.map((l) => (
              <li className="loc-pill" key={l}>
                <i className="fas fa-location-dot" aria-hidden="true" /> {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Founder title="Meet Julie Bell, founder of Bell Recruitment">
            <p>
              Before founding Bell Recruitment, Julie worked in promotions, merchandising and sales at Pepsi, 7UP,
              Ballygowan Water and Budweiser. That&rsquo;s why we judge a candidate by how they&rsquo;d perform on a
              route, in a depot or in front of a buyer, not only by their CV. She sits on the NI Chamber of Commerce
              council and the Institute of Directors committee, and is a board member of CCEA.
            </p>
            <ButtonRow buttons={[{ label: "More about Julie", href: URLS.aboutUs }]} />
          </Founder>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head-center">
            <div className="section-label">Client testimonials</div>
            <h2>What FMCG employers say about Bell Recruitment</h2>
          </div>
          <TestimonialGrid ids={["irwins", "richmond", "courtneyNelson"]} swipeOnMobile />
          <ButtonRow center buttons={[{ label: "Read more client reviews", href: URLS.testimonials }]} />
        </div>
      </section>

      <section className="section">
        <div className="container container-faq">
          <div className="section-label">FAQs</div>
          <h2>Frequently asked questions</h2>
          <FaqList
            items={[
              {
                q: "What does Bell Recruitment specialise in?",
                a: "FMCG executive search in Northern Ireland, covering sales, key account, brand and commercial roles.",
              },
              { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
              {
                q: "Do you offer a replacement guarantee?",
                a: "Yes. If a candidate we place leaves within 90 days, we provide a replacement.",
              },
              {
                q: "Do I need FMCG experience to apply?",
                a: "It depends on the vacancy. Some employers require it and others consider transferable sales experience.",
              },
            ]}
          />
          <ButtonRow buttons={[{ label: "See all FAQs", href: URLS.faqs, variant: "ghost" }]} />
        </div>
      </section>

      <CtaBand
        title="Talk to Julie"
        image="/images/grocery-aisle.jpg"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
          { label: "Find FMCG jobs", href: URLS.jobs },
        ]}
      />
    </>
  );
}

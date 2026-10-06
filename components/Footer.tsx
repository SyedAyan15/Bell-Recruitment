import Image from "next/image";
import Link from "next/link";
import { CONTACT, URLS } from "@/lib/content";

// Site footer: "Find a Job / Find Talent" call to action, link columns and contact details.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <h2>Sourcing the best FMCG talent.</h2>
        <div className="btn-row">
          <a className="btn btn-light" href={URLS.jobs}>
            Find FMCG jobs
          </a>
          <Link className="btn btn-outline" href={URLS.hire}>
            Hire FMCG talent
          </Link>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/images/logo-small.png" alt="Bell Recruitment" width={300} height={140} />
          <p>
            FMCG executive search in Northern Ireland since 1999. Commercial and sales leaders for FMCG
            businesses, found by someone from the trade.
          </p>
        </div>
        <div className="footer-col">
          <h4>Hiring &amp; jobs</h4>
          <Link href={URLS.services}>FMCG Executive Search</Link>
          <Link href={URLS.hire}>How we hire</Link>
          <Link href={URLS.candidates}>For candidates</Link>
          <a href={URLS.jobs}>FMCG jobs</a>
          <Link href={URLS.cvUpload}>Upload your CV</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href={URLS.aboutUs}>About Us</Link>
          <Link href={URLS.testimonials}>Testimonials</Link>
          <Link href={URLS.faqs}>FAQs</Link>
          <Link href="/blogs/">Blogs</Link>
          <Link href="/privacy-policy/">Privacy Policy</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <Link href={URLS.contact}>Contact us</Link>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <div className="footer-social">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Bell Recruitment. All rights reserved.</span>
        <span>{CONTACT.address}</span>
      </div>
    </footer>
  );
}

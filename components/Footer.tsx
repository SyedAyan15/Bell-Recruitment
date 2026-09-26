import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/content";

// Site footer: "Find a Job / Find Talent" call to action, link columns and contact details.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <h2>Sourcing the best FMCG talent.</h2>
        <div className="btn-row">
          <a className="btn btn-gold" href={CONTACT.jobsUrl} target="_blank" rel="noopener">
            Find a Job
          </a>
          <Link className="btn btn-outline" href="/employer/">
            Find Talent
          </Link>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/images/logo-small.png" alt="Bell Recruitment" width={300} height={140} />
          <p>
            Northern Ireland&rsquo;s specialist FMCG recruitment consultancy. Connecting brands with exceptional
            talent since 1999.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="/employer/">Executive Search</Link>
          <Link href="/employer/">Permanent Recruitment</Link>
          <Link href="/employer/">Field Marketing</Link>
          <Link href="/cv-upload/">Upload CV</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about-us/">About Us</Link>
          <Link href="/testimonials/">Testimonials</Link>
          <Link href="/blogs/">Blogs</Link>
          <Link href="/privacy-policy/">Privacy Policy</Link>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
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

import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SubmitForm from "@/components/SubmitForm";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Let's talk FMCG recruitment" image="/images/grocery-aisle.jpg">
        Whether you&rsquo;re hiring or looking for your next role, we&rsquo;d love to hear from you.
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <Image
              src="/images/julie-bell.jpg"
              alt="Julie Bell, Founder and CEO"
              width={870}
              height={1305}
              sizes="(max-width: 900px) 100vw, 480px"
            />
            <div className="body">
              <h3>Speak to Julie directly</h3>
              <div className="contact-item">
                <i className="fas fa-phone" />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-location-dot" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="social-row">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>

          <div className="form-panel">
            <h2>Send us a message</h2>
            <p>We&rsquo;ll get back to you as soon as possible.</p>
            <SubmitForm
              endpoint="/api/contact/"
              submitLabel="Send message"
              successMessage="your message has been received. We'll be in touch soon."
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+44..." />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">I am</label>
                  <select id="subject" name="subject" defaultValue="Hiring enquiry">
                    <option>Hiring enquiry</option>
                    <option>Job seeker</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us how we can help..." />
              </div>
            </SubmitForm>
          </div>
        </div>
      </section>
    </>
  );
}

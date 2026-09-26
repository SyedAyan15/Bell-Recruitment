import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container-narrow prose">
          <p>
            Bell Recruitment (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the
            privacy and security of your personal information.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you contact us, upload a CV, or apply for a role, we may collect your name, email address, phone
            number, LinkedIn profile, and CV/resume content.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your information to match you with suitable roles, respond to your enquiries, and provide our
            recruitment services to clients and candidates.
          </p>
          <h2>Contact</h2>
          <p>
            If you have any questions about this policy, please <Link href="/contact-us/">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import PageHero from "@/components/PageHero";

// Shown for unknown URLs. Uses the standard banner so the transparent header sits on burgundy.
export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </PageHero>
      <section className="section">
        <div className="container text-center">
          <Link className="btn btn-burgundy" href="/">
            Back to the home page
          </Link>
        </div>
      </section>
    </>
  );
}

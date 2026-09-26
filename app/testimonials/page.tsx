import type { Metadata } from "next";
import CvBanner from "@/components/CvBanner";
import PageHero from "@/components/PageHero";
import PartnerCarousel from "@/components/PartnerCarousel";
import TestimonialGrid from "@/components/TestimonialGrid";

export const metadata: Metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Client testimonials" title="Testimonials" image="/images/team-success.jpg" imagePosition="50% 30%">
        What Northern Ireland&rsquo;s leading FMCG brands say about working with us.
      </PageHero>

      <section className="section">
        <div className="container">
          <TestimonialGrid />
        </div>
      </section>

      <PartnerCarousel />
      <CvBanner />
    </>
  );
}

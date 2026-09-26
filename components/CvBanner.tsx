import Link from "next/link";

// Full-width "upload your CV" call to action over the desk photo.
export default function CvBanner() {
  return (
    <section className="photo-banner cv-banner">
      <div className="photo-banner-box">
        <h2>Ready for your next FMCG career move?</h2>
        <p>
          Upload your CV and let us match you with the right opportunity. Many of our roles are filled before
          they&rsquo;re ever advertised.
        </p>
        <div className="btn-row">
          <Link className="btn btn-gold" href="/cv-upload/">
            <i className="fas fa-cloud-upload-alt" /> Upload your CV
          </Link>
          <Link className="btn btn-outline" href="/contact-us/">
            Talk to Julie
          </Link>
        </div>
      </div>
    </section>
  );
}

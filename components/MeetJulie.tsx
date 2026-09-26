import Image from "next/image";
import Link from "next/link";
import { CONTACT, JULIE_ROLES } from "@/lib/content";
import Tilt from "./Tilt";

// Founder profile (photo, bio, industry roles), used on the Home and About pages.
export default function MeetJulie() {
  return (
    <div className="julie-wrap">
      <Tilt className="julie-photo">
        <Image
          src="/images/julie-bell.jpg"
          alt="Julie Bell, Founder and CEO of Bell Recruitment"
          width={870}
          height={1305}
          sizes="(max-width: 900px) 100vw, 420px"
        />
      </Tilt>
      <div className="julie-text">
        <div className="section-label">Meet the founder</div>
        <h2>Julie Bell</h2>
        <p className="role">Founder &amp; CEO</p>
        <p>
          Bell Recruitment was launched in 1999 by Founder and CEO Julie Bell, with a clear vision: to be the best
          FMCG recruiter by combining her FMCG industry knowledge with a personal, people-first approach.
        </p>
        <p>
          Now with over 25 years&rsquo; experience, the business has grown steadily, built on long-standing
          relationships with both clients and candidates, and a reputation for quality, integrity, and results.
        </p>
        <p>
          Before founding the business, Julie spent a decade working within FMCG for brands including Pepsi, 7UP,
          Ballygowan Water and Budweiser, across promotional activity, merchandising, and sales roles. That
          hands-on experience means we understand not just what a great candidate looks like on paper, but how they
          perform on a route, in a depot, and in front of a buyer.
        </p>
        <div className="roles-box">
          <h3>Industry involvement</h3>
          <ul>
            {JULIE_ROLES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <p className="pull-quote">At Bell Recruitment, people are at the heart of everything we do.</p>
        <div className="btn-row">
          <a className="btn btn-burgundy" href={CONTACT.jobsUrl} target="_blank" rel="noopener">
            Find a Job
          </a>
          <Link className="btn btn-ghost" href="/employer/">
            Find Talent
          </Link>
        </div>
      </div>
    </div>
  );
}

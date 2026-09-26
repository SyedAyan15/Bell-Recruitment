# Bell Recruitment

Website for Bell Recruitment, the Belfast-based FMCG recruitment and executive search consultancy led by founder and CEO Julie Bell. Built with Next.js 16 (App Router), React 19 and TypeScript, styled with a single plain CSS file. No database and no UI or animation libraries.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx            Root layout: fonts, header, footer, scroll-reveal, back-to-top
  globals.css           All styles (design tokens at the top, dark mode, responsive rules at the bottom)
  icon.png              Browser tab icon (picked up automatically by Next.js)
  page.tsx              Home
  about-us/             About Julie Bell and the company
  employer/             Services (executive search, permanent recruitment, field marketing)
  blogs/                Blog cards
  testimonials/         Client testimonials
  contact-us/           Contact form
  cv-upload/            CV upload form
  privacy-policy/       Privacy policy
  api/contact/          POST handler for the contact form
  api/cv-upload/        POST handler for the CV upload form
components/             Shared UI, one component per file (see below)
lib/
  content.ts            All site copy and data: nav, stats, services, sectors, testimonials, partners, blog posts
  submissions.ts        Form helpers: validation, saving CVs, logging submissions
public/images/          Photos, client logos, partner logos
data/, uploads/         Form submissions at runtime (git-ignored, only .gitkeep is committed)
```

URLs keep a trailing slash (`/about-us/`) to match the original site. This is set with `trailingSlash` in `next.config.ts`.

## Editing content

Almost all text lives in [lib/content.ts](lib/content.ts), so most copy changes never touch a page file:

| To change | Edit |
|---|---|
| Phone, email, address, social links, jobs board URL | `CONTACT` |
| Navigation menu | `NAV_LINKS` |
| Numbers in the stats bar (they count up automatically) | `STATS` |
| Partner logo carousel | `PARTNERS` (add the image to `public/images/`) |
| Services on Home and Services pages | `SERVICES` |
| "Sectors we recruit for" photo cards | `SECTORS` |
| 5-stage vetting process | `PROCESS` |
| Testimonials | `TESTIMONIALS` |
| Julie's industry roles | `JULIE_ROLES` |
| Blog cards | `BLOG_POSTS` |

Page headings and intro paragraphs are in each page's `page.tsx`.

## Components

| Component | Purpose |
|---|---|
| `Header` | Sticky nav, mobile menu, gold scroll-progress bar, slimmer header once scrolled |
| `Footer` | Call to action, link columns, contact details |
| `PageHero` | Top banner on inner pages, with an optional background photo |
| `MeetJulie` | Founder photo and bio (Home and About) |
| `PartnerCarousel` | Scrolling partner logos |
| `SectorGrid` | Sector photo cards |
| `ProcessSteps` | Vetting process with the animated line and travelling dot |
| `TestimonialGrid` | Testimonial cards with company logos |
| `CvBanner` | "Upload your CV" call to action |
| `SubmitForm` | Shared form wrapper that posts to an API route and shows success or error |
| `StatCounter` | Number that counts up when scrolled into view |
| `Tilt` | 3D tilt that follows the mouse (used on Julie's photos) |
| `ScrollReveal` | Fades and slides elements in as they scroll into view |
| `BackToTop` | Floating back-to-top button |

## How the animations work

All animation is plain CSS and small React components.

**Scroll reveal.** A tiny inline script in `app/layout.tsx` adds a `js` class to `<html>` before the page paints. CSS in `globals.css` (search for "Scroll reveal") then hides a list of selectors (headings, cards, photos) until they get an `in` class. `components/ScrollReveal.tsx` watches those elements with an `IntersectionObserver` and adds `in` when each one scrolls into view, staggering siblings. Without JavaScript nothing is hidden.

> The selector list exists in two places: `REVEAL` in `components/ScrollReveal.tsx` and the `html.js :is(...)` rule in `globals.css`. If you add a new element type that should animate in, add it to **both**.

**Vetting process.** `ProcessSteps` renders a track behind the numbered circles. When the grid gets the `in` class, the gold line draws in, then a dot travels along it on a 6-second loop, reaching one step every 1.275s. Each circle's pulse is delayed by `--step × 1.275s`, set per step, so it fires as the dot arrives. If you change the loop length in `@keyframes dot-travel`, update those delays too (the maths is in a CSS comment). On screens narrower than 900px the steps stack and the line is hidden.

**Stats.** `StatCounter` renders the final value on the server, so it's correct without JavaScript and for search engines, then counts up from 0 when scrolled into view. Screen readers get the final value through a visually hidden span.

**Reduced motion.** Anyone with "reduce motion" switched on in their operating system gets no reveal, pulsing, floating, tilt or zoom. See the `prefers-reduced-motion` blocks in `globals.css`.

## Forms

The contact form (`/api/contact/`) and CV upload (`/api/cv-upload/`) are handled by route handlers in `app/api/`, using helpers in `lib/submissions.ts`:

- The email address is required and validated on both the client and the server.
- CVs must be PDF, DOC or DOCX and no larger than 5MB. They are saved to `uploads/` with a timestamped, sanitised filename.
- Every submission is appended as one JSON line to `data/contact_submissions.jsonl` or `data/cv_submissions.jsonl`.

These files live on the server's disk. On hosts without a persistent filesystem, such as Vercel, replace `logSubmission` and `saveCv` in `lib/submissions.ts` with email or cloud storage (for example S3 or Vercel Blob). The API routes don't need to change.

## Styling

- Colours are CSS variables at the top of `globals.css` (`--burgundy`, `--gold`, `--cream` and so on). Dark mode redefines them under `prefers-color-scheme: dark`.
- Fonts are loaded with `next/font`: Cormorant Garamond for headings and Inter for body text.
- Icons come from Font Awesome 6, loaded from cdnjs in `app/layout.tsx`.
- Breakpoints: 1080px (hamburger menu), 900px (single-column layouts), 560px (phone).

## Image credits

Photos of Julie Bell, the logo and client/partner logos belong to Bell Recruitment and the respective companies. Stock photography (`grocery-aisle`, `fresh-produce`, `warehouse-*`, `supermarket-shelves`, `interview`, `team-*`) is from [Unsplash](https://unsplash.com) under the Unsplash License.

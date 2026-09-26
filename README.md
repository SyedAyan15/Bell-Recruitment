# Bell Recruitment

Website for Bell Recruitment, the Belfast-based FMCG recruitment and executive search consultancy led by founder and CEO Julie Bell. Built with Next.js (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Structure

- `app/`: pages (`/`, `/about-us/`, `/employer/`, `/blogs/`, `/testimonials/`, `/contact-us/`, `/cv-upload/`, `/privacy-policy/`) and API routes for the forms
- `components/`: shared UI (header, footer, animations, forms)
- `lib/content.ts`: all site copy (services, testimonials, partners, stats) in one place
- `public/images/`: photos and client logos

## Forms

The contact form (`/api/contact/`) and CV upload (`/api/cv-upload/`) save submissions to `data/*.jsonl` and uploaded CVs to `uploads/` on the server's disk. On hosts without a persistent filesystem (such as Vercel), swap `lib/submissions.ts` for email or cloud storage.

## Image credits

Stock photography (grocery, produce, warehouse, interview and team photos) is from [Unsplash](https://unsplash.com) under the Unsplash License.

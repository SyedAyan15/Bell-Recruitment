# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm install
npm run dev      # next dev --webpack (webpack, not Turbopack), http://localhost:3000
npm run build    # production build; also the only type-check (TypeScript, no separate script)
npm start
```

There is no linter and no test suite configured. Requires Node.js 20+.

## Architecture

Marketing site for Bell Recruitment (FMCG recruitment, Belfast): Next.js 16 App Router, React 19, TypeScript, one plain CSS file (`app/globals.css`). No database, no UI/animation libraries. See [README.md](README.md) for the full developer guide (animations, forms, styling); some of its page/component lists predate the current restructure, so trust the filesystem over it.

- **Content lives in [lib/content.ts](lib/content.ts)** (contact details, `NAV_LINKS`, partners, testimonials, blog posts, etc.). Copy changes usually don't touch page files. Page headings and intros are in each `page.tsx`.
- **Routes** are in `app/`: `candidates/how-it-works`, `employers/how-we-hire`, `services`, `faqs`, `about-us`, `testimonials`, `blogs`, `contact-us`, `cv-upload`, `privacy-policy`.
- **URLs use trailing slashes** (`trailingSlash: true` in [next.config.ts](next.config.ts)) to match the original site. `/employer/` permanently redirects to `/services/`; `/jobs/` and `/jobs/sales-roles-northern-ireland/` are temporary redirects to an external jobs board, to be removed as real pages are added under `app/jobs/`.
- **Every page starts with a burgundy banner** (home hero or `PageHero`) because the header is transparent at the top and overlaps it. New pages should start with `PageHero`.
- **Forms**: `app/api/contact` and `app/api/cv-upload` route handlers use [lib/submissions.ts](lib/submissions.ts) to validate, save CVs to `uploads/` and append JSON lines to `data/*.jsonl` (both git-ignored). This relies on a persistent disk; on hosts like Vercel, replace `logSubmission`/`saveCv` only.

## Gotchas

- **Scroll-reveal selectors are duplicated**: `REVEAL` in [components/ScrollReveal.tsx](components/ScrollReveal.tsx) and the `html.js :is(...)` rule in `globals.css`. Add new animated element types to both.
- The vetting `ProcessSteps` are deliberately excluded from general scroll reveal; their timing is driven by `--seq` / `--loop-start` on `.process-grid` in `globals.css`.
- Colours are CSS variables at the top of `globals.css`. Breakpoints: 1080px (hamburger), 900px (single column), 560px (phone, `mobile-swipe` grids).
- The repo has two remotes: `origin` (zainautomation/Bellrecruitment) and `ayan` (SyedAyan15/Bell-Recruitment). Saved Git credentials on the dev machine may belong to the latter and be denied on `origin`.

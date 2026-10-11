# Changelog

All notable changes to this project are documented in this file.

## [2026.10] - 2026-10-12

- Marketing/landing site for CareGennie (UK homecare software): Next.js 16 App Router + TypeScript + Tailwind 4, Framer Motion, React Hook Form + Zod, `/api/signup` via Resend with console fallback, privacy page, sitemap/robots and generated OG image.
- October 2026 review: tree, README and git history re-checked; no code, config or dependency changes. Last functional commit is still 2026-03-17. `package.json` bumped 0.2.0 to 0.3.0 for the v2026.10 tag.
- Link check: `https://caregennie.app` (the target domain named in the README) did not respond during the check; left as is because it is the intended production domain, not a moved resource.
- Known gaps: no LICENSE file, no tests or CI; email delivery depends on `RESEND_API_KEY` being set in the deployment environment.

## [2026.09] - 2026-09-16

- Maintenance review of `caregennie-landing` — the marketing/landing site for CareGennie, software aimed at UK homecare agencies.
- Status: Next.js 16 App Router + TypeScript + Tailwind CSS 4 site with Framer Motion animations, React Hook Form + Zod signup forms, a `/api/signup` route backed by Resend (with webhook/console fallback), privacy policy page, sitemap/robots and generated OG image. README states the target domain is caregennie.app and deployment is Vercel.
- Reviewed September 2026: documentation refreshed, CHANGELOG added/updated and the project versioned as v2026.09.
- Known gaps: no LICENSE file in the repo; no test suite or CI workflow present; email delivery depends on `RESEND_API_KEY` being set in the deployment environment.
- No code, configuration or dependency changes were made in this release — documentation and version metadata only.

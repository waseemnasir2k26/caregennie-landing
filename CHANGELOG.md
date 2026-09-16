# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of `caregennie-landing` — the marketing/landing site for CareGennie, software aimed at UK homecare agencies.
- Status: Next.js 16 App Router + TypeScript + Tailwind CSS 4 site with Framer Motion animations, React Hook Form + Zod signup forms, a `/api/signup` route backed by Resend (with webhook/console fallback), privacy policy page, sitemap/robots and generated OG image. README states the target domain is caregennie.app and deployment is Vercel.
- Reviewed September 2026: documentation refreshed, CHANGELOG added/updated and the project versioned as v2026.09.
- Known gaps: no LICENSE file in the repo; no test suite or CI workflow present; email delivery depends on `RESEND_API_KEY` being set in the deployment environment.
- No code, configuration or dependency changes were made in this release — documentation and version metadata only.

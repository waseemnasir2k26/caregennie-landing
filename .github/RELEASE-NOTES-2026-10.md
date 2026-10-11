## [2026.10] - 2026-10-12

- Marketing/landing site for CareGennie (UK homecare software): Next.js 16 App Router + TypeScript + Tailwind 4, Framer Motion, React Hook Form + Zod, `/api/signup` via Resend with console fallback, privacy page, sitemap/robots and generated OG image.
- October 2026 review: tree, README and git history re-checked; no code, config or dependency changes. Last functional commit is still 2026-03-17. `package.json` bumped 0.2.0 to 0.3.0 for the v2026.10 tag.
- Link check: `https://caregennie.app` (the target domain named in the README) did not respond during the check; left as is because it is the intended production domain, not a moved resource.
- Known gaps: no LICENSE file, no tests or CI; email delivery depends on `RESEND_API_KEY` being set in the deployment environment.

# CareGennie Landing Page (demo)

A landing page for a homecare-agency software product: hero with two calls to action, problem and solution, six-feature grid, how-it-works steps, FAQ and a dual-track signup form. Built as a speculative pitch.

**Live:** https://caregennie-landing.vercel.app

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Framer Motion, React Hook Form with Zod, Resend for email with a console fallback, deployed on Vercel.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Optional `.env.local`:

```env
RESEND_API_KEY=
SIGNUP_WEBHOOK_URL=
```

Without keys the signup form still works and logs submissions to the console. Copy and content live in `lib/constants.ts`.

Demo built by SkynetLabs.

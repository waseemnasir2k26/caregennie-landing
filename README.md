# CareGennie Landing Page

Production-ready landing page for [CareGennie](https://caregennie.app) — intelligent software for UK homecare agencies.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API (with fallback)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Email (optional — forms work without this)
RESEND_API_KEY=re_xxxx

# Webhook fallback (optional)
SIGNUP_WEBHOOK_URL=https://hooks.example.com/xxxx
```

The signup forms work without any API keys configured — submissions are logged to the console and the success state is shown.

## Project Structure

```
app/
  layout.tsx              — Root layout, fonts, SEO metadata
  page.tsx                — Main landing page
  globals.css             — Tailwind + CSS custom properties
  privacy-policy/page.tsx — Privacy policy page
  api/signup/route.ts     — Form submission API
  opengraph-image.tsx     — Auto-generated OG image
components/
  Navbar.tsx              — Sticky glassmorphism nav
  Hero.tsx                — Hero with dual CTA
  ProblemSolution.tsx     — Pain points → solutions
  Features.tsx            — 6-feature grid
  HowItWorks.tsx          — 3-step process
  SocialProof.tsx         — Animated counters + quote
  SignupForm.tsx          — Dual-track signup forms
  FAQ.tsx                 — Accordion FAQ
  Footer.tsx              — Footer with links + socials
  ui/                     — Button, Input, Badge primitives
lib/
  constants.ts            — All copy and content
  utils.ts                — Utility functions
```

## Deployment

1. Push to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Configure custom domain: `caregennie.app`
5. Deploy with `vercel --prod` or via GitHub integration

## Features

- Dual signup forms (waiting list + beta testing) with Zod validation
- Animated counters, staggered scroll animations, FAQ accordion
- Mobile-first responsive design (375px to 1440px+)
- GDPR-compliant privacy policy page
- Rate-limited API route with Resend email integration
- Auto-generated Open Graph image
- Sticky navbar with glassmorphism scroll effect
- WCAG 2.1 AA accessible — semantic HTML, focus states, ARIA labels

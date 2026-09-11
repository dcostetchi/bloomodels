# Bloom Models — Agency Site

Full-service creator management agency marketing site. Next.js 14 (App Router), Tailwind CSS, shadcn/ui, Framer Motion, React Hook Form + Zod, Resend, bilingual (Romanian default / English at `/en`).

## Stack

- Next.js 14 App Router, TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- Framer Motion for entrance/count-up animations
- React Hook Form + Zod for the apply and contact forms
- `next-intl` for RO/EN routing (`/` = Romanian, `/en/...` = English)
- Applications persist to `data/applications.json` and email via Resend

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000 (Romanian) or http://localhost:3000/en (English).

## Environment variables

See `.env.example`. Every value is a **[PLACEHOLDER]** — replace before going live:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_AGENCY_NAME` | Brand name shown across the site (nav, footer, copy) |
| `NEXT_PUBLIC_AGENCY_EMAIL` | Public contact email |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, international format, no `+` (used to build `wa.me` links) |
| `NEXT_PUBLIC_TELEGRAM_HANDLE` | Telegram handle without `@` |
| `EMAIL_TO` | Inbox that receives new applications/contact messages |
| `RESEND_API_KEY` | Resend API key. If unset, emails are skipped silently (applications still save to disk) |

Also update the `from` sender address in `lib/email.ts` once you verify a sending domain in Resend (currently `onboarding@resend.dev`, Resend's shared testing domain).

## Content

All copy lives in `messages/ro.json` and `messages/en.json`, mirrored key-for-key. Edit copy there, not in components.

## Applications

Every apply-form submission is appended to `data/applications.json` (git-ignored — it holds applicant PII, never commit real submissions) and, if `RESEND_API_KEY`/`EMAIL_TO` are set, emailed to `EMAIL_TO`.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
npx tsc --noEmit  # type-check
```

## Deploying (Railway / Vercel)

1. Set all env vars from `.env.example` in the platform's dashboard.
2. `data/applications.json` is written to the container's local filesystem — on Vercel this is **ephemeral** (resets on every deploy). For durable storage in production, either persist a volume (Railway supports this) or swap `lib/applications.ts` for a database/KV store; Resend email delivery is unaffected either way.
3. Build command: `npm run build`. Start command: `npm run start`.

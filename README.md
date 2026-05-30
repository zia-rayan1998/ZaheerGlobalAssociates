# Zaheer Global Associates

Premium AI-enabled business website for **Zaheer Global Associates** — Hyderabad's trusted permission and approval consultancy.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (custom components)
- **Framer Motion**
- **Radix UI** primitives

## Getting Started

```bash
cd zaheer-global-associates
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, testimonials, FAQ, SEO content |
| `/services` | All 8 services with expandable details & inquiry forms |
| `/projects` | Masonry portfolio with filtering |
| `/about` | Company story, founder, timeline, values |
| `/contact` | Contact form, map, WhatsApp |

## Customization

- **WhatsApp number**: Edit `WHATSAPP_NUMBER` in `src/lib/utils.ts`
- **Contact details**: Edit `COMPANY` in `src/lib/utils.ts`
- **Services/Projects**: Edit data files in `src/data/`

## Features

- AI assistant chat widget with FAQ & lead capture
- Floating WhatsApp button
- Newsletter popup
- Animated statistics counters
- 3D tilt card effects
- Glassmorphism UI
- SEO: metadata, Open Graph, JSON-LD schema, sitemap
- Fully responsive design

## Deploy

Deploy to [Vercel](https://vercel.com) or any Node.js hosting:

```bash
npm run build
```

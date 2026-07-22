# Medicare — Premium Healthcare Landing Page

A responsive React landing page for a fictional healthcare brand, built as a frontend developer
hiring assessment based on a provided design reference.

🔗 **Live Demo:** [medicare-landing-page.netlify.app](https://medicare-landing-page.netlify.app/)

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling & responsiveness |
| Vite | Build tool & dev server |
| Framer Motion | Scroll-triggered animations |
| Lucide React | Icons |

## Features

- **Responsive design** — mobile, tablet, and desktop layouts
- **Animated hero section** — entrance animations with a floating call card
- **Responsive navbar** — hover nav links (desktop), hamburger accordion (mobile)
- **Scroll-triggered animations** — section headings and cards reveal on scroll via Framer Motion
- **Dark / light mode** — toggle persisted to `localStorage`, defaults to system preference
- **Feature cards** — illustrated mockups (mobile app, secure messaging, health dashboard)
- **Consultant profile cards** — reusable card component across the "Collaborate" section
- **Map + features checklist** — location card alongside an additional-features list
- **Full responsive footer** — newsletter signup, link columns, social icons
- **Accessible by default** — semantic landmarks, skip-to-content link, labelled icon buttons, visible focus states, `prefers-reduced-motion` support

## Sections

1. Navbar
2. Hero — headline, CTA, and animated call card
3. Discover our Benefits & Features — feature grid with illustrated mockups
4. Trusted By — partner logo strip
5. Collaborate with our Consultants — profile cards
6. Consult CTA — text banner with call-to-action
7. Map + Additional Medical Features
8. Banner CTA — gradient closing banner
9. Footer with newsletter signup

## Getting Started

Clone the repository
```bash
git clone https://github.com/your-username/medicare-landing.git
cd medicare-landing
```

Install dependencies
```bash
npm install
```

Start development server
```bash
npm run dev
```

Build for production
```bash
npm run build
```

Preview the production build
```bash
npm run preview
```

Requires Node 18+.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Responsive navbar with mobile drawer
│   ├── Hero.tsx              # Animated hero with call card
│   ├── Features.tsx          # Benefits & features grid
│   ├── TrustedBy.tsx         # Partner logo strip
│   ├── Consultants.tsx       # Consultant profile cards
│   ├── ConsultCTA.tsx        # Text CTA banner
│   ├── MapFeatures.tsx       # Map + features checklist
│   ├── BannerCTA.tsx         # Gradient closing banner
│   ├── Footer.tsx            # Newsletter signup + footer links
│   ├── Button.tsx            # Shared button (primary/outline/dark/ghost variants)
│   ├── SectionHeading.tsx    # Shared eyebrow + heading
│   ├── ThemeToggle.tsx       # Dark/light mode toggle
│   ├── mockups.tsx           # Illustrated phone/chat/dashboard mockups
│   └── SocialIcons.tsx       # Inline social icon SVGs
├── context/
│   └── ThemeContext.tsx      # Dark/light mode, persisted to localStorage
├── data/
│   └── content.ts            # All section copy/content, separate from markup
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css                 # Tailwind import, design tokens, base styles
```

## Design Decisions

- **Font pairing:** Plus Jakarta Sans (headings) + Inter (body text) — a clean, modern feel suited to a healthcare brand
- **Color palette:** Brand violet/purple scale (`#7c5cf5` core) paired with soft blush and lavender section backgrounds, and a near-black footer/CTA (`#14131a`)
- **Component structure:** every section is its own component; repeated UI (buttons, section headings) is factored into shared components, with all copy centralized in `data/content.ts` so text updates never touch markup
- **Illustrations over stock photography:** the reference design's photography (doctor photo, app/chat screenshots) was recreated as original SVG/CSS illustrations instead of reproducing source images, keeping the code fully original

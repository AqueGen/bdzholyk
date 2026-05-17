# Bdzholyk Site Redesign — Design Spec

**Date:** 2026-05-17
**Source site:** https://bdzholyk.com/
**Target repo:** github.com/AqueGen/bdzholyk
**Demo URL:** https://aquegen.github.io/bdzholyk/

## Goal

Rebuild the Bdzholyk charity foundation site as a single, modern, mobile-first static page. Preserve original meaning, language (Ukrainian), brand mascot (bee — "бджолик"), six activity directions, slogan, target audience. Improve layout, typography, content density, imagery. Deploy to GitHub Pages under AqueGen account for demo viewing.

## Non-Goals

- No CMS, no backend, no auth.
- No content translation (stays Ukrainian).
- No e-commerce / shop integration.
- No analytics, tracking, cookies.

## Scope

One static page (`index.html`) with inline CSS variables, Tailwind CSS via CDN, vanilla JS for interactions. Assets folder for SVG mascot, favicon. External images referenced via Unsplash direct URLs (placeholders).

## Tech Stack

- HTML5 semantic markup, `lang="uk"`.
- Tailwind CSS via Play CDN (`<script src="https://cdn.tailwindcss.com">`).
- Google Fonts: `Comfortaa` (headings), `Inter` (body).
- Vanilla JS: smooth scroll, IntersectionObserver fade-in, FAQ accordion, mobile nav toggle.
- No build step. No package.json required.

## Information Architecture

```
index.html
  ├─ <header> sticky nav (logo + 5 anchor links + mobile burger)
  ├─ <main>
  │   ├─ #hero          — gradient bg, mascot SVG, title, slogan, 2 CTAs
  │   ├─ #about         — manifesto + 3 stat counters
  │   ├─ #directions    — 6 cards (icon + photo + description)
  │   ├─ #gallery       — masonry/grid of 6-8 photos
  │   ├─ #join          — 3 paths (volunteer / donate / partner)
  │   ├─ #faq           — accordion, 5-6 items
  │   └─ #contact       — Sumy contacts + social links (placeholders)
  └─ <footer> copyright + nav repeat
assets/
  ├─ favicon.svg        — bee emoji as SVG
  └─ mascot.svg         — stylized bee mascot
```

## Visual Design

### Palette

| Token        | Hex        | Use                              |
|--------------|------------|----------------------------------|
| honey        | `#F5B800`  | primary CTA, accents             |
| honey-dark   | `#D99A00`  | hover states                     |
| deep-blue    | `#0E3B6B`  | headings, footer bg              |
| cream        | `#FFF8E7`  | section bg (warm)                |
| green        | `#2E8B57`  | UA accent, success icons         |
| soft-white   | `#FAFAF7`  | page bg                          |
| text-dark    | `#1F2937`  | body text                        |
| text-muted   | `#6B7280`  | secondary text                   |

### Typography

- Headings: `Comfortaa`, weights 500/700.
- Body: `Inter`, weights 400/500/600.
- Base size: 16px mobile, 17px desktop. Line-height 1.6.
- Headings scale: h1 clamp(2.25rem, 5vw, 4rem), h2 clamp(1.75rem, 3.5vw, 2.75rem).

### Responsive Breakpoints (Tailwind defaults)

- `sm` 640px — single column → 2 col grids start
- `md` 768px — nav inline, hero side-by-side
- `lg` 1024px — full grid (3 col directions, masonry gallery)
- `xl` 1280px — max content width 1200px

### Mobile-First Rules

- All grids start single-column.
- Burger menu under 768px.
- Hero stacks vertically on mobile, mascot below text.
- Touch targets min 44x44px.
- Font sizes use `clamp()` for fluid scaling.
- No horizontal scroll at any width down to 320px.

## Sections Detail

### 1. Hero

- Full-viewport height (min `100svh` mobile, `90vh` desktop).
- Background: linear gradient `cream → honey/20 → soft-white`.
- Left (desktop) / top (mobile):
  - Eyebrow: «БО БФ "ВІРИМО – ВСЕ БУДЕ ДОБРЕ" • м. Суми»
  - H1: «Острів щасливого дитинства, добрих справ і великих мрій»
  - Subhead (italic): «Від маленької дії — до великої мрії»
  - 2 CTAs: «Долучитися» (honey, primary), «Підтримати» (outline)
- Right / bottom: animated bee mascot SVG (gentle float keyframes).

### 2. About

- Centered manifesto paragraph (~60 words).
- 3 stat tiles: «500+ дітей», «120+ подій», «80+ волонтерів» (placeholder numbers, easy to edit).

### 3. Directions (6 cards)

Each card: 80px circular icon (emoji or SVG), photo (Unsplash, aspect 4:3), title, 2-3 sentence description.

| # | Title                         | Emoji | Photo theme                  |
|---|-------------------------------|-------|------------------------------|
| 1 | Творчість та активності       | 🎨    | kids painting                |
| 2 | МІНИ та ТАЛАНТИ               | 💰    | kids with coins/play money   |
| 3 | ЦІЛИКИ                        | 🎯    | team game / target           |
| 4 | ВОЛЕЦВІТ на ВЕРИЖИЦІ          | 🌿    | nature / forest / kids       |
| 5 | ТРИСУМА СКРИНЬКА              | 🎁    | charity box / hands giving   |
| 6 | Волонтерство та підтримка ЗСУ | 🇺🇦    | volunteers packing aid       |

Grid: 1 col mobile → 2 col `md` → 3 col `lg`.

### 4. Gallery

- 6-8 Unsplash photos themed around children, creativity, nature, volunteering.
- CSS grid masonry-style (`grid-auto-rows: 200px` + `row-span`).
- Hover: subtle zoom + caption overlay (desktop only).
- Mobile: simple 2-col grid.

### 5. Join

3 horizontal cards (stack on mobile):
- **Стати волонтером** — link to contact form anchor / mailto
- **Підтримати фінансово** — placeholder donation info
- **Стати партнером** — for orgs/businesses

### 6. FAQ

Accordion (native `<details><summary>`):
- Хто ми?
- Як стати волонтером?
- Як підтримати фінансово?
- Чи можна привести дитину?
- Де ви знаходитесь?
- Як з вами зв'язатися?

### 7. Footer

- Deep-blue bg, cream text.
- 3 cols (stack on mobile): brand + slogan / navigation / contacts.
- Social icons (SVG, placeholder hrefs).
- Copyright line.

## Interactions

- **Smooth scroll**: anchor clicks → smooth scroll to section, offset for sticky nav.
- **Sticky nav**: appears with shadow after 100px scroll.
- **Mobile nav**: burger button toggles full-width overlay menu.
- **Fade-in on scroll**: IntersectionObserver adds `.visible` class, triggers opacity+translateY transition.
- **Mascot float**: CSS keyframes, 4s ease-in-out infinite, `prefers-reduced-motion` respects.
- **FAQ accordion**: native `<details>`, styled with CSS.

## Accessibility

- All images have `alt`.
- All interactive elements keyboard-reachable.
- Focus visible (ring-2 ring-honey).
- Color contrast WCAG AA (deep-blue on cream = 12.6:1, honey on deep-blue = 7.2:1).
- `prefers-reduced-motion: reduce` disables animations.
- Semantic landmarks: `<header> <nav> <main> <section> <footer>`.
- Lang attribute set; section headings hierarchical.

## Content Preservation Mapping

| Original element              | New location               |
|-------------------------------|----------------------------|
| Brand name                    | Header logo + footer       |
| Slogan «Від маленької...»     | Hero subhead, footer       |
| «Острів щасливого...»         | Hero H1                    |
| 6 directions                  | #directions cards          |
| Bee mascot                    | Hero SVG + favicon         |
| Ukrainian language            | All copy                   |
| Sumy location                 | Hero eyebrow, contacts     |
| ZSU support                   | Direction card #6          |

## Deployment

1. `git init` in `e:/Bdzholy`.
2. Create public repo `AqueGen/bdzholyk` via `gh repo create` (account switch first).
3. Initial commit (no AI attribution per global CLAUDE.md).
4. Push to `main`.
5. Enable GitHub Pages: source = `main` branch, `/` root.
6. Demo URL live within 1-2 min.

## File Layout

```
e:/Bdzholy/
├─ index.html
├─ assets/
│  ├─ favicon.svg
│  └─ mascot.svg
├─ README.md
├─ .gitignore
└─ docs/superpowers/specs/2026-05-17-bdzholyk-redesign-design.md
```

## Out of Scope (Future)

- Real donation gateway integration (Monobanka / Privat24).
- Real contact form (would need backend or service like Formspree).
- Blog / events CMS.
- Multi-language.
- Photo gallery from real events (currently Unsplash placeholders).

## Verification Plan

- Open `index.html` in browser; verify visually at 320px, 768px, 1024px, 1440px.
- Lighthouse: target Performance 90+, Accessibility 95+, Best Practices 95+, SEO 90+.
- Manual: tab through page, verify focus visible, all CTAs reachable.
- GitHub Pages: confirm demo URL serves correctly after deploy.

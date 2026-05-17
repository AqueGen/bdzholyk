# Ideas Backlog

Future improvements for the Bdzholyk site. Prioritized loosely by impact/effort.

## Quick wins (low effort, high impact)

- [x] Open Graph + Twitter Card meta (share preview in Telegram/FB/Twitter)
- [x] Schema.org JSON-LD (Organization / NGO) for Google
- [x] sitemap.xml + robots.txt
- [x] `hreflang` tags for UK/EN (signal translations to Google)
- [ ] Sticky donate CTA on mobile (always visible donate button)

## Content / UX

- [ ] Real foundation photos (replace gradient placeholders)
- [ ] Events calendar (static JSON + render upcoming events)
- [ ] Blog / news section (Markdown -> static rendering)
- [ ] Team page (founder/activist bios with photos)
- [ ] Transparency page (financial reports, donation usage)
- [ ] Kids' stories / testimonials (social proof)

## Functionality

- [ ] Donation gateway buttons (Monobanka / Privat24 / Stripe)
- [ ] Contact form (Formspree or Web3Forms, no backend)
- [ ] Newsletter signup (Mailchimp / Buttondown)
- [ ] PWA (installable, offline)

## Technical quality

- [x] Production build pipeline (Tailwind CLI instead of CDN, minify, GitHub Actions auto-deploy)
- [x] Lighthouse CI gate in pull requests
- [x] Self-hosted fonts (faster, no third-party requests)
- [ ] WebP images + `srcset` (when real photos are added)

## Brand / Visual

- [x] Interactive mascot (cursor tracking, easter eggs)
- [x] Custom SVG icons per direction (replace emoji)
- [x] Dark mode toggle (with system-preference detect)
- [x] Animated hero (parallax, soft motion)

## i18n / Accessibility

- [ ] Auto-detect language from `navigator.language`
- [ ] Third language (DE or PL for donor outreach)
- [ ] High-contrast mode toggle (for low-vision users)
- [ ] Font-size controller (A- / A / A+)

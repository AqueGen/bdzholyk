# Ideas Backlog

Future improvements for the Bdzholyk site. Prioritized loosely by impact/effort.

## Quick wins (low effort, high impact)
- [ ] Open Graph + Twitter Card meta (share preview in Telegram/FB/Twitter)
- [ ] Schema.org JSON-LD (Organization / NGO) for Google
- [ ] sitemap.xml + robots.txt
- [ ] Sticky donate CTA on mobile (always visible donate button)
- [ ] `hreflang` tags for UK/EN (signal translations to Google)

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
- [ ] Production build pipeline (Tailwind CLI instead of CDN, minify, GitHub Actions auto-deploy)
- [ ] Lighthouse CI gate in pull requests
- [ ] Self-hosted fonts (faster, no third-party requests)
- [ ] WebP images + `srcset` (when real photos are added)

## Brand / Visual
- [x] Interactive mascot (cursor tracking, easter eggs) — implemented
- [ ] Custom SVG icons per direction (replace emoji)
- [ ] Dark mode toggle (with system-preference detect)
- [ ] Animated hero (parallax, soft motion)

## i18n / Accessibility
- [ ] Auto-detect language from `navigator.language`
- [ ] Third language (DE or PL for donor outreach)
- [ ] High-contrast mode toggle (for low-vision users)
- [ ] Font-size controller (A- / A / A+)

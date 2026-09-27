# CEO Fitness LA — ceofitnessla.com

## Brand

CEO Fitness LA targets CEOs, execs, founders, and high-earners generally
(influencers, actors, founders). LA-based, training in person or virtual.

- **Voice:** blends Kevin's data-driven style with Solmaz's motivational style.
- **Pricing is shown openly** — prices stay visible to everyone, no "book a consultation to see pricing."
- **The waitlist form is the primary CTA** on `index.html` (membership is limited-availability). Email (hello@ceofitnessla.com) is a lower-emphasis backup below it.
- **Membership, not retainer** — tiers are memberships, named by commitment length.
- **Pricing model:** longer commitment = lower per-session rate.
  - Session to session: **$250/session** (highest rate, no commitment).
  - Monthly membership: paid up front, priced as 4 weeks of sessions. Per-session rate slides by weekly frequency — 1x $240, 2x $230, 3x $220, 4x $210, 5x **$200** (the floor for monthly). Rates live in `MONTHLY_RATES` in `index.html`.
  - Annual membership: lowest rate, below $200/session. **Rate and annual-only extras still TBD.**
  - Memberships include Praxium programming and tracking, which is what keeps the monthly amount steady through vacation weeks (for members and for Kevin).
- Current credential line: 12+ years experience (specific certs TBD).

## Site

- Static site, no framework, no build step:
  - `index.html` — the main one-page site (Home/Approach/Programs/Pricing/Contact).
  - `trainers.html` — business consulting / Praxium page for other trainers. Linked from the footer only; keep it out of the main nav. Its inquiry form posts to Formspree.
  - `styles.css` — shared theme for every page: color tokens, typography, `.wrap`, buttons, placeholders, header, footer, form styles, and the gate styles.
  - `forms.js` — shared Formspree submit handling for any `<form class="form-card" data-formspree action="…">` with a `.form-status` element; submits in the background and keeps the visitor on the page. Optional `data-success-message` overrides the confirmation text.
  - `gate.js` — shared pre-launch access gate. Injects the gate markup itself and hides the page until the code is entered; unlocking persists across pages for the browser session.
- Every page's `<head>` includes, in this order: the Google Fonts `<link>`s, `<link rel="stylesheet" href="styles.css">`, `<script src="gate.js"></script>` (no `defer`/`async`, so nothing flashes before the gate), `<script src="forms.js" defer></script>` on pages with a form, then a `<style>` block with only that page's own styles. New pages (e.g. the coming trainer/client portals) should follow the same pattern, including the noindex meta until launch.
- Shared look changes go in `styles.css`; don't copy shared rules into a page's `<style>` block.
- Hosted on GitHub Pages from `main`; pushing to `main` deploys.
- `CNAME` maps the custom domain `ceofitnessla.com` (DNS at Porkbun). **Don't touch it.**
- `_config.yml` excludes this file from the published site.
- Theme tokens are CSS variables at the top of `styles.css` (`--gold: #c9a227`, `--black: #0b0a08`, etc.). Reuse them and the existing classes (`.wrap`, `.eyebrow`, `.lede`, `.btn-primary`, `.btn-ghost`, `.ph`, `.placeholder-flag`) rather than adding new colors or one-off styles.
- Until "Enforce HTTPS" is on, preview the live site at http://ceofitnessla.com.

## Launch checklist

- [ ] Remove `<meta name="robots" content="noindex, nofollow">` from the `<head>` of **every** page
- [ ] Remove the access gate: delete `<script src="gate.js"></script>` from **every** page, delete `gate.js`, and delete the gate section at the bottom of `styles.css`
- [ ] Formspree, two separate forms (each with its notification email set to hello@ceofitnessla.com in the Formspree dashboard), then send a test submission through each:
  - [ ] `YOUR_WAITLIST_FORM_ID` in `index.html` (waitlist)
  - [ ] `YOUR_FORM_ID` in `trainers.html` (trainer inquiries)
- [ ] Confirm hello@ceofitnessla.com actually receives mail (Porkbun forwarding) — it's the fallback on both pages
- [ ] Final copy for `trainers.html` (currently placeholder, flagged on the page)
- [ ] Toggle "Enforce HTTPS" in repo Settings > Pages once available
- [ ] Annual membership rate + what's included (only pricing placeholder left)
- [ ] Real photos (hero + Kevin + Solmaz)
- [ ] Finished logo (replaces text wordmark)
- [ ] Specific certifications (2 chips currently placeholder)

## Workflow

Brand, copy, and design decisions get brainstormed in Claude chat first, then
handed here as finished chunks (HTML/CSS snippets, copy, section rewrites) to
implement, commit, and push. Fit handed-over code into the existing structure
and styles, check it in the browser, then commit and push to `main`.

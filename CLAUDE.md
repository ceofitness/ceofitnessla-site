# CEO Fitness LA — ceofitnessla.com

## Brand

CEO Fitness LA targets CEOs, execs, founders, and high-earners generally
(influencers, actors, founders). LA-based, training in person or virtual.

- **Voice:** blends Kevin's data-driven style with Solmaz's motivational style.
- **Pricing is shown openly** — prices stay visible to everyone, no "book a consultation to see pricing."
- **The waitlist form is the primary CTA** on `index.html` (membership is limited-availability). Email (hello@ceofitnessla.com) is a lower-emphasis backup below it.
- **Membership, not retainer** — tiers are memberships, named by commitment length.
- **Pricing model:** four tiers, longer commitment = lower per-session rate. Rates live in `RATES` in `index.html`; the sessions-per-week selector updates all four cards at once and prefills the waitlist form's frequency field.

  | Sessions/week | Executive Performance | Performance | Foundation | Pay-As-You-Go |
  |---|---|---|---|---|
  | 1x | $190 | $240 | $245 | $250 |
  | 2x | $186 | $230 | $240 | $250 |
  | 3x | $182 | $220 | $235 | $250 |
  | 4x | $178 | $210 | $230 | $250 |
  | 5x | $175 | $200 | $225 | $250 |

  - Tracking rises with tier: basic session logging → progress trends → advanced analytics and program adjustments → full concierge tracking with the most frequent, detailed testing.
  - **Estimated totals** live in the Pricing details section only (never on the cards) and follow the selector:
    - Foundation — weekly: `rate × sessions/week`. At 5x: $1,125/week.
    - Performance — monthly estimate: `rate × sessions/week × 52 ÷ 12`, rounded to the nearest $10, always worded as "about". At 5x: $4,330/month. Exact amount depends on sessions scheduled that month.
    - Executive Performance — annual: `rate × sessions/week × 50`. At 5x: $43,750/year.
    - Pay-As-You-Go — no period total; billed per session.
  - Foundation and Performance bill upfront for the period's sessions; Executive Performance bills annually on 50 training weeks, and at 4x/5x adds guaranteed holiday coverage and uncharged sick days.
  - **Card fronts stay bare:** tier name, price, one tracking line. No badges, asterisks, or fine print — billing terms belong in the "Pricing details" `<details>` section below the cards, at normal body size, never styled as a disclaimer.
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
- [ ] Real photos (hero + Kevin + Solmaz)
- [ ] Finished logo (replaces text wordmark)
- [ ] Specific certifications (2 chips currently placeholder)

## Workflow

Brand, copy, and design decisions get brainstormed in Claude chat first, then
handed here as finished chunks (HTML/CSS snippets, copy, section rewrites) to
implement, commit, and push. Fit handed-over code into the existing structure
and styles, check it in the browser, then commit and push to `main`.

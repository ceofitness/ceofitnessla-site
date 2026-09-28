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
  | 1x | $190 | $235 | $240 | $250 |
  | 2x | $186 | $225 | $235 | $250 |
  | 3x | $182 | $215 | $230 | $250 |
  | 4x | $178 | $205 | $225 | $250 |
  | 5x | $175 | $195 | $220 | $250 |

  - Tracking rises with tier: basic session logging → progress trends → advanced analytics and program adjustments → fully managed tracking with the most frequent, detailed testing. (Don't use the word "concierge" anywhere on the site.)
  - **Each card shows its period total**, driven by the selector: session count (small, above), the total (largest), the period, then `$[rate] per session`, then the one-line tracking description.
    - Foundation — weekly: `rate × sessions/week`. At 5x: 5 sessions, $1,100 per week.
    - Performance — monthly estimate: `rate × sessions/week × 52 ÷ 12`, rounded to the nearest $10; session count `sessions/week × 52 ÷ 12` rounded to a whole number. Both hedged with "about". At 5x: about 22 sessions, about $4,230 per month.
    - Executive Performance — annual: `rate × sessions/week × 50`; session count `sessions/week × 50`. At 5x: 250 sessions, $43,750 per year.
    - Pay-As-You-Go — no period total; "$250 per session" with "Billed per session" beneath.
  - **No badges, asterisks, or fine print on the cards.** Billing terms live in the "Pricing details" `<details>` section below them, at normal body size, never styled as a disclaimer. Totals appear on the cards only — don't repeat them in the details.
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
- **The access gate is soft, not security.** `gate.js` (with the code in it) is in a public repo and served to every visitor, so anyone who looks can read it. Fine for keeping casual visitors out; never put anything private on the site pre-launch.
- **Local preview:** `.claude/launch.json` runs `python3 -m http.server 8765` at the repo root. It's excluded via `.git/info/exclude` (local-only, so it won't appear in a fresh clone — recreate it if needed) and must never be committed. Open pages over `http://localhost:8765`, not `file://`, or the gate's `sessionStorage` unlock behaves differently.

## Open copy decisions

Kevin's rulings — don't "fix" these in a later pass without asking.

- **The hero lede keeps "No forms to fill out. Just results you can see."** even though the waitlist form sits below it. Kevin's call: "it's barely a form." It reads as a contradiction on a skim, so it may come back up, but leave it until he says otherwise.
- **"Credentials" is the About section.** The footer's "More about us →" points at `#credentials`, and that's where the bio paragraph, the client-locations line, and the certification chips live. There's no separate About section, and no per-person profiles yet.
- **Open, not yet decided:** the Performance paragraph in Pricing details still ends with "The exact amount depends on how many sessions are scheduled that month," which says roughly the same thing as the section's opening "Totals reflect a full schedule" sentence. Redundant but harmless; drop it when the copy gets a pass.

## Content waiting on a home

Written and approved, but there's nowhere on the site for it yet. Use it verbatim when the section it belongs to gets built.

- **Solmaz's background** — for her profile/bio, once per-person profiles exist (today she appears only in photo placeholders and joint sentences):
  > Solmaz began training clients in Shiraz, Iran, then built her career in Los Angeles and New York before returning to LA.

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

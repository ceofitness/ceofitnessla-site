# CEO Fitness LA — ceofitnessla.com

## Brand

CEO Fitness LA targets CEOs, execs, founders, and high-earners generally
(influencers, actors, founders). LA-based, training in person or virtual.

- **Voice:** blends Kevin's data-driven style with Solmaz's motivational style.
- **Pricing is shown openly** — no gated forms, no "book a consultation to see pricing."
- **Call/text is the primary CTA.** Email is backup only.
- Current credential line: 12+ years experience (specific certs TBD).

## Site

- Static site, inline CSS, no framework, no build step:
  - `index.html` — the main one-page site (Home/Approach/Programs/Pricing/Contact).
  - `trainers.html` — business consulting / Praxium page for other trainers. Linked from the footer only; keep it out of the main nav. Its inquiry form posts to Formspree.
- `trainers.html` carries its own copy of the theme CSS and the access gate. When changing shared styles (tokens, header, buttons, footer), update both pages.
- Hosted on GitHub Pages from `main`; pushing to `main` deploys.
- `CNAME` maps the custom domain `ceofitnessla.com` (DNS at Porkbun). **Don't touch it.**
- `_config.yml` excludes this file from the published site.
- Theme tokens are CSS variables at the top of the `<style>` block (`--gold: #c9a227`, `--black: #0b0a08`, etc.). Reuse them and the existing classes (`.wrap`, `.eyebrow`, `.lede`, `.btn-primary`, `.btn-ghost`, `.ph`) rather than adding new colors or one-off styles.
- Until "Enforce HTTPS" is on, preview the live site at http://ceofitnessla.com.

## Launch checklist

- [ ] Remove `<meta name="robots" content="noindex, nofollow">` (in `<head>`) — **both** `index.html` and `trainers.html`
- [ ] Remove the `#gate` div and its access-code `<script>` block at the bottom (plus the `locked` class on `<body>` and the gate CSS) — **both** pages
- [ ] Formspree: replace `YOUR_FORM_ID` in `trainers.html` with the real form ID (form's notification email set to hello@ceofitnessla.com in the Formspree dashboard), then send a test inquiry
- [ ] Final copy for `trainers.html` (currently placeholder, flagged on the page)
- [ ] Toggle "Enforce HTTPS" in repo Settings > Pages once available
- [ ] Real pricing for all 3 tiers
- [ ] Real phone number (replaces `+1XXXXXXXXXX` in both the `tel:` and `sms:` links)
- [ ] Real photos (hero + Kevin + Solmaz)
- [ ] Finished logo (replaces text wordmark)
- [ ] Specific certifications (2 chips currently placeholder)

## Workflow

Brand, copy, and design decisions get brainstormed in Claude chat first, then
handed here as finished chunks (HTML/CSS snippets, copy, section rewrites) to
implement, commit, and push. Fit handed-over code into the existing structure
and styles, check it in the browser, then commit and push to `main`.

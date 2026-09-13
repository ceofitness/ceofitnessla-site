# CEO Fitness LA — ceofitnessla.com

## Brand

CEO Fitness LA targets CEOs, execs, founders, and high-earners generally
(influencers, actors, founders). LA-based, training in person or virtual.

- **Voice:** blends Kevin's data-driven style with Solmaz's motivational style.
- **Pricing is shown openly** — no gated forms, no "book a consultation to see pricing."
- **Call/text is the primary CTA.** Email is backup only.
- Current credential line: 12+ years experience (specific certs TBD).

## Site

- Single-page static site: everything lives in `index.html` (inline CSS, no framework, no build step).
- Hosted on GitHub Pages from `main`; pushing to `main` deploys.
- `CNAME` maps the custom domain `ceofitnessla.com` (DNS at Porkbun). **Don't touch it.**
- `_config.yml` excludes this file from the published site.
- Theme tokens are CSS variables at the top of the `<style>` block (`--gold: #c9a227`, `--black: #0b0a08`, etc.). Reuse them and the existing classes (`.wrap`, `.eyebrow`, `.lede`, `.btn-primary`, `.btn-ghost`, `.ph`) rather than adding new colors or one-off styles.
- Until "Enforce HTTPS" is on, preview the live site at http://ceofitnessla.com.

## Launch checklist

- [ ] Remove `<meta name="robots" content="noindex, nofollow">` (in `<head>`)
- [ ] Remove the `#gate` div and its access-code `<script>` block at the bottom (plus the `locked` class on `<body>` and the gate CSS)
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

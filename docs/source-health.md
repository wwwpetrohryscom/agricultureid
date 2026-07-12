# Source health

`npm run source:health` ([`scripts/source-health.mjs`](../scripts/source-health.mjs))
checks every registry source URL for reachability and redirects, and reports the
domain distribution.

## Why it is separate from CI

Deterministic build integrity must never depend on unreliable external network
access. So:

- **CI gates are offline and deterministic** (`content:validate`, tests, build).
- **Source health is a separate, manually or scheduled run.** It hits the
  network, uses a 12 s per-request timeout, a polite delay, and an identifying
  User-Agent. It does not scrape search engines and respects publisher terms.

## Interpreting results (important)

Many authoritative publishers (USDA, CABI, Britannica, NOAA, GBIF, some
extension services) deploy **bot mitigation that returns `403 Forbidden` or
times out for non-browser clients**, even though the URL is perfectly reachable
in a browser. The checker therefore distinguishes:

- **Redirects** (`http`→`https`, trailing slash, locale) — benign; the canonical
  URL still resolves.
- **`403` / timeout** — usually **bot-blocking, not a dead link.** These require
  a manual browser check before concluding anything is broken.
- **`404` / connection failure** — a genuine candidate for a broken link,
  warranting a manual check and, if confirmed, a URL fix.

### Latest run (2026-07-12, 39 sources)

- 6 benign redirects (fao, usda-plants, ec-agri, woah, isric, nap-nrc).
- 9 flagged unreachable **to an automated client** — all `403`/timeout from
  bot-mitigated sites (usda, usda-nrcs, usda-fas, cabi, umn-extension, gbif,
  britannica, noaa) plus one `404` (rhs). Manual browser checks confirm these
  homepages/programs resolve for human visitors; the codes reflect bot blocking,
  not broken links. No genuinely dead link was confirmed.

## Companion tooling

- `npm run audit` — offline source usage, tier, and URL-specificity report
  (see [evidence-hierarchy.md](evidence-hierarchy.md)).
- `npm run audit:images` — network image identity + licensing audit
  (see [image-identity-and-licensing.md](image-identity-and-licensing.md)).

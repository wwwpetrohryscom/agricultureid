# AgricultureID Journal — architecture baseline

Recorded 2026-09-01, before any Journal code was written, from the running
production system rather than from documentation or memory. Production code is
the source of truth; every figure below was read from the repository at
`136f41b`, from the Netlify API, or from `https://agricultureid.com` itself.

## The platform as it stands

|                   |                                                                 |
| ----------------- | --------------------------------------------------------------- |
| Repository        | `github.com/wwwpetrohryscom/agricultureid`                      |
| Branch deployed   | `main`                                                          |
| Production commit | `136f41b` (Wave 26)                                             |
| Netlify project   | `agrigultureid` · `bd9337f7-0732-41ff-8a28-ec7780ac939a`        |
| Netlify team      | `hello13hub`                                                    |
| Custom domain     | `agricultureid.com` (no aliases)                                |
| Published deploy  | `6a90df1f84f2da00089204e1`, ready                               |
| Framework         | Next.js 15 App Router, React 19, TypeScript strict              |
| Node              | 20, pinned by `.nvmrc`                                          |
| Package manager   | npm, `package-lock.json`                                        |
| Netlify adapter   | official Next.js runtime (OpenNext); **not** `output: 'export'` |
| Publish directory | `.next`, resolved by the adapter                                |
| Build command     | `npm run build`                                                 |
| Routes            | 1,571                                                           |
| Content items     | 1,068 across 27 content types                                   |
| Search index      | `public/search-index.json`, 1,558 documents, 1.2 MB             |
| Repository data   | `content/` 13 MB · `data/` 51 MB · `public/` 86 MB              |
| Build output      | `.next` ≈ 1.4 GB                                                |
| CI                | one workflow, `validate.yml`, 30 gates, ~8 min                  |
| Netlify deploy    | ~130 s (last five production deploys: 125–135 s)                |

## Routing surface today

- **No `middleware.ts`.** Nothing intercepts requests before the app.
- **No `_redirects` and no `_headers` file.** `netlify.toml` is therefore the
  first redirect source Netlify consults.
- **No redirects or rewrites in `next.config.mjs`.** The config sets
  `reactStrictMode`, `poweredByHeader: false`, `outputFileTracingRoot`,
  `trailingSlash: false`, and one `headers()` block.
- **`netlify.toml` contains no redirects.** It sets the build command and two
  context-scoped `X-Robots-Tag: noindex` header blocks that apply _only_ to
  `deploy-preview` and `branch-deploy`, never to production.
- **Security headers** are declared once, in `next.config.mjs` `headers()`, for
  `/:path*`. The file states explicitly that they must not be duplicated in
  `netlify.toml` or a `_headers` file.

### `/journal` is unclaimed

Measured against production on 2026-09-01:

```
/journal        404
/journal/       308   (Next.js trailingSlash:false folding to /journal)
/journal/news   404
```

No route, no sitemap entry, no content slug. The namespace is free.

## Systems a Journal must not disturb or diverge from

- Authorities · Canonical Jurisdictions · Registries · Regulations · Support
  Programmes · Crop Calendars · Biosecurity · Variety Registrations · Markets ·
  Extension · Inputs · Calculators
- Freshness · Change History · Provenance · Coverage Intelligence
- Soils · Trade · Economics · Climate & Water (all merged)
- Search (`lib/search/`, benchmark of 243 cases, index checksum-gated)
- SEO validators (`seo:audit`, `seo:rendered`, sitemap, robots)
- Consent architecture (`lib/consent/`, `components/consent/`)
- WebmasterID analytics, consent-gated and never in server-rendered HTML
- HELPERG ecosystem bar (`lib/ecosystem/registry.ts`, `ecosystem:audit`)

### Consent — the fact that decides the architecture

`CONSENT_STORAGE_KEY = 'agricultureid_consent'`, persisted in `localStorage`
(`lib/consent/config.ts`). `localStorage` is scoped to an **origin**, not a path.

A Journal served through a same-host proxy at `agricultureid.com/journal` is on
the _same origin_ as the main platform, so a visitor's consent decision is
already shared between the two applications with no cross-domain mechanism, no
cookie, and no third state to reconcile. A Journal on `journal.agricultureid.com`
or on a `*.netlify.app` host would be a different origin and would need its own
consent record — a second, weaker consent flow, which the brief forbids.

This is an argument _for_ the path-based architecture that has nothing to do
with SEO.

### Ecosystem registry — safe to share

`lib/ecosystem/registry.ts` is deliberately dependency-free; its header records
that it imports nothing, not even `@/lib/site`, because the ecosystem UI is
partly client-rendered and any content/SEO import drags the ~13 MB content layer
into the browser bundle. It can therefore be copied into the Journal verbatim
without pulling the corpus with it.

## Why editorial publishing must be separated from the data build

Not a preference. Four measured reasons:

1. **Every publication would rebuild 1,571 routes.** A one-word correction to an
   article would trigger the same 130-second Netlify build and 8-minute CI
   workflow as a wave that adds 55,924 climate values.

2. **A data gate would block an editorial fix.** `npm run validate` runs 30
   gates over the corpus. If a source snapshot drifted, or a registry link
   broke, the pipeline would be red — and a correction to a published article,
   which is a _time-sensitive obligation_, could not ship until an unrelated
   data problem was fixed. Corrections must never queue behind data.

3. **Editorial cadence and data cadence are different.** The corpus changes in
   waves, deliberately, a few times a month. A Journal publishes on its own
   rhythm and must be able to publish several times a day without touching the
   knowledge base's deploy history.

4. **Blast radius.** A Journal is where new, less-reviewed code lands: hero
   layouts, feeds, embeds. Inside the main application, a mistake there can take
   down crops, countries, registries and the search index. In a separate
   project, the worst case is that `/journal/*` fails and every other URL on the
   domain is untouched.

The inverse also holds: a change to the climate layer should not rebuild a
publication, and it will not.

## What the architecture must therefore provide

One public hostname, `agricultureid.com`. Two independent deployment units:

```
agricultureid.com/*         →  agrigultureid          (this repository)
agricultureid.com/journal/* →  agricultureid-journal  (new repository)
```

The `*.netlify.app` hostname of the second project is infrastructure. It must
never appear in rendered output, a canonical tag, a feed, a sitemap, an IndexNow
submission, or a browser address bar.

The routing mechanism is examined, tested and decided in
`docs/journal-routing-architecture.md`.

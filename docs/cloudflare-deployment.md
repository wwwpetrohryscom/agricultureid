# Cloudflare deployment

Status: **live since 2026-11-18** (cut over 2026-11-18 ~21:25 UTC). agricultureid.com is served by Cloudflare
Workers from a static export. It replaced Netlify (`docs/netlify-deployment.md`,
retired).

## Shape

One hostname, two Workers, routed by path in the `agricultureid.com` zone:

| Zone route                   | Worker                  | Repository                              | Serves                     |
| ---------------------------- | ----------------------- | --------------------------------------- | -------------------------- |
| `agricultureid.com/*`        | `agricultureid`         | this one                                | `out/` (the static export) |
| `agricultureid.com/journal*` | `agricultureid-journal` | `wwwpetrohryscom/agricultureid-journal` | its own `dist/`            |

Cloudflare sends a request to the most specific matching route, so `/journal`,
`/journal?…` and everything below `/journal/` go to the Journal and everything
else comes here. The Journal route is `journal*`, not an exact `journal` plus
`journal/*`: route patterns are matched against the query string too, so an
exact `agricultureid.com/journal` route missed `/journal?utm_source=…`, which
then fell through to this site's 404 (caught live during the cutover and
fixed). The side effect is that other paths starting with `/journal` (such as
`/journalism`, which exists on neither site) get the Journal's 404 page
instead of this site's; both are 404s. The two deploy independently, which is
the property the Netlify proxy existed to provide
(`docs/journal-routing-architecture.md`): publishing an article does not
rebuild 1,800 routes, and a corpus gate failing here cannot block a Journal
correction.

Both are **static assets**. This Worker's script (`cloudflare/worker.js`) runs
only for `/_next/image` (`run_worker_first`); the Journal has no script at all.
Asset requests are free and not counted against the Workers request quota.

## Build and deploy

```bash
npm ci
npm run build          # prebuild: search index + image variants
                       # next build → out/
                       # postbuild: out/_headers + out/_redirects
npx wrangler@4 deploy  # uploads changed files only, then switches versions
```

Deploys are manual from a logged-in machine; there is no Git integration. A
push to `main` builds nothing anywhere. `netlify.toml` skips every Netlify
build (`ignore = "exit 0"`) so the retired Netlify project cannot publish an
old build.

`NEXT_PUBLIC_SITE_URL` must stay unset: canonical URLs, the sitemap and Open
Graph resolve to `https://agricultureid.com`.

## What changed to make the export possible

| Before (Netlify, Next.js server)                            | Now (static export)                                                                                                                                                                        |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/search` read `searchParams` on the server                 | Prerendered once; `SearchApp` reads `?q=` in the browser before it first rewrites the URL                                                                                                  |
| `/compare/custom` resolved `?type=&ids=` on the server      | Prerendered shell; `CustomComparison` assembles the table from `/compare/custom/data/{type}.json`, written at build time. `tests/custom-comparison.test.ts` pins it to the server resolver |
| Security headers in `next.config.mjs` `headers()`           | `cloudflare/security-headers.mjs` → `out/_headers` (same five headers; static files now carry them too)                                                                                    |
| `next/image` through the Netlify Image CDN                  | WebP variants generated at build (`scripts/build-image-variants.ts`, `lib/image-loader.ts`)                                                                                                |
| `/_next/image?url=…` optimiser URL                          | `cloudflare/worker.js` serves the original same-origin file under that URL (200)                                                                                                           |
| `/a/b/` → 308 `/a/b` (Next, `trailingSlash: false`)         | `out/_redirects`: `/*/ /:splat 308`                                                                                                                                                        |
| `/journal/*` proxied to `agricultureid-journal.netlify.app` | Zone routes to the `agricultureid-journal` Worker                                                                                                                                          |
| `http://` → `https://`, `www` → apex (Netlify)              | Zone settings: **Always Use HTTPS** on; Redirect Rule `http*://www.agricultureid.com/*` → `https://agricultureid.com/${2}`, 301, query kept                                                |

Known, accepted differences: `/index.html` and `/crops/wheat.html` now redirect
(307) to the clean URL instead of returning 404; the RSC payloads
(`/crops/wheat.txt`) are public files the client router fetches; HTML is served
as `text/html` without a charset parameter (every page declares
`<meta charset="utf-8">`); `/journal/` now 308s to the canonical `/journal`
instead of answering 200.

## Free-plan limits (checked 2026-11-18)

| Limit (Workers Free)             | Main Worker                | Journal Worker |
| -------------------------------- | -------------------------- | -------------- |
| 20,000 asset files per version   | 4,071                      | 102            |
| 25 MiB per asset file            | largest 1.6 MB             | < 1 MB         |
| 3 MiB Worker script (compressed) | < 1 KB                     | none           |
| 100,000 Worker requests per day  | only `/_next/image` counts | none counts    |
| 100 `_redirects` dynamic rules   | 1                          | 1              |

Total upload is about 1.1 GB, mostly HTML and RSC payloads; Wrangler uploads
only changed files. **Watch the file count**: each new page adds two files.

## DNS (zone `agricultureid.com`, Cloudflare account "Info@helperg.com's Account")

- `A @` (`75.2.60.5`) and `CNAME www` (`agrigultureid.netlify.app`) are
  **proxied**. Their targets are never contacted: the Worker route answers the
  apex and the Redirect Rule answers `www`. They exist because a proxied record
  must exist for a route to receive traffic.
- MX (Namecheap eforward), SPF and the verification TXT records are untouched
  and DNS-only.

## Rollback

To send traffic back to Netlify (while the Netlify projects still exist):
set the `A @` and `CNAME www` records to **DNS only** in the dashboard. Netlify
answers immediately; its certificate covers both names. Re-enable Netlify
builds by restoring the Netlify-era `netlify.toml` from git history.

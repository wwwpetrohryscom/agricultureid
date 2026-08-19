# Netlify deployment

Operational reference for hosting AgricultureID on Netlify. This replaces the
Vercel operational instructions; historical phase reports that mention Vercel are
release history and are left untouched.

> **Status at time of writing:** the repository is Netlify-ready and merged, but
> **no Netlify site has been created and no DNS has been changed.** The
> production domain still resolves to the previous host. Steps 2–17 of the
> [rollout](#rollout-sequence) are the user's to perform.

## Project facts

| Setting               | Value                                                 |
| --------------------- | ----------------------------------------------------- |
| Repository            | `github.com/wwwpetrohryscom/agricultureid`            |
| Framework             | Next.js 15.5 (App Router, React 19)                   |
| Production branch     | `main`                                                |
| Base / root directory | repository root (leave blank in Netlify)              |
| Build command         | `npm run build` (set in `netlify.toml`)               |
| Publish directory     | **leave blank** — the Next.js adapter sets it         |
| Install command       | `npm ci` (Netlify default when a lockfile is present) |
| Node version          | **20**, from the checked-in `.nvmrc`                  |
| Package manager       | npm (`package-lock.json`)                             |
| Production domain     | `https://agricultureid.com`                           |

## How Netlify builds this project

Netlify auto-detects Next.js and applies the official
[OpenNext adapter](https://github.com/opennextjs/opennextjs-netlify). Nothing
needs to be installed and **`@netlify/plugin-nextjs` must not be added** —
Netlify advises against pinning the adapter so it tracks Next.js releases. The
legacy plugin is for Next.js < 13.5 only.

The build does three things:

1. `prebuild` runs `npm run search:index`, regenerating
   `public/search-index.json` (1,298 documents) with a fresh checksum. A failure
   here fails the deploy, so a stale index can never ship.
2. `next build` prerenders **1,374 pages** and emits the sitemap and robots
   routes.
3. The adapter uploads static assets and the prerendered route cache, and
   provisions serverless functions for the two on-demand routes.

### Why not static export

`output: 'export'` is **not** viable and must not be introduced. `/search` and
`/compare/custom` read `searchParams` and are rendered on demand
(`ƒ (Dynamic)` in the build output). A static export would break both. Likewise,
never add a blanket SPA rewrite (`/* /index.html 200`) — it breaks App Router
routing on the adapter.

## Environment variables

Nothing is required. The build and every canonical URL work with **zero**
variables configured, which is deliberate: it makes production output identical
across hosts.

| Variable               | Build | Runtime | Public | Previous Vercel use | Netlify value                          | Safe default                | GitHub Actions |
| ---------------------- | ----- | ------- | ------ | ------------------- | -------------------------------------- | --------------------------- | -------------- |
| `NEXT_PUBLIC_SITE_URL` | yes   | no      | yes    | never set           | **leave unset**                        | `https://agricultureid.com` | not needed     |
| `CONTEXT`              | yes   | no      | no     | n/a                 | **set by Netlify** — never set by hand | unset ⇒ indexable           | not needed     |
| `FAOSTAT_RELEASE`      | no    | no      | no     | never set           | not needed                             | `2025-12-18`                | not needed     |
| `CI`                   | no    | no      | no     | n/a                 | set by Netlify/CI                      | —                           | set by Actions |
| `INDEXNOW_KEY`         | no    | no      | no     | **never used**      | **not required**                       | —                           | not needed     |

Notes:

- **`NEXT_PUBLIC_SITE_URL` should stay unset in Netlify.** `lib/site.ts` already
  defaults to `https://agricultureid.com`. Leaving it unset is what guarantees a
  Deploy Preview emits production canonicals rather than canonicalising to its
  own `*.netlify.app` host.
- **`INDEXNOW_KEY` does not exist in this repository.** IndexNow verification is
  a static public file, not an API call; there is no submission workflow. Do not
  create the variable to satisfy a checklist.
- `FAOSTAT_RELEASE` is read only by `scripts/fetch-faostat-trade.mjs`, a manual
  local data-refresh script. It never runs during a Netlify build.

There are **no secrets to configure**. Nothing in the build reads a credential.

## Headers

`next.config.mjs` `headers()` is the **single canonical source** of production
security headers (`X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`). The
adapter applies them in full. Do **not** duplicate them into `netlify.toml` or a
`_headers` file.

The only headers in `netlify.toml` are context-scoped `X-Robots-Tag` entries for
`deploy-preview` and `branch-deploy`. Netlify applies context blocks only to the
named context, so production is untouched by them.

No CSP is set. This matters for analytics: the consent-gated WebmasterID script
is injected client-side from `https://webmasterid.com` and posts to the vendor's
ingest endpoint. If a CSP is ever added, it must allow both, or the consent
"accept" path silently breaks.

## Deploy Previews and indexability

Previews are served on public `*.netlify.app` URLs. Two independent layers keep
them out of search results:

1. `app/robots.ts` returns `Disallow: /` when `CONTEXT` is a known
   non-production value (`lib/deploy-context.ts`).
2. `netlify.toml` adds `X-Robots-Tag: noindex, nofollow` in the
   `deploy-preview` and `branch-deploy` contexts.

The predicate **allow-lists** non-production contexts rather than testing
`CONTEXT !== 'production'`. An unknown or absent value therefore stays
**indexable**. This is deliberate: a crawlable preview is minor, a de-indexed
production site is an outage. `tests/deploy-context.test.ts` locks this in.

## IndexNow

`public/8f700117e33b46399992b313b729d2ce.txt` is served verbatim from the public
directory at
`https://agricultureid.com/8f700117e33b46399992b313b729d2ce.txt`, containing
exactly `8f700117e33b46399992b313b729d2ce` (32 bytes, no trailing newline).

Do not move, rename, or rewrite it. There is **no** IndexNow submission workflow
in this repository and no Vercel deploy hook performed one, so nothing needs a
platform-neutral replacement. If submission is wanted later, add it as an
explicit GitHub Actions step gated on a successful production deploy — not as a
side effect of this migration.

## WebmasterID + GDPR consent

Hosting does not participate in the consent gate; the architecture is entirely
client-side and unchanged by this migration. Verify after the first Netlify
deploy:

| State                     | Expected                                                   |
| ------------------------- | ---------------------------------------------------------- |
| Before any choice         | no `tracker.iife.min.js`, no preconnect, no ingest request |
| After **Accept**          | exactly one tracker script, ingest begins                  |
| After **Reject**          | tracker absent                                             |
| After withdrawal + reload | tracker still absent                                       |

`npm run consent:audit` proves no prerendered page contains the tracker;
`npm run test:e2e` observes real browser requests.

## Verification before DNS

Run against the `*.netlify.app` production URL, substituted for `<site>`:

```bash
curl -sI https://<site>.netlify.app/ | head -20
curl -s  https://<site>.netlify.app/8f700117e33b46399992b313b729d2ce.txt   # exact key, no newline
curl -s  https://<site>.netlify.app/robots.txt                            # Allow: / + canonical sitemap
curl -s  https://<site>.netlify.app/sitemap.xml | grep -c '<loc>'         # 1361
curl -sI https://<site>.netlify.app/does-not-exist | head -1              # HTTP/2 404
curl -s  https://<site>.netlify.app/crops/wheat | grep -o '<link rel="canonical"[^>]*>'
```

Every canonical must read `https://agricultureid.com/...`, **not** the
`.netlify.app` host — even before DNS is switched. That is expected and correct.

## Rollout sequence

1. Merge the migration PR into `main`. _(done)_
2. User imports the GitHub repository into Netlify (Add new site → Import).
3. Accept the auto-detected settings; confirm build command `npm run build`, and
   leave the publish directory **blank**.
4. Let Netlify build `main`.
5. Verify the `*.netlify.app` production deploy completely (section above +
   browser QA below).
6. Configure environment variables — **none are required**; only revisit if a
   future change adds one.
7. Rebuild and re-verify if anything changed in step 6.
8. Add `agricultureid.com` in Netlify → Domain management.
9. **Only then** change DNS to the records Netlify displays (see below).
10. Verify TLS certificate issuance completes.
11. Verify `www` → apex redirect behaviour.
12. Verify canonicals still read `https://agricultureid.com`.
13. Verify `/robots.txt` and `/sitemap.xml` on the live domain.
14. Verify the consent banner and that analytics stays gated.
15. Verify the IndexNow file on the live domain.
16. Monitor Netlify deploy and function logs for errors.
17. Only after production is stable, disconnect the domain from Vercel.

## DNS

**Do not pre-configure DNS.** Netlify displays the exact records only after the
domain is added to the site, and the values are site-specific. Guessing an A
record or CNAME target will cause an outage.

When Netlify shows them, expect one of two shapes — use whichever Netlify
actually presents:

- **Netlify DNS** — delegate the domain by replacing the registrar's
  nameservers with the four `dnsX.p0X.nsone.net` names Netlify lists.
- **External DNS** — an apex `A`/`ALIAS` record plus a `CNAME` for `www`
  pointing at the site's Netlify subdomain.

Canonical host is the **apex**, `https://agricultureid.com`. If `www` is
configured, set it to redirect permanently (301) to the apex in Netlify's domain
settings.

After the switch, verify: apex resolves, `www` redirects, HTTPS valid,
certificate covers both hosts, no redirect loop, no duplicate host serving 200,
canonical host unchanged, sitemap host unchanged.

## Rollback

The migration is reversible until the Vercel project is deleted, which must not
happen until Netlify production is verified stable.

| Item                                    | Value                                               |
| --------------------------------------- | --------------------------------------------------- |
| Last known-good commit before migration | `afdaf3499be7c8d40bb5b75558e22be7760db4bb`          |
| Migration branch                        | `feat/netlify-migration`                            |
| Vercel project                          | keep connected and intact until Netlify is verified |
| Previous DNS records                    | **user must record these before changing them**     |

Roll back by restoring the previous DNS records; the Vercel deployment keeps
serving throughout. No repository change is needed to roll back — the repo
changes are host-neutral and remain valid on Vercel (`netlify.toml` is inert
there, and `CONTEXT` is simply never set, so robots.txt stays indexable).

Conditions requiring rollback: the live domain serves 5xx or the wrong content;
canonicals or sitemap host change; `/sitemap.xml` or the IndexNow file 404s;
the tracker loads before consent; TLS fails to issue within a reasonable window.

## Known Netlify differences vs Vercel

- **Prerendered pages are served through a function on first access after a
  deploy**, then cached. Expect a slightly slower first hit per page after each
  deploy; steady-state serving is from cache.
- **`next/image` uses Netlify Image CDN** instead of Vercel's optimizer. Only
  one image is served through `next/image` (the homepage hero, a local asset);
  everything else is a plain `<img>` on a local file, so exposure is minimal.
  No `images.remotePatterns` are configured and none are needed — no remote
  images are rendered anywhere.
- **Function memory is fixed at 1024 MB** and is not configurable. This affects
  only `/search` and `/compare/custom`; both are lightweight. Build memory is a
  separate, much larger budget (the build peaks around 1.9 GB).
- **Default build time limit is 15 minutes** on most plans. This build takes
  ~24 s locally, so there is a very wide margin.

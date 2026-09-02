# AgricultureID Journal — routing architecture decision

Status: **decided and proven**, 2026-09-01.

The question: `agricultureid.com/*` is served by one Netlify project and
`agricultureid.com/journal/*` must be served by a different one, without the
visitor ever seeing a second hostname and without either project's build being
coupled to the other's.

DNS cannot do this. A hostname resolves to a host; it cannot route by path. The
split has to happen above DNS, in the layer that already receives the request.

## Architectures examined

### 1. A directory inside the main application — rejected

`app/journal/` in this repository. Simple, no proxy, no second project.

Rejected because it fails the primary objective: publishing an article would
rebuild 1,571 routes and run 30 corpus gates. A correction could be blocked by
an unrelated data failure. Measured in
`docs/journal-platform-architecture-baseline.md`.

### 2. A subdomain — rejected

`journal.agricultureid.com` as its own Netlify project with its own certificate.
Trivially supported, no proxy at all.

Rejected on three grounds:

- The brief requires publications under `agricultureid.com/journal/...` and
  requires no public dependency on `journal.agricultureid.com`.
- A subdomain is a **different origin**, so the `localStorage`-backed consent
  record (`agricultureid_consent`) would not be shared. The Journal would need
  its own consent flow — a second, weaker one.
- Link equity and brand identity fragment across two hosts.

### 3. Netlify Edge Function proxy — rejected as unnecessary

An edge function on the main site could fetch and stream the Journal's response.

Rejected because it is strictly more machinery than a declarative rewrite for
the same result: it adds a code path to maintain, an invocation cost on every
Journal request, and a new failure mode, while the platform already offers the
behaviour as configuration. Edge functions earn their place when a decision must
be _computed_ per request. Nothing here is computed — `/journal/*` always goes to
the same place.

### 4. Netlify proxy rewrite in `netlify.toml` — **chosen**

Two rules on the main project, `status = 200`, `force = true`, targeting the
Journal project's `.netlify.app` hostname. Netlify fetches the response and
returns it under the original URL, so the address bar keeps saying
`agricultureid.com/journal/...`.

## Why the chosen mechanism is sound

Each claim below is from current Netlify documentation, checked on 2026-09-01,
not from memory.

**Netlify rewrites beat the Next.js runtime.** From the Next.js redirects and
rewrites guide: _"Any Netlify redirects or rewrites that you create take
precedence over those created by Next.js Runtime."_ The documented order is
`_redirects`, then `netlify.toml`, then static files, then Next.js. This
repository has no `_redirects`, so `netlify.toml` is consulted first and the
main application never sees a `/journal` request.

**This is not the forbidden case.** The same page carries a danger notice:
_"Do not add a rewrite from the site root (such as `from = "/"`) in netlify.toml
or \_redirects. Your root-level rewrite would take precedence over Next.js
Runtime's generated rewrites and break routing on your site."_ The rules here are
prefixed at `/journal`, which is measurably unclaimed — 404 in production before
the rules exist.

**Cross-project rewrites are supported within a team and blocked across teams.**
From the rewrites and proxies guide: _"For security reasons, rewrites between
Netlify sites belonging to different teams are not allowed."_ Both projects are
on `hello13hub`.

**The `.netlify.app` target is the recommended form.** _"If you want to proxy to
another Netlify site, we recommend using the site's `.netlify.app` subdomain
instead of the custom domain in your rewrite rule."_

**One hop is enough.** _"By default, we limit internal rewrites to one 'hop'."_
The Journal serves its own responses and proxies nothing, so the budget is spent
once.

**`force` is required.** _"By default, you can't shadow a URL that actually
exists within the site."_ Nothing occupies `/journal` today; `force = true`
means the rules do not silently stop working if something ever does.

**The relative-asset warning is answered by `basePath`.** The proxy
documentation warns that _"Rewrites can cause pages that use assets specified
through relative paths to load incorrectly… use absolute paths for your assets."_
The Journal sets `basePath: "/journal"`, so every URL it emits — pages, `_next`
chunks, `public/` assets, RSC payloads, prefetches, client navigation targets —
is already an absolute path beginning `/journal`. That is the whole solution to
Phase 2, and it is why `assetPrefix` is deliberately **not** set: `assetPrefix`
exists to serve assets from a _different origin_, which is the opposite of the
requirement. Setting both produces double-prefixed URLs that 404 in a way that
looks like a caching problem.

## Proven, not assumed

The same architecture — Next.js on the Netlify runtime, `basePath`, a
`status = 200 force = true` proxy from a main project to a separate publication
project on the same team — is already serving production traffic on two other
sites in this team. Measured on 2026-09-01:

```
https://asteriastar.com/blog                    200, no redirect
https://asteriastar.com/blog/                   200, no redirect
  assets served from /blog/_next/static/media/…
  no X-Robots-Tag on the proxied response
https://www.globalcityintelligence.com/blog     200, no redirect
```

## The rules

On the **main** project only, in `netlify.toml`:

```toml
[[redirects]]
  from = "/journal"
  to = "https://agricultureid-journal.netlify.app/journal"
  status = 200
  force = true

[[redirects]]
  from = "/journal/*"
  to = "https://agricultureid-journal.netlify.app/journal/:splat"
  status = 200
  force = true
```

Two rules, because the splat does not match the bare prefix.

### There is deliberately no trailing-slash rule

Netlify's matcher folds `/journal` and `/journal/` onto each other, so
`from = "/journal"` already serves both. The folding is symmetric, which means a
rule written to normalise `/journal/ → /journal` matches the bare `/journal` too
and redirects it to itself — an infinite loop on the publication's homepage while
every child path keeps working. This was reached in production on a sibling
project before the routing gate next ran.

The consequence of not normalising is that the homepage answers 200 at both
forms. That is a duplicate URL, not a broken one, and it is resolved the way
duplicate URLs are meant to be: every page carries `<link rel="canonical">`
pointing at the no-slash form, and only that form appears in the sitemap.

## Division of responsibility

|                                 | Main project                  | Journal project            |
| ------------------------------- | ----------------------------- | -------------------------- |
| Owns the hostname               | yes                           | no                         |
| TLS certificate                 | yes                           | not for this domain        |
| Serves `/journal/*`             | forwards only                 | yes                        |
| Serves everything else          | yes                           | never sees it              |
| Sitemap                         | `/sitemap.xml`                | `/journal/sitemap.xml`     |
| Security headers                | `next.config.mjs` `headers()` | its own, in its own config |
| Consent state                   | `localStorage`, same origin   | same record, same origin   |
| Rebuilds when the other changes | no                            | no                         |

Because Netlify redirects are evaluated before the Next.js function, the main
application's `headers()` block does **not** apply to `/journal/*`. The Journal
must declare its own security headers. This is a consequence of the mechanism,
not an oversight, and the Journal's routing validator checks for it.

## Caching, previews, cookies

- **Caching.** Each project sets its own cache headers on its own responses; the
  proxy forwards them. The main project's cache behaviour is unchanged because
  it never generates a `/journal` response.
- **Deploy previews.** The main project's previews inherit the same rules and
  proxy to the Journal's _production_ deploy. A Journal preview is reviewed on
  its own project's preview URL. Both projects' previews are de-indexed by
  context-scoped `X-Robots-Tag` and by `robots.txt`.
- **Cookies.** Nothing here sets one. Consent is `localStorage`, so there is no
  cookie to scope, forward or reconcile.
- **Timeout.** Proxy rewrites time out after 26 seconds. The Journal is
  static-first; a page that took 26 seconds would be a defect regardless.

## Canonical policy

Exactly one public form of every Journal URL:

```
https://agricultureid.com/journal/<section>/<slug>
```

No trailing slash. The `*.netlify.app` hostname appears in exactly one place in
the entire architecture — the `to =` field of the two rules above — and is
forbidden everywhere else: canonical tags, Open Graph URLs, JSON-LD, feeds,
sitemap, search index, IndexNow submissions. `validate:seo` in the Journal
repository fails the build if that hostname appears in any rendered output.

The Journal's own `*.netlify.app` host must also not be indexable, and the tool
for that is **not** a blanket `X-Robots-Tag: noindex` in production: a proxy
forwards the origin's response headers to the visitor, so a noindex set on the
Journal's production responses would travel through and de-index the real
`agricultureid.com/journal` URLs. The Journal instead serves a host-aware
`robots.txt` and relies on canonical tags, with `X-Robots-Tag` scoped to
non-production contexts exactly as the main project already does.

## Failure isolation

If the Journal project is unavailable, `/journal/*` fails and nothing else does.
Crops, countries, authorities, registries, regulations, markets, inputs, tools,
calculators, search, the main sitemap and `robots.txt` are all served by the main
project's own function and never touch the proxy.

The reverse is also true: the Journal does not read the corpus, does not import
`data/`, and does not fail when a data gate fails.

## Rollback

Delete the two `[[redirects]]` blocks from `netlify.toml` and redeploy the main
project. `/journal` returns to 404 and nothing else changes. Full procedure,
including the intermediate options, in `docs/journal-routing-rollback.md`.

# Rolling back the /journal routing

The Journal is a separate Netlify project reached through two proxy rules in
this repository's `netlify.toml`. Everything about the integration is those two
rules plus a navigation entry and a sitemap line, so rollback is small and
complete.

## What is at risk, and what is not

Only `/journal/*`. The proxy is a prefix rule evaluated before this
application's own routing, and this application never generates a `/journal`
response. If the Journal project is unavailable — bad deploy, build failure,
platform incident — `/journal/*` fails and every other URL on
`agricultureid.com` is untouched: crops, countries, authorities, registries,
regulations, markets, inputs, tools, calculators, search, `/sitemap.xml` and
`/robots.txt` are all served by this project's own function.

That containment is the reason for the split, not a side effect of it.

## Level 1 — roll back the Journal, keep the routing

The usual case: the Journal deployed something broken. Nothing in this
repository needs to change.

```bash
# list recent Journal deploys
curl -s -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  "https://api.netlify.com/api/v1/sites/484c81b7-45b2-4f80-9f33-496141918c3e/deploys?per_page=10" \
  | python3 -c "import json,sys; [print(d['id'], d['state'], d['created_at'], (d.get('title') or '')[:50]) for d in json.load(sys.stdin)]"

# restore a known-good one
curl -s -X POST -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  "https://api.netlify.com/api/v1/sites/484c81b7-45b2-4f80-9f33-496141918c3e/deploys/<DEPLOY_ID>/restore"
```

`agricultureid.com/journal` serves the restored version within seconds. This
project is not rebuilt and its deploy history does not change.

## Level 2 — take /journal offline, keep everything else

If the Journal must disappear entirely — a legal problem with a publication, a
security issue in the publication app — delete the two `[[redirects]]` blocks
at the foot of `netlify.toml`, commit, and merge.

`/journal` returns to 404. This site is otherwise unchanged. The Journal project
keeps running on its own hostname where it can be fixed.

Removing the routing without removing the navigation entry leaves a link to a
404, so remove the `Journal` entry from `SECTIONS` in `lib/site.ts` at the same
time, and the `/journal/sitemap.xml` line from `app/robots.ts`.

## Level 3 — full removal

1. Delete the two `[[redirects]]` blocks from `netlify.toml`.
2. Remove the `Journal` entry from `SECTIONS` and from `REFERENCE_NAV` in
   `lib/site.ts`.
3. Remove `/journal/sitemap.xml` from `app/robots.ts`.
4. Remove `'/journal'` from `PROXIED_PREFIXES` in
   `scripts/rendered-link-audit.ts`.
5. Merge. Netlify rebuilds this project and `/journal` is a 404 again.

The Journal repository and Netlify project are untouched by all of this and can
be deleted separately.

## Verifying a rollback

```bash
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://agricultureid.com/journal
curl -s -o /dev/null -w "%{http_code}\n" https://agricultureid.com/crops
curl -s -o /dev/null -w "%{http_code}\n" https://agricultureid.com/sitemap.xml
```

After a Level 2 or 3 rollback the first should be 404 and the other two 200.
After a Level 1 rollback all three should be 200.

## The identifiers

|                    |                                                                  |
| ------------------ | ---------------------------------------------------------------- |
| Main project       | `agrigultureid` · `bd9337f7-0732-41ff-8a28-ec7780ac939a`         |
| Journal project    | `agricultureid-journal` · `484c81b7-45b2-4f80-9f33-496141918c3e` |
| Journal repository | `github.com/wwwpetrohryscom/agricultureid-journal`               |
| Journal origin     | `https://agricultureid-journal.netlify.app`                      |
| Team               | `hello13hub`                                                     |

## Independent deployment, as measured

Verified 2026-09-02 by pushing a one-word change to a single publication and
watching both projects:

**A one-word change to one Journal publication**, pushed 01:11:10Z:

```
                    before                              after
MAIN     6a9775fd7d09fa00082dd7b8 01:03:57Z   6a9775fd7d09fa00082dd7b8 01:03:57Z
JOURNAL  6a97775720d6b20008ff255a 01:09:43Z   6a9777afadd84a0008d74477 01:11:11Z
```

The Journal built one second after the push. The knowledge platform's newest
deploy did not change.

**A change to this repository**, merged as #61:

```
                    before                              after
MAIN     6a9777... (see above)               6a977a0e49ab1c0009d3df86 01:21:18Z
JOURNAL  6a9777afadd84a0008d74477 01:11:11Z  6a9777afadd84a0008d74477 01:11:11Z
```

This project built. The Journal's newest deploy did not change.

The two lifecycles are independent in both directions, which is the whole
point: an article does not pay for a 1,571-route rebuild, and a data wave does
not rebuild a publication.

## IndexNow

Both projects share a host, and IndexNow keys validate at the host root, so the
existing key at `/8f700117e33b46399992b313b729d2ce.txt` already authorises
submissions for `/journal/...` URLs. Nothing about IndexNow changes when the
Journal publishes, and removing the routing does not invalidate anything.

## Two failure modes that are not rollback candidates

**The Journal's own deploy is green but every route 404s.** The Next.js adapter
did not run. On a project created through the Netlify API the adapter needs both
`@netlify/plugin-nextjs` declared in `netlify.toml` and a publish directory of
`.next`; with either one missing the deploy still reports ready. The tell is the
deploy summary — a working deploy reports redirect rules, a header rule and one
function, and a broken one reports none of the three.

**`/journal` redirects to itself.** Somebody added a trailing-slash
normalisation rule. Netlify's matcher folds `/journal` and `/journal/` onto each
other, so the rule matches its own source. Delete it; the canonical tag already
resolves the duplicate.

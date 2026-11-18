/**
 * agricultureid.com — Cloudflare Worker.
 *
 * Almost everything is a static asset served straight from `out/` without
 * running this script (see `run_worker_first` in wrangler.jsonc). The Worker
 * runs for ONE path only:
 *
 *   /_next/image   The Netlify-era image optimiser URL. Pages served before
 *                  the move (browser caches, image search) reference
 *                  `/_next/image?url=/images/…&w=…`. The static export has no
 *                  optimiser, so the original same-origin file is served under
 *                  the old URL with a 200, as before. Anything that is not a
 *                  same-origin path is a 400, so this can never fetch or
 *                  redirect off-site.
 *
 * /journal* never reaches this Worker: a more specific zone route sends it to
 * the separate `agricultureid-journal` Worker.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/_next/image') {
      const src = url.searchParams.get('url') ?? '';
      if (!src.startsWith('/') || src.startsWith('//') || src.includes('\\')) {
        return new Response('Bad image URL', { status: 400 });
      }
      const target = new URL(src, url.origin);
      return env.ASSETS.fetch(new Request(target, request));
    }
    return env.ASSETS.fetch(request);
  },
};

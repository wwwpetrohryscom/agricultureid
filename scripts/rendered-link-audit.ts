/**
 * Rendered-HTML link audit (Phase 5F §5).
 *
 * Reads the **actual emitted build output** and nothing else. Every anchor it
 * counts is an `<a href>` that exists in a real HTML file. It does not consult
 * the content registry for links, does not consult the sitemap for reachability,
 * and does not model navigation.
 *
 * This is the counterpart to `registryReachabilityAudit()` in `lib/seo/audit.ts`,
 * which is a hand-written model and is labelled as one.
 *
 * Requires a completed `npm run build`. Run: `npm run seo:rendered`.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { SITE, SECTIONS } from '../lib/site';
import { PUBLISHED_CONTENT, contentUrlPath } from '../lib/content/registry';
import { sitemapPaths } from '../lib/seo/routes';
import {
  extractLinks,
  extractCanonical,
  internalTargets,
  isNoindex,
  normalizeInternalPath,
  type ExtractedLink,
} from '../lib/seo/rendered-links';

/* -------------------------------------------------------------------------- */
/*  Locating the build output                                                  */
/* -------------------------------------------------------------------------- */

const APP_DIR = join(process.cwd(), '.next', 'server', 'app');
const EXPORT_DIR = join(process.cwd(), 'out');

/**
 * `next.config.mjs` sets no `output: 'export'`, so there is no `out/` directory.
 * Next still prerenders every static/SSG route to `.next/server/app/**\/*.html`,
 * which is the same HTML the server sends. We prefer `out/` if a future config
 * change produces one.
 */
function outputRoot(): { root: string; label: string } {
  if (existsSync(EXPORT_DIR)) return { root: EXPORT_DIR, label: 'out/' };
  if (existsSync(APP_DIR)) return { root: APP_DIR, label: '.next/server/app/' };
  console.error(
    'No build output found.\n' +
      `Looked for ${EXPORT_DIR} and ${APP_DIR}.\n` +
      'Run `npm run build` first. This audit refuses to fall back to a model.',
  );
  process.exit(1);
}

function walkHtml(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir).sort()) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkHtml(full, acc);
    else if (entry.endsWith('.html')) acc.push(full);
  }
  return acc;
}

/** Map an emitted HTML file to the route path it is served at. */
function routeForFile(file: string, root: string): string {
  const rel = relative(root, file).split(sep).join('/');
  return normalizeInternalPath(`/${rel}`);
}

/**
 * Literal (non-parameterised) app routes that exist but are NOT prerendered to
 * HTML — i.e. dynamic/on-demand routes such as the noindex `/search` page. We
 * find them by locating `page.js` in a directory with no sibling `.html` and no
 * `[param]` segment. A link to one of these is not broken; it just has no static
 * HTML for this audit to parse.
 */
function dynamicLiteralRoutes(root: string): Set<string> {
  const out = new Set<string>();
  const walk = (dir: string): void => {
    const entries = readdirSync(dir);
    const hasPage = entries.includes('page.js');
    const hasHtml = entries.some((e) => e.endsWith('.html'));
    const rel = relative(root, dir).split(sep).join('/');
    if (hasPage && !hasHtml && !rel.includes('[')) {
      out.add(normalizeInternalPath(`/${rel}`));
    }
    for (const e of entries) {
      const full = join(dir, e);
      if (statSync(full).isDirectory()) walk(full);
    }
  };
  walk(root);
  return out;
}

/* -------------------------------------------------------------------------- */
/*  Page model                                                                 */
/* -------------------------------------------------------------------------- */

interface Page {
  path: string;
  file: string;
  canonicalPath: string | null;
  selfCanonical: boolean;
  noindex: boolean;
  links: ExtractedLink[];
  /** Unique internal targets, self-links excluded. */
  outbound: string[];
  /** Raw anchor count, including duplicates and non-links. */
  anchorCount: number;
}

function loadPages(root: string): Page[] {
  const pages: Page[] = [];
  for (const file of walkHtml(root)) {
    const path = routeForFile(file, root);
    const html = readFileSync(file, 'utf8');
    const links = extractLinks(html, { origin: SITE.url, basePath: path });
    const canonicalRaw = extractCanonical(html);
    let canonicalPath: string | null = null;
    if (canonicalRaw) {
      try {
        canonicalPath = normalizeInternalPath(
          new URL(canonicalRaw, SITE.url).pathname,
        );
      } catch {
        canonicalPath = null;
      }
    }
    pages.push({
      path,
      file,
      canonicalPath,
      selfCanonical: canonicalPath === path,
      noindex: isNoindex(html),
      links,
      outbound: internalTargets(links, path),
      anchorCount: links.length,
    });
  }
  return pages;
}

/* -------------------------------------------------------------------------- */
/*  Report                                                                     */
/* -------------------------------------------------------------------------- */

function pct(n: number, d: number): string {
  return d === 0 ? '0%' : `${((n / d) * 100).toFixed(1)}%`;
}

function main(): void {
  const { root, label } = outputRoot();
  const pages = loadPages(root);
  const byPath = new Map(pages.map((p) => [p.path, p]));

  // Indexable = emitted, not noindex, and canonical points at itself.
  const indexable = pages.filter((p) => !p.noindex && p.selfCanonical);
  const indexableSet = new Set(indexable.map((p) => p.path));

  /* --- sitemap cross-check ------------------------------------------------ */
  const sm = sitemapPaths();
  const emittedSet = new Set(pages.map((p) => p.path));
  const inSitemapNotEmitted = [...sm].filter((p) => !emittedSet.has(p)).sort();
  const emittedNotInSitemap = [...emittedSet].filter((p) => !sm.has(p)).sort();
  // Routes that exist but are served on-demand (no prerendered HTML), e.g.
  // the noindex `/search` page. Links to these are not broken.
  const dynamicRoutes = dynamicLiteralRoutes(root);

  /* --- inbound / outbound over rendered anchors --------------------------- */
  // Only links between indexable pages count as rendered graph edges.
  const inbound = new Map<string, Set<string>>();
  for (const p of indexable) inbound.set(p.path, new Set());
  const brokenLinks: { from: string; to: string }[] = [];
  const dynamicRouteLinks: { from: string; to: string }[] = [];
  const redirectLinks: { from: string; to: string; raw: string }[] = [];

  for (const p of indexable) {
    for (const l of p.links) {
      if (l.kind !== 'internal' || l.path === null) continue;
      if (l.redirecting && emittedSet.has(l.path)) {
        redirectLinks.push({ from: p.path, to: l.path, raw: l.raw });
      }
      if (!emittedSet.has(l.path)) {
        if (dynamicRoutes.has(l.path))
          dynamicRouteLinks.push({ from: p.path, to: l.path });
        else brokenLinks.push({ from: p.path, to: l.path });
        continue;
      }
      if (l.path === p.path) continue;
      inbound.get(l.path)?.add(p.path);
    }
  }

  /* --- real BFS crawl depth from '/' -------------------------------------- */
  const depth = new Map<string, number>();
  if (indexableSet.has('/')) {
    depth.set('/', 0);
    const queue: string[] = ['/'];
    while (queue.length) {
      const cur = queue.shift() as string;
      const d = depth.get(cur) as number;
      const page = byPath.get(cur);
      if (!page) continue;
      for (const next of page.outbound) {
        if (!indexableSet.has(next) || depth.has(next)) continue;
        depth.set(next, d + 1);
        queue.push(next);
      }
    }
  }
  const histogram = new Map<number, number>();
  for (const d of depth.values()) histogram.set(d, (histogram.get(d) ?? 0) + 1);
  const unreachable = indexable
    .filter((p) => !depth.has(p.path))
    .map((p) => p.path)
    .sort();

  /* --- chrome baseline: links present on EVERY indexable page ------------- */
  // Derived from the data, not assumed. A target counts as chrome when every
  // indexable page links it — except the page that *is* that target, which
  // cannot link to itself (self-links are excluded from `outbound`).
  const targetHits = new Map<string, number>();
  for (const p of indexable)
    for (const t of p.outbound) targetHits.set(t, (targetHits.get(t) ?? 0) + 1);
  const chromeLinks = new Set<string>();
  for (const [t, n] of targetHits) {
    const possible = indexableSet.has(t)
      ? indexable.length - 1
      : indexable.length;
    if (n >= possible) chromeLinks.add(t);
  }

  /* --- oversized link blocks ---------------------------------------------- */
  // Threshold: >250 unique in-content internal links (i.e. excluding the
  // site chrome that appears on every page). Rationale in the doc.
  const OVERSIZED_THRESHOLD = 250;
  const contentLinkCount = (p: Page): number =>
    p.outbound.filter((t) => !chromeLinks.has(t)).length;
  const oversized = indexable
    .map((p) => ({ path: p.path, n: contentLinkCount(p) }))
    .filter((x) => x.n > OVERSIZED_THRESHOLD)
    .sort((a, b) => b.n - a.n);

  /* --- zero-inbound / sitemap-only ---------------------------------------- */
  const zeroInbound = indexable
    .filter((p) => p.path !== '/' && (inbound.get(p.path)?.size ?? 0) === 0)
    .map((p) => p.path)
    .sort();
  const sitemapOnly = [...sm]
    .filter((p) => indexableSet.has(p) && (inbound.get(p)?.size ?? 0) === 0)
    .sort();

  /* --- pages whose only inbound is the search/explore page ---------------- */
  const SEARCH_PAGES = new Set(['/explore']);
  const searchOnly = indexable
    .filter((p) => {
      const inb = inbound.get(p.path);
      if (!inb || inb.size === 0) return false;
      return [...inb].every((src) => SEARCH_PAGES.has(src));
    })
    .map((p) => p.path)
    .sort();

  /* --- entity pages ------------------------------------------------------- */
  // The registry is used here only to CLASSIFY routes (which path is an entity
  // page, which is a hub). Every link and depth number above comes from HTML.
  const entityPaths = new Set(PUBLISHED_CONTENT.map((i) => contentUrlPath(i)));
  const entityPages = indexable.filter((p) => entityPaths.has(p.path));
  const entityDepths = new Map<number, number>();
  for (const p of entityPages) {
    const d = depth.get(p.path);
    const k = d === undefined ? -1 : d;
    entityDepths.set(k, (entityDepths.get(k) ?? 0) + 1);
  }
  const entityZeroInbound = entityPages.filter(
    (p) => (inbound.get(p.path)?.size ?? 0) === 0,
  );
  const entityReachable = entityPages.filter((p) => depth.has(p.path));

  /* --- hub depth ---------------------------------------------------------- */
  const HUBS = SECTIONS.filter((s) => s.active).map((s) => s.href);
  const hubsWithin1 = HUBS.filter((h) => (depth.get(h) ?? Infinity) <= 1);

  /* --- islands: unreachable pages grouped by weak connectivity ------------ */
  // Unreachable pages are rarely isolated — they link each other but nothing
  // outside links in. Grouping them shows the real shape of the defect.
  const undirected = new Map<string, Set<string>>();
  for (const p of unreachable) undirected.set(p, new Set());
  const unreachableSet = new Set(unreachable);
  for (const p of unreachable) {
    for (const t of byPath.get(p)?.outbound ?? []) {
      if (!unreachableSet.has(t)) continue;
      undirected.get(p)?.add(t);
      undirected.get(t)?.add(p);
    }
  }
  const islands: string[][] = [];
  const seenIsland = new Set<string>();
  for (const p of unreachable) {
    if (seenIsland.has(p)) continue;
    const comp: string[] = [];
    const stack = [p];
    seenIsland.add(p);
    while (stack.length) {
      const cur = stack.pop() as string;
      comp.push(cur);
      for (const n of undirected.get(cur) ?? []) {
        if (seenIsland.has(n)) continue;
        seenIsland.add(n);
        stack.push(n);
      }
    }
    islands.push(comp.sort());
  }
  islands.sort((a, b) => b.length - a.length);

  /* --- output ------------------------------------------------------------- */
  const out: string[] = [];
  const say = (s = '') => out.push(s);

  say('\nAgricultureID — RENDERED-HTML link audit');
  say(`Source: ${label} (real emitted HTML; no model, no registry links)\n`);

  say(`  Emitted HTML pages:        ${pages.length}`);
  say(`  Indexable (self-canonical, not noindex): ${indexable.length}`);
  say(`  Non-indexable emitted:     ${pages.length - indexable.length}`);
  say(`  Sitemap paths:             ${sm.size}`);
  say(`  In sitemap, not emitted:   ${inSitemapNotEmitted.length}`);
  say(`  Emitted, not in sitemap:   ${emittedNotInSitemap.length}`);
  say(
    `  Total anchors parsed:      ${pages.reduce((a, p) => a + p.anchorCount, 0)}`,
  );
  say(
    `  Rendered internal edges:   ${indexable.reduce((a, p) => a + p.outbound.filter((t) => indexableSet.has(t)).length, 0)}`,
  );
  say(`  Site-chrome links (on every page): ${chromeLinks.size}`);

  say('\n--- REAL crawl depth from / (BFS over rendered anchors) ---');
  say(
    `  Reachable:   ${depth.size} / ${indexable.length} (${pct(depth.size, indexable.length)})`,
  );
  say(`  Max depth:   ${depth.size ? Math.max(...depth.values()) : 'n/a'}`);
  const hist = [...histogram.entries()].sort((a, b) => a[0] - b[0]);
  say(`  Histogram:   ${hist.map(([d, n]) => `${d}:${n}`).join('  ')}`);
  say(`  Unreachable from / : ${unreachable.length}`);
  say(
    `\n  Unreachable pages form ${islands.length} island(s) (weakly-connected):`,
  );
  for (const isl of islands) {
    const head = isl.slice(0, 3).join(', ');
    say(
      `     - ${isl.length} page(s): ${head}${isl.length > 3 ? `, … (+${isl.length - 3})` : ''}`,
    );
  }

  say('\n--- Zero rendered inbound ---');
  say(`  Indexable pages with 0 rendered inbound links: ${zeroInbound.length}`);
  for (const p of zeroInbound.slice(0, 20)) say(`     - ${p}`);
  say(`  Sitemap-only (in sitemap, 0 rendered inbound): ${sitemapOnly.length}`);
  for (const p of sitemapOnly.slice(0, 20)) say(`     - ${p}`);
  say(`  Reachable only via /explore (search): ${searchOnly.length}`);
  for (const p of searchOnly.slice(0, 10)) say(`     - ${p}`);

  say('\n--- Link integrity ---');
  say(
    `  Broken internal links (href → no emitted page): ${brokenLinks.length}`,
  );
  const brokenByTarget = new Map<string, number>();
  for (const b of brokenLinks)
    brokenByTarget.set(b.to, (brokenByTarget.get(b.to) ?? 0) + 1);
  for (const [t, n] of [...brokenByTarget.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20))
    say(
      `     - ${t}  (${n} link(s), e.g. from ${brokenLinks.find((b) => b.to === t)?.from})`,
    );
  say(
    `  Redirect-only links (trailing slash / .html): ${redirectLinks.length}`,
  );
  for (const r of redirectLinks.slice(0, 10))
    say(`     - ${r.from} → "${r.raw}"`);
  say(
    `  Links to dynamic/noindex routes (exist, not prerendered): ${dynamicRouteLinks.length}`,
  );
  for (const d of dynamicRouteLinks.slice(0, 10))
    say(`     - ${d.from} → ${d.to}`);

  say('\n--- Entity pages (published content, classified via registry) ---');
  say(`  Entity pages: ${entityPages.length}`);
  say(
    `  Reachable through real anchors: ${entityReachable.length} (${pct(entityReachable.length, entityPages.length)})`,
  );
  say(`  With zero rendered inbound: ${entityZeroInbound.length}`);
  const ed = [...entityDepths.entries()].sort((a, b) => a[0] - b[0]);
  say(
    `  Depth distribution: ${ed
      .map(([d, n]) => (d === -1 ? `unreachable:${n}` : `${d}:${n}`))
      .join('  ')}`,
  );

  say('\n--- Nav hubs (SECTIONS with active: true) ---');
  say(
    `  Active hubs: ${HUBS.length}, within 1 click of /: ${hubsWithin1.length}`,
  );
  const hubsDeeper = HUBS.filter((h) => (depth.get(h) ?? Infinity) > 1).sort(
    (a, b) => (depth.get(a) ?? 99) - (depth.get(b) ?? 99),
  );
  for (const h of hubsDeeper)
    say(`     - ${h}: depth ${depth.get(h) ?? 'UNREACHABLE'}`);

  say('\n--- Outbound link volume ---');
  const counts = indexable
    .map((p) => contentLinkCount(p))
    .sort((a, b) => a - b);
  const q = (f: number) =>
    counts[Math.min(counts.length - 1, Math.floor(counts.length * f))];
  say(`  In-content outbound links per page (chrome excluded):`);
  say(
    `    min ${counts[0]}  p50 ${q(0.5)}  p90 ${q(0.9)}  p99 ${q(0.99)}  max ${counts[counts.length - 1]}`,
  );
  say(`  Oversized (> ${OVERSIZED_THRESHOLD}): ${oversized.length}`);
  for (const o of oversized.slice(0, 20)) say(`     - ${o.path}: ${o.n}`);

  say('');
  console.log(out.join('\n'));
}

main();

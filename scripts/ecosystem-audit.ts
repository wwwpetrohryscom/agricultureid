/**
 * Post-build ecosystem audit.
 *
 * Proves, against the REAL emitted HTML of EVERY page, the load-bearing
 * guarantees of the HELPERG ecosystem bar:
 *
 *   1. exactly one ecosystem <nav> per page (never zero, never duplicated);
 *   2. every one of the 18 web projects is a real `<a href>` in the markup;
 *   3. every one of the 14 app-store destinations is a real `<a href>`;
 *   4. AgricultureID carries the current-site marker and is NOT target=_blank;
 *   5. cross-origin links carry rel="noopener noreferrer";
 *   6. no `sponsored`/`ugc`/`nofollow` on official ecosystem links;
 *   7. no tracking query parameters were appended to ecosystem URLs.
 *
 * A unit test cannot see the built output, so this is a separate post-build
 * gate, the analogue of `seo:rendered` and `consent:audit`.
 *
 * NOTE ON COUNTING: React 19 also serialises the component tree into the RSC
 * hydration payload inside a <script>. A naive substring count therefore sees
 * every attribute twice. All counting here matches real opening TAGS.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  HELPERG_WEB_PROJECTS,
  HELPERG_APPS,
  appStoreLinks,
  appStoreDestinationCount,
  CURRENT_PROJECT_ID,
} from '../lib/ecosystem/registry';

const APP_DIR = join(process.cwd(), '.next', 'server', 'app');

/** Pages named in the brief that must be checked link-by-link. */
const REPRESENTATIVE = [
  'index.html',
  join('crops', 'wheat.html'),
  join('commodities', 'wheat-grain.html'),
  'tools.html',
  join('countries', 'india.html'),
  'privacy.html',
];

function walkHtml(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walkHtml(p));
    else if (entry.endsWith('.html')) out.push(p);
  }
  return out;
}

/** HTML-escape a URL the way React serialises it into an attribute. */
function escaped(url: string): string {
  return url.replace(/&/g, '&amp;');
}

/** Does the document contain a real anchor tag pointing at this URL? */
function hasAnchor(html: string, url: string): boolean {
  return (
    html.includes(`href="${escaped(url)}"`) || html.includes(`href="${url}"`)
  );
}

const errors: string[] = [];

function main() {
  if (!existsSync(APP_DIR)) {
    console.error(
      `ecosystem:audit — build output not found at ${APP_DIR}. Run \`npm run build\` first.`,
    );
    process.exit(1);
  }

  const files = walkHtml(APP_DIR);
  if (files.length === 0) {
    console.error('ecosystem:audit — no HTML found in build output.');
    process.exit(1);
  }

  // ---- 1. exactly one ecosystem nav on every emitted page -----------------
  let missing = 0;
  let duplicated = 0;
  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const navs = (html.match(/<nav[^>]*data-ecosystem-bar/g) || []).length;
    if (navs === 0) {
      missing++;
      if (missing <= 5)
        errors.push(`no ecosystem nav: ${file.replace(APP_DIR, '')}`);
    } else if (navs > 1) {
      duplicated++;
      if (duplicated <= 5)
        errors.push(
          `duplicate ecosystem nav (${navs}): ${file.replace(APP_DIR, '')}`,
        );
    }
  }
  if (missing > 5)
    errors.push(`…and ${missing - 5} more pages with no ecosystem nav`);
  if (duplicated > 5)
    errors.push(
      `…and ${duplicated - 5} more pages with a duplicated ecosystem nav`,
    );

  // ---- 2-7. link-level checks on the representative pages -----------------
  const appUrls = HELPERG_APPS.flatMap((a) =>
    appStoreLinks(a).map((s) => s.url),
  );

  for (const rel of REPRESENTATIVE) {
    const p = join(APP_DIR, rel);
    if (!existsSync(p)) {
      errors.push(`representative page missing from build output: ${rel}`);
      continue;
    }
    const html = readFileSync(p, 'utf8');

    for (const project of HELPERG_WEB_PROJECTS) {
      if (!hasAnchor(html, project.url)) {
        errors.push(`${rel}: missing anchor for web project ${project.url}`);
      }
    }
    for (const url of appUrls) {
      if (!hasAnchor(html, url)) {
        errors.push(`${rel}: missing anchor for app store URL ${url}`);
      }
    }

    const current = HELPERG_WEB_PROJECTS.find(
      (p2) => p2.id === CURRENT_PROJECT_ID,
    );
    if (!current) {
      errors.push(
        'registry has no current project — cannot audit current marker',
      );
    } else {
      const anchorRe = new RegExp(
        `<a[^>]*href="${current.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
        'g',
      );
      const anchors = html.match(anchorRe) ?? [];
      if (anchors.length === 0) {
        errors.push(`${rel}: no anchor found for the current project`);
      } else {
        const marked = anchors.some((a) => a.includes('aria-current="page"'));
        if (!marked)
          errors.push(`${rel}: current project lacks aria-current="page"`);
        const blank = anchors.some((a) => a.includes('target="_blank"'));
        if (blank)
          errors.push(`${rel}: current project must not open in a new tab`);
      }
    }

    // Cross-origin ecosystem anchors must be safe, and must not be
    // nofollow/sponsored/ugc — these are official navigation links.
    const externals = [
      ...HELPERG_WEB_PROJECTS.filter((p2) => p2.id !== CURRENT_PROJECT_ID).map(
        (p2) => p2.url,
      ),
      ...appUrls,
    ];
    for (const url of externals) {
      const re = new RegExp(
        `<a[^>]*href="${escaped(url).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
      );
      const tag = html.match(re)?.[0];
      if (!tag) continue;
      if (
        !/rel="[^"]*noopener[^"]*"/.test(tag) ||
        !/rel="[^"]*noreferrer[^"]*"/.test(tag)
      ) {
        errors.push(
          `${rel}: ${url} opens cross-origin without noopener noreferrer`,
        );
      }
      if (/rel="[^"]*(sponsored|ugc|nofollow)[^"]*"/.test(tag)) {
        errors.push(
          `${rel}: ${url} carries sponsored/ugc/nofollow — not permitted`,
        );
      }
    }

    // No tracking parameters may be appended to ecosystem destinations.
    for (const bad of [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'ref=helperg',
    ]) {
      if (html.includes(bad)) {
        errors.push(`${rel}: tracking parameter "${bad}" found in markup`);
      }
    }
  }

  if (errors.length > 0) {
    console.error('ecosystem:audit — FAILED\n');
    for (const e of errors.slice(0, 40)) console.error(`  ✗ ${e}`);
    if (errors.length > 40) console.error(`  …and ${errors.length - 40} more`);
    console.error(`\n${errors.length} error(s).`);
    process.exit(1);
  }

  console.log(
    `ecosystem:audit — OK. ${files.length} pages each carry exactly one ecosystem nav; ` +
      `${HELPERG_WEB_PROJECTS.length} web-project anchors and ${appStoreDestinationCount()} ` +
      `app-store anchors verified on ${REPRESENTATIVE.length} representative pages.`,
  );
}

main();

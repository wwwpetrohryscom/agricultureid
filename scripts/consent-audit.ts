/**
 * Post-build consent audit.
 *
 * Proves, against the REAL emitted HTML, the load-bearing guarantee of the
 * analytics-consent work: the WebmasterID tracker is in NO server-rendered page
 * (so it never loads before an explicit client-side opt-in), and the consent
 * entry point (the footer "Privacy settings" control) is on representative
 * pages. Run after `next build`; exits non-zero on any violation.
 *
 * This is the analogue of `seo:rendered` — a unit test cannot see the built
 * output, so this is a separate post-build gate.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const APP_DIR = join(process.cwd(), '.next', 'server', 'app');

/**
 * Tokens that must never appear in server-rendered HTML before consent.
 *
 * These identify the tracker ITSELF — its script file, its ingest endpoint,
 * and the attributes/id of its script tag. Any one of them in the markup means
 * analytics would load without an opt-in.
 *
 * The bare host `webmasterid.com` is deliberately NOT in this list. The global
 * HELPERG ecosystem bar renders an ordinary navigation anchor to
 * <https://webmasterid.com>, which is a sibling product's home page: an inert
 * link that issues no request until a user chooses to click it. Matching the
 * bare host flagged every page for that anchor while proving nothing about
 * consent. The host is still fully covered — more precisely than before — by
 * `hostIsLoaded()` below, which fails on any tag that would actually FETCH
 * from the analytics origin (script src, or a preconnect/dns-prefetch/
 * preload/prefetch resource hint). A link a user must click is not a load; a
 * tag the browser acts on automatically is.
 */
const FORBIDDEN = [
  'tracker.iife.min.js',
  'webmasterid-ingest-api',
  'data-wmid',
  'data-endpoint',
  'webmasterid-tracker',
];

/** The analytics origin's host, used for the load-shaped checks below. */
const ANALYTICS_HOST = 'webmasterid.com';

/**
 * Does this document contain markup that would make the browser fetch from the
 * analytics origin on its own — before any consent decision?
 *
 * Covers <script src>, and every resource hint that triggers a connection or
 * download. Returns the offending kinds, empty when the document is clean.
 */
function analyticsLoads(html: string): string[] {
  const found: string[] = [];

  // Any <script> tag that references the analytics origin, in any attribute.
  const scriptTags = html.match(/<script\b[^>]*>/gi) ?? [];
  if (scriptTags.some((tag) => tag.toLowerCase().includes(ANALYTICS_HOST))) {
    found.push('script referencing the analytics origin');
  }

  // Resource hints that open a connection or fetch ahead of time.
  const linkTags = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of linkTags) {
    const lower = tag.toLowerCase();
    if (!lower.includes(ANALYTICS_HOST)) continue;
    if (
      /rel=["']?(preconnect|dns-prefetch|preload|prefetch|modulepreload)/i.test(
        tag,
      )
    ) {
      found.push('resource hint to the analytics origin');
    }
  }

  return found;
}

/** Representative pages that must expose the consent entry point. */
const REPRESENTATIVE = [
  'index.html',
  'privacy.html',
  join('crops', 'maize.html'),
  'tools.html',
  join('commodities', 'maize-grain.html'),
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

function main(): void {
  if (!existsSync(APP_DIR)) {
    console.error(
      `consent:audit — build output not found at ${APP_DIR}. Run \`npm run build\` first.`,
    );
    process.exit(1);
  }

  const files = walkHtml(APP_DIR);
  if (files.length === 0) {
    console.error('consent:audit — no HTML files found in the build output.');
    process.exit(1);
  }

  const trackerViolations: string[] = [];
  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const lower = html.toLowerCase();
    const hits = FORBIDDEN.filter((t) => lower.includes(t.toLowerCase()));
    if (hits.length > 0) {
      trackerViolations.push(
        `${file.replace(APP_DIR, '')} → ${hits.join(', ')}`,
      );
    }
    // Anything that would actually FETCH from the analytics origin before a
    // consent decision — script tags and resource hints alike.
    for (const kind of analyticsLoads(html)) {
      trackerViolations.push(`${file.replace(APP_DIR, '')} → ${kind}`);
    }
  }

  const missingEntry: string[] = [];
  for (const rel of REPRESENTATIVE) {
    const p = join(APP_DIR, rel);
    if (!existsSync(p)) {
      missingEntry.push(`${rel} (page not built)`);
      continue;
    }
    if (!readFileSync(p, 'utf8').includes('Privacy settings')) {
      missingEntry.push(`${rel} (no "Privacy settings" control)`);
    }
  }

  console.log('\nConsent audit (real rendered HTML)\n');
  console.log(`  HTML pages scanned:            ${files.length}`);
  console.log(
    `  Pages with a pre-consent tracker: ${trackerViolations.length}`,
  );
  console.log(
    `  Representative pages missing the consent entry point: ${missingEntry.length}`,
  );

  if (trackerViolations.length > 0) {
    console.error('\n  ✗ WebmasterID tracker present before consent:');
    for (const v of trackerViolations) console.error(`      ${v}`);
  }
  if (missingEntry.length > 0) {
    console.error('\n  ✗ Missing consent entry point:');
    for (const v of missingEntry) console.error(`      ${v}`);
  }

  if (trackerViolations.length > 0 || missingEntry.length > 0) {
    console.error(
      '\n  Consent audit FAILED: analytics must not load before consent, and every page must offer a way to change it.\n',
    );
    process.exit(1);
  }

  console.log(
    '\n  ✓ Consent audit passed: no pre-consent tracker in any page; consent entry point present.\n',
  );
}

main();

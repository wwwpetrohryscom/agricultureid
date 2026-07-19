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

/** Tokens that must never appear in server-rendered HTML before consent. */
const FORBIDDEN = [
  'tracker.iife.min.js',
  'webmasterid.com',
  'webmasterid-ingest-api',
  'data-wmid',
  'data-endpoint',
  'webmasterid-tracker',
];

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
    // Preconnect / dns-prefetch to the analytics origin must not exist either.
    if (/rel=["']?(preconnect|dns-prefetch)["']?[^>]*webmasterid/i.test(html)) {
      trackerViolations.push(`${file.replace(APP_DIR, '')} → preconnect`);
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

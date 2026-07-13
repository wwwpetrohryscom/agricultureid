// Source-health checker (network; non-blocking, NOT a CI gate).
//
// Checks every registry source URL for reachability and redirects, and reports
// domain distribution and URL specificity. Deterministic offline gates live in
// scripts/validate-content.ts; this is a separate, manually/scheduled run so
// ordinary builds never depend on external network access.
//
// Respects a polite delay and identifies itself; does not scrape search engines.
//
// Usage: node scripts/source-health.mjs [--json out.json]
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const UA =
  'AgricultureID-source-health/1.0 (link check; editorial@agricultureid.com)';
const DELAY_MS = 300;

function readSources() {
  // Extract id + url pairs from data/sources.ts without importing TS.
  const txt = readFileSync(join(ROOT, 'data', 'sources.ts'), 'utf8');
  const out = [];
  const re = /id:\s*'([^']+)'[\s\S]*?url:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(txt))) out.push({ id: m[1], url: m[2] });
  return out;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function check(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': UA },
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
    });
    return {
      status: res.status,
      finalUrl: res.url,
      redirected: res.redirected,
    };
  } catch (e) {
    const msg = String(e.message || e);
    const tls =
      /certificate|self-signed|SSL|TLS|ERR_TLS|unable to verify/i.test(msg);
    return {
      status: 0,
      error: e.name === 'TimeoutError' ? 'timeout' : tls ? 'tls-error' : msg,
    };
  }
}

/**
 * Classify a result. Critically, a 403/429 or a timeout is NOT treated as a
 * dead source — publishers routinely block automated requests. Only genuine
 * 404/410 and 5xx are "dead".
 */
function classify(r) {
  if (r.status === 0 && r.error === 'timeout') return 'timeout';
  if (r.status === 0 && r.error === 'tls-error') return 'tls-error';
  if (r.status === 0) return 'unreachable';
  if (r.status === 403 || r.status === 429) return 'bot-blocked';
  if (r.status === 404 || r.status === 410 || r.status >= 500) return 'dead';
  if (r.redirected && r.status < 400) return 'redirect';
  if (r.status >= 200 && r.status < 300) return 'ok';
  return `http-${r.status}`;
}

async function main() {
  const sources = readSources();
  const results = [];
  const domains = {};
  for (const s of sources) {
    const host = new URL(s.url).host;
    domains[host] = (domains[host] ?? 0) + 1;
    const r = await check(s.url);
    const category = classify(r);
    results.push({ id: s.id, url: s.url, category, ...r });
    console.log(
      `  ${s.id.padEnd(18)} ${String(r.status).padStart(3)}  ${category}`,
    );
    await sleep(DELAY_MS);
  }

  const byCategory = {};
  for (const r of results)
    byCategory[r.category] = (byCategory[r.category] ?? 0) + 1;
  const dead = results.filter((r) => r.category === 'dead');
  const botBlocked = results.filter((r) => r.category === 'bot-blocked');
  const timeouts = results.filter((r) => r.category === 'timeout');
  const redirects = results.filter((r) => r.category === 'redirect');

  console.log('\n── Summary ──');
  console.log(`Sources checked: ${results.length}`);
  for (const [c, n] of Object.entries(byCategory).sort((a, b) => b[1] - a[1]))
    console.log(`  ${c.padEnd(14)} ${n}`);
  console.log(
    `\nActually dead (404/410/5xx): ${dead.length}  ·  bot-blocked (403/429, NOT dead): ${botBlocked.length}  ·  timeout (NOT dead): ${timeouts.length}`,
  );
  for (const d of dead) console.log(`  ✗ DEAD ${d.id}: ${d.status} ${d.url}`);
  for (const b of botBlocked)
    console.log(`  · bot-blocked ${b.id}: ${b.status} ${b.url}`);
  for (const r of redirects)
    console.log(`  → ${r.id}: ${r.url} → ${r.finalUrl}`);
  console.log(`\nDistinct domains: ${Object.keys(domains).length}`);
  for (const [h, n] of Object.entries(domains).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${h.padEnd(30)} ${n}`);
  }

  const jsonIdx = process.argv.indexOf('--json');
  if (jsonIdx > -1 && process.argv[jsonIdx + 1]) {
    writeFileSync(
      process.argv[jsonIdx + 1],
      JSON.stringify({ results, dead, redirects, domains }, null, 2),
    );
  }
  console.log('');
}

main();

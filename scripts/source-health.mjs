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
    return {
      status: 0,
      error: e.name === 'TimeoutError' ? 'timeout' : e.message,
    };
  }
}

async function main() {
  const sources = readSources();
  const results = [];
  const domains = {};
  for (const s of sources) {
    const host = new URL(s.url).host;
    domains[host] = (domains[host] ?? 0) + 1;
    const r = await check(s.url);
    results.push({ id: s.id, url: s.url, ...r });
    const flag =
      r.status === 0
        ? 'DEAD'
        : r.status >= 400
          ? `HTTP ${r.status}`
          : r.redirected
            ? '→redirect'
            : 'ok';
    console.log(
      `  ${s.id.padEnd(18)} ${String(r.status).padStart(3)}  ${flag}`,
    );
    await sleep(DELAY_MS);
  }

  const dead = results.filter((r) => r.status === 0 || r.status >= 400);
  const redirects = results.filter((r) => r.redirected && r.status < 400);

  console.log('\n── Summary ──');
  console.log(`Sources checked: ${results.length}`);
  console.log(`Dead / error (status 0 or ≥400): ${dead.length}`);
  for (const d of dead) console.log(`  ✗ ${d.id}: ${d.status} ${d.url}`);
  console.log(`Redirecting: ${redirects.length}`);
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

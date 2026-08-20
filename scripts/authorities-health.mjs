/**
 * Network health audit for official authority URLs — and the verification tool
 * used to research them.
 *
 * WHY A REAL BROWSER: government sites very commonly sit behind bot protection.
 * `curl`, even with a browser User-Agent, is refused with HTTP 403 by (among
 * others) usda.gov, agriculture.canada.ca and agriculture.gov.au. A 403 from a
 * bot filter says nothing about whether an authority exists, and treating it as
 * "dead" would silently delete real agencies from the registry. Driving a real
 * Chromium gives the truth instead of the bot-filter's opinion.
 *
 * THIS IS NOT A DETERMINISTIC GATE. It touches the network, so it can never sit
 * in `npm run build` or `npm test`: a CI runner without egress, or a ministry
 * doing maintenance, must not be able to fail the build. It reports; it does not
 * block. `authorities:validate` is the deterministic gate.
 *
 * Usage:
 *   node scripts/authorities-health.mjs              # audit the whole registry
 *   node scripts/authorities-health.mjs --url <url>  # inspect one URL
 *   node scripts/authorities-health.mjs --url <url> --text  # dump page text
 */
import { chromium } from '@playwright/test';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/** Classify one URL. Never throws; every failure mode becomes a status. */
export async function checkUrl(context, url, { wantText = false } = {}) {
  const page = await context.newPage();
  const result = { url, status: null, finalUrl: null, title: null, note: null };
  try {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 45_000,
    });
    result.status = response?.status() ?? null;
    result.finalUrl = page.url();
    result.title = (await page.title()).trim();

    if (result.finalUrl !== url) {
      const from = new URL(url).hostname;
      const to = new URL(result.finalUrl).hostname;
      result.note = from === to ? 'redirect-same-host' : `redirect-to:${to}`;
    }
    if (wantText) {
      result.text = (await page.evaluate(() => document.body?.innerText ?? ''))
        .replace(/\n{3,}/g, '\n\n')
        .slice(0, 6000);
    }
  } catch (error) {
    const msg = String(error?.message ?? error);
    if (/Timeout/i.test(msg)) result.note = 'timeout';
    else if (/ERR_CERT|SSL|TLS/i.test(msg)) result.note = 'tls-error';
    else if (/ERR_NAME_NOT_RESOLVED/i.test(msg)) result.note = 'dns-failure';
    else result.note = `error:${msg.slice(0, 120)}`;
  } finally {
    await page.close().catch(() => {});
  }
  return result;
}

/**
 * Health verdict. `blocked` is deliberately distinct from `dead`: a 403 is
 * usually a bot filter, not a missing agency, and must never auto-reject.
 */
export function verdict(r) {
  if (r.status === 200)
    return r.note?.startsWith('redirect-to:') ? 'redirected' : 'ok';
  if (r.status === 403 || r.status === 429) return 'blocked';
  if (r.status === 404 || r.status === 410) return 'dead';
  if (r.status && r.status >= 500) return 'server-error';
  if (r.note === 'timeout') return 'timeout';
  if (r.note === 'tls-error') return 'tls-error';
  if (r.note === 'dns-failure') return 'dns-failure';
  return 'unknown';
}

async function main() {
  const args = process.argv.slice(2);
  const one = args.indexOf('--url');
  const wantText = args.includes('--text');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    userAgent: UA,
    ignoreHTTPSErrors: false,
    viewport: { width: 1280, height: 900 },
  });

  if (one !== -1) {
    const r = await checkUrl(context, args[one + 1], { wantText });
    console.log(JSON.stringify({ ...r, verdict: verdict(r) }, null, 2));
    await browser.close();
    return;
  }

  // The registry is TypeScript and this is a plain .mjs (it needs Playwright,
  // not the TS loader), so the caller pipes in "<id> <url>" lines. See the
  // `authorities:health` npm script.
  const stdin = await new Promise((resolve) => {
    let buf = '';
    if (process.stdin.isTTY) return resolve('');
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (d) => (buf += d));
    process.stdin.on('end', () => resolve(buf));
  });
  const targets = stdin
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const i = l.indexOf(' ');
      return { id: l.slice(0, i), url: l.slice(i + 1) };
    });

  if (targets.length === 0) {
    console.log(
      'authorities:health — no targets on stdin. Pipe "<id> <url>" lines, or use --url.',
    );
    await browser.close();
    return;
  }

  const rows = [];
  for (const t of targets) {
    const r = await checkUrl(context, t.url);
    rows.push({ id: t.id, ...r, verdict: verdict(r) });
    console.log(
      `${verdict(r).padEnd(13)} ${String(r.status ?? '—').padEnd(4)} ${t.id}`,
    );
  }
  await browser.close();

  const by = rows.reduce(
    (m, r) => ((m[r.verdict] = (m[r.verdict] ?? 0) + 1), m),
    {},
  );
  console.log('\nsummary:', JSON.stringify(by));
  console.log(
    '\nNote: `blocked` (403/429) means a bot filter answered, not that the ' +
      'authority is gone. Never reject an authority on that basis alone.',
  );
}

main();

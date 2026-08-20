/**
 * Wave 2 country research ledger (§31).
 *
 * One row per researched country: what was probed, what the official site
 * actually returned, and what became of the candidate. Deferred countries are
 * listed with their reason so a difficult jurisdiction cannot be quietly
 * skipped and forgotten — that is the entire purpose of this report.
 *
 * Reads the probe ledger written by `authorities-discover.mjs` and joins it to
 * the published registry, so the two can never drift apart silently.
 */
import { readFileSync, existsSync } from 'node:fs';
import { AUTHORITIES } from '../data/authorities';

type Probe = {
  countryCode: string;
  region: string;
  url: string;
  status: number | null;
  finalUrl: string | null;
  title: string | null;
  note: string | null;
};

const LEDGER = 'data/authorities/research-ledger.json';
if (!existsSync(LEDGER)) {
  console.error(
    `ledger not found at ${LEDGER} — run authorities:discover first.`,
  );
  process.exit(1);
}
const probes: Probe[] = JSON.parse(readFileSync(LEDGER, 'utf8'));

const accepted = new Map<string, string[]>();
for (const a of AUTHORITIES) {
  if (!a.countryCode) continue;
  const list = accepted.get(a.countryCode) ?? [];
  list.push(
    `${a.shortName ?? a.officialName} [${a.profileDepth === 'full-profile' ? 'profile' : 'directory'}]`,
  );
  accepted.set(a.countryCode, list);
}

/** Why a probed country did not produce a published authority. */
function deferReason(p: Probe): string {
  if (p.status === 403 || p.status === 429)
    return 'blocked-403-no-secondary-official-verification';
  if (p.status === 503) return 'blocked-browser-verification-challenge';
  if (p.title?.toLowerCase().includes('challenge'))
    return 'blocked-bot-challenge-page';
  if (p.note === 'timeout') return 'official-website-unavailable-timeout';
  if (p.note === 'dns-failure') return 'official-website-unavailable-dns';
  if (p.note?.startsWith('error:'))
    return 'official-website-unavailable-protocol-error';
  if (p.status === 404) return 'official-website-not-found';
  return 'geo-profile-absent-or-evidence-insufficient';
}

const rows = probes.map((p) => {
  const got = accepted.get(p.countryCode);
  return {
    country: p.countryCode,
    region: p.region,
    probed: p.url,
    status: p.status ?? '—',
    outcome: got ? 'accepted' : 'deferred',
    detail: got ? got.join('; ') : deferReason(p),
  };
});

console.log('\nWave 2 — country research ledger\n');
console.log(
  `  ${'CTY'.padEnd(4)} ${'REG'.padEnd(6)} ${'HTTP'.padEnd(5)} ${'OUTCOME'.padEnd(9)} DETAIL`,
);
for (const r of rows.sort(
  (a, b) =>
    a.region.localeCompare(b.region) || a.country.localeCompare(b.country),
)) {
  console.log(
    `  ${r.country.padEnd(4)} ${r.region.padEnd(6)} ${String(r.status).padEnd(5)} ${r.outcome.padEnd(9)} ${r.detail.slice(0, 78)}`,
  );
}

const acceptedCountries = new Set(
  AUTHORITIES.map((a) => a.countryCode).filter(Boolean) as string[],
);
const probedCountries = new Set(probes.map((p) => p.countryCode));
const deferred = [...probedCountries].filter((c) => !acceptedCountries.has(c));

console.log('\n  Summary');
console.log(`    Countries probed        ${probedCountries.size}`);
console.log(`    Countries accepted      ${acceptedCountries.size}`);
console.log(`    Countries deferred      ${deferred.length}`);
console.log(`    Deferred                ${deferred.sort().join(' ')}`);

const byReason = new Map<string, number>();
for (const r of rows.filter((r) => r.outcome === 'deferred')) {
  byReason.set(r.detail, (byReason.get(r.detail) ?? 0) + 1);
}
console.log('\n  Deferral reasons');
for (const [k, n] of [...byReason].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${String(n).padStart(3)}  ${k}`);
}
console.log(
  '\n  NOTE: many deferrals are countries with no geo country profile in\n' +
    '  data/geo/profiles. The authority validator requires countryCode to\n' +
    '  resolve there, so those countries cannot be published until a profile\n' +
    '  exists. That is a Wave 3 prerequisite, not an evidence failure.\n',
);

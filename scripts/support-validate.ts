/**
 * Deterministic gate for the support-programme corpus. Offline.
 *
 * The rules here exist because support data goes stale in a way that misleads:
 *
 *  - a `closed` programme may never be publishable, and may not carry a future
 *    closing date (that combination describes a programme that is both shut and
 *    still open);
 *  - an application window may not close before it opens;
 *  - any funding figure must carry an explicit basis and a citation, because a
 *    total programme budget read as an individual maximum award is the most
 *    misleading error this layer could make;
 *  - any eligibility requirement must carry a citation;
 *  - `lastVerifiedAt` is mandatory and may not be in the future.
 *
 * Authority ids resolve against the real authority registry, so a ministry
 * rename cannot leave a dangling administrator behind.
 */
import { SUPPORT_PROGRAMS } from '../data/support';
import {
  SUPPORT_PROGRAM_TYPES,
  BENEFICIARY_TYPES,
  SUPPORT_STATUSES,
  FUNDING_BASES,
  isPublishableSupportProgram,
} from '../types/support';
import { SOURCE_MAP } from '../lib/sources/registry';
import { AUTHORITIES } from '../data/authorities';
import { REGISTRIES } from '../data/registries';
import { getProfileByCode } from '../lib/geo/registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const inSet = <T extends readonly string[]>(v: string, s: T) =>
  (s as readonly string[]).includes(v);

const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const JURISDICTION_IDS = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
/** The corpus was verified on this date; nothing may claim to be newer. */
const VERIFICATION_HORIZON = '2026-08-20';

const ids = new Set<string>();
const slugs = new Set<string>();
const urls = new Map<string, string>();

for (const p of SUPPORT_PROGRAMS) {
  const at = `programme "${p.id}"`;

  if (ids.has(p.id)) fail(`${at}: duplicate id`);
  ids.add(p.id);
  if (!SLUG.test(p.slug)) fail(`${at}: slug is not URL-safe kebab-case`);
  if (slugs.has(p.slug)) fail(`${at}: duplicate slug`);
  slugs.add(p.slug);
  if (!p.officialName.trim()) fail(`${at}: empty officialName`);
  if (!p.summary.trim()) fail(`${at}: empty summary`);
  if (!p.jurisdictionName.trim()) fail(`${at}: empty jurisdictionName`);

  if (!inSet(p.programType, SUPPORT_PROGRAM_TYPES))
    fail(`${at}: unknown programType`);
  if (!inSet(p.status, SUPPORT_STATUSES)) fail(`${at}: unknown status`);
  for (const b of p.beneficiaryTypes) {
    if (!inSet(b, BENEFICIARY_TYPES))
      fail(`${at}: unknown beneficiaryType "${b}"`);
  }
  if (p.beneficiaryTypes.length === 0)
    fail(`${at}: at least one beneficiary type is required`);

  /* URLs ------------------------------------------------------------------- */
  for (const [label, u] of [
    ['officialUrl', p.officialUrl],
    ['applicationUrl', p.applicationUrl],
    ['guidanceUrl', p.guidanceUrl],
  ] as const) {
    if (!u) continue;
    try {
      if (new URL(u).protocol !== 'https:')
        fail(`${at}: ${label} is not HTTPS`);
    } catch {
      fail(`${at}: malformed ${label}`);
    }
  }
  const seen = urls.get(p.officialUrl);
  if (seen)
    fail(
      `${at}: officialUrl duplicated with "${seen}" — one programme per record`,
    );
  urls.set(p.officialUrl, p.id);

  /* Jurisdiction + administrators ------------------------------------------ */
  if (p.countryCode && !getProfileByCode(p.countryCode)) {
    fail(
      `${at}: countryCode "${p.countryCode}" does not resolve in the geo layer`,
    );
  }
  if (p.jurisdictionId && !JURISDICTION_IDS.has(p.jurisdictionId)) {
    fail(`${at}: jurisdictionId "${p.jurisdictionId}" does not resolve`);
  }
  if (!p.countryCode && !p.supranationalJurisdiction) {
    fail(`${at}: needs a countryCode or a supranationalJurisdiction`);
  }
  if (p.administeringAuthorityIds.length === 0) {
    fail(`${at}: an administering authority is required`);
  }
  for (const aid of p.administeringAuthorityIds) {
    if (!AUTHORITY_IDS.has(aid)) fail(`${at}: unknown authority "${aid}"`);
  }
  for (const rid of p.relatedRegistryIds ?? []) {
    if (!REGISTRY_IDS.has(rid)) fail(`${at}: unknown registry "${rid}"`);
  }

  /* Time-sensitivity -------------------------------------------------------- */
  if (!ISO_DATE.test(p.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt is not ISO yyyy-mm-dd`);
  if (p.lastVerifiedAt > VERIFICATION_HORIZON) {
    fail(
      `${at}: lastVerifiedAt "${p.lastVerifiedAt}" is later than the verification pass — freshness may not be faked`,
    );
  }
  const w = p.applicationWindow;
  if (w) {
    for (const [label, d] of [
      ['opens', w.opens],
      ['closes', w.closes],
    ] as const) {
      if (d && !ISO_DATE.test(d))
        fail(`${at}: applicationWindow.${label} is not ISO yyyy-mm-dd`);
    }
    if (w.opens && w.closes && w.opens > w.closes) {
      fail(`${at}: application window closes before it opens`);
    }
  }
  if (p.status === 'closed') {
    if (isPublishableSupportProgram(p)) {
      fail(`${at}: a closed programme must never be publishable as available`);
    }
    if (w?.closes && w.closes > VERIFICATION_HORIZON) {
      fail(`${at}: marked closed but its closing date has not passed`);
    }
  }

  /* Funding and eligibility need citations ---------------------------------- */
  for (const f of p.fundingAmounts ?? []) {
    if (!inSet(f.basis, FUNDING_BASES))
      fail(`${at}: unknown funding basis "${f.basis}"`);
    if (!SOURCE_MAP.has(f.sourceId)) {
      fail(`${at}: funding figure cites unknown source "${f.sourceId}"`);
    }
    if (f.value !== undefined && !f.currency && !f.unit) {
      fail(
        `${at}: funding value has neither a currency nor a unit — an unqualified number is meaningless`,
      );
    }
  }
  for (const r of p.requirements ?? []) {
    if (!r.note.trim()) fail(`${at}: requirement "${r.id}" has an empty note`);
    if (!SOURCE_MAP.has(r.sourceId)) {
      fail(
        `${at}: requirement "${r.id}" cites unknown source — an eligibility condition may never be uncited`,
      );
    }
  }

  /* Provenance -------------------------------------------------------------- */
  if (p.sourceReferences.length === 0)
    fail(`${at}: at least one source is required`);
  for (const sid of p.sourceReferences) {
    if (!SOURCE_MAP.has(sid)) fail(`${at}: unknown sourceId "${sid}"`);
  }
  if (p.verification.length === 0)
    fail(`${at}: at least one verification record is required`);
  for (const v of p.verification) {
    if (!ISO_DATE.test(v.verifiedAt))
      fail(`${at}: verification date is not ISO yyyy-mm-dd`);
    if (!v.evidenceNote.trim()) fail(`${at}: empty evidenceNote`);
  }
  if (p.limitations.length === 0) {
    fail(
      `${at}: limitations are required — a support page must state what it does not establish`,
    );
  }
}

const published = SUPPORT_PROGRAMS.filter(isPublishableSupportProgram);
if (SUPPORT_PROGRAMS.length === 0) fail('support corpus is empty');

console.log('\nAgricultural support validation\n');
console.log(`  Programmes:               ${SUPPORT_PROGRAMS.length}`);
console.log(`  Publishable (pages):      ${published.length}`);
for (const s of SUPPORT_STATUSES) {
  const n = SUPPORT_PROGRAMS.filter((p) => p.status === s).length;
  if (n) console.log(`    ${s.padEnd(22)}${n}`);
}
console.log(
  `  Jurisdictions:            ${new Set(SUPPORT_PROGRAMS.map((p) => p.jurisdictionName)).size}`,
);
console.log(
  `  Programme types:          ${new Set(SUPPORT_PROGRAMS.map((p) => p.programType)).size}`,
);
console.log(
  `  Funding figures (cited):  ${SUPPORT_PROGRAMS.reduce((n, p) => n + (p.fundingAmounts?.length ?? 0), 0)}`,
);
console.log(
  `  Eligibility reqs (cited): ${SUPPORT_PROGRAMS.reduce((n, p) => n + (p.requirements?.length ?? 0), 0)}`,
);
console.log(
  `  Application windows:      ${SUPPORT_PROGRAMS.filter((p) => p.applicationWindow).length}`,
);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Support validation passed.\n');

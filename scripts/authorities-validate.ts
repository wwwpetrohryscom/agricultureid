/**
 * Deterministic gate for the agricultural-authorities registry.
 *
 * Offline by design: it touches no network, so it can sit in CI and in
 * `npm run validate`. Reachability is a separate, non-blocking concern —
 * `authorities:health` drives a real browser and only reports.
 *
 * What it enforces, and why each rule exists:
 *
 *  - identity is unique (id, slug) and slugs are URL-safe;
 *  - every official URL is HTTPS and well-formed, and no two bodies claim the
 *    same official website (that pattern means a duplicate or a branch office
 *    published as if it were a distinct authority);
 *  - jurisdiction resolves: a countryCode must exist in the geo layer, and a
 *    jurisdictionId must resolve in the canonical jurisdiction registry — so
 *    an authority can never point at a jurisdiction that does not exist.
 *
 *    INVARIANT REPLACED IN WAVE 4A: this previously required regionId to
 *    resolve to a RegionProfile. That was the WRONG constraint — RegionProfile
 *    mandates substantive agronomy, so requiring it for IDENTITY meant 46 of
 *    71 target jurisdictions could only exist if crop and livestock systems
 *    were invented for them. The replacement is STRICTER, not weaker: it also
 *    checks the jurisdiction's parent country agrees with the authority's, and
 *    that the government level matches the jurisdiction kind — neither of
 *    which the old rule did.
 *    point at a country page that does not exist;
 *  - supranational bodies have no countryCode, and everything else has one;
 *  - every responsibility uses the controlled vocabulary and cites a source id
 *    that exists in the source registry — responsibilities cannot be asserted
 *    without provenance;
 *  - every published body carries at least one verification with a real date
 *    and a domain classification that is not `uncertain`;
 *  - only `accepted` + `active` + `full-profile` bodies are publishable, and
 *    the thin-page threshold is evidence coverage, not word count;
 *  - non-active bodies explain their transition and, where superseded, point at
 *    a successor that exists.
 */
import { AUTHORITIES } from '../data/authorities';
import {
  AUTHORITY_TYPES,
  GOVERNMENT_LEVELS,
  JURISDICTION_TYPES,
  AUTHORITY_STATUSES,
  RESPONSIBILITY_AREAS,
  DOMAIN_VERIFICATIONS,
  CANDIDATE_STATUSES,
  PROFILE_DEPTHS,
  isPublishableAuthority,
} from '../types/authority';
import { SOURCE_MAP } from '../lib/sources/registry';
import { getProfileByCode } from '../lib/geo/registry';
import { REGIONS as REGION_PROFILES } from '../lib/geo/region-registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';

const errors: string[] = [];
const warnings: string[] = [];
const fail = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

const inSet = <T extends readonly string[]>(v: string, set: T) =>
  (set as readonly string[]).includes(v);

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const ids = new Set<string>();
const slugs = new Set<string>();
const officialSites = new Map<string, string>();
const JURISDICTION_BY_ID = new Map(
  CANONICAL_JURISDICTIONS.map((j) => [j.id, j]),
);
/** Which government levels are coherent for which jurisdiction kind. */
const LEVEL_FOR_KIND: Record<string, string[]> = {
  state: ['state'],
  province: ['provincial'],
  territory: ['territorial'],
};
void REGION_PROFILES;

for (const a of AUTHORITIES) {
  const at = `authority "${a.id}"`;

  /* identity -------------------------------------------------------------- */
  if (!a.id.trim()) fail('authority with an empty id');
  if (ids.has(a.id)) fail(`${at}: duplicate authority id`);
  ids.add(a.id);

  if (!SLUG.test(a.slug))
    fail(`${at}: slug "${a.slug}" is not URL-safe kebab-case`);
  if (slugs.has(a.slug)) fail(`${at}: duplicate slug "${a.slug}"`);
  slugs.add(a.slug);

  if (!a.officialName.trim()) fail(`${at}: empty officialName`);
  if (!a.summary.trim()) fail(`${at}: empty summary`);

  /* vocabularies ---------------------------------------------------------- */
  if (!inSet(a.authorityType, AUTHORITY_TYPES))
    fail(`${at}: unknown authorityType "${a.authorityType}"`);
  if (!inSet(a.governmentLevel, GOVERNMENT_LEVELS))
    fail(`${at}: unknown governmentLevel`);
  if (!inSet(a.jurisdictionType, JURISDICTION_TYPES))
    fail(`${at}: unknown jurisdictionType`);
  if (!inSet(a.authorityStatus, AUTHORITY_STATUSES))
    fail(`${at}: unknown authorityStatus`);
  if (!inSet(a.candidateStatus, CANDIDATE_STATUSES))
    fail(`${at}: unknown candidateStatus`);
  if (!inSet(a.profileDepth, PROFILE_DEPTHS))
    fail(`${at}: unknown profileDepth`);

  /* official website ------------------------------------------------------ */
  let host = '';
  try {
    const u = new URL(a.officialWebsite);
    host = u.hostname;
    if (u.protocol !== 'https:')
      fail(`${at}: officialWebsite is not HTTPS (${a.officialWebsite})`);
  } catch {
    fail(`${at}: malformed officialWebsite "${a.officialWebsite}"`);
  }
  const seenAt = officialSites.get(a.officialWebsite);
  if (seenAt) {
    fail(
      `${at}: officialWebsite duplicated with "${seenAt}" — two bodies cannot share one official site (duplicate, or a branch office published as a distinct authority)`,
    );
  }
  officialSites.set(a.officialWebsite, a.id);

  for (const [label, url] of [
    ['contactPageUrl', a.contactPageUrl],
    ['servicesPageUrl', a.servicesPageUrl],
    ['datasetsPageUrl', a.datasetsPageUrl],
    ['legislationPageUrl', a.legislationPageUrl],
    ['officialDirectoryUrl', a.officialDirectoryUrl],
  ] as const) {
    if (!url) continue;
    try {
      if (new URL(url).protocol !== 'https:')
        fail(`${at}: ${label} is not HTTPS`);
    } catch {
      fail(`${at}: malformed ${label} "${url}"`);
    }
  }

  /* jurisdiction ---------------------------------------------------------- */
  if (a.governmentLevel === 'supranational') {
    if (a.countryCode) {
      fail(`${at}: supranational bodies must not claim a single countryCode`);
    }
  } else if (!a.countryCode) {
    fail(`${at}: missing countryCode (required below supranational level)`);
  } else if (!getProfileByCode(a.countryCode)) {
    fail(
      `${at}: countryCode "${a.countryCode}" does not resolve to a country profile in the geo layer`,
    );
  }
  if (a.jurisdictionId) {
    const j = JURISDICTION_BY_ID.get(a.jurisdictionId);
    if (!j) {
      fail(
        `${at}: jurisdictionId "${a.jurisdictionId}" does not resolve in the canonical jurisdiction registry`,
      );
    } else {
      // A US authority pointing at a Canadian province is exactly the defect
      // this catches — the old RegionProfile rule never checked it.
      if (j.countryCode !== a.countryCode) {
        fail(
          `${at}: jurisdiction ${j.id} belongs to ${j.countryCode} but the authority declares ${a.countryCode}`,
        );
      }
      if (!(LEVEL_FOR_KIND[j.kind] ?? []).includes(a.governmentLevel)) {
        fail(
          `${at}: governmentLevel "${a.governmentLevel}" is incoherent with jurisdiction kind "${j.kind}" (${j.id})`,
        );
      }
      if (a.governmentLevel === 'national' || a.governmentLevel === 'federal') {
        fail(
          `${at}: a body bound to subdivision ${j.id} cannot be national or federal`,
        );
      }
    }
  }
  if (!a.jurisdictionName.trim()) fail(`${at}: empty jurisdictionName`);

  if (
    a.parentAuthorityId &&
    !AUTHORITIES.some((p) => p.id === a.parentAuthorityId)
  ) {
    fail(`${at}: parentAuthorityId "${a.parentAuthorityId}" does not exist`);
  }

  /* status ---------------------------------------------------------------- */
  if (a.authorityStatus !== 'active' && !a.transitionNote) {
    fail(`${at}: status "${a.authorityStatus}" requires a transitionNote`);
  }
  if (
    a.supersededByAuthorityId &&
    !AUTHORITIES.some((p) => p.id === a.supersededByAuthorityId)
  ) {
    fail(`${at}: supersededByAuthorityId does not exist`);
  }
  if (a.candidateStatus === 'rejected' && !a.rejectionReason) {
    fail(`${at}: rejected candidates must record a rejectionReason`);
  }

  /* responsibilities ------------------------------------------------------ */
  if (a.responsibilities.length === 0) {
    fail(`${at}: at least one cited responsibility is required`);
  }
  const seenAreas = new Set<string>();
  for (const r of a.responsibilities) {
    if (!inSet(r.area, RESPONSIBILITY_AREAS))
      fail(`${at}: unknown responsibility area "${r.area}"`);
    if (seenAreas.has(r.area))
      fail(`${at}: responsibility area "${r.area}" declared twice`);
    seenAreas.add(r.area);
    if (!r.note.trim())
      fail(`${at}: responsibility "${r.area}" has an empty note`);
    if (!SOURCE_MAP.has(r.sourceId)) {
      fail(
        `${at}: responsibility "${r.area}" cites unknown sourceId "${r.sourceId}"`,
      );
    }
    // A note that merely restates the area label is name-inference, not evidence.
    const flat = r.note
      .toLowerCase()
      .replace(/[^a-z ]/g, '')
      .trim();
    if (flat === r.area.replace(/-/g, ' ')) {
      fail(
        `${at}: responsibility "${r.area}" restates its own label instead of citing what the body does`,
      );
    }
  }

  for (const s of a.services ?? []) {
    if (!SOURCE_MAP.has(s.sourceId))
      fail(`${at}: service "${s.name}" cites unknown sourceId`);
    try {
      if (new URL(s.url).protocol !== 'https:')
        fail(`${at}: service "${s.name}" URL is not HTTPS`);
    } catch {
      fail(`${at}: service "${s.name}" has a malformed URL`);
    }
  }
  for (const g of a.registries ?? []) {
    if (!SOURCE_MAP.has(g.sourceId))
      fail(`${at}: registry "${g.name}" cites unknown sourceId`);
    try {
      if (new URL(g.url).protocol !== 'https:')
        fail(`${at}: registry "${g.name}" URL is not HTTPS`);
    } catch {
      fail(`${at}: registry "${g.name}" has a malformed URL`);
    }
  }

  /* provenance ------------------------------------------------------------ */
  for (const id of a.sourceReferences) {
    if (!SOURCE_MAP.has(id))
      fail(`${at}: sourceReferences contains unknown sourceId "${id}"`);
  }
  if (a.verification.length === 0)
    fail(`${at}: at least one verification record is required`);
  for (const v of a.verification) {
    if (!ISO_DATE.test(v.verifiedAt))
      fail(`${at}: verification date "${v.verifiedAt}" is not ISO yyyy-mm-dd`);
    if (!SOURCE_MAP.has(v.sourceId))
      fail(`${at}: verification cites unknown sourceId "${v.sourceId}"`);
    if (!v.evidenceNote.trim())
      fail(`${at}: verification has an empty evidenceNote`);
    if (!inSet(v.domainVerification, DOMAIN_VERIFICATIONS))
      fail(`${at}: unknown domainVerification`);
    try {
      if (new URL(v.url).protocol !== 'https:')
        fail(`${at}: verification URL is not HTTPS`);
    } catch {
      fail(`${at}: verification has a malformed URL`);
    }
  }

  /* publication threshold -------------------------------------------------- */
  const publishable = isPublishableAuthority(a);
  if (a.profileDepth === 'full-profile') {
    if (a.responsibilities.length < 2) {
      fail(
        `${at}: full-profile requires at least 2 cited responsibilities (thin-page gate) — found ${a.responsibilities.length}`,
      );
    }
    if (!a.limitations || a.limitations.length === 0) {
      fail(`${at}: full-profile requires at least one stated limitation`);
    }
  }
  if (
    publishable &&
    a.verification.some((v) => v.domainVerification === 'uncertain')
  ) {
    fail(`${at}: an uncertain domain classification must never be publishable`);
  }
  if (a.candidateStatus !== 'accepted' && publishable) {
    fail(`${at}: only accepted candidates may be publishable`);
  }

  /* conservative contact policy -------------------------------------------- */
  if (
    a.publicEnquiryEmail &&
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(a.publicEnquiryEmail)
  ) {
    fail(`${at}: publicEnquiryEmail is malformed`);
  }

  if (!a.reviewedAt) warn(`${at}: no reviewedAt date recorded`);
  if (host && !/\./.test(host))
    warn(`${at}: officialWebsite host looks unusual (${host})`);
}

/* corpus-level ------------------------------------------------------------- */
const published = AUTHORITIES.filter(isPublishableAuthority);
if (AUTHORITIES.length === 0) fail('registry is empty');
if (published.length === 0)
  fail('no publishable authority — the hub would be empty');

console.log('\nAgricultural authorities validation\n');
console.log(`  Registry entries:        ${AUTHORITIES.length}`);
console.log(`  Publishable (pages):     ${published.length}`);
console.log(
  `  Directory records:       ${AUTHORITIES.filter((a) => a.profileDepth === 'directory-record').length}`,
);
console.log(
  `  Countries represented:   ${new Set(AUTHORITIES.map((a) => a.countryCode).filter(Boolean)).size}`,
);
console.log(
  `  Cited responsibilities:  ${AUTHORITIES.reduce((n, a) => n + a.responsibilities.length, 0)}`,
);
console.log(
  `  Verification records:    ${AUTHORITIES.reduce((n, a) => n + a.verification.length, 0)}`,
);

if (warnings.length) {
  console.log(`\n  ${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 20)) console.log(`    ! ${w}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 40)) console.error(`    ✗ ${e}`);
  if (errors.length > 40) console.error(`    …and ${errors.length - 40} more`);
  process.exit(1);
}

console.log('\n  ✓ Authorities validation passed.\n');

/**
 * Deterministic gate for the official-registries corpus. Offline by design.
 *
 * The rules that matter most here are the COHERENCE ones. A registry record is
 * mostly a set of claims about how usable a government system is, and those are
 * exactly the claims it is tempting to guess:
 *
 *   - `apiAvailable` without an `apiUrl` or documentation is an unfounded claim
 *     about machine access. Websites make internal JSON calls; that is not an API.
 *   - `accessType: 'public-search'` on a record that is not `searchable`, or
 *     `'restricted'` on one claiming public download, describes a system that
 *     cannot exist.
 *   - `loginRequired` alongside a public access type is the same contradiction.
 *
 * Also enforced: one logical system per record (no two records may share an
 * official URL — that pattern means a search endpoint was split out as if it
 * were a separate registry), jurisdiction resolution, authority resolution
 * against the real authority registry, and the thin-page threshold.
 */
import { REGISTRIES } from '../data/registries';
import {
  REGISTRY_TYPES,
  ACCESS_TYPES,
  UPDATE_FREQUENCIES,
  REGISTRY_STATUSES,
  REGISTRY_PROFILE_DEPTHS,
  isPublishableRegistry,
} from '../types/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { AUTHORITIES } from '../data/authorities';
import { getProfileByCode } from '../lib/geo/registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';

const errors: string[] = [];
const warnings: string[] = [];
const fail = (m: string) => errors.push(m);
const inSet = <T extends readonly string[]>(v: string, s: T) =>
  (s as readonly string[]).includes(v);

const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const JURISDICTION_IDS = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const ids = new Set<string>();
const slugs = new Set<string>();
const officialUrls = new Map<string, string>();

for (const r of REGISTRIES) {
  const at = `registry "${r.id}"`;

  if (ids.has(r.id)) fail(`${at}: duplicate registry id`);
  ids.add(r.id);
  if (!SLUG.test(r.slug)) fail(`${at}: slug is not URL-safe kebab-case`);
  if (slugs.has(r.slug)) fail(`${at}: duplicate slug "${r.slug}"`);
  slugs.add(r.slug);
  if (!r.officialName.trim()) fail(`${at}: empty officialName`);
  if (!r.jurisdictionName.trim()) fail(`${at}: empty jurisdictionName`);

  if (!inSet(r.registryType, REGISTRY_TYPES))
    fail(`${at}: unknown registryType "${r.registryType}"`);
  if (!inSet(r.accessType, ACCESS_TYPES)) fail(`${at}: unknown accessType`);
  if (!inSet(r.updateFrequency, UPDATE_FREQUENCIES))
    fail(`${at}: unknown updateFrequency`);
  if (!inSet(r.status, REGISTRY_STATUSES)) fail(`${at}: unknown status`);
  if (!inSet(r.profileDepth, REGISTRY_PROFILE_DEPTHS))
    fail(`${at}: unknown profileDepth`);

  /* URLs — one logical system, one record ---------------------------------- */
  for (const [label, url] of [
    ['officialUrl', r.officialUrl],
    ['searchUrl', r.searchUrl],
    ['downloadUrl', r.downloadUrl],
    ['apiUrl', r.apiUrl],
    ['documentationUrl', r.documentationUrl],
  ] as const) {
    if (!url) continue;
    try {
      if (new URL(url).protocol !== 'https:')
        fail(`${at}: ${label} is not HTTPS`);
    } catch {
      fail(`${at}: malformed ${label} "${url}"`);
    }
  }
  const seen = officialUrls.get(r.officialUrl);
  if (seen) {
    fail(
      `${at}: officialUrl duplicated with "${seen}" — one logical public system must be one record, not split per endpoint`,
    );
  }
  officialUrls.set(r.officialUrl, r.id);

  /* Access coherence — the claims most easily guessed ---------------------- */
  if (r.apiAvailable && !r.apiUrl && !r.documentationUrl) {
    fail(
      `${at}: apiAvailable is true but no apiUrl or documentationUrl is given — an API claim needs a public or documented endpoint, not inferred JSON traffic`,
    );
  }
  if (r.accessType === 'public-api' && !r.apiAvailable) {
    fail(`${at}: accessType "public-api" contradicts apiAvailable=false`);
  }
  if (r.accessType === 'public-search' && !r.searchable) {
    fail(`${at}: accessType "public-search" contradicts searchable=false`);
  }
  if (r.accessType === 'public-download' && !r.downloadable) {
    fail(`${at}: accessType "public-download" contradicts downloadable=false`);
  }
  if (
    r.accessType === 'restricted' &&
    (r.searchable || r.downloadable || r.apiAvailable)
  ) {
    fail(`${at}: accessType "restricted" contradicts a public access flag`);
  }
  if (r.loginRequired && !['restricted', 'mixed'].includes(r.accessType)) {
    fail(
      `${at}: loginRequired is true but accessType claims unrestricted public access`,
    );
  }

  /* Jurisdiction + authority resolution ------------------------------------ */
  if (r.countryCode && !getProfileByCode(r.countryCode)) {
    fail(
      `${at}: countryCode "${r.countryCode}" does not resolve in the geo layer`,
    );
  }
  if (r.jurisdictionId && !JURISDICTION_IDS.has(r.jurisdictionId)) {
    fail(`${at}: jurisdictionId "${r.jurisdictionId}" does not resolve`);
  }
  if (!r.countryCode && !r.supranationalJurisdiction) {
    fail(`${at}: needs either a countryCode or a supranationalJurisdiction`);
  }
  for (const aid of r.responsibleAuthorityIds) {
    if (!AUTHORITY_IDS.has(aid)) {
      fail(
        `${at}: responsibleAuthorityIds contains unknown authority "${aid}"`,
      );
    }
  }
  if (r.responsibleAuthorityIds.length === 0) {
    // Allowed, but must be visible — §7 requires unresolved ownership be reported.
    warnings.push(`${at}: no responsible authority resolved yet`);
  }

  /* Scope + provenance ------------------------------------------------------ */
  if (r.scope.length === 0)
    fail(`${at}: scope is required — "agricultural database" is not a scope`);
  for (const s of r.scope) {
    if (s.trim().length < 12)
      fail(`${at}: scope entry "${s}" is too vague to be useful`);
  }
  if (r.sourceReferences.length === 0)
    fail(`${at}: at least one source reference is required`);
  for (const sid of r.sourceReferences) {
    if (!SOURCE_MAP.has(sid)) fail(`${at}: unknown sourceId "${sid}"`);
  }
  if (r.verification.length === 0)
    fail(`${at}: at least one verification record is required`);
  for (const v of r.verification) {
    if (!ISO_DATE.test(v.verifiedAt))
      fail(`${at}: verification date is not ISO yyyy-mm-dd`);
    if (!v.evidenceNote.trim()) fail(`${at}: empty evidenceNote`);
    if (!SOURCE_MAP.has(v.sourceId))
      fail(`${at}: verification cites unknown sourceId`);
  }
  if (!ISO_DATE.test(r.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt is not ISO yyyy-mm-dd`);

  /* Thin-page threshold ----------------------------------------------------- */
  if (r.profileDepth === 'full-profile') {
    if (r.scope.length < 1)
      fail(`${at}: full-profile requires described scope`);
    if (
      r.responsibleAuthorityIds.length === 0 &&
      r.sourceReferences.length === 0
    ) {
      fail(
        `${at}: full-profile requires a responsible authority or verified provenance`,
      );
    }
  }
  if (r.status !== 'active' && isPublishableRegistry(r)) {
    fail(`${at}: only active systems may be publishable`);
  }
}

const published = REGISTRIES.filter(isPublishableRegistry);
if (REGISTRIES.length === 0) fail('registry corpus is empty');
if (published.length === 0)
  fail('no publishable registry — the hub would be empty');

console.log('\nAgricultural registries validation\n');
console.log(`  Registry records:         ${REGISTRIES.length}`);
console.log(`  Publishable (pages):      ${published.length}`);
console.log(
  `  Directory records:        ${REGISTRIES.length - published.length}`,
);
console.log(
  `  Registry types present:   ${new Set(REGISTRIES.map((r) => r.registryType)).size}`,
);
console.log(
  `  Countries:                ${new Set(REGISTRIES.map((r) => r.countryCode).filter(Boolean)).size}`,
);
console.log(
  `  Supranational / global:   ${REGISTRIES.filter((r) => !r.countryCode).length}`,
);
console.log(
  `  Searchable:               ${REGISTRIES.filter((r) => r.searchable).length}`,
);
console.log(
  `  Downloadable:             ${REGISTRIES.filter((r) => r.downloadable).length}`,
);
console.log(
  `  Public API:               ${REGISTRIES.filter((r) => r.apiAvailable).length}`,
);
console.log(
  `  Update frequency unknown: ${REGISTRIES.filter((r) => r.updateFrequency === 'unknown').length}`,
);

if (warnings.length) {
  console.log(
    `\n  ${warnings.length} warning(s) — unresolved authority ownership:`,
  );
  for (const w of warnings.slice(0, 20)) console.log(`    ! ${w}`);
}
if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Registries validation passed.\n');

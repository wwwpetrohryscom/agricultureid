/**
 * Deterministic gate for the biosecurity corpus. Offline.
 *
 * The rule this layer exists to enforce is semantic, not structural: a
 * regulatory status may never be recorded without an official source, and a
 * status stronger than the source supports may never be claimed.
 *
 * Concretely, an EPPO A1/A2 entry is a RECOMMENDATION to member countries.
 * Recording one as `quarantine` would assert statutory force EPPO does not
 * have, so the validator rejects any EPPO-sourced record that claims a
 * statutory status, and requires the entry's verbatim wording to be stored so a
 * narrower listing (a single forma specialis, a subspecies, "hop strains") can
 * never be flattened into a claim about the whole species.
 */
import { BIOSECURITY_STATUS } from '../data/biosecurity';
import { REGULATORY_STATUSES, ORGANISM_TYPES } from '../types/biosecurity';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { REGISTRIES } from '../data/registries';
import { AUTHORITIES } from '../data/authorities';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';
import { getProfileByCode } from '../lib/geo/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const ORGANISMS = new Map(
  PUBLISHED_CONTENT.filter((c) =>
    ['pest', 'plant-disease'].includes(c.contentType),
  ).map((c) => [c.slug, c]),
);
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const JURISDICTION_IDS = new Set(CANONICAL_JURISDICTIONS.map((j) => j.id));
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
/** Statuses that assert statutory force, which a recommendation cannot carry. */
const STATUTORY = [
  'quarantine',
  'regulated-non-quarantine',
  'official-control',
  'restricted',
];
const RECOMMENDATION_SOURCES = ['eppo-a1-list', 'eppo-a2-list'];

const ids = new Set<string>();
const seen = new Set<string>();

for (const s of BIOSECURITY_STATUS) {
  const at = `status "${s.id}"`;

  if (ids.has(s.id)) fail(`${at}: duplicate id`);
  ids.add(s.id);

  const organism = ORGANISMS.get(s.organismRef);
  if (!organism) {
    fail(
      `${at}: organismRef "${s.organismRef}" does not resolve to a published pest or disease`,
    );
  }
  if (!(ORGANISM_TYPES as readonly string[]).includes(s.organismType)) {
    fail(`${at}: unknown organismType`);
  }
  if (
    !(REGULATORY_STATUSES as readonly string[]).includes(s.regulatoryStatus)
  ) {
    fail(`${at}: unknown regulatoryStatus "${s.regulatoryStatus}"`);
  }

  if (s.countryCode && !getProfileByCode(s.countryCode)) {
    fail(`${at}: countryCode "${s.countryCode}" does not resolve`);
  }
  if (s.jurisdictionId && !JURISDICTION_IDS.has(s.jurisdictionId)) {
    fail(`${at}: jurisdictionId "${s.jurisdictionId}" does not resolve`);
  }
  if (!s.countryCode && !s.supranationalJurisdiction) {
    fail(`${at}: needs a countryCode or a supranationalJurisdiction`);
  }

  // One status per organism + list + jurisdiction.
  const key = `${s.organismRef}|${s.officialListName}|${s.jurisdictionName}`;
  if (seen.has(key))
    fail(`${at}: duplicate organism/list/jurisdiction combination`);
  seen.add(key);

  /* Provenance and the recommendation-vs-regulation rule ------------------- */
  if (s.sourceReferences.length === 0) {
    fail(
      `${at}: a regulatory status without an official source may never be published`,
    );
  }
  for (const sid of s.sourceReferences) {
    if (!SOURCE_MAP.has(sid)) fail(`${at}: unknown sourceId "${sid}"`);
  }
  const fromRecommendation = s.sourceReferences.some((sid) =>
    RECOMMENDATION_SOURCES.includes(sid),
  );
  if (fromRecommendation && STATUTORY.includes(s.regulatoryStatus)) {
    fail(
      `${at}: sourced from an EPPO recommendation list but claims statutory status "${s.regulatoryStatus}" — EPPO recommends regulation to member countries, it does not regulate`,
    );
  }
  if (fromRecommendation && !s.supranationalJurisdiction) {
    fail(
      `${at}: an EPPO listing applies to the EPPO region, not to a single country — it may not be recorded against a national jurisdiction`,
    );
  }

  if (!s.officialListName.trim()) fail(`${at}: officialListName is required`);
  if (!s.officialListEntry.trim()) {
    fail(`${at}: officialListEntry must record the source's wording verbatim`);
  }

  for (const rid of s.relatedRegistryIds) {
    if (!REGISTRY_IDS.has(rid)) fail(`${at}: unknown registry "${rid}"`);
  }
  for (const aid of s.responsibleAuthorityIds) {
    if (!AUTHORITY_IDS.has(aid)) fail(`${at}: unknown authority "${aid}"`);
  }

  if (!ISO_DATE.test(s.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt is not ISO yyyy-mm-dd`);
  if (s.limitations.length === 0) {
    fail(
      `${at}: limitations are required — a regulatory claim must state its scope`,
    );
  }
}

if (BIOSECURITY_STATUS.length === 0) fail('biosecurity corpus is empty');

console.log('\nBiosecurity status validation\n');
console.log(`  Status entries:           ${BIOSECURITY_STATUS.length}`);
console.log(
  `  Organisms:                ${new Set(BIOSECURITY_STATUS.map((s) => s.organismRef)).size}`,
);
console.log(
  `    …pests:                 ${BIOSECURITY_STATUS.filter((s) => s.organismType === 'pest').length}`,
);
console.log(
  `    …pathogens:             ${BIOSECURITY_STATUS.filter((s) => s.organismType === 'pathogen').length}`,
);
console.log(
  `  Official lists:           ${new Set(BIOSECURITY_STATUS.map((s) => s.officialListName)).size}`,
);
for (const st of REGULATORY_STATUSES) {
  const n = BIOSECURITY_STATUS.filter((s) => s.regulatoryStatus === st).length;
  if (n) console.log(`  ${st.padEnd(28)}${n}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Biosecurity validation passed.\n');

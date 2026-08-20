/**
 * Wave 3 subnational coverage report (§19–20).
 *
 * Computes jurisdiction coverage against an INDEPENDENT, explicitly written
 * target list — the 50 US states, 13 Canadian provinces/territories and 8
 * Australian states/territories — rather than against anything derived from the
 * registry. A report that counted the registry against itself would always read
 * 100% and prove nothing.
 *
 * Every target jurisdiction appears in the output whether or not it is covered,
 * so a difficult jurisdiction cannot silently vanish. Where a jurisdiction is
 * missing, the report says whether the cause is a missing geo prerequisite or a
 * failed verification, because those are different problems with different fixes.
 */
import { AUTHORITIES } from '../data/authorities';
import { REGIONS } from '../lib/geo/region-registry';
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';
import { isPublishableAuthority } from '../types/authority';

/** Independent target lists. Written out, not derived. */
const US_STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];
const CA_JURISDICTIONS = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon',
];
const AU_JURISDICTIONS = [
  'New South Wales',
  'Queensland',
  'South Australia',
  'Tasmania',
  'Victoria',
  'Western Australia',
  'Australian Capital Territory',
  'Northern Territory',
];

const TARGETS: [string, string[]][] = [
  ['USA', US_STATES],
  ['CAN', CA_JURISDICTIONS],
  ['AUS', AU_JURISDICTIONS],
];

const jurisdictionByName = new Map(
  CANONICAL_JURISDICTIONS.map((j) => [j.name, j]),
);
const hasProfile = new Set(REGIONS.map((r) => r.officialCode));
const authoritiesByJurisdiction = new Map<string, typeof AUTHORITIES>();
for (const a of AUTHORITIES) {
  if (!a.jurisdictionId) continue;
  const list = authoritiesByJurisdiction.get(a.jurisdictionId) ?? [];
  list.push(a);
  authoritiesByJurisdiction.set(a.jurisdictionId, list);
}

console.log('\nWave 3 — subnational jurisdiction coverage\n');

let totalTargets = 0;
let totalCovered = 0;
let blockedByGeo = 0;
const missingDetail: string[] = [];

for (const [cc, names] of TARGETS) {
  let covered = 0;
  const rows: string[] = [];
  for (const name of names) {
    const j = jurisdictionByName.get(name);
    const auths = j ? (authoritiesByJurisdiction.get(j.id) ?? []) : [];
    const hasAuthority = auths.length > 0;
    if (hasAuthority) covered++;
    if (!j) blockedByGeo++;

    const state = hasAuthority
      ? auths.some((a) => isPublishableAuthority(a))
        ? 'profile'
        : 'directory'
      : j
        ? 'DEFERRED (authority evidence)'
        : 'MISSING JURISDICTION';
    rows.push(
      `    ${name.padEnd(26)} ${(j?.id ?? '—').padEnd(8)} ${(j && hasProfile.has(j.id) ? 'profile' : '—').padEnd(8)} ${state}`,
    );
    if (!hasAuthority) missingDetail.push(`${cc}/${name}: ${state}`);
  }
  totalTargets += names.length;
  totalCovered += covered;
  console.log(`  ${cc}: ${covered} / ${names.length}`);
  for (const r of rows) console.log(r);
  console.log('');
}

const subnational = AUTHORITIES.filter((a) => a.jurisdictionId);
console.log(`  TOTAL: ${totalCovered} / ${totalTargets}`);
console.log(`  Subnational authority records:  ${subnational.length}`);
console.log(
  `  …full profiles:                 ${subnational.filter(isPublishableAuthority).length}`,
);
console.log(
  `  …directory-only:                ${subnational.filter((a) => !isPublishableAuthority(a)).length}`,
);
console.log(
  `  Canonical jurisdictions:        ${CANONICAL_JURISDICTIONS.length} / ${totalTargets}`,
);
console.log(
  `  …with a RegionProfile:          ${CANONICAL_JURISDICTIONS.filter((j) => hasProfile.has(j.id)).length}  (optional enrichment)`,
);
console.log(`  Missing jurisdiction identity:  ${blockedByGeo}`);
console.log(
  `  Deferred on authority evidence: ${totalTargets - totalCovered - blockedByGeo}`,
);
console.log(
  '\n  Jurisdiction identity and authority evidence are SEPARATE metrics.\n' +
    '  The profile column shows whether a jurisdiction also has a rich\n' +
    '  RegionProfile. That is optional enrichment: it is NOT required for an\n' +
    '  authority to exist, and is never created merely to unlock one.\n',
);

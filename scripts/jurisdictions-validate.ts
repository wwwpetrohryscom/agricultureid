/**
 * Deterministic validator for the canonical jurisdiction registry.
 *
 * Offline. Checks identity integrity only — this registry holds no agronomy, so
 * there is nothing agricultural to validate here by design.
 *
 * The expected cardinalities below are written out independently rather than
 * counted from the registry, so a dropped jurisdiction fails loudly instead of
 * silently redefining what "complete" means.
 */
import { CANONICAL_JURISDICTIONS } from '../data/jurisdictions';
import { JURISDICTION_KINDS } from '../types/jurisdiction';
import { REGIONS } from '../lib/geo/region-registry';

const EXPECTED = { USA: 50, CAN: 13, AUS: 8 } as const;
const EXPECTED_TOTAL = 71;
/** Country → the only subdivision kinds that country actually has here. */
const ALLOWED_KINDS: Record<string, string[]> = {
  USA: ['state'],
  CAN: ['province', 'territory'],
  AUS: ['state', 'territory'],
};

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const ids = new Set<string>();
const slugs = new Set<string>();
const subdivisionByCountry = new Map<string, Set<string>>();

for (const j of CANONICAL_JURISDICTIONS) {
  const at = `jurisdiction "${j.id}"`;

  if (!/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(j.id)) {
    fail(`${at}: id is not a well-formed ISO 3166-2 code`);
  }
  if (ids.has(j.id)) fail(`${at}: duplicate jurisdiction id`);
  ids.add(j.id);

  if (!j.name.trim()) fail(`${at}: empty name`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(j.slug))
    fail(`${at}: slug is not kebab-case`);
  if (slugs.has(j.slug)) fail(`${at}: duplicate slug "${j.slug}"`);
  slugs.add(j.slug);

  if (!(JURISDICTION_KINDS as readonly string[]).includes(j.kind)) {
    fail(`${at}: unknown jurisdiction kind "${j.kind}"`);
  }
  const allowed = ALLOWED_KINDS[j.countryCode];
  if (!allowed) fail(`${at}: unexpected parent country "${j.countryCode}"`);
  else if (!allowed.includes(j.kind)) {
    fail(`${at}: kind "${j.kind}" is not valid for ${j.countryCode}`);
  }

  // The id must be the country prefix plus the subdivision code, so the two
  // can never disagree about what jurisdiction this is.
  const [prefix, code] = j.id.split('-');
  if (code !== j.subdivisionCode) {
    fail(
      `${at}: id suffix "${code}" disagrees with subdivisionCode "${j.subdivisionCode}"`,
    );
  }
  const expectedPrefix = { USA: 'US', CAN: 'CA', AUS: 'AU' }[j.countryCode];
  if (expectedPrefix && prefix !== expectedPrefix) {
    fail(
      `${at}: id prefix "${prefix}" does not match parent country ${j.countryCode}`,
    );
  }

  // Subdivision codes are unique per country, not globally: AU-NT and CA-NT
  // are both legitimately "NT".
  const seen = subdivisionByCountry.get(j.countryCode) ?? new Set<string>();
  if (seen.has(j.subdivisionCode)) {
    fail(`${at}: duplicate subdivision code within ${j.countryCode}`);
  }
  seen.add(j.subdivisionCode);
  subdivisionByCountry.set(j.countryCode, seen);

  for (const alias of j.aliases ?? []) {
    if (!alias.trim()) fail(`${at}: empty alias`);
    if (alias === j.name) fail(`${at}: alias duplicates the canonical name`);
  }

  // Guard the whole point of this layer: no agronomy may creep in.
  for (const banned of [
    'climateContext',
    'majorCropSystems',
    'majorLivestockSystems',
    'irrigationContext',
  ]) {
    if (banned in (j as unknown as Record<string, unknown>)) {
      fail(
        `${at}: carries "${banned}" — agronomic data belongs on RegionProfile, never here`,
      );
    }
  }
}

for (const [cc, n] of Object.entries(EXPECTED)) {
  const actual = CANONICAL_JURISDICTIONS.filter(
    (j) => j.countryCode === cc,
  ).length;
  if (actual !== n) {
    fail(`${cc}: expected exactly ${n} jurisdictions, found ${actual}`);
  }
}
if (CANONICAL_JURISDICTIONS.length !== EXPECTED_TOTAL) {
  fail(
    `expected exactly ${EXPECTED_TOTAL} jurisdictions, found ${CANONICAL_JURISDICTIONS.length}`,
  );
}

// Every RegionProfile for these three countries must map to exactly one
// jurisdiction. A profile pointing at an unknown or wrong-country subdivision
// is a real defect, and this is the only place it would surface.
let mapped = 0;
for (const r of REGIONS) {
  if (!['USA', 'CAN', 'AUS'].includes(r.countryCode)) continue;
  const j = CANONICAL_JURISDICTIONS.find((x) => x.id === r.officialCode);
  if (!j) {
    fail(
      `RegionProfile "${r.regionId}": officialCode "${r.officialCode}" resolves to no canonical jurisdiction`,
    );
    continue;
  }
  if (j.countryCode !== r.countryCode) {
    fail(
      `RegionProfile "${r.regionId}": country ${r.countryCode} disagrees with jurisdiction ${j.id}`,
    );
  }
  mapped++;
}

const withProfile = CANONICAL_JURISDICTIONS.filter((j) =>
  REGIONS.some((r) => r.officialCode === j.id),
).length;

console.log('\nCanonical jurisdiction validation\n');
console.log(`  Jurisdictions:            ${CANONICAL_JURISDICTIONS.length}`);
console.log(
  `    United States:          ${CANONICAL_JURISDICTIONS.filter((j) => j.countryCode === 'USA').length} / 50`,
);
console.log(
  `    Canada:                 ${CANONICAL_JURISDICTIONS.filter((j) => j.countryCode === 'CAN').length} / 13`,
);
console.log(
  `    Australia:              ${CANONICAL_JURISDICTIONS.filter((j) => j.countryCode === 'AUS').length} / 8`,
);
console.log(`  With a RegionProfile:     ${withProfile}`);
console.log(
  `  Without a RegionProfile:  ${CANONICAL_JURISDICTIONS.length - withProfile}  (expected and allowed)`,
);
console.log(`  RegionProfiles mapped:    ${mapped}`);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Jurisdiction validation passed.\n');

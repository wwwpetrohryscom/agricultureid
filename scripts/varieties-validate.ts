/**
 * Deterministic gate for the variety registration corpus. Offline.
 *
 * The rule this layer exists to enforce is semantic, not structural: a register
 * entry may be attached to a cultivar ONLY when the denomination is identical
 * AND the register's own species matches the cultivar's botanical taxon.
 *
 * This gate does not trust `cultivarMatchBasis`; it RE-DERIVES the match from
 * the stored evidence — the entry's `upovSpeciesName` against the cultivar's
 * `botanicalTaxon` — and fails if the two disagree. A stored flag can be wrong;
 * a re-derived one cannot be wrong quietly.
 *
 * It also refuses to let the two legal instruments blur. A national list entry
 * (`NLI/…`) permits seed marketing in one country; a Community plant variety
 * right (`PBR/…`) is an EU-wide intellectual property grant. The register's own
 * identifier encodes which one an entry is, so the validator checks the
 * declared instrument against it rather than accepting the declaration.
 */
import { VARIETY_REGISTRATIONS } from '../data/varieties';
import {
  CULTIVAR_MATCH_BASIS,
  CURRENT_VARIETY_REGISTRATION_STATUSES,
  REGISTER_SUBTYPES,
  REGISTRATION_INSTRUMENTS,
  VARIETY_REGISTRATION_STATUSES,
} from '../types/variety';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { REGISTRIES } from '../data/registries';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const CULTIVARS = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map((c) => [
    c.slug,
    c as { slug: string; title: string; botanicalTaxon?: string },
  ]),
);
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** UUID prefix → the instrument it encodes. The register decides, not us. */
const PREFIX_INSTRUMENT: Record<string, string> = {
  NLI: 'national-list',
  PBR: 'community-plant-variety-right',
};
/** UUID second segment → register sub-type. */
const PREFIX_SUBTYPE: Record<string, string> = {
  AGR: 'agricultural-species',
  VEG: 'vegetable-species',
  FRU: 'fruit-species',
  VIN: 'vine-species',
};
/** Published wording → normalised status. Exact, so wording cannot drift. */
const WORDING_STATUS: Record<string, string> = {
  Registered: 'registered',
  Application: 'application',
  Expired: 'expired',
  Surrendered: 'surrendered',
};
const SUBTYPE_WORDING: Record<string, string> = {
  'Agricultural species': 'agricultural-species',
  'Vegetable species': 'vegetable-species',
  'Fruit species': 'fruit-species',
  'Vine species': 'vine-species',
};
/**
 * The ONE documented taxonomic equivalence. Kept as an explicit list so adding
 * another is a reviewed decision rather than a loosened rule: the register
 * publishes durum wheat at species rank, the corpus at subspecies rank.
 */
const TAXON_EQUIV = new Map([['triticum durum', 'triticum turgidum']]);
const SKIPWORDS = new Set([
  'x',
  '×',
  'subsp.',
  'ssp.',
  'var.',
  'convar.',
  'f.',
  'group',
  'sp.',
  'spp.',
]);

/** Genus + specific epithet, authority and infraspecific rank stripped. */
function taxonKey(name: string | undefined): string | null {
  if (!name) return null;
  const tokens = name
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  const genus = (tokens[0] ?? '').toLowerCase();
  if (!/^[a-z]{3,}$/.test(genus)) return null;
  for (const raw of tokens.slice(1)) {
    const word = raw.toLowerCase().replace(/[.,]+$/, '');
    if (SKIPWORDS.has(raw.toLowerCase()) || SKIPWORDS.has(`${word}.`)) continue;
    if (raw !== raw.toLowerCase()) continue; // botanical authority, e.g. "L."
    if (!/^[a-z-]{3,}$/.test(word)) continue;
    return `${genus} ${word}`;
  }
  return null; // genus alone is not specific enough to match on
}

const ids = new Set<string>();
const uuids = new Set<string>();

for (const entry of VARIETY_REGISTRATIONS) {
  const at = `${entry.id}`;

  if (ids.has(entry.id)) fail(`${at}: duplicate id`);
  ids.add(entry.id);
  if (uuids.has(entry.registerUuid))
    fail(`${at}: duplicate registerUuid ${entry.registerUuid}`);
  uuids.add(entry.registerUuid);

  /* -- the register's own identifier, and what it encodes ----------------- */
  // Prefix / sub-type / country / species / local id — and the local id may
  // itself contain a slash: Croatia publishes national ids such as "HR-7/10".
  const segments = entry.registerUuid.split('/');
  if (segments.length < 5) {
    fail(`${at}: registerUuid is not a register identifier`);
    continue;
  }
  const [prefix, sub, country] = segments as [string, string, string];
  const expectedId = entry.registerUuid
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  if (entry.id !== expectedId)
    fail(`${at}: id must be the slugified registerUuid (${expectedId})`);

  const expectedInstrument = PREFIX_INSTRUMENT[prefix];
  if (!expectedInstrument) fail(`${at}: unknown register prefix "${prefix}"`);
  else if (entry.instrument !== expectedInstrument)
    fail(
      `${at}: instrument "${entry.instrument}" contradicts register prefix "${prefix}" (expected ${expectedInstrument})`,
    );
  if (!REGISTRATION_INSTRUMENTS.includes(entry.instrument))
    fail(`${at}: instrument not in vocabulary`);

  const expectedSubType = PREFIX_SUBTYPE[sub];
  if (!expectedSubType) fail(`${at}: unknown register sub-segment "${sub}"`);
  else if (entry.registerSubType !== expectedSubType)
    fail(
      `${at}: registerSubType "${entry.registerSubType}" contradicts register segment "${sub}"`,
    );
  if (!REGISTER_SUBTYPES.includes(entry.registerSubType))
    fail(`${at}: registerSubType not in vocabulary`);
  if (SUBTYPE_WORDING[entry.publishedSubTypeWording] !== entry.registerSubType)
    fail(
      `${at}: publishedSubTypeWording "${entry.publishedSubTypeWording}" does not match registerSubType`,
    );

  /* -- status must agree with the register's own wording ------------------ */
  if (!VARIETY_REGISTRATION_STATUSES.includes(entry.status))
    fail(`${at}: status not in vocabulary`);
  const wording = entry.publishedStatusWording;
  if (!wording?.trim()) fail(`${at}: publishedStatusWording is empty`);
  else if (WORDING_STATUS[wording] === undefined)
    fail(`${at}: unrecognised published status wording "${wording}"`);
  else if (WORDING_STATUS[wording] !== entry.status)
    fail(
      `${at}: status "${entry.status}" contradicts published wording "${wording}"`,
    );

  const current = CURRENT_VARIETY_REGISTRATION_STATUSES.includes(entry.status);
  if (!current && !entry.limitations.some((l) => l.includes(wording)))
    fail(
      `${at}: non-current entry must carry a limitation naming its published status "${wording}"`,
    );

  /* -- an EU-wide right has no member state ------------------------------- */
  if (entry.instrument === 'community-plant-variety-right') {
    if (entry.countryCode)
      fail(
        `${at}: a Community plant variety right is EU-wide and must not claim a countryCode`,
      );
    if (country !== 'QZ')
      fail(`${at}: expected the CPVO country segment QZ, found "${country}"`);
  } else if (!entry.countryCode) {
    fail(`${at}: a national list entry must record its countryCode`);
  } else if (!/^[A-Z]{3}$/.test(entry.countryCode)) {
    fail(`${at}: countryCode must be ISO 3166-1 alpha-3`);
  }

  /* -- THE GATE: re-derive the cultivar match from the evidence ----------- */
  const cultivar = CULTIVARS.get(entry.cultivarRef);
  if (!cultivar) {
    fail(
      `${at}: cultivarRef "${entry.cultivarRef}" is not a published cultivar`,
    );
  } else {
    if (entry.cultivarMatchBasis !== CULTIVAR_MATCH_BASIS)
      fail(`${at}: cultivarMatchBasis must be "${CULTIVAR_MATCH_BASIS}"`);

    if (
      entry.denomination.trim().toLowerCase() !==
      cultivar.title.trim().toLowerCase()
    )
      fail(
        `${at}: denomination "${entry.denomination}" is not identical to cultivar title "${cultivar.title}"`,
      );

    const cultivarKey = taxonKey(cultivar.botanicalTaxon);
    let registerKey = taxonKey(entry.upovSpeciesName);
    if (registerKey && TAXON_EQUIV.has(registerKey))
      registerKey = TAXON_EQUIV.get(registerKey)!;
    if (!cultivarKey)
      fail(
        `${at}: cultivar "${cultivar.slug}" has no resolvable botanical taxon, so no registration may be attached to it`,
      );
    else if (!registerKey)
      fail(
        `${at}: register species "${entry.upovSpeciesName}" does not resolve to a genus and epithet`,
      );
    else if (registerKey !== cultivarKey)
      fail(
        `${at}: SPECIES MISMATCH — register publishes "${entry.upovSpeciesName}" but cultivar "${cultivar.slug}" is "${cultivar.botanicalTaxon}". Same denomination, different species: this is a homonym, not a registration of this cultivar.`,
      );
  }

  /* -- verbatim fields and provenance ------------------------------------- */
  if (entry.denomination !== entry.denomination.trim())
    fail(`${at}: denomination must be stored exactly as published`);
  if (!entry.upovSpeciesCode?.trim()) fail(`${at}: upovSpeciesCode is empty`);
  if (!entry.upovSpeciesName?.trim()) fail(`${at}: upovSpeciesName is empty`);
  if (!entry.registerName?.trim()) fail(`${at}: registerName is empty`);
  if (!entry.countryOrOrganisation?.trim())
    fail(`${at}: countryOrOrganisation is empty`);

  if (!entry.sourceReferences.length)
    fail(`${at}: at least one source reference is required`);
  for (const s of entry.sourceReferences)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  if (!entry.relatedRegistryIds.length)
    fail(`${at}: at least one related registry is required`);
  for (const r of entry.relatedRegistryIds)
    if (!REGISTRY_IDS.has(r)) fail(`${at}: unknown registry "${r}"`);
  if (!ISO_DATE.test(entry.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
  if (!entry.limitations.length)
    fail(`${at}: at least one limitation is required`);
}

/* -- corpus-level invariants ---------------------------------------------- */
for (const uuid of uuids) {
  if (!/^(NLI|PBR)\//.test(uuid))
    fail(`${uuid}: register identifier has an unexpected prefix`);
}

console.log('\nVariety registration validation\n');
console.log(`  Registration entries:     ${VARIETY_REGISTRATIONS.length}`);
console.log(
  `    …current:               ${VARIETY_REGISTRATIONS.filter((r) => CURRENT_VARIETY_REGISTRATION_STATUSES.includes(r.status)).length}`,
);
console.log(
  `  Cultivars covered:        ${new Set(VARIETY_REGISTRATIONS.map((r) => r.cultivarRef)).size}`,
);
console.log(
  `  Registers:                ${new Set(VARIETY_REGISTRATIONS.map((r) => r.countryOrOrganisation)).size}`,
);
console.log(
  `  Species:                  ${new Set(VARIETY_REGISTRATIONS.map((r) => r.upovSpeciesCode)).size}`,
);
for (const instrument of REGISTRATION_INSTRUMENTS) {
  const n = VARIETY_REGISTRATIONS.filter(
    (r) => r.instrument === instrument,
  ).length;
  if (n) console.log(`  ${instrument.padEnd(30)}${n}`);
}
for (const status of VARIETY_REGISTRATION_STATUSES) {
  const n = VARIETY_REGISTRATIONS.filter((r) => r.status === status).length;
  if (n) console.log(`    ${status.padEnd(28)}${n}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Variety registration validation passed.\n');

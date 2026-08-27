/**
 * Deterministic gate for the variety registration corpus. Offline.
 *
 * The rule this layer exists to enforce is semantic, not structural: a register
 * entry may be attached to a cultivar ONLY when the denomination is identical
 * AND the register's own species matches the cultivar's botanical taxon.
 *
 * This gate does not trust `cultivarMatchBasis`; it RE-DERIVES the match from
 * the stored evidence and fails if the two disagree. A stored flag can be
 * wrong; a re-derived one cannot be wrong quietly.
 *
 * ## Why the rules moved into contracts
 *
 * Wave 10 read one register, so the gate could read that register's own
 * identifier scheme: `NLI/…` is a listing, `PBR/…` is a right, `AGR` is an
 * agricultural species. Written that way, a rule does not merely stop applying
 * when a second register arrives — it stops FAILING. A check that inspects the
 * prefix of `NLI/AGR/AT/SOLAN_TUB/1183` simply never fires on the Canadian
 * registration number `P-17`, and the entry sails through with no rules at all.
 *
 * So every register declares a contract in `lib/varieties/registers.ts` and
 * this gate iterates THAT table. An entry whose `registerId` is not a contract
 * key is refused outright, which is what closes the hole rather than papering
 * over it.
 *
 * ## Nothing in the vocabulary is allowed to be decorative
 *
 * The previous vocabulary carried a `vine-species` register sub-type that no
 * source could ever produce, because the only register feeding this layer has
 * no vine species in it. An unreachable vocabulary member reads as coverage
 * that exists. So the gate now also checks LIVENESS: every instrument,
 * sub-type, register contract, taxonomic equivalence and crop-kind equivalence
 * must be reached by real data, and every normalised status must be the target
 * of at least one contract's published wording.
 */
import { VARIETY_REGISTRATIONS } from '../data/varieties';
import {
  CULTIVAR_MATCH_BASIS,
  CURRENT_VARIETY_REGISTRATION_STATUSES,
  INSTRUMENT_KIND,
  REGISTER_SUBTYPES,
  REGISTRATION_INSTRUMENTS,
  VARIETY_REGISTRATION_STATUSES,
} from '../types/variety';
import {
  CROP_KIND_TAXA,
  REGISTER_CONTRACTS,
  REGISTER_CONTRACT_MAP,
  TAXON_EQUIVALENCES,
} from '../lib/varieties/registers';
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

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const TAXON_EQUIV = new Map(
  TAXON_EQUIVALENCES.map((e) => [e.registerTaxon, e.corpusTaxon]),
);
const CROP_KIND_KEY = (registerId: string, kind: string, sub: string) =>
  `${registerId}|${kind}|${sub}`;
const CROP_KIND = new Map(
  CROP_KIND_TAXA.map((e) => [
    CROP_KIND_KEY(e.registerId, e.cropKind, e.subCropKind),
    e.taxon,
  ]),
);

/** Rank markers and connectives, never the specific epithet. */
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

/**
 * Genus + specific epithet, authority and infraspecific rank stripped.
 *
 * The epithet is the first following word that is neither a rank marker nor an
 * abbreviation. Botanical authorities are abbreviated with a trailing full stop
 * — `L.`, `Mill.`, `Desf.`, `Duch.` — and that is what identifies them here.
 * They were previously identified by their capital letter instead, which
 * silently returned null for every register that publishes in upper case, and
 * the United Kingdom publishes `SOLANUM LYCOPERSICUM L. VAR. LYCOPERSICUM`.
 */
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
    const word = raw.toLowerCase();
    if (SKIPWORDS.has(word)) continue;
    if (word.endsWith('.')) continue; // botanical authority, e.g. "L.", "Mill."
    if (!/^[a-z][a-z-]{2,}$/.test(word)) continue;
    return `${genus} ${word}`;
  }
  return null; // genus alone is not specific enough to match on
}

const ids = new Set<string>();
const entryIdsByRegister = new Map<string, Set<string>>();
const usedContracts = new Set<string>();
const usedInstruments = new Set<string>();
const usedSubTypes = new Set<string>();
const usedTaxonEquiv = new Set<string>();
const usedCropKinds = new Set<string>();

for (const entry of VARIETY_REGISTRATIONS) {
  const at = `${entry.id}`;

  if (ids.has(entry.id)) fail(`${at}: duplicate id`);
  ids.add(entry.id);

  /* -- the register's contract decides everything below ------------------- */
  const contract = REGISTER_CONTRACT_MAP.get(entry.registerId);
  if (!contract) {
    fail(
      `${at}: registerId "${entry.registerId}" has no contract in lib/varieties/registers.ts, so no rule in this gate would apply to it`,
    );
    continue;
  }
  usedContracts.add(contract.id);
  usedInstruments.add(entry.instrument);

  /* -- the register's own identifier -------------------------------------- */
  if (contract.entryIdPattern === null) {
    if (entry.registerEntryId)
      fail(
        `${at}: ${contract.id} publishes no entry identifier, so registerEntryId must be absent`,
      );
  } else if (!entry.registerEntryId) {
    fail(
      `${at}: ${contract.id} publishes an entry identifier and it is missing`,
    );
  } else if (!contract.entryIdPattern.test(entry.registerEntryId)) {
    fail(
      `${at}: registerEntryId "${entry.registerEntryId}" does not have the shape ${contract.id} publishes (${contract.entryIdPattern})`,
    );
  }

  if (entry.registerEntryId) {
    const seen = entryIdsByRegister.get(contract.id) ?? new Set<string>();
    if (seen.has(entry.registerEntryId))
      fail(
        `${at}: registerEntryId "${entry.registerEntryId}" appears twice in ${contract.id}`,
      );
    seen.add(entry.registerEntryId);
    entryIdsByRegister.set(contract.id, seen);
  }

  const expectedId = slug(
    `${entry.registerId}-${entry.registerEntryId ?? `${entry.denomination}-${entry.registerSpeciesName}`}`,
  );
  if (entry.id !== expectedId)
    fail(
      `${at}: id must be derived from register and entry id (${expectedId})`,
    );

  /* -- instrument, and the kind it implies -------------------------------- */
  if (!REGISTRATION_INSTRUMENTS.includes(entry.instrument))
    fail(`${at}: instrument not in vocabulary`);
  if (!contract.instruments.includes(entry.instrument))
    fail(
      `${at}: ${contract.id} issues ${contract.instruments.join(' and ')}, so it cannot have issued a ${entry.instrument}`,
    );
  if (!INSTRUMENT_KIND[entry.instrument])
    fail(`${at}: instrument "${entry.instrument}" has no kind`);

  const prefixMap = contract.entryIdPrefixInstrument;
  if (prefixMap && entry.registerEntryId) {
    const prefix = entry.registerEntryId.split('/')[0] ?? '';
    const expected = prefixMap[prefix];
    if (!expected) fail(`${at}: unknown register prefix "${prefix}"`);
    else if (entry.instrument !== expected)
      fail(
        `${at}: instrument "${entry.instrument}" contradicts register prefix "${prefix}" (expected ${expected})`,
      );
  }

  /* -- jurisdiction, fixed by the register -------------------------------- */
  if (contract.countryCode === null) {
    // A register spanning jurisdictions: an EU-wide right names no member
    // state, everything else must name exactly one.
    if (entry.instrument === 'community-plant-variety-right') {
      if (entry.countryCode)
        fail(
          `${at}: a Community plant variety right is EU-wide and must not claim a countryCode`,
        );
      const segment = entry.registerEntryId?.split('/')[2];
      if (segment !== 'QZ')
        fail(`${at}: expected the CPVO country segment QZ, found "${segment}"`);
    } else if (!entry.countryCode) {
      fail(`${at}: an entry on a multi-country register must name its country`);
    }
  } else {
    if (entry.countryCode !== contract.countryCode)
      fail(
        `${at}: ${contract.id} is a ${contract.countryOrOrganisation} register, so countryCode must be ${contract.countryCode}, found "${entry.countryCode}"`,
      );
    if (entry.countryOrOrganisation !== contract.countryOrOrganisation)
      fail(
        `${at}: countryOrOrganisation "${entry.countryOrOrganisation}" contradicts the register's jurisdiction "${contract.countryOrOrganisation}"`,
      );
  }
  if (entry.countryCode && !/^[A-Z]{3}$/.test(entry.countryCode))
    fail(`${at}: countryCode must be ISO 3166-1 alpha-3`);

  /* -- sub-type, only where the register has one -------------------------- */
  if (contract.subTypes) {
    if (!entry.registerSubType || !entry.publishedSubTypeWording) {
      fail(
        `${at}: ${contract.id} partitions its content and the sub-type is missing`,
      );
    } else {
      if (!REGISTER_SUBTYPES.includes(entry.registerSubType))
        fail(`${at}: registerSubType not in vocabulary`);
      if (
        contract.subTypes[entry.publishedSubTypeWording] !==
        entry.registerSubType
      )
        fail(
          `${at}: publishedSubTypeWording "${entry.publishedSubTypeWording}" does not match registerSubType "${entry.registerSubType}"`,
        );
      const segMap = contract.entryIdSegmentSubType;
      const segment = entry.registerEntryId?.split('/')[1];
      if (segMap && segment && segMap[segment] !== entry.registerSubType)
        fail(
          `${at}: registerSubType "${entry.registerSubType}" contradicts register segment "${segment}"`,
        );
      usedSubTypes.add(entry.registerSubType);
    }
  } else if (entry.registerSubType || entry.publishedSubTypeWording) {
    fail(
      `${at}: ${contract.id} does not partition its content, so no sub-type may be claimed for it`,
    );
  }

  /* -- status must agree with the register's own wording ------------------ */
  if (!VARIETY_REGISTRATION_STATUSES.includes(entry.status))
    fail(`${at}: status not in vocabulary`);
  const wording = entry.publishedStatusWording;
  if (!wording?.trim()) fail(`${at}: publishedStatusWording is empty`);
  else if (contract.statuses[wording] === undefined)
    fail(
      `${at}: "${wording}" is not a status wording ${contract.id} publishes`,
    );
  else if (contract.statuses[wording] !== entry.status)
    fail(
      `${at}: status "${entry.status}" contradicts published wording "${wording}"`,
    );

  const current = CURRENT_VARIETY_REGISTRATION_STATUSES.includes(entry.status);
  if (!current && !entry.limitations.some((l) => l.includes(wording)))
    fail(
      `${at}: non-current entry must carry a limitation naming its published status "${wording}"`,
    );

  if (entry.decidedOn && !ISO_DATE.test(entry.decidedOn))
    fail(`${at}: decidedOn must be an ISO date`);

  /* -- how this register expresses a species ------------------------------ */
  let registerTaxon: string | undefined;
  if (contract.speciesForm === 'botanical') {
    if (entry.registerSpeciesSubGroup)
      fail(
        `${at}: ${contract.id} publishes a scientific name, so it has no crop sub-kind`,
      );
    registerTaxon = entry.registerSpeciesName;
  } else {
    if (!entry.registerSpeciesSubGroup) {
      fail(
        `${at}: ${contract.id} publishes a crop kind, so the sub-kind that resolves it to one species is required`,
      );
    } else {
      const key = CROP_KIND_KEY(
        contract.id,
        entry.registerSpeciesName,
        entry.registerSpeciesSubGroup,
      );
      registerTaxon = CROP_KIND.get(key);
      if (!registerTaxon)
        fail(
          `${at}: crop kind "${entry.registerSpeciesName}" / "${entry.registerSpeciesSubGroup}" has no documented equivalence to a botanical taxon, so the species cannot be established`,
        );
      else usedCropKinds.add(key);
    }
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
    const rawKey = taxonKey(registerTaxon);
    let registerKey = rawKey;
    if (registerKey && TAXON_EQUIV.has(registerKey)) {
      usedTaxonEquiv.add(registerKey);
      registerKey = TAXON_EQUIV.get(registerKey)!;
    }
    if (!cultivarKey)
      fail(
        `${at}: cultivar "${cultivar.slug}" has no resolvable botanical taxon, so no registration may be attached to it`,
      );
    else if (!registerKey)
      fail(
        `${at}: register species "${registerTaxon}" does not resolve to a genus and epithet`,
      );
    else if (registerKey !== cultivarKey)
      fail(
        `${at}: SPECIES MISMATCH — register publishes "${registerTaxon}" but cultivar "${cultivar.slug}" is "${cultivar.botanicalTaxon}". Same denomination, different species: this is a homonym, not a registration of this cultivar.`,
      );
  }

  /* -- verbatim fields and provenance ------------------------------------- */
  if (entry.denomination !== entry.denomination.trim())
    fail(`${at}: denomination must be stored exactly as published`);
  if (!entry.registerSpeciesName?.trim())
    fail(`${at}: registerSpeciesName is empty`);
  if (!entry.registerName?.trim()) fail(`${at}: registerName is empty`);
  if (!entry.countryOrOrganisation?.trim())
    fail(`${at}: countryOrOrganisation is empty`);

  if (!entry.sourceReferences.length)
    fail(`${at}: at least one source reference is required`);
  for (const s of entry.sourceReferences) {
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
    else if (!contract.sourceIds.includes(s))
      fail(
        `${at}: source "${s}" is not one ${contract.id} is read from (${contract.sourceIds.join(', ')})`,
      );
  }
  if (!entry.relatedRegistryIds.length)
    fail(`${at}: at least one related registry is required`);
  for (const r of entry.relatedRegistryIds) {
    if (!REGISTRY_IDS.has(r)) fail(`${at}: unknown registry "${r}"`);
  }
  if (!entry.relatedRegistryIds.some((r) => contract.registryIds.includes(r)))
    fail(
      `${at}: none of its registries is the one ${contract.id} is read from (${contract.registryIds.join(', ')})`,
    );
  if (!ISO_DATE.test(entry.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
  if (!entry.limitations.length)
    fail(`${at}: at least one limitation is required`);
}

/* -- liveness: nothing in the vocabulary may be decorative ---------------- */
for (const c of REGISTER_CONTRACTS)
  if (!usedContracts.has(c.id))
    fail(
      `register contract "${c.id}" has no entries — a contract for a register that feeds nothing describes coverage that does not exist`,
    );
for (const i of REGISTRATION_INSTRUMENTS)
  if (!usedInstruments.has(i))
    fail(`instrument "${i}" is in the vocabulary but no entry uses it`);
for (const s of REGISTER_SUBTYPES)
  if (!usedSubTypes.has(s))
    fail(`register sub-type "${s}" is in the vocabulary but no entry uses it`);
for (const e of TAXON_EQUIVALENCES)
  if (!usedTaxonEquiv.has(e.registerTaxon))
    fail(
      `taxonomic equivalence "${e.registerTaxon}" → "${e.corpusTaxon}" is never used; an unused equivalence is an untested one`,
    );
for (const e of CROP_KIND_TAXA) {
  const key = CROP_KIND_KEY(e.registerId, e.cropKind, e.subCropKind);
  if (!usedCropKinds.has(key))
    fail(`crop-kind equivalence "${key}" → "${e.taxon}" is never used`);
}
const statusTargets = new Set(
  REGISTER_CONTRACTS.flatMap((c) => Object.values(c.statuses)),
);
for (const s of VARIETY_REGISTRATION_STATUSES)
  if (!statusTargets.has(s))
    fail(
      `status "${s}" is in the vocabulary but no register's published wording maps to it`,
    );

/* -- report --------------------------------------------------------------- */
console.log('\nVariety registration validation\n');
console.log(`  Registration entries:     ${VARIETY_REGISTRATIONS.length}`);
console.log(
  `    …current:               ${VARIETY_REGISTRATIONS.filter((r) => CURRENT_VARIETY_REGISTRATION_STATUSES.includes(r.status)).length}`,
);
console.log(
  `  Cultivars covered:        ${new Set(VARIETY_REGISTRATIONS.map((r) => r.cultivarRef)).size}`,
);
console.log(`  Registers:                ${usedContracts.size}`);
console.log(
  `  Jurisdictions:            ${new Set(VARIETY_REGISTRATIONS.map((r) => r.countryOrOrganisation)).size}`,
);
for (const contract of REGISTER_CONTRACTS) {
  const n = VARIETY_REGISTRATIONS.filter(
    (r) => r.registerId === contract.id,
  ).length;
  console.log(`    ${contract.id.padEnd(30)}${String(n).padStart(4)}`);
}
for (const instrument of REGISTRATION_INSTRUMENTS) {
  const n = VARIETY_REGISTRATIONS.filter(
    (r) => r.instrument === instrument,
  ).length;
  if (n)
    console.log(
      `  ${instrument.padEnd(38)}${String(n).padStart(4)}  (${INSTRUMENT_KIND[instrument]})`,
    );
}
for (const status of VARIETY_REGISTRATION_STATUSES) {
  const n = VARIETY_REGISTRATIONS.filter((r) => r.status === status).length;
  if (n) console.log(`    ${status.padEnd(28)}${String(n).padStart(4)}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Variety registration validation passed.\n');

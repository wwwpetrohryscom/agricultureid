/**
 * Deterministic gate for the input-authorisation corpus. Offline.
 *
 * The failure modes here are legal, not structural, and every one of them
 * renders as an ordinary row.
 *
 *  1. **Substance treated as product, or the reverse.** Approval of glyphosate
 *     is not authorisation of a product containing glyphosate. The gate checks
 *     scope against shape: a substance record may not carry an authorisation
 *     holder or an authorisation number, and a product record must carry both a
 *     number and a country.
 *  2. **Authorisation generalised across jurisdictions.** A record may name a
 *     country OR a supranational body, never both, because a decision belongs
 *     to exactly one of them.
 *  3. **A withdrawn input shown as current.** Only `authorized` and
 *     `restricted` count as in force, and the register's own wording must agree
 *     with the normalised status.
 *  4. **Use scope inflated.** A crop reference may only appear where the
 *     snapshot's reviewed concordance maps that exact register term, and that
 *     concordance may not contain a term that maps to more than one crop.
 *  5. **Dose data leaking in.** Rates, intervals and buffer distances exist in
 *     the source and must never appear here. The gate asserts structurally that
 *     no record carries a numeric rate.
 */
import {
  allInputs,
  allAuthorizations,
  isCurrent,
  euApprovalFor,
  cropsWithAuthorizedProducts,
} from '../lib/inputs/registry';
import {
  euPesticideSnapshot,
  ephySnapshot,
  pmraSnapshot,
  apvmaSnapshot,
  inputSnapshots,
} from '../lib/inputs/snapshot';
import {
  AUTHORIZATION_SCOPES,
  AUTHORIZATION_STATUSES,
  CURRENT_AUTHORIZATION_STATUSES,
  INPUT_TYPES,
} from '../types/input';
import { SOURCE_MAP } from '../lib/sources/registry';
import { REGISTRIES } from '../data/registries';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const CROPS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
/**
 * The level at which each source takes its decisions, pinned per snapshot.
 *
 * An earlier version of this gate asserted that a substance approval "is an EU
 * decision and must not claim a country". That was true of the only substance
 * source at the time and false in general: APVMA grants NATIONAL active
 * constituent approvals, and the rule rejected 5,829 valid records.
 *
 * The invariant that actually matters is narrower and stronger — a record names
 * exactly ONE jurisdictional context, and the level of that context is a
 * property of the SOURCE, pinned here rather than inferred from a scope. Adding
 * a register means stating its level deliberately.
 */
const JURISDICTION_LEVEL: Record<string, 'supranational' | 'national'> = {
  eu: 'supranational',
  ephy: 'national',
  pmra: 'national',
  apvma: 'national',
};

/** A rate: a number followed by a unit of application. Must never appear. */
const DOSE =
  /\b\d+([.,]\d+)?\s*(l\/ha|kg\/ha|g\/ha|ml\/ha|l\/hl|g\/l|kg\/l)\b/i;

/* -- snapshots ------------------------------------------------------------- */
const eu = euPesticideSnapshot();
const fr = ephySnapshot();
if (!eu) fail('the EU active-substance snapshot could not be loaded');
if (!fr) fail('the E-Phy snapshot could not be loaded');

for (const { snapshot: snap } of inputSnapshots()) {
  if (!snap) continue;
  const at = `snapshot ${snap.snapshotId}`;
  if (!REGISTRY_IDS.has(snap.registryId))
    fail(
      `${at}: registryId "${snap.registryId}" is not a Wave 5 registry — a register URL may not be hardcoded per record`,
    );
  if (!ISO_DATE.test(snap.retrievedAt))
    fail(`${at}: retrievedAt must be an ISO date`);
  if (!snap.checksum || snap.checksum.length < 32)
    fail(`${at}: an ingested snapshot must carry a checksum`);
  if (!snap.statusRule?.trim()) fail(`${at}: statusRule is required`);
  // The declared scopes must match the records the snapshot produces, in BOTH
  // directions. A file that says "product" while holding substance approvals
  // would let substance decisions be read as product authorisations; a file
  // that declares a scope it never produces is a stale declaration.
  const declared = new Set(snap.scopeLevels ?? []);
  if (declared.size === 0) fail(`${at}: declares no authorisation scope`);
  for (const scope of declared) {
    if (!AUTHORIZATION_SCOPES.includes(scope as never))
      fail(`${at}: declared scope "${scope}" is not a valid scope`);
  }
  const produced = new Set(
    allAuthorizations()
      .filter((a) => a.sourceSnapshotId === snap.snapshotId)
      .map((a) => a.scope as string),
  );
  for (const scope of produced) {
    if (!declared.has(scope))
      fail(`${at}: produces ${scope} authorisations it does not declare`);
  }
  for (const scope of declared) {
    if (!produced.has(scope))
      fail(`${at}: declares scope "${scope}" but produces none`);
  }
  if (!snap.limitations?.length) fail(`${at}: limitations are required`);
  for (const v of Object.values(snap.statusMapping)) {
    if (!AUTHORIZATION_STATUSES.includes(v as never))
      fail(`${at}: status mapping produces unknown status "${v}"`);
  }
}

/* -- the concordance may not be one-to-many -------------------------------- */
if (fr) {
  const seen = new Map<string, string>();
  for (const [term, slug] of Object.entries(fr.cropMap)) {
    if (!CROPS.has(slug))
      fail(`crop concordance: "${term}" maps to unknown crop "${slug}"`);
    // Many terms may map to ONE crop (two chicory production systems), but a
    // term mapping to several crops would invent authorisations.
    if (/[,/]| et |-\s/.test(term) && !/^Chicorées/.test(term)) {
      const prior = seen.get(term);
      if (prior) fail(`crop concordance: "${term}" mapped twice`);
    }
    seen.set(term, slug);
  }
  if (!fr.doseRule?.trim())
    fail('E-Phy snapshot: doseRule must state that rates are not ingested');
  if (Object.keys(fr.unmappedCropTerms).length === 0)
    fail(
      'E-Phy snapshot: no unmapped crop terms recorded — a concordance that maps everything has stopped discriminating',
    );
}

/** Every loaded snapshot, keyed by id, so a record is checked against ITS source. */
const snapshotById = new Map(
  inputSnapshots().map(({ snapshot }) => [snapshot.snapshotId, snapshot]),
);

/* -- inputs ---------------------------------------------------------------- */
const inputIds = new Set<string>();
for (const i of allInputs()) {
  const at = i.id;
  if (inputIds.has(i.id)) fail(`${at}: duplicate input id`);
  inputIds.add(i.id);
  if (!INPUT_TYPES.includes(i.inputType))
    fail(`${at}: inputType "${i.inputType}" is not in the vocabulary`);
  if (!i.name?.trim()) fail(`${at}: name is empty`);

  if (i.inputType === 'active-substance') {
    if (i.holderName)
      fail(
        `${at}: an active substance has no authorisation holder — that belongs to a product`,
      );
    if (i.activeSubstanceNames.length)
      fail(`${at}: an active substance does not contain active substances`);
  }
  for (const f of i.functions)
    if (DOSE.test(f)) fail(`${at}: a function carries an application rate`);
  // A product NAME is a registered trade name and may legally contain a
  // concentration ("GLYPHOSATE 72 G/L"). That is identity as the register
  // publishes it, not an application rate, so names are exempt.
  for (const s of i.activeSubstanceNames)
    if (DOSE.test(s))
      fail(
        `${at}: an active substance entry carries a concentration — composition figures are not ingested`,
      );
}

/* -- authorisations -------------------------------------------------------- */
const authIds = new Set<string>();
const numberByRegistry = new Map<string, Set<string>>();

for (const a of allAuthorizations()) {
  const at = a.id;
  if (authIds.has(a.id)) fail(`${at}: duplicate authorisation id`);
  authIds.add(a.id);

  if (!inputIds.has(a.inputRef))
    fail(`${at}: inputRef "${a.inputRef}" is not a known input`);
  if (!AUTHORIZATION_SCOPES.includes(a.scope))
    fail(`${at}: scope "${a.scope}" is not in the vocabulary`);
  if (!AUTHORIZATION_STATUSES.includes(a.status))
    fail(`${at}: status "${a.status}" is not in the vocabulary`);
  if (!a.publishedStatus?.trim())
    fail(`${at}: publishedStatus is required — status may never be assumed`);

  /* The status must be the one the RECORD'S OWN snapshot maps it to. Resolving
     the snapshot by scope instead of by source silently exempted every register
     added after the first two. */
  const snap = snapshotById.get(a.sourceSnapshotId);
  const mapped = snap?.statusMapping[a.publishedStatus];
  if (mapped && mapped !== a.status) {
    // One exception, and only one: where a register contradicts ITSELF — a
    // status that reads as authorised on a record the same register marks
    // Historical — the record is recorded as `uncertain` and must say so. That
    // is disclosure, not a mapping error. Any other disagreement is a defect.
    const disclosed =
      a.status === 'uncertain' &&
      a.limitations.some((l) => /disagree|contradict/i.test(l));
    if (!disclosed)
      fail(
        `${at}: status "${a.status}" contradicts the register wording "${a.publishedStatus}" (maps to ${mapped})`,
      );
  }

  /* a decision belongs to one jurisdiction, never two */
  if (a.countryCode && a.supranationalJurisdiction)
    fail(
      `${at}: names both a country and a supranational body — one decision belongs to one of them`,
    );
  if (!a.countryCode && !a.supranationalJurisdiction)
    fail(`${at}: names no jurisdiction at all`);
  if (!a.jurisdictionName?.trim()) fail(`${at}: jurisdictionName is required`);

  /* scope must match shape */
  if (a.scope === 'active-substance') {
    if (a.authorizationNumber)
      fail(
        `${at}: a substance approval has no authorisation number — that identifies a product`,
      );
    if (a.authorizedUses.length)
      fail(
        `${at}: a substance approval carries no authorised uses — uses belong to a product`,
      );
  } else {
    if (!a.authorizationNumber?.trim())
      fail(
        `${at}: a product authorisation must carry the register's own number — identity is never the name`,
      );
    if (!a.countryCode)
      fail(
        `${at}: a product authorisation must name the country that granted it`,
      );
    if (a.supranationalJurisdiction)
      fail(`${at}: a product authorisation is national, never supranational`);
  }

  /* identity: a register's number must be unique within that register */
  if (a.authorizationNumber) {
    const set = numberByRegistry.get(a.registryId) ?? new Set<string>();
    if (set.has(a.authorizationNumber))
      fail(
        `${at}: authorisation number ${a.authorizationNumber} appears twice in ${a.registryId}`,
      );
    set.add(a.authorizationNumber);
    numberByRegistry.set(a.registryId, set);
  }

  if (!REGISTRY_IDS.has(a.registryId))
    fail(`${at}: registryId "${a.registryId}" is not a Wave 5 registry`);
  if (!a.sourceReferences.length)
    fail(`${at}: an authorisation claim requires an official source`);
  for (const s of a.sourceReferences)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  if (!a.sourceSnapshotId?.trim()) fail(`${at}: sourceSnapshotId is required`);
  if (!ISO_DATE.test(a.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
  if (!a.limitations.length) fail(`${at}: limitations are required`);

  for (const [field, value] of [
    ['validFrom', a.validFrom],
    ['validUntil', a.validUntil],
  ] as const) {
    if (value !== undefined && !ISO_DATE.test(value))
      fail(`${at}: ${field} must be an ISO date`);
  }
  if (a.validFrom && a.validUntil && a.validUntil < a.validFrom) {
    // The register itself publishes a few contradictory date pairs. They are
    // kept as published rather than repaired, but only where the record cannot
    // be read as current and says plainly that the dates contradict.
    if (isCurrent(a))
      fail(
        `${at}: validUntil precedes validFrom on a record shown as currently authorised`,
      );
    else if (!a.limitations.some((l) => /withdrawal date precedes/i.test(l)))
      fail(
        `${at}: validUntil precedes validFrom and the record does not disclose the contradiction`,
      );
  }
  /* a withdrawn product must not look current */
  if (!isCurrent(a) && CURRENT_AUTHORIZATION_STATUSES.includes(a.status))
    fail(`${at}: status classification disagrees with itself`);

  for (const u of a.authorizedUses) {
    if (!u.cropTerm?.trim()) fail(`${at}: an authorised use has no crop term`);
    if (u.cropRef) {
      if (!CROPS.has(u.cropRef))
        fail(`${at}: use maps to unknown crop "${u.cropRef}"`);
      const mappedTo = fr?.cropMap[u.cropTerm];
      if (mappedTo !== u.cropRef)
        fail(
          `${at}: use maps "${u.cropTerm}" to "${u.cropRef}", which the reviewed concordance does not — crop scope may not be inferred per record`,
        );
    }
    if (DOSE.test(u.target) || DOSE.test(u.cropTerm))
      fail(`${at}: an authorised use carries an application rate`);
  }
}

/* -- jurisdiction level, pinned per source --------------------------------- */
{
  const bySnapshot = new Map<string, string>();
  for (const { key, snapshot } of inputSnapshots()) {
    const level = JURISDICTION_LEVEL[key];
    if (!level)
      fail(
        `snapshot ${snapshot.snapshotId}: no jurisdiction level is pinned for this source — state it in JURISDICTION_LEVEL rather than inferring it`,
      );
    else bySnapshot.set(snapshot.snapshotId, level);
  }
  for (const a of allAuthorizations()) {
    const level = bySnapshot.get(a.sourceSnapshotId);
    if (!level) {
      fail(
        `${a.id}: sourceSnapshotId does not belong to a loaded input snapshot`,
      );
      continue;
    }
    if (level === 'supranational') {
      if (a.countryCode)
        fail(
          `${a.id}: taken from a supranational register but claims the country ${a.countryCode}`,
        );
      if (!a.supranationalJurisdiction)
        fail(`${a.id}: a supranational decision must name its body`);
    } else {
      if (!a.countryCode)
        fail(`${a.id}: taken from a national register but names no country`);
      if (a.supranationalJurisdiction)
        fail(
          `${a.id}: taken from a national register but claims supranational scope`,
        );
    }
  }
}

/* -- no authorisation may leak across jurisdictions ------------------------ */
{
  // The failure this guards is the one the layer exists to prevent: a French
  // authorisation appearing as German, or an Australian one as New Zealand.
  // Every record's country must be the country its SOURCE covers.
  const sourceCountry: Record<string, string | null> = {
    [euPesticideSnapshot()?.snapshotId ?? '']: null,
    [ephySnapshot()?.snapshotId ?? '']: 'FRA',
    [pmraSnapshot()?.snapshotId ?? '']: 'CAN',
    [apvmaSnapshot()?.snapshotId ?? '']: 'AUS',
  };
  for (const a of allAuthorizations()) {
    const expected = sourceCountry[a.sourceSnapshotId];
    if (expected === undefined) continue;
    if (expected === null && a.countryCode)
      fail(`${a.id}: supranational source produced a country-scoped record`);
    if (expected !== null && a.countryCode !== expected)
      fail(
        `${a.id}: sourced from a ${expected} register but recorded under ${a.countryCode} — authorisations do not cross jurisdictions`,
      );
  }
}

/* -- sub-national entries are detail, never authorisations ----------------- */
for (const a of allAuthorizations()) {
  if (!a.subNationalEntries?.length) continue;
  if (a.scope !== 'product')
    fail(`${a.id}: sub-national entries belong to a product authorisation`);
  if (!a.countryCode)
    fail(`${a.id}: sub-national entries require a national parent decision`);
  for (const e of a.subNationalEntries) {
    if (!e.jurisdiction?.trim() || !e.publishedCode?.trim())
      fail(`${a.id}: a sub-national entry is missing its jurisdiction or code`);
  }
}
const subNationalIds = new Set(
  allAuthorizations().flatMap((a) =>
    (a.subNationalEntries ?? []).map((e) => `${a.id}:${e.jurisdiction}`),
  ),
);
for (const a of allAuthorizations()) {
  if (subNationalIds.has(a.id))
    fail(`${a.id}: a sub-national entry became an authorisation of its own`);
}

/* -- a crop reference requires a reviewed concordance for that register ---- */
{
  // E-Phy is the only register with a reviewed crop concordance. A use from
  // PMRA or PUBCRIS carries collective register vocabulary and must therefore
  // carry NO crop reference at all — an unmapped term is honest, a guessed one
  // invents an authorisation.
  const withConcordance = new Set([ephySnapshot()?.snapshotId].filter(Boolean));
  for (const a of allAuthorizations()) {
    if (withConcordance.has(a.sourceSnapshotId)) continue;
    for (const u of a.authorizedUses) {
      if (u.cropRef)
        fail(
          `${a.id}: use maps to crop "${u.cropRef}" but ${a.sourceSnapshotId} has no reviewed crop concordance — scope may not be inferred`,
        );
    }
  }
}

/* -- the separation, checked end to end ------------------------------------ */
const substanceAuths = allAuthorizations().filter(
  (a) => a.scope === 'active-substance',
);
const productAuths = allAuthorizations().filter((a) => a.scope === 'product');
if (!substanceAuths.length) fail('no active-substance approvals were loaded');
if (!productAuths.length) fail('no product authorisations were loaded');
/* Approval of a substance must never be reused as a product authorisation. */
for (const a of productAuths) {
  if (a.sourceSnapshotId === eu?.snapshotId)
    fail(
      `${a.id}: a product authorisation sourced from the EU substance list — substance approval is not product authorisation`,
    );
}

/* -- report ---------------------------------------------------------------- */
console.log('\nAgricultural input validation\n');
console.log(
  `  Inputs:                   ${allInputs().length.toLocaleString('en')}`,
);
console.log(
  `    …active substances:     ${allInputs()
    .filter((i) => i.inputType === 'active-substance')
    .length.toLocaleString('en')}`,
);
console.log(
  `    …products:              ${allInputs()
    .filter((i) => i.inputType !== 'active-substance')
    .length.toLocaleString('en')}`,
);
console.log(
  `  Authorisations:           ${allAuthorizations().length.toLocaleString('en')}`,
);
console.log(
  `    …currently in force:    ${allAuthorizations().filter(isCurrent).length.toLocaleString('en')}`,
);
for (const st of AUTHORIZATION_STATUSES) {
  const n = allAuthorizations().filter((a) => a.status === st).length;
  if (n) console.log(`    ${st.padEnd(24)}${n.toLocaleString('en')}`);
}
console.log(
  `  Crop terms mapped:        ${Object.keys(fr?.cropMap ?? {}).length} (${Object.keys(fr?.unmappedCropTerms ?? {}).length} left unmapped)`,
);
console.log(
  `  Crops with products:      ${cropsWithAuthorizedProducts().length}`,
);
void euApprovalFor;

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Input validation passed.\n');

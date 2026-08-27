/**
 * Deterministic gate for the agricultural border-requirement layer. Offline.
 *
 * The failures this prevents are the ones that would send a reader to the
 * wrong authority with the wrong paperwork, or let them believe a conditional
 * rule is universal:
 *
 *   an export requirement presented as an import requirement
 *   a phytosanitary certificate treated as a veterinary one
 *   a conditional rule stated flatly, with its conditions dropped
 *   a broad category expanded into individual commodities
 *   a national rule generalised to a union, or a union rule to the world
 *   treatment procedures published as guidance
 *   a trade statistic mistaken for a trade requirement
 */
import {
  CERTIFICATE_INSTRUMENT,
  CERTIFICATE_TYPES,
  REQUIREMENT_NATURES,
  RESERVED_CERTIFICATE_TYPES,
  REQUIREMENT_STATUSES,
  JURISDICTION_ROLES,
  ROLE_FOR_DIRECTION,
  TRADE_DIRECTIONS,
  TRADE_REQUIREMENT_TYPES,
  TRADE_SUBJECT_TYPES,
} from '../types/trade-requirement';
import {
  TRADE_REQUIREMENTS,
  jurisdictionsWithRequirements,
  unresolvedConditionCount,
} from '../lib/trade/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { REGISTRIES } from '../data/registries';
import { AUTHORITIES } from '../data/authorities';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const AUTHORITY_IDS = new Set(AUTHORITIES.map((a) => a.id));
const CROP_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

/**
 * Wording that would turn a regulatory requirement into an application
 * procedure. The layer may say a treatment is required and where the protocol
 * is published; it may not say how to carry one out.
 */
const TREATMENT_PROCEDURE =
  /\b(\d+\s*(g|kg|mg|ml|l|ppm|°c|degrees)\b|apply(?:ing)? at|dose|dosage|rate of|for \d+ (hours|minutes)|concentration of)/i;

const ids = new Set<string>();
const slugs = new Set<string>();

for (const r of TRADE_REQUIREMENTS) {
  const at = r.id;
  if (ids.has(r.id)) fail(`${at}: duplicate id`);
  ids.add(r.id);
  if (slugs.has(r.slug)) fail(`${at}: duplicate slug`);
  slugs.add(r.slug);

  /* -- vocabulary ---------------------------------------------------------- */
  if (!REQUIREMENT_NATURES.includes(r.nature))
    fail(`${at}: nature not in vocabulary`);
  if (!TRADE_DIRECTIONS.includes(r.direction))
    fail(`${at}: direction not in vocabulary`);
  if (!TRADE_REQUIREMENT_TYPES.includes(r.requirementType))
    fail(`${at}: requirement type not in vocabulary`);
  if (!REQUIREMENT_STATUSES.includes(r.status))
    fail(`${at}: status not in vocabulary`);
  if (!r.subjectTypes.length) fail(`${at}: no subject type`);
  for (const s of r.subjectTypes)
    if (!TRADE_SUBJECT_TYPES.includes(s))
      fail(`${at}: subject type "${s}" not in vocabulary`);

  /* -- direction is part of the fact --------------------------------------- */
  // Checked structurally, not from prose. The United States record is titled
  // "Importing countries' phytosanitary requirements for plants exported from
  // the United States" and is correctly an EXPORT record: both words belong in
  // it, and a keyword rule stayed satisfied when the direction was flipped.
  // The role says which side of the movement the jurisdiction is on, and
  // direction and role are two views of one fact.
  if (!JURISDICTION_ROLES.includes(r.jurisdictionRole))
    fail(`${at}: jurisdiction role not in vocabulary`);
  else if (r.jurisdictionRole !== ROLE_FOR_DIRECTION[r.direction])
    fail(
      `${at}: a "${r.direction}" requirement makes this jurisdiction the ${ROLE_FOR_DIRECTION[r.direction]}, but the record calls it the ${r.jurisdictionRole}`,
    );

  /* -- jurisdiction: national XOR supranational ---------------------------- */
  const hasCountry = Boolean(r.jurisdictionCountryCode);
  const hasUnion = Boolean(r.supranationalJurisdiction);
  if (hasCountry === hasUnion)
    fail(
      `${at}: a requirement belongs to a country or to a union above them, never both and never neither`,
    );
  if (
    r.jurisdictionCountryCode &&
    !/^[A-Z]{3}$/.test(r.jurisdictionCountryCode)
  )
    fail(`${at}: jurisdictionCountryCode must be ISO 3166-1 alpha-3`);
  if (r.originCountryCode && !/^[A-Z]{3}$/.test(r.originCountryCode))
    fail(`${at}: originCountryCode must be ISO 3166-1 alpha-3`);
  if (!r.jurisdictionName?.trim()) fail(`${at}: no jurisdiction name`);

  /* -- the form decides what must be present ------------------------------- */
  if (r.nature === 'directory') {
    // The conditions a directory record does NOT resolve are the whole point
    // of the form. Without them it is a flat rule wearing a pointer's clothes.
    if (r.unresolvedConditions.length < 2)
      fail(
        `${at}: a directory record must name the conditions the official system resolves and it does not`,
      );
    if (r.operativeText)
      fail(
        `${at}: a directory record carries operative text, which would make it a stated requirement`,
      );
    if (!r.registryIds.length && !r.officialSourceIds.length)
      fail(`${at}: a directory record must point at something`);
    if (r.status === 'current')
      fail(
        `${at}: a directory record cannot be "current" — it states no requirement to be current about`,
      );
  } else {
    // A stated requirement is unconditional, and the text that makes it
    // unconditional has to be there. Wave 6 applied the same rule to
    // compliance: `required` only where the operative article was read.
    if (!r.operativeText?.trim())
      fail(
        `${at}: a stated requirement must carry the operative text that makes it unconditional`,
      );
    if (r.unresolvedConditions.length)
      fail(
        `${at}: a stated requirement cannot have unresolved conditions — that is what makes it stated`,
      );
  }

  /* -- certificates are not interchangeable -------------------------------- */
  if (r.certificateType) {
    if (!CERTIFICATE_TYPES.includes(r.certificateType))
      fail(`${at}: certificate type not in vocabulary`);
    else {
      const inst = CERTIFICATE_INSTRUMENT[r.certificateType];
      if (!inst?.instrument)
        fail(
          `${at}: certificate type "${r.certificateType}" names no instrument`,
        );
      // A plant-health document cannot be the certificate for an animal
      // movement, and vice versa. Sending a reader to the wrong authority with
      // the wrong form is the concrete harm here.
      const plantCert = r.certificateType.includes('phytosanitary');
      const animalCert = r.certificateType === 'export-health-certificate';
      const plantSubjects = r.subjectTypes.some((s) =>
        ['plant', 'plant-product', 'seed'].includes(s),
      );
      const animalSubjects = r.subjectTypes.some((s) =>
        ['animal', 'animal-product'].includes(s),
      );
      if (plantCert && animalSubjects && !plantSubjects)
        fail(
          `${at}: a phytosanitary certificate is attached to an animal movement`,
        );
      if (animalCert && plantSubjects && !animalSubjects)
        fail(
          `${at}: an export health certificate is attached to a plant movement`,
        );
    }
    if (r.requirementType !== 'certificate' && r.requirementType !== 'permit')
      fail(
        `${at}: a certificate type on a "${r.requirementType}" requirement, which is not a document requirement`,
      );
  }

  /* -- no commodity is invented from a category ---------------------------- */
  // "Plants for planting" is not every crop in this corpus. A record naming a
  // crop must mean that crop, and none of these sources named one.
  for (const k of ['cropRef', 'commodityRef', 'livestockRef'] as const) {
    const v = (r as unknown as Record<string, unknown>)[k];
    if (typeof v === 'string' && k === 'cropRef' && !CROP_SLUGS.has(v))
      fail(`${at}: cropRef "${v}" is not a published crop`);
  }

  /* -- treatment procedures stay out --------------------------------------- */
  const prose = `${r.title} ${r.summary} ${r.unresolvedConditions.join(' ')} ${r.operativeText ?? ''}`;
  if (TREATMENT_PROCEDURE.test(prose))
    fail(
      `${at}: the text reads as a treatment procedure. This layer records that a treatment is required and where the protocol is published, never how to apply one.`,
    );

  /* -- provenance and currency --------------------------------------------- */
  if (!r.officialSourceIds.length) fail(`${at}: no official source`);
  for (const s of r.officialSourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  for (const x of r.registryIds)
    if (!REGISTRY_IDS.has(x)) fail(`${at}: unknown registry "${x}"`);
  for (const a of r.authorityIds)
    if (!AUTHORITY_IDS.has(a)) fail(`${at}: unknown authority "${a}"`);
  if (!ISO.test(r.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
  for (const d of [r.effectiveFrom, r.effectiveUntil])
    if (d && !ISO.test(d)) fail(`${at}: effective dates must be ISO dates`);
  if (r.effectiveFrom && r.effectiveUntil && r.effectiveFrom > r.effectiveUntil)
    fail(`${at}: effective range runs backwards`);
  // A rule that has been replaced must not be shown as one that applies.
  if (
    r.status === 'superseded' &&
    !r.limitations.some((l) => /supersed|replac/i.test(l))
  )
    fail(`${at}: superseded, with no limitation saying so`);
  if (
    r.effectiveUntil &&
    r.effectiveUntil < '2026-08-27' &&
    r.status !== 'superseded'
  )
    fail(
      `${at}: its effective period has ended but it is not recorded as superseded`,
    );
  if (!r.limitations.length) fail(`${at}: no limitations`);
}

/* -- liveness -------------------------------------------------------------- */
const naturesUsed = new Set(TRADE_REQUIREMENTS.map((r) => r.nature));
if (!naturesUsed.has('directory'))
  fail('no directory record exists, which is the form nearly everything takes');
const rolesUsed = new Set(TRADE_REQUIREMENTS.map((r) => r.jurisdictionRole));
for (const role of JURISDICTION_ROLES)
  if (!rolesUsed.has(role))
    fail(`jurisdiction role "${role}" is in the vocabulary and unused`);
const dirsUsed = new Set(TRADE_REQUIREMENTS.map((r) => r.direction));
for (const d of TRADE_DIRECTIONS)
  if (!dirsUsed.has(d))
    fail(`direction "${d}" is in the vocabulary and unused`);
const subjectsUsed = new Set(TRADE_REQUIREMENTS.flatMap((r) => r.subjectTypes));
for (const s of TRADE_SUBJECT_TYPES)
  if (!subjectsUsed.has(s))
    fail(`subject type "${s}" is in the vocabulary and unused`);
const certsUsed = new Set(
  TRADE_REQUIREMENTS.map((r) => r.certificateType).filter(Boolean),
);
const certsReserved = new Set(
  RESERVED_CERTIFICATE_TYPES.map((c) => c.certificateType),
);
for (const c of CERTIFICATE_TYPES)
  if (!certsUsed.has(c) && !certsReserved.has(c))
    fail(
      `certificate type "${c}" is neither used by a requirement nor explicitly reserved with a reason`,
    );
for (const c of RESERVED_CERTIFICATE_TYPES) {
  if (certsUsed.has(c.certificateType))
    fail(
      `certificate type "${c.certificateType}" is reserved but a requirement uses it`,
    );
  if (!c.why?.trim())
    fail(`reserved certificate type "${c.certificateType}" gives no reason`);
}

/* -- report ---------------------------------------------------------------- */
console.log('\nAgricultural border requirement validation\n');
console.log(`  Requirements:             ${TRADE_REQUIREMENTS.length}`);
console.log(
  `    …directory:             ${TRADE_REQUIREMENTS.filter((r) => r.nature === 'directory').length}`,
);
console.log(
  `    …stated:                ${TRADE_REQUIREMENTS.filter((r) => r.nature === 'stated').length}`,
);
console.log(
  `  Jurisdictions:            ${jurisdictionsWithRequirements().length}`,
);
console.log(
  `  Conditions left to the official systems: ${unresolvedConditionCount()}`,
);
console.log('\n  By direction');
for (const d of TRADE_DIRECTIONS)
  console.log(
    `    ${d.padEnd(12)}${String(TRADE_REQUIREMENTS.filter((r) => r.direction === d).length).padStart(4)}`,
  );
console.log('\n  By status');
for (const s of REQUIREMENT_STATUSES) {
  const n = TRADE_REQUIREMENTS.filter((r) => r.status === s).length;
  if (n) console.log(`    ${s.padEnd(12)}${String(n).padStart(4)}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Border requirement validation passed.\n');

/**
 * Deterministic gate for the soil observation layer. Offline.
 *
 * The failures this exists to prevent are all forms of a number claiming more
 * than its source supports:
 *
 *   a survey's characterisation of a mapped body read as a field measurement
 *   a value at one scale published at another
 *   two classification systems treated as translations of each other
 *   an agroecological zone used as an administrative jurisdiction
 *   a crop linked to a soil because both occur in the same place
 */
import {
  BASIS_MAY_AGGREGATE,
  CATEGORICAL_PROPERTIES,
  CLASSIFICATION_SYSTEMS,
  CLASSIFICATION_VALUES,
  SOIL_EVIDENCE_CLASSES,
  SOIL_PROPERTIES,
  SOIL_PROPERTY_UNIT,
  SPATIAL_BASES,
} from '../types/soil';
import {
  RESERVED_EVIDENCE_CLASSES,
  SOIL_DATASET_CONTRACTS,
  SOIL_DATASET_CONTRACT_MAP,
} from '../lib/soils/contracts';
import {
  allSoilObservations,
  classificationsPresent,
  jurisdictionsCovered,
  soilSnapshot,
} from '../lib/soils/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { REGISTRIES } from '../data/registries';
import { regionProfilesData } from '../data/geo/regions';
import { ZONES } from '../data/geo/zones';
import { existsSync } from 'node:fs';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const REGION_SLUGS = new Set(regionProfilesData.map((r) => r.slug));
const REGION_CODES = new Set(
  regionProfilesData.map((r) => r.officialCode).filter(Boolean) as string[],
);
const ZONE_IDS = new Set(ZONES.map((z) => z.zoneId));

const OBS = allSoilObservations();
const ids = new Set<string>();

/* -- contracts ------------------------------------------------------------- */
for (const c of SOIL_DATASET_CONTRACTS) {
  if (!existsSync(c.snapshotPath))
    fail(
      `contract "${c.datasetId}": snapshot ${c.snapshotPath} does not exist`,
    );
  if (!REGISTRY_IDS.has(c.registryId))
    fail(`contract "${c.datasetId}": unknown registry "${c.registryId}"`);
  for (const s of c.sourceIds)
    if (!SOURCE_MAP.has(s))
      fail(`contract "${c.datasetId}": unknown source "${s}"`);
  if (!SOIL_EVIDENCE_CLASSES.includes(c.evidenceClass))
    fail(`contract "${c.datasetId}": evidence class not in vocabulary`);
  if (!SPATIAL_BASES.includes(c.spatialBasis))
    fail(`contract "${c.datasetId}": spatial basis not in vocabulary`);
  if (
    c.classificationSystem &&
    !CLASSIFICATION_SYSTEMS.includes(c.classificationSystem)
  )
    fail(`contract "${c.datasetId}": classification system not in vocabulary`);
  for (const p of c.properties)
    if (!SOIL_PROPERTIES.includes(p))
      fail(`contract "${c.datasetId}": property "${p}" not in vocabulary`);
  // An administrative code is not a zone. A zone crosses borders and has no
  // government; using one here would put a climate band in a column that a
  // reader reads as a state.
  for (const j of c.jurisdictionIds) {
    if (ZONE_IDS.has(j))
      fail(
        `contract "${c.datasetId}": "${j}" is an agroecological zone, not an administrative jurisdiction`,
      );
    if (!/^[A-Z]{2}-[A-Z0-9]{1,3}$/.test(j))
      fail(`contract "${c.datasetId}": "${j}" is not an ISO 3166-2 code`);
  }
}

/* -- observations ---------------------------------------------------------- */
for (const o of OBS) {
  const at = o.id;
  if (ids.has(o.id)) fail(`${at}: duplicate observation id`);
  ids.add(o.id);

  const contract = SOIL_DATASET_CONTRACT_MAP.get(o.sourceDatasetId);
  if (!contract) {
    fail(
      `${at}: dataset "${o.sourceDatasetId}" has no contract, so no rule in this gate applies to it`,
    );
    continue;
  }

  if (!SOIL_PROPERTIES.includes(o.property))
    fail(`${at}: property not in vocabulary`);
  else if (!contract.properties.includes(o.property))
    fail(
      `${at}: "${o.property}" is not a property ${contract.datasetId} publishes`,
    );

  // Evidence class and scale come from the source's contract, never from the
  // record. A row cannot promote itself from a survey characterisation to a
  // measurement.
  if (o.evidenceClass !== contract.evidenceClass)
    fail(
      `${at}: evidence class "${o.evidenceClass}" is not what ${contract.datasetId} produces ("${contract.evidenceClass}")`,
    );
  if (o.spatialBasis !== contract.spatialBasis)
    fail(
      `${at}: spatial basis "${o.spatialBasis}" is not the scale ${contract.datasetId} publishes ("${contract.spatialBasis}")`,
    );

  /* -- value shape --------------------------------------------------------- */
  const categorical = CATEGORICAL_PROPERTIES.includes(o.property);
  if (categorical) {
    if (!o.categoricalValue?.trim())
      fail(`${at}: a categorical property with no value`);
    if (o.range) fail(`${at}: a categorical property carrying a numeric range`);
    if (o.unit) fail(`${at}: a categorical property carrying a unit`);
  } else {
    if (!o.range) fail(`${at}: a numeric property with no range`);
    else {
      const { min, max, mean } = o.range;
      if (!(min <= mean && mean <= max))
        fail(`${at}: mean ${mean} lies outside the range ${min}–${max}`);
      if (o.property === 'pH' && (min < 0 || max > 14))
        fail(`${at}: pH ${min}–${max} is outside the possible scale`);
      if (
        ['clayContent', 'sandContent', 'siltContent'].includes(o.property) &&
        (min < 0 || max > 100)
      )
        fail(`${at}: ${o.property} ${min}–${max} is not a percentage`);
    }
    const unit = SOIL_PROPERTY_UNIT[o.property];
    if (!unit) fail(`${at}: no unit is pinned for "${o.property}"`);
    else if (o.unit !== unit)
      fail(`${at}: unit "${o.unit}" is not the pinned unit "${unit}"`);
  }

  /* -- depth --------------------------------------------------------------- */
  if (o.depthRange) {
    const { minCm, maxCm } = o.depthRange;
    if (minCm < 0 || maxCm < 0) fail(`${at}: negative soil depth`);
    if (minCm >= maxCm)
      fail(`${at}: depth range ${minCm}–${maxCm} cm is not a range`);
    if (maxCm > 300)
      fail(
        `${at}: a surface horizon ${maxCm} cm deep is not a surface horizon`,
      );
  }

  /* -- geography ----------------------------------------------------------- */
  if (!contract.jurisdictionIds.includes(o.jurisdictionId))
    fail(
      `${at}: jurisdiction "${o.jurisdictionId}" is outside what ${contract.datasetId} covers`,
    );
  if (o.countryCode !== contract.countryCode)
    fail(`${at}: country "${o.countryCode}" is not the dataset's country`);
  if (ZONE_IDS.has(o.jurisdictionId))
    fail(`${at}: an agroecological zone is being used as a jurisdiction`);
  // A region reference must resolve to a profile that already exists. This
  // layer never brings a region profile into being.
  if (o.regionRef && !REGION_SLUGS.has(o.regionRef))
    fail(`${at}: regionRef "${o.regionRef}" is not an existing region profile`);
  if (o.regionRef && !REGION_CODES.has(o.jurisdictionId))
    fail(
      `${at}: jurisdiction "${o.jurisdictionId}" has no region profile, so none may be referenced`,
    );

  /* -- classification ------------------------------------------------------ */
  if (o.classification) {
    if (!CLASSIFICATION_SYSTEMS.includes(o.classification.system))
      fail(`${at}: classification system not in vocabulary`);
    if (contract.classificationSystem !== o.classification.system)
      fail(
        `${at}: classification system "${o.classification.system}" is not the one ${contract.datasetId} uses`,
      );
    if (!o.classification.value?.trim())
      fail(`${at}: a classification with no value`);
    else {
      // Naming a system is not enough: a dataset that relabels its own values
      // as another system's passes every consistency check, because the record
      // and the contract agree and are both wrong.
      const permitted = CLASSIFICATION_VALUES[o.classification.system];
      const parts = o.classification.value.split(' to ').map((x) => x.trim());
      for (const part of parts)
        if (!permitted.includes(part))
          fail(
            `${at}: "${part}" is not a value of ${o.classification.system}. The systems classify the same ground differently and are not translations of each other.`,
          );
    }
    // Where the survey records more than one, the record says so rather than
    // choosing. A value containing " to " that is not flagged is a collapse.
    if (o.classification.value.includes(' to ') && !o.classification.varies)
      fail(`${at}: a classification range is not flagged as varying`);
  }

  /* -- units covered ------------------------------------------------------- */
  if (o.unitsCovered.surveyAreas < 1 || o.unitsCovered.mapUnits < 1)
    fail(`${at}: an aggregate covering no units of the source`);
  if (o.unitsCovered.mapUnits < o.unitsCovered.surveyAreas)
    fail(
      `${at}: ${o.unitsCovered.mapUnits} map units across ${o.unitsCovered.surveyAreas} survey areas is not possible`,
    );
  // A contract can declare any scale and every record will agree with it,
  // because records take the scale from the contract. The arithmetic cannot be
  // faked: a value summarising 61 map units is not a point observation.
  if (
    !BASIS_MAY_AGGREGATE[o.spatialBasis] &&
    (o.unitsCovered.mapUnits > 1 || o.unitsCovered.surveyAreas > 1)
  )
    fail(
      `${at}: declared as "${o.spatialBasis}" but summarises ${o.unitsCovered.mapUnits} map units across ${o.unitsCovered.surveyAreas} survey areas`,
    );

  /* -- provenance ---------------------------------------------------------- */
  if (!o.sourceReferences.length) fail(`${at}: no source`);
  for (const s of o.sourceReferences)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  if (!ISO.test(o.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
}

/* -- the id scheme may not merge two soil bodies the source keeps apart ---- */
for (const c of SOIL_DATASET_CONTRACTS) {
  const snap = soilSnapshot(c);
  const inBodies = new Set(snap.rows.map((r) => `${r.stateCode}|${r.series}`));
  const outBodies = new Set(
    OBS.filter((o) => o.sourceDatasetId === c.datasetId).map(
      (o) => `${o.jurisdictionId}|${o.soilBody}`,
    ),
  );
  if (inBodies.size !== outBodies.size)
    fail(
      `${c.datasetId}: the source publishes ${inBodies.size} distinct soil bodies and this layer produced ${outBodies.size}. An identifier is merging bodies the survey keeps apart.`,
    );
}

/* -- no crop is linked to a soil by this layer ----------------------------- */
// Presence is not suitability. The corpus does carry editorial crop→soil-type
// links; this layer adds none, and the gate holds that line.
for (const o of OBS as unknown as Record<string, unknown>[])
  for (const k of ['cropRef', 'suitableCrops', 'suitability', 'recommendedFor'])
    if (k in o)
      fail(
        `${(o as { id: string }).id}: carries "${k}" — this layer does not link crops`,
      );

/* -- liveness -------------------------------------------------------------- */
const propsUsed = new Set(OBS.map((o) => o.property));
for (const p of SOIL_PROPERTIES)
  if (!propsUsed.has(p))
    fail(`property "${p}" is in the vocabulary but no observation uses it`);
const classesUsed = new Set(OBS.map((o) => o.evidenceClass));
const reserved = new Set(RESERVED_EVIDENCE_CLASSES.map((r) => r.evidenceClass));
for (const c of SOIL_EVIDENCE_CLASSES)
  if (!classesUsed.has(c) && !reserved.has(c))
    fail(
      `evidence class "${c}" is neither produced by a dataset nor explicitly reserved with a reason`,
    );
for (const r of RESERVED_EVIDENCE_CLASSES) {
  if (classesUsed.has(r.evidenceClass))
    fail(
      `evidence class "${r.evidenceClass}" is reserved but data produces it`,
    );
  if (!r.why?.trim())
    fail(`reserved evidence class "${r.evidenceClass}" gives no reason`);
}
const basesUsed = new Set(OBS.map((o) => o.spatialBasis));
const contractBases = new Set(
  SOIL_DATASET_CONTRACTS.map((c) => c.spatialBasis),
);
for (const b of basesUsed)
  if (!contractBases.has(b))
    fail(`spatial basis "${b}" is used by no contract`);
for (const [system, values] of Object.entries(CLASSIFICATION_VALUES))
  if (new Set(values).size !== values.length)
    fail(`classification system "${system}" lists a value twice`);
const systemsUsed = new Set(
  OBS.map((o) => o.classification?.system).filter(Boolean),
);
for (const s of CLASSIFICATION_SYSTEMS)
  if (!systemsUsed.has(s))
    console.log(
      `    ! classification system "${s}" is in the vocabulary and no dataset uses it`,
    );

/* -- report ---------------------------------------------------------------- */
const snap = soilSnapshot(SOIL_DATASET_CONTRACTS[0]!);
console.log('\nSoil observation validation\n');
console.log(`  Observations:             ${OBS.length.toLocaleString('en')}`);
console.log(
  `  Soil bodies:              ${new Set(OBS.map((o) => `${o.jurisdictionId}|${o.soilBody}`)).size.toLocaleString('en')}`,
);
console.log(`  Jurisdictions:            ${jurisdictionsCovered().length}`);
console.log(`  Datasets:                 ${SOIL_DATASET_CONTRACTS.length}`);
console.log(`  Survey areas summarised:  ${snap.stateCount} states`);
console.log('\n  By property');
for (const p of SOIL_PROPERTIES) {
  const n = OBS.filter((o) => o.property === p).length;
  if (n)
    console.log(`    ${p.padEnd(24)}${n.toLocaleString('en').padStart(8)}`);
}
console.log('\n  By evidence class');
for (const c of SOIL_EVIDENCE_CLASSES) {
  const n = OBS.filter((o) => o.evidenceClass === c).length;
  console.log(
    `    ${c.padEnd(24)}${n ? n.toLocaleString('en').padStart(8) : '  reserved'}`,
  );
}
console.log('\n  Classification (USDA Soil Taxonomy), by soil bodies');
for (const c of classificationsPresent().slice(0, 12))
  console.log(`    ${c.value.padEnd(24)}${String(c.bodies).padStart(6)}`);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Soil observation validation passed.\n');

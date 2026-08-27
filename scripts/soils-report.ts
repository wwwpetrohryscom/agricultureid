/**
 * Advisory report on the soil observation layer. Offline, never blocking.
 *
 * What the gate cannot judge: how much of what a survey records survives into
 * a form a reader can use, and how much variation is being reported honestly
 * rather than averaged away.
 */
import {
  SOIL_EVIDENCE_CLASSES,
  SOIL_PROPERTIES,
  SOIL_PROPERTY_LABEL,
} from '../types/soil';
import {
  RESERVED_EVIDENCE_CLASSES,
  SOIL_DATASET_CONTRACTS,
} from '../lib/soils/contracts';
import {
  allSoilObservations,
  classificationsPresent,
  jurisdictionsCovered,
  propertySummary,
  soilSnapshot,
} from '../lib/soils/registry';

const OBS = allSoilObservations();
const snap = soilSnapshot(SOIL_DATASET_CONTRACTS[0]!);

console.log('\nSoil observation report\n');
console.log(`  Observations:             ${OBS.length.toLocaleString('en')}`);
console.log(
  `  Soil bodies:              ${new Set(OBS.map((o) => `${o.jurisdictionId}|${o.soilBody}`)).size.toLocaleString('en')}`,
);
console.log(`  Jurisdictions:            ${jurisdictionsCovered().length}`);

console.log('\n  What kind of fact these are');
for (const c of SOIL_EVIDENCE_CLASSES) {
  const n = OBS.filter((o) => o.evidenceClass === c).length;
  const reserved = RESERVED_EVIDENCE_CLASSES.find((r) => r.evidenceClass === c);
  console.log(
    `    ${c.padEnd(12)} ${n ? n.toLocaleString('en').padStart(8) : 'reserved'.padStart(8)}${reserved ? `\n      ${reserved.why}` : ''}`,
  );
}

console.log('\n  Coverage by jurisdiction');
for (const j of jurisdictionsCovered())
  console.log(
    `    ${j.jurisdictionId.padEnd(8)} ${String(j.soilBodies).padStart(5)} soil bodies  ${j.observations.toLocaleString('en').padStart(7)} observations`,
  );

console.log('\n  Property ranges, by jurisdiction');
console.log(
  '    Every figure is the spread of the survey’s representative values',
);
console.log(
  '    across a state’s mapped soil bodies — never one number for a state.',
);
for (const p of ['pH', 'organicMatter', 'clayContent'] as const) {
  console.log(`\n    ${SOIL_PROPERTY_LABEL[p]}`);
  for (const j of jurisdictionsCovered()) {
    const s = propertySummary(j.jurisdictionId, p);
    if (!s) continue;
    console.log(
      `      ${j.jurisdictionId.padEnd(8)} ${String(s.bodies).padStart(5)} bodies  ${s.min.toFixed(1)}–${s.max.toFixed(1)} (mean of means ${s.mean.toFixed(2)})`,
    );
  }
}

console.log('\n  Where the survey itself records more than one answer');
{
  const varyTax = new Set(
    OBS.filter((o) => o.classification?.varies).map(
      (o) => `${o.jurisdictionId}|${o.soilBody}`,
    ),
  ).size;
  const varyDrain = new Set(
    OBS.filter((o) => o.property === 'drainageClass' && o.categoryVaries).map(
      (o) => `${o.jurisdictionId}|${o.soilBody}`,
    ),
  ).size;
  console.log(`    taxonomic order varies within the state:  ${varyTax}`);
  console.log(`    drainage class varies within the state:   ${varyDrain}`);
  console.log(
    '    Both are stated as ranges rather than reduced to one value. Publishing\n' +
      '    a single order for a soil body the survey classifies two ways would\n' +
      '    invent a certainty the survey does not have.',
  );
}

console.log('\n  Classification (USDA Soil Taxonomy)');
for (const c of classificationsPresent())
  console.log(
    `    ${c.value.padEnd(26)}${String(c.bodies).padStart(6)} soil bodies`,
  );
console.log(
  '    No crosswalk to the World Reference Base is applied. The two systems\n' +
    '    classify the same ground differently and a name match between an Order\n' +
    '    and a Reference Soil Group would produce confident nonsense.',
);

console.log('\n  What is NOT here');
console.log(
  '    crop suitability   Nothing in this layer links a soil to a crop. That a\n' +
    '                       crop is grown where a soil occurs is not evidence that\n' +
    '                       the soil suits it.\n' +
    '    subsoil            Only the surface horizon is ingested. The survey\n' +
    '                       publishes deeper horizons and they are not here.\n' +
    '    other countries    Thirteen US states, chosen because they already had a\n' +
    '                       region profile. Absence of a country is absence of\n' +
    '                       ingestion, not absence of a soil survey.',
);
console.log(
  `\n  Snapshot: ${snap.snapshotId} · ${snap.seriesCount.toLocaleString('en')} rows · checksum ${snap.checksum.slice(0, 12)}\n`,
);

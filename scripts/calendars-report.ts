/** Coverage report for the crop-calendar corpus. Deterministic, offline. */
import { CROP_CALENDARS } from '../data/calendars';
import { CALENDAR_CONFIDENCES } from '../types/calendar';

const tally = <T extends string>(v: T[]): [T, number][] =>
  [
    ...v.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map<T, number>()),
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

console.log('\nCrop calendars — coverage report\n');
console.log(`  Calendar entries          ${CROP_CALENDARS.length}`);
console.log(
  `  Crops                     ${new Set(CROP_CALENDARS.map((c) => c.cropRef)).size}`,
);
console.log(
  `  Jurisdictions             ${new Set(CROP_CALENDARS.map((c) => c.jurisdictionId)).size}`,
);
console.log(
  `  Countries                 ${new Set(CROP_CALENDARS.map((c) => c.countryCode)).size}`,
);
console.log(
  `  Seasons distinguished     ${new Set(CROP_CALENDARS.map((c) => c.seasonType).filter(Boolean)).size}`,
);
console.log(
  `  With sowing window        ${CROP_CALENDARS.filter((c) => c.sowingWindow).length}`,
);
console.log(
  `  With harvest window       ${CROP_CALENDARS.filter((c) => c.harvestWindow).length}`,
);
console.log(
  `  Sources                   ${new Set(CROP_CALENDARS.flatMap((c) => c.sourceReferences)).size}`,
);

const section = (label: string, rows: [string, number][]) => {
  if (!rows.length) return;
  console.log(`\n  ${label}`);
  for (const [k, n] of rows) console.log(`    ${String(n).padStart(3)}  ${k}`);
};
section('Crop', tally(CROP_CALENDARS.map((c) => c.cropRef)));
section(
  'Season',
  tally(CROP_CALENDARS.map((c) => c.seasonType ?? '(not distinguished)')),
);
section('Confidence', tally(CROP_CALENDARS.map((c) => c.confidence)));
console.log(
  '\n  All entries are `moderate` confidence: the source is authoritative but its\n' +
    '  latest edition is October 2010, and the reader deserves to know the vintage.\n' +
    '  Cotton, sugarbeet and sunflower tables exist in the same handbook but did\n' +
    '  not parse cleanly and were excluded rather than published contaminated.\n',
);

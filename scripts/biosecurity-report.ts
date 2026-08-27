/** Coverage report for the biosecurity corpus. Deterministic, offline. */
import { BIOSECURITY_STATUS } from '../data/biosecurity';
import { REGULATORY_STATUSES } from '../types/biosecurity';

const tally = <T extends string>(v: T[]): [T, number][] =>
  [
    ...v.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map<T, number>()),
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

console.log('\nBiosecurity listings — coverage report\n');
console.log(`  Status entries            ${BIOSECURITY_STATUS.length}`);
console.log(
  `  Organisms                 ${new Set(BIOSECURITY_STATUS.map((s) => s.organismRef)).size}`,
);
console.log(
  `  Pests                     ${BIOSECURITY_STATUS.filter((s) => s.organismType === 'pest').length}`,
);
console.log(
  `  Pathogens                 ${BIOSECURITY_STATUS.filter((s) => s.organismType === 'pathogen').length}`,
);
console.log(
  `  Official lists            ${new Set(BIOSECURITY_STATUS.map((s) => s.officialListName)).size}`,
);
console.log(
  `  Jurisdictions             ${new Set(BIOSECURITY_STATUS.map((s) => s.jurisdictionName)).size}`,
);
console.log(
  `  Sources                   ${new Set(BIOSECURITY_STATUS.flatMap((s) => s.sourceReferences)).size}`,
);

const section = (label: string, rows: [string, number][]) => {
  if (!rows.length) return;
  console.log(`\n  ${label}`);
  for (const [k, n] of rows) console.log(`    ${String(n).padStart(3)}  ${k}`);
};
section(
  'Official list',
  tally(BIOSECURITY_STATUS.map((s) => s.officialListName)),
);
section(
  'Regulatory status',
  tally(BIOSECURITY_STATUS.map((s) => s.regulatoryStatus)),
);
section('Organism type', tally(BIOSECURITY_STATUS.map((s) => s.organismType)));

const statutory = BIOSECURITY_STATUS.filter((s) =>
  [
    'quarantine',
    'regulated-non-quarantine',
    'official-control',
    'restricted',
  ].includes(s.regulatoryStatus),
).length;
console.log(
  `\n  Statutory statuses recorded: ${statutory}\n` +
    '  Every entry is `recommended-for-regulation`, because every source in this\n' +
    '  corpus is an EPPO recommendation list. EPPO recommends regulation to its\n' +
    '  member countries; it does not itself regulate, and recording these as\n' +
    '  "quarantine" would assert statutory force the source does not have.\n' +
    '\n  Five automated name matches were rejected on review rather than published.\n' +
    '  See the header of data/biosecurity/index.ts for each and why.\n',
);

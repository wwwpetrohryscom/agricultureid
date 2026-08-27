/** Coverage report for the support corpus. Deterministic, offline. */
import { SUPPORT_PROGRAMS } from '../data/support';
import { isPublishableSupportProgram } from '../types/support';

const tally = <T extends string>(v: T[]): [T, number][] =>
  [
    ...v.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map<T, number>()),
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

console.log('\nAgricultural support — coverage report\n');
console.log(`  Programmes                ${SUPPORT_PROGRAMS.length}`);
console.log(
  `  Publishable               ${SUPPORT_PROGRAMS.filter(isPublishableSupportProgram).length}`,
);
console.log(
  `  Jurisdictions             ${new Set(SUPPORT_PROGRAMS.map((p) => p.jurisdictionName)).size}`,
);
console.log(
  `  Authorities referenced    ${new Set(SUPPORT_PROGRAMS.flatMap((p) => p.administeringAuthorityIds)).size}`,
);
console.log(
  `  Funding figures (cited)   ${SUPPORT_PROGRAMS.reduce((n, p) => n + (p.fundingAmounts?.length ?? 0), 0)}`,
);
console.log(
  `  Eligibility reqs (cited)  ${SUPPORT_PROGRAMS.reduce((n, p) => n + (p.requirements?.length ?? 0), 0)}`,
);
console.log(
  `  Application windows known ${SUPPORT_PROGRAMS.filter((p) => p.applicationWindow).length}`,
);

const section = (label: string, rows: [string, number][]) => {
  if (!rows.length) return;
  console.log(`\n  ${label}`);
  for (const [k, n] of rows) console.log(`    ${String(n).padStart(3)}  ${k}`);
};
section('Status', tally(SUPPORT_PROGRAMS.map((p) => p.status)));
section('Programme type', tally(SUPPORT_PROGRAMS.map((p) => p.programType)));
section('Jurisdiction', tally(SUPPORT_PROGRAMS.map((p) => p.jurisdictionName)));
section(
  'Beneficiary',
  tally(SUPPORT_PROGRAMS.flatMap((p) => p.beneficiaryTypes)),
);
console.log(
  '\n  Zero funding figures and zero application windows is the honest state:\n' +
    '  neither was established from the official pages read, and an approximated\n' +
    '  deadline or award figure would be worse than an absent one.\n',
);

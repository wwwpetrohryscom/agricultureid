/** Coverage report for the compliance corpus. Deterministic, offline. */
import { COMPLIANCE_TOPICS } from '../data/compliance';
import { isPublishableComplianceTopic } from '../types/compliance';

const tally = <T extends string>(v: T[]): [T, number][] =>
  [
    ...v.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map<T, number>()),
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
const reqs = COMPLIANCE_TOPICS.flatMap((t) => t.requirements);

console.log('\nAgricultural compliance — coverage report\n');
console.log(`  Compliance topics         ${COMPLIANCE_TOPICS.length}`);
console.log(
  `  Publishable               ${COMPLIANCE_TOPICS.filter(isPublishableComplianceTopic).length}`,
);
console.log(
  `  Jurisdictions             ${new Set(COMPLIANCE_TOPICS.map((t) => t.jurisdictionName)).size}`,
);
console.log(`  Requirements modelled     ${reqs.length}`);
console.log(
  `    required (cited)        ${reqs.filter((r) => r.mandatoryStatus === 'required').length}`,
);
console.log(
  `    conditional             ${reqs.filter((r) => r.mandatoryStatus === 'conditional').length}`,
);
console.log(
  `    uncertain / verify      ${reqs.filter((r) => r.mandatoryStatus === 'uncertain').length}`,
);
console.log(
  `  Registries referenced     ${new Set(COMPLIANCE_TOPICS.flatMap((t) => t.relatedRegistryIds)).size}`,
);
console.log(
  `  Authorities referenced    ${new Set(COMPLIANCE_TOPICS.flatMap((t) => t.responsibleAuthorityIds)).size}`,
);
console.log(
  `  Official sources          ${new Set(COMPLIANCE_TOPICS.flatMap((t) => t.officialSources)).size}`,
);

const section = (label: string, rows: [string, number][]) => {
  if (!rows.length) return;
  console.log(`\n  ${label}`);
  for (const [k, n] of rows) console.log(`    ${String(n).padStart(3)}  ${k}`);
};
section('Topic type', tally(COMPLIANCE_TOPICS.map((t) => t.topicType)));
section(
  'Jurisdiction',
  tally(COMPLIANCE_TOPICS.map((t) => t.jurisdictionName)),
);
section('Requirement action', tally(reqs.map((r) => r.action)));
console.log(
  '\n  Only 1 requirement is marked "required": the one whose operative legal\n' +
    '  text was read and cited. The rest direct the reader to the official\n' +
    '  system rather than asserting an obligation.\n',
);

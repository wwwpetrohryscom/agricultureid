/**
 * Coverage report for the agricultural-authorities registry.
 *
 * Deterministic and offline. Prints what is actually verified — never a
 * projection or a target — so the gap between ambition and evidence stays
 * visible rather than being rounded away.
 */
import { AUTHORITIES } from '../data/authorities';
import { isPublishableAuthority } from '../types/authority';

const tally = <T extends string>(vals: T[]): [T, number][] =>
  [
    ...vals.reduce(
      (m, v) => m.set(v, (m.get(v) ?? 0) + 1),
      new Map<T, number>(),
    ),
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

const published = AUTHORITIES.filter(isPublishableAuthority);
const countries = new Set(
  AUTHORITIES.map((a) => a.countryCode).filter(Boolean),
);

console.log('\nAgricultural authorities — coverage report\n');
console.log(`  Registry entries          ${AUTHORITIES.length}`);
console.log(`  Publishable profiles      ${published.length}`);
console.log(
  `  Directory records         ${AUTHORITIES.length - published.length}`,
);
console.log(`  Countries represented     ${countries.size}`);
console.log(
  `  Supranational bodies      ${AUTHORITIES.filter((a) => a.governmentLevel === 'supranational').length}`,
);
console.log(
  `  Subnational bodies        ${AUTHORITIES.filter((a) => a.jurisdictionId).length}`,
);
console.log(
  `  Cited responsibilities    ${AUTHORITIES.reduce((n, a) => n + a.responsibilities.length, 0)}`,
);
console.log(
  `  Statutory claims          ${AUTHORITIES.reduce((n, a) => n + a.responsibilities.filter((r) => r.statutory).length, 0)}`,
);
console.log(
  `  Verification records      ${AUTHORITIES.reduce((n, a) => n + a.verification.length, 0)}`,
);
console.log(
  `  Registries / datasets     ${AUTHORITIES.reduce((n, a) => n + (a.registries?.length ?? 0), 0)}`,
);

const section = (label: string, rows: [string, number][]) => {
  if (rows.length === 0) return;
  console.log(`\n  ${label}`);
  for (const [k, n] of rows) console.log(`    ${String(n).padStart(3)}  ${k}`);
};

section('Authority type', tally(AUTHORITIES.map((a) => a.authorityType)));
section('Government level', tally(AUTHORITIES.map((a) => a.governmentLevel)));
section('Authority status', tally(AUTHORITIES.map((a) => a.authorityStatus)));
section('Candidate status', tally(AUTHORITIES.map((a) => a.candidateStatus)));
section('Profile depth', tally(AUTHORITIES.map((a) => a.profileDepth)));
section(
  'Responsibility areas',
  tally(AUTHORITIES.flatMap((a) => a.responsibilities.map((r) => r.area))),
);
section(
  'Domain verification',
  tally(
    AUTHORITIES.flatMap((a) => a.verification.map((v) => v.domainVerification)),
  ),
);

const rejected = AUTHORITIES.filter((a) => a.candidateStatus === 'rejected');
if (rejected.length > 0) {
  section(
    'Rejection reasons',
    tally(rejected.map((a) => a.rejectionReason ?? 'unrecorded')),
  );
}

console.log(
  '\n  Directory records are verified bodies that do not yet carry enough\n' +
    '  evidence for their own page. They are listed, never indexed.\n',
);

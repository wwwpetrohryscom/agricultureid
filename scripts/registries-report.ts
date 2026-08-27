/**
 * Coverage report for the official-registries corpus. Deterministic, offline.
 * Prints what is actually verified, including the honest "unknown" counts —
 * update frequency and API availability are the two properties most easily
 * guessed, so they are reported rather than hidden.
 */
import { REGISTRIES } from '../data/registries';
import { isPublishableRegistry } from '../types/registry';

const tally = <T extends string>(v: T[]): [T, number][] =>
  [
    ...v.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map<T, number>()),
  ].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

const published = REGISTRIES.filter(isPublishableRegistry);
console.log('\nOfficial agricultural registries — coverage report\n');
console.log(`  Registry records          ${REGISTRIES.length}`);
console.log(`  Full profiles            ${published.length}`);
console.log(
  `  Directory records        ${REGISTRIES.length - published.length}`,
);
console.log(
  `  Countries                ${new Set(REGISTRIES.map((r) => r.countryCode).filter(Boolean)).size}`,
);
console.log(
  `  Supranational / global   ${REGISTRIES.filter((r) => !r.countryCode).length}`,
);
console.log(
  `  Searchable               ${REGISTRIES.filter((r) => r.searchable).length}`,
);
console.log(
  `  Downloadable             ${REGISTRIES.filter((r) => r.downloadable).length}`,
);
console.log(
  `  Public API documented    ${REGISTRIES.filter((r) => r.apiAvailable).length}`,
);
console.log(
  `  Login required           ${REGISTRIES.filter((r) => r.loginRequired).length}`,
);
console.log(
  `  Update frequency unknown ${REGISTRIES.filter((r) => r.updateFrequency === 'unknown').length}`,
);
console.log(
  `  Authority resolved       ${REGISTRIES.filter((r) => r.responsibleAuthorityIds.length > 0).length}`,
);
console.log(
  `  Authority UNRESOLVED     ${REGISTRIES.filter((r) => r.responsibleAuthorityIds.length === 0).length}`,
);

const section = (label: string, rows: [string, number][]) => {
  if (!rows.length) return;
  console.log(`\n  ${label}`);
  for (const [k, n] of rows) console.log(`    ${String(n).padStart(3)}  ${k}`);
};
section('Registry type', tally(REGISTRIES.map((r) => r.registryType)));
section('Access type', tally(REGISTRIES.map((r) => r.accessType)));
section('Jurisdiction', tally(REGISTRIES.map((r) => r.jurisdictionName)));
console.log(
  '\n  "Update frequency unknown" is an honest count, not a gap to be filled:\n' +
    '  a cadence is recorded only where the operator documents one.\n',
);

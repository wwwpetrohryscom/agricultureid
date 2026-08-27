/**
 * Advisory report on the variety registration corpus. Offline, never blocking.
 *
 * Its job is to surface what the deterministic gate cannot judge: how thin the
 * coverage is, which cultivars a register says nothing about, and — most
 * useful — where the corpus's own cultivar-level `registrationStatus` and the
 * register evidence describe different worlds. That reconciliation is reported,
 * never auto-applied: a register covering EU species has nothing to say about
 * an Indian rice variety, and silence there is not disagreement.
 */
import { VARIETY_REGISTRATIONS } from '../data/varieties';
import {
  isCurrent,
  presentJurisdictions,
  presentSpecies,
} from '../lib/varieties/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

type Cultivar = {
  slug: string;
  title: string;
  botanicalTaxon?: string;
  registrationStatus?: string;
  registrationJurisdiction?: string;
};

const CULTIVARS = PUBLISHED_CONTENT.filter(
  (c) => c.contentType === 'cultivar',
) as unknown as Cultivar[];

const byCultivar = new Map<string, typeof VARIETY_REGISTRATIONS>();
for (const r of VARIETY_REGISTRATIONS) {
  byCultivar.set(r.cultivarRef, [...(byCultivar.get(r.cultivarRef) ?? []), r]);
}

console.log('\nVariety registration report\n');
console.log(`  Entries:                  ${VARIETY_REGISTRATIONS.length}`);
console.log(
  `    …current:               ${VARIETY_REGISTRATIONS.filter(isCurrent).length}`,
);
console.log(`  Cultivars in corpus:      ${CULTIVARS.length}`);
console.log(`    …with an entry:         ${byCultivar.size}`);
console.log(`  Registers:                ${presentJurisdictions().length}`);
console.log(`  Species:                  ${presentSpecies().length}`);

console.log('\n  Coverage by species');
for (const s of presentSpecies()) {
  const rows = VARIETY_REGISTRATIONS.filter(
    (r) => r.upovSpeciesCode === s.code,
  );
  const cultivars = new Set(rows.map((r) => r.cultivarRef)).size;
  console.log(
    `    ${s.name.padEnd(34)} ${String(rows.length).padStart(3)} entries  ${cultivars} cultivars`,
  );
}

console.log('\n  Registers by entry count');
const perRegister = new Map<string, number>();
for (const r of VARIETY_REGISTRATIONS) {
  perRegister.set(
    r.countryOrOrganisation,
    (perRegister.get(r.countryOrOrganisation) ?? 0) + 1,
  );
}
for (const [name, n] of [...perRegister].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${name.padEnd(20)} ${String(n).padStart(3)}`);
}

/* -- reconciliation against the corpus's own claims ------------------------ */
console.log('\n  Reconciliation with cultivar registrationStatus');
const claiming = CULTIVARS.filter(
  (c) => c.registrationStatus && c.registrationStatus !== 'historical',
);
let contradicted = 0;
for (const c of claiming) {
  const rows = byCultivar.get(c.slug) ?? [];
  const current = rows.filter(isCurrent);
  if (rows.length === 0) {
    console.log(
      `    ○ ${c.slug.padEnd(20)} corpus "${c.registrationStatus}" (${c.registrationJurisdiction ?? 'no jurisdiction'}) — outside this register's scope, no evidence either way`,
    );
    continue;
  }
  const listedLike = ['listed', 'registered', 'protected'].includes(
    c.registrationStatus ?? '',
  );
  if (listedLike && current.length === 0) {
    contradicted += 1;
    console.log(
      `    ✗ ${c.slug.padEnd(20)} corpus claims "${c.registrationStatus}" but every register entry is expired or surrendered`,
    );
  } else {
    console.log(
      `    ✓ ${c.slug.padEnd(20)} corpus "${c.registrationStatus}" — ${current.length} current entr${current.length === 1 ? 'y' : 'ies'} (${current.map((r) => r.countryOrOrganisation).join(', ')})`,
    );
  }
}

const newEvidence = [...byCultivar.entries()].filter(([slug, rows]) => {
  const c = CULTIVARS.find((x) => x.slug === slug);
  return (
    (!c?.registrationStatus || c.registrationStatus === 'historical') &&
    rows.some(isCurrent)
  );
});
console.log(
  `\n  Cultivars whose record carried no jurisdiction-level registration detail and now have it: ${newEvidence.length}`,
);
for (const [slug, rows] of newEvidence.sort()) {
  const current = rows.filter(isCurrent);
  console.log(
    `    + ${slug.padEnd(20)} ${current.length} current — ${current.map((r) => r.countryOrOrganisation).join(', ')}`,
  );
}

const uncovered = CULTIVARS.filter((c) => !byCultivar.has(c.slug));
console.log(`\n  Cultivars with no register entry: ${uncovered.length}`);
console.log(
  `    ${uncovered.map((c) => c.slug).join(', ')}\n\n` +
    '    This is expected, not a gap to be filled by guessing. The register\n' +
    '    covers EU-regulated species: inbred research lines, market classes,\n' +
    '    wine grapes (a separate EU vine register) and non-EU varieties are\n' +
    '    outside it, and absence there is not evidence of non-registration.',
);

if (contradicted > 0) {
  console.log(
    `\n  ${contradicted} corpus claim(s) contradicted by the register — review the cultivar record.`,
  );
}
console.log('');

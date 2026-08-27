/**
 * Advisory report on the input corpus. Offline, never blocking.
 *
 * Its most useful numbers are the negative ones: how many substances the EU has
 * NOT approved, how many products have been withdrawn, how many register terms
 * were left unmapped, and how many product substances could not be tied to an
 * EU decision at all. A register summarised only by what is authorised reads as
 * a catalogue; what is refused and what could not be matched is the part that
 * keeps it honest.
 */
import {
  allInputs,
  allAuthorizations,
  activeSubstances,
  isCurrent,
  euApprovalFor,
  isoNameOf,
  cropsWithAuthorizedProducts,
  productsForCrop,
} from '../lib/inputs/registry';
import {
  euPesticideSnapshot,
  ephySnapshot,
  pmraSnapshot,
  apvmaSnapshot,
  inputSnapshots,
} from '../lib/inputs/snapshot';
import { AUTHORIZATION_STATUSES } from '../types/input';

const eu = euPesticideSnapshot();
const fr = ephySnapshot();
const auths = allAuthorizations();

console.log('\nAgricultural input report\n');
console.log(
  `  Inputs:                   ${allInputs().length.toLocaleString('en')}`,
);
console.log(`  Authorisation records:    ${auths.length.toLocaleString('en')}`);
for (const st of AUTHORIZATION_STATUSES) {
  const n = auths.filter((a) => a.status === st).length;
  if (n)
    console.log(
      `    ${st.padEnd(22)}${n.toLocaleString('en').padStart(7)}  ${((n / auths.length) * 100).toFixed(1)}%`,
    );
}

console.log('\n  By jurisdiction');
{
  const byJ = new Map<string, { total: number; current: number }>();
  for (const a of auths) {
    const e = byJ.get(a.jurisdictionName) ?? { total: 0, current: 0 };
    e.total += 1;
    if (isCurrent(a)) e.current += 1;
    byJ.set(a.jurisdictionName, e);
  }
  for (const [name, e] of [...byJ].sort((a, b) => b[1].total - a[1].total)) {
    console.log(
      `    ${name.padEnd(18)} ${e.total.toLocaleString('en').padStart(7)} records  ${e.current.toLocaleString('en').padStart(7)} current`,
    );
  }
}

console.log('\n  Source releases');
for (const { snapshot } of inputSnapshots()) {
  console.log(
    `    ${snapshot.snapshotId.padEnd(42)} release ${snapshot.datasetVersion}  read ${snapshot.retrievedAt}`,
  );
}

console.log('\n  Substance decisions, by decision-maker');
{
  const eu = auths.filter(
    (a) => a.scope === 'active-substance' && a.supranationalJurisdiction,
  );
  const au = auths.filter(
    (a) => a.scope === 'active-substance' && a.countryCode === 'AUS',
  );
  const refused = eu.filter((a) => a.status === 'not-approved').length;
  console.log(
    `    European Union   ${eu.length} substances; ${eu.filter(isCurrent).length} approved, ${refused} not approved.`,
  );
  console.log(
    '    A substance list showing only the approvals would misrepresent the EU',
  );
  console.log('    register by a factor of two.');
  console.log(
    `    Australia        ${au.length} active constituents; ${au.filter(isCurrent).length} approved.`,
  );
  console.log(
    '    These are separate decisions by separate authorities and are never',
  );
  console.log('    combined into one approval count.');
}

console.log('\n  Substance-to-approval matching');
const substanceStrings = new Set(
  allInputs().flatMap((i) => i.activeSubstanceNames),
);
let matched = 0;
const unmatched: string[] = [];
for (const s of substanceStrings) {
  if (euApprovalFor(s)) matched += 1;
  else if (unmatched.length < 8) unmatched.push(isoNameOf(s));
}
console.log(
  `    ${matched} of ${substanceStrings.size} product substance names tie to an EU decision.`,
);
console.log(
  `    ${substanceStrings.size - matched} do not, and are left unlinked rather than approximated.`,
);
console.log(`    examples: ${unmatched.join(', ')}`);
console.log(
  '    Fenoxaprop is NOT approved while Fenoxaprop-P-ethyl IS. A product listing\n' +
    '    "Fenoxaprop-P" sits between them, so it is linked to neither. Guessing would\n' +
    '    publish a false legal fact about a pesticide.',
);

console.log('\n  Use scope');
console.log(
  `    ${Object.keys(fr?.cropMap ?? {}).length} register crop terms map to exactly one corpus crop.`,
);
console.log(
  `    ${Object.keys(fr?.unmappedCropTerms ?? {}).length} terms are kept verbatim and unmapped.`,
);
const top = Object.entries(fr?.unmappedCropTerms ?? {})
  .sort((a, b) => b[1] - a[1])
  .slice(0, 6);
for (const [term, n] of top) {
  console.log(`      ${String(n).padStart(5)}  ${term}`);
}
console.log(
  '    "Fruits à pépins" covers apples and pears; "Tomate - Aubergine" covers two\n' +
    '    crops in one entry. Expanding either would invent authorisations.',
);

console.log('\n  Crops with authorised products (France)');
const crops = cropsWithAuthorizedProducts();
console.log(`    ${crops.length} crops`);
const ranked = crops
  .map((c) => ({ c, n: productsForCrop(c).length }))
  .sort((a, b) => b.n - a.n);
for (const { c, n } of ranked.slice(0, 8))
  console.log(`      ${String(n).padStart(4)}  ${c}`);

console.log('\n  Source integrity');
for (const snap of [eu, fr]) {
  if (!snap) continue;
  console.log(
    `    ${snap.snapshotId.padEnd(42)} release ${snap.datasetVersion}  read ${snap.retrievedAt}`,
  );
}
if (eu) console.log(`    ${eu.versionNote}`);
if (fr)
  console.log(
    `    ${fr.dateIncoherentCount} products carry contradictory source dates and say so.`,
  );

console.log('\n  Sought and NOT ingested');
console.log(
  '    Germany (BVL), Poland, Netherlands (Ctgb), Spain (MAPA), the United\n' +
    '    Kingdom (HSE) and the United States (EPA) all operate official product\n' +
    '    registers, and all were probed. None publishes a machine-readable bulk\n' +
    '    export or open-data resource this pass could verify, and a register read\n' +
    '    by screen-scraping a search form is not provenance this layer accepts.\n' +
    '    They are absent from the index, not absent as registers.',
);
{
  const pmra = pmraSnapshot();
  const apvma = apvmaSnapshot();
  if (pmra) {
    console.log(`\n    Canada — ${pmra.scopeFilterRule}`);
    console.log(`    Canada — ${pmra.truncationRule}`);
  }
  if (apvma) {
    console.log(`\n    Australia — ${apvma.scopeFilterRule}`);
    console.log(`    Australia — ${apvma.useRule}`);
  }
}

console.log('\n  Deliberately not published');
console.log(
  '    - Doses, application rates, treatment intervals and buffer distances, all\n' +
    '      present in the source. A rate detached from its label is a hazard.\n' +
    '    - Active substance concentrations in product composition.\n' +
    '    - Any product recommendation, shortlist or ranking. The layer reports what\n' +
    '      a register holds; choosing a product is not its job.',
);
console.log('');

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
import { euPesticideSnapshot, ephySnapshot } from '../lib/inputs/snapshot';
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

console.log('\n  What the EU has refused');
const notApproved = auths.filter(
  (a) => a.scope === 'active-substance' && a.status === 'not-approved',
).length;
const approved = auths.filter(
  (a) => a.scope === 'active-substance' && isCurrent(a),
).length;
console.log(
  `    ${notApproved} of ${activeSubstances().length} active substances are recorded as not approved;\n    ${approved} are approved. A substance list that showed only approvals\n    would misrepresent the register by a factor of two.`,
);

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

console.log('\n  Deliberately not published');
console.log(
  '    - Doses, application rates, treatment intervals and buffer distances, all\n' +
    '      present in the source. A rate detached from its label is a hazard.\n' +
    '    - Active substance concentrations in product composition.\n' +
    '    - Any product recommendation, shortlist or ranking. The layer reports what\n' +
    '      a register holds; choosing a product is not its job.',
);
console.log('');

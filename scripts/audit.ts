/**
 * Offline scientific-integrity audit report (deterministic, no network).
 * Run with `npm run audit`. Informational — does not gate the build; the
 * gating checks live in scripts/validate-content.ts.
 */
import {
  duplication,
  graphReport,
  provenanceReport,
  quantitativeClaims,
  sourceReport,
} from '../lib/validation/audit';

function h(title: string) {
  console.log(`\n${'─'.repeat(64)}\n${title}\n${'─'.repeat(64)}`);
}

function main() {
  console.log('\nAgricultureID — scientific-integrity audit (offline)\n');

  h('Graph quality');
  const g = graphReport();
  console.log(`Total semantic edges: ${g.totalEdges}`);
  console.log(`Generic (relatedConcept) share: ${g.genericSharePct}%`);
  console.log(`Incorrect reciprocal edges: ${g.incorrectReciprocity}`);
  console.log('Edges by relation type:');
  for (const [rel, n] of Object.entries(g.byRelation).sort(
    (a, b) => b[1] - a[1],
  )) {
    console.log(`  ${rel.padEnd(28)} ${n}`);
  }
  console.log('Avg out-edges by content type:');
  for (const [t, n] of Object.entries(g.avgByType))
    console.log(`  ${t.padEnd(20)} ${n}`);
  console.log('Highest-degree nodes:');
  for (const d of g.highestDegree)
    console.log(`  ${d.node.padEnd(34)} ${d.degree}`);
  console.log('Lowest-degree nodes:');
  for (const d of g.lowestDegree)
    console.log(`  ${d.node.padEnd(34)} ${d.degree}`);

  h('Quantitative claims');
  const q = quantitativeClaims();
  console.log(`Pages with numeric tokens: ${q.length}`);
  const missing = q.filter((x) => !x.hasQuantClaim);
  console.log(
    `  of which without a quantitative provenance claim: ${missing.length}`,
  );
  for (const x of q.slice(0, 40)) {
    console.log(
      `  ${x.where.padEnd(34)} ${x.hasQuantClaim ? '[prov]' : '[    ]'} ${x.matches.join(', ')}`,
    );
  }

  h('Duplication (≥4 pages, length ≥60)');
  const d = duplication();
  const intentional = d.filter((x) => x.intentional).length;
  console.log(
    `Repeated strings: ${d.length} (${intentional} intentional safety/methodology)`,
  );
  for (const x of d.filter((y) => !y.intentional).slice(0, 20)) {
    console.log(`  ${String(x.pages).padStart(3)}×  ${x.text.slice(0, 90)}`);
  }

  h('Sources');
  const s = sourceReport();
  console.log(
    `Tier distribution of references: T1=${s.tierDistribution[1]} T2=${s.tierDistribution[2]} T3=${s.tierDistribution[3]}`,
  );
  console.log(`Pages sourced ONLY by Tier-3: ${s.tier3OnlyPages.length}`);
  for (const p of s.tier3OnlyPages) console.log(`  - ${p}`);
  console.log('Top sources by usage (id, uses, tier, specificity):');
  for (const u of s.usage.slice(0, 12)) {
    console.log(
      `  ${u.id.padEnd(18)} ${String(u.uses).padStart(4)}  T${u.tier}  ${u.specificity}`,
    );
  }

  h('Field-level provenance');
  const p = provenanceReport();
  console.log(`Pages with provenance claims: ${p.pagesWithClaims}`);
  console.log(`Total provenance claims: ${p.totalClaims}`);
  console.log(`Pages with quantitative tokens: ${p.pagesWithQuantTokens}`);
  console.log(
    `  missing quantitative provenance: ${p.quantPagesMissingProvenance}`,
  );
  console.log('');
}

main();

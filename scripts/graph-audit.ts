/**
 * Phase 5F — the graph integrity audit, runnable on its own.
 *
 *   npm run graph:audit
 *
 * Reports coverage (declared vs discovered), inverse safety, and RelationPanels
 * render coverage. The same checks run inside content:validate; this prints the
 * detail. Exits non-zero on any error-level issue.
 */
import { allSemanticEdges } from '@/lib/content/relations';
import { graphIssues, graphCoverage } from '@/lib/content/graph-coverage';
import {
  inverseSafetyReport,
  typeUnsafeInverses,
} from '@/lib/content/relation-spec';
import {
  relationRenderCoverage,
  unrenderableRelations,
} from '@/lib/content/renderable-relations';

const edges = allSemanticEdges();
const byOrigin: Record<string, number> = {};
for (const e of edges) byOrigin[e.origin] = (byOrigin[e.origin] ?? 0) + 1;

console.log('\n  Graph integrity audit\n');
console.log(`  Edges:            ${edges.length}`);
console.log(`  By origin:        ${JSON.stringify(byOrigin)}`);

console.log('\n  Coverage (declared vs discovered), types declaring refs:');
for (const row of graphCoverage()
  .filter((r) => r.declaredRefs > 0)
  .sort((a, b) => b.discoveredEdges - a.discoveredEdges))
  console.log(
    `    ${row.contentType.padEnd(22)} declared ${String(row.declaredTargets).padStart(4)} · discovered ${String(row.discoveredEdges).padStart(5)}${row.missingDeclaredEdges.length ? ` · MISSING ${row.missingDeclaredEdges.length}` : ''}`,
  );

const inv = inverseSafetyReport();
const byVerdict: Record<string, number> = {};
for (const r of inv) byVerdict[r.verdict] = (byVerdict[r.verdict] ?? 0) + 1;
console.log(`\n  Inverse safety:   ${JSON.stringify(byVerdict)}`);
for (const u of typeUnsafeInverses())
  console.log(
    `    TYPE-UNSAFE ${u.relation} ⁻¹= ${u.inverse} [${u.edges}]: ${u.reason}`,
  );

console.log('\n  RelationPanels render coverage:');
const rc = relationRenderCoverage();
console.log(`    relations with edges: ${rc.length}`);
console.log(`    unrenderable:         ${unrenderableRelations().length}`);
const rel = edges.filter((e) => e.relation === 'relatedConcept').length;
console.log(
  `    generic relatedConcept: ${rel} (${((rel / edges.length) * 100).toFixed(1)}%)`,
);

const issues = graphIssues();
if (issues.length) {
  console.log(`\n  ${issues.length} issue(s):`);
  for (const i of issues.slice(0, 20))
    console.log(`    - [${i.code}] ${i.where}: ${i.message}`);
  console.log('\n  Graph audit FAILED.\n');
  process.exit(1);
}
console.log(
  '\n  ✓ Graph audit passed: coverage complete, no type-unsafe inverse materialised, every relation renderable.\n',
);

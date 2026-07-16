/**
 * Phase 5E §4 — the calculator formula-contract audit, runnable on its own.
 *
 *   npm run calc:contract
 *
 * The same check runs inside `content:validate`; this exists so the contract can
 * be interrogated directly, printing what each tool declares against what it
 * actually executes.
 */
import { contractIssues, executedFormulasByTool } from '@/lib/tools/contract';
import { TOOLS } from '@/lib/tools/tools';
import { FORMULAS } from '@/lib/tools/formulas';

const executed = executedFormulasByTool();
let mismatches = 0;

console.log('\n  Calculator formula contract\n');
for (const tool of TOOLS) {
  const ran = [...(executed.get(tool.slug) ?? [])].sort();
  const declared = [...tool.formulaIds].sort();
  const ok = JSON.stringify(ran) === JSON.stringify(declared);
  if (!ok) mismatches++;
  console.log(
    `  ${ok ? '✓' : '✗'} ${tool.slug.padEnd(32)} declared ${String(declared.length).padStart(2)} · executed ${String(ran.length).padStart(2)}`,
  );
}

const deprecated = FORMULAS.filter((f) => f.deprecated);
const issues = contractIssues();
console.log(
  `\n  Formulas:   ${FORMULAS.length} (${deprecated.length} deprecated, exempt from reachability)`,
);
console.log(`  Tools:      ${TOOLS.length}`);
console.log(`  Mismatches: ${mismatches}`);

if (issues.length) {
  console.log(`\n  ${issues.length} issue(s):`);
  for (const i of issues)
    console.log(`    - [${i.code}] ${i.where}: ${i.message}`);
  console.log('\n  Calculator contract FAILED.\n');
  process.exit(1);
}
console.log(
  '\n  ✓ Calculator contract passed: every tool executes exactly the formulas it advertises.\n',
);

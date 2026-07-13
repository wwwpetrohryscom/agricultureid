/**
 * Phase 4A — validate the dataset registry against the immutable snapshots.
 * Deterministic, offline. Exits non-zero on any error. Run: npm run data:validate
 */
import { DATASETS } from '../lib/data-ops/registry';
import { dataOpsIssues } from '../lib/data-ops/validate-dataops';

function main() {
  console.log('\nAgricultureID — dataset registry validation\n');
  console.log(`  Datasets registered: ${DATASETS.length}`);
  const providers = new Map<string, number>();
  for (const d of DATASETS)
    providers.set(d.provider, (providers.get(d.provider) ?? 0) + 1);
  for (const [p, n] of providers) console.log(`  Provider ${p}: ${n}`);

  const issues = dataOpsIssues();
  const errors = issues.filter((i) => i.level === 'error');
  const warns = issues.filter((i) => i.level === 'warning');
  for (const i of issues)
    console.log(`  [${i.level}] ${i.code} ${i.where ?? ''} — ${i.message}`);

  if (errors.length) {
    console.log(
      `\n  ✖ Dataset validation FAILED (${errors.length} errors, ${warns.length} warnings).\n`,
    );
    process.exit(1);
  }
  console.log(
    `\n  ✓ Dataset validation passed (0 errors, ${warns.length} warnings).\n`,
  );
}

main();

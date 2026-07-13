/**
 * Phase 4A — offline provenance-health report. Deterministic. Prints status
 * totals and a review queue. Run: npm run provenance:health
 */
import { provenanceHealth, reviewQueue } from '../lib/provenance/health';

function main() {
  const report = provenanceHealth();
  console.log('\nAgricultureID — provenance health (offline)\n');
  console.log(`  Generated from: ${report.generatedFrom}`);
  console.log(`  Subjects: ${report.totals.subjects}`);
  console.log('  By status:');
  for (const [status, n] of Object.entries(report.totals.byStatus))
    console.log(`    ${status.padEnd(22)} ${n}`);

  const queue = reviewQueue(report);
  console.log(`\n  Review queue (non-healthy): ${queue.length}`);
  for (const e of queue.slice(0, 40))
    console.log(`    ${e.subject.padEnd(40)} ${e.statuses.join(', ')}`);
  if (queue.length > 40) console.log(`    … and ${queue.length - 40} more`);
  console.log('');
}

main();

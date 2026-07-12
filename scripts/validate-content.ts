/**
 * Content integrity gate. Run with `npm run content:validate`.
 * Exits non-zero when any error-level issue is found so CI fails the build.
 */
import { validateAll } from '../lib/validation/validate';

function main() {
  const { issues, errorCount, warningCount, stats } = validateAll();

  const errors = issues.filter((i) => i.level === 'error');
  const warnings = issues.filter((i) => i.level === 'warning');

  console.log('\nAgricultureID — content validation\n');
  console.log(
    `  Content items:     ${stats.totalContent} (${stats.publishedContent} published)`,
  );
  console.log(
    `  By type:           ${Object.entries(stats.byType)
      .map(([k, v]) => `${k}=${v}`)
      .join(', ')}`,
  );
  console.log(`  Sources:           ${stats.sources}`);
  console.log(`  Glossary terms:    ${stats.glossaryTerms}`);
  console.log(`  Weakly-linked:     ${stats.weaklyLinked}`);
  console.log('');

  if (warnings.length > 0) {
    console.log(`  ⚠ ${warnings.length} warning(s):`);
    for (const w of warnings) {
      console.log(
        `    - [${w.code}] ${w.message}${w.where ? ` (${w.where})` : ''}`,
      );
    }
    console.log('');
  }

  if (errors.length > 0) {
    console.error(`  ✖ ${errors.length} error(s):`);
    for (const e of errors) {
      console.error(
        `    - [${e.code}] ${e.message}${e.where ? ` (${e.where})` : ''}`,
      );
    }
    console.error('\nContent validation FAILED.\n');
    process.exit(1);
  }

  console.log(
    `  ✓ Content validation passed (${errorCount} errors, ${warningCount} warnings).\n`,
  );
}

main();

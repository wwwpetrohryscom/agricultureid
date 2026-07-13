/**
 * SEO / discovery audit (Phase 4E). Reports sitemap hygiene, structured-data
 * coverage, crawl depth, and accessibility across the whole site. Deterministic.
 * Run: npm run seo:audit
 */
import { seoAudit } from '../lib/seo/audit';

function main() {
  const r = seoAudit();
  console.log('\nAgricultureID — SEO / discovery audit\n');
  console.log(`  Sitemap routes:       ${r.routes}`);
  console.log(`  Max crawl depth:      ${r.crawl.maxDepth}`);
  console.log(
    `  Depth histogram:      ${Object.entries(r.crawl.histogram)
      .map(([d, n]) => `${d}:${n}`)
      .join('  ')}`,
  );
  console.log(`  Unreachable pages:    ${r.crawl.unreachable.length}`);
  console.log(`  Metadata issues:      ${r.metadata.length}`);
  console.log(`  Structured-data:      ${r.structuredData.length}`);
  console.log(`  Accessibility/crawl:  ${r.accessibility.length}`);

  const errors = [
    ...r.metadata,
    ...r.structuredData,
    ...r.accessibility,
  ].filter((i) => i.level === 'error');
  if (errors.length) {
    console.log(`\n  ${errors.length} error(s):`);
    for (const e of errors.slice(0, 40))
      console.log(
        `    - [${e.code}] ${e.message}${e.where ? ` (${e.where})` : ''}`,
      );
    console.log('\nSEO audit FAILED.\n');
    process.exit(1);
  }
  console.log('\n  ✓ SEO audit passed (0 errors).\n');
}

main();

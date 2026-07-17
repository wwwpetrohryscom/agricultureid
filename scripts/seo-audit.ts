/**
 * SEO / discovery audit (Phase 4E). Reports sitemap hygiene, structured-data
 * coverage, MODELLED registry reachability, and accessibility. Deterministic.
 *
 * This audit reads no rendered HTML. Its reachability numbers describe a
 * hand-written model of navigation built from the registry — they are NOT a
 * crawl and are NOT an orphan count. For rendered reachability (real anchors,
 * real crawl depth, real orphans) run `npm run seo:rendered`.
 *
 * Run: npm run seo:audit
 */
import { seoAudit } from '../lib/seo/audit';

function main() {
  const r = seoAudit();
  const m = r.registryReachability;
  console.log('\nAgricultureID — SEO / discovery audit\n');
  console.log(`  Sitemap routes:                  ${r.routes}`);
  console.log(`  Metadata issues:                 ${r.metadata.length}`);
  console.log(`  Structured-data:                 ${r.structuredData.length}`);
  console.log(`  Accessibility/model:             ${r.accessibility.length}`);

  console.log('\n  Modelled registry reachability (NOT a crawl):');
  console.log(`    Max modelled depth:            ${m.maxModelledDepth}`);
  console.log(
    `    Modelled depth histogram:      ${Object.entries(m.modelledHistogram)
      .map(([d, n]) => `${d}:${n}`)
      .join('  ')}`,
  );
  console.log(
    `    Not listed by the model:       ${m.modelUnreachable.length}`,
  );
  console.log(
    '    ^ These describe the registry model only. The model links every hub to\n' +
      '      every item of its type, so it reports full reachability even if no page\n' +
      '      linked to another. Real orphans/crawl depth: `npm run seo:rendered`.',
  );

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

/**
 * Knowledge-graph and content report. Run with `npm run content:report`.
 * Informational only — never exits non-zero. Use `content:validate` for gating.
 */
import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  contentUrlPath,
} from '../lib/content/registry';
import {
  computeReachable,
  inboundRefs,
  outgoingRefs,
  weaklyLinkedItems,
} from '../lib/content/graph';
import { refKey } from '../lib/content/registry';
import { SOURCES } from '../lib/sources/registry';
import { GLOSSARY } from '../data/glossary';
import { allRoutes } from '../lib/seo/routes';

function main() {
  console.log('\nAgricultureID — content report\n');

  // Pages by type
  const byType: Record<string, number> = {};
  for (const item of PUBLISHED_CONTENT) {
    byType[item.contentType] = (byType[item.contentType] ?? 0) + 1;
  }
  console.log('Published pages by content type:');
  for (const [type, count] of Object.entries(byType)) {
    console.log(`  ${type.padEnd(16)} ${count}`);
  }

  console.log('\nTotals:');
  console.log(`  Structured content pages: ${PUBLISHED_CONTENT.length}`);
  console.log(`  Sitemap routes:           ${allRoutes().length}`);
  console.log(`  Sources in registry:      ${SOURCES.length}`);
  console.log(`  Glossary terms:           ${GLOSSARY.length}`);

  // Relationship edges
  let edges = 0;
  for (const item of ALL_CONTENT) edges += outgoingRefs(item).length;
  console.log(`  Typed relationship edges: ${edges}`);

  // Reachability / orphans
  const reachable = computeReachable();
  const orphans = PUBLISHED_CONTENT.filter(
    (i) => !reachable.has(refKey(i.contentType, i.slug)),
  );
  console.log(`\nOrphan pages (unreachable from any hub): ${orphans.length}`);
  for (const o of orphans) console.log(`  - ${contentUrlPath(o)}`);

  // Weakly-linked (no inbound cross-links)
  const weak = weaklyLinkedItems();
  console.log(`\nWeakly-linked pages (no inbound cross-links): ${weak.length}`);
  for (const w of weak) {
    console.log(`  - ${contentUrlPath(w)} (${inboundRefs(w).length} inbound)`);
  }

  console.log('');
}

main();

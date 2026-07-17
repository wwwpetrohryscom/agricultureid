import { describe, it, expect } from 'vitest';
import {
  seoAudit,
  registryReachabilityAudit,
  registryNavModel,
  metadataAudit,
  structuredDataAudit,
  accessibilityAudit,
} from '@/lib/seo/audit';
import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { sectionedRoutes, allRoutes, SITEMAP_SECTIONS } from '@/lib/seo/routes';
import {
  runBenchmark,
  benchmarkSummary,
  BENCHMARKS,
} from '@/lib/search/benchmark';

describe('Phase 4E — sitemap sharding', () => {
  it('partitions every route into a section with no loss or overlap', () => {
    const sections = sectionedRoutes();
    const flat = allRoutes();
    const sum = SITEMAP_SECTIONS.reduce((n, s) => n + sections[s].length, 0);
    expect(sum).toBe(flat.length);
    // Every flat route belongs to exactly one shard.
    const shardPaths = SITEMAP_SECTIONS.flatMap((s) =>
      sections[s].map((r) => r.path),
    );
    expect(new Set(shardPaths).size).toBe(flat.length);
  });

  it('keeps every shard well under the 50,000-URL sitemap limit', () => {
    const sections = sectionedRoutes();
    for (const s of SITEMAP_SECTIONS) {
      expect(sections[s].length).toBeLessThan(50_000);
    }
  });

  it('routes content, geo, and tools into their expected shards', () => {
    const sections = sectionedRoutes();
    expect(sections.content.some((r) => r.path.startsWith('/crops/'))).toBe(
      true,
    );
    // Phase 5B moved the post-harvest quality cluster into its own shard, so it
    // is deliberately no longer part of the general `content` shard.
    expect(
      sections.content.some((r) => r.path.startsWith('/post-harvest/')),
    ).toBe(false);
    expect(
      sections['post-harvest'].some((r) => r.path.startsWith('/post-harvest/')),
    ).toBe(true);
    expect(sections.geo.some((r) => r.path.startsWith('/countries/'))).toBe(
      true,
    );
    expect(
      sections.geo.some((r) => r.path.startsWith('/agroecological-zones')),
    ).toBe(true);
    expect(sections.tools.some((r) => r.path.startsWith('/tools/'))).toBe(true);
    expect(sections.tools.some((r) => r.path.startsWith('/compare/'))).toBe(
      true,
    );
  });
});

/**
 * These assert properties of the registry navigation MODEL. They are not
 * evidence about rendered HTML: the model parses no build output, so it cannot
 * report an orphan or a click-depth. Real rendered reachability is asserted
 * against emitted HTML by `scripts/rendered-link-audit.ts` (`npm run
 * seo:rendered`) and documented in `docs/rendered-link-audit.md`, which records
 * that the real numbers differ (79 pages unreachable from `/`, real max depth 8).
 */
describe('Phase 4E — modelled registry reachability (NOT a crawl)', () => {
  const model = registryReachabilityAudit();

  it('lists every indexable sitemap page somewhere in the registry nav model', () => {
    expect(model.modelUnreachable).toEqual([]);
  });

  it('keeps MODELLED depth ≤ 4 (a property of the model, not measured click-depth)', () => {
    expect(model.maxModelledDepth).toBeLessThanOrEqual(4);
  });

  it('models most pages within 2 hops of home', () => {
    const shallow =
      (model.modelledHistogram[0] ?? 0) +
      (model.modelledHistogram[1] ?? 0) +
      (model.modelledHistogram[2] ?? 0);
    const total = [...model.modelledDepthByPath.values()].length;
    expect(shallow / total).toBeGreaterThan(0.85);
  });

  /**
   * Pins the reason the model's reachability number is not a discovery finding:
   * hub→item enumeration alone puts every content page at depth ≤ 2, so the
   * model would report full reachability even with zero content→content links.
   * If this ever fails, the model changed shape and the docs must be re-checked.
   */
  it('reaches every content page by hub enumeration ALONE, with all content→content edges deleted', () => {
    const model2 = registryNavModel();
    const hubOnly = new Map<string, Set<string>>();
    const contentPaths = new Set(
      PUBLISHED_CONTENT.map((i) => contentUrlPath(i)),
    );
    // Keep only edges that do NOT originate at a content page.
    for (const [from, tos] of model2) {
      if (contentPaths.has(from)) continue;
      hubOnly.set(from, tos);
    }
    const seen = new Set<string>(['/']);
    const queue = ['/'];
    while (queue.length) {
      const cur = queue.shift() as string;
      for (const next of hubOnly.get(cur) ?? []) {
        if (seen.has(next)) continue;
        seen.add(next);
        queue.push(next);
      }
    }
    const missed = [...contentPaths].filter((p) => !seen.has(p));
    expect(missed).toEqual([]);
  });
});

describe('Phase 4E — metadata, structured data, accessibility', () => {
  it('has no sitemap/metadata hygiene errors', () => {
    expect(metadataAudit().filter((i) => i.level === 'error')).toEqual([]);
  });

  it('emits valid structured data for every content page', () => {
    expect(structuredDataAudit().filter((i) => i.level === 'error')).toEqual(
      [],
    );
  });

  it('has no content-level accessibility errors', () => {
    expect(accessibilityAudit().filter((i) => i.level === 'error')).toEqual([]);
  });

  it('the aggregate SEO audit reports zero errors', () => {
    expect(seoAudit().errorCount).toBe(0);
  });
});

describe('Phase 4E — search benchmark', () => {
  it('covers a broad query set (>= 75 cases)', () => {
    expect(BENCHMARKS.length).toBeGreaterThanOrEqual(75);
  });

  it('achieves full top-1 and top-3 relevance with no false positives', () => {
    const s = benchmarkSummary();
    expect(s.top1Rate).toBe(1);
    expect(s.top3Rate).toBe(1);
    expect(s.falsePositives).toBe(0);
    expect(s.failures).toEqual([]);
  });

  it('never conflates distinct entities (unsafe-equivalence guards hold)', () => {
    const results = runBenchmark();
    const guards = results.filter((r) => r.kind === 'unsafe-equivalence');
    expect(guards.length).toBeGreaterThanOrEqual(4);
    expect(guards.every((r) => !r.unsafeEquivalence)).toBe(true);
    expect(benchmarkSummary().unsafeEquivalences).toBe(0);
  });

  it('spans multiple query kinds (synonym, typo, scientific, multiword)', () => {
    const kinds = new Set(BENCHMARKS.map((b) => b.kind));
    for (const k of ['synonym', 'typo', 'scientific', 'multiword', 'exact']) {
      expect(kinds.has(k as never)).toBe(true);
    }
  });
});

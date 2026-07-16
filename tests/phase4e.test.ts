import { describe, it, expect } from 'vitest';
import {
  seoAudit,
  crawlDepth,
  metadataAudit,
  structuredDataAudit,
  accessibilityAudit,
} from '@/lib/seo/audit';
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

describe('Phase 4E — crawl depth & discovery', () => {
  const crawl = crawlDepth();

  it('reaches every indexable page by internal navigation (no orphans)', () => {
    expect(crawl.unreachable).toEqual([]);
  });

  it('keeps the site shallow (max click-depth ≤ 4)', () => {
    expect(crawl.maxDepth).toBeLessThanOrEqual(4);
  });

  it('places the vast majority of pages within 2 clicks of home', () => {
    const shallow =
      (crawl.histogram[0] ?? 0) +
      (crawl.histogram[1] ?? 0) +
      (crawl.histogram[2] ?? 0);
    const total = [...crawl.depthByPath.values()].length;
    expect(shallow / total).toBeGreaterThan(0.85);
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

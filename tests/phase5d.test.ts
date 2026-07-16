import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  COMMODITIES,
  COMMODITY_GRADES,
  LOGISTICS_CONCEPTS,
  MARKET_TERMS,
  STANDARD_REFERENCES,
  SUPPLY_CHAIN_RISKS,
  TRADE_CONCEPTS,
} from '@/content';
import {
  contentUrlPath,
  getContentByType,
  resolveRef,
} from '@/lib/content/registry';
import { tradeIssues } from '@/lib/trade/validate-trade';
import { tradeChecksumValid, tradeSnapshot } from '@/lib/trade/snapshot';
import { semanticEdges, RELATION_TYPES } from '@/lib/content/relations';
import { sitemapPaths, sectionedRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';
import { CONTENT_TYPES, CONTENT_TYPE_ROUTE } from '@/lib/site';
import { SOURCES } from '@/data/sources';
import {
  FAOSTAT_TRADE_CONCORDANCE,
  FAOSTAT_TRADE_EXCLUSIONS,
} from '@/data/trade/faostat-concordance';
import {
  CARGO_FORMS,
  CHAIN_STAGES,
  INCOTERMS_SCOPE_NOTE,
  LOGISTICS_CLASSES,
  MARKET_TERM_CLASSES,
  NO_LIVE_PRICE_NOTE,
  RISK_NOT_SCORED_NOTE,
  STANDARD_CLASSES,
  STANDARD_DOMAINS,
  STANDARD_SCOPE_DISCLAIMER,
  SUPPLY_CHAIN_RISK_CLASSES,
  TRADE_CONCEPT_CLASSES,
  TRADE_SCOPE_DISCLAIMER,
} from '@/types/trade';

const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));
const FIVE = [
  'trade-concept',
  'logistics-concept',
  'standard-reference',
  'market-term',
  'supply-chain-risk',
] as const;

describe('Phase 5D — type wiring', () => {
  it('registers the five new types on their own routes', () => {
    const routes: Record<string, string> = {
      'trade-concept': 'trade',
      'logistics-concept': 'logistics',
      'standard-reference': 'standards',
      'market-term': 'market-terms',
      'supply-chain-risk': 'supply-chain-risks',
    };
    for (const t of FIVE) {
      expect(CONTENT_TYPES, t).toContain(t);
      expect(CONTENT_TYPE_ROUTE[t]).toBe(routes[t]);
    }
  });

  it('does NOT create a type per label from the brief (§2)', () => {
    // Transport modes are a logisticsClass; certification is a standardClass;
    // trade datasets reuse Phase 4A's DatasetRegistryEntry; trade profiles are
    // a panel on the commodity that already owns the subject.
    for (const t of [
      'transport-mode',
      'certification-concept',
      'trade-dataset',
      'commodity-trade-profile',
    ])
      expect(CONTENT_TYPES).not.toContain(t);

    const classes = new Set(LOGISTICS_CONCEPTS.map((l) => l.logisticsClass));
    expect(classes.has('transport-mode')).toBe(true);
    const stdClasses = new Set(STANDARD_REFERENCES.map((s) => s.standardClass));
    expect(stdClasses.has('certification-scheme')).toBe(true);
  });

  it('creates no /trade-data route (it would duplicate /datasets intent)', () => {
    const paths = sitemapPaths();
    for (const p of paths) expect(p.startsWith('/trade-data')).toBe(false);
  });

  it('has a substantive corpus in every new type', () => {
    expect(TRADE_CONCEPTS.length).toBeGreaterThanOrEqual(28);
    expect(LOGISTICS_CONCEPTS.length).toBeGreaterThanOrEqual(20);
    expect(STANDARD_REFERENCES.length).toBeGreaterThanOrEqual(20);
    expect(MARKET_TERMS.length).toBeGreaterThanOrEqual(20);
    expect(SUPPLY_CHAIN_RISKS.length).toBeGreaterThanOrEqual(15);
  });

  it('reports zero Phase 5D validation errors', () => {
    expect(tradeIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});

describe('Phase 5D — vocabulary and required fields', () => {
  it('uses only the controlled vocabularies', () => {
    for (const c of TRADE_CONCEPTS)
      expect(TRADE_CONCEPT_CLASSES, c.slug).toContain(c.tradeConceptClass);
    for (const l of LOGISTICS_CONCEPTS) {
      expect(LOGISTICS_CLASSES, l.slug).toContain(l.logisticsClass);
      for (const f of l.cargoForms ?? [])
        expect(CARGO_FORMS, l.slug).toContain(f);
    }
    for (const s of STANDARD_REFERENCES) {
      expect(STANDARD_CLASSES, s.slug).toContain(s.standardClass);
      expect(STANDARD_DOMAINS, s.slug).toContain(s.standardDomain);
    }
    for (const t of MARKET_TERMS)
      expect(MARKET_TERM_CLASSES, t.slug).toContain(t.marketTermClass);
    for (const r of SUPPLY_CHAIN_RISKS) {
      expect(SUPPLY_CHAIN_RISK_CLASSES, r.slug).toContain(r.riskClass);
      expect(r.chainStages.length, `${r.slug} stages`).toBeGreaterThan(0);
      for (const s of r.chainStages) expect(CHAIN_STAGES, r.slug).toContain(s);
    }
  });

  it('cites only registered sources and is substantive', () => {
    const all = [
      ...TRADE_CONCEPTS,
      ...LOGISTICS_CONCEPTS,
      ...STANDARD_REFERENCES,
      ...MARKET_TERMS,
      ...SUPPLY_CHAIN_RISKS,
    ];
    for (const p of all) {
      expect(p.sourceReferences.length, p.slug).toBeGreaterThanOrEqual(2);
      for (const r of p.sourceReferences)
        expect(SOURCE_IDS.has(r.sourceId), `${p.slug}: ${r.sourceId}`).toBe(
          true,
        );
      expect(p.limitations.length, p.slug).toBeGreaterThan(0);
      expect(p.sections.length, p.slug).toBeGreaterThanOrEqual(3);
      expect(p.editorialStatus, p.slug).toBe('published');
    }
  });
});

describe('Phase 5D — the boundaries this phase rests on', () => {
  it('says on every trade page that it is not advice', () => {
    for (const c of TRADE_CONCEPTS)
      expect(c.advisoryLimitations, c.slug).toContain(TRADE_SCOPE_DISCLAIMER);
  });

  it('carries the ICC trademark/copyright note on every delivery term', () => {
    const terms = TRADE_CONCEPTS.filter(
      (c) => c.tradeConceptClass === 'delivery-term',
    );
    expect(terms.length).toBeGreaterThan(0);
    for (const c of terms)
      expect(c.advisoryLimitations, c.slug).toContain(INCOTERMS_SCOPE_NOTE);
  });

  it('never reproduces or confers a standard', () => {
    for (const s of STANDARD_REFERENCES) {
      expect(s.reproductionLimitations, s.slug).toContain(
        STANDARD_SCOPE_DISCLAIMER,
      );
      expect(s.edition.trim().length, `${s.slug} edition`).toBeGreaterThan(0);
      expect(
        s.jurisdiction.trim().length,
        `${s.slug} jurisdiction`,
      ).toBeGreaterThan(0);
    }
  });

  it('publishes no price on any market term', () => {
    // The single most important rule of the type: a definition never needs a
    // number, and an illustrative one reads as a quotation.
    const PRICE_LIKE =
      /(?:[$€£¥]\s?\d|\d[\d,]*(?:\.\d+)?\s?(?:%|percent\b|usd\b|eur\b|cents?\b|per\s+(?:tonne|ton|bushel|kg|lb)|\/\s?(?:t|mt|kg|bu)\b))/i;
    for (const t of MARKET_TERMS) {
      expect(t.advisoryLimitations, t.slug).toContain(NO_LIVE_PRICE_NOTE);
      expect(
        t.notToBeConfusedWith.length,
        `${t.slug} confusions`,
      ).toBeGreaterThan(0);
      const text = JSON.stringify({ ...t, seo: undefined })
        .split(NO_LIVE_PRICE_NOTE)
        .join(' ');
      expect(
        PRICE_LIKE.test(text),
        `${t.slug} contains a price-like figure`,
      ).toBe(false);
    }
  });

  it('assigns no level or score to any supply-chain risk', () => {
    const SCORING =
      /\b(?:high|low|medium|moderate|severe|critical|minor|significant|negligible)[- ](?:risk|likelihood|probability|severity|impact)\b|\brisk score\b/i;
    for (const r of SUPPLY_CHAIN_RISKS) {
      expect(r.assessmentLimitations, r.slug).toContain(RISK_NOT_SCORED_NOTE);
      expect(
        r.observableIndicators.length,
        `${r.slug} indicators`,
      ).toBeGreaterThan(0);
      expect(
        r.riskMechanism.trim().length,
        `${r.slug} mechanism`,
      ).toBeGreaterThan(0);
      const text = JSON.stringify({ ...r, seo: undefined })
        .split(RISK_NOT_SCORED_NOTE)
        .join(' ');
      expect(SCORING.test(text), `${r.slug} assigns a level to the risk`).toBe(
        false,
      );
    }
  });

  it('keeps /standards and /commodity-grades from competing for one intent', () => {
    // A commodity-scoped grading standard is a commodity-grade. A standard
    // scoped to a domain across commodities is a standard-reference.
    const gradeSlugs = new Set(COMMODITY_GRADES.map((g) => g.slug));
    for (const s of STANDARD_REFERENCES) {
      expect(gradeSlugs.has(s.slug), `${s.slug} collides with a grade`).toBe(
        false,
      );
      if (s.standardDomain === 'quality-grading')
        expect(
          s.applicableCommodities?.length ?? 0,
          `${s.slug} is scoped to one commodity — that is a grade`,
        ).not.toBe(1);
    }
    // The USDA commodity grades stay where they belong.
    for (const g of COMMODITY_GRADES) expect(g.gradedCommodity).toBeDefined();
  });
});

describe('Phase 5D — FAOSTAT concordance', () => {
  it('accounts for every commodity exactly once', () => {
    const mapped = new Set(
      FAOSTAT_TRADE_CONCORDANCE.map((e) => e.commoditySlug),
    );
    const excluded = new Set(
      FAOSTAT_TRADE_EXCLUSIONS.map((e) => e.commoditySlug),
    );
    for (const c of COMMODITIES)
      expect(
        mapped.has(c.slug) || excluded.has(c.slug),
        `${c.slug} is neither mapped nor excluded — every commodity must be accounted for`,
      ).toBe(true);
    for (const s of [...mapped].filter((x) => excluded.has(x)))
      expect.fail(`${s} is both mapped and excluded`);
    const slugs = new Set(COMMODITIES.map((c) => c.slug));
    for (const s of [...mapped, ...excluded])
      expect(slugs.has(s), `${s} is not a commodity`).toBe(true);
    expect(mapped.size + excluded.size).toBe(COMMODITIES.length);
  });

  it('maps each FAOSTAT item to at most one commodity', () => {
    const codes = FAOSTAT_TRADE_CONCORDANCE.map((e) => e.faostatItemCode);
    expect(new Set(codes).size, 'two commodities claim the same item').toBe(
      codes.length,
    );
  });

  it('agrees with the FAOSTAT codes already on commodity pages', () => {
    // The concordance was derived independently; this asserts the two never
    // drift. A conflict means one of them mis-attributes a country's trade.
    const byCommodity = new Map(
      FAOSTAT_TRADE_CONCORDANCE.map((e) => [
        e.commoditySlug,
        e.faostatItemCode,
      ]),
    );
    for (const c of COMMODITIES) {
      const code = (c.commodityCodes ?? []).find((x) => x.system === 'FAOSTAT');
      const mapped = byCommodity.get(c.slug);
      if (!code || !mapped) continue;
      expect(mapped, `${c.slug}: concordance vs commodityCodes disagree`).toBe(
        code.code,
      );
    }
  });

  it('gives every exclusion a reason', () => {
    for (const e of FAOSTAT_TRADE_EXCLUSIONS) {
      expect(e.note.trim().length, `${e.commoditySlug}`).toBeGreaterThan(20);
      expect([
        'no-trade-item',
        'aggregate-item',
        'ambiguous-item',
        'split-item',
      ]).toContain(e.reason);
    }
  });
});

describe('Phase 5D — trade snapshot integrity', () => {
  const snap = JSON.parse(
    readFileSync(
      join(
        process.cwd(),
        'data/snapshots/faostat__trade-matrix__2025-12-18.json',
      ),
      'utf8',
    ),
  );

  it('is a versioned, attributed, immutable snapshot', () => {
    expect(snap.datasetVersion).toBe('2025-12-18');
    expect(snap.license).toBe('CC BY 4.0');
    expect(snap.attribution).toMatch(/FAO/);
    expect(snap.retrievedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(snap.transformationVersion).toBeDefined();
    expect(snap.checksum).toMatch(/^[a-f0-9]{64}$/);
    expect(snap.limitations.length).toBeGreaterThanOrEqual(5);
  });

  it('has a checksum that actually verifies', () => {
    // A checksum nobody can reproduce is decoration. The basis is stated on the
    // snapshot itself (`checksumBasis`) and recomputed here from the file.
    expect(snap.checksumBasis).toMatch(/sha256/i);
    expect(tradeChecksumValid(tradeSnapshot()!), 'snapshot checksum').toBe(
      true,
    );
  });

  it('excludes FAOSTAT reporter aggregates', () => {
    // FAOSTAT ships "World" and continental groupings AS REPORTERS. Including
    // them would rank "World" as the top exporter of everything.
    const banned =
      /^(World|Africa|Americas|Asia|Europe|Oceania|.*ern (Africa|Asia|Europe|America))$/i;
    for (const c of snap.commodities)
      for (const e of [...c.topExporters, ...c.topImporters])
        expect(
          banned.test(e.reporter),
          `${c.commoditySlug}: ${e.reporter}`,
        ).toBe(false);
  });

  it('only carries commodities that exist and are in the concordance', () => {
    const mapped = new Map(
      FAOSTAT_TRADE_CONCORDANCE.map((e) => [
        e.commoditySlug,
        e.faostatItemCode,
      ]),
    );
    const slugs = new Set(COMMODITIES.map((c) => c.slug));
    for (const c of snap.commodities) {
      expect(slugs.has(c.commoditySlug), c.commoditySlug).toBe(true);
      expect(mapped.get(c.commoditySlug), `${c.commoditySlug} item code`).toBe(
        c.faostatItemCode,
      );
    }
  });

  it('records non-reporting rather than hiding it', () => {
    // The case this exists for: the Russian Federation reported wheat exports
    // in 2021 (rank #1) but not 2022, so a 2022 ranking omits the largest
    // exporter in the world. "Absent" is not "zero", and reporter counts do not
    // reveal it — coverage stayed ~155 either way.
    const wheat = snap.commodities.find(
      (c: { commoditySlug: string }) => c.commoditySlug === 'wheat-grain',
    );
    expect(wheat, 'wheat-grain must be in the snapshot').toBeDefined();
    const russia = wheat.notableNonReporters.find((n: { reporter: string }) =>
      /Russia/.test(n.reporter),
    );
    expect(
      russia,
      'wheat-grain must disclose that the Russian Federation did not report in the reference year',
    ).toBeDefined();
    expect(russia.rankInLastReportedYear).toBe(1);
    expect(russia.lastReportedYear).toBe(2021);
  });

  it('keeps every figure sane and typed', () => {
    for (const c of snap.commodities) {
      expect(c.referenceYear).toBe(2022);
      expect(c.topExporters.length).toBeLessThanOrEqual(12);
      for (const e of [...c.topExporters, ...c.topImporters]) {
        expect(
          e.quantityT,
          `${c.commoditySlug}/${e.reporter}`,
        ).toBeGreaterThanOrEqual(0);
        expect(Number.isFinite(e.quantityT)).toBe(true);
        // valueKUsd may be null — not reported is not zero.
        if (e.valueKUsd !== null) expect(e.valueKUsd).toBeGreaterThanOrEqual(0);
      }
      // Exporters must be ordered, or "top exporters" is a false claim.
      const q = c.topExporters.map((e: { quantityT: number }) => e.quantityT);
      expect([...q].sort((a: number, b: number) => b - a)).toEqual(q);
    }
  });

  it('computes the mirror gap correctly from the world totals', () => {
    // A mirror gap is a property of reported trade, not an error in it, so
    // there is no defensible threshold to assert. The median here is ~16%, but
    // sugarcane reaches 625% — and that is real: sugarcane is crushed at origin
    // and barely traded, so a handful of thin reports swing the ratio. What CAN
    // be asserted is that the figure is derived from the totals it claims to
    // compare, which is what would break if the pipeline summed the wrong rows.
    const withGap = snap.commodities.filter(
      (c: { mirrorGapPct: number | null }) => c.mirrorGapPct !== null,
    );
    expect(withGap.length).toBeGreaterThan(30);
    for (const c of withGap) {
      const e = c.world.exportQuantityT;
      const i = c.world.importQuantityT;
      expect(e, `${c.commoditySlug} world exports`).toBeTruthy();
      expect(i, `${c.commoditySlug} world imports`).toBeTruthy();
      expect(c.mirrorGapPct, `${c.commoditySlug} mirror gap`).toBe(
        Math.round(((i - e) / e) * 1000) / 10,
      );
    }
  });

  it('lets a reader see when a gap rests on very few reporters', () => {
    // The largest gaps are thin-reporting artefacts: brown rice has 6 reporting
    // exporters against 7 importers, and Japan alone imports more than every
    // reported exporter combined. Reporter counts are what let a reader tell
    // "the world disagrees" from "almost nobody reported", so they must travel
    // with the figures rather than be dropped.
    for (const c of snap.commodities) {
      expect(typeof c.exportReporterCount, c.commoditySlug).toBe('number');
      expect(typeof c.importReporterCount, c.commoditySlug).toBe('number');
    }
    const brownRice = snap.commodities.find(
      (c: { commoditySlug: string }) => c.commoditySlug === 'brown-rice',
    );
    expect(brownRice.exportReporterCount).toBeLessThan(20);
  });
});

describe('Phase 5D — graph, routes, discovery', () => {
  it('derives only known relation types', () => {
    const all = [
      ...TRADE_CONCEPTS,
      ...LOGISTICS_CONCEPTS,
      ...STANDARD_REFERENCES,
      ...MARKET_TERMS,
      ...SUPPLY_CHAIN_RISKS,
    ];
    for (const x of all)
      for (const e of semanticEdges(x))
        expect(RELATION_TYPES.has(e.relation), `${x.slug}: ${e.relation}`).toBe(
          true,
        );
  });

  it('resolves every typed cross-reference', () => {
    const all = [
      ...TRADE_CONCEPTS,
      ...LOGISTICS_CONCEPTS,
      ...STANDARD_REFERENCES,
      ...MARKET_TERMS,
      ...SUPPLY_CHAIN_RISKS,
    ];
    for (const x of all)
      for (const e of semanticEdges(x))
        expect(
          resolveRef(e.to),
          `${x.slug} → ${e.to.type}:${e.to.slug}`,
        ).toBeDefined();
  });

  it('routes every page into the sitemap and the trade shard', () => {
    const paths = sitemapPaths();
    for (const hub of [
      '/trade',
      '/logistics',
      '/standards',
      '/market-terms',
      '/supply-chain-risks',
    ])
      expect(paths.has(hub), hub).toBe(true);

    const shard = sectionedRoutes()['trade'];
    const inShard = new Set(shard.map((r) => r.path));
    const all = [
      ...TRADE_CONCEPTS,
      ...LOGISTICS_CONCEPTS,
      ...STANDARD_REFERENCES,
      ...MARKET_TERMS,
      ...SUPPLY_CHAIN_RISKS,
    ];
    for (const x of all) {
      expect(paths.has(contentUrlPath(x)), x.slug).toBe(true);
      expect(
        inShard.has(contentUrlPath(x)),
        `${x.slug} not in trade shard`,
      ).toBe(true);
    }
  });

  it('puts no path in two sitemap shards', () => {
    const sections = sectionedRoutes();
    const seen = new Map<string, string>();
    for (const [name, routes] of Object.entries(sections))
      for (const r of routes) {
        const prev = seen.get(r.path);
        expect(prev, `${r.path} in both ${prev} and ${name}`).toBeUndefined();
        seen.set(r.path, name);
      }
  });

  it('indexes every new type for search', () => {
    const docs = buildSearchDocuments();
    for (const t of FIVE)
      expect(docs.filter((d) => d.type === t).length, t).toBe(
        getContentByType(t as never).length,
      );
  });
});

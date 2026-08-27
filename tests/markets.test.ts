import { describe, expect, it } from 'vitest';
import {
  allMarketSeries,
  commoditiesWithMarketData,
  countriesWithMarketData,
  seriesForCommodity,
  seriesFor,
  seriesByDataset,
  rankedByLatest,
  latestObservation,
  commodityMarketPath,
  observationCount,
  MARKETS_HUB_PATH,
} from '@/lib/markets/registry';
import {
  marketSnapshots,
  FAOSTAT_PRODUCTION_DATASET_ID,
  USDA_PSD_DATASET_ID,
} from '@/lib/markets/snapshot';
import {
  MARKET_METRICS,
  METRIC_DIMENSION,
  OBSERVATION_STATUSES,
  CURRENCY_BASES,
  MONETARY_METRICS,
} from '@/types/market';
import { getDataset } from '@/lib/data-ops/registry';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const SERIES = allMarketSeries();
const DOCS = buildSearchDocuments();
const COMMODITIES = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').map(
    (c) => c.slug,
  ),
);

describe('markets — a figure carries what it is a figure of', () => {
  it('gives every observation a status from the vocabulary', () => {
    expect(SERIES.length).toBeGreaterThan(0);
    for (const s of SERIES) {
      for (const o of s.observations) {
        expect(OBSERVATION_STATUSES, o.id).toContain(o.observationStatus);
      }
    }
  });

  it('records no forecast, because no source flags one', () => {
    // USDA marketing years after 2024 are projections and were withheld rather
    // than ingested unflagged. If this ever fails, a source started publishing
    // forecasts and the withholding rule needs revisiting deliberately.
    const forecasts = SERIES.flatMap((s) =>
      s.observations.filter((o) => o.observationStatus === 'forecast'),
    );
    expect(forecasts).toHaveLength(0);
  });

  it('keeps one unit per series and never converts it', () => {
    for (const s of SERIES) {
      const units = new Set(s.observations.map((o) => o.unit));
      expect(units.size, s.id).toBe(1);
      expect([...units][0], s.id).toBe(s.unit);
    }
  });

  it('publishes cotton in bales and never as a mass in tonnes', () => {
    // The conversion this layer refuses to make: 1000 480 lb. bales is not
    // 1000 MT, and a silent conversion is indistinguishable from a 4x error.
    const cotton = seriesForCommodity('cotton-lint').filter(
      (s) => s.sourceDatasetId === USDA_PSD_DATASET_ID,
    );
    expect(cotton.length).toBeGreaterThan(0);
    for (const s of cotton) expect(s.unit, s.id).toMatch(/bales/i);
  });
});

describe('markets — periods are not interchangeable', () => {
  it('labels FAOSTAT calendar years and USDA marketing years distinctly', () => {
    const fao = marketSnapshots().get(FAOSTAT_PRODUCTION_DATASET_ID)!;
    const psd = marketSnapshots().get(USDA_PSD_DATASET_ID)!;
    expect(fao.periodBasis).toBe('calendar-year');
    expect(psd.periodBasis).toBe('marketing-year');
    for (const s of SERIES) {
      const expected =
        s.sourceDatasetId === USDA_PSD_DATASET_ID
          ? 'marketing-year'
          : 'calendar-year';
      expect(s.basis, s.id).toBe(expected);
      for (const o of s.observations)
        expect(o.period.basis, o.id).toBe(expected);
    }
  });

  it('orders every series ascending with no repeated period', () => {
    for (const s of SERIES) {
      const years = s.observations.map((o) => o.period.year);
      expect(new Set(years).size, s.id).toBe(years.length);
      expect(
        [...years].sort((a, b) => a - b),
        s.id,
      ).toEqual(years);
    }
  });

  it('never merges two datasets into one series', () => {
    const groups = seriesByDataset(SERIES);
    expect(groups.size).toBe(4);
    for (const [datasetId, group] of groups) {
      for (const s of group) expect(s.sourceDatasetId).toBe(datasetId);
    }
  });

  it('lets no two datasets publish one fact on the same period basis', () => {
    // The period basis is part of the fact. USDA reports trade on a marketing
    // year and FAOSTAT on a calendar year — different windows, not two answers
    // to one question. Two sources on the SAME basis would be a real conflict.
    const seen = new Map<string, string>();
    for (const s of SERIES) {
      const key = `${s.metric}|${s.commodityRef}|${s.countryCode}|${s.basis}`;
      const prior = seen.get(key);
      expect(prior === undefined || prior === s.sourceDatasetId, key).toBe(
        true,
      );
      seen.set(key, s.sourceDatasetId);
    }
  });

  it('traces every series to a real dataset and commodity', () => {
    for (const s of SERIES) {
      expect(getDataset(s.sourceDatasetId), s.id).toBeDefined();
      expect(COMMODITIES.has(s.commodityRef), s.id).toBe(true);
      expect(s.sourceSnapshotId, s.id).toBeTruthy();
      expect(s.retrievedAt, s.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('publishes no series shorter than the declared depth rule', () => {
    // One isolated figure is not a series and must never reach a page.
    for (const s of SERIES) {
      expect(s.observations.length, s.id).toBeGreaterThanOrEqual(10);
    }
  });

  it('uses a unit that can express what the metric measures', () => {
    for (const s of SERIES) {
      const dimension = METRIC_DIMENSION[s.metric];
      if (dimension === 'area') expect(s.unit, s.id).toMatch(/ha|acre/i);
      if (dimension === 'mass-per-area') expect(s.unit, s.id).toMatch(/\//);
      expect(MARKET_METRICS, s.id).toContain(s.metric);
    }
  });
});

describe('markets — routes and search', () => {
  it('publishes one route per commodity and none per country pair', () => {
    // A commodity-by-country route would be 2,480 pages of one table each.
    const paths = allRoutes().map((r) => r.path);
    expect(paths).toContain(MARKETS_HUB_PATH);
    const marketPaths = paths.filter((p) =>
      p.startsWith(`${MARKETS_HUB_PATH}/`),
    );
    expect(marketPaths).toHaveLength(commoditiesWithMarketData().length);
    for (const p of marketPaths) expect(p.split('/')).toHaveLength(3);
  });

  it('indexes one document per market page plus a hub', () => {
    const docs = DOCS.filter((d) => d.type === 'market-data');
    expect(docs).toHaveLength(commoditiesWithMarketData().length + 1);
    expect(docs.some((d) => d.route === MARKETS_HUB_PATH)).toBe(true);
  });

  it('keeps bare commodity names off market-document name weight', () => {
    // Regression guard: a market document must never take "wheat" from the
    // crop page. Names are metric phrases, so the bare title never appears.
    const wheat = DOCS.find((d) => d.id === 'market:wheat-grain')!;
    expect(wheat.names).not.toContain('Wheat Grain');
    expect(wheat.names.every((n) => /\s/.test(n))).toBe(true);
  });
});

describe('markets — query layer', () => {
  it('ranks producers only within one dataset and unit', () => {
    const ranked = rankedByLatest(
      'wheat-grain',
      'productionQuantity',
      FAOSTAT_PRODUCTION_DATASET_ID,
    );
    expect(ranked.length).toBeGreaterThan(5);
    const units = new Set(ranked.map((r) => r.observation.unit));
    expect(units.size).toBe(1);
    const years = new Set(ranked.map((r) => r.observation.period.year));
    expect(years.size, 'a ranking must compare one shared period').toBe(1);
    const values = ranked.map((r) => r.observation.value);
    expect([...values].sort((a, b) => b - a)).toEqual(values);
  });

  it('returns nothing for a commodity with no series', () => {
    expect(seriesForCommodity('not-a-commodity')).toEqual([]);
    expect(commoditiesWithMarketData()).not.toContain('not-a-commodity');
  });

  it('exposes coverage consistent with the snapshots', () => {
    const declared = [...marketSnapshots().values()].reduce(
      (n, s) => n + s.observationCount,
      0,
    );
    expect(observationCount()).toBe(declared);
    expect(countriesWithMarketData().length).toBeGreaterThan(30);
    expect(seriesFor('wheat-grain', 'USA').length).toBeGreaterThan(0);
    expect(
      latestObservation(seriesFor('wheat-grain', 'USA')[0]!),
    ).toBeDefined();
    expect(commodityMarketPath('wheat-grain')).toBe(
      '/agricultural-markets/wheat-grain',
    );
  });
});

describe('markets — price and trade depth (Wave 17)', () => {
  it('names a currency and a basis on every price series, and none elsewhere', () => {
    const prices = SERIES.filter(
      (s) => METRIC_DIMENSION[s.metric] === 'currency-per-mass',
    );
    expect(prices.length).toBeGreaterThan(1000);
    for (const s of prices) {
      expect(s.currency, s.id).toBeTruthy();
      expect(CURRENCY_BASES, s.id).toContain(s.currencyBasis!);
    }
    for (const s of SERIES) {
      if (MONETARY_METRICS.includes(s.metric)) continue;
      expect(s.currency, s.id).toBeUndefined();
    }
  });

  it('never lets an index carry a currency', () => {
    // A price index is not money. Giving it a currency turns an index number
    // into an apparent price.
    const idx = SERIES.filter((s) => s.metric === 'indexValue');
    expect(idx.length).toBeGreaterThan(500);
    for (const s of idx) {
      expect(s.currency, s.id).toBeUndefined();
      expect(s.unit, s.id).toMatch(/index/i);
    }
  });

  it('keeps local-currency and US dollar prices as separate series', () => {
    // FAOSTAT publishes both. Neither is derived from the other here, and the
    // two must never be merged into one series with two units.
    const lcu = SERIES.filter((s) => s.currency === 'LCU');
    const usd = SERIES.filter(
      (s) => s.currency === 'USD' && s.metric === 'producerPrice',
    );
    expect(lcu.length).toBeGreaterThan(500);
    expect(usd.length).toBeGreaterThan(500);
    const ids = new Set(SERIES.map((s) => s.id));
    expect(ids.size).toBe(SERIES.length);
    for (const s of lcu) expect(s.unit).toBe('LCU/tonne');
    for (const s of usd) expect(s.unit).toBe('USD/tonne');
  });

  it('keeps trade value and trade quantity in different dimensions', () => {
    const qty = SERIES.filter((s) =>
      ['exportsQuantity', 'importsQuantity'].includes(s.metric),
    );
    const val = SERIES.filter((s) =>
      ['exportsValue', 'importsValue'].includes(s.metric),
    );
    expect(qty.length).toBeGreaterThan(1000);
    expect(val.length).toBeGreaterThan(1000);
    // Units are per SOURCE: FAOSTAT reports tonnes, USDA thousand tonnes and
    // cotton in bales. Asserting one unit across sources would be the very
    // conflation these tests exist to prevent.
    for (const s of qty) {
      expect(METRIC_DIMENSION[s.metric], s.id).toBe('mass');
      expect(s.unit, s.id).toMatch(/^(t|1000 MT|1000 480 lb\. Bales)$/);
      if (s.sourceDatasetId === 'faostat-trade-cl') expect(s.unit).toBe('t');
    }
    for (const s of val) {
      expect(METRIC_DIMENSION[s.metric], s.id).toBe('currency');
      expect(s.unit, s.id).toBe('1000 USD');
    }
  });

  it('lets two sources cover one fact only on different period bases', () => {
    const byFact = new Map<string, Set<string>>();
    const bases = new Map<string, Set<string>>();
    for (const s of SERIES) {
      const k = `${s.metric}|${s.commodityRef}|${s.countryCode}`;
      byFact.set(k, (byFact.get(k) ?? new Set()).add(s.sourceDatasetId));
      bases.set(k, (bases.get(k) ?? new Set()).add(s.basis));
    }
    let overlapping = 0;
    for (const [k, datasets] of byFact) {
      if (datasets.size < 2) continue;
      overlapping += 1;
      // USDA reports trade on a marketing year, FAOSTAT on a calendar year.
      expect(bases.get(k)!.size, k).toBeGreaterThan(1);
    }
    expect(overlapping).toBeGreaterThan(0);
  });

  it('publishes no forecast in any of the four datasets', () => {
    const forecasts = SERIES.flatMap((s) =>
      s.observations.filter((o) => o.observationStatus === 'forecast'),
    );
    expect(forecasts).toHaveLength(0);
    expect(marketSnapshots().size).toBe(4);
  });
});

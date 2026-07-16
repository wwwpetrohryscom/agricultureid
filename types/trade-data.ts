/**
 * Phase 5D — types for the immutable FAOSTAT Detailed Trade Matrix snapshot
 * (`data/snapshots/faostat__trade-matrix__<version>.json`).
 *
 * These types mirror the snapshot file exactly. They describe REPORTED trade —
 * what reporting countries declared to FAO — not what physically moved, and not
 * a current or authoritative measure of a market. Nothing here is interpolated,
 * gap-filled, or estimated by AgricultureID: a reporter absent from a year is
 * absent, which is a different claim from a reporter that reported zero.
 */

/** FAOSTAT observation flag codes (see `TradeSnapshot.flagMeanings`). */
export type TradeFlagCode = 'A' | 'E' | 'I' | 'X';

/**
 * How many of the underlying bilateral rows carried each flag. A code is absent
 * when no row carried it — absent means "no rows", never "zero".
 */
export type TradeFlagCounts = Partial<Record<TradeFlagCode, number>>;

/** One reporter's total for a commodity/flow, summed over all its partners. */
export interface TradeReporterTotal {
  reporter: string;
  /** UN M49 area code, zero-padded (e.g. "036"). */
  m49: string;
  quantityT: number;
  valueKUsd: number;
  flags: TradeFlagCounts;
}

/**
 * World totals recomputed by summing real reporters — NOT read from FAOSTAT's
 * own "World" row (see `TradeSnapshot.aggregateRule`).
 */
export interface TradeWorldTotals {
  exportQuantityT: number;
  importQuantityT: number;
  exportValueKUsd: number;
  importValueKUsd: number;
}

/**
 * A reporter that reported this commodity in an earlier covered year but NOT in
 * the reference year, and so is missing from the reference-year ranking. This is
 * the disclosure that keeps a ranking honest: the Russian Federation reported
 * wheat exports in 2021 at rank 1 but did not report in 2022.
 */
export interface TradeNonReporter {
  reporter: string;
  lastReportedYear: number;
  lastReportedExportQuantityT: number;
  rankInLastReportedYear: number;
}

/** One commodity's reported-trade profile for the snapshot's reference year. */
export interface CommodityTradeProfile {
  /** AgricultureID commodity slug this FAOSTAT item is mapped to. */
  commoditySlug: string;
  faostatItemCode: string;
  faostatItemName: string;
  /** UN CPC code for the FAOSTAT item. */
  cpcCode: string;
  referenceYear: number;
  /** Number of reporters that declared this flow in the reference year. */
  exportReporterCount: number;
  importReporterCount: number;
  /** Up to 12 reporters, descending by `quantityT`. */
  topExporters: TradeReporterTotal[];
  topImporters: TradeReporterTotal[];
  world: TradeWorldTotals;
  /**
   * (world imports − world exports) / exports × 100. The size of the
   * reported-imports vs reported-exports disagreement; a property of the data,
   * not an error in it. Null when it cannot be computed.
   */
  mirrorGapPct: number | null;
  notableNonReporters: TradeNonReporter[];
}

/** Units the snapshot's figures are expressed in. */
export interface TradeSnapshotUnits {
  /** Quantity unit, e.g. "t". */
  quantity: string;
  /** Value unit, e.g. "1000 USD" — nominal, as reported, never deflated. */
  value: string;
}

/** The whole immutable snapshot file. */
export interface TradeSnapshot {
  snapshotId: string;
  source: string;
  sourceUrl: string;
  /** Bulk file the snapshot was streamed from. */
  bulkUrl: string;
  datasetVersion: string;
  retrievedAt: string;
  license: string;
  licenseUrl: string;
  /** Attribution string required by the licence whenever figures are shown. */
  attribution: string;
  referenceYear: number;
  /** [minYear, maxYear] scanned for non-reporter detection. */
  coveredYears: number[];
  transformationVersion: string;
  units: TradeSnapshotUnits;
  /** FAOSTAT element code → label, e.g. "5910" → "Export quantity (t)". */
  elementCodes: Record<string, string>;
  flagMeanings: Record<TradeFlagCode, string>;
  /** Which reporter/partner codes were excluded as FAOSTAT aggregates. */
  aggregateRule: string;
  /** What was done to the bilateral rows to produce reporter totals. */
  transformation: string;
  commodityCount: number;
  observationCount: number;
  commodities: CommodityTradeProfile[];
  limitations: string[];
  /** How `checksum` is computed, so a reader can reproduce it. */
  checksumBasis: string;
  /** sha256 over this file minus the checksum key — see `checksumBasis`. */
  checksum: string;
}

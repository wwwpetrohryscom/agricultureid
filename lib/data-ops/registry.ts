import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { INDICATORS } from '@/data/geo/indicators';
import { allSnapshots, getSnapshot, COUNTRY_META } from '@/lib/geo/snapshots';
import { tradeSnapshot, tradeSnapshotFiles } from '@/lib/trade/snapshot';
import {
  marketSnapshots,
  marketSnapshotFiles,
  FAOSTAT_PRODUCTION_DATASET_ID,
  USDA_PSD_DATASET_ID,
} from '@/lib/markets/snapshot';
import type { DatasetRegistryEntry } from '@/types/data-ops';

/**
 * Central dataset registry (Phase 4A). Built deterministically from the existing
 * indicator registry + immutable snapshots + hand-authored provider metadata.
 * No snapshot data is duplicated here — only described. Supports multiple
 * providers: the World Bank indicator snapshots, and (Phase 5D) the FAOSTAT
 * Detailed Trade Matrix, which is NOT an indicator series and carries its own
 * schema, units, and revision policy.
 */

const SNAP_DIR = join(process.cwd(), 'data', 'snapshots');

/** Registry id (and /datasets/[dataset] slug) of the FAOSTAT trade dataset. */
export const FAOSTAT_TRADE_DATASET_ID = 'faostat-trade-matrix';

/** Provider-level metadata not derivable from a snapshot file. */
const WORLD_BANK = {
  provider: 'World Bank',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  accessRequirements: ['open', 'attribution-required'] as const,
  updateFrequency: 'periodic' as const,
  revisionPolicy:
    'The World Bank periodically revises historical values as national sources update. A changed dataset version is stored as a NEW immutable snapshot; prior snapshots are never overwritten.',
  missingValueRule:
    'Missing country-years are omitted from the snapshot rows (never zero-filled or interpolated).',
};

/** All snapshot filenames for an indicator id (across versions). */
function snapshotFilesFor(indicatorId: string): string[] {
  try {
    const prefix = `worldbank__${indicatorId}__`;
    return readdirSync(SNAP_DIR)
      .filter((f) => f.startsWith(prefix) && f.endsWith('.json'))
      .sort();
  } catch {
    return [];
  }
}

export function buildDatasetRegistry(): DatasetRegistryEntry[] {
  const out: DatasetRegistryEntry[] = [];

  for (const ind of INDICATORS) {
    const snap = getSnapshot(ind.id);
    if (!snap) continue;
    const files = snapshotFilesFor(ind.id);
    out.push({
      datasetId: `worldbank-${ind.id.toLowerCase().replace(/\./g, '-')}`,
      provider: WORLD_BANK.provider,
      title: `${ind.name} (World Bank WDI)`,
      description: ind.description,
      sourceUrl: snap.sourceUrl,
      license: WORLD_BANK.license,
      licenseUrl: WORLD_BANK.licenseUrl,
      accessRequirements: [...WORLD_BANK.accessRequirements],
      jurisdiction: 'Global',
      geographicCoverage: `${snap.jurisdictionCount} jurisdictions`,
      temporalCoverage:
        snap.coveredYears.length === 2
          ? [snap.coveredYears[0]!, snap.coveredYears[1]!]
          : undefined,
      updateFrequency: WORLD_BANK.updateFrequency,
      latestAvailableRelease: snap.datasetVersion,
      retrievalDate: snap.retrievedAt,
      snapshotIds: files.length
        ? files.map((f) => f.replace(/\.json$/, ''))
        : [snap.snapshotId],
      schemaVersion: '1',
      transformationVersion: snap.transformationVersion,
      checksum: snap.checksum,
      expectedColumns: ['iso3', 'year', 'value'],
      expectedUnit: ind.unit,
      missingValueRule: WORLD_BANK.missingValueRule,
      revisionPolicy: WORLD_BANK.revisionPolicy,
      knownLimitations: [
        snap.limitations,
        ind.estimateFlag
          ? 'This indicator is a modeled estimate, not an observed count.'
          : '',
      ].filter(Boolean),
      publicationStatus: 'published',
    });
  }

  // Country-metadata dataset.
  out.push({
    datasetId: 'worldbank-country-metadata',
    provider: WORLD_BANK.provider,
    title: 'World Bank country metadata',
    description:
      'Country codes, region, income level, capital, and coordinates used to resolve and group agricultural statistics.',
    sourceUrl: 'https://api.worldbank.org/v2/country',
    license: WORLD_BANK.license,
    licenseUrl: WORLD_BANK.licenseUrl,
    accessRequirements: [...WORLD_BANK.accessRequirements],
    jurisdiction: 'Global',
    geographicCoverage: `${COUNTRY_META.length} countries (aggregate regions excluded)`,
    updateFrequency: 'irregular',
    retrievalDate: '2026-07-12',
    snapshotIds: ['worldbank__countries'],
    schemaVersion: '1',
    transformationVersion: '1',
    checksum: 'see snapshot file',
    expectedColumns: ['iso3', 'iso2', 'name', 'region', 'incomeLevel'],
    expectedUnit: 'n/a',
    missingValueRule:
      'Aggregate regions are excluded; region names normalized (trimmed).',
    revisionPolicy: WORLD_BANK.revisionPolicy,
    knownLimitations: [
      'Region and income classifications are World Bank administrative groupings, revised occasionally.',
    ],
    publicationStatus: 'published',
  });

  // FAOSTAT Detailed Trade Matrix (Phase 5D). Not an indicator series: its rows
  // are reporter totals per commodity, so it declares its own columns, units,
  // and rules. All metadata below is read from the snapshot, never restated.
  const trade = tradeSnapshot();
  if (trade) {
    const files = tradeSnapshotFiles();
    out.push({
      datasetId: FAOSTAT_TRADE_DATASET_ID,
      provider: 'FAO',
      title: 'FAOSTAT Detailed Trade Matrix — reporter totals',
      description: `Bilateral trade rows from the FAOSTAT Detailed Trade Matrix summed over partners to reporter totals, for ${trade.commodityCount} commodities in reference year ${trade.referenceYear}. Reported trade only: what reporting countries declared, not what physically moved.`,
      sourceUrl: trade.sourceUrl,
      license: trade.license,
      licenseUrl: trade.licenseUrl,
      accessRequirements: ['open', 'attribution-required'],
      jurisdiction: 'Global',
      geographicCoverage: `${trade.commodityCount} commodities across FAOSTAT reporting countries; ${trade.observationCount.toLocaleString('en')} observations. ${trade.aggregateRule}`,
      temporalCoverage:
        trade.coveredYears.length === 2
          ? [trade.coveredYears[0]!, trade.coveredYears[1]!]
          : undefined,
      updateFrequency: 'annual',
      latestAvailableRelease: trade.datasetVersion,
      retrievalDate: trade.retrievedAt,
      snapshotIds: files.length
        ? files.map((f) => f.replace(/\.json$/, ''))
        : [trade.snapshotId],
      schemaVersion: '1',
      transformationVersion: trade.transformationVersion,
      checksum: trade.checksum,
      expectedColumns: [
        'commoditySlug',
        'faostatItemCode',
        'referenceYear',
        'reporter',
        'm49',
        'quantityT',
        'valueKUsd',
        'flags',
      ],
      expectedUnit: `quantity: ${trade.units.quantity}; value: ${trade.units.value}`,
      missingValueRule: `${trade.transformation} A reporter absent from a reference year is not a reporter with zero trade; absences that change a ranking are recorded in each commodity's notableNonReporters.`,
      revisionPolicy:
        'Historical values are revised by FAO; this snapshot is one dated version and is never overwritten in place. A changed dataset version is stored as a NEW immutable snapshot.',
      knownLimitations: [...trade.limitations],
      publicationStatus: 'published',
    });
  }

  // Market time series (Wave 11). Series-shaped, not indicator-shaped: each
  // file declares its own metrics, units, period basis and status rule, so all
  // metadata below is read from the snapshot rather than restated here.
  const MARKET_TITLES: Record<string, { title: string; description: string }> =
    {
      [FAOSTAT_PRODUCTION_DATASET_ID]: {
        title: 'FAOSTAT production, area and yield',
        description:
          'National production, area harvested and yield for agricultural commodities, read from the FAOSTAT Crops and livestock products domain. Yield is taken as FAOSTAT publishes it and is never recomputed from production over area.',
      },
      [USDA_PSD_DATASET_ID]: {
        title: 'USDA PSD supply and use',
        description:
          'Marketing-year stocks, domestic use, feed use and trade quantities from the USDA Foreign Agricultural Service Production, Supply and Distribution database. Production, area and yield are deliberately not ingested, so PSD never contradicts FAOSTAT on the same figure.',
      },
    };
  for (const [datasetId, snap] of marketSnapshots()) {
    const meta = MARKET_TITLES[datasetId];
    if (!meta) continue;
    const files = marketSnapshotFiles(datasetId);
    out.push({
      datasetId,
      provider: datasetId === USDA_PSD_DATASET_ID ? 'USDA' : 'FAO',
      title: meta.title,
      description: meta.description,
      sourceUrl: snap.sourceUrl,
      license: snap.license,
      licenseUrl: snap.licenseUrl,
      accessRequirements: ['open', 'attribution-required'],
      jurisdiction: 'Global',
      geographicCoverage: `${new Set(snap.series.map((s) => s.iso3)).size} countries; ${snap.seriesCount.toLocaleString('en')} series; ${snap.observationCount.toLocaleString('en')} observations. ${snap.geographyRule}`,
      temporalCoverage: [snap.coveredYears[0], snap.coveredYears[1]],
      // PSD is revised monthly; the shared vocabulary's nearest token is
      // 'periodic', and the monthly cadence is stated in the revision policy.
      updateFrequency:
        datasetId === USDA_PSD_DATASET_ID ? 'periodic' : 'annual',
      latestAvailableRelease: snap.datasetVersion,
      retrievalDate: snap.retrievedAt,
      snapshotIds: files.length
        ? files.map((f) => f.replace(/\.json$/, ''))
        : [snap.snapshotId],
      schemaVersion: '1',
      transformationVersion: snap.transformationVersion,
      checksum: snap.checksum,
      expectedColumns: [
        'iso3',
        'commoditySlug',
        'metric',
        'unit',
        'years',
        'values',
        'statuses',
      ],
      expectedUnit: Object.entries(snap.metrics)
        .map(([m, u]) => `${m}: ${u}`)
        .join('; '),
      missingValueRule: `${snap.seriesRule} ${snap.commodityRule}`,
      revisionPolicy: `${snap.statusRule} A changed release is stored as a NEW immutable snapshot; prior releases are never overwritten.`,
      knownLimitations: [
        ...snap.limitations,
        ...(snap.withheldRule ? [snap.withheldRule] : []),
        ...(snap.metricRule ? [snap.metricRule] : []),
      ],
      publicationStatus: 'published',
    });
  }

  return out.sort((a, b) => a.datasetId.localeCompare(b.datasetId));
}

export const DATASETS: DatasetRegistryEntry[] = buildDatasetRegistry();

export function getDataset(id: string): DatasetRegistryEntry | undefined {
  return DATASETS.find((d) => d.datasetId === id);
}

/** Latest-version snapshot files present, for the whole registry. */
export function allSnapshotFiles(): string[] {
  try {
    return readdirSync(SNAP_DIR)
      .filter((f) => f.startsWith('worldbank__') && f.endsWith('.json'))
      .sort();
  } catch {
    return [];
  }
}

export { allSnapshots };

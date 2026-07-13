import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { INDICATORS } from '@/data/geo/indicators';
import { allSnapshots, getSnapshot, COUNTRY_META } from '@/lib/geo/snapshots';
import type { DatasetRegistryEntry } from '@/types/data-ops';

/**
 * Central dataset registry (Phase 4A). Built deterministically from the existing
 * indicator registry + immutable snapshots + hand-authored provider metadata.
 * No snapshot data is duplicated here — only described. Supports multiple
 * providers; today the only provider is the World Bank, but nothing assumes it.
 */

const SNAP_DIR = join(process.cwd(), 'data', 'snapshots');

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

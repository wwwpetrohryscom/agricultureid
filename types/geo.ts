/**
 * Phase 3B — geographic agriculture intelligence model.
 *
 * Design principle: separate STABLE descriptive facts (evergreen prose) from
 * VOLATILE statistics (dated, versioned, sourced). Statistics are never written
 * as evergreen prose; they are resolved from immutable dataset snapshots and
 * always rendered with year, unit, source, and dataset version.
 */

import type { FieldCitation, ContentRef } from '@/types/content';

/** ISO 3166-1 alpha-3 country code. */
export type CountryCode = string;

/** Revision state of a statistical observation. */
export type RevisionStatus =
  'observed' | 'estimate' | 'provisional' | 'revised';

/**
 * A curated agricultural indicator (World Bank WDI code + metadata). The unit
 * and methodology live here, not on each observation, so they stay consistent.
 */
export interface AgriculturalIndicator {
  /** WDI indicator code, e.g. "AG.YLD.CREL.KG". */
  id: string;
  name: string;
  /** Short slug for the public /agricultural-data/[indicator] route. */
  slug: string;
  unit: string;
  /** Grouping for the data hub. */
  category:
    | 'land'
    | 'production'
    | 'yield'
    | 'economy'
    | 'inputs'
    | 'environment'
    | 'population';
  description: string;
  methodology: string;
  /** True when the indicator is substantially modeled/estimated. */
  estimateFlag: boolean;
  /** Source registry id supporting the indicator (must resolve). */
  sourceId: string;
  /** Higher-is-not-necessarily-better indicators must not be framed as rankings. */
  comparable: boolean;
}

/**
 * An immutable, versioned dataset snapshot. Snapshots are written by
 * scripts/fetch-worldbank.mjs and never edited by hand; a changed dataset
 * version produces a NEW file, so history is preserved.
 */
export interface DatasetSnapshot {
  snapshotId: string;
  source: string;
  sourceUrl: string;
  apiQuery?: string;
  indicatorId: string;
  indicatorName: string;
  unit: string;
  estimateFlag?: boolean;
  /** Dataset version (the provider's last-updated date/version). */
  datasetVersion: string;
  /** ISO date the snapshot was retrieved. */
  retrievedAt: string;
  license: string;
  rowCount: number;
  /** [minYear, maxYear] covered. */
  coveredYears: [number, number] | [];
  jurisdictionCount: number;
  transformationVersion: string;
  limitations: string;
  /** Integrity checksum over `rows`. */
  checksum: string;
  rows: SnapshotRow[];
}

export interface SnapshotRow {
  iso3: CountryCode;
  year: number;
  value: number;
}

/**
 * A single statistical observation resolved from a snapshot, carrying full
 * provenance. This is what the UI renders — never a bare number.
 */
export interface AgriculturalStatistic {
  indicatorId: string;
  jurisdiction: CountryCode;
  year: number;
  value: number;
  unit: string;
  sourceDataset: string;
  sourceVersion: string;
  retrievedAt: string;
  revisionStatus: RevisionStatus;
  estimateFlag: boolean;
  sourceId: string;
  methodology?: string;
  limitations?: string;
}

/**
 * A value computed from statistics, with explicit calculation provenance.
 * Never presented as an observed value.
 */
export interface DerivedAgriculturalValue {
  formulaId: string;
  formulaVersion: string;
  /** Calculation implementation version. */
  calcVersion: string;
  label: string;
  value: number;
  unit: string;
  jurisdiction: CountryCode;
  year: number;
  /** Inputs used, with their source versions. */
  inputs: { indicatorId: string; value: number; sourceVersion: string }[];
  assumptions: string[];
  limitations: string;
}

/** Country metadata row (from the World Bank country snapshot). */
export interface CountryMeta {
  iso3: CountryCode;
  iso2: string;
  name: string;
  region: string | null;
  regionCode: string | null;
  incomeLevel: string | null;
  capitalCity: string | null;
  longitude: string | null;
  latitude: string | null;
}

/**
 * A country agriculture profile. The descriptive fields are STABLE/evergreen
 * (climate zones, dominant systems, institutions); volatile statistics are NOT
 * stored here — they are resolved from snapshots at render time. Authored as
 * data, cited to authoritative sources.
 */
export interface CountryAgricultureProfile {
  countryCode: CountryCode;
  /** Kebab-case slug for /countries/[country]. */
  slug: string;
  name: string;
  region: string;
  subregion?: string;
  /** Stable descriptive facts (evergreen). */
  climateZones: string[];
  agroecologicalZones?: string[];
  dominantCropSystems: string[];
  majorLivestockSystems: string[];
  irrigationContext: string;
  agriculturalInstitutions: { name: string; note?: string; url?: string }[];
  overview: string;
  keyLimitations: string[];
  dataCoverage: string;
  /** Indicator ids to highlight on the profile (resolved from snapshots). */
  highlightIndicators: string[];
  sourceReferences: { sourceId: string; citedFor?: string }[];
  fieldCitations?: FieldCitation[];
  /** Knowledge-graph links to crops/livestock/systems documented for the country. */
  connections?: ContentRef[];
  updatedAt: string;
  reviewedAt?: string;
}

/** A lightweight regional grouping profile. */
export interface RegionAgricultureProfile {
  slug: string;
  name: string;
  regionCode: string;
  overview: string;
  countryCodes: CountryCode[];
  keyLimitations: string[];
  sourceReferences: { sourceId: string; citedFor?: string }[];
  updatedAt: string;
}

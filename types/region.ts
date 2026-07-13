/**
 * Phase 4C — geographic & agroecological depth.
 *
 * Subnational region profiles (anchored to official ISO 3166-2 codes) and
 * agroecological/climate zones (the recognized Köppen-Geiger classification).
 * Political regions and agroecological zones are modeled SEPARATELY. Volatile
 * subnational statistics are only included when an official source is available;
 * descriptive content is region-specific, never sliced country text.
 */

import type { FieldCitation, ContentRef } from '@/types/content';

/** An agroecological / climate zone (Köppen-Geiger scheme). */
export interface AgroecologicalZone {
  zoneId: string;
  slug: string;
  /** Köppen-Geiger code, e.g. "Cfb". */
  classification: string;
  name: string;
  /** The classification system this zone belongs to. */
  system: string;
  systemVersion: string;
  group: 'tropical' | 'arid' | 'temperate' | 'continental' | 'polar';
  climateCharacteristics: string;
  growingPeriodContext: string;
  soilVegetationContext: string;
  agriculturalRelevance: string;
  /** Illustrative regions (not an exhaustive map). */
  geographicScope: string;
  sourceReferences: { sourceId: string; citedFor?: string }[];
  limitations: string[];
  updatedAt: string;
  reviewedAt?: string;
}

/** A subnational administrative region profile. */
export interface RegionProfile {
  regionId: string;
  slug: string;
  countryCode: string;
  /** Parent country slug (must resolve to a published country profile). */
  countrySlug: string;
  name: string;
  alternativeNames?: string[];
  /** Administrative level label (e.g. "State", "Province", "Region", "Land"). */
  adminLevel: string;
  /** Official geographic identifier (ISO 3166-2 subdivision code). */
  officialCode: string;
  climateContext: string;
  /** Köppen zone classifications present (references the zone registry). */
  agroecologicalZones: string[];
  agriculturalLandContext: string;
  majorCropSystems: string[];
  majorLivestockSystems: string[];
  irrigationContext: string;
  officialInstitutions: { name: string; note?: string }[];
  /**
   * Optional subnational statistic from an official source — only when reliably
   * available. When present it MUST carry year/unit/source/version.
   */
  statistic?: {
    label: string;
    value: string;
    unit: string;
    year: number;
    sourceId: string;
    sourceNote: string;
  };
  dataCoverage: string;
  sourceReferences: { sourceId: string; citedFor?: string }[];
  fieldCitations?: FieldCitation[];
  connections?: ContentRef[];
  limitations: string[];
  updatedAt: string;
  reviewedAt?: string;
}

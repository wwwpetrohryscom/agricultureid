import { SOURCES } from '@/data/sources';
import type { EvidenceTier, UrlSpecificity } from '@/types/sources';

/**
 * Evidence hierarchy and URL-specificity classification for every registry
 * source. Kept here as an explicit, auditable single source of truth (see
 * docs/evidence-hierarchy.md and docs/source-health.md).
 *
 * Tier 1 — national authorities, intergovernmental agencies, official
 *          registries, peer-reviewed literature, recognized research institutes.
 * Tier 2 — university extension publications, technical manuals, professional
 *          reference databases.
 * Tier 3 — reputable secondary references (general context only). Must not be
 *          the sole support for safety-critical, regulatory, quantitative, or
 *          treatment claims.
 */
export const EVIDENCE_TIER: Record<string, EvidenceTier> = {
  fao: 1,
  faostat: 1,
  'fao-land-water': 1,
  'fao-soils': 1,
  'fao-dad-is': 1,
  usda: 1,
  'usda-ars': 1,
  'usda-nrcs': 1,
  'usda-nass': 1,
  'usda-ers': 1,
  'usda-plants': 1,
  'usda-aphis': 1,
  'usda-fas': 1,
  'ec-agri': 1,
  efsa: 1,
  eppo: 1,
  'eppo-gd': 1,
  woah: 1,
  'us-epa': 1,
  wmo: 1,
  noaa: 1,
  'nap-nrc': 1, // peer-reviewed consensus (National Academies)
  cimmyt: 1, // research institute
  irri: 1,
  cip: 1,
  cgiar: 1,
  isric: 1,
  // Cultivar & breed registries (Phase 3A)
  upov: 1, // intergovernmental official variety-protection registry
  cpvo: 1, // EU official plant-variety-rights registry
  'usda-grin': 1, // USDA ARS germplasm registry
  'ec-plant-variety': 1, // official EU variety catalogue
  iita: 1, // CGIAR research institute
  icar: 1, // national agricultural research institute
  embrapa: 1, // national agricultural research institute
  // Tier 2 — extension services and professional reference databases
  cabi: 2,
  'livestock-conservancy': 2, // reputable conservation NGO registry (context)
  'uc-ipm': 2,
  'umn-extension': 2,
  'psu-extension': 2,
  'cornell-cals': 2,
  'iastate-extension': 2,
  ahdb: 2,
  'ncbi-taxonomy': 2,
  gbif: 2,
  // Tier 3 — general secondary references
  rhs: 3,
  britannica: 3,
  ifa: 3, // industry association
};

/**
 * Honest URL-specificity classification. Most registry entries deliberately
 * point at a durable organization or program landing page rather than a single
 * record; field-level provenance (`FieldCitation.locator`) is used to attach
 * specific locators to individual claims.
 */
export const URL_SPECIFICITY: Record<string, UrlSpecificity> = {
  // Program / database landing pages (topic-specific entry points)
  faostat: 'program',
  'fao-land-water': 'program',
  'fao-soils': 'program',
  'fao-dad-is': 'record',
  'usda-plants': 'record',
  'eppo-gd': 'record',
  cabi: 'record',
  'ncbi-taxonomy': 'record',
  'us-epa': 'program',
  upov: 'program', // PLUTO database entry point
  cpvo: 'program',
  'usda-grin': 'program', // GRIN-Global search entry point
  'ec-plant-variety': 'program',
  'livestock-conservancy': 'organization',
};

/** Tier for a source id (defaults to 3 = weakest if unclassified). */
export function evidenceTier(sourceId: string): EvidenceTier {
  return EVIDENCE_TIER[sourceId] ?? 3;
}

/** URL specificity for a source id (defaults to organization homepage). */
export function urlSpecificity(sourceId: string): UrlSpecificity {
  return URL_SPECIFICITY[sourceId] ?? 'organization';
}

/**
 * Tier-3 sources may not be the sole evidence for safety-critical, regulatory,
 * quantitative, or treatment claims. Returns the best (lowest) tier among a set
 * of source ids.
 */
export function bestTier(sourceIds: string[]): EvidenceTier {
  return sourceIds.reduce<EvidenceTier>(
    (best, id) => (evidenceTier(id) < best ? evidenceTier(id) : best),
    3,
  );
}

/** Every registry id has an explicit tier classification. */
export function unclassifiedSources(): string[] {
  return SOURCES.filter((s) => !(s.id in EVIDENCE_TIER)).map((s) => s.id);
}

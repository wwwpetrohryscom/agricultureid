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
  worldbank: 1, // intergovernmental official statistics
  'worldbank-wdi': 1, // WDI database
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
  // Phase 5D — trade, logistics, standards, and market bodies.
  //
  // Tier 1: intergovernmental agencies, treaty bodies, and official statistics.
  wto: 1, // treaty body (SPS/TBT/Agreement on Agriculture)
  wco: 1, // intergovernmental; owns the Harmonized System
  codex: 1, // joint FAO/WHO intergovernmental standards programme
  ippc: 1, // intergovernmental plant-health convention (ISPMs)
  'unece-standards': 1, // UN regional commission
  unctad: 1,
  itc: 1, // joint WTO/UN agency
  'un-comtrade': 1, // UN Statistics Division official trade statistics
  'oecd-agriculture': 1,
  imo: 1, // UN agency regulating maritime carriage
  'usda-ams': 1, // national authority
  igc: 1, // intergovernmental (Grains Trade Convention)
  ico: 1, // intergovernmental coffee body
  icco: 1, // intergovernmental cocoa body
  amis: 1, // G20/FAO-hosted inter-agency platform
  'faostat-trade': 1, // FAO official statistics (Detailed Trade Matrix)
  //
  // Tier 2: standards bodies and schemes that are NOT public authorities.
  // Each is authoritative about its OWN scheme — which is the only thing this
  // platform cites them for — but none is a government, treaty body, or
  // official registry, so Tier 1 would overstate them. Being a scheme owner is
  // not the same as being an authority.
  icc: 2, // private business organisation; owns the Incoterms® rules
  iso: 2, // federation of national standards bodies, non-governmental
  iata: 2, // airline industry association
  gs1: 2, // non-profit identification-standards body
  globalgap: 2, // private B2B farm-assurance scheme
  ifoam: 2, // NGO umbrella body for the organic movement
  fairtrade: 2, // NGO scheme owner
  iseal: 2, // NGO meta-standard body
  // Phase 5E — metrology. Unit conversion factors are legal definitions, not
  // measurements, so the defining authority is the right (and only) citation.
  nist: 1,
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
  worldbank: 'program',
  'worldbank-wdi': 'record',
  // Phase 5D — most trade/standards bodies are cited at program level; the
  // catalogues and databases are entry points, not single records.
  wco: 'program',
  icc: 'program',
  codex: 'program',
  ippc: 'program',
  iso: 'program',
  'unece-standards': 'program',
  'un-comtrade': 'program',
  'faostat-trade': 'record',
  itc: 'program',
  gs1: 'program',
  globalgap: 'organization',
  fairtrade: 'program',
  amis: 'organization',
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

/**
 * Types for the provenance and source registry.
 *
 * Every factual, non-obvious claim on a public page should trace to a source
 * in the registry. Sources are referenced by stable `id` from content so the
 * same authority can be cited across many pages without duplication.
 */

export type SourceType =
  | 'intergovernmental'
  | 'government'
  | 'research-institute'
  | 'university-extension'
  | 'peer-reviewed'
  | 'standards-body'
  | 'registry'
  | 'reference-database';

/**
 * Editorial reliability classification. This reflects the type of authority,
 * not a numeric score, and is deliberately coarse.
 *  - authoritative: primary intergovernmental / government / official registry
 *  - high: research institutes, universities, extension services, peer review
 *  - moderate: reputable secondary references used for general context
 */
export type SourceReliability = 'authoritative' | 'high' | 'moderate';

/**
 * Evidence hierarchy tier (see docs/evidence-hierarchy.md).
 *  1 — national authorities, intergovernmental agencies, official registries,
 *      peer-reviewed literature, recognized research institutes.
 *  2 — university extension publications, technical manuals, professional
 *      reference databases.
 *  3 — reputable secondary references, general context only.
 *
 * Tier 3 sources must not be the sole support for safety-critical, regulatory,
 * quantitative, or treatment claims.
 */
export type EvidenceTier = 1 | 2 | 3;

/**
 * How specific the registry URL is. Honest classification: most registry
 * entries point at an organization or program landing page (a durable,
 * canonical entry point) rather than a single record/document. Field-level
 * provenance (see `FieldCitation`) is used to attach specific locators to
 * individual claims.
 */
export type UrlSpecificity = 'organization' | 'program' | 'record' | 'document';

export interface Source {
  /** Stable kebab-case identifier, referenced from content. */
  id: string;
  /** Publishing organization or body. */
  organization: string;
  /** Title of the referenced resource, program, or publication. */
  title: string;
  /** Canonical, resolvable URL (validated for format). */
  url: string;
  /** Publication or last-updated date/year where known (ISO or YYYY). */
  publicationDate?: string;
  /** Date the source was last consulted for the registry (ISO date). */
  accessDate: string;
  sourceType: SourceType;
  /** Geographic jurisdiction the source primarily speaks to. */
  jurisdiction: string;
  /** BCP-47-ish language code of the referenced resource. */
  language: string;
  notes?: string;
  reliability: SourceReliability;
}

export const SOURCE_TYPE_LABEL: Record<SourceType, string> = {
  intergovernmental: 'Intergovernmental organization',
  government: 'Government agency',
  'research-institute': 'Research institute',
  'university-extension': 'University extension service',
  'peer-reviewed': 'Peer-reviewed literature',
  'standards-body': 'Standards body',
  registry: 'Official registry',
  'reference-database': 'Reference database',
};

export const SOURCE_RELIABILITY_LABEL: Record<SourceReliability, string> = {
  authoritative: 'Authoritative',
  high: 'High',
  moderate: 'Moderate',
};

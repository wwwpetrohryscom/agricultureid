/**
 * Pinned lineage contracts, one per claim kind.
 *
 * What a lineage can honestly contain depends entirely on what the source
 * publishes, and that varies enormously. EPPO publishes a list entry you can
 * quote. Regulation 1107/2009 has articles. The Irish national list has a
 * record identifier. A ministry's home page has none of those, and asking for
 * one produces either a fabricated line number or a DOM selector that breaks
 * next Tuesday.
 *
 * So each claim kind declares, ahead of time, what its sources can actually
 * supply. The gate then checks the lineage against the declaration rather than
 * against a single global expectation — which is the same lesson Waves 15, 18,
 * 19 and 20 each arrived at, and for the same reason: a rule written for one
 * source stops firing rather than failing when a second arrives.
 *
 * A claim kind with no contract cannot be resolved at all.
 */
import type { ClaimKind, LocatorKind } from '@/types/provenance';

export interface LineageContract {
  claimKind: ClaimKind;
  /** The locator kinds this claim's sources can actually supply. */
  permittedLocators: readonly LocatorKind[];
  /** True when the layer records which capture was read. */
  hasRelease: boolean;
  /** True when the source publishes wording that can be quoted. */
  publishesWording: boolean;
  /** True when AgricultureID normalises that wording into a vocabulary. */
  hasInterpretation: boolean;
  /** The vocabulary the interpretation belongs to, for the reader. */
  vocabulary?: string;
  why: string;
}

export const LINEAGE_CONTRACTS: readonly LineageContract[] = [
  {
    claimKind: 'input-authorization',
    permittedLocators: ['register-record-id', 'source-field'],
    hasRelease: true,
    publishesWording: true,
    hasInterpretation: true,
    vocabulary: 'AuthorizationStatus',
    why: 'Pesticide registers publish a numbered decision and their own status word, and the corpus records which snapshot each was read from.',
  },
  {
    claimKind: 'variety-registration',
    permittedLocators: ['register-record-id'],
    // The registers were read as files and documents rather than captured as
    // snapshots per entry; the UK gazette is the one with a release, and it is
    // recorded at the source level rather than per registration.
    hasRelease: false,
    publishesWording: true,
    hasInterpretation: true,
    vocabulary: 'VarietyRegistrationStatus',
    why: 'Every register feeding this layer publishes an entry identifier. `none` was permitted here for the French vine catalogue, which publishes none — but Wave 18 refused that register for want of a species, so nothing reaches it and the permission is removed. An entry without an identifier now fails the gate instead of quietly resolving to nowhere.',
  },
  {
    claimKind: 'biosecurity-status',
    permittedLocators: ['official-list-entry'],
    hasRelease: false,
    publishesWording: true,
    hasInterpretation: true,
    vocabulary: 'RegulatoryStatus',
    why: 'EPPO publishes a list and an entry within it, stored verbatim. "Fusarium oxysporum f.sp. cubense Tropical race 4" and "Fusarium oxysporum" are different regulatory facts.',
  },
  {
    claimKind: 'compliance-requirement',
    permittedLocators: ['legal-article', 'page-heading'],
    hasRelease: false,
    publishesWording: false,
    hasInterpretation: true,
    vocabulary: 'MandatoryStatus',
    why: 'A requirement is traced to operative legal text where one was read, and to the authority page that states it otherwise. The legal text itself is not reproduced.',
  },
  {
    claimKind: 'authority-identity',
    permittedLocators: ['page-heading'],
    hasRelease: false,
    publishesWording: true,
    hasInterpretation: false,
    why: 'A ministry publishes its own title on its own page. There is no record identifier and no normalisation: the official name is the official name. All eighty bodies carry a verification page, so a body without one fails the gate rather than resolving to no locator at all.',
  },
  {
    claimKind: 'soil-observation',
    permittedLocators: ['dataset-series'],
    hasRelease: true,
    // The survey publishes a soil body's classification and drainage class in
    // its own words; the numbers are its representative values, not wording.
    publishesWording: true,
    hasInterpretation: true,
    vocabulary: 'SoilEvidenceClass',
    why: 'A soil observation is addressed by the survey’s own component within a state, and the capture it was read from is recorded. Its evidence class is what the survey produces, not what the record claims.',
  },
  {
    claimKind: 'support-programme-status',
    permittedLocators: ['page-heading'],
    hasRelease: false,
    publishesWording: false,
    hasInterpretation: true,
    vocabulary: 'SupportProgrammeStatus',
    why: 'Programme pages state that a scheme runs; none of them publishes an addressable status field, and Wave 7 withheld every application window that could not be verified.',
  },
];

export const LINEAGE_CONTRACT_MAP: ReadonlyMap<ClaimKind, LineageContract> =
  new Map(LINEAGE_CONTRACTS.map((c) => [c.claimKind, c]));

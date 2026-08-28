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
    claimKind: 'trade-requirement',
    permittedLocators: ['page-heading'],
    hasRelease: false,
    // A directory record quotes nothing: it names a system, and the system's
    // answers are not reproduced.
    publishesWording: false,
    hasInterpretation: true,
    vocabulary: 'RequirementStatus',
    why: 'A border requirement is traced to the official system or guidance page that publishes it. There is no record identifier, because the systems are decision trees rather than registers of rules.',
  },
  {
    claimKind: 'climate-observation',
    permittedLocators: ['dataset-series'],
    hasRelease: true,
    // The source names the quantity in its own words — the element, the
    // category, the item — and that naming is what tells a normal from an
    // assessment from a reported statistic when the numbers look alike.
    publishesWording: true,
    hasInterpretation: true,
    vocabulary: 'ClimateEvidenceClass',
    why: 'A climate, drought or water value is addressed by its dataset, its place, its quantity and its period, and by the capture it was read from. Its evidence class comes from the dataset or from the source’s own flag on the value, never from the record — a normal that could relabel itself a measurement, or an agency estimate that could relabel itself a country’s statistic, is the failure this contract exists to prevent.',
  },
  {
    claimKind: 'farm-economic-figure',
    permittedLocators: ['dataset-series'],
    hasRelease: true,
    // The source publishes a number and the words naming what it is — the
    // metric, its unit basis and, for an index, its base year. That naming is
    // the source's wording, and stripping it leaves a bare number that could
    // be read as any of several different quantities.
    publishesWording: true,
    hasInterpretation: true,
    vocabulary: 'EvidenceType',
    why: 'A farm economic figure is addressed by its dataset, geography, metric and period, and by the capture it was read from. Its evidence type — forecast, survey average or index — is decided by the dataset it came from, never by the record, because a forecast that could relabel itself an observation is the single most damaging error this layer could make.',
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

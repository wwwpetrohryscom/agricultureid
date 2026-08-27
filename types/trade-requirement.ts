/**
 * Agricultural border requirements — which authority controls a movement, and
 * which official system decides what applies to it.
 *
 * ## What this layer is not
 *
 * It is not the trade statistics layer. "How much wheat did France export in
 * 2023" and "what must accompany a wheat shipment entering Australia" are
 * different questions with different sources, and a number answering the first
 * says nothing about the second.
 *
 * It is not legal advice, and it is not a rule engine. Which is the harder
 * point, and the one that shapes everything below.
 *
 * ## Border conditions are irreducibly conditional
 *
 * A real import condition depends on the commodity, its origin, the production
 * area's pest status, the intended use, the treatment applied, and often the
 * particular pest of concern. Australia's BICON, Canada's AIRS and the United
 * States' PExD are all decision trees for that reason: they ask a series of
 * questions because the answer genuinely depends on them.
 *
 * Flattening one of those into "Australia requires a phytosanitary certificate
 * for wheat" loses the conditions that decide whether it is true, and a reader
 * acting on the flattened version can have a consignment refused — or, worse,
 * skip a requirement that did apply.
 *
 * So a record here is one of two things, and it says which:
 *
 *   directory  the official system that decides, its scope, and the conditions
 *              it resolves that this record deliberately does not. This is the
 *              honest form for almost everything.
 *   stated     an unconditional requirement, carrying the operative text that
 *              makes it unconditional. Rare, and gated on that text existing.
 *
 * ## Certificates are not interchangeable
 *
 * A phytosanitary certificate attests plant health under the IPPC. An export
 * health certificate attests animal health under different law, issued by a
 * different authority, on a different form. Treating them as one document
 * would send a reader to the wrong authority with the wrong paperwork, so
 * {@link CertificateType} names the instrument behind each.
 */

/** Which way the movement goes. A rule for one is not a rule for the other. */
export const TRADE_DIRECTIONS = ['import', 'export'] as const;
export type TradeDirection = (typeof TRADE_DIRECTIONS)[number];

/**
 * Which side of the movement the jurisdiction is on.
 *
 * Direction alone cannot be checked from prose: the United States record is
 * titled "Importing countries' phytosanitary requirements for plants exported
 * from the United States", and it is correctly an EXPORT record — both words
 * belong in it. Flipping its direction to `import` left every keyword check
 * satisfied and the record wrong.
 *
 * So the side is stated structurally. An import requirement is the destination
 * imposing conditions; an export requirement is the origin helping meet
 * someone else's. Direction and role are two views of one fact and the gate
 * refuses them when they disagree.
 */
export const JURISDICTION_ROLES = ['destination', 'origin'] as const;
export type JurisdictionRole = (typeof JURISDICTION_ROLES)[number];

/** The role each direction implies. Exhaustive and not negotiable. */
export const ROLE_FOR_DIRECTION: Record<TradeDirection, JurisdictionRole> = {
  import: 'destination',
  export: 'origin',
};

/** What is moving, in the categories the official systems themselves use. */
export const TRADE_SUBJECT_TYPES = [
  'plant',
  'plant-product',
  'seed',
  'animal',
  'animal-product',
] as const;
export type TradeSubjectType = (typeof TRADE_SUBJECT_TYPES)[number];

export const TRADE_REQUIREMENT_TYPES = [
  'permit',
  'certificate',
  'inspection',
  'registration',
  'prohibition',
  'treatment',
  'notification',
  'documentation',
] as const;
export type TradeRequirementType = (typeof TRADE_REQUIREMENT_TYPES)[number];

/**
 * Whether this record states a requirement or points at the system that
 * decides one. See the module note — almost everything is `directory`.
 */
export const REQUIREMENT_NATURES = ['stated', 'directory'] as const;
export type RequirementNature = (typeof REQUIREMENT_NATURES)[number];

export const REQUIREMENT_STATUSES = [
  'current',
  'conditional',
  'uncertain',
  'superseded',
] as const;
export type RequirementStatus = (typeof REQUIREMENT_STATUSES)[number];

/**
 * Named certificate types and the instrument each rests on.
 *
 * Not a list of forms. Two documents with similar names issued under different
 * conventions by different authorities are different requirements, and the
 * instrument is what tells them apart.
 */
export const CERTIFICATE_TYPES = [
  'phytosanitary-certificate',
  're-export-phytosanitary-certificate',
  'export-health-certificate',
  'import-permit',
] as const;
export type CertificateType = (typeof CERTIFICATE_TYPES)[number];

export const CERTIFICATE_INSTRUMENT: Record<
  CertificateType,
  { label: string; instrument: string; attests: string }
> = {
  'phytosanitary-certificate': {
    label: 'Phytosanitary certificate',
    instrument:
      'International Plant Protection Convention, Article V; model certificate in ISPM 12',
    attests:
      'that a consignment of plants or plant products meets the importing country’s phytosanitary import requirements',
  },
  're-export-phytosanitary-certificate': {
    label: 'Phytosanitary certificate for re-export',
    instrument:
      'International Plant Protection Convention, Article V; model certificate in ISPM 12',
    attests:
      'that a consignment imported into a country and re-exported from it meets the destination’s phytosanitary import requirements',
  },
  'export-health-certificate': {
    label: 'Export health certificate',
    instrument:
      'National veterinary law, within the framework of the WOAH Terrestrial Animal Health Code',
    attests:
      'that animals or animal products meet the animal-health and public-health conditions of the destination',
  },
  'import-permit': {
    label: 'Import permit',
    instrument: 'National biosecurity or plant/animal health legislation',
    attests:
      'that a named importer has been authorised in advance to bring a specified consignment in, usually with conditions attached',
  },
};

/**
 * Certificate types defined and not yet attached to a requirement.
 *
 * Reserved rather than removed. These are not spare vocabulary: they are the
 * distinctions the layer exists to hold, and the gate that refuses a
 * phytosanitary certificate on an animal movement needs the animal certificate
 * to exist in order to mean anything. Removing them would remove the ability
 * to tell the documents apart, which is the failure being guarded against.
 */
export const RESERVED_CERTIFICATE_TYPES: readonly {
  certificateType: CertificateType;
  why: string;
}[] = [
  {
    certificateType: 're-export-phytosanitary-certificate',
    why: 'No record here is specific to re-export. The distinction is live — the Great Britain export record names it among the conditions the official guidance resolves — but which certificate a consignment needs depends on whether it was grown or imported, and no source examined stated that unconditionally.',
  },
  {
    certificateType: 'export-health-certificate',
    why: 'None of the systems verified for this wave published an unconditional animal-health certificate requirement. The type stays because the check that refuses a phytosanitary certificate on an animal movement needs it to exist.',
  },
];

export interface AgriculturalTradeRequirement {
  id: string;
  slug: string;
  nature: RequirementNature;
  direction: TradeDirection;
  /** Which side of the movement this jurisdiction is on. See the note. */
  jurisdictionRole: JurisdictionRole;

  /**
   * The country whose rules these are, as ISO 3166-1 alpha-3. Absent for a
   * union that legislates above the national level — the corpus already models
   * that separately everywhere else, and inventing a country code for the
   * European Union would put a non-existent country in a column readers filter
   * on.
   */
  jurisdictionCountryCode?: string;
  /** e.g. "European Union". Exactly one of this and the country code is set. */
  supranationalJurisdiction?: string;
  jurisdictionName: string;
  /**
   * The origin the record is specific to, where it is specific to one. Absent
   * means the record does not vary by origin — never that it applies to all.
   */
  originCountryCode?: string;

  subjectTypes: readonly TradeSubjectType[];
  requirementType: TradeRequirementType;
  certificateType?: CertificateType;

  title: string;
  summary: string;

  /**
   * The conditions the official system resolves and this record does not.
   * Required on every `directory` record: it is the whole point of the form.
   */
  unresolvedConditions: readonly string[];
  /**
   * The operative text that makes a `stated` requirement unconditional.
   * Required on `stated`, forbidden on `directory`.
   */
  operativeText?: string;

  authorityIds: readonly string[];
  registryIds: readonly string[];
  officialSourceIds: readonly string[];

  status: RequirementStatus;
  effectiveFrom?: string;
  effectiveUntil?: string;
  lastVerifiedAt: string;
  limitations: readonly string[];
}

/** Shown wherever a border requirement is displayed. */
export const TRADE_CAVEAT =
  'What an official system requires for a particular consignment depends on the commodity, its origin, the pest status of the production area, the intended use and the treatment applied. These records name the system that decides and the authority that operates it; they do not decide for it, and the official system must be consulted before a shipment.';

/** Shown wherever a treatment requirement appears. */
export const TREATMENT_CAVEAT =
  'Where a treatment is required, AgricultureID records that it is required and where the official protocol is published. It does not reproduce application procedures, rates or schedules.';

/**
 * Pinned contracts, one per register.
 *
 * Wave 10 read a single register — the EU Plant Variety Portal — and the gate
 * could therefore derive everything from that portal's identifier scheme:
 * `NLI/…` is a national list entry, `PBR/…` is a Community right, `AGR` is an
 * agricultural species. Hard-coding one register's conventions stops working
 * the moment a second register exists, and worse, it stops FAILING: a rule
 * written against `NLI/` simply never fires on a Canadian registration number.
 *
 * So each register declares its own contract here, and the gate iterates THIS
 * table rather than a list written inside the gate. A register added without a
 * contract has no rules to satisfy, which is exactly the silent hole this
 * table exists to close, so the gate also refuses any entry whose `registerId`
 * is not a key of this table.
 *
 * What a contract pins:
 *
 *   instruments        — the legal instruments this register can issue. A
 *                        register that issues only listings can never produce
 *                        an ownership right, however an entry is typed.
 *   entryIdPattern     — the shape of the register's own identifier, or null
 *                        where the register publishes no identifier at all.
 *   statuses           — every status wording the register publishes, mapped to
 *                        the normalised value. Exact strings, so wording drift
 *                        is caught rather than absorbed.
 *   speciesForm        — how the register expresses species. `botanical` means
 *                        it publishes a scientific name; `crop-kind` means it
 *                        publishes a common crop kind and the equivalence to a
 *                        taxon is documented in CROP_KIND_TAXA below.
 *   jurisdiction       — country XOR supranational, fixed per register. An
 *                        entry cannot claim a jurisdiction its register does
 *                        not cover.
 *   subTypes           — whether this register partitions its content, and the
 *                        wording it uses. Only the EU portal does.
 */
import type {
  RegisterSubType,
  RegistrationInstrument,
  VarietyRegistrationStatus,
} from '@/types/variety';

export interface RegisterContract {
  id: string;
  registerName: string;
  /** Fixed jurisdiction label as the register publishes it. */
  countryOrOrganisation: string;
  /** ISO 3166-1 alpha-3, or null for a supranational register. */
  countryCode: string | null;
  instruments: readonly RegistrationInstrument[];
  /**
   * Prefix of the register's identifier → instrument, where the identifier
   * itself encodes which instrument an entry is. Empty when it does not.
   */
  entryIdPrefixInstrument?: Readonly<Record<string, RegistrationInstrument>>;
  /** Shape of the register's own entry identifier; null when it publishes none. */
  entryIdPattern: RegExp | null;
  /** Every status wording the register publishes, mapped to the normalised value. */
  statuses: Readonly<Record<string, VarietyRegistrationStatus>>;
  speciesForm: 'botanical' | 'crop-kind';
  /** Sub-type wording → normalised sub-type; absent where the register has none. */
  subTypes?: Readonly<Record<string, RegisterSubType>>;
  /** Sub-segment of the identifier → sub-type, where the identifier encodes it. */
  entryIdSegmentSubType?: Readonly<Record<string, RegisterSubType>>;
  registryIds: readonly string[];
  sourceIds: readonly string[];
}

/**
 * A register examined and found to yield nothing gets NO contract here.
 *
 * The United Kingdom's plant breeders' rights register was read in full — 3,054
 * grants in the same workbook as the variety listings — and produced exactly
 * one name matching a cultivar in this corpus: `Cadenza`, granted over a
 * strawberry. It was refused, so the register feeds no entry and is not
 * described here as though it did. What was read, and what it returned, is
 * recorded in `data/varieties/wave18.ts` where the evidence lives.
 */
export const REGISTER_CONTRACTS: readonly RegisterContract[] = [
  {
    id: 'eu-plant-variety-portal',
    registerName: 'EU Plant Variety Portal',
    countryOrOrganisation: 'multiple',
    countryCode: null,
    instruments: ['national-list', 'community-plant-variety-right'],
    entryIdPrefixInstrument: {
      NLI: 'national-list',
      PBR: 'community-plant-variety-right',
    },
    // Prefix / sub-type / country / species / local id — and the local id may
    // itself contain a slash: Croatia publishes ids such as "HR-7/10".
    entryIdPattern: /^(NLI|PBR)\/[A-Z]{3}\/[A-Z]{2}\/[A-Z_]+\/.+$/,
    statuses: {
      Registered: 'registered',
      Application: 'application',
      Expired: 'expired',
      Surrendered: 'surrendered',
    },
    speciesForm: 'botanical',
    subTypes: {
      'Agricultural species': 'agricultural-species',
      'Vegetable species': 'vegetable-species',
      'Fruit species': 'fruit-species',
    },
    entryIdSegmentSubType: {
      AGR: 'agricultural-species',
      VEG: 'vegetable-species',
      FRU: 'fruit-species',
    },
    registryIds: ['eu-plant-variety-portal'],
    sourceIds: ['eu-pvp-national-lists', 'eu-pvp-cpvo-rights'],
  },
  {
    id: 'uk-gb-ni-variety-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    instruments: ['national-list'],
    // Scheme number / variety number, the pair the gazette publishes.
    entryIdPattern: /^\d+\/\d+$/,
    statuses: { 'Awarded GB and NI variety listings': 'registered' },
    speciesForm: 'botanical',
    registryIds: ['uk-variety-lists'],
    sourceIds: ['reg-uk-seeds-gazette'],
  },
  {
    id: 'ca-variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    instruments: ['variety-registration'],
    // Registration numbers are numeric, or "P-" prefixed for the earliest ones.
    entryIdPattern: /^(P-)?\d+$/,
    statuses: {
      'National Registration': 'registered',
      'Regional Registration': 'registered',
      'Interim Registration': 'registered',
      'Interim Regional Registration': 'registered',
      'Contract Registration': 'registered',
      'Contract Regional Registration': 'registered',
      Cancelled: 'cancelled',
    },
    speciesForm: 'crop-kind',
    registryIds: ['cfia-variety-registration'],
    sourceIds: ['reg-cfia-variety-registration'],
  },
  {
    id: 'us-plant-variety-protection',
    registerName: 'United States Plant Variety Protection',
    countryOrOrganisation: 'United States',
    countryCode: 'USA',
    instruments: ['plant-variety-protection-certificate'],
    entryIdPattern: /^\d{6,}$/,
    statuses: {
      'Certificate Issued': 'registered',
      'Certificate Expired': 'expired',
      'Certificate Abondoned': 'abandoned',
      'Application Pending': 'application',
      'Application Withdrawn': 'withdrawn',
      'Application Abondoned': 'abandoned',
      'Application Denied': 'rejected',
      'Application Ineligible': 'rejected',
    },
    speciesForm: 'botanical',
    registryIds: ['usda-pvpo'],
    sourceIds: ['reg-usda-pvpo'],
  },
  {
    id: 'au-plant-breeders-rights',
    registerName: 'Australian Plant Breeder’s Rights',
    countryOrOrganisation: 'Australia',
    countryCode: 'AUS',
    instruments: ['plant-breeders-right'],
    entryIdPattern: /^\d{4}\/\d{3}$/,
    statuses: {
      GRANTED: 'registered',
      ACCEPTED: 'application',
      EXPIRED: 'expired',
      SURRENDERED: 'surrendered',
      WITHDRAWN: 'withdrawn',
      REJECTED: 'rejected',
      REFUSED: 'rejected',
      TERMINATED: 'terminated',
      REVOKED: 'revoked',
    },
    speciesForm: 'botanical',
    registryIds: ['ip-australia-pbr'],
    sourceIds: ['reg-ip-australia-pbr'],
  },
];

export const REGISTER_CONTRACT_MAP: ReadonlyMap<string, RegisterContract> =
  new Map(REGISTER_CONTRACTS.map((c) => [c.id, c]));

/**
 * Documented taxonomic equivalences. Each is a reviewed decision about ONE
 * pair, kept as an explicit list rather than a rule, because a rule that
 * normalised ranks or genera would match pairs nobody has looked at.
 *
 * Keys and values are `genus epithet`, lowercased, authority stripped.
 */
export const TAXON_EQUIVALENCES: readonly {
  registerTaxon: string;
  corpusTaxon: string;
  why: string;
}[] = [
  {
    registerTaxon: 'triticum durum',
    corpusTaxon: 'triticum turgidum',
    why: 'Durum wheat published at species rank by the register and at subspecies rank by the corpus. Same taxon, different rank.',
  },
  {
    registerTaxon: 'lycopersicon esculentum',
    corpusTaxon: 'solanum lycopersicum',
    why: 'The tomato was transferred from Lycopersicon into Solanum; the United States register still publishes the pre-transfer combination. Same taxon, superseded genus.',
  },
];

/**
 * Crop kind → botanical taxon, for the one register that publishes a crop kind
 * instead of a scientific name.
 *
 * Canada's register publishes `cropkind` and `subcropkind` — "Wheat" and
 * "Wheat, Spring" — and no Latin name anywhere. The equivalence is not invented
 * here: the Seeds Regulations (C.R.C., c. 1400, Schedule I) give the botanical
 * name of each crop kind in law. Where a kind covers more than one species the
 * SUB-kind must resolve it, and the register's own partition does: durum and
 * spelt have sub-kinds of their own, so "Wheat, Spring" and "Wheat, Winter" can
 * only be the common wheat the Regulations name.
 *
 * Only kinds actually used by published entries appear here. A Canadian entry
 * whose sub-kind is absent from this table is refused, not guessed.
 */
export const CROP_KIND_TAXA: readonly {
  registerId: string;
  cropKind: string;
  subCropKind: string;
  taxon: string;
  why: string;
}[] = [
  {
    registerId: 'ca-variety-registration',
    cropKind: 'Potato',
    subCropKind: 'Potato (Tuber)',
    taxon: 'Solanum tuberosum L.',
    why: 'Seeds Regulations Schedule I: "Potato (commercial production) — Solanum tuberosum L."',
  },
  {
    registerId: 'ca-variety-registration',
    cropKind: 'Wheat',
    subCropKind: 'Wheat, Spring',
    taxon: 'Triticum aestivum L.',
    why: 'Seeds Regulations Schedule I: "Wheat, common — Triticum aestivum L." The register gives durum and spelt their own sub-kinds, so a spring wheat entry is common wheat.',
  },
  {
    registerId: 'ca-variety-registration',
    cropKind: 'Oat',
    subCropKind: 'Oat,Spring',
    taxon: 'Avena sativa L.',
    why: 'Seeds Regulations Schedule I: "Oats including hulless — Avena sativa L., A. nuda L." The register gives hulless oats their own sub-kind, so a spring oat entry is Avena sativa.',
  },
];

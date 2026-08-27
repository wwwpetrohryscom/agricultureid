import type { AgriculturalTradeRequirement } from '@/types/trade-requirement';

/**
 * Agricultural border requirements.
 *
 * Almost every record here is a DIRECTORY record, and that is the finding, not
 * a shortfall. Australia's BICON, Canada's AIRS and the United States' PExD
 * are decision trees because the answer genuinely depends on the commodity,
 * its origin, the pest status of the production area, the intended use and the
 * treatment applied. Flattening one of those into a country-pair rule loses
 * the conditions that decide whether it is true, and a reader acting on the
 * flattened version can have a consignment refused — or skip a requirement
 * that did apply.
 *
 * So each record names the system that decides, the authority that operates
 * it, and — required on every directory record — the conditions the system
 * resolves that this record deliberately does not.
 *
 * ## What would make a `stated` record
 *
 * Operative text that is unconditional. The IPPC's Article V says a
 * phytosanitary certificate is issued by the exporting country's national
 * plant protection organisation; that is a fact about the instrument and it is
 * recorded in the certificate vocabulary rather than as a border requirement.
 * No import condition examined for this wave was unconditional, so no `stated`
 * record exists yet. The form is kept because the distinction is the point: a
 * future unconditional requirement has somewhere honest to go, and it will
 * have to carry the text that makes it unconditional.
 *
 * ## Australia
 *
 * BICON refuses automated clients with HTTP 403 and was verified in a real
 * browser instead. That is a fact about how it is protected, not about whether
 * it exists — the same distinction Wave 19 drew between a blocked retrieval
 * and a missing register.
 */
export const TRADE_REQUIREMENTS: AgriculturalTradeRequirement[] = [
  {
    id: 'au-import-biosecurity-conditions',
    slug: 'australia-import-biosecurity-conditions',
    nature: 'directory',
    direction: 'import',
    jurisdictionRole: 'destination',
    jurisdictionCountryCode: 'AUS',
    jurisdictionName: 'Australia',
    subjectTypes: [
      'plant',
      'plant-product',
      'seed',
      'animal',
      'animal-product',
    ],
    requirementType: 'permit',
    certificateType: 'import-permit',
    title:
      'Import conditions for biosecurity-regulated goods entering Australia',
    summary:
      'Australia decides import conditions case by case through BICON, which asks what the goods are, where they come from, how they were treated and what they will be used for before it answers. Whether an import permit is needed is one of the things it decides.',
    unresolvedConditions: [
      'the commodity and its form, which BICON identifies through its own case structure',
      'the country and often the production area of origin',
      'the intended end use, which can change the conditions entirely',
      'any treatment applied before export',
      'whether an import permit is required at all for the particular case',
    ],
    authorityIds: [],
    registryIds: ['au-bicon'],
    officialSourceIds: ['reg-au-bicon'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'BICON refuses automated clients. It was verified in a real browser on 2026-08-27; no answer it gives is reproduced here.',
      'No national Australian agricultural authority is recorded in this corpus yet, so this requirement names the system without naming an authority record.',
    ],
  },
  {
    id: 'ca-import-requirements-airs',
    slug: 'canada-import-requirements',
    nature: 'directory',
    direction: 'import',
    jurisdictionRole: 'destination',
    jurisdictionCountryCode: 'CAN',
    jurisdictionName: 'Canada',
    subjectTypes: [
      'plant',
      'plant-product',
      'seed',
      'animal',
      'animal-product',
    ],
    requirementType: 'documentation',
    title: 'Import requirements for food, plants and animals entering Canada',
    summary:
      'Canada publishes its import requirements through AIRS, keyed to the tariff classification of the goods together with their origin and intended end use. The documents, permits and inspections that apply follow from that combination.',
    unresolvedConditions: [
      'the Harmonized System classification of the goods, which is what AIRS is keyed to',
      'the country of origin',
      'the intended end use',
      'the product form, which can change the classification and so the answer',
    ],
    authorityIds: ['can-cfia'],
    registryIds: ['ca-airs'],
    officialSourceIds: ['reg-ca-airs'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A requirement returned for one tariff classification does not carry to another, and none is reproduced here.',
    ],
  },
  {
    id: 'us-export-phytosanitary-requirements',
    slug: 'united-states-export-phytosanitary-requirements',
    nature: 'directory',
    direction: 'export',
    jurisdictionRole: 'origin',
    jurisdictionCountryCode: 'USA',
    jurisdictionName: 'United States',
    subjectTypes: ['plant', 'plant-product', 'seed'],
    requirementType: 'certificate',
    certificateType: 'phytosanitary-certificate',
    title:
      'Importing countries’ phytosanitary requirements for plants exported from the United States',
    summary:
      'APHIS records what each destination requires of consignments exported from the United States, so that an inspector can certify what the destination asks. The requirements are held in the Phytosanitary Export Database, whose search requires a logon.',
    unresolvedConditions: [
      'the destination country, whose requirements these are',
      'the commodity and its form',
      'the state or production area of origin, where a destination distinguishes them',
      'any additional declarations the destination requires on the certificate',
    ],
    authorityIds: ['us-usda-aphis'],
    registryIds: ['us-pexd', 'usda-aphis-pcit'],
    officialSourceIds: ['reg-us-pexd'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'The requirement search requires a logon, so no requirement from it is recorded here.',
      'A phytosanitary certificate attests plant health. It is not an animal-health document and does not substitute for one.',
    ],
  },
  {
    id: 'eu-import-official-controls',
    slug: 'european-union-import-official-controls',
    nature: 'directory',
    direction: 'import',
    jurisdictionRole: 'destination',
    supranationalJurisdiction: 'European Union',
    jurisdictionName: 'European Union',
    subjectTypes: ['plant', 'plant-product', 'animal', 'animal-product'],
    requirementType: 'notification',
    title:
      'Notification and official controls for agricultural consignments entering the European Union',
    summary:
      'Consignments subject to official controls are notified in advance through TRACES, the Union’s system for recording them. Which consignments are subject, and to what, is set by Union law and applied by each Member State’s competent authority.',
    unresolvedConditions: [
      'whether the commodity is subject to official controls at all',
      'the country of origin and its status under Union law',
      'the Member State of entry and the border control post used',
      'the certificates the consignment must be accompanied by',
    ],
    authorityIds: [],
    registryIds: ['eu-traces-nt'],
    officialSourceIds: ['reg-eu-traces-nt'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'TRACES requires an account. The login page was verified; nothing behind it was read.',
      'Official controls are Union law applied by national competent authorities, and this record names neither a Member State nor a commodity.',
    ],
  },
  {
    id: 'gb-import-plants-non-eu',
    slug: 'great-britain-import-plants',
    nature: 'directory',
    direction: 'import',
    jurisdictionRole: 'destination',
    jurisdictionCountryCode: 'GBR',
    jurisdictionName: 'Great Britain',
    subjectTypes: ['plant', 'plant-product'],
    requirementType: 'certificate',
    certificateType: 'phytosanitary-certificate',
    title: 'Importing plants and plant products into Great Britain',
    summary:
      'Great Britain publishes its plant import rules as government guidance, setting out which plants and plant products may enter, what documentation they need and what checks apply. What is required depends on the plant and where it comes from.',
    unresolvedConditions: [
      'the plant species or product, and its risk category under GB rules',
      'the country of origin',
      'whether the goods are prohibited, regulated or unregulated for that origin',
      'the notification and inspection regime that follows from those',
    ],
    authorityIds: ['gb-defra'],
    registryIds: [],
    officialSourceIds: ['gov-uk-plant-imports'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Great Britain and Northern Ireland do not have identical rules, and this record is about Great Britain.',
    ],
  },
  {
    id: 'gb-export-plants',
    slug: 'great-britain-export-plants',
    nature: 'directory',
    direction: 'export',
    jurisdictionRole: 'origin',
    jurisdictionCountryCode: 'GBR',
    jurisdictionName: 'Great Britain',
    subjectTypes: ['plant', 'plant-product'],
    requirementType: 'certificate',
    certificateType: 'phytosanitary-certificate',
    title: 'Exporting plants and plant products from Great Britain',
    summary:
      'What an exporter must do depends on the destination’s requirements, which the destination sets. Government guidance sets out how to apply for the phytosanitary certificate that attests those requirements are met.',
    unresolvedConditions: [
      'the destination country, whose requirements decide what must be certified',
      'the plant species or product',
      'whether the consignment is being exported or re-exported, which changes the certificate',
    ],
    authorityIds: ['gb-defra'],
    registryIds: [],
    officialSourceIds: ['gov-uk-plant-exports'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A certificate attests that the DESTINATION’s requirements are met. It is not a statement that the goods may be exported regardless of destination.',
    ],
  },
  {
    id: 'jp-import-plant-quarantine',
    slug: 'japan-import-plant-quarantine',
    nature: 'directory',
    direction: 'import',
    jurisdictionRole: 'destination',
    jurisdictionCountryCode: 'JPN',
    jurisdictionName: 'Japan',
    subjectTypes: ['plant', 'plant-product', 'seed'],
    requirementType: 'inspection',
    title: 'Plant quarantine for plants and plant products entering Japan',
    summary:
      'Japan’s Plant Protection Station operates import plant quarantine, publishing which articles are prohibited, which are restricted and what conditions attach to those that may enter. What applies depends on the species, the origin and the quarantine pest of concern.',
    unresolvedConditions: [
      'the plant species, which is what prohibitions are written against',
      'the country or region of origin',
      'the quarantine pest the restriction exists for',
      'whether a treatment or an inspection in the exporting country is required',
    ],
    authorityIds: ['jpn-maff'],
    registryIds: ['jp-plant-protection'],
    officialSourceIds: ['reg-jp-plant-protection'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Published primarily in Japanese. Nothing from it is translated or restated here.',
    ],
  },
  {
    id: 'kr-import-quarantine',
    slug: 'korea-import-quarantine',
    nature: 'directory',
    direction: 'import',
    jurisdictionRole: 'destination',
    jurisdictionCountryCode: 'KOR',
    jurisdictionName: 'Republic of Korea',
    subjectTypes: ['plant', 'plant-product', 'animal', 'animal-product'],
    requirementType: 'inspection',
    title:
      'Animal and plant quarantine for consignments entering the Republic of Korea',
    summary:
      'The Animal and Plant Quarantine Agency operates both regimes. Which one applies, and what it requires, depends on what is being moved — and the two are not interchangeable.',
    unresolvedConditions: [
      'whether the consignment is under the animal or the plant regime',
      'the species and product form',
      'the country of origin and its disease or pest status',
      'the import prohibitions in force for that origin',
    ],
    authorityIds: [],
    registryIds: ['kr-apqa'],
    officialSourceIds: ['reg-kr-apqa'],
    status: 'conditional',
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Published primarily in Korean. Nothing from it is translated or restated here.',
      'No national Korean agricultural authority is recorded in this corpus yet, so this requirement names the system without naming an authority record.',
    ],
  },
];

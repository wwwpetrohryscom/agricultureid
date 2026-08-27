import {
  CULTIVAR_MATCH_BASIS,
  type VarietyRegistrationEntry,
} from '@/types/variety';

/**
 * Wave 18 — registers beyond the European Union.
 *
 * 24 entries across four registers, verified 2026-08-27: the Great Britain and
 * Northern Ireland Variety Lists, the Canadian register of varieties of crop
 * kinds, United States plant variety protection, and Australian plant
 * breeder's rights. Twenty cultivars are covered, seven of them for the first
 * time.
 *
 * ## Every register reproduced the homonym trap independently
 *
 * Of 42 entries whose name matched a cultivar exactly, 18 were kept and 24 —
 * 57% — belonged to a different botanical species and were discarded:
 *
 *   United Kingdom PBR   Cadenza (bread wheat)   → Fragaria x ananassa, a strawberry
 *   United States        McIntosh (apple)        → Triticum aestivum, a common wheat
 *   United States        Merlot (grape)          → a common bean and a potato
 *   United States        Roma (tomato)           → Phaseolus vulgaris, a garden bean
 *   United States        Atlantic (potato)       → a garden bean and a barley
 *   United States        Chardonnay (grape)      → Phaseolus vulgaris
 *   United States        Charlotte (potato)      → Poa pratensis, a bluegrass
 *   United States        Concord (grape)         → Lolium multiflorum, a ryegrass
 *   United States        Fielder (wheat)         → Poa pratensis
 *   United States        Gala (apple)            → an onion, a tall fescue and a potato
 *   United States        Marquis (wheat)         → Phaseolus vulgaris
 *   United Kingdom       Riesling (grape)        → Solanum lycopersicum, a tomato
 *   United Kingdom       Carmel (almond)         → Spinacia oleracea, a spinach
 *   United Kingdom       Kronos (durum wheat)    → a white cabbage
 *   United Kingdom       Merlot (grape)          → a pea and a lettuce
 *   United Kingdom       Gala (apple)            → a potato and a hybrid ryegrass
 *   Canada               Gala (apple)            → an alfalfa and a potato
 *   Canada               Kronos (durum wheat)    → a winter canola
 *   Canada               Lee (soybean)           → a spring wheat
 *   Canada               Merlot (grape)          → a potato
 *   Australia            Charlotte (potato)      → Malus domestica, an apple
 *   Australia            Forrest (soybean)       → Triticum aestivum
 *   Australia            Lee (soybean)           → Aeschynomene americana, a jointvetch
 *   Australia            Roma (tomato)           → Alstroemeria, a Peruvian lily
 *
 * The United Kingdom's own plant breeders' rights register returning a
 * strawberry for `Cadenza` is worth stating plainly: Wave 10 found that
 * collision in the EU portal, and a register on a different continent under
 * different law reproduced it exactly. Denomination uniqueness is a
 * within-species rule everywhere, so a name-only matcher is not merely
 * imprecise, it is wrong about the majority of what it finds.
 *
 * ## No vine register could be used, and that is a finding
 *
 * Nine of the cultivars still without an entry are grapevines, so the vine
 * registers were the obvious target of this wave. Three were examined and none
 * publishes a botanical species for its entries:
 *
 *   EU Plant Variety Portal — has no vine species at all. Its species list
 *     holds 591 entries, none of them Vitis; the portal covers EU-regulated
 *     agricultural, vegetable and fruit species only.
 *   EU Common Catalogue of Vine Varieties — 3,030 varieties, published by the
 *     Commission with columns for variety, clone, maintainer, observations and
 *     synonyms. No species column. It lists Cabernet Blanc, Cabernet Cantor and
 *     Cabernet Carol beside Chardonnay and Merlot: German interspecific hybrids
 *     next to Vitis vinifera, unlabelled and indistinguishable.
 *   Catalogue officiel des variétés de vigne cultivées en France — a full page
 *     per variety, with regulatory status, official synonyms in other Member
 *     States, genetic profile and ampelographic description. The words "Vitis"
 *     and "vinifera" appear nowhere on it.
 *
 * A genus is not a species, and the third register above proves why that
 * matters here rather than in the abstract: its own catalogue mixes vinifera
 * varieties with interspecific hybrids. Matching `Chardonnay` on name plus
 * genus would be the same mistake as matching `Cadenza` on name alone, one
 * rank up. Italy's Registro nazionale delle varietà di vite refused
 * connection on 2026-08-27 and is unexamined rather than rejected.
 *
 * So no vine entry is published, and the nine grapevine cultivars keep no
 * registration section at all. That is the correct outcome, not a gap to be
 * filled later by a weaker rule.
 *
 * ## Japan was searched and yielded nothing, for two separate reasons
 *
 * The MAFF plant variety registration database publishes denominations in
 * Japanese script only; a romanised query returns no records, so `Koshihikari`
 * is not a denomination in that register and cannot be identical to one.
 * Searched in Japanese, コシヒカリ and 日本晴 have no registration of their own
 * either — both predate the registration system, and what the register holds
 * are later derived lines (コシヒカリ新潟BL1号 and so on), which are different
 * varieties. Neither obstacle is the other's answer, and neither is worked
 * around here.
 *
 * ## What was not read
 *
 * The UPOV PLUTO database aggregates variety data from some sixty members and
 * would have covered several of these jurisdictions at once. `upov.int`
 * disallows `/pluto/` in robots.txt, so it was not read.
 */
export const WAVE_18_REGISTRATIONS: VarietyRegistrationEntry[] = [
  {
    id: 'uk-gb-ni-variety-list-2-232',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '2/232',
    denomination: 'MARIS OTTER',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    registerSpeciesName: 'HORDEUM VULGARE L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'maris-otter',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
      'The register records this listing with the decision date 01/01/1900, which every long-standing entry carries. It is a placeholder for "listed before the register kept dates", not a decision date, and is not published here as one.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-2-235',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '2/235',
    denomination: 'GOLDEN PROMISE',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    registerSpeciesName: 'HORDEUM VULGARE L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'golden-promise',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
      'The register records this listing with the decision date 01/01/1900, which every long-standing entry carries. It is a placeholder for "listed before the register kept dates", not a decision date, and is not published here as one.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-113',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/113',
    denomination: 'MARIS PIPER',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '1973-07-01',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'maris-piper',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-143',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/143',
    denomination: 'BINTJE',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '1973-07-01',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'bintje',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-165',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/165',
    denomination: 'KENNEBEC',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '1973-07-01',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'kennebec',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-167',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/167',
    denomination: 'KING EDWARD',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '1973-07-01',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'king-edward',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-170',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/170',
    denomination: 'MARIS PEER',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '1973-07-01',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'maris-peer',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-415',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/415',
    denomination: 'YUKON GOLD',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '1992-08-19',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'yukon-gold',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-4-15449',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '4/15449',
    denomination: 'CHARLOTTE',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '2018-12-31',
    registerSpeciesName: 'SOLANUM TUBEROSUM L.',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'charlotte-potato',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-48-16002',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '48/16002',
    denomination: 'MONEYMAKER',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '2019-02-28',
    registerSpeciesName: 'SOLANUM LYCOPERSICUM L. VAR. LYCOPERSICUM',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'moneymaker',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'uk-gb-ni-variety-list-48-20132',
    registerId: 'uk-gb-ni-variety-list',
    registerEntryId: '48/20132',
    denomination: 'CHEROKEE PURPLE',
    instrument: 'national-list',
    registerName: 'Great Britain and Northern Ireland Variety Lists',
    countryOrOrganisation: 'United Kingdom',
    countryCode: 'GBR',
    decidedOn: '2020-10-31',
    registerSpeciesName: 'SOLANUM LYCOPERSICUM L. VAR. LYCOPERSICUM',
    status: 'registered',
    publishedStatusWording: 'Awarded GB and NI variety listings',
    cultivarRef: 'cherokee-purple',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['uk-variety-lists'],
    sourceReferences: ['reg-uk-seeds-gazette'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A GB and NI Variety List entry permits seed of this variety to be marketed in Great Britain or Northern Ireland. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The special edition of the Plant Varieties and Seeds Gazette publishes the awarded lists only, with no per-entry status column. An entry appears because it is awarded; the register publishes no wording for a listing that has ended.',
    ],
  },
  {
    id: 'ca-variety-registration-2402',
    registerId: 'ca-variety-registration',
    registerEntryId: '2402',
    denomination: 'OGLE',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    decidedOn: '1984-03-08',
    registerSpeciesName: 'Oat',
    registerSpeciesSubGroup: 'Oat,Spring',
    breedersReference: 'CI9401, IL73-2664',
    status: 'cancelled',
    publishedStatusWording: 'Cancelled',
    cultivarRef: 'ogle-oat',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
      'The register records this entry as "Cancelled". It is not a current registration.',
    ],
  },
  {
    id: 'ca-variety-registration-1933',
    registerId: 'ca-variety-registration',
    registerEntryId: '1933',
    denomination: 'BINTJE',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    decidedOn: '1979-06-13',
    registerSpeciesName: 'Potato',
    registerSpeciesSubGroup: 'Potato (Tuber)',
    breedersReference: 'BINTJE',
    status: 'registered',
    publishedStatusWording: 'National Registration',
    cultivarRef: 'bintje',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
    ],
  },
  {
    id: 'ca-variety-registration-2047',
    registerId: 'ca-variety-registration',
    registerEntryId: '2047',
    denomination: 'YUKON GOLD',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    decidedOn: '1980-10-31',
    registerSpeciesName: 'Potato',
    registerSpeciesSubGroup: 'Potato (Tuber)',
    breedersReference: 'G666-4Y',
    status: 'registered',
    publishedStatusWording: 'National Registration',
    cultivarRef: 'yukon-gold',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
    ],
  },
  {
    id: 'ca-variety-registration-2300',
    registerId: 'ca-variety-registration',
    registerEntryId: '2300',
    denomination: 'ATLANTIC',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    decidedOn: '1983-02-01',
    registerSpeciesName: 'Potato',
    registerSpeciesSubGroup: 'Potato (Tuber)',
    status: 'registered',
    publishedStatusWording: 'National Registration',
    cultivarRef: 'atlantic-potato',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
    ],
  },
  {
    id: 'ca-variety-registration-563',
    registerId: 'ca-variety-registration',
    registerEntryId: '563',
    denomination: 'KENNEBEC',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    decidedOn: '1951-05-10',
    registerSpeciesName: 'Potato',
    registerSpeciesSubGroup: 'Potato (Tuber)',
    status: 'registered',
    publishedStatusWording: 'National Registration',
    cultivarRef: 'kennebec',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
    ],
  },
  {
    id: 'ca-variety-registration-p-17',
    registerId: 'ca-variety-registration',
    registerEntryId: 'P-17',
    denomination: 'RUSSET BURBANK',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    registerSpeciesName: 'Potato',
    registerSpeciesSubGroup: 'Potato (Tuber)',
    status: 'registered',
    publishedStatusWording: 'National Registration',
    cultivarRef: 'russet-burbank',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
      'The register gives this entry the registration date 1923-01-01, which all fourteen of its "P-" numbered entries share. It marks the earliest registrations rather than a decision made on that day, and is not published here as one.',
    ],
  },
  {
    id: 'ca-variety-registration-1667',
    registerId: 'ca-variety-registration',
    registerEntryId: '1667',
    denomination: 'FIELDER',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    decidedOn: '1976-03-25',
    registerSpeciesName: 'Wheat',
    registerSpeciesSubGroup: 'Wheat, Spring',
    breedersReference: 'CI 17268',
    status: 'cancelled',
    publishedStatusWording: 'Cancelled',
    cultivarRef: 'fielder-wheat',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
      'The register records this entry as "Cancelled". It is not a current registration.',
    ],
  },
  {
    id: 'ca-variety-registration-p-15',
    registerId: 'ca-variety-registration',
    registerEntryId: 'P-15',
    denomination: 'MARQUIS',
    instrument: 'variety-registration',
    registerName: 'Varieties of Crop Kinds Registered in Canada',
    countryOrOrganisation: 'Canada',
    countryCode: 'CAN',
    registerSpeciesName: 'Wheat',
    registerSpeciesSubGroup: 'Wheat, Spring',
    breedersReference: 'CAN 1831',
    status: 'cancelled',
    publishedStatusWording: 'Cancelled',
    cultivarRef: 'marquis-wheat',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['cfia-variety-registration'],
    sourceReferences: ['reg-cfia-variety-registration'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'Registration under the Seeds Regulations is a condition of selling or advertising seed of this variety in Canada. It is not an intellectual property right, and it does not establish that the variety is currently grown or sold there.',
      'The register publishes a crop kind and sub-kind rather than a botanical name. The species recorded here is the equivalence the Seeds Regulations themselves give for that crop kind, re-derived by the validation gate; it is not read off the entry.',
      'The register records this entry as "Cancelled". It is not a current registration.',
      'The register gives this entry the registration date 1923-01-01, which all fourteen of its "P-" numbered entries share. It marks the earliest registrations rather than a decision made on that day, and is not published here as one.',
    ],
  },
  {
    id: 'us-plant-variety-protection-7300058',
    registerId: 'us-plant-variety-protection',
    registerEntryId: '7300058',
    denomination: 'Forrest',
    instrument: 'plant-variety-protection-certificate',
    registerName: 'United States Plant Variety Protection',
    countryOrOrganisation: 'United States',
    countryCode: 'USA',
    decidedOn: '1975-08-08',
    registerSpeciesName: 'Glycine max (L.) Merr.',
    status: 'expired',
    publishedStatusWording: 'Certificate Expired',
    cultivarRef: 'forrest-soybean',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['usda-pvpo'],
    sourceReferences: ['reg-usda-pvpo'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A certificate of plant variety protection is an intellectual property grant under the United States Plant Variety Protection Act. It is not permission to market the variety, and the United States operates no national variety list.',
      'The register records this entry as "Certificate Expired". It is not a current grant.',
    ],
  },
  {
    id: 'us-plant-variety-protection-9000121',
    registerId: 'us-plant-variety-protection',
    registerEntryId: '9000121',
    denomination: 'Micro-Tom',
    instrument: 'plant-variety-protection-certificate',
    registerName: 'United States Plant Variety Protection',
    countryOrOrganisation: 'United States',
    countryCode: 'USA',
    decidedOn: '1992-01-31',
    registerSpeciesName: 'Lycopersicon esculentum Mill.',
    breedersReference: 'Fla. 7191',
    status: 'expired',
    publishedStatusWording: 'Certificate Expired',
    cultivarRef: 'micro-tom',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['usda-pvpo'],
    sourceReferences: ['reg-usda-pvpo'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A certificate of plant variety protection is an intellectual property grant under the United States Plant Variety Protection Act. It is not permission to market the variety, and the United States operates no national variety list.',
      'The register records this entry as "Certificate Expired". It is not a current grant.',
    ],
  },
  {
    id: 'us-plant-variety-protection-9400033',
    registerId: 'us-plant-variety-protection',
    registerEntryId: '9400033',
    denomination: 'Kronos',
    instrument: 'plant-variety-protection-certificate',
    registerName: 'United States Plant Variety Protection',
    countryOrOrganisation: 'United States',
    countryCode: 'USA',
    decidedOn: '1996-06-28',
    registerSpeciesName: 'Triticum durum Desf.',
    breedersReference: 'DO3-21',
    status: 'expired',
    publishedStatusWording: 'Certificate Expired',
    cultivarRef: 'kronos-durum',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['usda-pvpo'],
    sourceReferences: ['reg-usda-pvpo'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      'A certificate of plant variety protection is an intellectual property grant under the United States Plant Variety Protection Act. It is not permission to market the variety, and the United States operates no national variety list.',
      'The register records this entry as "Certificate Expired". It is not a current grant.',
    ],
  },
  {
    id: 'au-plant-breeders-rights-1995-097',
    registerId: 'au-plant-breeders-rights',
    registerEntryId: '1995/097',
    denomination: 'Honeycrisp',
    instrument: 'plant-breeders-right',
    registerName: "Australian Plant Breeder's Rights",
    countryOrOrganisation: 'Australia',
    countryCode: 'AUS',
    grantNumber: '2112',
    decidedOn: '2002-10-02',
    registerSpeciesName: 'Malus domestica',
    breedersReference: 'MN 1711',
    status: 'registered',
    publishedStatusWording: 'GRANTED',
    cultivarRef: 'honeycrisp',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['ip-australia-pbr'],
    sourceReferences: ['reg-ip-australia-pbr'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      "A plant breeder's right is an intellectual property grant under the Plant Breeder's Rights Act 1994. It is not permission to market the variety in Australia.",
    ],
  },
  {
    id: 'au-plant-breeders-rights-1994-238',
    registerId: 'au-plant-breeders-rights',
    registerEntryId: '1994/238',
    denomination: 'KRONOS',
    instrument: 'plant-breeders-right',
    registerName: "Australian Plant Breeder's Rights",
    countryOrOrganisation: 'Australia',
    countryCode: 'AUS',
    registerSpeciesName: 'Triticum durum',
    breedersReference: 'DO3-21',
    status: 'withdrawn',
    publishedStatusWording: 'WITHDRAWN',
    cultivarRef: 'kronos-durum',
    cultivarMatchBasis: CULTIVAR_MATCH_BASIS,
    relatedRegistryIds: ['ip-australia-pbr'],
    sourceReferences: ['reg-ip-australia-pbr'],
    lastVerifiedAt: '2026-08-27',
    limitations: [
      "A plant breeder's right is an intellectual property grant under the Plant Breeder's Rights Act 1994. It is not permission to market the variety in Australia.",
      'The register records this entry as "WITHDRAWN". It is not a current grant.',
    ],
  },
];

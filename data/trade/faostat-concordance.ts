/**
 * Phase 5D — the FAOSTAT trade concordance.
 *
 * Which AgricultureID commodity corresponds to which FAOSTAT trade item, and —
 * just as importantly — which do not, and why.
 *
 * ## The inclusion rule
 *
 * A commodity is mapped ONLY when exactly one FAOSTAT trade item corresponds to
 * it. A commodity is excluded when:
 *
 *  - **no-trade-item** — no FAOSTAT trade item exists. Note that a FAOSTAT
 *    *production* item code does NOT imply a trade item: seed cotton (item 328)
 *    is ginned at origin and never appears in the trade matrix.
 *  - **aggregate-item** — the only candidate item bundles this commodity with
 *    others ("Grapes" covers table AND wine grapes; "Lemons and limes" covers
 *    two fruits). Assigning the whole item to one of them would overstate it.
 *  - **ambiguous-item** — the item's published definition could not be matched
 *    to the commodity with confidence.
 *  - **split-item** — the commodity is spread across several items with no
 *    single total (cattle hides, by preservation state).
 *
 * Excluding a major commodity is deliberate. A mango trade figure that silently
 * includes guavas and mangosteens is worse than no mango trade figure.
 *
 * ## Relationship to `commodityCodes`
 *
 * Commodities already carry FAOSTAT item codes in their `commodityCodes` field.
 * This concordance was derived independently and cross-checked against them;
 * tests/phase5d.test.ts asserts the two agree, so a future edit to either that
 * introduces a conflict fails the build rather than silently mis-attributing a
 * country's trade to the wrong commodity.
 *
 * Generated against FAOSTAT bulk release 2025-12-18.
 */

export interface FaostatConcordanceEntry {
  commoditySlug: string;
  /** FAOSTAT item code as published in the trade-matrix item list. */
  faostatItemCode: string;
  /** The item's published name — kept so a page can name its own basis. */
  faostatItemName: string;
  /** CPC code as published alongside the item. */
  cpcCode: string;
}

export type ExclusionReason =
  'no-trade-item' | 'aggregate-item' | 'ambiguous-item' | 'split-item';

export interface FaostatExclusion {
  commoditySlug: string;
  reason: ExclusionReason;
  note: string;
}

/** Commodities with exactly one corresponding FAOSTAT trade item. */
export const FAOSTAT_TRADE_CONCORDANCE: FaostatConcordanceEntry[] = [
  {
    commoditySlug: 'almonds',
    faostatItemCode: '221',
    faostatItemName: 'Almonds; in shell',
    cpcCode: '01371',
  },
  {
    commoditySlug: 'avocados',
    faostatItemCode: '572',
    faostatItemName: 'Avocados',
    cpcCode: '01311',
  },
  {
    commoditySlug: 'bananas',
    faostatItemCode: '486',
    faostatItemName: 'Bananas',
    cpcCode: '01312',
  },
  {
    commoditySlug: 'barley-grain',
    faostatItemCode: '44',
    faostatItemName: 'Barley',
    cpcCode: '0115',
  },
  {
    commoditySlug: 'black-pepper-corns',
    faostatItemCode: '687',
    faostatItemName: 'Pepper (Piper spp.); raw',
    cpcCode: '01651',
  },
  {
    commoditySlug: 'brown-rice',
    faostatItemCode: '29',
    faostatItemName: 'Rice; milled (husked)',
    cpcCode: '23161.01',
  },
  {
    commoditySlug: 'buckwheat-grain',
    faostatItemCode: '89',
    faostatItemName: 'Buckwheat',
    cpcCode: '01192',
  },
  {
    commoditySlug: 'cashew-nuts',
    faostatItemCode: '217',
    faostatItemName: 'Cashew nuts; in shell',
    cpcCode: '01372',
  },
  {
    commoditySlug: 'cassava-roots',
    faostatItemCode: '125',
    faostatItemName: 'Cassava; fresh',
    cpcCode: '01520.01',
  },
  {
    commoditySlug: 'chickpeas',
    faostatItemCode: '191',
    faostatItemName: 'Chick peas; dry',
    cpcCode: '01703',
  },
  {
    commoditySlug: 'cocoa-beans',
    faostatItemCode: '661',
    faostatItemName: 'Cocoa beans',
    cpcCode: '01640',
  },
  {
    commoditySlug: 'cotton-lint',
    faostatItemCode: '767',
    faostatItemName: 'Cotton lint; ginned',
    cpcCode: '01921.02',
  },
  {
    commoditySlug: 'cottonseed',
    faostatItemCode: '329',
    faostatItemName: 'Cotton seed',
    cpcCode: '0143',
  },
  {
    commoditySlug: 'cowpeas',
    faostatItemCode: '195',
    faostatItemName: 'Cow peas; dry',
    cpcCode: '01706',
  },
  {
    commoditySlug: 'cucumbers',
    faostatItemCode: '397',
    faostatItemName: 'Cucumbers and gherkins',
    cpcCode: '01232',
  },
  {
    commoditySlug: 'dates',
    faostatItemCode: '577',
    faostatItemName: 'Dates',
    cpcCode: '01314',
  },
  {
    commoditySlug: 'dried-chillies',
    faostatItemCode: '689',
    faostatItemName:
      'Chillies and peppers; dry (Capsicum spp.; Pimenta spp.); raw',
    cpcCode: '01652',
  },
  {
    commoditySlug: 'dried-tobacco-leaf',
    faostatItemCode: '826',
    faostatItemName: 'Unmanufactured tobacco',
    cpcCode: '01970',
  },
  {
    commoditySlug: 'dry-beans',
    faostatItemCode: '176',
    faostatItemName: 'Beans; dry',
    cpcCode: '01701',
  },
  {
    commoditySlug: 'dry-bulb-onions',
    faostatItemCode: '403',
    faostatItemName: 'Onions and shallots; dry (excluding dehydrated)',
    cpcCode: '01253.02',
  },
  {
    commoditySlug: 'dry-peas',
    faostatItemCode: '187',
    faostatItemName: 'Peas; dry',
    cpcCode: '01705',
  },
  {
    commoditySlug: 'flax-fibre',
    faostatItemCode: '771',
    faostatItemName: 'Flax; raw or retted',
    cpcCode: '01929.01',
  },
  {
    commoditySlug: 'flaxseed',
    faostatItemCode: '333',
    faostatItemName: 'Linseed',
    cpcCode: '01441',
  },
  {
    commoditySlug: 'fresh-apples',
    faostatItemCode: '515',
    faostatItemName: 'Apples',
    cpcCode: '01341',
  },
  {
    commoditySlug: 'fresh-blueberries',
    faostatItemCode: '552',
    faostatItemName: 'Blueberries',
    cpcCode: '01355.01',
  },
  {
    commoditySlug: 'fresh-oranges',
    faostatItemCode: '490',
    faostatItemName: 'Oranges',
    cpcCode: '01323',
  },
  {
    commoditySlug: 'fresh-pineapples',
    faostatItemCode: '574',
    faostatItemName: 'Pineapples',
    cpcCode: '01318',
  },
  {
    commoditySlug: 'fresh-strawberries',
    faostatItemCode: '544',
    faostatItemName: 'Strawberries',
    cpcCode: '01354',
  },
  {
    commoditySlug: 'fresh-sweetcorn',
    faostatItemCode: '446',
    faostatItemName: 'Green corn (maize)',
    cpcCode: '01290.01',
  },
  {
    commoditySlug: 'fresh-tomatoes',
    faostatItemCode: '388',
    faostatItemName: 'Tomatoes',
    cpcCode: '01234',
  },
  {
    commoditySlug: 'green-coffee',
    faostatItemCode: '656',
    faostatItemName: 'Coffee; green',
    cpcCode: '01610',
  },
  {
    commoditySlug: 'groundnuts',
    faostatItemCode: '242',
    faostatItemName: 'Groundnuts; excluding shelled',
    cpcCode: '0142',
  },
  {
    commoditySlug: 'hazelnuts',
    faostatItemCode: '225',
    faostatItemName: 'Hazelnuts; in shell',
    cpcCode: '01374',
  },
  {
    commoditySlug: 'head-cabbage',
    faostatItemCode: '358',
    faostatItemName: 'Cabbages',
    cpcCode: '01212',
  },
  {
    commoditySlug: 'hemp-fibre',
    faostatItemCode: '777',
    faostatItemName: 'True hemp; raw or retted',
    cpcCode: '01929.02',
  },
  {
    commoditySlug: 'hen-eggs',
    faostatItemCode: '1062',
    faostatItemName: 'Hen eggs in shell; fresh',
    cpcCode: '0231',
  },
  {
    commoditySlug: 'jute-fibre',
    faostatItemCode: '780',
    faostatItemName: 'Jute; raw or retted',
    cpcCode: '01922.01',
  },
  {
    commoditySlug: 'lentils',
    faostatItemCode: '201',
    faostatItemName: 'Lentils; dry',
    cpcCode: '01704',
  },
  {
    commoditySlug: 'maize-grain',
    faostatItemCode: '56',
    faostatItemName: 'Maize (corn)',
    cpcCode: '0112',
  },
  {
    commoditySlug: 'milled-rice',
    faostatItemCode: '31',
    faostatItemName: 'Rice; milled',
    cpcCode: '23161.02',
  },
  {
    commoditySlug: 'millet-grain',
    faostatItemCode: '79',
    faostatItemName: 'Millet',
    cpcCode: '0118',
  },
  {
    commoditySlug: 'oat-grain',
    faostatItemCode: '75',
    faostatItemName: 'Oats',
    cpcCode: '0117',
  },
  {
    commoditySlug: 'pigeon-peas',
    faostatItemCode: '197',
    faostatItemName: 'Pigeon peas; dry',
    cpcCode: '01707',
  },
  {
    commoditySlug: 'pistachios',
    faostatItemCode: '223',
    faostatItemName: 'Pistachios; in shell',
    cpcCode: '01375',
  },
  {
    commoditySlug: 'rapeseed',
    faostatItemCode: '270',
    faostatItemName: 'Rape or colza seed',
    cpcCode: '01443',
  },
  {
    commoditySlug: 'raw-cow-milk',
    faostatItemCode: '882',
    faostatItemName: 'Raw milk of cattle',
    cpcCode: '02211',
  },
  {
    commoditySlug: 'raw-wool',
    faostatItemCode: '987',
    faostatItemName: 'Shorn wool; greasy; including fleece-washed shorn wool',
    cpcCode: '02941',
  },
  {
    commoditySlug: 'rice-paddy',
    faostatItemCode: '27',
    faostatItemName: 'Rice',
    cpcCode: '0113',
  },
  {
    commoditySlug: 'rye-grain',
    faostatItemCode: '71',
    faostatItemName: 'Rye',
    cpcCode: '0116',
  },
  {
    commoditySlug: 'safflower-seed',
    faostatItemCode: '280',
    faostatItemName: 'Safflower seed',
    cpcCode: '01446',
  },
  {
    commoditySlug: 'sesame-seed',
    faostatItemCode: '289',
    faostatItemName: 'Sesame seed',
    cpcCode: '01444',
  },
  {
    commoditySlug: 'sorghum-grain',
    faostatItemCode: '83',
    faostatItemName: 'Sorghum',
    cpcCode: '0114',
  },
  {
    commoditySlug: 'soybeans',
    faostatItemCode: '236',
    faostatItemName: 'Soya beans',
    cpcCode: '0141',
  },
  {
    commoditySlug: 'sugar-beet',
    faostatItemCode: '157',
    faostatItemName: 'Sugar beet',
    cpcCode: '01801',
  },
  {
    commoditySlug: 'sugarcane',
    faostatItemCode: '156',
    faostatItemName: 'Sugar cane',
    cpcCode: '01802',
  },
  {
    commoditySlug: 'sunflower-seed',
    faostatItemCode: '267',
    faostatItemName: 'Sunflower seed',
    cpcCode: '01445',
  },
  {
    commoditySlug: 'sweet-potatoes',
    faostatItemCode: '122',
    faostatItemName: 'Sweet potatoes',
    cpcCode: '01530',
  },
  {
    commoditySlug: 'tea-leaf',
    faostatItemCode: '667',
    faostatItemName: 'Tea leaves',
    cpcCode: '01620',
  },
  {
    commoditySlug: 'triticale-grain',
    faostatItemCode: '97',
    faostatItemName: 'Triticale',
    cpcCode: '01191',
  },
  {
    commoditySlug: 'vanilla-beans',
    faostatItemCode: '692',
    faostatItemName: 'Vanilla; raw',
    cpcCode: '01658',
  },
  {
    commoditySlug: 'walnuts',
    faostatItemCode: '222',
    faostatItemName: 'Walnuts; in shell',
    cpcCode: '01376',
  },
  {
    commoditySlug: 'ware-potatoes',
    faostatItemCode: '116',
    faostatItemName: 'Potatoes',
    cpcCode: '01510',
  },
  {
    commoditySlug: 'wheat-grain',
    faostatItemCode: '15',
    faostatItemName: 'Wheat',
    cpcCode: '0111',
  },
  {
    commoditySlug: 'yams',
    faostatItemCode: '137',
    faostatItemName: 'Yams',
    cpcCode: '01540',
  },
];

/** Commodities deliberately NOT mapped, each with its reason. */
export const FAOSTAT_TRADE_EXCLUSIONS: FaostatExclusion[] = [
  {
    commoditySlug: 'durum-wheat-grain',
    reason: 'no-trade-item',
    note: 'FAOSTAT does not split wheat by type in the trade domain; only the combined item "Wheat" (15) exists.',
  },
  {
    commoditySlug: 'teff-grain',
    reason: 'no-trade-item',
    note: 'No FAOSTAT trade item exists for teff.',
  },
  {
    commoditySlug: 'seed-cotton',
    reason: 'no-trade-item',
    note: 'Seed cotton has a FAOSTAT production item (328) but NO trade item: it is ginned at origin and moves as lint and cottonseed. A production code therefore does not imply trade data.',
  },
  {
    commoditySlug: 'coffee-cherries',
    reason: 'no-trade-item',
    note: 'Coffee cherries are processed at origin and are not internationally traded as such; no FAOSTAT trade item exists.',
  },
  {
    commoditySlug: 'goat-milk',
    reason: 'no-trade-item',
    note: 'No FAOSTAT trade item exists for raw goat milk.',
  },
  {
    commoditySlug: 'sheep-milk',
    reason: 'no-trade-item',
    note: 'FAOSTAT lists item 982 (Raw milk of sheep) but it carries no observations in the trade matrix for the covered years — raw sheep milk is not internationally traded in reported volumes.',
  },
  {
    commoditySlug: 'table-grapes',
    reason: 'aggregate-item',
    note: 'The only matching item, "Grapes" (560), combines table and wine grapes. Attributing it to either would misstate both.',
  },
  {
    commoditySlug: 'wine-grapes',
    reason: 'aggregate-item',
    note: 'The only matching item, "Grapes" (560), combines table and wine grapes. Attributing it to either would misstate both.',
  },
  {
    commoditySlug: 'fresh-mangoes',
    reason: 'aggregate-item',
    note: 'Item 571 is "Mangoes; guavas and mangosteens" — three distinct fruits. Attributing the whole item to mangoes would overstate mango trade.',
  },
  {
    commoditySlug: 'fresh-lemons',
    reason: 'aggregate-item',
    note: 'Item 497 is "Lemons and limes", combining two distinct commodities.',
  },
  {
    commoditySlug: 'fresh-carrots',
    reason: 'aggregate-item',
    note: 'Item 426 is "Carrots and turnips", combining two distinct commodities.',
  },
  {
    commoditySlug: 'fresh-lettuce',
    reason: 'aggregate-item',
    note: 'Item 372 is "Lettuce and chicory", combining two distinct commodities.',
  },
  {
    commoditySlug: 'fresh-broccoli',
    reason: 'aggregate-item',
    note: 'Item 393 is "Cauliflowers and broccoli", combining two distinct commodities.',
  },
  {
    commoditySlug: 'green-cardamom',
    reason: 'aggregate-item',
    note: 'Item 702 is "Nutmeg; mace; cardamoms; raw", combining three distinct spices.',
  },
  {
    commoditySlug: 'sweet-peppers',
    reason: 'aggregate-item',
    note: 'Item 401 is "Chillies and peppers; green", combining sweet peppers with green chillies, which this platform models separately.',
  },
  {
    commoditySlug: 'garlic-bulbs',
    reason: 'ambiguous-item',
    note: 'Item 406 is labelled "Green garlic" (CPC 01252). Whether it corresponds to the dry bulb garlic modelled here could not be established from the published item definition, so no mapping is asserted.',
  },
  {
    commoditySlug: 'cattle-hides',
    reason: 'split-item',
    note: 'Cattle hides are split across items 920 (wet-salted), 921 (dry-salted), and 922 (nes) by preservation state, with no single item for the commodity. Summing them would mix preservation states carrying different weights.',
  },
];

export const FAOSTAT_ITEM_BY_COMMODITY: ReadonlyMap<string, string> = new Map(
  FAOSTAT_TRADE_CONCORDANCE.map((e) => [e.commoditySlug, e.faostatItemCode]),
);

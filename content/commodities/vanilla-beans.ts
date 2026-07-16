import type { CommodityContent } from '@/types/content';

export const vanillaBeans: CommodityContent = {
  id: 'commodity-vanilla-beans',
  slug: 'vanilla-beans',
  contentType: 'commodity',
  title: 'Vanilla Beans',
  alternativeNames: ['Cured vanilla pods', 'Vanilla pods', 'Gourmet vanilla'],
  category: 'Spice commodity',
  subcategory: 'Cured pod spice',
  commodityClass: 'spice',
  physicalForm: 'other',
  harvestedPart:
    'Capsule (the pod, picked green and mature, then cured over months)',
  sourceCrop: { type: 'crop', slug: 'vanilla' },
  summary:
    'Vanilla beans are the cured pods of the vanilla orchid. Picked green they have no flavour and no scent at all: the vanilla is created entirely by a months-long curing process, which is why this is among the most labour-intensive and highest-priced commodities in agriculture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vanilla beans are the traded commodity of the vanilla orchid: pods picked at full green maturity, then cured — killed, sweated, dried, and conditioned — over a period of months until they become the dark, supple, intensely aromatic beans of commerce. The commodity moves in small quantities and at very high value, and it is bought by extractors and by the food trade against grade descriptions built around appearance, moisture, and flavour.',
    },
    {
      type: 'paragraph',
      text: 'No other commodity in this reference demonstrates the crop–commodity distinction so starkly. A vanilla pod straight off the vine is green, odourless, and worthless as a spice: it contains no vanillin in free form and does not smell of vanilla in the slightest. Everything the buyer is paying for is manufactured after harvest by the curer. The vanilla bean is, in the most literal sense, made rather than grown — and the growing of the orchid is covered on the vanilla crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Spice' },
    {
      label: 'Parent crop',
      value: 'Vanilla orchid (Vanilla planifolia and related species)',
    },
    { label: 'Harvested part', value: 'Capsule (pod), picked green' },
    {
      label: 'Defining post-harvest step',
      value: 'Curing — killing, sweating, drying, and conditioning over months',
    },
    {
      label: 'Distinguishing fact',
      value:
        'Green pods have no vanilla aroma; the flavour is created entirely by curing',
    },
    {
      label: 'Key quality attributes',
      value:
        'Length, moisture and suppleness, vanillin content, appearance, freedom from splits',
    },
    {
      label: 'Commercial character',
      value:
        'One of the most labour-intensive and highest-value agricultural commodities',
    },
  ],
  sections: [
    {
      id: 'green-pods',
      heading: 'The green pod has no vanilla in it',
      body: [
        {
          type: 'paragraph',
          text: 'A mature green vanilla pod contains the aroma of vanilla only in locked-up form. The vanillin and the other flavour compounds are present as glucosides — bound to sugars, odourless, and inert — held in the pod’s tissue and physically separated from the enzymes that could free them. The pod smells of nothing much because, chemically speaking, the vanilla has not been released.',
        },
        {
          type: 'paragraph',
          text: 'Curing is the deliberate breaking of that separation. The process kills the pod, which ends its life as an organ and destroys the compartmentalisation, letting the pod’s own enzymes reach the bound compounds and split them, releasing free vanillin and the hundreds of minor compounds that give real vanilla its complexity. Harvest maturity governs how much potential is there to release: picked too early, a pod has too little bound precursor and will never cure into a good bean, no matter how skilfully it is handled afterwards.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The flavour is created, not preserved',
          text: 'Most curing and drying operations in agriculture preserve something already present. Vanilla curing does the opposite: it generates the flavour that defines the commodity. This is why the commodity page, not the crop page, is where vanilla quality is decided.',
        },
      ],
    },
    {
      id: 'curing',
      heading: 'The four stages of curing',
      body: [
        {
          type: 'paragraph',
          text: 'Curing is conventionally described in four stages, running from days to months. Killing arrests the pod’s vegetative development and breaks down its cell structure — most commonly by immersing the pods briefly in hot water, though sun, freezing, and other methods are used in different origins. Sweating follows: the hot pods are wrapped and held warm and humid so that the enzymatic reactions run hard while water begins to leave, and this is where the colour turns dark and the aroma first appears.',
        },
        {
          type: 'paragraph',
          text: 'Drying then reduces the moisture slowly — commonly alternating sun and shade over weeks — to a level at which the pods are stable but still pliable, since a bean is meant to be supple rather than brittle. Finally, conditioning holds the beans in closed boxes for months, during which the aroma matures and rounds out. Each stage is a judgement call, and the whole sequence is done largely by hand and by eye.',
        },
        {
          type: 'paragraph',
          text: 'This is the labour that the price reflects. Beans are handled individually, many times over, across months — sorted, wrapped, spread, gathered, graded, and bundled — by people reading colour, smell, and flexibility rather than instruments. Combined with hand pollination of the crop and the ever-present risk of theft from a commodity this valuable, it makes vanilla one of the most labour-intensive products in world agriculture, and one whose quality depends on skill that cannot be automated away.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No curing figures are given here',
          text: 'Killing temperatures and immersion times, sweating and drying schedules, conditioning duration, and target moisture for vanilla are origin- and curer-specific and belong to sourced guidance. AgricultureID does not publish figures.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality, grading, and adulteration',
      body: [
        {
          type: 'paragraph',
          text: 'Vanilla is graded first on physical attributes — length above all, which drives the classic bean grades, along with appearance, colour, oiliness of the surface, and the absence of splits — and then on moisture and vanillin content. Moisture is unusually central here: it determines whether a bean is supple and plump or dry and hard, and the high-moisture "gourmet" beans sold whole to the food trade are graded quite separately from the drier "extraction" beans destined to be processed into vanilla extract, where appearance hardly matters and vanillin content is what is bought.',
        },
        {
          type: 'list',
          items: [
            'Splits — pods that opened during curing, downgraded from whole-bean grades',
            'Mould on beans cured or stored too moist',
            'Brittleness and cracking from over-drying',
            'Under-cured beans lacking developed aroma',
            'Immature pods that had too little precursor to cure well',
            'Short and undersized beans below length grade',
          ],
        },
        {
          type: 'paragraph',
          text: 'Vanilla’s value makes it a persistent target for fraud, and that is a commercial reality of the commodity rather than an aside. Adulteration takes several forms — synthetic vanillin added to beans or to extracts, beans from cheaper species passed off as planifolia, cured beans re-wetted to gain weight, and origin misdeclaration — and buyers of high-value lots use authentication testing rather than relying on appearance. It is worth stating plainly that most vanilla flavour consumed in the world is synthetic vanillin from other feedstocks entirely, and that product has no relationship to this commodity beyond the shared molecule.',
        },
      ],
    },
    {
      id: 'storage-and-trade',
      heading: 'Storage and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Cured beans are traded in bundles, tied and packed in boxes or tins, and they occupy an unusual middle ground in storage terms: they are neither a fresh commodity nor a fully dried one. A bean has to keep enough moisture to stay supple, which means it never reaches the dryness that makes most spices safely inert, and so it remains vulnerable to mould if held warm or humid, while air exposure and over-dry conditions cost it aroma and pliability. Beans are kept in sealed containers at moderate temperature, and lots are inspected during storage because a mould outbreak can move through a packed bundle.',
        },
        {
          type: 'paragraph',
          text: 'Production is concentrated in a small number of tropical origins, which combined with the length of the curing cycle makes vanilla notoriously volatile in price: a cyclone or a poor season in a major origin is felt across the world market, and the supply cannot respond quickly because the vines take years to come into bearing and the beans take months to cure.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Bean length',
    'Moisture content and suppleness',
    'Vanillin content',
    'Appearance, colour, and surface oiliness',
    'Freedom from splits',
    'Aroma development',
  ],
  commonDefects: [
    'Split pods',
    'Mould from curing or storage too moist',
    'Brittleness from over-drying',
    'Under-cured beans with undeveloped aroma',
    'Immature pods cured from too little precursor',
    'Short and undersized beans',
  ],
  moistureContext:
    'Unusually among dried spices, vanilla is deliberately not dried to inertness: beans retain enough moisture to stay supple, which is a graded attribute and separates gourmet from extraction grades. That retained moisture is also why mould remains a live risk in store.',
  storageContext:
    'Held in sealed boxes or tins at moderate temperature, in bundles; neither fresh nor fully dry, so lots are inspected for mould, while over-dry or exposed conditions cost aroma and suppleness.',
  transportContext:
    'Moves in small, high-value consignments in sealed packaging; theft and substitution are real risks in the chain, and authentication testing is common for high-value lots.',
  majorProducingRegions: [
    'Western Indian Ocean islands',
    'Southeast Asia',
    'Central America and the Caribbean',
    'Pacific islands',
  ],
  majorTradingRegions: ['Europe', 'North America', 'Western Indian Ocean'],
  commodityCodes: [
    {
      system: 'HS',
      code: '0905.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Vanilla, neither crushed nor ground. Crushed or ground vanilla falls under 0905.20.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Vanilla as a traded spice commodity, curing practice, and production origins',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Vanilla curing stages and the enzymatic development of vanillin from glucosides',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Vanillin precursors in green pods and flavour development during curing',
    },
    {
      sourceId: 'britannica',
      citedFor:
        'Vanilla bean grades, trade context, and synthetic vanillin substitution',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade; production concentrated in a small number of humid tropical origins. Grade descriptions are origin- and buyer-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, curing protocol, or customs classification.',
    'No curing temperature, schedule, moisture, or vanillin figures are given here — these are origin- and curer-specific and belong to sourced guidance.',
    'Vanilla grade names and length classes differ by origin and buyer; there is no universal grading scale for the commodity.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Vanilla Beans: The Cured, Labour-Intensive Spice',
    description:
      'Vanilla beans as a commodity: why green pods have no aroma, the four curing stages that create the flavour, grading by length and moisture, and fraud risk.',
    keywords: [
      'vanilla beans',
      'vanilla curing',
      'vanillin glucoside',
      'vanilla grading',
      'gourmet vanilla',
    ],
  },
  structuredData: { article: true },
};

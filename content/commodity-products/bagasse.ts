import type { CommodityProductContent } from '@/types/content';

export const bagasse: CommodityProductContent = {
  id: 'commodity-product-bagasse',
  slug: 'bagasse',
  contentType: 'commodity-product',
  title: 'Bagasse',
  alternativeNames: ['Cane bagasse', 'Crushed cane fibre', 'Mill bagasse'],
  category: 'Manufacturing by-product',
  subcategory: 'Fibrous residue of cane crushing',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'sugarcane' },
  physicalForm: 'other',
  summary:
    'Bagasse is the wet fibrous residue left after cane is crushed and its juice extracted. Most of it is burnt on the spot to raise the steam and power the mill runs on, which makes a cane factory unusual among food processors: it is fuelled by its own waste.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bagasse is what is left of a cane stalk when the juice has been taken out of it: a damp, pale, shredded mass of fibre leaving the last mill in the crushing train. By volume it is the largest single stream a cane factory produces, and by value per tonne it is the smallest — the definition of a by-product.',
    },
    {
      type: 'paragraph',
      text: 'What it does, however, is remarkable. A cane mill needs a great deal of steam and electricity, and it burns bagasse to make both, generally covering its own demand and often exporting power to the grid besides. A sugar factory is therefore energy self-sufficient in a way that almost no other food processing plant is, and it achieves that by burning the residue of the very commodity it is processing, arriving in step with the need for it.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of cane crushing' },
    { label: 'Made from', value: 'Sugarcane (Saccharum spp. hybrids)' },
    {
      label: 'What it is',
      value: 'The stalk fibre remaining after juice extraction',
    },
    { label: 'Condition as produced', value: 'Wet, bulky, and low in density' },
    {
      label: 'Dominant use',
      value: 'Boiler fuel for the mill’s own steam and power',
    },
    {
      label: 'Other uses',
      value: 'Paper and board, panels, moulded products, feed',
    },
    {
      label: 'Two fractions',
      value: 'True fibre and pith, separated by depithing',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What bagasse is',
      body: [
        {
          type: 'paragraph',
          text: 'The cane stalk is a composite: long structural fibres running lengthwise, and a soft parenchyma pith between them that holds most of the juice. Crushing tears the structure open to release the juice, so bagasse contains both — mixed, shredded, and still wet, since no mill extracts every drop and no mill dries the residue before burning it.',
        },
        {
          type: 'paragraph',
          text: 'The fibre-and-pith distinction is the key to bagasse’s non-fuel uses. Pith is short, absorbent, and useless for making paper, while the long fibres are genuinely valuable pulp material. Any process making paper or board from bagasse therefore starts with depithing — separating the two — and the pith it rejects goes back to the boiler. Burning, by contrast, takes both without complaint, which is one reason burning wins so often.',
        },
      ],
    },
    {
      id: 'energy',
      heading: 'Bagasse as fuel',
      body: [
        {
          type: 'paragraph',
          text: 'The arithmetic of a cane mill is neat: the crop delivers both the sugar and the fuel needed to extract it, at the same time and to the same place. Bagasse is fed straight from the crushing train to the boilers, raising steam that drives the mill and heats the evaporators and pans, with the exhaust and turbine stages generating electricity. During the crushing season, a well-run factory buys little or no outside energy.',
        },
        {
          type: 'paragraph',
          text: 'Where boilers are efficient enough, a mill produces surplus bagasse and surplus power. Cogeneration for export to the grid has become a substantial second business for cane industries in several countries, and it changes the economics of the residue: bagasse that once had to be got rid of now has an opportunity cost, and mills weigh burning it against selling it or converting it. Research and commercial interest in cellulosic ethanol from bagasse rests on the same fact — a large, already-collected, already-shredded stream of lignocellulose sitting in one place.',
        },
      ],
    },
    {
      id: 'other-uses-and-handling',
      heading: 'Other uses, storage, and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond the boiler, bagasse pulp goes into paper and board where wood is scarce, and into particleboard and fibreboard. Moulded bagasse tableware and packaging have grown as substitutes for plastics. It is also used as animal feed, though its value there is modest, and as a mushroom substrate and a soil amendment. None of these compete with fuel use at scale in most industries, because the mill’s own energy demand generally comes first.',
        },
        {
          type: 'paragraph',
          text: 'Storing bagasse is genuinely awkward. It arrives wet, it is bulky and low in density, and a pile of it is biologically active: it composts, it heats, and heaps have been known to reach ignition, so bagasse yards are laid out and managed with fire in mind. It also degrades in storage, losing fibre quality for pulping. Mills that must hold bagasse over a shutdown bale or compact it and manage the stack deliberately; most simply arrange to burn it as it comes.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No figures given',
          text: 'Bagasse moisture, fibre content, calorific value, and the surplus a mill generates depend on cane variety, fibre content, extraction, and boiler design. AgricultureID publishes none of these — they are mill- and industry-specific.',
        },
      ],
    },
  ],
  primaryUses: ['energy'],
  secondaryUses: ['industrial', 'feed'],
  majorQualityAttributes: [
    'Moisture content as produced',
    'Fibre-to-pith ratio',
    'Residual sugar carried over',
    'Ash and soil contamination',
    'Freedom from degradation in storage',
  ],
  processContext:
    'Leaves the crushing train wet after cane juice extraction; taken directly to boilers in most mills, or depithed where the long fibre is wanted for pulp and panel products.',
  storageContext:
    'Difficult to store: wet, bulky, and biologically active, so piles compost, heat, and pose a fire risk, and pulping quality falls with time. Most mills burn it as it is produced.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2303.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Beet-pulp, bagasse and other waste of sugar manufacture. The subheading groups the solid residues of both cane and beet processing.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'machinery', slug: 'sugarcane-harvester' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'raw-sugar' },
    { type: 'commodity-product', slug: 'beet-pulp' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Bagasse as a sugar-industry by-product and its energy and material uses',
    },
    {
      sourceId: 'embrapa',
      citedFor:
        'Bagasse in cane mill energy systems, cogeneration, and cellulosic conversion',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Sugar processing by-product streams and mill energy context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global cane-processing regions. Grid export arrangements for mill cogeneration are jurisdiction-specific.',
  limitations: [
    'This is a reference description of a by-product, not an engineering, fuel, or feed specification.',
    'No moisture, fibre, calorific, or surplus figures are given here — they depend on cane, extraction, and mill design.',
    'The balance between burning bagasse and using it for materials differs by industry and country and changes with energy prices and policy.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bagasse: Fibrous By-Product of Cane Crushing',
    description:
      'Bagasse as a by-product: the wet cane fibre left after juice extraction, why mills burn it for their own steam and power, and its pulp and panel uses.',
    keywords: [
      'bagasse',
      'cane fibre',
      'mill cogeneration',
      'depithing',
      'sugar by-product',
    ],
  },
  structuredData: { article: true },
};

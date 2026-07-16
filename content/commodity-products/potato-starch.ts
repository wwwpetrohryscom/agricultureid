import type { CommodityProductContent } from '@/types/content';

export const potatoStarch: CommodityProductContent = {
  id: 'commodity-product-potato-starch',
  slug: 'potato-starch',
  contentType: 'commodity-product',
  title: 'Potato Starch',
  alternativeNames: ['Native potato starch', 'Farina'],
  category: 'Primary extracted product',
  subcategory: 'Root and tuber starch',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'ware-potatoes' },
  physicalForm: 'other',
  summary:
    'Potato starch is starch extracted from potato tubers by wet processing and dried to a fine white powder. Its unusually large granules and naturally bound phosphate give it a distinctive high-viscosity, clear-pasting behaviour that separates it from cereal starches.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potato starch is what a starch factory takes out of a potato. The tuber stores its energy as starch granules packed inside its cells; extraction consists of tearing those cells open, washing the granules free of everything else the tuber contained, and drying them. Nothing is added and nothing is created — the product is the granule the plant made, isolated.',
    },
    {
      type: 'paragraph',
      text: 'It is not interchangeable with maize or wheat starch. Potato starch granules are much larger than cereal starch granules and carry phosphate groups bound into the starch molecule itself, and those two facts give the product a functional profile that users choose it specifically for. Where a formulator specifies potato starch, a cereal starch is generally not a drop-in substitute.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of starch extraction' },
    { label: 'Made from', value: 'Potato tubers (Solanum tuberosum)' },
    {
      label: 'Fraction isolated',
      value: 'Starch granules from the tuber cells',
    },
    {
      label: 'Process type',
      value: 'Wet extraction — rasping, washing, dewatering, drying',
    },
    {
      label: 'Distinguishing feature',
      value: 'Large granules and naturally bound phosphate',
    },
    {
      label: 'Principal uses',
      value: 'Food texturising and industrial applications',
    },
    {
      label: 'Companion streams',
      value: 'Potato fruit juice (protein) and fibre pulp',
    },
  ],
  sections: [
    {
      id: 'raw-material',
      heading: 'Which potatoes make starch',
      body: [
        {
          type: 'paragraph',
          text: 'A starch factory buys dry matter, not appearance. It cares nothing for skin finish, shape, or size — the qualities the table market pays for — and everything for how much starch a tonne of tubers delivers. Two supply routes follow from that. Dedicated starch varieties, bred for high dry matter and grown on contract for the purpose, are a commercial category of their own; and ware potatoes that fall outside table specification for cosmetic reasons find a home here, since a misshapen tuber makes exactly the same starch as a handsome one.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'How this pathway is modelled',
          text: 'AgricultureID links potato starch to the traded potato commodity, which is where the ware trade meets starch extraction. Where starch is grown for deliberately, high-dry-matter starch varieties form a distinct commercial category that this reference does not model separately.',
        },
      ],
    },
    {
      id: 'extraction',
      heading: 'How it is extracted',
      body: [
        {
          type: 'paragraph',
          text: 'Extraction is a wet, mechanical process and runs quickly, because a rasped potato oxidises and spoils in short order. Tubers are washed, then rasped to rupture the cells and release the granules into a slurry. The starch is washed out of the fibrous pulp, separated from the soluble fraction, refined through successive washing stages, dewatered, and dried. Starch granules are dense and insoluble in cold water, which is what makes them separable this way at all.',
        },
        {
          type: 'paragraph',
          text: 'Two other streams leave the factory with the starch. The fibrous residue — the ruptured cell walls — goes to feed. The soluble fraction, known in the industry as potato fruit juice, carries the tuber’s proteins and is recovered as a protein product where the plant is equipped for it. Both are real outputs; neither is described further here.',
        },
      ],
    },
    {
      id: 'properties-and-uses',
      heading: 'Properties and uses',
      body: [
        {
          type: 'paragraph',
          text: 'Potato starch granules are the largest of the commercial starches, and the granule carries phosphate groups covalently attached to the starch. The phosphate makes the granule swell readily and strongly when heated in water, so potato starch pastes at a comparatively low temperature, reaches a high peak viscosity, and produces a notably clear, bland, long-textured paste. It also holds a great deal of water. These are the reasons users choose it.',
        },
        {
          type: 'list',
          items: [
            'Food — thickening, binding, and texturising, where clarity and neutral flavour matter',
            'Industrial — paper and board manufacture as a surface and wet-end additive',
            'Industrial — adhesives and textile sizing',
            'Feedstock — the base for modified and derivatised starches',
          ],
        },
        {
          type: 'paragraph',
          text: 'The same properties are also its limits: the high peak viscosity falls away under prolonged heating and shear, and the paste is not stable to the conditions many processed foods impose. Much potato starch is therefore chemically or physically modified before use, and native starch and modified starch occupy distinct places in the market.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'The traded product is a dry, fine, free-flowing powder shipped in bags, big bags, and bulk. It takes up moisture from humid air and cakes, so it is kept dry and sealed; damp starch is both a quality and a microbiological problem. Like any fine organic powder handled in bulk, it presents a dust explosion hazard, and pneumatic conveying and silo systems are designed and operated with that in view.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Starch purity',
    'Moisture content',
    'Whiteness and colour',
    'Ash and residual protein',
    'Viscosity profile',
    'Particle size and freedom from specks',
  ],
  processContext:
    'Extracted by wet processing: potatoes are washed and rasped to release starch granules, which are washed free of fibre and solubles, refined, dewatered, and dried to a powder.',
  storageContext:
    'Shipped and stored dry in bags, big bags, and bulk; hygroscopic and prone to caking in humid air, and a dust explosion hazard when handled as a bulk powder.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1108.13',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Potato starch.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'post-harvest', slug: 'potato-storage' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Potato starch as an extracted product and its food and industrial uses',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Potato dry matter, starch extraction context, and processing categories',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Starch potato sector structure and product streams',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with starch potato processing concentrated in a few temperate regions. Food-ingredient naming and permitted modifications are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a processing specification, formulation, or food-standards compliance statement.',
    'No starch contents, extraction yields, granule sizes, gelatinisation temperatures, or viscosity figures are given here — they are variety-, plant-, and method-specific.',
    'Permitted starch modifications and their labelling differ by jurisdiction; consult the applicable food authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Potato Starch: Extracted Tuber Starch',
    description:
      'Potato starch as a commodity product: how wet extraction isolates the granule, why bound phosphate sets it apart from cereal starches, and its uses.',
    keywords: [
      'potato starch',
      'starch extraction',
      'native starch',
      'starch potatoes',
      'potato fruit juice',
    ],
  },
  structuredData: { article: true },
};

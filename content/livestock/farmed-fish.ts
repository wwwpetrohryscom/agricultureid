import type { LivestockContent } from '@/types/content';

export const farmedFish: LivestockContent = {
  id: 'livestock-farmed-fish',
  slug: 'farmed-fish',
  contentType: 'livestock',
  title: 'Farmed Fish',
  alternativeNames: [
    'Aquaculture finfish',
    'Food fish (e.g. tilapia, carp, catfish, salmon)',
  ],
  category: 'Livestock',
  subcategory: 'Aquaculture (finfish)',
  primaryProducts: [
    'Fish meat (food fish)',
    'Roe (in some species/systems)',
    'Fish by-products',
  ],
  productionSystems: [
    'Pond-based aquaculture',
    'Cage and pen culture',
    'Recirculating aquaculture systems (RAS)',
    'Integrated agriculture–aquaculture systems',
  ],
  summary:
    'Farmed fish are finfish species such as tilapia, carp, and salmon raised in ponds, cages, tanks, or recirculating systems for food. Aquaculture is one of the fastest-growing sources of animal protein worldwide, with production systems and feeding strategies that vary widely by species and region.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Farmed fish encompass a wide range of finfish species — including tilapia, various carps, catfish, and salmon, among many others — raised under managed conditions rather than caught from wild populations. Species selection and system design depend heavily on local water resources, climate, and market demand, so aquaculture looks very different in a small earthen pond raising tilapia than in a marine cage system raising salmon.',
    },
    {
      type: 'paragraph',
      text: 'Unlike terrestrial livestock, farmed fish are entirely dependent on the quality of the water they live in, which must supply oxygen and remove waste in addition to whatever role feed plays in nutrition. This makes water-quality management as central to aquaculture as feeding and health management are to other livestock sectors.',
    },
  ],
  keyFacts: [
    {
      label: 'Typical species',
      value:
        'Tilapia, carp species, catfish, salmon, and many others (varies regionally)',
    },
    {
      label: 'Core requirement',
      value:
        'Water quality (oxygen, temperature, waste removal) alongside feed and health',
    },
    { label: 'Primary product', value: 'Food fish (whole or processed)' },
    {
      label: 'Feed base',
      value:
        'Formulated feeds and/or natural pond productivity, depending on species and system',
    },
    {
      label: 'Main systems',
      value:
        'Ponds, cages/pens, tanks, and recirculating aquaculture systems (RAS)',
    },
    {
      label: 'Global role',
      value: 'One of the fastest-growing sources of farmed animal protein',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Aquaculture spans an enormous range of species and systems, from extensive pond polyculture integrated with crop or livestock farming, to intensive cage culture in open water, to highly controlled recirculating systems. The choice of species and system depends on water availability and quality, climate, capital investment, and target markets.',
        },
      ],
    },
    {
      id: 'species-and-systems',
      heading: 'Species and systems',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Pond culture',
              description:
                'Earthen or lined ponds, often used for species such as tilapia and carp, sometimes integrated with crop or livestock production.',
            },
            {
              term: 'Cage and pen culture',
              description:
                'Net enclosures in lakes, rivers, or coastal waters, used for species including salmon and some tilapia and carp production.',
            },
            {
              term: 'Recirculating aquaculture systems (RAS)',
              description:
                'Land-based tanks that filter and reuse water, allowing production with reduced water use and greater environmental control regardless of local climate.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Species and system choice is tied closely to local water resources, climate, and infrastructure; there is no single standard aquaculture system used worldwide.',
        },
      ],
    },
    {
      id: 'feeding-and-water-quality',
      heading: 'Feeding and water quality',
      body: [
        {
          type: 'paragraph',
          text: 'Farmed fish are fed formulated diets, natural pond productivity (plankton and other organisms), or a combination, depending on species and system. Herbivorous and omnivorous species such as tilapia and carp can make substantial use of plant-based feed ingredients and natural pond food webs, while carnivorous species such as salmon require higher levels of protein and fish oil or alternative concentrated ingredients. Regardless of feed type, maintaining adequate dissolved oxygen, appropriate temperature, and low levels of ammonia and other wastes is essential to fish health and growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Feed formulation and water-quality targets are species- and system-specific. Aquaculture extension services and qualified fish-health professionals should guide specific feeding and water-management decisions.',
        },
      ],
    },
    {
      id: 'health-and-welfare',
      heading: 'Health and welfare',
      body: [
        {
          type: 'paragraph',
          text: 'Fish health and welfare depend on water quality, stocking density, biosecurity to limit the introduction and spread of pathogens, and appropriate handling during grading, transport, and harvest.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Regulatory and professional guidance',
          text: 'Aquatic animal health, permitted treatments, and disease reporting are governed by regional and international regulations, including standards set by the World Organisation for Animal Health (WOAH). AgricultureID does not provide treatment instructions; follow local law and consult qualified aquatic animal health professionals.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Aquaculture has grown rapidly as a source of animal protein and now supplies a large share of the fish consumed globally, alongside wild capture fisheries. Integrated systems that combine fish culture with crop or livestock production, such as rice–fish farming, can make efficient use of land, water, and nutrients, while feed sourcing, effluent management, and disease control remain key considerations that vary by system and region.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  geographicScope:
    'Global overview; species, systems, regulations, and water-resource contexts vary widely by region.',
  climateContext:
    'Water temperature strongly affects farmed-fish species selection, growth rates, and system design, from cold-water salmon culture to warm-water tilapia and carp culture.',
  limitations: [
    'This is a general, species-general overview of farmed finfish, not species-specific husbandry or system-design guidance.',
    'Health, treatment, and environmental-compliance practices are governed by local and international regulation and are not detailed here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global aquaculture production and systems' },
    { sourceId: 'woah', citedFor: 'Aquatic animal health standards' },
    {
      sourceId: 'cgiar',
      citedFor: 'Aquaculture research and integrated systems',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Aquaculture feed and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Farmed Fish',
    description:
      'A reference on farmed fish: aquaculture systems, feeding and water-quality management, health and welfare, and the role of aquaculture in food production.',
    keywords: [
      'farmed fish',
      'aquaculture',
      'tilapia and carp',
      'fish farming',
    ],
  },
  structuredData: { article: true },
};

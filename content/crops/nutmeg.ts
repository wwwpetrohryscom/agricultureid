import type { CropContent } from '@/types/content';

export const nutmeg: CropContent = {
  id: 'crop-nutmeg',
  slug: 'nutmeg',
  contentType: 'crop',
  title: 'Nutmeg',
  scientificName: 'Myristica fragrans',
  category: 'Spice crop',
  subcategory: 'Perennial tropical spice tree',
  botanicalFamily: 'Myristicaceae',
  lifecycle: 'Perennial',
  summary:
    'Nutmeg is a tropical evergreen tree that uniquely yields two distinct spices from a single fruit: nutmeg, the dried seed kernel, and mace, the dried lacy aril that surrounds it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Nutmeg trees are dioecious, meaning individual trees are either male or female, which growers must account for when establishing orchards to ensure adequate pollination and fruit set.',
    },
    {
      type: 'paragraph',
      text: 'When the fruit ripens and splits open, it reveals a single large seed wrapped in a bright red, net-like aril; the seed kernel is dried and sold as nutmeg, while the dried aril is sold separately as mace.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Myristicaceae' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Myristica fragrans' },
    {
      label: 'Primary uses',
      value: 'Dried seed kernel (nutmeg) and dried aril (mace) as spices',
    },
    {
      label: 'Climate',
      value: 'Warm, humid tropical lowland',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams and sandy loams',
      note: 'Optimal ranges are region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Nutmeg is grown mainly by smallholder farmers in a small number of tropical producing regions, often as part of diversified tree-crop and agroforestry systems.',
        },
        {
          type: 'paragraph',
          text: 'Trees are slow to reach full bearing and can remain productive for many decades, making nutmeg cultivation a long-term investment for producing families and communities.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Myristicaceae' },
            { term: 'Genus', description: 'Myristica' },
            { term: 'Principal species', description: 'Myristica fragrans' },
            {
              term: 'Growth habit',
              description:
                'Dioecious evergreen tropical tree bearing a fleshy fruit that splits to reveal a single seed enclosed in a lacy aril',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Nutmeg is native to the Banda Islands in the Maluku archipelago of what is now Indonesia, where it was historically one of the most valuable spices in world trade, tightly controlled for centuries before cultivation spread elsewhere.',
        },
        {
          type: 'paragraph',
          text: 'Indonesia remains a leading producer today, alongside Grenada in the Caribbean, which developed significant nutmeg production after the crop’s introduction there in the nineteenth century. Production and trade statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Nutmeg requires a consistently warm, humid tropical lowland climate with well-distributed rainfall and has essentially no tolerance for frost or extended cool periods.',
        },
        {
          type: 'paragraph',
          text: 'Deep, well-drained loams and sandy loams support the tree’s extensive root system. Poorly drained soils significantly increase the risk of root disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site drainage and rainfall distribution should be confirmed with local information before establishing new plantings.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Seedling establishment with a mix of male and female trees, or grafted female trees, to ensure reliable pollination',
            'Wide spacing to accommodate mature tree size and canopy development',
            'Intercropping with other spice and tree crops in traditional smallholder agroforestry systems',
            'Long juvenile period before trees reach significant fruit production, requiring sustained management over many years',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Potassium supports fruit development, while nitrogen contributes to the vigorous canopy growth needed to sustain fruiting over the tree’s long productive life.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Nutmeg is grown predominantly under rain-fed conditions in humid tropical regions with abundant, well-distributed rainfall throughout the year.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental drip irrigation is used in some newer plantings, primarily to support the establishment of young trees before they reach full bearing.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot is one of the most serious diseases of nutmeg, weakening or killing trees on poorly drained sites, and anthracnose can affect foliage and young shoots under humid conditions. Mealybugs are common sap-feeding pests, and weevils can affect nuts in some producing regions.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Root rot', 'Disease', 'Serious risk on poorly drained sites'],
            [
              'Anthracnose',
              'Disease',
              'Affects foliage and young shoots in humid conditions',
            ],
            ['Mealybugs', 'Pest', 'Sap-feeding insects on foliage and fruit'],
            ['Weevils', 'Pest', 'Can affect nuts in some producing regions'],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Ripe fruits are collected once they split open naturally on the tree, then the aril (mace) and seed (nutmeg) are separated by hand, with each dried separately under controlled conditions before grading and sale.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Dried seed kernel (nutmeg) grated or ground as a culinary spice',
            'Dried aril (mace) used as a related but distinct spice in cooking',
            'Nutmeg essential oil and oleoresin extracted for the flavor and fragrance industries',
            'Fruit rind used in some producing regions to make preserves and confections',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'clove' },
    { type: 'crop', slug: 'cardamom' },
    { type: 'crop', slug: 'vanilla' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of production concentrated in Indonesia and Grenada, with smaller production in other tropical regions.',
  climateContext:
    'Warm, humid tropical lowland tree crop with no cold tolerance, often grown within diversified agroforestry systems.',
  limitations: [
    'The dioecious flowering habit and separation of nutmeg and mace add production complexities not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global nutmeg and mace production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Nutmeg disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nutmeg',
    description:
      'A structured, evidence-based reference on nutmeg: classification, tropical climate needs, cultivation, diseases, pests, harvest, and nutmeg and mace uses.',
    keywords: ['nutmeg', 'Myristica fragrans', 'spice crop', 'mace spice'],
  },
  structuredData: { article: true },
};

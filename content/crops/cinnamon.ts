import type { CropContent } from '@/types/content';

export const cinnamon: CropContent = {
  id: 'crop-cinnamon',
  slug: 'cinnamon',
  contentType: 'crop',
  title: 'Cinnamon',
  scientificName:
    'Cinnamomum verum (syn. Cinnamomum zeylanicum); bark of related Cinnamomum species (notably C. cassia) is also traded commercially as cinnamon or cassia',
  alternativeNames: ['Ceylon cinnamon', 'True cinnamon'],
  category: 'Spice crop',
  subcategory: 'Perennial bark spice tree',
  botanicalFamily: 'Lauraceae (laurel family)',
  lifecycle: 'Perennial',
  summary:
    'Cinnamon is a perennial evergreen tree grown for its inner bark, which is peeled, dried, and rolled into the familiar quills used as a culinary spice, traditionally managed by regular coppicing rather than allowed to grow to full tree height.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cinnamon is harvested from the inner bark of young shoots, so cultivated trees are typically coppiced — cut back regularly near the base — to stimulate a continuous supply of harvestable young stems rather than being allowed to grow into large, single-trunked trees.',
    },
    {
      type: 'paragraph',
      text: 'True cinnamon (Cinnamomum verum), often marketed as Ceylon cinnamon, is distinguished in trade from cassia, the bark of related Cinnamomum species with a stronger, coarser flavor, though both are commonly sold under the general name "cinnamon" in different markets.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lauraceae (laurel family)' },
    {
      label: 'Life cycle',
      value: 'Perennial evergreen tree, managed by coppicing',
    },
    { label: 'Main species', value: 'Cinnamomum verum' },
    { label: 'Primary uses', value: 'Dried bark (quills) as a culinary spice' },
    {
      label: 'Climate',
      value: 'Warm, humid tropical lowland',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy and lateritic soils',
      note: 'Coastal sandy soils are traditional in some producing regions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cinnamon is grown mainly by smallholder farmers in a limited number of tropical producing regions, most notably Sri Lanka for true cinnamon, with cassia-type bark produced from related species in parts of South and Southeast Asia.',
        },
        {
          type: 'paragraph',
          text: 'Because harvesting relies on skilled hand-peeling of young stems, cinnamon production remains a labor-intensive, specialized craft, often passed down within farming communities in traditional producing areas.',
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
            { term: 'Family', description: 'Lauraceae (laurel family)' },
            { term: 'Genus', description: 'Cinnamomum' },
            {
              term: 'Principal species',
              description:
                'Cinnamomum verum (true or Ceylon cinnamon); related species including C. cassia yield bark traded as cassia or cinnamon',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree managed as a coppiced shrub, producing multiple young stems harvested in rotation for their bark',
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
          text: 'True cinnamon is native to Sri Lanka and parts of southern India, where it has been cultivated and traded as a valuable spice for centuries, historically driving long-distance trade connections between South Asia and other regions.',
        },
        {
          type: 'paragraph',
          text: 'Sri Lanka remains the leading producer of true cinnamon today, while cassia-type bark is produced mainly in China, Indonesia, and Vietnam. Production and trade figures are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cinnamon requires warm, humid tropical lowland conditions with well-distributed rainfall, supporting the vigorous young shoot growth from which bark is harvested.',
        },
        {
          type: 'paragraph',
          text: 'The tree has essentially no cold or frost tolerance, restricting cultivation to consistently warm tropical zones.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cinnamon is traditionally grown on well-drained sandy and lateritic soils, including coastal sandy soils in parts of Sri Lanka, reflecting adaptation to soils of moderate fertility provided drainage is adequate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage increases the risk of root diseases affecting the coppiced stem base. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New plantings are established from seedlings or cuttings, with young plants coppiced after an initial establishment period to encourage the multiple-stem growth habit used for ongoing bark harvest.',
        },
        {
          type: 'list',
          items: [
            'Selection of true cinnamon or cassia-type species according to target market',
            'Coppicing regime established once plants reach sufficient size, then repeated on a cycle',
            'Shade or intercrop management in some traditional smallholder systems',
            'Long-term stool (stump) management to sustain multiple harvestable stems over many years',
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
          text: 'Nitrogen supports the vigorous regrowth of young stems needed for repeated bark harvest, while potassium contributes to overall plant vigor and stem quality across coppicing cycles.',
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
          text: 'Cinnamon is grown predominantly under rain-fed conditions in consistently humid tropical regions, since traditional production areas typically receive well-distributed rainfall throughout the year.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental irrigation is used in some newer or drier production areas, primarily to support establishment and regrowth after coppicing.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect leaves and young shoots under humid conditions, while root rot can weaken or kill stems, particularly in poorly drained soils. Scale insects and mealybugs are common sap-feeding pests that can affect foliage and young stems.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on well-drained sites, field sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Young stems of an appropriate age and diameter are cut, and the inner bark is carefully hand-peeled, dried, and rolled into quills, a skilled process that determines much of the final product’s grade and quality.',
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
            'Dried bark quills and ground powder used as a culinary spice',
            'Cinnamon leaf and bark oil extracted for food and fragrance industries',
            'By-products such as lower-grade bark and chips used in extraction and processing',
            'Ornamental and smallholder intercrop value in traditional producing regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'black-pepper' },
    { type: 'crop', slug: 'turmeric' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of production concentrated in Sri Lanka (true cinnamon) and South/Southeast Asia (cassia-type bark).',
  climateContext:
    'Warm, humid tropical lowland tree crop with no cold tolerance; managed by coppicing rather than free growth.',
  limitations: [
    'True cinnamon and cassia differ in species, flavor, and market classification, which is not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global cinnamon and cassia production context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Cinnamon disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cinnamon',
    description:
      'A structured, evidence-based reference on cinnamon: classification, tropical climate needs, coppice management, diseases, pests, and bark spice uses.',
    keywords: [
      'cinnamon',
      'Cinnamomum verum',
      'bark spice',
      'cinnamon cultivation',
    ],
  },
  structuredData: { article: true },
};

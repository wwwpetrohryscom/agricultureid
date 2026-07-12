import type { PlantDiseaseContent } from '@/types/content';

export const riceBlast: PlantDiseaseContent = {
  id: 'disease-rice-blast',
  slug: 'rice-blast',
  contentType: 'plant-disease',
  title: 'Rice Blast',
  scientificName: 'Magnaporthe oryzae (anamorph Pyricularia oryzae)',
  alternativeNames: ['Blast disease', 'Rotten neck (neck blast)'],
  category: 'Plant disease',
  subcategory: 'Fungal disease',
  causalAgent: 'Fungus Magnaporthe oryzae',
  pathogenType: 'fungal',
  summary:
    'Rice blast, caused by the fungus Magnaporthe oryzae, is one of the most destructive diseases of rice worldwide. It can affect leaves, nodes, and the neck of the panicle, with neck blast in particular capable of causing severe yield loss through unfilled or chalky grain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice blast is caused by the fungus Magnaporthe oryzae (asexual state Pyricularia oryzae), which infects rice at multiple growth stages and plant parts. It occurs in essentially every rice-growing region and is considered one of the most economically significant rice diseases globally.',
    },
    {
      type: 'paragraph',
      text: 'The disease can appear as leaf blast early in the season, and later as node or neck blast, with neck blast being especially damaging because it can girdle the stem below the panicle, cutting off grain fill and producing unfilled, chalky, or shriveled grains.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal disease (Magnaporthe oryzae)' },
    {
      label: 'Key sign',
      value:
        'Diamond- or spindle-shaped leaf lesions with grey-white centres and brown margins; blackened, girdled necks',
    },
    {
      label: 'Hosts',
      value: 'Rice',
    },
    {
      label: 'Favoured by',
      value: 'High humidity, extended leaf wetness, and warm temperatures',
    },
    {
      label: 'Spread',
      value:
        'Airborne conidia, sometimes over considerable distances; infected seed and straw debris',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, balanced nutrition, water management, and monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf blast appears as small, diamond- or spindle-shaped lesions with grey to white centres and narrow brown to reddish-brown margins, which can coalesce and kill large areas of leaf tissue under severe infection. Node blast produces blackened, girdled nodes that can cause the stem to break. Neck blast, the most damaging phase, blackens and girdles the neck of the panicle, often causing the entire panicle to die and produce little or no filled grain.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Leaf blast lesions can resemble other leaf spots and physiological disorders. Where identification matters for a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Magnaporthe oryzae produces conidia on infected tissue that are dispersed by wind and can travel considerable distances between fields. Under high humidity and extended periods of leaf wetness, spores germinate and penetrate rice tissue directly, and repeated infection cycles can occur roughly every five to seven days when conditions remain favourable.',
        },
        {
          type: 'list',
          items: [
            'Infected seed and straw or stubble debris can carry the fungus between seasons',
            'High humidity with extended dew or leaf wetness strongly favours spore germination and infection',
            'Warm temperatures within a moderate range favour rapid disease cycling',
          ],
        },
      ],
    },
    {
      id: 'affected-hosts',
      heading: 'Affected hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Rice is the host of overwhelming importance for Magnaporthe oryzae, and the disease is reported across essentially all rice production systems, including irrigated, rainfed lowland, and upland rice, with upland and water-stressed conditions generally associated with higher blast risk.',
        },
      ],
    },
    {
      id: 'risk-factors',
      heading: 'Risk factors',
      body: [
        {
          type: 'list',
          items: [
            'High humidity and extended periods of leaf wetness or dew',
            'Excessive nitrogen fertilization producing lush, highly susceptible tissue',
            'Dense planting and heavy shading that maintain humid microclimates',
            'Drought or water stress, particularly in upland or intermittently flooded rice',
            'Susceptible varieties and continuous rice cropping without resistant genetics',
          ],
        },
      ],
    },
    {
      id: 'prevention-and-monitoring',
      heading: 'Prevention and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because rice blast can develop rapidly under favourable weather and cause severe losses through neck infection, management combines resistant varieties, balanced nutrition, and water management with regular field monitoring.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant varieties recommended for the local region',
            'Match nitrogen fertilization to crop need and avoid excessive rates that increase susceptibility',
            'Maintain consistent field flooding where water management allows, since drought-stressed rice is generally more susceptible',
            'Use certified, disease-free seed and manage infected straw and stubble',
            'Scout fields regularly, especially during humid weather and around heading, when neck blast risk is highest',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'rice' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'economic-threshold',
  ],
  geographicScope:
    'Global; rice blast occurs in nearly all rice-growing regions and production systems, with severity varying by season, water management, and variety.',
  climateContext:
    'Favoured by high humidity, extended leaf wetness, and warm temperatures; water stress, as in upland or intermittently irrigated rice, further increases susceptibility.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Magnaporthe oryzae populations vary genetically by region, affecting which resistance genes remain effective; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'irri',
      citedFor:
        'Rice-specific disease biology, risk factors, and management context',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rice Blast',
    description:
      'Rice blast explained: Magnaporthe oryzae biology, disease cycle, affected hosts, risk factors, and prevention and monitoring guidance.',
    keywords: [
      'rice blast',
      'Magnaporthe oryzae',
      'rice disease',
      'blast disease',
    ],
  },
  structuredData: { article: true },
};

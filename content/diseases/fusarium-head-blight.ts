import type { PlantDiseaseContent } from '@/types/content';

export const fusariumHeadBlight: PlantDiseaseContent = {
  id: 'plant-disease-fusarium-head-blight',
  slug: 'fusarium-head-blight',
  contentType: 'plant-disease',
  title: 'Fusarium Head Blight',
  scientificName:
    'Fusarium graminearum (teleomorph Gibberella zeae) and related Fusarium species',
  alternativeNames: ['FHB', 'Head scab', 'Ear blight', 'Scab'],
  category: 'Plant disease',
  subcategory: 'Fungal head disease',
  causalAgent:
    'Fungi in the genus Fusarium, chiefly Fusarium graminearum (teleomorph Gibberella zeae)',
  pathogenType: 'fungal',
  summary:
    'Fusarium head blight is a fungal disease of cereal heads caused chiefly by Fusarium graminearum. It bleaches infected spikelets, shrivels grain, and can lead to mycotoxin contamination, making it a serious food-safety as well as yield concern.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fusarium head blight, often called head scab, is caused by a complex of Fusarium fungi, with Fusarium graminearum the most common species in many regions. It infects the flowering heads of wheat, barley, and other small grains, as well as maize ears, bleaching florets and preventing normal grain development.',
    },
    {
      type: 'paragraph',
      text: 'Beyond direct yield loss, the disease is important because some Fusarium species produce mycotoxins that can accumulate in grain and affect its safety for food and feed. This dual impact on both quantity and quality makes head blight one of the most closely managed cereal diseases, with strong emphasis on prevention around flowering.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal head/ear disease (Fusarium species)' },
    {
      label: 'Key sign',
      value:
        'Prematurely bleached spikelets or whole heads, sometimes with pink-orange spore masses',
    },
    {
      label: 'Hosts',
      value: 'Wheat, barley, oats, triticale, rye, and maize (ear rot)',
    },
    {
      label: 'Favoured by',
      value: 'Warm, wet, humid weather during flowering',
    },
    {
      label: 'Spread',
      value: 'Spores from cereal and maize residue reaching heads at flowering',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, rotation and residue management, flowering-time risk assessment, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'In wheat, infected spikelets lose their green colour and turn straw-coloured or bleached while the rest of the head is still green, so partly bleached heads are a classic sign. Under humid conditions, pink-to-orange fungal growth may appear at the base of infected spikelets. Affected grain is often shrivelled, chalky, and lightweight, sometimes with a pink tinge. In maize, related Fusarium species cause ear rots with pink to white mould on kernels.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Because some Fusarium species produce mycotoxins, grain from affected crops may need testing before use for food or feed. Follow local grain-safety guidance rather than relying on appearance alone.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium fungi survive on infected cereal and maize residue, where they produce spores that are splashed and wind-dispersed onto cereal heads. Infection is concentrated around flowering, when open florets are most susceptible. Warm, wet conditions during this narrow window strongly favour infection and later mycotoxin accumulation.',
        },
        {
          type: 'list',
          items: [
            'Infected cereal and maize residue is the main source of inoculum',
            'Spores reach heads by wind and rain splash during flowering',
            'The flowering period is the critical window for infection',
            'Warm, humid weather at flowering increases both infection and toxin risk',
          ],
        },
      ],
    },
    {
      id: 'hosts-and-conditions',
      heading: 'Hosts and favourable conditions',
      body: [
        {
          type: 'paragraph',
          text: 'Wheat and barley are the most economically affected cereals, with oats, triticale, and rye also susceptible, and maize hosting related Fusarium ear rots. Cropping sequences that place cereals after maize or after cereals, combined with retained residue and wet weather at flowering, create the highest risk.',
        },
        {
          type: 'list',
          items: [
            'Warm, wet, humid weather coinciding with crop flowering',
            'Cereals grown after maize or after cereals with residue retained',
            'Reduced tillage that keeps infected residue at the surface',
            'Susceptible varieties and uneven flowering across a field',
          ],
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because infection is tied to flowering, management combines longer-term measures that lower inoculum with in-season attention to the flowering window. Resistance is only partial in most cereals, so an integrated programme is essential.',
        },
        {
          type: 'list',
          items: [
            'Grow varieties with the best available head-blight resistance ratings',
            'Rotate away from maize and cereals and manage residue to reduce inoculum',
            'Use head-blight risk tools and weather information around flowering',
            'Aim for even crop stands so flowering is more uniform and easier to protect',
            'Follow grain-safety testing and segregation guidance where toxins are a risk',
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
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'triticale' },
    { type: 'crop', slug: 'maize' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'septoria-tritici-blotch' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; occurs across cereal- and maize-growing regions, with severe outbreaks and mycotoxin risk concentrated where warm, wet weather coincides with flowering.',
  climateContext:
    'Favoured by warm, wet, humid weather during the flowering window; the same conditions that drive infection also increase the risk of mycotoxin accumulation in grain.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'The Fusarium species present and their mycotoxin profiles vary by region and season; grain-safety thresholds are set by local authorities.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen complex, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Cereal head-blight resistance and integrated management context',
    },
    {
      sourceId: 'umn-extension',
      citedFor:
        'Identification, flowering-window risk, and management principles',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Fusarium Head Blight (Head Scab)',
    description:
      'Fusarium head blight overview: Fusarium graminearum biology, bleached heads, mycotoxin risk, flowering-time infection, and integrated cereal management.',
    keywords: [
      'fusarium head blight',
      'head scab',
      'Fusarium graminearum',
      'mycotoxin',
    ],
  },
  structuredData: { article: true },
};

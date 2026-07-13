import type { PlantDiseaseContent } from '@/types/content';

export const northernCornLeafBlight: PlantDiseaseContent = {
  id: 'plant-disease-northern-corn-leaf-blight',
  slug: 'northern-corn-leaf-blight',
  contentType: 'plant-disease',
  title: 'Northern Leaf Blight of Maize',
  scientificName: 'Exserohilum turcicum (teleomorph Setosphaeria turcica)',
  alternativeNames: [
    'Northern corn leaf blight',
    'Turcicum leaf blight',
    'NCLB',
  ],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Exserohilum turcicum (teleomorph Setosphaeria turcica; formerly Helminthosporium turcicum)',
  pathogenType: 'fungal',
  summary:
    'Northern corn leaf blight is a foliar fungal disease of maize caused by Exserohilum turcicum. It produces large, cigar-shaped grey-green to tan lesions and can cause substantial yield loss when it develops before or during grain fill in humid conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Northern corn leaf blight, caused by the fungus Exserohilum turcicum, is a widespread foliar disease of maize in temperate and highland tropical regions with moderate temperatures and high humidity. Its most recognisable feature is the large, elongated, cigar-shaped lesion that develops on the leaves, which distinguishes it from most other maize leaf diseases.',
    },
    {
      type: 'paragraph',
      text: 'When these lesions become numerous on the leaves around and above the ear during grain fill, they reduce the plant’s photosynthetic capacity and can lower yield significantly. The disease is managed primarily through resistant hybrids, some of which carry major resistance genes, alongside rotation and residue management.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Exserohilum turcicum)' },
    {
      label: 'Key sign',
      value:
        'Large, elongated, cigar-shaped grey-green to tan lesions on leaves',
    },
    { label: 'Hosts', value: 'Maize, sweetcorn, and sorghum' },
    {
      label: 'Favoured by',
      value:
        'Moderate temperatures with high humidity and prolonged leaf wetness',
    },
    {
      label: 'Spread',
      value: 'Spores from infected residue, then wind and rain within the crop',
    },
    {
      label: 'Management basis',
      value:
        'Resistant hybrids, rotation and residue management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'The disease begins as small, elliptical, water-soaked lesions that expand into long, grey-green to tan, cigar-shaped blights running along the leaf. Lesions typically start on the lower leaves and move upward. Under humid conditions, a dark, dusty layer of spores may form on older lesions. When lesions coalesce, entire leaves can be blighted and appear scorched.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The long, cigar-shaped lesions are usually distinctive, but reactions can be modified by resistance genes that produce smaller or chlorotic lesions. A diagnostic laboratory can confirm the pathogen where the reaction is unclear.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Exserohilum turcicum survives between crops on infected maize residue. Under moderate temperatures and humid conditions it produces spores (conidia) that are dispersed by wind and rain splash onto the lower leaves of a new crop. Repeating infection cycles then move the disease up the canopy, with long periods of leaf wetness strongly favouring each cycle.',
        },
        {
          type: 'list',
          items: [
            'Infected maize residue carries the fungus between seasons',
            'Wind- and rain-dispersed conidia infect the lower leaves first',
            'Moderate temperatures with high humidity and leaf wetness favour infection',
            'Repeating cycles move the disease up toward the ear leaf during grain fill',
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
          text: 'Maize, including sweetcorn, is the main host, and sorghum can also be affected by forms of the fungus. The disease is favoured by moderate rather than hot temperatures combined with high humidity and frequent dew or rain. Continuous maize with surface residue and susceptible hybrids increases the risk of early, damaging epidemics.',
        },
        {
          type: 'list',
          items: [
            'Moderate temperatures with prolonged high humidity and leaf wetness',
            'Continuous maize with infected residue retained at the surface',
            'Susceptible hybrids that allow large lesions to develop',
            'Cool, humid highland and temperate environments during grain fill',
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
          text: 'Resistant hybrids are the primary tool, including those with major resistance genes and those with broader partial resistance, supported by cultural measures that lower residue-borne inoculum. Integrating these tactics gives more durable protection than any single measure.',
        },
        {
          type: 'list',
          items: [
            'Choose hybrids with strong northern-leaf-blight resistance ratings',
            'Rotate away from maize and manage residue to reduce inoculum',
            'Scout the mid and upper canopy from tasselling through grain fill',
            'Favour practices that reduce prolonged leaf wetness where feasible',
            'Prioritise fields with a history of the disease or dense canopies',
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
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sweetcorn' },
    { type: 'crop', slug: 'sorghum' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'gray-leaf-spot' },
    { type: 'plant-disease', slug: 'southern-corn-rust' },
    { type: 'plant-disease', slug: 'tar-spot-of-corn' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; important in temperate and highland tropical maize regions with moderate temperatures and high humidity during the growing season.',
  climateContext:
    'Favoured by moderate temperatures combined with high humidity and prolonged leaf wetness; infected maize residue supplies the inoculum that starts each season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Resistance-gene reactions and pathogen races vary by region and change over time; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize leaf-blight resistance breeding and management context',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Identification and integrated management in maize',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Northern Corn Leaf Blight of Maize',
    description:
      'Northern corn leaf blight overview: Exserohilum turcicum biology, cigar-shaped lesions, humid disease cycle, and integrated management in maize and sorghum.',
    keywords: [
      'northern corn leaf blight',
      'Exserohilum turcicum',
      'maize disease',
      'turcicum leaf blight',
    ],
  },
  structuredData: { article: true },
};

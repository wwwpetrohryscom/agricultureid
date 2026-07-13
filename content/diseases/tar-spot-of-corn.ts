import type { PlantDiseaseContent } from '@/types/content';

export const tarSpotOfCorn: PlantDiseaseContent = {
  id: 'plant-disease-tar-spot-of-corn',
  slug: 'tar-spot-of-corn',
  contentType: 'plant-disease',
  title: 'Tar Spot of Maize',
  scientificName: 'Phyllachora maydis',
  alternativeNames: ['Corn tar spot', 'Maize tar spot'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Phyllachora maydis, sometimes in a complex with Monographella maydis',
  pathogenType: 'fungal',
  summary:
    'Tar spot of corn is a foliar fungal disease of maize caused by Phyllachora maydis. It produces distinctive raised, black, tar-like spots on the leaves and, when severe, can reduce grain fill and weaken stalks in cool, humid conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tar spot of corn is a foliar disease of maize caused by the fungus Phyllachora maydis. Long known in parts of Latin America, it has more recently emerged as an important disease in additional maize-growing regions. Its hallmark is the formation of raised, glossy black spots on the leaves that resemble specks of tar and cannot be rubbed off.',
    },
    {
      type: 'paragraph',
      text: 'In some regions the disease has been associated with a second fungus, Monographella maydis, in what is called the tar spot complex, which can produce more severe leaf collapse. Where cool, humid conditions favour it, tar spot can reduce photosynthesis, hasten leaf death, and contribute to stalk weakening and lodging late in the season.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Phyllachora maydis)' },
    {
      label: 'Key sign',
      value:
        'Raised, glossy, black tar-like spots on leaves that cannot be rubbed off',
    },
    { label: 'Hosts', value: 'Maize, including sweetcorn' },
    {
      label: 'Favoured by',
      value: 'Cool, humid weather with long periods of leaf wetness',
    },
    {
      label: 'Spread',
      value: 'Spores from infected residue, then wind and rain within the crop',
    },
    {
      label: 'Management basis',
      value:
        'Tolerant hybrids, rotation and residue management, monitoring, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Tar spot appears as small, raised, black, circular to irregular spots (called stromata) on the leaf surface, and sometimes on husks and stalks. Unlike surface debris or insect frass, these spots are embedded in the tissue and cannot be wiped away. In the tar spot complex, tan lesions with a dark centre, sometimes ringed by a halo, can develop and lead to more rapid leaf death.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The raised black spots that cannot be rubbed off are the key diagnostic feature separating tar spot from saprophytic surface moulds or insect deposits. A diagnostic laboratory can confirm the pathogen where identification is uncertain.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Phyllachora maydis is an obligate parasite that survives between crops in infected maize residue, within which its black stromata persist. Under cool, humid conditions, spores are released and dispersed by wind and rain splash to infect new maize leaves. Repeating cycles under favourable weather allow the disease to build up through the season, often becoming most visible in the second half of the crop.',
        },
        {
          type: 'list',
          items: [
            'Requires living maize tissue and overwinters in infected residue',
            'Spores are released from residue under cool, humid conditions',
            'Wind and rain splash spread spores to new leaves',
            'Prolonged leaf wetness favours repeating infection cycles',
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
          text: 'Maize, including sweetcorn, is the host of tar spot. The disease is favoured by cool, moist conditions with high humidity, frequent rain, fog, or heavy dew, and by extended periods of leaf wetness. Continuous maize with surface residue and susceptible hybrids increases the likelihood of damaging development.',
        },
        {
          type: 'list',
          items: [
            'Cool, humid weather with frequent rain, fog, or heavy dew',
            'Long periods of leaf wetness that favour infection',
            'Continuous maize with infected residue retained at the surface',
            'Susceptible hybrids and dense canopies that stay wet',
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
          text: 'Management combines hybrid tolerance with cultural practices that reduce residue-borne inoculum and canopy wetness, together with monitoring so that any in-season response can be timed appropriately. As a relatively newly emerged disease in some regions, local guidance continues to develop.',
        },
        {
          type: 'list',
          items: [
            'Choose hybrids with better tar-spot tolerance where ratings are available',
            'Rotate away from maize and manage residue to reduce inoculum',
            'Scout regularly during cool, humid weather, especially in the mid-to-late season',
            'Favour practices that reduce prolonged leaf wetness where feasible',
            'Follow evolving regional guidance and monitoring networks',
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
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'gray-leaf-spot' },
    { type: 'plant-disease', slug: 'northern-corn-leaf-blight' },
    { type: 'plant-disease', slug: 'southern-corn-rust' },
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
    'Occurs in maize regions of Latin America and, more recently, additional cool, humid maize-growing areas; distribution continues to expand.',
  climateContext:
    'Favoured by cool, humid weather with frequent rain, fog, or heavy dew and prolonged leaf wetness; infected maize residue supplies the inoculum for the next season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Tar spot is a newly established disease in some regions and knowledge of hybrid reactions and thresholds is still developing; consult local authorities.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Identification, emergence, and management in maize',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Tar Spot of Maize (Corn)',
    description:
      'Tar spot of corn overview: Phyllachora maydis biology, raised black tar-like leaf spots, cool-humid disease cycle, and integrated management in maize.',
    keywords: [
      'tar spot of corn',
      'Phyllachora maydis',
      'maize tar spot',
      'corn disease',
    ],
  },
  structuredData: { article: true },
};

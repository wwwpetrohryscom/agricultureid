import type { PlantDiseaseContent } from '@/types/content';

export const maizeLethalNecrosis: PlantDiseaseContent = {
  id: 'plant-disease-maize-lethal-necrosis',
  slug: 'maize-lethal-necrosis',
  contentType: 'plant-disease',
  title: 'Maize Lethal Necrosis',
  scientificName:
    'Maize chlorotic mottle virus co-infecting with a cereal potyvirus',
  alternativeNames: ['MLN', 'Corn lethal necrosis'],
  category: 'Plant disease',
  subcategory: 'Viral disease',
  causalAgent:
    'Co-infection of Maize chlorotic mottle virus (MCMV) with a potyvirus such as Sugarcane mosaic virus',
  pathogenType: 'viral',
  summary:
    'Maize lethal necrosis is a severe viral disease of maize caused by co-infection of Maize chlorotic mottle virus with a cereal potyvirus. The synergistic infection causes mottling, necrosis, and often plant death, with major impacts where it has emerged.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maize lethal necrosis is a destructive viral disease that results from the simultaneous infection of maize by two viruses: Maize chlorotic mottle virus (MCMV) and one of several cereal-infecting potyviruses, most often Sugarcane mosaic virus. Either virus alone typically causes only mild symptoms, but together they interact synergistically to produce far more severe disease than either causes on its own.',
    },
    {
      type: 'paragraph',
      text: 'The disease became especially prominent after damaging outbreaks in parts of East Africa, where it caused heavy losses in a staple food crop. Because it is spread by insects and can also be carried on seed and in soil, managing maize lethal necrosis requires attention to clean seed, vector management, and cropping practices that break the virus cycle.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Viral disease (MCMV plus a potyvirus)' },
    {
      label: 'Key sign',
      value:
        'Chlorotic mottling, leaf necrosis, stunting, and dying-back of the growing point',
    },
    { label: 'Hosts', value: 'Maize, including sweetcorn' },
    {
      label: 'Favoured by',
      value:
        'Presence of both viruses, active insect vectors, and continuous maize',
    },
    {
      label: 'Spread',
      value:
        'Insect vectors, infected seed, and crop residue or soil in some settings',
    },
    {
      label: 'Management basis',
      value:
        'Clean seed, tolerant varieties, vector and rotation management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Affected plants show chlorotic mottling that usually begins on the younger leaves and progresses to yellowing and necrosis of leaf margins and tissue. Severely infected plants become stunted, fail to produce or fill ears, and the growing point can die back in a symptom sometimes described as dead heart. Whole plants may die, and patches of dead or dying plants can appear across a field.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Symptoms can resemble nutrient disorders or other virus diseases. Because management depends on confirming the viruses involved, laboratory testing is important for a reliable diagnosis rather than relying on symptoms alone.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogens and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Maize lethal necrosis requires both Maize chlorotic mottle virus and a potyvirus to be present in the same plant. The potyvirus components are transmitted by aphids, while Maize chlorotic mottle virus can be spread by several chewing insects such as beetles and thrips, and can also be carried on seed and persist in soil and residue in some situations. When a maize plant acquires both viruses, the synergistic interaction produces the severe necrotic disease.',
        },
        {
          type: 'list',
          items: [
            'Both viruses must infect the same plant to cause the severe disease',
            'Potyvirus components are spread mainly by aphids',
            'Maize chlorotic mottle virus is spread by several chewing insects and can be seed-borne',
            'Continuous maize and overlapping crops maintain virus and vectors year-round',
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
          text: 'Maize, including sweetcorn, is the primary host of concern; several grasses can host the component viruses and act as reservoirs. Continuous maize cultivation, overlapping planting dates, high vector activity, and movement of infected seed all favour the build-up and spread of the disease.',
        },
        {
          type: 'list',
          items: [
            'Continuous or overlapping maize crops that maintain the viruses',
            'High populations of aphids and other insect vectors',
            'Movement or use of infected or untested seed',
            'Grass reservoirs that harbour the component viruses between crops',
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
          text: 'Because the disease depends on both viruses and their vectors, management targets the whole cycle: reducing virus sources, limiting vector spread, and breaking continuous maize cropping. Tolerant varieties and clean seed are central, supported by area-wide practices where the disease is established.',
        },
        {
          type: 'list',
          items: [
            'Plant certified, tested seed to avoid introducing the viruses',
            'Grow tolerant varieties where they are available and recommended',
            'Use a maize-free break period and rotation to interrupt the virus cycle',
            'Manage insect vectors and control volunteer maize and grass reservoirs',
            'Synchronise planting across an area to avoid continuous host availability',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of insecticides or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sweetcorn' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
    { type: 'plant-disease', slug: 'cassava-mosaic-disease' },
    { type: 'plant-disease', slug: 'gray-leaf-spot' },
  ],
  connections: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Reported in several maize-growing regions; caused major losses after emergence in parts of East Africa, with continued concern about spread through seed and vectors.',
  climateContext:
    'Disease severity depends mainly on the presence of both viruses and active insect vectors rather than on a specific climate; warm conditions that favour vectors and continuous maize increase risk.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'The exact virus combination and vectors involved vary by region, and reliable diagnosis requires laboratory testing.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Virus complex, transmission, and host range',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Emergence in East Africa and integrated management context',
    },
    { sourceId: 'eppo-gd', citedFor: 'Virus nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Maize Lethal Necrosis (MLN)',
    description:
      'Maize lethal necrosis overview: MCMV and potyvirus co-infection, necrosis symptoms, insect and seed spread, and integrated management in maize.',
    keywords: [
      'maize lethal necrosis',
      'MLN',
      'maize chlorotic mottle virus',
      'maize disease',
    ],
  },
  structuredData: { article: true },
};

import type { PlantDiseaseContent } from '@/types/content';

export const huanglongbing: PlantDiseaseContent = {
  id: 'plant-disease-huanglongbing',
  slug: 'huanglongbing',
  contentType: 'plant-disease',
  title: 'Huanglongbing',
  scientificName:
    'Candidatus Liberibacter asiaticus (and related Liberibacter species)',
  alternativeNames: ['HLB', 'Citrus greening disease', 'Yellow dragon disease'],
  category: 'Plant disease',
  subcategory: 'Bacterial disease',
  causalAgent:
    'Phloem-limited bacteria in the genus Candidatus Liberibacter, spread by citrus psyllids',
  pathogenType: 'bacterial',
  summary:
    'Huanglongbing, or citrus greening, is a destructive bacterial disease of citrus caused by Candidatus Liberibacter species and spread by citrus psyllids. It causes blotchy leaf mottling, misshapen bitter fruit, and gradual tree decline, and there is no cure once trees are infected.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Huanglongbing, widely known as citrus greening, is considered one of the most serious diseases of citrus worldwide. It is caused by phloem-limited bacteria in the genus Candidatus Liberibacter, most commonly Candidatus Liberibacter asiaticus, which live in the tree’s food-conducting tissue and disrupt its normal functioning.',
    },
    {
      type: 'paragraph',
      text: 'The disease is spread by citrus psyllids, small sap-feeding insects that acquire and transmit the bacteria, and by the movement of infected planting material. Because there is currently no cure, infected trees decline progressively and eventually become unproductive, so management focuses on excluding the disease, controlling the psyllid vector, and removing infected trees.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial disease (Candidatus Liberibacter species)',
    },
    {
      label: 'Key sign',
      value:
        'Asymmetric blotchy leaf mottling, yellow shoots, and small, lopsided, bitter fruit',
    },
    {
      label: 'Hosts',
      value: 'Citrus, including orange, lemon, lime, and grapefruit',
    },
    {
      label: 'Favoured by',
      value: 'Presence of citrus psyllids and movement of infected material',
    },
    {
      label: 'Spread',
      value:
        'Citrus psyllid vectors and grafting or planting of infected material',
    },
    {
      label: 'Management basis',
      value:
        'Exclusion, clean nursery stock, psyllid control, tree removal, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'A hallmark symptom is a blotchy, asymmetric yellow mottling of the leaves that does not match on either side of the midrib, which helps distinguish it from nutrient deficiencies that are usually symmetrical. Affected trees show yellow shoots, thinning canopies, and twig dieback. Fruit are often small, lopsided, and fail to colour properly, remaining green at the bottom, with aborted seeds and a bitter, off taste, which is the origin of the name greening.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Huanglongbing is a regulated disease in many regions. Because symptoms can resemble nutrient disorders and confirmation requires testing, suspected cases should be reported to plant-health authorities rather than managed informally.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'The Liberibacter bacteria live in the phloem of citrus trees and are transmitted by citrus psyllids that feed on the sap. A psyllid acquires the bacteria while feeding on an infected tree and can then transmit them to healthy trees. The bacteria multiply and spread within the tree, and infected but symptomless trees can serve as sources for further spread. Grafting or planting infected material also moves the disease over distance.',
        },
        {
          type: 'list',
          items: [
            'Bacteria are confined to the phloem and disrupt nutrient transport',
            'Citrus psyllids acquire and transmit the bacteria while feeding',
            'Infected, sometimes symptomless, trees act as sources of the bacteria',
            'Grafting and movement of infected material spread the disease over distance',
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
          text: 'Citrus of all kinds, including orange, lemon, lime, and grapefruit, are susceptible, along with some related ornamental plants that can host the psyllid and the bacteria. Disease spread is driven by the presence and activity of citrus psyllids and by the movement of infected nursery stock, rather than by a particular climate, though conditions favouring psyllid populations increase risk.',
        },
        {
          type: 'list',
          items: [
            'Presence of citrus psyllid vectors in the growing area',
            'Nearby infected trees or ornamental host plants',
            'Movement or planting of infected nursery material',
            'Conditions that favour psyllid populations and their flush feeding',
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
          text: 'Because there is no cure, management centres on keeping the disease out, reducing the psyllid vector, and removing infected trees to protect the wider area. Coordinated, area-wide action is generally more effective than isolated efforts.',
        },
        {
          type: 'list',
          items: [
            'Plant only certified, disease-free nursery stock',
            'Manage citrus psyllid populations to reduce transmission',
            'Scout regularly and test suspect trees to detect infection early',
            'Remove and destroy confirmed infected trees to reduce sources',
            'Participate in coordinated, area-wide management programmes',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Management of regulated pathogens and their vectors must follow current, locally authorized recommendations and phytosanitary rules. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'lime' },
    { type: 'crop', slug: 'grapefruit' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  connections: [
    { type: 'pest', slug: 'psyllids' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Present across major citrus regions of Asia, the Americas, Africa, and the Arabian Peninsula; a regulated, high-impact disease wherever the psyllid vectors occur.',
  climateContext:
    'Spread depends on citrus psyllid activity and movement of infected material rather than on a specific climate; conditions favouring psyllids increase transmission.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension and phytosanitary guidance.',
    'Several Liberibacter species and psyllid vectors are involved in different regions, and there is currently no cure for infected trees.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, transmission, and host range',
    },
    {
      sourceId: 'eppo-gd',
      citedFor: 'Pathogen nomenclature, distribution, and regulatory status',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification, vector management, and control principles',
    },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory and area-wide management context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Huanglongbing (Citrus Greening)',
    description:
      'Huanglongbing overview: Candidatus Liberibacter biology, psyllid spread, blotchy mottle and bitter fruit, and vector-based management of citrus greening.',
    keywords: [
      'huanglongbing',
      'citrus greening',
      'Candidatus Liberibacter',
      'citrus psyllid',
    ],
  },
  structuredData: { article: true },
};

import type { PlantDiseaseContent } from '@/types/content';

export const grayMold: PlantDiseaseContent = {
  id: 'disease-gray-mold',
  slug: 'gray-mold',
  contentType: 'plant-disease',
  title: 'Gray Mold',
  scientificName: 'Botrytis cinerea',
  alternativeNames: ['Botrytis blight', 'Botrytis bunch rot', 'Grey mould'],
  category: 'Plant disease',
  subcategory: 'Fungal disease',
  causalAgent: 'Necrotrophic fungus Botrytis cinerea',
  pathogenType: 'fungal',
  summary:
    'Gray mold is a widespread fungal disease caused by Botrytis cinerea, one of the broadest host-range plant pathogens known. It causes fuzzy grey fungal growth and rapid decay on flowers, fruit, and foliage, and is a major cause of losses both in the field and after harvest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gray mold is caused by Botrytis cinerea, a necrotrophic fungus that kills plant tissue and then feeds on the dead cells. It is unusual among plant pathogens for its extremely broad host range, attacking more than a hundred crop species, and for its ability to attack wounded, senescent, or otherwise stressed tissue especially readily.',
    },
    {
      type: 'paragraph',
      text: 'The disease is economically important on grapevine, where it causes bunch rot, and on strawberry and tomato, where it damages flowers, fruit, and stems. Because it also develops in storage and transit, gray mold is a significant post-harvest as well as field problem.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Fungal disease (necrotroph, very broad host range)',
    },
    {
      label: 'Key sign',
      value:
        'Fuzzy, grey-brown fungal growth on decaying flowers, fruit, or stems',
    },
    {
      label: 'Hosts',
      value:
        'Grape, strawberry, and tomato among many other crops and ornamentals',
    },
    {
      label: 'Favoured by',
      value: 'Cool, humid conditions and prolonged wetness on plant surfaces',
    },
    {
      label: 'Spread',
      value:
        'Airborne conidia; readily infects wounded, senescent, or crowded tissue',
    },
    {
      label: 'Management basis',
      value: 'Sanitation, airflow, careful handling, and monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold is identified by a fuzzy, grey to brown fungal growth that develops on decaying or infected flowers, fruit, stems, and leaves, often starting at wounds, faded flower parts, or where plant surfaces touch. Infected tissue typically becomes soft, water-soaked, and brown before the characteristic grey spore layer appears.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because Botrytis cinerea often follows other injuries or infections, gray mold can appear alongside or after different problems. Where identification matters for a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Botrytis cinerea produces huge numbers of airborne conidia (asexual spores) on infected tissue, which are dispersed by wind and water splash to new hosts. The fungus is an efficient necrotroph, often entering through wounds, dead or senescing tissue such as spent flower petals, or areas of high humidity where plant parts touch, before spreading into adjacent healthy tissue.',
        },
        {
          type: 'list',
          items: [
            'Survives between seasons as resting structures (sclerotia) or as mycelium in plant debris',
            'Infection is strongly favoured by free moisture and moderate, cool temperatures',
            'Can continue to develop after harvest, making storage and transit conditions important',
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
          text: 'Grapevine, strawberry, and tomato are among the crops most affected by gray mold, but its host range extends to a very wide range of vegetables, fruits, and ornamentals. On grape it causes bunch rot of ripening clusters; on strawberry it rots flowers and fruit; and on tomato it can blight flowers, stems, and fruit, particularly in humid greenhouse production.',
        },
        {
          type: 'table',
          caption: 'Typical symptom pattern by host',
          columns: ['Host', 'Commonly affected tissue', 'Typical symptom'],
          rows: [
            [
              'Grape',
              'Ripening berry clusters',
              'Soft rot with grey fungal growth (bunch rot)',
            ],
            [
              'Strawberry',
              'Flowers and fruit',
              'Brown, soft rot with grey spore layer',
            ],
            [
              'Tomato',
              'Flowers, stems, fruit',
              'Blighted flowers; stem and fruit lesions',
            ],
          ],
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
            'Cool, humid conditions with prolonged leaf, flower, or fruit wetness',
            'Dense canopies and poor air circulation, especially in greenhouses and tunnels',
            'Wounds from handling, insects, or weather, and senescent tissue such as spent flowers',
            'Excessive nitrogen supply producing soft, lush growth',
            'Fruit clusters or plants in close contact, allowing the fungus to spread between touching tissue',
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
          text: 'Because Botrytis cinerea readily colonises wounded or senescent tissue and spreads rapidly in humid conditions, management focuses on reducing humidity and injury, removing infection sources, and inspecting produce regularly.',
        },
        {
          type: 'list',
          items: [
            'Improve air movement through spacing, pruning, and canopy management',
            'Remove spent flowers, damaged fruit, and infected debris promptly',
            'Avoid excessive nitrogen and overly dense plantings',
            'Handle fruit carefully to minimise wounds, and manage storage humidity and temperature',
            'Scout regularly, especially during cool, humid weather or in enclosed production systems',
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
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global; gray mold occurs wherever susceptible crops are grown, with the greatest impact in cool, humid regions and in enclosed production such as greenhouses.',
  climateContext:
    'Favoured by cool temperatures and high humidity with prolonged surface wetness; humid, poorly ventilated production environments carry particular risk.',
  limitations: [
    'This is a general overview covering a very broad-host-range pathogen; specific risk and severity vary substantially by crop, cultivar, and region.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, host range, and disease cycle',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    { sourceId: 'rhs', citedFor: 'General symptoms and horticultural context' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Greenhouse and fruit crop risk factors',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Gray Mold',
    description:
      'Gray mold (Botrytis cinerea) explained: identification, disease cycle, affected hosts, risk factors, and prevention and monitoring guidance.',
    keywords: ['gray mold', 'Botrytis cinerea', 'fruit rot', 'plant disease'],
  },
  structuredData: { article: true },
};

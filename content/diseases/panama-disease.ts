import type { PlantDiseaseContent } from '@/types/content';

export const panamaDisease: PlantDiseaseContent = {
  id: 'plant-disease-panama-disease',
  slug: 'panama-disease',
  contentType: 'plant-disease',
  title: 'Panama Disease',
  scientificName: 'Fusarium oxysporum f. sp. cubense',
  alternativeNames: [
    'Fusarium wilt of banana',
    'Panama wilt',
    'Foc (incl. Tropical Race 4)',
  ],
  category: 'Plant disease',
  subcategory: 'Fungal vascular wilt',
  causalAgent:
    'Soil-borne fungus Fusarium oxysporum f. sp. cubense, including the aggressive strain Tropical Race 4',
  pathogenType: 'fungal',
  summary:
    'Panama disease is a soil-borne vascular wilt of banana caused by Fusarium oxysporum f. sp. cubense. The fungus invades the roots and vascular system, causing yellowing, wilting, and internal browning, and its Tropical Race 4 strain threatens widely grown banana types.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Panama disease, also known as Fusarium wilt of banana, is a devastating soil-borne disease caused by the fungus Fusarium oxysporum f. sp. cubense (Foc). It invades banana plants through the roots and colonises the water-conducting (vascular) tissue, blocking water movement and causing progressive yellowing, wilting, and death of the plant.',
    },
    {
      type: 'paragraph',
      text: 'The disease is historically famous for having forced a change in the world’s main export banana in the mid-twentieth century after an earlier race devastated the then-dominant variety. A strain known as Tropical Race 4 is now a major global concern because it affects a much wider range of bananas, including the Cavendish types that dominate international trade, and because the fungus persists in soil for many years.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value:
        'Soil-borne fungal vascular wilt (Fusarium oxysporum f. sp. cubense)',
    },
    {
      label: 'Key sign',
      value:
        'Yellowing and wilting of older leaves, plant collapse, and internal reddish-brown vascular staining',
    },
    { label: 'Hosts', value: 'Banana (and closely related Musa plants)' },
    {
      label: 'Favoured by',
      value:
        'Infested soil, movement of contaminated material, and susceptible varieties',
    },
    {
      label: 'Spread',
      value:
        'Infected planting material, contaminated soil, water, tools, and footwear',
    },
    {
      label: 'Management basis',
      value:
        'Exclusion and biosecurity, clean planting material, resistant types, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'External symptoms usually begin with yellowing of the older, lower leaves that progresses upward, followed by wilting and collapse of leaves around the pseudostem, which may split at the base. Cutting the pseudostem or corm reveals reddish-brown to dark discoloration of the vascular strands, the most reliable internal sign. Affected plants gradually decline and die, and disease often spreads outward in patches from initial foci.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Suspected Panama disease, particularly Tropical Race 4, is a regulated concern in many countries. Do not move suspect plants, soil, or material, and report suspected cases to plant-health authorities rather than attempting to manage them informally.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium oxysporum f. sp. cubense survives in soil for many years as durable resting spores (chlamydospores) and on plant debris and alternative hosts. It infects banana roots and grows into the vascular system, where it blocks and discolours the tissue. The fungus spreads mainly through the movement of infected planting material and contaminated soil, water, tools, vehicles, and footwear, which is why biosecurity is central to its management.',
        },
        {
          type: 'list',
          items: [
            'Long-lived chlamydospores allow the fungus to persist in soil for years',
            'Infection occurs through the roots and colonises the vascular system',
            'Infected planting material is a primary means of long-distance spread',
            'Contaminated soil, water, tools, and footwear move the fungus locally',
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
          text: 'Banana and closely related Musa plants are the hosts of Panama disease. Susceptibility depends strongly on the banana variety and the strain of the fungus: earlier races severely affected some traditional varieties, while Tropical Race 4 affects a much broader range, including Cavendish bananas. Once soil is infested, the disease persists and cannot be eradicated with current methods.',
        },
        {
          type: 'list',
          items: [
            'Presence of the fungus in soil, which persists for many years',
            'Susceptible banana varieties for the strain present',
            'Movement of infected suckers, soil, and equipment into clean areas',
            'Poor drainage and plant stress, which can worsen expression',
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
          text: 'Because there is no cure once soil is infested and the fungus is long-lived, management centres on preventing introduction and spread through strict biosecurity, using clean planting material, and deploying resistant banana types where they exist. Containment of affected areas is essential.',
        },
        {
          type: 'list',
          items: [
            'Use certified, disease-free planting material such as tissue-cultured plants',
            'Apply strict biosecurity to clean soil, tools, vehicles, and footwear between areas',
            'Grow resistant banana types where they are available and suitable',
            'Contain and isolate infested areas to prevent spread to clean land',
            'Report suspected Tropical Race 4 to plant-health authorities promptly',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Management of regulated pathogens must follow current, locally authorized recommendations and phytosanitary rules. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'banana' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'black-sigatoka' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global in banana-growing regions; Tropical Race 4 has spread across parts of Asia, the Middle East, Africa, and the Americas and is a major biosecurity concern.',
  climateContext:
    'A soil-borne disease whose spread depends mainly on infested soil and planting material rather than weather; poor drainage and plant stress can worsen expression.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension and phytosanitary guidance.',
    'Different races of the fungus affect different banana varieties, and regulatory status varies by country.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, races, disease cycle, and host range',
    },
    {
      sourceId: 'eppo-gd',
      citedFor: 'Pathogen nomenclature, distribution, and regulatory status',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global Tropical Race 4 monitoring and biosecurity guidance',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Panama Disease (Fusarium Wilt of Banana)',
    description:
      'Panama disease overview: Fusarium oxysporum f. sp. cubense biology, vascular wilt symptoms, Tropical Race 4 threat, and biosecurity-based management in banana.',
    keywords: [
      'panama disease',
      'Fusarium oxysporum f. sp. cubense',
      'tropical race 4',
      'banana wilt',
    ],
  },
  structuredData: { article: true },
};

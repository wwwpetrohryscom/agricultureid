import type { PlantDiseaseContent } from '@/types/content';

export const fusariumWilt: PlantDiseaseContent = {
  id: 'disease-fusarium-wilt',
  slug: 'fusarium-wilt',
  contentType: 'plant-disease',
  title: 'Fusarium Wilt',
  scientificName: 'Fusarium oxysporum',
  alternativeNames: ['Fusarium yellows'],
  category: 'Plant disease',
  subcategory: 'Soil-borne fungal disease',
  causalAgent:
    'Soil-borne fungus Fusarium oxysporum, comprising many host-specific formae speciales',
  pathogenType: 'fungal',
  summary:
    'Fusarium wilt is a soil-borne fungal disease caused by Fusarium oxysporum. The fungus colonizes the water-conducting tissue of host plants, causing wilting and yellowing, and can persist in soil for many years.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fusarium wilt is caused by Fusarium oxysporum, a soil-borne fungus that infects through the roots and colonizes the xylem, the water-conducting tissue of the plant. As the fungus and the plant’s own defensive responses restrict water movement, infected plants wilt, yellow, and often die.',
    },
    {
      type: 'paragraph',
      text: 'Fusarium oxysporum is not a single uniform pathogen but a species that includes numerous host-specific strains, known as formae speciales, each generally restricted to a narrow range of hosts. The fungus is economically important across many crops and can persist in soil for years, which limits the effectiveness of crop rotation alone as a control measure.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Soil-borne fungal vascular wilt disease' },
    {
      label: 'Key sign',
      value:
        'Yellowing and wilting of leaves, often one-sided, with browning inside stems',
    },
    {
      label: 'Hosts',
      value: 'Many crops; individual formae speciales are host-specific',
    },
    {
      label: 'Favoured by',
      value:
        'Warm soil temperatures and prior presence of the pathogen in the soil',
    },
    {
      label: 'Spread',
      value:
        'Infested soil, water, equipment, and infected transplants or seed',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, sanitation, crop rotation, authorized products',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt typically causes yellowing that begins on lower or older leaves, often more pronounced on one side of the plant or even one side of a single leaf, followed by progressive wilting that can be most visible during the heat of the day. Affected plants are frequently stunted and may die as the disease advances. Cutting a stem near the soil line usually reveals dark brown or reddish vascular discoloration, a key diagnostic sign of vascular wilt disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Similar wilting and vascular discoloration can result from other pathogens, such as Verticillium, or from root rot and water stress. Laboratory diagnosis is recommended to confirm the causal agent, particularly before choosing a resistant variety.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium oxysporum survives in soil for many years as thick-walled resting spores called chlamydospores, even in the absence of a host plant. The fungus infects through root tips and wounds, then colonizes the xylem, where its growth and the plant’s own defensive responses combine to restrict water transport.',
        },
        {
          type: 'paragraph',
          text: 'Local spread occurs through infested soil, moving water, and contaminated tools or equipment. Longer-distance spread is mainly associated with infected transplants, seed, or the movement of infested soil between locations.',
        },
      ],
    },
    {
      id: 'host-specificity',
      heading: 'Host specificity (formae speciales)',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium oxysporum comprises many formae speciales: genetically distinct strains, each generally adapted to infect a specific host or narrow group of related hosts. Well-documented examples include tomato (forma specialis lycopersici), banana (forma specialis cubense, the cause of Panama disease), and cotton (forma specialis vasinfectum). Related Fusarium species and host-adapted strains cause comparable vascular wilt syndromes in other crops, including soybean.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Forma specialis',
              description:
                'A physiological race of a fungal species defined by the specific host plants it can infect, rather than by visible structural differences.',
            },
            {
              term: 'Vascular wilt',
              description:
                'A disease pattern in which a pathogen colonizes water-conducting tissue, restricting water movement and causing wilting.',
            },
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
          text: 'Tomato is among the best-studied hosts of Fusarium wilt, and resistant varieties bred with specific resistance genes are widely available. Many other vegetable, fiber, and fruit crops have their own host-adapted forms of the fungus. Soybean and other legumes can also be affected by wilt-causing Fusarium species and formae speciales, though the specific strains involved differ from those affecting tomato.',
        },
        {
          type: 'list',
          items: [
            'Tomato',
            'Soybean and other legumes',
            'Cotton',
            'Banana',
            'Melon and other cucurbits',
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
            'Previous presence of the pathogen in a field, due to its long persistence in soil',
            'Warm soil temperatures that favor fungal development',
            'Repeated planting of susceptible varieties in the same soil',
            'Movement of infested soil, water, or equipment between fields',
            'Root wounding from nematodes or cultivation',
            'Soil pH and fertility, which can influence disease severity in some host-pathogen combinations',
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
          text: 'Because the fungus can persist in soil for years, management relies primarily on prevention and host resistance rather than eradication.',
        },
        {
          type: 'list',
          items: [
            'Plant resistant or tolerant varieties where available, often the single most effective tool',
            'Use certified disease-free seed and transplants',
            'Sanitize tools and equipment between fields',
            'Avoid moving infested soil or water between locations',
            'Rotate with non-host or less-susceptible crops as part of a broader strategy',
            'Monitor fields and diagnose symptomatic plants promptly',
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
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'soybean' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation', 'soil-ph'],
  geographicScope:
    'Global; occurs wherever susceptible host crops are grown, with particular impact in fields with a known history of the pathogen.',
  climateContext:
    'Disease development is generally favoured by warm soil temperatures; some host-pathogen combinations are also influenced by soil pH and moisture.',
  limitations: [
    'This is a general overview of a fungus with many host-specific strains, not a diagnosis for any specific crop or field.',
    'The effectiveness of crop rotation varies because Fusarium oxysporum can persist in soil for many years.',
    'Control-product and variety recommendations are region- and host-specific and are deliberately generalized here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, host range, and formae speciales',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Vascular wilt diagnosis and vegetable disease guidance',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Research on Fusarium wilt biology and host resistance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fusarium Wilt',
    description:
      'Fusarium wilt overview: identification, soil-borne fungal biology, host-specific strains, affected crops, risk factors, and prevention principles.',
    keywords: [
      'Fusarium wilt',
      'Fusarium oxysporum',
      'vascular wilt',
      'soil-borne disease',
    ],
  },
  structuredData: { article: true },
};

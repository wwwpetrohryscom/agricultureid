import type { PlantDiseaseContent } from '@/types/content';

export const commonSmut: PlantDiseaseContent = {
  id: 'disease-common-smut',
  slug: 'common-smut',
  contentType: 'plant-disease',
  title: 'Common Smut',
  scientificName: 'Ustilago maydis',
  alternativeNames: ['Corn smut', 'Boil smut'],
  category: 'Plant disease',
  subcategory: 'Fungal smut disease',
  causalAgent: 'Fungus Ustilago maydis',
  pathogenType: 'fungal',
  summary:
    'Common smut is a fungal disease of maize caused by Ustilago maydis, producing large, greyish-white galls on ears, tassels, and other actively growing tissue. It survives in soil and residue for years and infects mainly through wounds.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Common smut, caused by the fungus Ustilago maydis, is a widespread disease of maize recognisable by the swollen, tumour-like galls it forms on ears, tassels, leaves, and stalks. Unlike many cereal diseases that spread mainly through the air onto intact leaf surfaces, common smut typically requires a wound or otherwise vulnerable meristematic tissue to establish infection.',
    },
    {
      type: 'paragraph',
      text: 'The fungus survives readily in soil and crop residue as durable teliospores, which can persist for a number of years even in the absence of a host, making field history and residue management relevant to long-term disease pressure.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal smut disease (Ustilago maydis)' },
    {
      label: 'Key sign',
      value:
        'Large, greyish-white galls on ears, tassels, leaves, or stalks that rupture to release black spore masses',
    },
    { label: 'Hosts', value: 'Maize' },
    {
      label: 'Favoured by',
      value:
        'Wounding events (hail, insects, mechanical damage) and warm, intermittently moist conditions',
    },
    {
      label: 'Spread',
      value:
        'Soil- and residue-borne teliospores; local infection through wounds rather than long-distance airborne spread',
    },
    {
      label: 'Management basis',
      value: 'Resistant hybrids, rotation, and reduced plant wounding',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Common smut forms galls that start small and pale but can grow considerably larger than the tissue they replace, developing a shiny, greyish-white membrane. As galls mature internally, the membrane darkens and eventually ruptures, releasing a mass of powdery black spores.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Gall size, colour, and location can vary considerably. Where identification affects a management or marketing decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Teliospores surviving in soil or crop residue germinate under suitable conditions to produce infective structures that penetrate young, actively growing maize tissue, most often through wounds. Common wounding sources include hail damage, insect feeding, wind-whipped leaves, and mechanical injury from cultivation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Soil- and residue-borne teliospores',
              description:
                'Persist for a number of years, providing inoculum for future maize crops on the same land',
            },
            {
              term: 'Wound-dependent infection',
              description:
                'Meristematic tissue exposed by hail, insects, or mechanical damage is particularly susceptible',
            },
            {
              term: 'Local gall development',
              description:
                'Infection typically produces localised galls rather than a systemic, whole-plant disease',
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
          text: "Maize is the primary agricultural host of Ustilago maydis. The fungus is highly adapted to this host, and disease pressure is closely tied to the frequency of maize in a field's cropping history and to local conditions that create wounding opportunities.",
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
            'Wounding events such as hail, insect feeding, or mechanical damage during the growing season',
            'Excess nitrogen supply promoting succulent, more susceptible tissue',
            'Frequent maize in the rotation, building up soil and residue inoculum over time',
            'Warm temperatures with intermittent moisture during susceptible growth stages',
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
          text: 'Because infection depends heavily on wounding and on soil-borne inoculum, prevention focuses on reducing plant injury, managing nitrogen, and lowering inoculum load through rotation.',
        },
        {
          type: 'list',
          items: [
            'Choose resistant or tolerant hybrids where available',
            'Rotate away from maize to reduce soil and residue inoculum over time',
            'Avoid excessive nitrogen applications that promote succulent, susceptible tissue',
            'Where practical, remove and destroy galls before they rupture to limit local spore release',
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
  hostCrops: [{ type: 'crop', slug: 'maize' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  connections: [
    { type: 'climate', slug: 'hail' },
    { type: 'climate', slug: 'temperature' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Global; common smut occurs wherever maize is grown, with local severity tied to wounding events and cropping history rather than broad climatic zones.',
  climateContext:
    'Wounding events such as hail are a key trigger for infection; warm temperatures with intermittent moisture favour spore germination and gall development.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Wound-related risk factors such as hail are unpredictable and cannot be generalised to fixed schedules or thresholds.',
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
      citedFor: 'Field-level identification and risk factors',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Maize disease management principles',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Common Smut',
    description:
      'Common smut of maize explained: Ustilago maydis biology, gall identification, disease cycle, risk factors, and prevention and monitoring guidance.',
    keywords: ['common smut', 'corn smut', 'Ustilago maydis', 'maize disease'],
  },
  structuredData: { article: true },
};

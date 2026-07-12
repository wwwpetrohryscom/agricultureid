import type { NutrientContent } from '@/types/content';

export const chlorine: NutrientContent = {
  id: 'nutrient-chlorine',
  slug: 'chlorine',
  contentType: 'nutrient',
  title: 'Chlorine',
  symbol: 'Cl',
  alternativeNames: ['Cl', 'Chloride'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Chlorine, taken up as the chloride ion, is a micronutrient involved in osmotic regulation, photosynthesis, and disease suppression in some crops. It is rarely deficient in the field but can reach excess, growth-limiting levels under saline conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chlorine (Cl) is essential to plants in the form of the chloride ion (Cl⁻). It contributes to osmotic and stomatal regulation, is involved in the oxygen-evolving step of photosynthesis, and has been associated with suppression of some soil-borne and foliar diseases in several cereal crops.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up chlorine as the chloride ion, which is highly soluble and moves freely with soil water. Because chloride is so mobile and is supplied incidentally through irrigation water, rainfall, and common fertilizers such as potassium chloride, deficiency is rare under most field conditions; excess is a more frequent practical concern, particularly under saline irrigation.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Cl' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Chloride ion (Cl⁻)' },
    {
      label: 'Main role',
      value: 'Osmotic regulation and photosynthesis (oxygen evolution)',
    },
    {
      label: 'Deficiency sign',
      value: 'Wilting and reduced growth (rare in field conditions)',
    },
    {
      label: 'Mobility in plant',
      value: 'Highly mobile — moves freely with water in the plant',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Chloride contributes to osmotic pressure regulation and to the control of stomatal opening and closing, and is involved in the oxygen-evolving step of photosynthesis. In several cereal crops, adequate chloride nutrition has been associated with suppression of some soil-borne and foliar diseases, although this effect is crop- and disease-specific rather than universal.',
        },
      ],
    },
    {
      id: 'chlorine-in-the-soil',
      heading: 'Chlorine in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Chloride is a highly soluble anion supplied to soils through rainfall, irrigation water, and fertilizers, and it is readily leached in high-rainfall, well-drained conditions. Concentrations can build up under saline irrigation water or in poorly drained soils in low-rainfall regions.',
        },
        {
          type: 'table',
          caption: 'Common sources of soil chloride',
          columns: ['Source', 'Contribution'],
          rows: [
            [
              'Rainfall and irrigation water',
              'Variable, dependent on region and water source',
            ],
            [
              'Potassium chloride fertilizer (muriate of potash)',
              'Direct chloride supply alongside potassium',
            ],
            [
              'Marine influence and soil parent material',
              'Background level, higher in coastal areas',
            ],
          ],
        },
      ],
    },
    {
      id: 'deficiency',
      heading: 'Deficiency symptoms',
      body: [
        {
          type: 'paragraph',
          text: 'Chloride deficiency is uncommon in the field because it is so widely supplied incidentally through rainfall, irrigation, and fertilizers. Where it does occur — typically on well-leached, low-chloride soils far from marine influence and with low-chloride fertilization — symptoms include wilting of leaf margins and reduced root growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because chloride deficiency is rare, wilting and reduced growth should be checked against other, more common causes before being attributed to chloride status. Plant tissue testing can confirm chloride levels.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Excess chloride is a more common practical issue than deficiency, especially under saline irrigation water or in poorly drained saline soils. Symptoms include leaf-margin scorch and necrosis, and some crops and varieties are notably more chloride-sensitive than others.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Tolerance is crop- and region-specific',
          text: 'Chloride tolerance varies by crop and variety, and appropriate management depends on irrigation water quality and soil drainage. AgricultureID does not publish universal chloride thresholds; follow soil and water tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Chloride and nitrate compete for the same uptake and transport systems in roots, so high chloride availability can influence nitrate uptake. Chloride supply is also closely tied to potassium fertilization where potassium chloride (muriate of potash) is the potassium source used.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'sulfur' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  glossaryTerms: ['micronutrient'],
  geographicScope:
    'Global overview of chlorine (chloride) as a plant nutrient. Tolerance thresholds and irrigation-water guidance are crop- and region-specific and are not given here.',
  climateContext:
    'Chloride availability is influenced by rainfall and irrigation water quality; leaching under high rainfall can reduce soil chloride, while saline irrigation water can supply excess chloride.',
  limitations: [
    'This entry describes chlorine’s (chloride’s) role and behaviour; it is not a chloride management recommendation for any specific crop, soil, or region.',
    'Deficiency is rare and should be confirmed with plant tissue testing; excess chloride effects should be assessed with soil and irrigation-water testing.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of chlorine (chloride) in plant nutrition',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Chloride behaviour in soils and salinity',
    },
    { sourceId: 'ahdb', citedFor: 'Chloride management context' },
    {
      sourceId: 'ifa',
      citedFor: 'Potassium chloride and other chloride-supplying fertilizers',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Chloride toxicity and crop sensitivity',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chlorine',
    description:
      'Chlorine as a plant micronutrient: its role in osmotic regulation and disease resistance, soil behaviour, deficiency, excess, and interactions.',
    keywords: ['chlorine', 'chloride', 'plant nutrient', 'micronutrient'],
  },
  structuredData: { article: true },
};

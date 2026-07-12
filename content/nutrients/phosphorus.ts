import type { NutrientContent } from '@/types/content';

export const phosphorus: NutrientContent = {
  id: 'nutrient-phosphorus',
  slug: 'phosphorus',
  contentType: 'nutrient',
  title: 'Phosphorus',
  symbol: 'P',
  alternativeNames: ['P'],
  category: 'Plant nutrient',
  subcategory: 'Primary macronutrient',
  nutrientClass: 'primary-macronutrient',
  summary:
    'Phosphorus is a primary macronutrient essential for energy transfer, root development, and reproductive growth. Plants take it up from soil as phosphate ions, which are often poorly available and must be carefully managed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Phosphorus (P) is one of the three primary macronutrients, alongside nitrogen and potassium, required by plants in relatively large amounts. It is a structural component of nucleic acids (DNA and RNA), of phospholipids in cell membranes, and of ATP, the molecule that stores and transfers energy within cells.',
    },
    {
      type: 'paragraph',
      text: 'Phosphorus is taken up by roots mainly as orthophosphate ions (H2PO4⁻ and, to a lesser extent, HPO4²⁻) from the soil solution. Unlike nitrate, phosphate reacts strongly with soil minerals and organic matter, so only a small fraction of total soil phosphorus is available to plants at any time, and phosphorus reaches roots mainly by diffusion over very short distances.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'P' },
    { label: 'Class', value: 'Primary macronutrient' },
    {
      label: 'Plant-available forms',
      value: 'Phosphate ions (H2PO4⁻, HPO4²⁻)',
    },
    {
      label: 'Main role',
      value: 'Energy transfer (ATP), nucleic acids, and root development',
    },
    {
      label: 'Deficiency sign',
      value: 'Dark green or purplish leaves and stunted growth',
    },
    {
      label: 'Mobility in plant',
      value: 'Mobile — deficiency appears first in older leaves',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus is central to how plants store and use energy: it is part of ATP and ADP, the molecules that power cellular processes, and of the sugar-phosphate backbone of DNA and RNA. It is also required for membrane phospholipids and for several enzymes involved in photosynthesis and respiration.',
        },
        {
          type: 'paragraph',
          text: 'Because of these roles, phosphorus strongly influences root growth and branching, early seedling vigour, and reproductive development such as flowering, seed formation, and fruit set. Adequate phosphorus early in a crop’s life is often considered particularly important, since root systems establish before phosphorus demand later shifts toward reproductive tissue.',
        },
      ],
    },
    {
      id: 'phosphorus-in-the-soil',
      heading: 'Phosphorus in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphate reacts readily with other soil constituents, which limits its availability even when total soil phosphorus is high. In acidic soils it binds strongly to iron and aluminium oxides; in neutral to alkaline soils it precipitates with calcium. Soil organic matter and mycorrhizal fungi both help plants access phosphorus that would otherwise be poorly available.',
        },
        {
          type: 'list',
          items: [
            'Soil pH strongly affects phosphorus availability, with a broad optimum near neutral pH',
            'Cold or waterlogged soils slow phosphorus diffusion and root uptake',
            'Mycorrhizal fungi can substantially extend the root system’s access to soil phosphorus',
            'Soil testing is the standard way to assess plant-available phosphorus status',
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
          text: 'Phosphorus is mobile within the plant, so deficiency symptoms tend to appear first on older leaves. Typical signs include stunted growth, reduced tillering or branching, delayed maturity, and — in some crops, such as maize — a dark green or purplish discoloration of leaves, particularly on the undersides and leaf margins.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Phosphorus deficiency symptoms can resemble the effects of cold soil temperatures, compaction, or root damage, all of which restrict phosphorus uptake even when soil phosphorus is adequate. Soil or plant testing helps distinguish these causes.',
        },
      ],
    },
    {
      id: 'excess-and-environmental-considerations',
      heading: 'Excess and environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus is rarely directly toxic to plants, but excess phosphorus can induce or worsen zinc and iron deficiency by interfering with their uptake and internal transport. The larger concern with excess phosphorus is environmental: phosphorus lost from fields in runoff or eroded soil is a leading cause of eutrophication in lakes, rivers, and coastal waters.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'The right phosphorus rate, source, timing, and placement depend on soil test phosphorus levels, crop, and local environmental regulations. AgricultureID does not publish universal phosphorus rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus and zinc show a well-documented antagonism: high phosphorus availability can induce zinc deficiency, particularly on soils already low in zinc. Nitrogen and phosphorus tend to act synergistically, since adequate nitrogen supports the root growth needed to explore soil phosphorus, while potassium supports the plant’s ability to convert absorbed phosphorus into yield.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'zinc' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'monoammonium-phosphate' },
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
    { type: 'fertilizer', slug: 'single-superphosphate' },
    { type: 'fertilizer', slug: 'rock-phosphate' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'soil-topic', slug: 'soil-ph' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of phosphorus as a plant nutrient. Soil phosphorus testing, fertilizer recommendations, and environmental regulations are region-specific and are not given here.',
  climateContext:
    'Phosphorus uptake is reduced in cold or waterlogged soils, and mineralisation of organic phosphorus slows at low soil temperatures, even where total soil phosphorus is adequate.',
  limitations: [
    'This entry describes phosphorus’s role and behaviour; it is not a phosphorus recommendation for any specific crop, soil, or region.',
    'Deficiency diagnosis should be confirmed with soil or plant testing, since phosphorus deficiency symptoms can resemble cold-stress or other nutrient disorders.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of phosphorus in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus fixation and behaviour in soils',
    },
    { sourceId: 'ahdb', citedFor: 'Phosphorus management context' },
    { sourceId: 'ifa', citedFor: 'Phosphate fertilizer products and use' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Phosphorus',
    description:
      'Phosphorus as a plant nutrient: energy transfer, root growth, soil availability, deficiency symptoms, excess effects, and nutrient interactions.',
    keywords: [
      'phosphorus',
      'plant nutrient',
      'macronutrient',
      'phosphorus deficiency',
    ],
  },
  structuredData: { article: true },
};

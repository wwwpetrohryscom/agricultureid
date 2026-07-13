import type { FertilizerContent } from '@/types/content';

export const epsomSalt: FertilizerContent = {
  id: 'fertilizer-epsom-salt',
  slug: 'epsom-salt',
  contentType: 'fertilizer',
  title: 'Epsom salt',
  alternativeNames: [
    'Magnesium sulfate',
    'Magnesium sulfate heptahydrate',
    'MgSO₄·7H₂O',
  ],
  category: 'Fertilizer',
  subcategory: 'Magnesium and sulfur fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~10% Mg, ~13% S',
  summary:
    'Epsom salt is highly soluble magnesium sulfate heptahydrate used to correct magnesium and sulfur deficiency, valued for its quick availability and suitability for foliar sprays, without affecting soil pH.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Epsom salt is magnesium sulfate heptahydrate (MgSO₄·7H₂O), a crystalline material that supplies roughly 10% magnesium and 13% sulfur. It dissolves readily in water, which makes it convenient for both soil and foliar application.',
    },
    {
      type: 'paragraph',
      text: 'Because it is fully water-soluble and neutral in reaction, epsom salt provides an immediately available source of magnesium and sulfate-sulfur without raising or lowering soil pH. It is often used as a rapid corrective for visible magnesium deficiency rather than as a bulk soil-building material.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Soluble magnesium and sulfur fertilizer',
    },
    { label: 'Typical analysis', value: 'About 10% magnesium and 13% sulfur' },
    { label: 'Nutrients supplied', value: 'Magnesium and sulfur' },
    { label: 'Common form', value: 'Water-soluble crystals' },
    {
      label: 'Key consideration',
      value: 'Fast-acting and neutral in reaction; suited to foliar sprays',
    },
    { label: 'Solubility', value: 'Highly water-soluble' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Epsom salt is a hydrated magnesium sulfate. Unlike kieserite, which is the monohydrate and dissolves more slowly, the heptahydrate form dissolves rapidly, making epsom salt the usual choice for solution and foliar use.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'MgSO₄·7H₂O' },
            {
              term: 'Magnesium content',
              description: 'About 10% magnesium',
            },
            {
              term: 'Sulfur content',
              description: 'About 13% sulfur, as sulfate',
            },
            {
              term: 'Effect on soil pH',
              description: 'Neutral; does not acidify or lime the soil',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied and behaviour in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Epsom salt supplies magnesium, a component of chlorophyll and an activator of many plant enzymes, together with sulfate-sulfur. Because both nutrients are supplied in soluble ionic form, they are available quickly, but magnesium can also leach on light soils under heavy rainfall or irrigation.',
        },
        {
          type: 'list',
          items: [
            'Magnesium and sulfate are immediately plant-available on dissolving',
            'Foliar application can correct visible magnesium deficiency quickly',
            'Soluble magnesium is prone to leaching on coarse-textured soils',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Epsom salt is commonly used as a foliar spray to correct magnesium deficiency in crops such as tomato, potato, grape, and citrus, where a rapid response is wanted. It is also applied to soil, though for large-scale magnesium correction on acid soils, dolomitic lime or kieserite is often more economical.',
        },
        {
          type: 'list',
          items: [
            'Foliar sprays give a fast response to magnesium deficiency symptoms',
            'Neutral reaction allows use without changing soil pH',
            'For bulk magnesium building, cheaper sources are often preferred',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and diagnosis are region-specific',
          text: 'Magnesium deficiency should be confirmed by soil or tissue testing before treatment, and the right rate and spray concentration depend on the crop and local guidance. AgricultureID does not publish universal fertilizer rates; follow testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Epsom salt is a corrective for magnesium and sulfur, not a general fertilizer; applying it where those nutrients are already adequate provides no benefit and adds cost. Foliar sprays applied too concentrated can scorch leaves, so recommended dilution should be followed.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Applying magnesium where it is not deficient does not improve growth and can, in excess, interfere with the uptake of other cations such as potassium and calcium. Confirm need by testing.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'kieserite' },
    { type: 'fertilizer', slug: 'langbeinite' },
  ],
  connections: [
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'grape' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of epsom salt as a soluble magnesium and sulfur source, used chiefly as a foliar or targeted corrective rather than a bulk soil amendment.',
  climateContext:
    'Soluble magnesium from epsom salt is prone to leaching on light soils under high rainfall or irrigation, favouring split or foliar application in such conditions.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'Magnesium deficiency should be confirmed by testing, as unnecessary application provides no benefit.',
    'For large-scale soil magnesium correction, other sources are often more economical than epsom salt.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Epsom salt (magnesium sulfate heptahydrate, MgSO₄·7H₂O) supplies about 10% magnesium and 13% sulfur and is fully water-soluble.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance describes magnesium sulfate composition and use for magnesium correction.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents magnesium sulfate among magnesium and sulfur fertilizer sources.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'Magnesium and sulfur fertilizer sources' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Magnesium deficiency correction guidance',
    },
    { sourceId: 'ahdb', citedFor: 'Magnesium nutrition management context' },
    { sourceId: 'fao', citedFor: 'Secondary nutrient sources in agriculture' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Epsom Salt (Magnesium Sulfate) Fertilizer',
    description:
      'Epsom salt (magnesium sulfate heptahydrate) fertilizer: soluble magnesium and sulfur supply, foliar use to correct deficiency, and its limitations.',
    keywords: [
      'epsom salt fertilizer',
      'magnesium sulfate fertilizer',
      'magnesium deficiency foliar',
      'MgSO4 fertilizer',
    ],
  },
  structuredData: { article: true },
};

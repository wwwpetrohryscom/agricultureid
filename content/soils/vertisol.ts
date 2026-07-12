import type { SoilContent } from '@/types/content';

export const vertisol: SoilContent = {
  id: 'soil-vertisol',
  slug: 'vertisol',
  contentType: 'soil',
  title: 'Vertisol',
  alternativeNames: ['Cracking clay soil', 'Black cotton soil'],
  category: 'Soil type',
  subcategory: 'Cracking clay soil',
  texture: 'Fine; dominated by shrink-swell clay minerals such as smectite',
  summary:
    'Vertisol is a clay-rich soil dominated by shrink-swell (smectite) clay minerals that crack deeply on drying and swell shut on wetting, producing self-mixing profiles. These soils can be highly fertile but present distinct management challenges around the timing of tillage and traffic.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vertisols are defined by a high content of smectite and related shrink-swell clay minerals, which change volume dramatically between wet and dry states. In the dry season, deep cracks open at the surface and extend well into the profile; surface material can fall into these cracks, contributing to a slow, ongoing self-mixing of the soil over time, sometimes visible at the surface as gilgai microrelief.',
    },
    {
      type: 'paragraph',
      text: 'Because of their dark colour and historical association with cotton cultivation in parts of Africa and India, vertisols are often called "black cotton soil." Their high clay content gives strong water and nutrient holding capacity, but the same clay creates a very narrow workable moisture window and a high risk of compaction if worked at the wrong time.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value:
        'Cracking clay soil dominated by shrink-swell (smectite) clay minerals',
    },
    {
      label: 'Defining behaviour',
      value: 'Deep cracking on drying, swelling shut on wetting',
    },
    {
      label: 'Water holding',
      value: 'High total storage, though much can be tightly bound',
    },
    {
      label: 'Workability',
      value: 'Very narrow moisture window; high compaction risk outside it',
    },
    {
      label: 'Fertility',
      value: 'Often high nutrient-holding capacity (high CEC)',
    },
    {
      label: 'Distribution',
      value:
        'Seasonally dry tropical and subtropical regions, e.g. parts of India, Australia, East Africa, and the southern United States',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Vertisols are classified by their distinctive shrink-swell clay mineralogy rather than by a broader texture class alone. The dramatic volume change between wet and dry states is the single most defining feature of these soils and drives most of their management challenges and opportunities.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Shrink-swell behaviour',
              description:
                'Smectite clay minerals expand when wet and contract when dry, producing deep cracks during dry periods.',
            },
            {
              term: 'Self-mixing (turbation)',
              description:
                'Surface material falling into dry-season cracks contributes to a slow, ongoing mixing of the soil profile over time.',
            },
            {
              term: 'High cation exchange capacity',
              description:
                'Smectite clays retain nutrient cations strongly, supporting high natural fertility on many vertisols.',
            },
            {
              term: 'Internal drainage',
              description:
                'Despite deep cracking when dry, internal drainage is often poor once the soil is saturated and cracks have closed.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Managing vertisols centres on timing field operations to the narrow window when soil moisture allows safe tillage and traffic, and on managing surface water given poor internal drainage when saturated.',
        },
        {
          type: 'list',
          items: [
            'Time tillage and traffic carefully to the narrow workable moisture window to avoid severe compaction or smearing',
            'Consider deep tillage or subsoiling to manage compacted layers where locally appropriate',
            'Manage surface water given the risk of poor internal drainage when the soil is saturated',
            'Add organic matter and maintain cover to support structure and reduce surface crusting',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Vertisols are notoriously difficult to work outside a narrow moisture range. Heavy equipment use when the soil is too wet or too dry can cause lasting structural damage.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton is historically closely associated with vertisols, giving rise to the "black cotton soil" name in several regions. Sorghum tolerates the alternating wet-dry water dynamics of vertisols well, and chickpea is grown on vertisols in parts of South Asia and elsewhere, drawing on residual moisture held deep in the profile after the rainy season.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a vertisol',
      body: [
        {
          type: 'paragraph',
          text: 'Laboratory confirmation of smectite clay dominance and shrink-swell potential, sometimes expressed as the coefficient of linear extensibility, is used in formal soil classification. Local soil survey information is particularly helpful given the distinctive, site-specific management needs of these soils.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'chickpea' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'chernozem' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'subsoiler' },
  ],
  glossaryTerms: ['soil-texture', 'crop-rotation', 'cover-crop'],
  geographicScope:
    'General soil-science overview of Vertisols (cracking clay soils) found in seasonally dry tropical and subtropical regions worldwide, including parts of India, Australia, East Africa, and the southern United States; behaviour varies with clay mineralogy and climate.',
  climateContext:
    'Shrink-swell behaviour is driven by alternating wet and dry seasons; the same soil experiences dramatic cracking in dry periods and swells closed after rain.',
  limitations: [
    'Vertisol behaviour varies with the specific clay mineralogy and climate of a site; this is a general overview, not a substitute for local soil survey or testing.',
    'Optimal tillage timing depends on local weather and soil moisture and cannot be reduced to a fixed calendar.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil texture, drainage, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function and classification context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
    { sourceId: 'usda-plants', citedFor: 'Crop–soil suitability context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Vertisol',
    description:
      'Vertisol explained: shrink-swell clay mineralogy, cracking behaviour, self-mixing profiles, tillage timing, and crop suitability considerations.',
    keywords: [
      'vertisol',
      'cracking clay soil',
      'black cotton soil',
      'shrink-swell clay',
    ],
  },
  structuredData: { article: true },
};

import type { FertilizerContent } from '@/types/content';

export const langbeinite: FertilizerContent = {
  id: 'fertilizer-langbeinite',
  slug: 'langbeinite',
  contentType: 'fertilizer',
  title: 'Langbeinite',
  alternativeNames: [
    'Sulfate of potash magnesia',
    'Potassium magnesium sulfate',
    'Sul-Po-Mag',
    'K-Mag',
  ],
  category: 'Fertilizer',
  subcategory: 'Potassium fertilizer',
  fertilizerClass: 'mineral-potassium',
  typicalAnalysis: '0-0-22',
  summary:
    'Langbeinite is a naturally mined potassium magnesium sulfate mineral that supplies potassium, magnesium, and sulfur together in a single chloride-free product, making it useful for chloride-sensitive crops and soils that need potassium and magnesium at the same time.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Langbeinite is a mineral of potassium and magnesium sulfate, mined from evaporite deposits and sold under names such as sulfate of potash magnesia, K-Mag, and Sul-Po-Mag. A typical product analyses around 22% potassium (as K₂O), roughly 11% magnesium, and about 22% sulfur.',
    },
    {
      type: 'paragraph',
      text: 'Its distinguishing feature is that it delivers three nutrients — potassium, magnesium, and sulfur — in one soluble, chloride-free material with a relatively low salt index. This makes it attractive where a crop needs potassium and magnesium together, or where chloride from muriate of potash is undesirable.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Potassium fertilizer supplying magnesium and sulfur',
    },
    { label: 'Typical analysis', value: '0-0-22, plus about 11% Mg and 22% S' },
    {
      label: 'Nutrients supplied',
      value: 'Potassium, magnesium, and sulfur',
    },
    { label: 'Common form', value: 'Granular or crystalline mineral' },
    {
      label: 'Key consideration',
      value: 'Chloride-free with a relatively low salt index',
    },
    { label: 'Solubility', value: 'Soluble in water' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Langbeinite is a naturally occurring double sulfate of potassium and magnesium, processed from mined ore. Because all three of its nutrients are supplied as sulfates, it contains no chloride, distinguishing it from muriate of potash.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mineral composition',
              description: 'Potassium magnesium sulfate (K₂SO₄·2MgSO₄)',
            },
            {
              term: 'Potassium content',
              description: 'About 22% K₂O',
            },
            {
              term: 'Magnesium and sulfur',
              description:
                'Roughly 11% magnesium and about 22% sulfur, as sulfate',
            },
            {
              term: 'Chloride',
              description: 'None; a chloride-free potassium source',
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
          text: 'Langbeinite supplies potassium, magnesium, and sulfate-sulfur, all in soluble forms that dissolve to release plant-available ions. Because it carries no chloride and has a comparatively low salt index, it is gentler on chloride-sensitive crops and near-seed placement than some other potassium sources.',
        },
        {
          type: 'list',
          items: [
            'Potassium, magnesium, and sulfur are released together as the mineral dissolves',
            'Contains no chloride, unlike muriate of potash',
            'Has a relatively low salt index for a soluble potassium source',
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
          text: 'Langbeinite is chosen where a crop or soil needs potassium and magnesium together, or where chloride is a concern for crop quality or salinity. It suits chloride-sensitive crops and magnesium-deficient soils, and its combined analysis can simplify a fertilizer program that would otherwise need separate magnesium and sulfur sources.',
        },
        {
          type: 'list',
          items: [
            'Well suited to chloride-sensitive crops and magnesium-deficient soils',
            'Supplies magnesium and sulfur without needing separate products',
            'Its near-neutral reaction avoids a strong effect on soil pH',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and product choice are region-specific',
          text: 'The right potassium, magnesium, and sulfur rates and the choice between langbeinite and other sources depend on soil test results, the crop, and local guidance. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Langbeinite provides a fixed ratio of potassium, magnesium, and sulfur, so it fits situations where those proportions match the crop and soil need; where much more potassium than magnesium is required, a straight potassium source may be more economical. It is also typically more costly per unit of potassium than muriate of potash.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because the nutrient ratio is fixed by the mineral, langbeinite is best matched to needs where its magnesium and sulfur are also useful; otherwise a straight potassium fertilizer may be more cost-effective.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'sulfate-of-potash' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'fertilizer', slug: 'kieserite' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tobacco' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-salinity' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of langbeinite as a mined potassium-magnesium-sulfate fertilizer. Its value depends on whether magnesium and sulfur are also needed alongside potassium.',
  climateContext:
    'As a soluble mineral, langbeinite releases its nutrients as it dissolves with soil moisture; potassium and magnesium leaching risk rises on coarse soils under high rainfall.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'The fixed potassium-to-magnesium-to-sulfur ratio may not match every crop and soil need.',
    'Langbeinite is generally more costly per unit of potassium than muriate of potash.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Langbeinite (sulfate of potash magnesia) typically analyses around 22% potassium as K₂O, about 11% magnesium, and about 22% sulfur, with no chloride.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents potassium magnesium sulfate (langbeinite) composition among potassium sources.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance describes sulfate of potash magnesia nutrient content.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'Potassium magnesium sulfate composition' },
    { sourceId: 'fao', citedFor: 'Potassium and magnesium fertilizer sources' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Potassium and magnesium behaviour in soil',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Chloride-free potassium source guidance',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Langbeinite (Sulfate of Potash Magnesia)',
    description:
      'Langbeinite (K-Mag / Sul-Po-Mag): a chloride-free mineral supplying potassium, magnesium, and sulfur together, with its uses and limitations.',
    keywords: [
      'langbeinite',
      'sulfate of potash magnesia',
      'potassium magnesium sulfate',
      'K-Mag fertilizer',
    ],
  },
  structuredData: { article: true },
};

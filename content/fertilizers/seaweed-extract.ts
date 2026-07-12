import type { FertilizerContent } from '@/types/content';

export const seaweedExtract: FertilizerContent = {
  id: 'fertilizer-seaweed-extract',
  slug: 'seaweed-extract',
  contentType: 'fertilizer',
  title: 'Seaweed extract',
  alternativeNames: ['Kelp extract', 'Liquid seaweed'],
  category: 'Fertilizer',
  subcategory: 'Biostimulant / low-analysis organic input',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Low in primary nutrients (typically well under 1% N-P-K); valued mainly for biostimulant compounds rather than nutrient content',
  summary:
    'Seaweed extract is a low-nutrient-analysis input derived from marine algae, applied as a foliar spray or soil drench primarily for its content of natural plant-growth compounds rather than as a meaningful source of nitrogen, phosphorus, or potassium.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Seaweed extract is produced by processing marine algae, most commonly kelp species, into liquid concentrates, soluble powders, or meal. Its concentration of nitrogen, phosphorus, and potassium is low compared with conventional mineral or organic fertilizers, so it is not generally relied upon as a primary nutrient source.',
    },
    {
      type: 'paragraph',
      text: 'Seaweed extract is more accurately described as a biostimulant: a product containing natural plant hormones, polysaccharides, and trace elements believed to influence plant physiological processes such as stress tolerance, root development, and nutrient uptake efficiency, rather than a product framed around delivering a guaranteed nutrient analysis.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Marine-algae-derived biostimulant, not a primary nutrient source',
    },
    {
      label: 'Typical analysis',
      value:
        'Low in N-P-K; primary value is biostimulant compounds, not nutrient content',
    },
    {
      label: 'Nutrients supplied',
      value:
        'Trace amounts of potassium and other elements; not a substitute for primary fertilizers',
    },
    {
      label: 'Common form',
      value: 'Liquid concentrate, soluble powder, or meal',
    },
    {
      label: 'Key consideration',
      value:
        'Framed and evaluated as a biostimulant; evidence for specific effects is crop- and condition-dependent',
    },
    {
      label: 'Solubility',
      value: 'Liquid and soluble powder forms are readily dispersible',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Seaweed extracts are produced from marine algae, commonly kelp, using alkaline, acid, or physical extraction methods. The resulting products contain a low concentration of primary nutrients alongside natural plant compounds such as auxins, cytokinins, and polysaccharides, plus a range of trace elements absorbed by the algae from seawater.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Primary nutrient content',
              description: 'Low; generally well under 1% N, P, or K by weight',
            },
            {
              term: 'Notable constituents',
              description:
                'Natural plant-growth compounds, polysaccharides, and trace elements',
            },
            {
              term: 'Common source species',
              description:
                'Various kelp species, depending on region and product',
            },
            {
              term: 'Product forms',
              description: 'Liquid concentrate, soluble powder, or dried meal',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'Because nutrient concentrations are low, seaweed extract is not used as a primary nitrogen, phosphorus, or potassium source, and should not replace a soil-test-based fertility program. Its agronomic interest centres on its biostimulant compounds rather than direct nutrient supply.',
        },
        {
          type: 'list',
          items: [
            'Not a substitute for primary macronutrient fertilizers',
            'Supplies only trace amounts of nutrients, mainly potassium and minor elements',
            'Typically applied for its biostimulant, not fertilizer, function',
          ],
        },
      ],
    },
    {
      id: 'use-and-benefits',
      heading: 'Use and benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Seaweed extract is applied as a foliar spray or soil drench, often alongside a conventional fertility program, on crops such as tomato, strawberry, and grape, where growers seek potential biostimulant effects such as improved stress tolerance or root development; reported benefits vary by product, crop, rate, and growing conditions.',
        },
        {
          type: 'list',
          items: [
            'Used as a supplement to, not a replacement for, a soil-test-based fertility program',
            'Applied via foliar spray, soil drench, or seed treatment depending on the product',
            'Effects are commonly attributed to plant-growth compounds and trace elements rather than macronutrient supply',
          ],
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'General practice is to apply seaweed extract according to the specific product’s label rate and timing, since concentration and formulation vary by manufacturer, and to treat it as a complementary input to, rather than a substitute for, conventional nutrient management.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Effects and appropriate use are product- and crop-specific',
          text: 'Reported biostimulant effects, appropriate rates, and application timing vary by specific product, crop, and growing conditions. AgricultureID does not publish universal application rates or guaranteed performance claims; follow the product label and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because application rates and nutrient content are low, seaweed extract’s direct environmental footprint from nutrient loss is generally minor compared with bulk fertilizers; broader sustainability considerations relate to the scale and management of the wild or cultivated seaweed harvest supplying the raw material.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The evidence base for specific biostimulant claims varies by compound, crop, and condition; growers evaluating a product should consider trial results relevant to their own crop and region.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'vermicompost' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'grape' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['micronutrient'],
  geographicScope:
    'Global overview of seaweed extract as a biostimulant input; source algae species, product formulation, and regulatory framing (biostimulant versus fertilizer) vary by region.',
  climateContext:
    'Reported effects on stress tolerance are sometimes cited under specific abiotic stress conditions; effects are not universal across all climates.',
  limitations: [
    'This entry describes seaweed extract as a low-nutrient biostimulant category; specific product formulations and claims vary and are not evaluated individually here.',
    'It is not a primary nutrient source and should not substitute for a soil-test-based fertility program.',
    'The strength of evidence for specific biostimulant effects varies by compound, crop, and growing condition and is not quantified here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Seaweed extract has a low nutrient content, generally well under 1% N, P, or K by weight; it is valued as a biostimulant rather than as a primary nutrient source.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cornell-cals',
          evidenceNote: 'Biostimulants and low-analysis organic products.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote: 'Organic amendments and nutrient content.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Biostimulant and low-analysis organic inputs',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nutrient management context for supplemental inputs',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Biostimulant use in horticultural crops',
    },
    { sourceId: 'ahdb', citedFor: 'Biostimulant product evaluation context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Seaweed Extract',
    description:
      'Seaweed extract as an agricultural biostimulant: low nutrient analysis, plant-growth compounds, foliar and soil-drench use, and its role alongside fertilizers',
    keywords: [
      'seaweed extract fertilizer',
      'kelp extract biostimulant',
      'liquid seaweed for plants',
      'biostimulant agriculture',
    ],
  },
  structuredData: { article: true },
};

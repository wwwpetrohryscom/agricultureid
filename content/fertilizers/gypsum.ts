import type { FertilizerContent } from '@/types/content';

export const gypsum: FertilizerContent = {
  id: 'fertilizer-gypsum',
  slug: 'gypsum',
  contentType: 'fertilizer',
  title: 'Gypsum',
  alternativeNames: ['Calcium sulfate dihydrate'],
  category: 'Fertilizer',
  subcategory: 'Calcium and sulfur amendment',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~23% Ca, ~18% S',
  summary:
    'Gypsum is a naturally occurring or industrially recovered calcium sulfate mineral used both as a nutrient source, supplying calcium and sulfur without changing soil pH, and as a soil amendment to reclaim sodic soils and improve aggregate stability.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gypsum (calcium sulfate dihydrate, CaSO₄·2H₂O) is mined from natural deposits or recovered as a by-product of certain industrial processes, then ground for agricultural use. It typically supplies around 23% calcium and 18% sulfur.',
    },
    {
      type: 'paragraph',
      text: 'Unlike agricultural lime, gypsum does not neutralise soil acidity, because sulfate is not a base in the way carbonate is. This distinction is central to how gypsum is used: it is chosen specifically when calcium or sulfur is needed without raising soil pH, or when its calcium is used to displace exchangeable sodium in sodic soils.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Calcium and sulfur source; also a soil amendment',
    },
    {
      label: 'Typical analysis',
      value: 'About 23% calcium and 18% sulfur',
    },
    { label: 'Nutrients supplied', value: 'Calcium and sulfur' },
    { label: 'Common form', value: 'Ground mineral or pelletised solid' },
    {
      label: 'Key consideration',
      value: 'Does not raise soil pH, unlike carbonate-based liming materials',
    },
    { label: 'Solubility', value: 'Slightly soluble in water' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Gypsum is calcium sulfate dihydrate, sourced from natural mineral deposits or recovered as a by-product of flue-gas desulfurisation or certain acid manufacturing processes. Agricultural gypsum products typically guarantee around 23% calcium and 18% sulfur.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Mineral formula', description: 'CaSO₄·2H₂O' },
            {
              term: 'Calcium content',
              description: 'Approximately 23% elemental calcium',
            },
            {
              term: 'Sulfur content',
              description: 'Approximately 18% elemental sulfur, as sulfate',
            },
            {
              term: 'Effect on soil pH',
              description:
                'Negligible; sulfate is not a neutralising base like carbonate',
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
          text: 'Gypsum supplies calcium and sulfate-sulfur in slightly soluble form, both immediately usable nutrients, while also acting on soil physical and chemical properties through the calcium ion’s effect on clay flocculation and sodium displacement.',
        },
        {
          type: 'list',
          items: [
            'Calcium and sulfur are both supplied without a liming effect',
            'Slightly soluble, releasing nutrients gradually over time',
            'Calcium ions can displace exchangeable sodium on soil cation exchange sites',
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
          text: 'Beyond supplying calcium and sulfur to crops such as groundnut, where calcium reaching the developing pod is a specific consideration, gypsum is widely used as a soil amendment to reclaim sodic soils, where displaced sodium is leached away, and to improve aggregate stability and reduce crusting on some soils.',
        },
        {
          type: 'list',
          items: [
            'Corrects calcium or sulfur deficiency without altering soil pH',
            'Used to reclaim sodic soils by displacing exchangeable sodium',
            'Can improve aggregate stability and reduce surface crusting on some soils',
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
          text: 'Where gypsum is used for sodic-soil reclamation, effective use generally requires adequate leaching water to carry displaced sodium below the root zone, and rates are typically based on a soil test of exchangeable sodium rather than a fixed figure.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates depend on soil test results and drainage',
          text: 'The appropriate gypsum rate depends on whether the goal is nutrient supply or sodic-soil reclamation, on soil test results including exchangeable sodium, and on local drainage conditions and guidance. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because gypsum does not affect soil pH, it can be used alongside pH-management programs without interference. Its use in sodic-soil reclamation depends on adequate drainage to carry leached sodium away; without sufficient drainage, reclamation is less effective.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Some gypsum sources are industrial by-products; sourcing and any regional guidance on by-product gypsum quality should be checked before use.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'kieserite' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
  ],
  connections: [
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'potato' },
    { type: 'soil', slug: 'saline-soil' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-amendments' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of gypsum as a calcium and sulfur amendment, with particular relevance to sodic-soil reclamation in arid and semi-arid irrigated regions.',
  climateContext:
    'Sodic-soil reclamation with gypsum depends on sufficient leaching water, making effectiveness closely tied to local rainfall or irrigation supply.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop, soil, or region.',
    'Effectiveness for sodic-soil reclamation depends on adequate drainage and leaching water, which are not present everywhere.',
    'Gypsum sourced as an industrial by-product can vary in purity; local guidance should be consulted on suitable sources.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Agricultural gypsum (calcium sulfate dihydrate) typically supplies around 23% calcium and 18% sulfur.',
      quantitative: true,
      citations: [
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'Gypsum as a soil amendment: calcium and sulfur content.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'fao',
          evidenceNote: 'Calcium and sulfur sources in agriculture.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Gypsum use in soil fertility and reclamation',
    },
    { sourceId: 'ifa', citedFor: 'Gypsum product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Gypsum and sodic-soil reclamation practice',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Calcium and sulfur amendment guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Gypsum',
    description:
      'Gypsum (calcium sulfate) as a fertilizer and soil amendment: calcium and sulfur supply, sodic-soil reclamation, and application principles.',
    keywords: [
      'gypsum fertilizer',
      'calcium sulfate soil amendment',
      'sodic soil reclamation',
      'gypsum soil amendment',
    ],
  },
  structuredData: { article: true },
};

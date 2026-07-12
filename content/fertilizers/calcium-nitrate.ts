import type { FertilizerContent } from '@/types/content';

export const calciumNitrate: FertilizerContent = {
  id: 'fertilizer-calcium-nitrate',
  slug: 'calcium-nitrate',
  contentType: 'fertilizer',
  title: 'Calcium nitrate',
  alternativeNames: ['Ca(NO₃)₂', 'Nitrate of lime'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '15.5-0-0 (+19% Ca)',
  summary:
    'Calcium nitrate is a highly soluble fertilizer supplying nitrate-nitrogen together with a substantial readily available calcium content, widely used in fertigation and on crops where both rapid nitrogen uptake and calcium delivery to developing tissue are priorities.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Calcium nitrate, Ca(NO₃)₂, is manufactured by reacting limestone or another calcium source with nitric acid. The resulting product typically analyses around 15.5% nitrogen, entirely as nitrate, together with about 19% calcium — one of the few fertilizers to deliver calcium in a rapidly soluble, readily plant-available form.',
    },
    {
      type: 'paragraph',
      text: 'Because both the nitrate and the calcium it supplies are quickly available, calcium nitrate is commonly used where growers want fast-acting nitrogen alongside a calcium source that does not depend on soil dissolution, unlike carbonate-based liming materials.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Nitrate-nitrogen fertilizer with soluble calcium',
    },
    {
      label: 'Typical analysis',
      value: '15.5-0-0 (N-P₂O₅-K₂O), with about 19% calcium',
    },
    { label: 'Nutrients supplied', value: 'Nitrate-nitrogen and calcium' },
    {
      label: 'Common form',
      value: 'Water-soluble granules, prills, or liquid solution',
    },
    {
      label: 'Key consideration',
      value:
        'Hygroscopic; often stored and handled separately from other fertilizer materials',
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
          text: 'Calcium nitrate is produced by neutralising nitric acid with a calcium source, typically limestone, yielding a highly soluble salt. Commercial grades commonly guarantee about 15.5% nitrogen, entirely in nitrate form, and roughly 19% calcium.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'Ca(NO₃)₂' },
            {
              term: 'Nitrogen content',
              description: 'About 15.5% total nitrogen, entirely as nitrate',
            },
            {
              term: 'Calcium content',
              description: 'About 19% calcium, in a rapidly soluble form',
            },
            {
              term: 'Physical form',
              description:
                'Hygroscopic granules or prills; also sold as a liquid solution',
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
          text: 'Calcium nitrate supplies nitrogen entirely as nitrate, available for immediate root uptake, and calcium in a soluble form that can move into the plant through the transpiration stream more readily than calcium from slower-dissolving sources such as ground limestone.',
        },
        {
          type: 'list',
          items: [
            'Nitrate portion is immediately plant-available',
            'Calcium is supplied in soluble form, not requiring soil dissolution',
            'Contains no phosphorus, potassium, or micronutrients',
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
          text: 'Calcium nitrate is widely used in fertigation and hydroponic nutrient solutions, and on fruiting vegetables such as tomato and sweet pepper and on fruit crops such as apple, where adequate calcium supply to rapidly expanding tissue is a recognised management consideration alongside nitrogen supply.',
        },
        {
          type: 'list',
          items: [
            'Well suited to fertigation, hydroponics, and foliar programs due to full solubility',
            'Used where both rapid nitrogen supply and soluble calcium delivery are wanted',
            'Compatible with many liquid fertilizer blends when mixing compatibility is checked',
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
          text: 'General practice is to apply calcium nitrate in split doses through the season, matched to nitrogen and calcium demand at key growth stages, and to check compatibility before tank-mixing with sulfate- or phosphate-containing fertilizers, since calcium can react with these to form insoluble precipitates.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and compatibility are situation-specific',
          text: 'The correct rate, timing, and number of splits depend on the crop, soil and tissue test results, yield goal, and local guidance, and tank-mix compatibility depends on the other products used. AgricultureID does not publish universal fertilizer rates; follow soil and tissue testing and the product label.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'As with other nitrate fertilizers, the nitrogen in calcium nitrate is mobile in soil and can be lost to leaching under heavy rainfall or over-irrigation, or to denitrification in saturated soils, so timing and rate management follow the same general principles as for other nitrate-nitrogen sources.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because calcium nitrate is hygroscopic, storage in a dry, well-ventilated location separate from incompatible materials is generally recommended to preserve product quality.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'potassium-nitrate' },
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'apple' },
    { type: 'irrigation-method', slug: 'fertigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of calcium nitrate as a nitrogen and calcium fertilizer, common in fertigated, greenhouse, and high-value fruit and vegetable production.',
  climateContext:
    'Nitrate leaching risk increases with high rainfall or irrigation volumes between applications and crop uptake, as with other nitrate-nitrogen sources.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nutrient rate recommendation for any crop or region.',
    'Tank-mix compatibility with other fertilizers depends on the specific products involved and is not exhaustively covered here.',
    'Calcium-related physiological disorders in crops have multiple contributing causes beyond nutrient supply, which this entry does not address.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Calcium nitrate typically analyses around 15.5% nitrogen, entirely as nitrate, together with about 19% calcium.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents calcium nitrate as a nitrogen and calcium fertilizer source and its typical composition.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance on calcium nutrition describes calcium nitrate nitrogen and calcium content.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Nitrogen and calcium fertilizer forms and use',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Calcium nitrate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrate behaviour and calcium availability in soil',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Calcium nutrition in fruiting crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Calcium Nitrate',
    description:
      'Calcium nitrate fertilizer: composition, soluble nitrate-nitrogen and calcium supply, fertigation and greenhouse use, and application principles.',
    keywords: [
      'calcium nitrate fertilizer',
      'soluble calcium fertilizer',
      'fertigation calcium source',
      'nitrate nitrogen fertilizer',
    ],
  },
  structuredData: { article: true },
};

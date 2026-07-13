import type { FertilizerContent } from '@/types/content';

export const ureaAmmoniumNitrate: FertilizerContent = {
  id: 'fertilizer-urea-ammonium-nitrate',
  slug: 'urea-ammonium-nitrate',
  contentType: 'fertilizer',
  title: 'Urea ammonium nitrate (UAN)',
  alternativeNames: ['UAN', 'UAN solution', 'Liquid nitrogen fertilizer'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '28-0-0 to 32-0-0',
  summary:
    'Urea ammonium nitrate (UAN) is a clear liquid nitrogen fertilizer made by dissolving urea and ammonium nitrate in water, supplying nitrogen simultaneously in nitrate, ammonium, and amide forms, and widely used where liquid handling, fertigation, or in-crop application is preferred.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Urea ammonium nitrate (UAN) is a solution fertilizer produced by dissolving urea and ammonium nitrate together in water. Common grades analyse around 28%, 30%, or 32% nitrogen, with the higher-nitrogen solutions containing less water and therefore being more prone to salting out at low temperatures.',
    },
    {
      type: 'paragraph',
      text: 'A distinctive feature of UAN is that it delivers nitrogen in three forms at once: roughly half as urea (amide), with the remainder split between ammonium and nitrate. This blend of immediately available nitrate and more slowly transforming ammonium and urea gives UAN flexible behaviour, but the urea fraction still carries a risk of ammonia volatilisation when surface-applied.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Liquid straight nitrogen fertilizer' },
    { label: 'Typical analysis', value: '28-0-0 to 32-0-0 (N-P₂O₅-K₂O)' },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen (nitrate, ammonium, and amide forms)',
    },
    { label: 'Common form', value: 'Clear liquid solution' },
    {
      label: 'Key consideration',
      value:
        'Urea fraction can volatilise if surface-applied; solution is corrosive to some metals',
    },
    { label: 'Solubility', value: 'Fully in solution as supplied' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'UAN is blended by dissolving urea and ammonium nitrate in water to a target nitrogen concentration, most commonly 28%, 30%, or 32% nitrogen. Because it is a solution rather than a solid, it is measured and applied by volume and is compatible with a range of liquid application equipment.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Composition',
              description: 'Urea and ammonium nitrate dissolved in water',
            },
            {
              term: 'Nitrogen forms',
              description:
                'Approximately half amide (urea), with the remainder as ammonium and nitrate',
            },
            {
              term: 'Salt-out temperature',
              description:
                'Higher-analysis grades crystallise at higher temperatures and are less suited to cold conditions',
            },
            {
              term: 'Physical form',
              description: 'Clear liquid, handled and applied by volume',
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
          text: 'UAN supplies nitrogen only, but across three forms that follow different pathways in soil. The nitrate fraction is immediately plant-available and mobile, the ammonium fraction is held on exchange sites before nitrifying, and the urea fraction is hydrolysed to ammonium before also nitrifying.',
        },
        {
          type: 'list',
          items: [
            'Nitrate nitrogen is immediately available and readily leached under wet conditions',
            'Ammonium and urea fractions convert to nitrate over time through soil processes',
            'Contains no phosphorus, potassium, or sulfur',
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
          text: 'UAN is favoured where liquid handling offers practical advantages, including fertigation, banding with liquid equipment, split in-crop applications on cereals, and blending with certain crop-protection or micronutrient products. It can be dribble-banded or injected to reduce contact volatilisation and foliar scorch.',
        },
        {
          type: 'list',
          items: [
            'Suited to fertigation, banding, and split in-season nitrogen applications',
            'Can be co-applied with some other liquid inputs where compatibility is confirmed',
            'Dribble-banding or incorporation reduces volatilisation from the urea fraction',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right nitrogen rate, timing, placement, and choice between UAN and other nitrogen sources depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance, and always read the product label.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and handling',
      body: [
        {
          type: 'paragraph',
          text: 'UAN solutions are corrosive to mild steel and some other metals, so storage and application equipment must use compatible materials or corrosion inhibitors. Foliar contact can scorch leaves, and the urea fraction is subject to ammonia volatilisation when left on the surface without incorporation or timely rainfall.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'UAN can cause corrosion of incompatible equipment and foliar burn if applied over the top of sensitive crops. Ammonium nitrate content is subject to storage and security regulations in some jurisdictions; follow local rules and the product label.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
    { type: 'fertilizer', slug: 'calcium-ammonium-nitrate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'barley' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'irrigation-method', slug: 'fertigation' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of UAN as a liquid nitrogen fertilizer. Grade selection, storage rules, and use in fertigation vary by climate and region.',
  climateContext:
    'Higher-analysis UAN grades salt out at low temperatures, and surface volatilisation of the urea fraction increases with warm, dry conditions after application.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nitrogen rate recommendation for any crop or region.',
    'The split between volatilisation, leaching, and uptake depends on weather, soil, and placement and is not quantified here.',
    'Ammonium nitrate content means UAN is subject to storage and security regulation in some jurisdictions.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'UAN solutions are commonly supplied at around 28%, 30%, or 32% nitrogen, delivering nitrogen as a mixture of urea, ammonium, and nitrate forms.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents UAN solution grades and their nitrogen form composition.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS nutrient management guidance describes UAN nitrogen content and forms.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'UAN grades and product characteristics' },
    { sourceId: 'fao', citedFor: 'Nitrogen fertilizer sources and global use' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrogen form behaviour and losses in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Liquid nitrogen management context' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Urea Ammonium Nitrate (UAN)',
    description:
      'UAN liquid nitrogen fertilizer: composition, the three nitrogen forms it supplies, use in fertigation and banding, corrosion, and volatilisation.',
    keywords: [
      'urea ammonium nitrate',
      'UAN fertilizer',
      'liquid nitrogen fertilizer',
      '28-0-0 fertilizer',
    ],
  },
  structuredData: { article: true },
};

import type { CropContent } from '@/types/content';

export const chickpea: CropContent = {
  id: 'crop-chickpea',
  slug: 'chickpea',
  contentType: 'crop',
  title: 'Chickpea',
  scientificName: 'Cicer arietinum',
  alternativeNames: ['Garbanzo bean', 'Bengal gram'],
  category: 'Legume crop',
  subcategory: 'Pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Chickpea is an annual pulse legume grown for its protein-rich seed, cultivated in two principal market types across semi-arid regions worldwide, and valued in rotation for its nitrogen-fixing ability.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chickpea is grown in two broad market types: desi, with smaller, angular, darker-coated seed and predominant in South Asian production and cuisine, and kabuli, with larger, lighter-coated, ram’s-head-shaped seed more common in Mediterranean, Middle Eastern, and North American production.',
    },
    {
      type: 'paragraph',
      text: 'The foliage of chickpea is covered in fine glandular hairs that exude organic acids, a distinctive trait among grain legumes. As with other legumes, chickpea forms a symbiotic relationship with compatible rhizobia in root nodules, enabling biological nitrogen fixation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Cicer arietinum' },
    {
      label: 'Primary uses',
      value:
        'Dry seed for food use — whole, split, or ground into flour; canned and roasted products',
    },
    {
      label: 'Climate',
      value:
        'Cool-season pulse grown as a rainfed winter or spring crop depending on region',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams of moderate fertility; sensitive to waterlogging',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea is grown mainly as a dry pulse crop, harvested at full maturity for its seed, and is a staple protein source in many diets, particularly across South Asia, the Middle East, and the Mediterranean.',
        },
        {
          type: 'paragraph',
          text: 'Because desi and kabuli types differ in seed characteristics, market destination, and, to some extent, regional adaptation, cultivar market type is a central choice in production planning.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus and species', description: 'Cicer arietinum' },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing Mesorhizobium bacteria',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Principal market types',
          columns: [
            'Type',
            'Seed characteristics',
            'Predominant use and region',
          ],
          rows: [
            [
              'Desi',
              'Smaller, angular, darker seed coat',
              'Widely grown and consumed across South Asia, often split (dal) or ground into flour',
            ],
            [
              'Kabuli',
              'Larger, lighter-colored, ram’s-head-shaped seed',
              'Common in Mediterranean, Middle Eastern, and North American production; often used whole or canned',
            ],
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea was domesticated in the Fertile Crescent, in what is now southeastern Turkey, as one of the founder crops of Near Eastern agriculture, and spread in antiquity to South Asia and the Mediterranean, regions that remain major production centers.',
        },
        {
          type: 'paragraph',
          text: 'Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies and should be consulted directly for up-to-date figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea is grown as a rainfed winter or spring crop depending on region, and it is comparatively drought-tolerant relative to many other pulses, though yield remains sensitive to terminal drought and heat during pod fill.',
        },
        {
          type: 'paragraph',
          text: 'Frost can damage flowers and young pods in exposed sowings, so planting timing is set locally to balance the benefit of a longer growing season against frost risk at flowering.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea performs best on well-drained loams of moderate fertility. It is sensitive to waterlogging, which restricts root and nodule development and is associated with increased pressure from soilborne disease, particularly Fusarium wilt.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil drainage should be assessed with local soil survey data, since wet soils are strongly linked to elevated wilt risk in chickpea.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea is direct-seeded, and seed is often treated with a compatible Mesorhizobium inoculant in fields without a recent history of chickpea production. Rotation with cereals is a standard practice in semi-arid cropping systems to help manage soilborne disease.',
        },
        {
          type: 'list',
          items: [
            'Market type selection (desi or kabuli) matched to intended market and regional adaptation',
            'Inoculation with compatible Mesorhizobium strains in fields new to chickpea production',
            'Crop rotation with cereals to manage soilborne diseases, particularly Fusarium wilt',
            'Planting timing balanced against local frost risk at flowering',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Biological nitrogen fixation can supply a significant share of the crop’s nitrogen requirement where nodulation is effective. Phosphorus availability is often a limiting factor, particularly on alkaline soils common in many chickpea-growing regions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and inoculation programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea is grown largely under rain-fed conditions in traditional production regions, with terminal drought and heat at pod fill representing key, often unavoidable, yield constraints. Supplemental irrigation is used in some production systems.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is available, crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt is widely regarded as the single most damaging disease of chickpea, and gray mold (Botrytis) can cause significant losses under humid conditions, particularly in dense canopies. Aphids and root-knot nematodes are among the notable pests affecting the crop.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpea is harvested once pods and foliage have dried at maturity, by combining or, in some smallholder systems, by hand pulling. Shattering and lodging can cause losses, so harvest timing and method are matched to local conditions and equipment.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Dry seed used whole, split, or ground into flour in a wide range of dishes',
            'Canned chickpeas and prepared foods such as hummus and falafel',
            'Roasted chickpeas as a snack food in some markets',
            'Crop residues used in some regions as animal feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'pea' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'inoculum', 'macronutrient'],
  geographicScope:
    'Global overview. Market type (desi or kabuli), sowing timing, and input levels are region-specific.',
  climateContext:
    'Cool-season, drought-tolerant pulse legume grown as a rainfed winter or spring crop across semi-arid and Mediterranean-type regions.',
  limitations: [
    'Market type selection and sowing timing are region- and market-specific decisions not reduced to universal guidance here.',
    'Terminal drought and heat stress at pod fill are recurring, often unavoidable constraints in rain-fed production.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of chickpea in global food systems' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Pulse crop research in semi-arid systems' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management for pulse crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chickpea',
    description:
      'An evidence-based reference on chickpea: desi and kabuli types, semi-arid climate needs, nitrogen fixation, diseases, pests, and food uses.',
    keywords: [
      'chickpea',
      'Cicer arietinum',
      'garbanzo bean',
      'chickpea agronomy',
    ],
  },
  structuredData: { article: true },
};

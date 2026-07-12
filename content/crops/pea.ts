import type { CropContent } from '@/types/content';

export const pea: CropContent = {
  id: 'crop-pea',
  slug: 'pea',
  contentType: 'crop',
  title: 'Pea',
  scientificName: 'Pisum sativum',
  alternativeNames: ['Garden pea', 'Field pea'],
  category: 'Legume crop',
  subcategory: 'Grain and pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Pea is a cool-season annual legume grown for its edible seeds and pods, used in both food and feed systems and valued for its symbiotic nitrogen fixation in crop rotations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pea is grown either as a dry or field pea, harvested mature for food or feed use, or as a fresh garden pea, picked immature for direct consumption, canning, or freezing. Plants climb by means of tendrils and are often grown supported or, in modern semi-leafless cultivars, bred to stand more independently.',
    },
    {
      type: 'paragraph',
      text: 'As a legume, pea forms a symbiotic relationship with Rhizobium leguminosarum bacteria in root nodules, allowing it to fix atmospheric nitrogen, a trait that contributes to its long-standing role in cereal-based crop rotations.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Pisum sativum' },
    {
      label: 'Primary uses',
      value:
        'Dry split peas and animal feed; fresh, canned, and frozen garden peas',
    },
    {
      label: 'Climate',
      value:
        'Cool-season; more cold-tolerant than many legumes but sensitive to heat at flowering',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams with near-neutral pH; sensitive to waterlogging',
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
          text: 'Pea occupies two broad production streams: dry or field pea, grown to full maturity for food, feed, or protein and starch processing, and vining or garden pea, harvested immature for fresh, canned, or frozen markets.',
        },
        {
          type: 'paragraph',
          text: 'Modern semi-leafless cultivars, in which some leaflets are replaced by additional tendrils, were bred to improve standing ability and reduce lodging, which historically complicated pea harvest.',
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
            { term: 'Genus and species', description: 'Pisum sativum' },
            {
              term: 'Growth habit',
              description:
                'Climbing annual supported by tendrils; semi-leafless cultivars bred for improved standing ability',
            },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing Rhizobium leguminosarum bacteria',
            },
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
          text: 'Pea is among the earliest domesticated crops, cultivated in the Fertile Crescent alongside wheat and barley and spreading across Europe and Asia in antiquity. It has since become established as a widely grown crop across temperate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies and should be consulted directly, since figures shift with weather and markets each season.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pea is a cool-season crop, generally more tolerant of cold during early growth than many other legumes, which allows it to be sown relatively early in the season in many regions.',
        },
        {
          type: 'paragraph',
          text: 'Flowering and pod fill are sensitive to heat, and elevated temperatures during this window can reduce both yield and seed quality, which is a key reason planting timing and cultivar maturity are matched to local conditions.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pea performs best on well-drained loams with near-neutral pH. It is sensitive to waterlogging, which restricts root and nodule development and increases the risk of root rot diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil drainage and pH should be assessed with local soil survey data, since both influence nodulation and disease risk.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'In fields without a recent history of pea production, seed is often treated with a compatible rhizobial inoculant to support effective nodulation. Rotation intervals away from pea and other closely related legumes help manage the buildup of soilborne pathogens over time.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to market type (dry, field, or fresh garden pea) and local season length',
            'Inoculation with compatible Rhizobium leguminosarum strains in fields new to pea production',
            'Crop rotation, commonly with cereals, to manage soilborne diseases',
            'Weed management during early growth, before the canopy closes',
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
          text: 'Biological nitrogen fixation can supply a substantial share of crop nitrogen needs when nodulation is effective, while phosphorus supports early root and nodule development. Requirements depend on soil supply, target yield, and nodulation status.',
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
          text: 'Pea is grown both rain-fed and under irrigation. Moisture stress during flowering and pod fill is a major yield-limiting factor, and consistent water supply during this window is important where irrigation is available.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is one of the most recognizable foliar diseases of pea, and a complex of soilborne fungi and oomycetes can cause root rot, particularly in wet or compacted soils. The pea aphid is a classic and economically important pest, capable of transmitting viruses in addition to direct feeding damage.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, drainage improvement, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dry and field peas are combined once pods and seeds have matured and dried to a moisture content suitable for threshing and safe storage. Fresh garden peas are harvested immature, at peak sweetness and tenderness, often using specialized viner harvesters for processing markets.',
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
            'Dry split peas used in soups, dals, and other food preparations',
            'Fresh, canned, and frozen garden peas as a vegetable',
            'Field pea used as animal feed and, in some regions, as a protein and starch processing feedstock',
            'Pea protein isolates used as an ingredient in some plant-based food products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'lentil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'inoculum', 'macronutrient'],
  geographicScope:
    'Global overview. Market type (dry, field, or fresh garden pea), cultivar, and input levels are region-specific.',
  climateContext:
    'Cool-season legume relatively tolerant of cold but sensitive to heat at flowering; grown rain-fed and under irrigation.',
  limitations: [
    'Market type and cultivar selection are region- and market-specific decisions not reduced to universal guidance here.',
    'Nitrogen fixation reduces, but does not eliminate, the need for supplemental nitrogen in many soils.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of pea in global food and feed systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'ahdb', citedFor: 'Regional pea agronomy and management' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for pea' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pea',
    description:
      'A structured reference on pea: classification, cool-season climate needs, nitrogen fixation, soil requirements, diseases, pests, and uses.',
    keywords: ['pea', 'Pisum sativum', 'pulse legume', 'pea agronomy'],
  },
  structuredData: { article: true },
};

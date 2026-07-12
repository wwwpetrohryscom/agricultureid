import type { CropContent } from '@/types/content';

export const mustard: CropContent = {
  id: 'crop-mustard',
  slug: 'mustard',
  contentType: 'crop',
  title: 'Mustard',
  scientificName:
    'Brassica juncea (brown/Indian mustard); Brassica nigra (black mustard); Sinapis alba (white/yellow mustard)',
  category: 'Oilseed and spice crop',
  subcategory: 'Annual seed crop',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Annual',
  summary:
    'Mustard is an annual Brassica crop grown mainly for its seeds, used as a spice and condiment, pressed for oil, or grown as a cover and biofumigant crop in some rotations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Several distinct mustard species are cultivated under the common name mustard, differing in seed color, pungency, and typical use: brown or Indian mustard, black mustard, and white or yellow mustard are the most widely grown.',
    },
    {
      type: 'paragraph',
      text: 'Beyond direct seed and oil use, mustard is also grown in some regions as a cover crop, valued for its rapid growth and glucosinolate content, which can help suppress certain soil-borne pests and pathogens when incorporated into the soil.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Life cycle', value: 'Annual' },
    {
      label: 'Main species',
      value: 'Brassica juncea, Brassica nigra, Sinapis alba',
    },
    {
      label: 'Primary uses',
      value: 'Seed spice and condiment, mustard oil, cover crop',
    },
    {
      label: 'Climate',
      value: 'Cool-season annual; tolerates cold better than heat',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Tolerates a wide soil pH range.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Mustard is grown at scales ranging from smallholder condiment and oilseed production, particularly in South Asia, to large mechanized fields in temperate grain-growing regions.',
        },
        {
          type: 'paragraph',
          text: 'The crop is fast-growing and completes its life cycle from sowing to seed maturity within a single cool season, making it suitable both as a primary cash crop and as a short-duration rotation or cover crop.',
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
            { term: 'Family', description: 'Brassicaceae (cabbage family)' },
            { term: 'Genus', description: 'Brassica and Sinapis' },
            {
              term: 'Principal species',
              description:
                'Brassica juncea, Brassica nigra, and Sinapis alba, distinguished by seed color and pungency',
            },
            {
              term: 'Growth habit',
              description:
                'Erect annual herb with lobed leaves, yellow four-petaled flowers, and seed pods (siliques) borne on branching stems',
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
          text: 'Mustard species originated across regions spanning the Mediterranean, the Middle East, and Central and South Asia, and have been cultivated and used as a condiment since antiquity.',
        },
        {
          type: 'paragraph',
          text: 'Major producers today include Canada, Russia, Nepal, and Myanmar for various mustard types, alongside significant production of Indian mustard in South Asia for both oil and condiment use. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Mustard is a cool-season crop that tolerates cold and light frost reasonably well but is sensitive to high heat during flowering and seed set, which can reduce yield and seed quality.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams are suitable, and mustard tolerates a wider soil pH range than many other Brassica crops. Poorly drained soils increase the risk of root and stem disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Sowing date is a key lever for avoiding heat stress during flowering and should be planned around local seasonal temperature patterns.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Species and cultivar selection matched to target use: condiment seed, oil, or cover cropping',
            'Sowing timed to complete flowering before the onset of high temperatures in the target region',
            'Crop rotation with non-Brassica crops to manage soil-borne disease and pest carryover',
            'Incorporation of mustard biomass into soil in some cover-crop and biofumigation systems',
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
          text: 'Sulfur is a particularly important nutrient for mustard and other Brassica crops, supporting the glucosinolate compounds linked to seed pungency and oil quality, alongside nitrogen, which supports overall vegetative growth and seed yield.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Mustard is grown both rain-fed and under irrigation, with moisture particularly important during germination, flowering, and pod fill; drought stress during flowering can significantly reduce seed yield.',
        },
        {
          type: 'paragraph',
          text: 'Furrow irrigation is traditional in many production regions, while drip irrigation is used in more intensive or water-limited systems.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is a common disease of mustard and other Brassica crops, particularly under cool, humid conditions, and Sclerotinia stem rot (white mold) can cause significant yield loss in some production regions, especially under wet conditions during flowering. Aphids and flea beetles are common pests, with flea beetles particularly damaging to young seedlings.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Downy mildew', 'Disease', 'Favored by cool, humid conditions'],
            [
              'Sclerotinia stem rot',
              'Disease',
              'Significant yield loss risk under wet flowering conditions',
            ],
            ['Aphids', 'Pest', 'Sap-feeding insects on foliage and pods'],
            [
              'Flea beetles',
              'Pest',
              'Particularly damaging to young seedlings',
            ],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Mustard is harvested once seed pods mature and dry, typically by combine in mechanized production, taking care to minimize shattering losses since ripe pods can split and drop seed readily.',
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
            'Whole and ground seed used to make mustard condiment and as a spice',
            'Seed pressed for mustard oil used in cooking and, in some regions, industrial applications',
            'Meal remaining after oil extraction used as livestock feed or organic fertilizer in some systems',
            'Grown as a cover and biofumigant crop in some vegetable and arable rotations',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'sclerotinia' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'kale' },
  ],
  glossaryTerms: ['annual-crop', 'cover-crop', 'crop-rotation'],
  geographicScope:
    'Global overview; major production in Canada, Russia, and South Asia (notably India and Nepal), with cultivation for oil, condiment, and cover-crop use worldwide.',
  climateContext:
    'Cool-season annual crop tolerant of cold and light frost but sensitive to heat stress during flowering and seed set.',
  limitations: [
    'Mustard species differ substantially in pungency, oil content, and typical use, which is not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global oilseed and spice crop production context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Mustard disease and pest compendium data' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Brassica crop production context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mustard',
    description:
      'A structured, evidence-based reference on mustard: classification, climate needs, cultivation, nutrition, diseases, pests, harvest, and seed and oil uses.',
    keywords: [
      'mustard',
      'Brassica juncea',
      'oilseed crop',
      'mustard seed cultivation',
    ],
  },
  structuredData: { article: true },
};

import type { CropContent } from '@/types/content';

export const triticale: CropContent = {
  id: 'crop-triticale',
  slug: 'triticale',
  contentType: 'crop',
  title: 'Triticale',
  scientificName:
    '×Triticosecale spp. (intergeneric hybrid of wheat, Triticum, and rye, Secale)',
  alternativeNames: ['Wheat-rye hybrid'],
  category: 'Cereal crop',
  subcategory: 'Hybrid temperate cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual (winter or spring types)',
  summary:
    'Triticale is a human-made cereal hybrid of wheat and rye grown mainly for livestock feed and forage, combining wheat-like grain yield potential with rye-like hardiness and tolerance of poorer soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Triticale is a cereal created by crossing wheat (Triticum) with rye (Secale), then doubling the chromosome number to produce a fertile hybrid combining traits of both parents. Breeding aimed to combine the grain quality and yield potential of wheat with the hardiness, disease tolerance, and soil adaptability of rye.',
    },
    {
      type: 'paragraph',
      text: 'It is grown mainly for animal feed and forage, and to a lesser extent for food and industrial uses, particularly on land or under conditions where wheat performs less reliably. As with wheat and rye, both winter and spring types are cultivated depending on regional climate.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    { label: 'Life cycle', value: 'Annual (winter or spring types)' },
    { label: 'Main taxon', value: '×Triticosecale (Triticum × Secale hybrid)' },
    {
      label: 'Primary uses',
      value:
        'Livestock feed grain, whole-crop forage, some food and industrial uses',
    },
    {
      label: 'Climate',
      value: 'Cool to temperate; tolerates poorer conditions than wheat',
    },
    {
      label: 'Soil preference',
      value:
        'Tolerant of lighter, more acidic, or lower-fertility soils than wheat',
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
          text: 'Triticale is a synthetic cereal species, produced through deliberate hybridization rather than arising through natural domestication, and is one of relatively few crop species developed largely through modern plant breeding rather than long-term traditional selection.',
        },
        {
          type: 'paragraph',
          text: 'It is grown as an alternative to wheat where soil, climate, or disease pressure favor a hardier crop, and is widely used where feed grain and forage quality, rather than milling quality, are the primary objectives.',
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
            { term: 'Family', description: 'Poaceae (grass family)' },
            {
              term: 'Origin',
              description:
                'Intergeneric hybrid of Triticum (wheat) and Secale (rye), with the hybrid genome subsequently stabilized as an amphidiploid',
            },
            { term: 'Taxonomic designation', description: '×Triticosecale' },
            {
              term: 'Growth habit',
              description:
                'Tillering annual grass producing spikes similar in form to wheat',
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
          text: 'Triticale was first produced experimentally in the late 19th century and developed into agronomically useful varieties through 20th-century breeding programs, notably in Europe and the Americas, aiming to combine wheat productivity with rye hardiness.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across a range of temperate regions, though on a smaller total area than wheat, rye, or barley. Production statistics are compiled by national and international bodies and change over time.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Triticale generally shows better cold tolerance and stress resilience than wheat, reflecting its rye parentage, while retaining reasonable yield potential under a range of temperate conditions.',
        },
        {
          type: 'paragraph',
          text: 'As with related small grains, grain fill is sensitive to heat and drought, and winter types require a period of cold to trigger flowering.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Triticale tolerates lighter, more acidic, and lower-fertility soils better than wheat, making it a useful option on marginal land, though it still responds positively to improved soil conditions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishment follows similar principles to wheat and rye: an even, well-anchored stand sown at a locally appropriate depth and rate into a firm, moist seedbed, with winter or spring type chosen according to local climate.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to winter/spring type and intended feed or forage use',
            'Crop rotation to manage soil-borne diseases and weeds',
            'Seedbed preparation appropriate to the tillage system in use',
            'Timely weed management during early growth',
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
          text: 'Nitrogen, phosphorus, and potassium requirements broadly resemble those of wheat, adjusted for the lower-fertility soils on which triticale is often grown and its typical use as a feed rather than milling grain.',
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
          text: 'Triticale is grown both rain-fed and under irrigation, with water demand highest around stem elongation, heading, and grain filling, similar to wheat and rye.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Triticale generally shows good resistance to several wheat diseases inherited from its rye parentage, though it can still be affected by stem rust and powdery mildew under favorable conditions, along with aphids that can transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Grain triticale is harvested by combining once the crop has dried to a moisture content suitable for safe storage. Where grown for whole-crop forage, it is cut and conserved as silage at an earlier growth stage matched to feed-quality goals.',
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
            'Livestock feed grain for poultry, pigs, and ruminants',
            'Whole-crop silage and forage',
            'Some use in bread and other food products, generally blended with wheat flour',
            'Straw for bedding or as a soil amendment',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'stem-rust' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rye' },
    { type: 'crop', slug: 'barley' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cultivar', 'forage'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season hybrid cereal combining wheat productivity with rye-derived hardiness and stress tolerance.',
  limitations: [
    'As a relatively recent hybrid crop, regional agronomic guidance is less extensive than for wheat or rye and should be sought from local extension sources.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of triticale in feed and forage systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Triticale breeding and agronomy research',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Regional hybrid cereal agronomy and management',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Triticale',
    description:
      'A structured, evidence-based reference on triticale: hybrid origin, climate and soil tolerance, agronomy, diseases, pests, harvest, and feed uses.',
    keywords: ['triticale', 'wheat-rye hybrid', 'cereal crop', 'feed grain'],
  },
  structuredData: { article: true },
};

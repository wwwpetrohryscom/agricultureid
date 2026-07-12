import type { CropContent } from '@/types/content';

export const aloeVera: CropContent = {
  id: 'crop-aloe-vera',
  slug: 'aloe-vera',
  contentType: 'crop',
  title: 'Aloe vera',
  scientificName: 'Aloe vera (syn. Aloe barbadensis)',
  alternativeNames: ['Aloe barbadensis'],
  category: 'Specialty crop',
  subcategory: 'Perennial succulent grown for leaf gel',
  botanicalFamily:
    'Asphodelaceae (formerly classified within Liliaceae/Xanthorrhoeaceae)',
  lifecycle: 'Perennial',
  summary:
    'Aloe vera is a drought-tolerant perennial succulent grown commercially for the gel and latex contained in its thick leaves, used as a raw material by the cosmetic, personal-care, and food and beverage industries.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Aloe vera is a rosette-forming succulent with thick, fleshy leaves that store water, an adaptation to its native semi-arid habitat. Commercial cultivation harvests these leaves for processing into gel, powder, and extract products supplied to industry.',
    },
    {
      type: 'paragraph',
      text: 'This entry describes aloe vera as an agricultural crop — its botany, climate and soil requirements, cultivation, and role as a raw-material crop for cosmetic, personal-care, and food-industry manufacturing. Any medicinal or health-efficacy claims associated with aloe vera are outside the scope of this reference and are subject to separate regulatory requirements.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Asphodelaceae',
    },
    { label: 'Life cycle', value: 'Perennial succulent' },
    { label: 'Main species', value: 'Aloe vera' },
    {
      label: 'Primary uses',
      value:
        'Leaf gel and latex as a raw material for cosmetic and food industries',
    },
    {
      label: 'Climate',
      value: 'Arid to semi-arid; notably drought- and heat-tolerant',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy and chalky soils',
      note: 'Very intolerant of waterlogging.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Aloe vera is grown commercially in warm, dry to semi-arid regions worldwide, as a field crop or, in cooler climates, under protected cultivation, supplying leaves for processing into gel, powder, and extract ingredients.',
        },
        {
          type: 'paragraph',
          text: 'Because the plant tolerates drought and poor soils well, it is sometimes grown on marginal land less suited to conventional food crops, though yields and leaf quality respond to good management and reliable, if modest, water supply.',
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
            { term: 'Family', description: 'Asphodelaceae' },
            { term: 'Genus and species', description: 'Aloe vera' },
            {
              term: 'Growth habit',
              description:
                'Stemless or short-stemmed perennial succulent, forming a rosette of thick, water-storing leaves and propagating readily by offsets',
            },
            {
              term: 'Harvested tissue',
              description:
                'Mature leaves, processed for the clear inner gel (mucilage) and the yellow latex found beneath the leaf rind',
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
          text: 'Aloe vera is believed to have originated on the Arabian Peninsula or in nearby parts of Africa, adapted to arid and semi-arid environments, and has been cultivated and traded for centuries before spreading through introduction and naturalization to warm regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production today spans arid and semi-arid regions across the Americas, Asia, Africa, and parts of Europe. Production statistics are less comprehensively tracked than for major food crops and are best sourced from FAO and national agricultural agencies where available.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Aloe vera is well adapted to hot, dry, and semi-arid climates, tolerating extended periods of low rainfall and high temperatures better than most cultivated crops, reflecting its succulent, water-storing leaf structure.',
        },
        {
          type: 'paragraph',
          text: 'The plant has limited cold and frost tolerance, and prolonged exposure to freezing temperatures can damage or kill leaves and, in severe cases, the whole plant.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Aloe vera requires very well-drained soils, such as sandy and chalky soils, reflecting its native habitat on rocky and sandy semi-arid terrain; it tolerates alkaline and low-fertility soils better than many crops.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogging or heavy, poorly drained soils quickly cause root and crown rot in this succulent species. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Plantings are established from offsets (basal shoots) separated from established plants, set into raised beds or ridges in regions with heavier soils to further improve drainage.',
        },
        {
          type: 'list',
          items: [
            'Propagation from healthy offsets taken from established plants',
            'Raised bed or ridge planting in heavier soils to maximize drainage',
            'Wide spacing to allow rosette expansion and airflow around the crown',
            'Minimal-input management reflecting the crop’s tolerance of low fertility and drought',
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
          text: 'Aloe vera has modest nutrient requirements compared with most cultivated crops, consistent with its adaptation to low-fertility semi-arid soils; potassium and nitrogen support leaf growth and gel yield where soils are limiting.',
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
          text: 'Aloe vera is often grown with minimal irrigation given its drought tolerance, though periodic watering during establishment and dry periods supports leaf size and gel yield in commercial production.',
        },
        {
          type: 'paragraph',
          text: 'Because the plant is highly sensitive to waterlogging, irrigation is applied sparingly and infrequently relative to most horticultural crops, with drainage prioritized over frequent watering.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can cause leaf spotting and lesions under humid conditions, and root and crown rot are the most significant disease risks, typically triggered by excess soil moisture. Scale insects and mealybugs are common pests that colonize leaf bases and can weaken plants if left unmanaged.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on well-drained sites and careful irrigation to limit disease pressure, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Outer, mature leaves are cut by hand at intervals as they reach suitable size, allowing the rosette to continue producing new leaves for repeated harvest over the life of the planting.',
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
            'Leaf gel processed into raw material for cosmetic and personal-care products',
            'Leaf gel and extracts used as ingredients in some food and beverage products',
            'Leaf latex processed for industrial and specialty applications',
            'Ornamental and landscape use in arid and semi-arid regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'chalky-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coconut' },
    { type: 'crop', slug: 'turmeric' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'cultivar'],
  geographicScope:
    'Global overview of production across arid and semi-arid regions on several continents.',
  climateContext:
    'Hot, dry-adapted succulent with strong drought and heat tolerance; limited cold and frost tolerance.',
  limitations: [
    'This entry addresses aloe vera solely as an agricultural crop grown for cosmetic-, personal-care-, and food-industry raw material; medicinal or health-efficacy claims are outside its scope and are subject to separate regulatory requirements.',
    'Production statistics are less comprehensively tracked globally than for major food crops and vary by regional data source.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global aloe vera cultivation context' },
    {
      sourceId: 'faostat',
      citedFor: 'Production and area statistics where tracked',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Aloe vera disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Aloe vera',
    description:
      'A structured, evidence-based reference on aloe vera as a crop: classification, arid climate needs, cultivation, diseases, pests, and industrial uses.',
    keywords: [
      'aloe vera',
      'Aloe barbadensis',
      'succulent crop',
      'aloe cultivation',
    ],
  },
  structuredData: { article: true },
};

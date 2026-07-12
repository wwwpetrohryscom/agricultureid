import type { CropContent } from '@/types/content';

export const melon: CropContent = {
  id: 'crop-melon',
  slug: 'melon',
  contentType: 'crop',
  title: 'Melon',
  scientificName: 'Cucumis melo',
  alternativeNames: ['Muskmelon', 'Cantaloupe', 'Honeydew'],
  category: 'Vine fruit crop',
  subcategory: 'Warm-season cucurbit',
  botanicalFamily: 'Cucurbitaceae (cucurbit family)',
  lifecycle: 'Annual',
  summary:
    'Melon is a warm-season annual vine crop encompassing cantaloupe, honeydew, and other Cucumis melo market types. It is direct-seeded or transplanted each season and grown for its aromatic, sweet fruit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Melon refers to the group of edible fruits produced by Cucumis melo, a species that includes cantaloupe (muskmelon), honeydew, and a range of other regional market types with differing rind, flesh, and aroma characteristics. Like watermelon, melon is grown as an annual trailing vine, re-established from seed or transplants each season rather than as a permanent planting.',
    },
    {
      type: 'paragraph',
      text: 'Although melon and watermelon are both warm-season cucurbit vine crops with broadly similar field culture, they belong to different genera: melon is Cucumis melo, while watermelon is Citrullus lanatus. Many melon types are climacteric, meaning fruit continues to ripen after harvest and often develops a characteristic aroma and a natural separation, or "slip," at the point where the fruit joins the stem as it nears maturity.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (cucurbit family)' },
    { label: 'Life cycle', value: 'Annual trailing vine' },
    { label: 'Main species', value: 'Cucumis melo' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, eaten ripe as a dessert or breakfast fruit',
    },
    {
      label: 'Climate',
      value: 'Warm-season crop; sensitive to cold soil and frost',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams and loams',
      note: 'Good drainage and soil warmth at planting are important; specifics vary by region and market type.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Melon is grown as an annual trailing vine crop, planted anew each season from direct-seeded plantings or transplants. Within the species Cucumis melo, growers select among distinct market types, such as netted cantaloupe, smooth-skinned honeydew, and various regional and heirloom types, each with somewhat different culture and market handling.',
        },
        {
          type: 'paragraph',
          text: 'As with other cucurbits, successful fruit set depends on insect pollination of the flowers and on sustained warmth through the growing period. Because the crop is reseeded annually, cultivar and market-type choice, spacing, and pollination management are decided fresh each season.',
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
            { term: 'Family', description: 'Cucurbitaceae (cucurbit family)' },
            { term: 'Genus', description: 'Cucumis' },
            {
              term: 'Principal species',
              description:
                'Cucumis melo (melon, including cantaloupe and honeydew types)',
            },
            {
              term: 'Growth habit',
              description:
                'Trailing annual vine with tendrils and separate male and female (or hermaphrodite) flowers on the same plant',
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
          text: 'Melon is believed to have originated in Africa and Asia, where a wide range of wild and semi-domesticated Cucumis melo relatives are found, with subsequent diversification into the many market types grown around the world today. It is now cultivated commercially in warm regions across every populated continent.',
        },
        {
          type: 'paragraph',
          text: 'Production areas, dominant market types, and trade patterns vary by region and change over time; current figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Melon is a heat-loving crop that grows poorly in cool conditions and is intolerant of frost. Soil temperature strongly influences seed germination and early seedling vigor, and planting into cold soil can delay emergence and increase disease risk.',
        },
        {
          type: 'paragraph',
          text: 'Sustained heat during flowering and fruit development generally favors melon, though extreme heat stress can affect flowering and fruit set, making climate matching an important part of cultivar and planting-date choice.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Melon performs best on deep, well-drained soils that warm readily in spring, with sandy loams and loams widely favored. The crop is intolerant of waterlogged or poorly aerated soils, which increase the risk of root and vine diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil choice interacts with bed design, mulching, and irrigation method. Site-specific soil assessment should draw on local soil survey information.',
        },
      ],
    },
    {
      id: 'field-establishment',
      heading: 'Field establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Melon fields are established from direct-seeded plantings or from transplants set out once soil and air temperatures are suitable for the crop. Vine spread and market-type characteristics inform plant and row spacing decisions.',
        },
        {
          type: 'list',
          items: [
            'Seedbed or raised-bed preparation, often with plastic mulch to warm soil and manage weeds',
            'Direct seeding or transplanting timed to adequate soil temperature',
            'Plant and row spacing suited to the market type and trellising or ground-culture system used',
            'Reliance on bee activity, managed or wild, for pollination and fruit set',
          ],
        },
        {
          type: 'table',
          caption: 'Common melon market types (Cucumis melo)',
          columns: [
            'Market type',
            'Typical rind',
            'Typical flesh',
            'Ripening behavior',
          ],
          rows: [
            [
              'Cantaloupe (muskmelon)',
              'Netted, tan-gray',
              'Orange, aromatic',
              'Climacteric; often develops stem-end "slip" near maturity',
            ],
            [
              'Honeydew',
              'Smooth, pale',
              'Green to white, mild',
              'Ripens after harvest but with less pronounced aroma than cantaloupe',
            ],
            [
              'Casaba and other regional types',
              'Wrinkled or ribbed, variable',
              'Pale, variable sweetness',
              'Varies by type; handling practices differ by market',
            ],
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
          text: 'Nitrogen supports early vine and foliage development but is generally moderated as flowering and fruiting proceed, since excess vegetative growth can be at the expense of fruit set and quality. Potassium is closely linked to fruit size, sugar content, and overall eating quality in melon.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Melon has significant water demand during vine establishment and fruit development, and drip irrigation is widely used to apply water and nutrients precisely to the root zone, particularly in mulched bed systems. Deficit irrigation approaches, applying somewhat less than full crop water demand at certain growth stages, are sometimes used where water is limited or where growers aim to concentrate fruit sugars.',
        },
        {
          type: 'paragraph',
          text: 'Because excess water near maturity can dilute fruit sugars and increase disease risk, many growers reduce irrigation as fruit approaches ripeness, with the appropriate timing depending on local conditions and regional guidance.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew and downy mildew are the dominant foliar diseases of melon in most production regions, both capable of severely reducing leaf area and, consequently, fruit yield and sugar content if left unmanaged. Fusarium wilt is an important soilborne disease of melon, with distinct pathogen races that can overcome specific host resistance; race-specific resistant cultivars and crop rotation are central management tools since the pathogen persists in infested soil for years.',
        },
        {
          type: 'paragraph',
          text: 'Common insect pests include aphids and whiteflies, both capable of transmitting plant viruses in addition to direct feeding damage, and spider mites, which can proliferate rapidly under hot, dry conditions.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Many melon types, including most cantaloupes, are climacteric and continue to ripen and develop aroma after harvest, so fruit is often picked at a "full slip" or "half slip" stage, when the stem separates from the fruit with little or no force, rather than at a fixed calendar date. Honeydew and some other types slip less readily and are instead judged by rind color change, surface texture, and firmness. Because maturation timing varies with cultivar, market type, and growing conditions, harvest decisions rely on these physical indicators rather than a universal days-to-harvest figure.',
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
            'Fresh-market whole and cut fruit',
            'Fresh-cut and processed fruit products, including juice and purees',
            'Dried melon products in some regional food traditions',
            'Seeds used in some cuisines, either roasted or pressed for oil',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'watermelon' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'pumpkin' },
  ],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Market-type choice, spacing, planting dates, and irrigation practices are region-specific.',
  climateContext:
    'Warm-season annual vine crop; requires warm soil for establishment and is intolerant of frost.',
  limitations: [
    'Market-type and cultivar selection, plant spacing, and irrigation scheduling are examples of region-specific decisions not covered by universal values here.',
    'Production and yield statistics change over time and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest pressure, including fusarium wilt race distribution, varies by region and should be assessed against local monitoring and extension guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global melon production and agronomy context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Melon pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for melon',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Melon',
    description:
      'A reference on melon (Cucumis melo): cantaloupe and honeydew types, climate and soil needs, field establishment, ripening behavior, diseases, and pests.',
    keywords: ['melon', 'Cucumis melo', 'cantaloupe', 'honeydew melon'],
  },
  structuredData: { article: true },
};

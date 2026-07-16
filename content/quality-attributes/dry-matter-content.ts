import type { QualityAttributeContent } from '@/types/content';

export const dryMatterContent: QualityAttributeContent = {
  id: 'quality-attribute-dry-matter-content',
  slug: 'dry-matter-content',
  contentType: 'quality-attribute',
  title: 'Dry Matter Content',
  alternativeNames: ['DM', 'Dry matter percentage'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'physical',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'Not ripeness or eating quality right now — this is the key distinction to hold onto: dry matter content measures an accumulated reserve, the potential a fruit can convert into eating quality as it ripens, not the eating quality it already has. A high-dry-matter avocado or mango picked at the right maturity still has to ripen properly, and can still be ruined by poor handling after harvest, so a good dry matter figure at harvest is not a guarantee of a good fruit at the point of consumption.',
    'Not a sugar or soluble solids measure — dry matter content is the water-free proportion of the whole unit, encompassing oils, starches, fibre, and other solids, not specifically sugar concentration (cross-reference soluble-solids-content, a separate attribute measured a different way).',
    'Not a storability measure — dry matter content says nothing directly about how well a lot will hold up in storage or transport; that depends on separate storage-stability attributes and handling conditions.',
    'Not a grade factor in most produce standards — dry matter content functions as a maturity criterion in the specific commodities where it is regulated (notably avocado), but it is not a general-purpose grading factor across fresh produce standards.',
  ],
  measurementBasis:
    'Fresh-weight basis: proportion of a sample mass remaining after all water is removed',
  typicalUnits: ['% (fresh weight basis)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'cassava-roots' },
    { type: 'commodity', slug: 'sweet-potatoes' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'oven-drying-method' },
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
  ],
  summary:
    'Dry matter content (DM) is the proportion of a unit remaining after all water has been removed — the complement of moisture content on a fresh-weight basis, reported the other way round for a different set of questions. It is the accepted harvest-maturity criterion for avocado, a strong predictor of eventual eating quality in mango and kiwifruit, and a governing factor for potato processing quality and cassava starch yield, but a high dry matter figure describes accumulated potential, not the eating quality a fruit already has.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dry matter content is the share of a fruit, tuber, or root that remains once every trace of water has been driven off, expressed as a proportion of the original fresh weight. It is, physically, exactly the same fact as moisture content viewed from the opposite direction: a unit that is a given proportion water is, by definition, the remaining proportion dry matter. The two attributes exist as separate pages, and separate measurements in practice, because the industries that use them and the questions they are answering differ — moisture content is the language of grain storage stability and safe holding, while dry matter content is the language of fruit maturity, processing yield, and eating-quality potential (cross-reference moisture-content).',
    },
    {
      type: 'paragraph',
      text: "Dry matter content matters most where a commodity's eating or processing quality is tied to the reserves it has built up before harvest rather than to something that develops afterwards. Avocado is the clearest case: because avocado does not sweeten or otherwise ripen its way to quality the way many other fruit do, and because dry matter content tracks the oil accumulation that largely determines its eating quality, dry matter has become the legally recognised harvest-maturity measure for avocado in a number of jurisdictions. Mango, kiwifruit, potato, and cassava each use dry matter content for related but distinct reasons, described below.",
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Proportion of a unit remaining after all water is removed, on a fresh-weight basis',
    },
    {
      label: 'Relationship to moisture content',
      value:
        'The complement of moisture content — the same physical fact, reported the other way round',
    },
    {
      label: 'Avocado role',
      value:
        'The legally recognised harvest-maturity criterion in several jurisdictions, because avocado does not sweeten after harvest',
    },
    {
      label: 'Mango and kiwifruit role',
      value:
        'Dry matter at harvest predicts eventual eating quality better than soluble solids content at harvest',
    },
    {
      label: 'Potato role',
      value:
        'Governs, with specific gravity, fry and crisp processing quality and cooking texture',
    },
    {
      label: 'Cassava role',
      value: 'Governs starch yield from the processed root',
    },
    {
      label: 'Reference method',
      value:
        'Oven-drying is the destructive reference; near-infrared calibrations are used for faster line sorting',
    },
  ],
  sections: [
    {
      id: 'the-same-fact-two-directions',
      heading: 'The same fact, reported for two different questions',
      body: [
        {
          type: 'paragraph',
          text: 'Dry matter content and moisture content describe the identical underlying measurement — the water fraction of a sample — reported from opposite ends. A unit measured at a given moisture content has, arithmetically, the remaining fraction as dry matter. The reason both exist as separate attributes rather than one being derived and forgotten is that the two figures serve genuinely different industries and different decisions: moisture content is used almost entirely as a storage-stability signal for grain, seed, and similar commodities, framed around how much water is present and how that threatens safe holding. Dry matter content is used almost entirely as a maturity, ripening-potential, or processing-yield signal for fruit, tubers, and roots, framed around how much substance the unit has accumulated rather than how much water it is carrying.',
        },
      ],
    },
    {
      id: 'avocado-and-fruit-that-does-not-sweeten',
      heading: 'Why dry matter governs avocado maturity',
      body: [
        {
          type: 'paragraph',
          text: 'Most fruit accumulate sugar as they ripen, which is why soluble solids content is a workable ripeness signal for them. Avocado does not: it does not sweeten after harvest, and its eating quality is instead governed by the oil content it has accumulated on the tree. Dry matter content tracks that oil accumulation closely enough that it has become the accepted, and in several jurisdictions the legally recognised, harvest-maturity criterion for avocado — fruit picked below the appropriate dry matter figure for its cultivar will not develop acceptable eating quality no matter how it is subsequently ripened or handled.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'High dry matter at harvest is potential, not finished quality',
          text: 'A high-dry-matter avocado or mango picked at appropriate maturity still has to ripen, and can still be spoiled by rough handling, chilling injury, or disease after harvest. Dry matter content describes what the fruit is capable of reaching, not the eating quality it has already achieved — do not read a good dry matter reading as a finished-quality guarantee.',
        },
      ],
    },
    {
      id: 'mango-and-kiwifruit',
      heading: 'Mango and kiwifruit: predicting ripening potential',
      body: [
        {
          type: 'paragraph',
          text: 'In mango and kiwifruit, dry matter content measured at harvest predicts the eating quality the fruit will be able to reach after ripening more reliably than soluble solids content measured at the same point, because dry matter reflects the accumulated carbohydrate and other reserves the fruit will draw on as it ripens, while soluble solids content at harvest in these commodities has not yet developed to its ripe value. This makes dry matter content a more useful harvest-timing signal than a soluble solids reading taken too early would be, though it remains, again, a measure of potential rather than of the finished fruit.',
        },
      ],
    },
    {
      id: 'potato-and-cassava',
      heading: 'Potato and cassava: processing yield and texture',
      body: [
        {
          type: 'paragraph',
          text: 'In potato, dry matter content, considered together with specific gravity — a closely related property — governs how well a tuber performs in frying and crisping and how its cooked texture turns out; potatoes destined for processing are commonly assessed on this basis because it predicts oil uptake and finished-product texture more directly than appearance does. In cassava, dry matter content governs the yield of starch that can be recovered from a given weight of root, which is the basis on which cassava intended for starch processing is commonly valued.',
        },
      ],
    },
    {
      id: 'measurement-practice',
      heading: 'How dry matter content is determined',
      body: [
        {
          type: 'list',
          items: [
            'The oven-drying reference method weighs a sample, dries it to constant weight, and calculates dry matter as the remaining mass proportion; it is accurate but destructive and slow.',
            'Near-infrared spectroscopy calibrations are used on packing lines and at point of sale for fast, non-destructive estimates, calibrated periodically against the oven-drying reference.',
            'Dry matter content varies with orchard, growing season, and position of the fruit within the canopy, so a reading from a single fruit is not a reliable figure for an entire lot.',
            'Sampling protocols specify how many units and from where in a lot are sampled precisely because of this natural variability.',
          ],
        },
      ],
    },
  ],
  connections: [{ type: 'quality-attribute', slug: 'moisture-content' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'potato-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Dry matter content as a maturity and quality attribute in fruit and tuber research',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality principles for fruit, tuber, and root crop dry matter assessment',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Dry matter content and specific gravity in potato and cassava processing quality',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Dry matter measurement practice and its relationship to ripening potential in fruit',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The measurement principle is universal; minimum dry matter figures used for maturity regulation and marketing standards vary by commodity, cultivar, and jurisdiction.',
  limitations: [
    'Dry matter content describes accumulated reserve and ripening potential, not the eating quality a fruit already has; a high reading at harvest does not guarantee good quality after ripening and handling.',
    'Dry matter content varies with orchard, growing season, and canopy position, so a single-fruit reading is not representative of a whole lot.',
    'The oven-drying reference method is destructive and slow; near-infrared calibrations used for routine sorting require periodic verification against that reference.',
    'This entry describes general principles across several commodities; the specific maturity regulation, marketing standard, or contract in force sets any applicable minimum for a given commodity and jurisdiction.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dry Matter Content: Maturity Potential, Not Quality',
    description:
      'Dry matter content is the water-free share of a unit and predicts ripening potential in avocado, mango, and kiwifruit, but is not eating quality itself.',
    keywords: [
      'dry matter content',
      'avocado maturity',
      'mango dry matter',
      'potato dry matter',
      'post-harvest quality',
    ],
  },
  structuredData: { article: true },
};

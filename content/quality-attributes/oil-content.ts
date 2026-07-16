import type { QualityAttributeContent } from '@/types/content';

export const oilContent: QualityAttributeContent = {
  id: 'quality-attribute-oil-content',
  slug: 'oil-content',
  contentType: 'quality-attribute',
  title: 'Oil Content',
  alternativeNames: ['Oil percentage', 'Lipid content'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'chemical',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Not a measure of oil quality: fatty acid composition, free fatty acid level, and oxidative state determine whether the extracted oil is fit for its intended use and how stable it will be, and a high-oil lot can still yield oil of poor quality.',
    'Not a measure of storability — if anything, closer to the opposite is true. Oil-rich seed is more prone to rancidity than starchy grain, and because oil holds essentially no water, an oilseed at the same measured moisture as a cereal has a higher water activity and less storage margin.',
    'Not a grade-determining factor in most standards, even though it is central to the price a crushing plant will pay.',
  ],
  measurementBasis: 'Reported on a dry basis or at a stated moisture',
  typicalUnits: ['% (dry basis)', 'g/kg'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'cottonseed' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'flaxseed' },
    { type: 'commodity', slug: 'safflower-seed' },
    { type: 'commodity', slug: 'sesame-seed' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
  ],
  summary:
    'Oil content is the proportion of an oilseed lot that is extractable lipid, reference-determined by solvent extraction and estimated routinely by NMR or near-infrared methods. It governs crush yield and lot value, but it says nothing about the extracted oil’s quality or about how well the seed will store.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Oil content describes how much of an oilseed lot, by mass, can be recovered as oil. For crushing plants it is one of the most commercially consequential figures a lot carries, because crush yield — and therefore much of the value a lot realises — scales directly with it. Soybeans, rapeseed, sunflower seed, cottonseed, groundnuts, flaxseed, safflower seed, and sesame seed are all traded and priced with oil content in mind, alongside the meal that crushing leaves behind.',
    },
    {
      type: 'paragraph',
      text: 'The reference determination is solvent extraction: a solvent is used to pull the lipid fraction out of a ground sample, which is then weighed. Because solvent extraction is slow and destructive, routine trade and plant-intake testing instead uses nuclear magnetic resonance or near-infrared methods, both calibrated against the solvent-extraction reference. As with any compositional figure, the moisture basis the result is expressed on is not optional detail — a percentage without a stated basis is not a usable number, because the same lot reports differently on a dry basis than at an as-received moisture.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'The proportion of an oilseed lot, by mass, recoverable as oil',
    },
    {
      label: 'Reference method',
      value:
        'Solvent extraction, with NMR and near-infrared spectroscopy used routinely',
    },
    {
      label: 'Moisture basis',
      value: 'Mandatory alongside any value',
      note: 'Oil is conventionally reported on a dry basis or at a stated moisture; a figure without its basis is not usable',
    },
    {
      label: 'Trade-off with protein',
      value:
        'Oil content and protein content trade off against each other in oilseeds',
      note: 'A high-oil lot is generally lower-protein, and different buyers weight the two differently',
    },
    {
      label: 'Not a quality measure',
      value:
        'Fatty acid composition, free fatty acid level, and oxidative state — not oil quantity — determine the oil’s fitness for use',
    },
    {
      label: 'Not a storability measure',
      value:
        'Oil-rich seed is more rancidity-prone, and oil holds essentially no water, so it leaves less storage margin at a given moisture',
    },
    {
      label: 'Grade status',
      value:
        'Not typically a numerical grade factor, though it drives the price paid by a crushing plant',
    },
  ],
  sections: [
    {
      id: 'measurement',
      heading: 'How oil content is determined',
      body: [
        {
          type: 'paragraph',
          text: 'Solvent extraction is the reference method: a solvent dissolves the lipid fraction out of a ground sample, the solvent is removed, and the residue is weighed to give the extracted oil as a share of the original sample mass. This is accurate but slow, destructive, and unsuited to testing every truckload arriving at a crushing plant. Nuclear magnetic resonance and near-infrared spectroscopy are the routine alternatives, both non-destructive and fast, and both calibrated against solvent-extraction values so their readings can be trusted only within the range and matrix they were calibrated on.',
        },
        {
          type: 'paragraph',
          text: 'As with protein, the result is only meaningful with its moisture basis attached. A lot dried further after testing, or tested at a different moisture than the buyer’s specification assumes, will not report the same oil percentage even though nothing about its actual oil content has changed — the arithmetic basis, not the seed, has shifted.',
        },
      ],
    },
    {
      id: 'oil-protein-tradeoff',
      heading: 'Oil and protein trade off against each other',
      body: [
        {
          type: 'paragraph',
          text: 'In most oilseeds, oil content and protein content move in opposite directions across varieties and growing conditions: a lot bred or grown toward higher oil tends to carry somewhat lower protein, and vice versa. This is not a strict rule for every sample, but it is consistent enough that crushers and feed buyers weight the two differently depending on what they intend to do with the meal versus the oil, and breeding programmes make deliberate trade-offs between the two traits.',
        },
      ],
    },
    {
      id: 'not-quality-or-storability',
      heading: 'Quantity of oil is neither its quality nor its storability',
      body: [
        {
          type: 'paragraph',
          text: 'A lot with a high oil percentage can still yield oil that performs poorly or degrades quickly. What determines the oil’s fitness for food, feed, or industrial use is its fatty acid composition, its free fatty acid level (a marker of hydrolytic breakdown), and its oxidative state — none of which the oil content figure addresses at all. Two lots at the same oil content can require entirely different downstream handling depending on these separate properties.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Oil-rich seed has less storage margin than it appears to',
          text: 'Oil holds essentially no water, so at a given measured moisture, an oilseed has a higher water activity than a starchy cereal at that same moisture — leaving less margin before spoilage risk rises. High oil content is also associated with greater susceptibility to rancidity in storage. Oil content should not be read as evidence of good storability; see moisture content and water activity for the properties that actually govern storage risk.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'moisture-content' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-storage' }],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Oilseed composition, crush yield, and post-harvest handling principles',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Oilseed testing conventions and market use of oil content in the United States',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Oilseed rape oil content testing and its role in contract specifications',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Oilseed storage behaviour, water activity, and rancidity research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Reference and routine test methods, the oil-protein relationship, and how oil content enters pricing all vary by commodity, variety, and market.',
  limitations: [
    'This entry states no oil percentages, targets, or premiums. Any applicable specification is set by the crushing plant’s intake standard or the buyer’s contract.',
    'Oil content says nothing about fatty acid composition, free fatty acid level, or oxidative stability; those require separate, dedicated tests.',
    'The oil-protein trade-off is a general tendency observed across varieties and conditions, not a fixed ratio for every lot.',
    'Storage guidance for oilseeds must account for their higher water activity at a given moisture relative to cereals; treating oilseed and cereal moisture targets as interchangeable is a common and consequential error.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Oil Content: What It Measures in Oilseeds',
    description:
      'Oil content in oilseeds governs crush yield but not oil quality or storability. How it is measured, its trade-off with protein, and its storage caveats.',
    keywords: [
      'oil content',
      'oilseed testing',
      'crush yield',
      'oil protein trade-off',
      'oilseed storage',
    ],
  },
  structuredData: { article: true },
};

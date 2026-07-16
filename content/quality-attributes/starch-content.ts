import type { QualityAttributeContent } from '@/types/content';

export const starchContent: QualityAttributeContent = {
  id: 'quality-attribute-starch-content',
  slug: 'starch-content',
  contentType: 'quality-attribute',
  title: 'Starch Content',
  alternativeNames: ['Starch percentage'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'chemical',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Not a measure of starch functionality: the amylose-to-amylopectin ratio, granule size, and gelatinisation behaviour determine how starch performs in processing, and a waxy type with near-zero amylose can carry the same total starch as a normal type yet behave entirely differently.',
    'Not a measure of soundness: sprouted or weather-damaged grain can retain its full starch mass while that starch has been enzymatically compromised — a distinct condition that starch content cannot detect and that falling number is the property used to identify.',
    'Not a grade-determining factor in most commodity grade standards.',
    'Not a measure of digestible energy in feed on its own: realised energy value depends on processing (grinding, cooking, extrusion) and on the species being fed, not on the starch figure alone.',
  ],
  measurementBasis: 'Reported on a dry basis or at a stated moisture',
  typicalUnits: ['% (dry basis)', 'g/kg'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'cassava-roots' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
  ],
  summary:
    'Starch content is the dominant carbohydrate reserve in cereals, potatoes, and cassava, and it drives ethanol yield, wet-milling yield, feed energy, and — in potato — fry quality and specific gravity. It measures how much starch is present, not how that starch is structured or whether it remains sound.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Starch content describes how much of a lot, by mass, is starch — the carbohydrate reserve that maize, wheat, rice, sorghum, potato, and cassava store as their primary energy source. It is the single biggest determinant of processing yield in several major industries: how much ethanol a bushel of maize can yield, how much starch a wet mill can extract, how much feed energy a ration supplies, and, for potatoes specifically, how well a tuber will fry and what specific gravity it carries.',
    },
    {
      type: 'paragraph',
      text: 'Because starch dominates the dry matter of these commodities, its content is closely tied to how the crop was grown and how mature it was at harvest, and — as with any compositional figure — it must be reported against a stated moisture basis to be usable, since the same lot yields different percentages on a dry basis versus at an as-received moisture. Starch content on its own, however, is a quantity measurement. It says nothing about the internal structure of that starch or whether it has been damaged since the grain matured, both of which matter more than the raw quantity for many end uses.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value: 'The proportion of a lot, by mass, that is starch',
    },
    {
      label: 'Why it matters',
      value:
        'Drives ethanol yield, wet-milling yield, feed energy, and potato fry quality and specific gravity',
    },
    {
      label: 'Moisture basis',
      value: 'Must be stated alongside any value',
      note: 'A dry-basis figure and an as-is-moisture figure for the same lot are different numbers',
    },
    {
      label: 'Not a functionality measure',
      value:
        'Amylose-to-amylopectin ratio and granule properties, not total starch, determine processing behaviour',
      note: 'Waxy varieties have the same total starch as normal types but behave very differently',
    },
    {
      label: 'Not a soundness measure',
      value:
        'Sprout-damaged grain can retain its starch mass while the starch has been enzymatically degraded',
      note: 'Falling number, not starch content, is what detects this condition',
    },
    {
      label: 'Not a grade factor',
      value: 'Not typically a numerical factor in commodity grade standards',
    },
    {
      label: 'Where targets are set',
      value:
        'The processor’s contract specification (ethanol plant, wet mill, feed formulation, or fryer) sets any target',
    },
  ],
  sections: [
    {
      id: 'why-it-matters',
      heading: 'Why starch content drives processing value',
      body: [
        {
          type: 'paragraph',
          text: 'Starch is the substrate that ethanol plants ferment, that wet mills separate out as a primary product, and that feed rations rely on for digestible energy. In each case, a higher starch content generally means more of the valuable output per unit of raw material processed, which is why maize and other starchy commodities are frequently tested and priced with starch content as a central figure. In potato specifically, starch content correlates with specific gravity and is a practical predictor of fry quality and processing yield for chips and French fries, which is why processors test incoming lots for it.',
        },
        {
          type: 'paragraph',
          text: 'Starch content is nonetheless a quantity figure, arrived at the same way other compositional attributes are: reference chemical or enzymatic methods establish the value that faster instrumental methods, principally near-infrared spectroscopy, are calibrated against for routine testing.',
        },
      ],
    },
    {
      id: 'not-functionality',
      heading: 'Total starch is not starch functionality',
      body: [
        {
          type: 'paragraph',
          text: 'Starch is not a single uniform substance. It is made of two polymers, amylose and amylopectin, in a ratio that varies by species and variety, packed into granules whose size and structure also vary. This internal architecture — not the total amount of starch present — governs how the starch gelatinises, thickens, and sets during processing. Waxy maize and waxy rice varieties carry starch that is almost entirely amylopectin, giving them a near-zero amylose content; they can register an unremarkable total starch content and still process completely differently from a normal-amylose variety, because it is the ratio and granule behaviour that end users are actually selecting for.',
        },
      ],
    },
    {
      id: 'not-soundness',
      heading: 'Total starch is not a soundness verdict',
      body: [
        {
          type: 'paragraph',
          text: 'Pre-harvest sprouting and weather damage can trigger enzymatic activity — chiefly alpha-amylase — that breaks down starch molecules within grain that otherwise still contains essentially its full starch mass. A starch content test measures the mass that remains; it cannot detect that the starch has been chemically degraded, because degraded starch is still starch by that measurement. This is precisely the gap that the falling number test is designed to close, since it responds to the functional state of the starch rather than to its quantity.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Sound-looking starch content can hide degraded starch',
          text: 'A normal starch content reading does not rule out enzymatic damage from sprouting or weather exposure. Where sprout damage is a concern, pair starch content with falling number rather than relying on starch content alone.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'falling-number' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-storage' }],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Starch composition of cereal and root crops and its role in processing',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Starch testing conventions and use in United States grain markets',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize and wheat starch composition and quality relationships',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Potato starch content, specific gravity, and fry-quality relationships',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Reference methods, typical starch composition, and how the figure enters processing contracts vary by commodity, variety, and market.',
  limitations: [
    'This entry states no starch values, targets, or premiums. Any applicable specification is set by the processor’s contract (ethanol plant, wet mill, feed formulator, or fryer).',
    'Starch content says nothing about the amylose-to-amylopectin ratio, granule properties, or gelatinisation behaviour that actually govern processing performance.',
    'Starch content cannot detect enzymatic degradation of starch from sprouting or weather damage; falling number is the property used for that purpose.',
    'Feed energy value depends on processing method and the species being fed, not on starch content in isolation.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Starch Content: What It Measures in Grain and Potato',
    description:
      'Starch content drives ethanol, milling, and feed yield, but not functionality or soundness. How it is measured and why it differs from falling number.',
    keywords: [
      'starch content',
      'grain starch testing',
      'potato specific gravity',
      'amylose amylopectin',
      'ethanol yield',
    ],
  },
  structuredData: { article: true },
};

import type { QualityAttributeContent } from '@/types/content';

export const moistureContent: QualityAttributeContent = {
  id: 'quality-attribute-moisture-content',
  slug: 'moisture-content',
  contentType: 'quality-attribute',
  title: 'Moisture Content',
  alternativeNames: ['Grain moisture', 'Moisture percentage'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'storage-stability',
  notAnIndicatorOf: [
    'A food-safety verdict: grain at an acceptable moisture can already carry mycotoxin formed before or during drying, and drying does not destroy a toxin that is already present in the lot.',
    'A grade: moisture is one factor among several in most grade standards, and in some standards it is not a grade-determining factor at all but a separate specification reported alongside the grade.',
    'A measure of processing suitability: milling, malting, crushing, and other processing performance depend on attributes such as protein, starch, oil, and kernel condition that moisture content does not describe.',
    'A predictor of mould growth by itself: the same moisture content does not carry the same spoilage risk in every commodity or at every temperature, because the availability of water to microorganisms is described by water activity, not by moisture content — see Water Activity.',
  ],
  typicalUnits: ['% (wet basis)', '% (dry basis)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'groundnuts' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'oven-drying-method' },
    { type: 'quality-measurement', slug: 'electronic-moisture-meter' },
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  summary:
    'Moisture content is the proportion of water in a grain or seed lot, expressed on a wet-basis or dry-basis percentage. It is the primary determinant of how stably a lot can be stored — not a safety verdict, not a grade, and not a predictor of mould growth on its own.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Moisture content answers one question: how much water is in the lot, and therefore how stably it can be held before drying, blending, or delivery. It is expressed as the mass of water in the sample divided either by the total mass of the sample (wet basis) or by the mass of the dry matter remaining after the water is removed (dry basis). These are both legitimate ways of reporting the same physical quantity, but they produce different numbers for the same lot, which is why the basis must always be stated alongside any moisture figure.',
    },
    {
      type: 'paragraph',
      text: 'Moisture content is foundational to storage stability, but it is routinely asked to answer questions it cannot answer. It is not a statement about food safety, because a lot can be within an accepted moisture range and still carry mycotoxin formed earlier in the field or during a delay before drying. It is not a grade on its own, because grade standards weigh moisture alongside — or in some cases separately from — factors such as damage, foreign material, and test weight. And it does not by itself predict whether mould will grow, because that depends on how available the water is to microorganisms, a distinct property called water activity.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The proportion of water in a grain or seed lot, expressed as a percentage of total mass (wet basis) or of dry-matter mass (dry basis)',
    },
    {
      label: 'Primary domain',
      value:
        'Storage stability — how safely and for how long a lot can be held',
      note: 'Not a food-safety verdict and not a grade factor by itself',
    },
    {
      label: 'Wet basis vs dry basis',
      value:
        'The same lot has two different, equally correct moisture figures depending on which basis is used',
      note: 'The basis must always be stated alongside the number',
    },
    {
      label: 'Equilibrium moisture content',
      value:
        'Grain exchanges water with the surrounding air until it reaches equilibrium with that air’s temperature and humidity',
      note: 'A workable moisture depends on the storage environment and duration, not on the number alone',
    },
    {
      label: 'Does not predict mould growth alone',
      value:
        'Water activity, not moisture content, governs whether storage fungi can grow',
      note: 'See Water Activity',
    },
    {
      label: 'Where targets are set',
      value:
        'The applicable grade standard, buyer contract, or national storage guidance sets the moisture target for a given commodity and storage duration',
    },
    {
      label: 'Measured by',
      value:
        'Oven-drying reference method, electronic moisture meters, near-infrared spectroscopy, and probe sampling of the lot',
      note: 'Sampling error from where the probe is drawn commonly exceeds instrument error',
    },
  ],
  sections: [
    {
      id: 'wet-basis-and-dry-basis',
      heading: 'Wet basis and dry basis',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wet basis (as-received)',
              description:
                'Water mass expressed as a proportion of the total sample mass, including the water itself. This is the basis almost universally used in trading, grading, and everyday reporting because it describes the lot as it is actually weighed and handled.',
            },
            {
              term: 'Dry basis (moisture-free)',
              description:
                'Water mass expressed as a proportion of the dry-matter mass remaining once the water is excluded. This basis is preferred in some scientific, feed-formulation, and nutrient-accounting contexts because it isolates changes in water content from changes in the amount of dry matter being compared.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because the two bases use different denominators, converting between them is not a simple subtraction, and a wet-basis figure is always the smaller of the two for the same physical sample. Quoting a moisture figure without naming its basis is incomplete: a contract, a laboratory report, or a stored-grain record that omits the basis cannot be compared reliably against another figure or against a target, and the ambiguity has caused real disputes over whether a lot met a specification.',
        },
      ],
    },
    {
      id: 'equilibrium-moisture-content',
      heading: 'Equilibrium moisture content and why "safe" is not fixed',
      body: [
        {
          type: 'paragraph',
          text: 'Grain and seed are hygroscopic: they continually exchange water vapour with the surrounding air until the moisture content of the grain and the relative humidity of that air reach equilibrium. The moisture a lot settles at for a given air temperature and humidity is its equilibrium moisture content, and it changes if the surrounding conditions change — grain held in a warm, humid store will drift toward a higher moisture than the same grain held cool and dry, even with no free water added at all.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            '"Safe" moisture is a function of the storage environment, not a fixed number',
          text: 'A moisture content that is workable for short-term, cool storage can be unstable for long-term or warm-climate storage, and the reverse. Any moisture target is therefore always tied to a stated commodity, storage duration, and climate; this entry does not state one, because none applies universally. See Moisture Content and Equilibrium and Grain Storage for how equilibrium moisture is used in practice.',
        },
      ],
    },
    {
      id: 'what-moisture-content-does-not-tell-you',
      heading: 'What moisture content does not tell you',
      body: [
        {
          type: 'paragraph',
          text: 'Moisture content is frequently, and incorrectly, treated as a stand-in for whether a lot is safe, well-graded, or fit for a given process. None of these follow automatically from a moisture reading.',
        },
        {
          type: 'list',
          items: [
            'Food safety: a lot within a workable moisture range can already carry mycotoxin produced earlier — before harvest, during a field delay, or before drying was completed — and reducing moisture afterward does not remove a toxin that has already formed.',
            'Grade: moisture is weighed alongside, and in some standards reported separately from, other grade-determining factors such as damage, foreign material, and test weight; it is not the grade on its own.',
            'Processing suitability: milling yield, malting quality, and crushing performance depend on protein, starch, oil content, and kernel condition, none of which a moisture figure describes.',
            'Mould risk: the same percentage moisture does not carry the same spoilage risk across different commodities, because how tightly that water is bound — and therefore how available it is to fungi — differs by commodity. That availability is what water activity measures.',
          ],
        },
      ],
    },
    {
      id: 'measuring-moisture',
      heading: 'How moisture content is measured',
      body: [
        {
          type: 'paragraph',
          text: 'The reference method is oven drying: a weighed sample is dried under controlled conditions and reweighed, and the water lost is calculated as a proportion of the original or final mass. It is accurate but destructive and slow, so day-to-day trading and store monitoring rely on faster methods calibrated against it — electronic moisture meters that infer moisture from electrical properties of the grain, and near-infrared spectroscopy, which infers moisture along with other composition attributes from how the sample absorbs light.',
        },
        {
          type: 'paragraph',
          text: 'Whichever instrument is used, the result is only as representative as the sample it was drawn from. Because moisture varies through a bulk — more at the surface, near walls, or around damp pockets — the way a probe sample is drawn from the lot commonly contributes more error to the final figure than the instrument itself does.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Grain moisture content, drying, and safe-storage principles',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain moisture measurement and storage guidance',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Grain moisture measurement research and equilibrium moisture behaviour',
    },
    {
      sourceId: 'irri',
      citedFor: 'Rice moisture content and post-harvest storage principles',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Moisture content is a physical property measurable anywhere; the moisture level appropriate for a given lot depends on commodity, climate, storage duration, and the applicable grade standard or contract, and is not a single global number.',
  limitations: [
    'This entry states no moisture targets. The applicable grade standard, buyer contract, or national storage guidance sets numeric limits for a given commodity, market, and storage duration.',
    'A moisture reading is only as reliable as the sample it is drawn from; because moisture varies through a bulk, sampling error can exceed the error of the measuring instrument itself.',
    'Moisture content does not indicate whether mycotoxin is present. A lot within an accepted moisture range can already carry toxin formed before or during drying.',
    'The basis (wet or dry) must be confirmed for any moisture figure quoted; comparing a wet-basis number with a dry-basis number without conversion misrepresents the lot’s stability.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Moisture Content: What It Actually Measures',
    description:
      'Moisture content shows how much water is in a lot and how stable it will store — not a food-safety verdict, a grade, or a mould-risk predictor.',
    keywords: [
      'moisture content',
      'grain moisture',
      'wet basis dry basis',
      'equilibrium moisture content',
      'safe storage moisture',
    ],
  },
  structuredData: { article: true },
};

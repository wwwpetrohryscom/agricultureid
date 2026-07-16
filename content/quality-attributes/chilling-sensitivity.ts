import type { QualityAttributeContent } from '@/types/content';

export const chillingSensitivity: QualityAttributeContent = {
  id: 'quality-attribute-chilling-sensitivity',
  slug: 'chilling-sensitivity',
  contentType: 'quality-attribute',
  title: 'Chilling Sensitivity',
  alternativeNames: ['Chilling injury susceptibility', 'Cold sensitivity'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'biological',
  qualityDomain: 'storage-stability',
  notAnIndicatorOf: [
    'Freezing sensitivity: chilling injury and freezing injury arise from different mechanisms, occur in different temperature ranges, and produce different symptoms.',
    'A fixed constant for a commodity: sensitivity varies with cultivar, maturity at harvest, growing conditions, and duration of exposure — a stated sensitivity is a generalisation, and individual lots differ.',
    'A measure of injury already present: sensitivity describes susceptibility to injury, not the injury itself, which is a separate observation made afterward.',
    'A reason not to cool a commodity: sensitive commodities still need cooling — just not below their limit — and treating sensitivity as a reason to skip cooling is a costly misreading in the other direction.',
  ],
  typicalUnits: [
    'Qualitative susceptibility class',
    'Severity score (dimensionless)',
  ],
  appliesToCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-pineapples' },
    { type: 'commodity', slug: 'cucumbers' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'sweet-peppers' },
    { type: 'commodity', slug: 'sweet-potatoes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
  ],
  summary:
    'Chilling sensitivity is the susceptibility of many tropical and subtropical commodities to injury from temperatures that are low but still above freezing. Symptoms typically develop only after the commodity has been rewarmed, which is what makes chilling injury a dangerous, easily missed failure in the cold chain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A wide range of tropical and subtropical commodities — including banana, mango, avocado, pineapple, cucumber, tomato, sweet pepper, and sweet potato — can be injured by temperatures that are low but still well above freezing. This is chilling injury, and it is a distinct phenomenon from freezing injury: the mechanism, the temperature range, and the symptoms are all different. Chilling injury is thought to involve membrane and metabolic dysfunction that sets in below a commodity-specific threshold, and the resulting damage accumulates with both how cold the exposure is and how long it lasts.',
    },
    {
      type: 'paragraph',
      text: 'What makes chilling sensitivity dangerous in commercial practice is timing. Symptoms usually do not appear while the commodity is still cold — they emerge after it is moved to warmer conditions, sometimes days later. A chilled lot can look entirely sound at the point of unloading and then fail visibly at retail or in a consumer’s kitchen, by which point the cause sits several steps upstream and the party responsible for the exposure has already been paid for the load.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'The susceptibility of a commodity or cultivar to injury from temperatures that are low but still above freezing',
    },
    {
      label: 'Not directly measured',
      value:
        'Characterised by exposing samples to cold and scoring the injury that develops afterward, not read from an instrument',
      note: 'Documented in commodity storage guidance',
    },
    {
      label: 'Core distinction',
      value:
        'Chilling injury is not freezing injury — different mechanism, different temperature range, different symptoms',
    },
    {
      label: 'The delayed-symptom trap',
      value:
        'Symptoms usually appear only after the commodity is moved to warmer conditions, not while it is cold',
      note: 'A chilled load can look perfect at the depot and fail at retail',
    },
    {
      label: 'Typical symptoms',
      value:
        'Pitting, water-soaking, internal browning, failure to ripen or uneven ripening, and increased decay',
    },
    {
      label: 'Varies within a commodity',
      value:
        'Sensitivity differs with cultivar, maturity at harvest, growing conditions, and duration of exposure',
    },
    {
      label: 'Still needs cooling',
      value:
        'Sensitive commodities still require cooling to manage respiration and decay — just not below their chilling limit',
    },
  ],
  sections: [
    {
      id: 'low-but-above-freezing',
      heading: 'Chilling injury is not freezing injury',
      body: [
        {
          type: 'paragraph',
          text: 'Many commodities native to tropical and subtropical growing regions did not evolve any tolerance for cold, because they never experienced it. For these commodities, temperatures well above freezing — temperatures that would be entirely safe for a temperate commodity such as an apple or a cabbage — are enough to cause lasting physiological damage. The mechanism is generally understood as membrane and metabolic dysfunction that sets in below a threshold specific to the commodity and cultivar, and the resulting injury is cumulative: a brief exposure at a marginal temperature may cause little harm, while the same temperature sustained for longer, or a lower temperature for a shorter time, can cause serious damage.',
        },
      ],
    },
    {
      id: 'how-sensitivity-is-characterised',
      heading: 'How sensitivity is characterised',
      body: [
        {
          type: 'paragraph',
          text: 'Chilling sensitivity is a property of the commodity and cultivar, not a quantity read directly off an instrument, which is why this entry has no associated measurement method. It is characterised experimentally: samples are exposed to controlled cold conditions for a set period, then rewarmed, and the injury that subsequently develops is scored against a defined scheme. That is an experiment about how a commodity or cultivar behaves under exposure, not a routine measurement performed on an individual lot, and the resulting classification is documented in commodity storage guidance rather than obtained from a store-floor reading.',
        },
      ],
    },
    {
      id: 'the-delayed-symptom-trap',
      heading: 'The delayed-symptom trap',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title:
            'Symptoms appear after the commodity warms, not while it is cold',
          text: 'A commodity that has been chilled below its limit typically shows no outward sign of injury while it remains cold. The damage becomes visible only after the commodity is moved to warmer conditions — at unloading, on the retail shelf, or in a consumer’s kitchen — by which point the exposure that caused it happened several steps upstream, and the party responsible has usually already been paid for the load.',
        },
        {
          type: 'list',
          items: [
            'Pitting',
            'Water-soaking',
            'Internal browning',
            'Failure to ripen, or uneven ripening',
            'Increased susceptibility to decay',
          ],
        },
        {
          type: 'paragraph',
          text: 'Several of these symptoms overlap with other storage disorders and are only confirmed as chilling injury by knowing the exposure history — see Internal Quality for how internal symptoms are assessed and why appearance alone rarely confirms a cause.',
        },
      ],
    },
    {
      id: 'still-needs-cooling',
      heading: 'Sensitive does not mean "do not cool"',
      body: [
        {
          type: 'paragraph',
          text: 'The opposite misreading of chilling sensitivity is just as costly as ignoring it: treating sensitivity as a reason to avoid cooling altogether. A chilling-sensitive commodity still respires, still generates heat, and still benefits from prompt cooling to manage decay and quality loss — see Precooling and Cold Chain. What differs for a sensitive commodity is not whether to cool it, but how far: it must be held above its chilling limit rather than at the lowest temperature that would otherwise be used for a non-sensitive commodity of similar type.',
        },
      ],
    },
    {
      id: 'what-chilling-sensitivity-does-not-tell-you',
      heading: 'What chilling sensitivity does not tell you',
      body: [
        {
          type: 'list',
          items: [
            'Not freezing sensitivity — different mechanism, different temperature range, different symptoms.',
            'Not a fixed constant for a commodity — sensitivity varies with cultivar, maturity at harvest, growing conditions, and duration of exposure.',
            'Not a measure of injury already present — sensitivity is the susceptibility; the injury is a separate, later observation.',
            'Not a reason to withhold cooling — sensitive commodities still need cooling, just not below their limit.',
          ],
        },
      ],
    },
  ],
  connections: [{ type: 'quality-attribute', slug: 'internal-quality' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Chilling injury physiology and commodity-specific storage temperature guidance',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Chilling-sensitive commodity storage guidance',
    },
    {
      sourceId: 'fao',
      citedFor: 'Chilling injury and cold-chain handling principles',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Post-harvest chilling injury symptoms and management',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Which commodities and cultivars are chilling-sensitive, and the lowest safe temperature for each, are set by commodity- and cultivar-specific storage guidance that varies by market and growing origin.',
  limitations: [
    'This entry states no temperature thresholds or safe ranges for any commodity. Commodity- and cultivar-specific storage guidance — including the USDA and FAO storage compendia and national guidance — sets the lowest safe temperature.',
    'Sensitivity varies with cultivar, maturity at harvest, growing conditions, and duration of exposure; a stated sensitivity class is a generalisation, and individual lots can differ.',
    'Sensitivity describes susceptibility, not injury already present; confirming injury requires inspecting the commodity, generally after it has warmed.',
    'Because symptoms typically appear only after warming, a lot can pass inspection cold and still fail downstream; the responsible link in the chain is often several steps upstream of where the symptom is finally seen.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Chilling Sensitivity: Injury Without Freezing',
    description:
      'Chilling sensitivity is injury from low, above-freezing temperatures in tropical and subtropical crops. Symptoms appear only after rewarming, not while cold.',
    keywords: [
      'chilling sensitivity',
      'chilling injury',
      'cold chain',
      'tropical produce storage',
      'postharvest disorders',
    ],
  },
  structuredData: { article: true },
};

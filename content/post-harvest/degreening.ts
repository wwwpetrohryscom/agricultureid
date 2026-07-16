import type { PostHarvestContent } from '@/types/content';

export const degreening: PostHarvestContent = {
  id: 'post-harvest-degreening',
  slug: 'degreening',
  contentType: 'post-harvest',
  title: 'Degreening (Citrus)',
  postHarvestClass: 'quality',
  processStage: 'conditioning',
  alternativeNames: ['De-greening', 'Colour development', 'Gassing (citrus)'],
  category: 'Post-harvest operation',
  subcategory: 'Quality assessment',
  summary:
    'Degreening holds mature citrus in ethylene to break down the chlorophyll in the rind, letting the orange or yellow underneath show. It is not ripening: citrus is non-climacteric, and nothing inside the fruit improves. It changes the peel, and only the peel.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Degreening is the practice of holding harvested citrus in a room with a low concentration of ethylene so that the green rind turns orange or yellow. It is one of the most precision-demanding topics in post-harvest work, because almost every intuitive description of it is wrong. It is routinely called artificial ripening, and it is not ripening at all — not loosely, not approximately, not in a simplified sense. Citrus is non-climacteric: once cut from the tree it does not ripen. Its sugars do not rise, its acids do not fall meaningfully, its juice content does not increase, and its flavour does not develop. A degreened orange has exactly the internal quality it had when it was picked.',
    },
    {
      type: 'paragraph',
      text: 'What degreening changes is the rind, and only the rind. Citrus peel contains chlorophyll, which is green, and carotenoids, which are orange and yellow. Both are present together, and chlorophyll masks the carotenoids beneath it. Ethylene promotes the breakdown of chlorophyll in the peel; as it degrades, the colour that was already there becomes visible. Nothing is added and nothing is dyed. The fruit is not made orange — it is allowed to stop being green.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value:
        'Breaks down chlorophyll in the rind, unmasking carotenoids already present',
    },
    {
      label: 'What it is not',
      value:
        'Ripening. Citrus is non-climacteric and does not ripen after harvest',
    },
    {
      label: 'Internal quality',
      value: 'Unchanged: sugars, acids, and juice content are fixed at harvest',
    },
    {
      label: 'Why fruit is green but mature',
      value:
        'Chlorophyll loss on the tree needs cool nights, which warm growing regions do not supply',
    },
    {
      label: 'The safeguard',
      value:
        'Maturity standards must be met before degreening, independently of colour',
    },
    {
      label: "Ethylene's role here",
      value:
        'A trigger for chlorophyll degradation, not a climacteric ripening signal',
    },
    {
      label: 'Cost of overdoing it',
      value:
        'Ethylene also drives senescence: button drop, rind breakdown, and more decay',
    },
  ],
  sections: [
    {
      id: 'why-mature-citrus-is-green',
      heading: 'Why perfectly mature citrus can be green',
      body: [
        {
          type: 'paragraph',
          text: 'The problem degreening solves is a mismatch between what a consumer reads as ripeness and what citrus physiology actually does. Consumers take orange to mean ready and green to mean unready, and for many fruits that heuristic is roughly sound. For citrus it is unreliable, because rind colour tracks climate rather than internal maturity.',
        },
        {
          type: 'paragraph',
          text: 'Chlorophyll degradation in citrus peel is promoted by cool temperatures, particularly cool nights. In a Mediterranean-type climate with a cool autumn, fruit colours on the tree as it matures and the two coincide, so the heuristic works by luck. In a tropical or subtropical growing region where nights stay warm, chlorophyll is never triggered to degrade: fruit reaches full internal maturity — full juice, full sugar, correct acidity — while remaining entirely green. The same is true for early-season fruit anywhere, harvested at internal maturity before the weather has turned.',
        },
        {
          type: 'paragraph',
          text: "So the green fruit is not unready; the market's colour rule is simply wrong for that fruit. Citrus can also re-green: fruit left on the tree into a warm period can regain chlorophyll and turn green again while continuing to age internally, producing an old fruit that looks unripe. Colour and maturity in citrus are two independent variables that a consumer treats as one.",
        },
      ],
    },
    {
      id: 'maturity-first',
      heading: 'Maturity first — the rule that makes it legitimate',
      body: [
        {
          type: 'paragraph',
          text: 'The obvious objection writes itself: if degreening makes green fruit look orange, and orange is what consumers read as ready, then degreening could make immature fruit look ready. That objection is correct, and it is precisely why the practice is bounded by maturity standards.',
        },
        {
          type: 'paragraph',
          text: 'Citrus maturity in the significant trading markets is defined internally — by juice content, by soluble solids, by acidity, and by their ratio — and explicitly not by rind colour. Fruit must satisfy the applicable maturity standard before it may be harvested and sold, and degreening does not alter, and cannot be used to satisfy, any of those criteria. This is the whole architecture of the thing: because maturity is defined by properties degreening cannot touch, degreening cannot be used to pass immature fruit. It changes an unreliable indicator that the standard deliberately does not rely on.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Degreening cannot substitute for maturity',
          text: 'Internal maturity criteria are set by the applicable grade or marketing standard for the commodity and jurisdiction and are assessed independently of rind colour. A degreened fruit that did not meet those criteria at harvest still does not meet them; the treatment changes the peel and leaves every maturity property exactly as it was.',
        },
      ],
    },
    {
      id: 'not-ripening',
      heading:
        'Why the ethylene here is not doing what ethylene does in a banana',
      body: [
        {
          type: 'paragraph',
          text: 'The same molecule appears in two operations that must not be conflated. In a climacteric fruit — banana, avocado, mango, tomato — ethylene triggers a coordinated ripening programme: a respiratory surge, starch converted to sugar, cell walls softened, acids metabolised, aroma volatiles synthesised, and colour changed. The fruit becomes a different thing. That is the process described under fruit ripening, and the deliberate use of ethylene to drive it is covered under ethylene management.',
        },
        {
          type: 'paragraph',
          text: "Citrus has no such programme to trigger. It is non-climacteric: there is no respiratory climacteric to initiate, no starch reserve to convert, and no post-harvest sweetening to be had. Applying ethylene to citrus does one useful thing — it promotes the enzymatic breakdown of chlorophyll in the peel — and the fruit's interior carries on as it would have anyway. The treatment is genuinely cosmetic in the strict sense of the word, and there is no honest way to present it as anything else.",
        },
        {
          type: 'paragraph',
          text: 'This distinction is not a technicality. Ethylene applied to citrus in the belief that it improves the fruit produces disappointment and, worse, encourages longer or stronger treatment in pursuit of an improvement that is not physiologically available — which is exactly the condition under which the treatment starts doing harm.',
        },
      ],
    },
    {
      id: 'the-cost',
      heading: 'What the treatment costs the fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Ethylene is not a colour reagent. It is a plant hormone with broad effects, and chlorophyll degradation is only the one being exploited. Everything else it does to citrus is unwanted, and it accumulates with exposure.',
        },
        {
          type: 'list',
          items: [
            'It promotes abscission, so the button — the calyx and stem attachment — is shed, and the exposed stem end is a direct entry route for decay organisms.',
            'It accelerates senescence of the rind, contributing to stem-end rind breakdown and other rind disorders that appear later, in transit or on shelf.',
            'It increases susceptibility to post-harvest decay, so degreened fruit generally has a shorter market life than comparable naturally coloured fruit.',
            'It can aggravate physiological disorders in fruit that is already stressed, chilled, or damaged.',
            'The room conditions themselves matter: too warm favours decay, too dry causes water loss, and inadequate ventilation lets carbon dioxide accumulate and inhibit the very chlorophyll breakdown being sought.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Degreening is therefore a bounded treatment: enough exposure to achieve an acceptable colour, and no more, because every additional hour is buying colour with shelf life. The conditions and durations that achieve this are cultivar-, season-, maturity-, and facility-specific and are set by commodity-specific post-harvest guidance rather than by any general rule.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Ethylene rooms are a regulated hazard',
          text: "Ethylene is a flammable gas, and rooms in which it is deliberately introduced present fire and explosion risk as well as an atmosphere hazard to anyone entering. Design, gas supply, ventilation, monitoring, and entry are governed by national regulation and by the facility's own procedures, and are not addressed here.",
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
  ],
  measurableInputs: [
    'Internal maturity of the lot at harvest, against the applicable standard',
    'Ethylene concentration in the room',
    'Room temperature and relative humidity',
    'Ventilation rate and carbon dioxide accumulation',
    'Exposure duration',
  ],
  measurableOutputs: [
    'Rind colour against a reference colour chart',
    'Uniformity of colour across the lot',
    'Button retention and stem-end condition',
    'Incidence of rind disorders and decay in the days after treatment',
    'Juice content, soluble solids, and acidity — expected to be unchanged',
  ],
  qualityEffects: [
    'Degrades rind chlorophyll, revealing the carotenoid colour already present',
    'Leaves internal quality entirely unchanged: no sweetening, no acid loss, no juice gain',
    'Promotes button abscission, exposing the stem end to decay organisms',
    'Accelerates rind senescence and increases susceptibility to post-harvest decay',
    'Shortens market life relative to comparable naturally coloured fruit',
  ],
  environmentalContext:
    "Degreening exists because of climate. It is concentrated in warm-night growing regions — and in early-season fruit everywhere — where mature citrus does not lose its chlorophyll on the tree, and it is largely unnecessary where cool autumn nights colour the fruit for free. It is an energy and infrastructure cost incurred entirely to satisfy a consumer colour expectation that the fruit's own physiology does not meet.",
  safetyLimitations: [
    'Ethylene is flammable and its deliberate use in enclosed rooms presents fire, explosion, and atmosphere hazards; room design, gas handling, ventilation, monitoring, and entry are governed by national regulation and facility procedures, none of which are set out here.',
    'No ethylene concentration, temperature, humidity, or exposure duration is given here. These are cultivar-, season-, and facility-specific and are set by commodity-specific post-harvest guidance.',
    'Internal maturity criteria are set by the applicable grade or marketing standard for the jurisdiction and are assessed independently of rind colour; degreening neither alters nor satisfies them.',
    'Degreening treats appearance only and is not a decay control, a cleaning step, or a food-safety measure.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
    { type: 'commodity-grade', slug: 'codex-standards-overview' },
  ],
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'lime' },
    { type: 'crop', slug: 'grapefruit' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Citrus degreening, non-climacteric behaviour, and ethylene effects on rind',
    },
    {
      sourceId: 'fao',
      citedFor: 'Post-harvest handling and degreening of citrus fruit',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Citrus post-harvest handling, degreening, and rind disorders',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Marketing standards and maturity requirements for citrus fruit',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Concentrated in warm-night citrus regions and in early-season fruit elsewhere. Maturity standards, permitted practice, and any labelling requirement are jurisdiction-specific.',
  limitations: [
    'No ethylene concentration, room temperature, humidity, ventilation rate, or exposure duration is given here; all are cultivar-, season-, maturity-, and facility-specific and are set by commodity-specific guidance.',
    'Degreening changes rind colour only. It is not ripening, it does not improve internal quality, and describing it as ripening misrepresents both the treatment and citrus physiology.',
    'Rind colour is not a maturity indicator in citrus in either direction: mature fruit can be green, and re-greened fruit can be old, so colour cannot be read as either readiness or freshness.',
    'The treatment carries a real cost in market life through abscission, rind senescence, and decay susceptibility; it is a trade against appearance, not a free improvement.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Degreening Citrus: Colour Change, Not Ripening',
    description:
      'Citrus is non-climacteric and does not ripen after harvest. Degreening breaks down rind chlorophyll to unmask carotenoids: it changes the peel, and no more.',
    keywords: [
      'degreening',
      'citrus degreening',
      'non-climacteric',
      'rind colour',
      'ethylene citrus',
    ],
  },
  structuredData: { article: true },
};

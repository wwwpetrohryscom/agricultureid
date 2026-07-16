import type { PostHarvestDefectContent } from '@/types/content';

export const pitting: PostHarvestDefectContent = {
  id: 'post-harvest-defect-pitting',
  slug: 'pitting',
  contentType: 'post-harvest-defect',
  title: 'Pitting',
  defectClass: 'physiological',
  alternativeNames: ['Surface pitting', 'Skin pitting', 'Pit development'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Pitting is the appearance of small sunken depressions in the skin where groups of cells beneath have collapsed. It is a symptom name rather than a disorder: chilling injury, pathogens, physical handling, and controlled-atmosphere injury all produce it, and in tropical and subtropical produce chilling injury is much the most common cause.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pitting describes a shape, not a cause. Small depressions form in the surface of a fruit or vegetable where a group of cells immediately beneath the skin has collapsed, and the skin, no longer supported, sinks into the void. The pits may be scattered or dense, shallow or deep, discrete or coalescing into larger sunken areas, and they frequently darken as the exposed tissue browns. That single geometry — a localised collapse under intact or near-intact skin — is produced by mechanisms that have nothing in common with each other. Cold can do it, a pathogen can do it, an impact can do it, and a storage atmosphere can do it, and the resulting depression carries no record of which.',
    },
    {
      type: 'paragraph',
      text: 'Among the causes, one dominates the practical picture. In produce of tropical and subtropical origin — cucumber, sweet pepper, citrus, avocado, mango — surface pitting is one of the characteristic expressions of chilling injury, and it is by a wide margin the most common reason pitting is seen in those commodities. This means that a page about pitting and a page about chilling injury necessarily overlap, and the overlap is by design rather than by oversight: pitting is a symptom that chilling injury commonly produces, and chilling injury is the cause that pitting most commonly indicates. Neither statement licenses reading the symptom backwards to the cause in an individual lot.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Physiological in its most common form, but the name covers pathological, mechanical, and chemical causes too',
      note: 'Pitting is a symptom name, not a single disorder',
    },
    {
      label: 'What it is',
      value:
        'Sunken depressions in the skin where groups of cells beneath have collapsed, often darkening as the tissue browns',
    },
    {
      label: 'Most common cause',
      value:
        'Chilling injury, in tropical and subtropical produce — much the most frequent origin of pitting in those commodities',
    },
    {
      label: 'Other causes',
      value:
        'Pathogens producing sunken lesions; physical and handling damage such as impact, abrasion, and compression; and controlled-atmosphere injury',
    },
    {
      label: 'Diagnostic value',
      value:
        'The shape of a pit does not identify what collapsed the cells beneath it',
      note: 'Distribution and context suggest where to look; they do not confirm a cause',
    },
    {
      label: 'Relationship to chilling injury',
      value:
        'Deliberately overlapping: pitting is a leading expression of chilling injury, and chilling injury is the leading cause of pitting in sensitive commodities',
    },
    {
      label: 'When it appears',
      value:
        'Where the cause is chilling, typically only after return to warm conditions rather than during cold holding',
    },
  ],
  sections: [
    {
      id: 'symptom-not-cause',
      heading: 'A symptom name that sounds like a diagnosis',
      body: [
        {
          type: 'paragraph',
          text: 'A record that reads "pitting" has documented that depressions were seen. It has not identified a disorder, established a mechanism, or located a failure in the chain — though the word is confident enough that it is routinely treated as though it had. The underlying event is the same in every case: cells below the skin lose integrity, the tissue beneath collapses, and the surface sinks. What killed those cells is the entire question, and the pit is silent on it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chilling injury',
              description:
                'In chilling-sensitive commodities, holding below the tolerated temperature but above freezing disorders membranes and metabolism, and localised cell collapse expresses as surface pitting. This is much the most common cause in tropical and subtropical produce, and it usually appears only after return to warm conditions.',
            },
            {
              term: 'Pathogens',
              description:
                'Several rots begin as small, firm, sunken lesions before any sporulation or soft breakdown is visible, so early infection presents as pitting and is regularly recorded as a physiological disorder.',
            },
            {
              term: 'Physical and handling damage',
              description:
                'Impact, abrasion, compression in a stack, and pressure against packaging all collapse cells locally beneath skin that remains unbroken, giving sunken marks that darken as the damaged tissue browns.',
            },
            {
              term: 'Controlled-atmosphere injury',
              description:
                'An atmosphere carrying too much carbon dioxide or too little oxygen for the commodity injures tissue, and surface pitting is among the presentations that follow.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Pitting is a shared presentation',
          text: 'Chilling injury, early pathogen lesions, handling damage, and controlled-atmosphere injury all collapse cells under the skin and all produce sunken depressions. The pit records the collapse, not its cause. Naming pitting is describing a lot, not diagnosing one.',
        },
      ],
    },
    {
      id: 'chilling-overlap',
      heading: 'Why this overlaps chilling injury on purpose',
      body: [
        {
          type: 'paragraph',
          text: 'In cucumber, sweet pepper, citrus, avocado, and mango, chilling injury is the reason pitting is usually seen. These are commodities of tropical and subtropical origin that are progressively disordered by temperatures well above their freezing point, and localised cell collapse showing as surface pitting is one of the ways that disorder expresses itself. Anyone finding pitting in these commodities after cold holding is right to look at temperature history first — that is where the answer most often is.',
        },
        {
          type: 'paragraph',
          text: 'But "most often" is a statement about a population of lots, and it does not resolve an individual one. The commonest cause is not the only cause, and reasoning from prevalence to a particular consignment is how early rots get written off as cold damage and how compression damage in a badly stacked pallet gets blamed on a cold chain that was running correctly. The overlap between this entry and chilling injury reflects a real relationship in the world; it does not convert a symptom into evidence. The chilling-injury entry sets out the mechanism, the delayed expression on warming, and the temperature records needed to establish it — that is where a suspected chilling cause is properly pursued.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Common is not the same as confirmed',
          text: 'That chilling injury causes most pitting in chilling-sensitive commodities is a useful prior for deciding where to investigate. It is not a finding about the lot in front of you. Early pathogen lesions, compression damage, and atmosphere injury all present the same way, and each would send a corrective action somewhere completely different.',
        },
      ],
    },
    {
      id: 'reading-pattern',
      heading: 'What the pattern suggests, and what it cannot settle',
      body: [
        {
          type: 'paragraph',
          text: 'Although a single pit is uninformative, the distribution of pitting across a unit and across a lot carries hints worth following. These are hypotheses about where to look next, not tests, and every one of them has a common exception.',
        },
        {
          type: 'table',
          caption:
            'Distribution hints and why each fails as a test. None of these confirms a cause.',
          columns: [
            'Pattern observed',
            'Suggests looking at',
            'Why it does not settle it',
          ],
          rows: [
            [
              'Widespread, fairly even pitting across the lot',
              'A temperature or atmosphere condition affecting the whole store',
              'A lot handled roughly at one transfer point can also be damaged throughout',
            ],
            [
              'Pitting concentrated on contact faces and pallet edges',
              'Compression, packaging pressure, or handling damage',
              'Store cold spots and air discharge also track position, giving the same localisation',
            ],
            [
              'Pits enlarging and softening over time',
              'A pathogen developing from an early lesion',
              'Chilling-injured tissue is readily colonised, so a rot may be secondary to a physiological cause',
            ],
            [
              'Pitting appearing after warming, absent in the cold',
              'Chilling injury, which characteristically expresses on warming',
              'Latent handling damage and early infections also become visible with time and warmth',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'The recurring lesson is that the information which separates these causes is not in the fruit surface. It is in the temperature record, the atmosphere record, the handling history, and where necessary a laboratory that can say whether an organism is present. A pitting observation is the start of that enquiry, and treating it as the end is the error the name encourages.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because pitting has several causes, no single control addresses it, and pursuing the wrong one is a real cost — a chain that responds to chilling-caused pitting by improving packaging, or to compression-caused pitting by raising store temperature, has spent effort and fixed nothing. The measures below act on the different causes, and which of them is relevant depends on what the records show.',
        },
        {
          type: 'list',
          items: [
            'Hold chilling-sensitive commodities within their own temperature tolerance through every link of the chain, since this addresses much the most common cause in tropical and subtropical produce.',
            'Keep temperature records continuous enough that a symptom seen after warming can be traced to the leg that caused it, since chilling expression is delayed.',
            'Reduce mechanical damage at transfers and in stacking, and use packaging that limits compression and contact pressure, where handling is implicated.',
            'Specify and monitor controlled atmospheres against sourced guidance for the commodity, since an unsuitable atmosphere injures tissue and pits it.',
            'Handle a suspected pathogen cause as a pathology question — early rot lesions present as pitting and require laboratory confirmation, not visual assessment.',
            'Segregate commodities with incompatible temperature requirements rather than running one store at a compromise setting that pits the sensitive ones.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'cucumbers' },
    { type: 'commodity', slug: 'sweet-peppers' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-mangoes' },
  ],
  causedByConditions: [
    'Chilling injury in chilling-sensitive commodities held below their tolerance but above freezing — much the most common cause in tropical and subtropical produce',
    'Early pathogen lesions, which begin as small firm sunken depressions before any sporulation or soft breakdown appears',
    'Physical and handling damage: impact, abrasion, compression in a stack, and pressure against packaging, all collapsing cells beneath unbroken skin',
    'Controlled-atmosphere injury from an atmosphere carrying excessive carbon dioxide or insufficient oxygen for the commodity',
    'Mixed loads and compromise store settings, which expose sensitive commodities to conditions suited to others',
    'Localised cold spots near evaporator discharge or in poorly stacked pallets, which pit the units exposed to them',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  confusableWith: [
    'Chilling injury — the overlap is by design: pitting is one of its characteristic expressions and it is the most common cause of pitting in sensitive commodities, but that prevalence is a prior for investigation and not a finding about a lot, since the pit itself carries no temperature information',
    'Early pathogen lesions — many rots begin as small, firm, sunken spots before any sporulation or soft rot is visible, so an infection in its early stage is shaped exactly like physiological pitting and is routinely recorded as a disorder',
    'Compression and impact damage — handling collapses cells beneath intact skin and produces sunken darkened marks; the position-dependent distribution that suggests handling is shared with store cold spots, so localisation does not separate them',
    'Controlled-atmosphere injury — excessive carbon dioxide or insufficient oxygen pits the surface as well, and since the atmosphere leaves no mark on the pit, only the atmosphere record distinguishes it',
    'Freezing injury — localised freezing also collapses tissue and can leave sunken damaged areas, and it is separated from chilling-caused pitting only by knowing the temperature relative to the commodity freezing point',
    'Secondary decay following any of the above — pitted tissue is readily colonised, so the endpoint recorded is often a rot that masks whichever cause created the pits that admitted it',
    'Insect feeding or oviposition marks — these also produce small sunken punctures in the skin that are easily grouped under a pitting record',
  ],
  diagnosticLimitations: [
    'Pitting is a symptom name, not a disorder. Chilling injury, early pathogen lesions, physical and handling damage, and controlled-atmosphere injury all collapse cells beneath the skin, and the resulting depression is the same shape whichever did it. Recording pitting describes a lot; it does not diagnose one.',
    'That chilling injury is much the most common cause in tropical and subtropical produce is a statement about many lots, not about the lot in hand. Reasoning from prevalence to a particular consignment is how early rots are written off as cold damage and how compression damage is blamed on a correctly running cold chain.',
    'Where the cause is chilling, symptoms characteristically appear only after return to warm conditions, so a lot inspected cold can pass and pit later; absence of pitting in the cold store is not evidence that the lot was held correctly.',
    'Distribution patterns suggest where to investigate but settle nothing: store cold spots and stacking pressure both track position, and both whole-store conditions and a single rough transfer can damage a lot throughout.',
    'Pitted tissue is readily colonised, so the visible endpoint is frequently a rot; whichever cause created the original pits leaves no separate mark and is routinely never identified.',
    'Separating the causes requires temperature records, atmosphere records, handling history, and where an organism is suspected a competent laboratory. None of that information is present in the fruit surface, and where the records are absent the cause may not be resolvable.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of tropical and subtropical produce and chilling sensitivity',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Surface pitting as a symptom of chilling injury and commodity storage recommendations',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest physiological disorders and decay identification in fresh produce',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Symptom expression of chilling injury and mechanical damage in stored produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, wherever chilling-sensitive produce moves through cold chains. The dominant cause shifts with the commodity and the chain: chilling injury leads in tropical and subtropical produce, while handling and atmosphere causes are proportionally more important where cold management is already well controlled.',
  limitations: [
    'This entry gives no temperatures, atmosphere compositions, durations, or thresholds. Tolerances are commodity-, cultivar-, and maturity-specific and are set by sourced post-harvest guidance.',
    'Because pitting has several unrelated causes, nothing here identifies which one affects a given lot; the entry frames the question and does not answer it from appearance.',
    'Symptom descriptions and distribution patterns are indicative only. They do not confirm a cause, and this entry is not a basis for accepting, rejecting, or apportioning liability for a consignment.',
    'Where a pathogen cause is suspected, identification requires a competent laboratory; no fungicide, treatment, or application procedure is described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Pitting: A Shared Symptom, Not One Cause',
    description:
      'Pitting is sunken skin lesions from several causes: chilling injury, pathogens, handling and CA injury. Why the symptom name never identifies the cause.',
    keywords: [
      'pitting',
      'surface pitting',
      'sunken lesions',
      'chilling injury symptom',
      'post-harvest defect',
    ],
  },
  structuredData: { article: true },
};

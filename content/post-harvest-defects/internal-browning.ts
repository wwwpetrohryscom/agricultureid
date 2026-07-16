import type { PostHarvestDefectContent } from '@/types/content';

export const internalBrowning: PostHarvestDefectContent = {
  id: 'post-harvest-defect-internal-browning',
  slug: 'internal-browning',
  contentType: 'post-harvest-defect',
  title: 'Internal Browning',
  defectClass: 'physiological',
  alternativeNames: [
    'Internal breakdown',
    'Flesh browning',
    'Brown heart',
    'Vascular browning',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Internal browning is the discolouration of flesh or vascular tissue inside otherwise normal-looking produce. It is an umbrella presentation rather than a single disorder: chilling injury, controlled-atmosphere injury, senescence, degenerated water-core, and cultivar or mineral-nutrition disorders all produce it, and it is invisible from outside.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Internal browning is the name given to an appearance, not to a cause. Cut a fruit, tuber, or vegetable and find the flesh, the core, or the vascular strands discoloured brown while the outside looks entirely normal, and what has been observed is internal browning. The term is used across apple, pineapple, potato, mango, and many other commodities, and in each case it groups together conditions that arise from unrelated mechanisms and demand unrelated responses. Treating it as a diagnosis — as a disorder that has been identified — is the single most common error made with it, and it is an error the name itself invites.',
    },
    {
      type: 'paragraph',
      text: 'The underlying biochemistry is broadly shared, which is why the outcomes converge on the same look. Cell compartments are breached, phenolic compounds meet the enzymes that oxidise them, and brown pigments accumulate in tissue that should be pale. What breached the compartments is the actual question, and the answer might be cold below the commodity tolerance, an atmosphere with too much carbon dioxide or too little oxygen, simple old age, a water-core region that has degenerated, or a nutritional and cultivar predisposition established in the orchard long before harvest. The browning looks much the same in every case. Resolving which one occurred cannot be done by cutting more fruit; it requires the storage atmosphere and temperature history of the lot, which the tissue does not carry.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Physiological — an umbrella presentation covering several unrelated disorders',
      note: 'The name describes what is seen on cutting, not what caused it',
    },
    {
      label: 'What it actually is',
      value:
        'Discolouration of internal flesh, core, or vascular tissue in produce that appears normal from outside',
    },
    {
      label: 'Causes grouped under the name',
      value:
        'Chilling injury; controlled-atmosphere injury from excessive carbon dioxide or insufficient oxygen; senescence; degenerated water-core; and cultivar or mineral-nutrition related disorders',
      note: 'These are unrelated mechanisms that happen to converge on a shared appearance',
    },
    {
      label: 'External visibility',
      value:
        'None. The affected fruit or tuber typically looks entirely sound on the outside',
    },
    {
      label: 'Detection',
      value:
        'Destructive — the tissue must be cut. A lot therefore cannot be screened for it non-destructively by eye',
      note: 'What is found is the condition of the units that were sacrificed, not of the units that were shipped',
    },
    {
      label: 'What resolves the cause',
      value:
        'Storage atmosphere and temperature history for the lot, not further inspection of the tissue',
    },
    {
      label: 'Relationship to controlled atmosphere',
      value:
        'Controlled-atmosphere storage both reduces some internal browning and, when the atmosphere is wrong, directly causes it',
    },
  ],
  sections: [
    {
      id: 'umbrella',
      heading: 'A name for an appearance, not a disorder',
      body: [
        {
          type: 'paragraph',
          text: 'It is worth being blunt about what internal browning is, because the vocabulary conceals it. When a report records "internal browning" it has recorded a symptom under a name that sounds like a diagnosis. Nothing about the cause has been established. The same words are used for a physiological disorder of apples set up by a controlled atmosphere, for cold damage in mango, for a well-known browning of pineapple, and for discoloured vascular rings in potato — and no shared mechanism connects them. Any decision that follows from the name alone is made on less information than it appears to be.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chilling injury',
              description:
                'In chilling-sensitive commodities, holding below the tolerated temperature but above freezing disorders membranes and metabolism; internal discolouration is one of its characteristic expressions, and it typically appears only after return to warm conditions.',
            },
            {
              term: 'Controlled-atmosphere injury',
              description:
                'An atmosphere carrying too much carbon dioxide or too little oxygen for the commodity injures tissue directly. This is the mismanagement of a technique that, correctly applied, suppresses other forms of browning — the same tool in both roles.',
            },
            {
              term: 'Senescence',
              description:
                'Tissue at the end of its storage life loses cell integrity on its own account. Browning here is not damage inflicted by a fault; the lot is simply old, and no excursion needs to have occurred.',
            },
            {
              term: 'Degenerated water-core',
              description:
                'Water-core regions in apples may dissipate during storage or may break down into brown, disorganised tissue. Where that happens the browning is the endpoint of a condition established before harvest.',
            },
            {
              term: 'Cultivar and mineral-nutrition disorders',
              description:
                'Susceptibility to internal disorders differs sharply between cultivars, and several are associated with the mineral nutrition and growing conditions of the crop rather than with anything that happened after it was picked.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The name is a description, not an identification',
          text: 'Internal browning states that internal tissue is discoloured. It does not state why. Chilling, controlled-atmosphere injury, senescence, degenerated water-core, and cultivar or nutrition disorders all present this way, and the appearance does not separate them. A lot recorded as showing internal browning has not been diagnosed.',
        },
      ],
    },
    {
      id: 'invisible',
      heading: 'Invisible outside, destructive to find',
      body: [
        {
          type: 'paragraph',
          text: 'The defining practical problem is that the outside of an affected unit usually looks normal. There is no reliable external cue — no discolouration, no softening at the surface, nothing an inspector could grade against. The disorder is found by cutting, which destroys the unit examined. This has a consequence that is easy to state and easy to forget: the units that were cut are not the units that were sold. Cutting establishes the condition of the sample, and everything said about the rest of the lot is an inference from that sample, subject to how the sample was drawn and how evenly the disorder is distributed.',
        },
        {
          type: 'paragraph',
          text: 'Distribution is rarely even. Internal disorders often track position in a store, position in a bin, fruit size, maturity at harvest, or orchard block — so a sample drawn conveniently rather than systematically can badly misrepresent the lot in either direction. A lot cannot be screened unit by unit for internal browning by eye, and no amount of external inspection substitutes. Non-destructive techniques for internal condition exist and are used commercially in some settings, but they are neither universal nor a general answer, and where they are not available the destructive sample is what there is.',
        },
        {
          type: 'list',
          items: [
            'External appearance carries no reliable signal — affected units grade as sound.',
            'Finding the disorder requires cutting, so the examined units are removed from the lot by the act of examining them.',
            'Inference from sample to lot depends on sampling design and on a distribution that is frequently uneven.',
            'Non-destructive internal assessment exists in some commercial settings but is not universal and does not make the problem generally visible.',
            'A clean external inspection is not evidence that a lot is free of internal browning, and never has been.',
          ],
        },
      ],
    },
    {
      id: 'history',
      heading: 'Why cutting more fruit will not answer it',
      body: [
        {
          type: 'paragraph',
          text: 'When internal browning is found, the reflex is to cut more units. That establishes how much browning is present; it does not establish what caused it, because every candidate cause writes the same signature into the tissue. The information that would separate them is not in the fruit at all. It is in the record of what the lot was held in: the temperature it experienced relative to that commodity tolerance, the composition of the atmosphere it sat in, how long it was stored, and what its maturity and cultivar were when it went in.',
        },
        {
          type: 'paragraph',
          text: 'This is why storage-atmosphere and temperature history is not an optional supplement to the investigation but the substance of it. A controlled-atmosphere store whose carbon dioxide ran high for a period, a cold store that dropped below a tropical commodity tolerance, a lot held far past its useful life, or a cultivar known to be predisposed — each of these is a different finding with a different corrective action, and each produces brown flesh. Where no atmosphere or temperature record exists, the honest position is that the cause is not known, and a page of cut-fruit photographs does not change that.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Controlled atmosphere is both a control and a cause',
          text: 'Controlled-atmosphere storage genuinely suppresses several internal disorders and extends storage life, which is why it is used. An atmosphere that is wrong for the commodity — carbon dioxide too high, oxygen too low — injures tissue and produces internal browning of its own. The same technique appears on both sides of this page, and that is not a contradiction: it is why the atmosphere record matters. This entry describes no gas concentrations, procedures, or set points; atmosphere specification for a commodity comes from sourced guidance and from qualified operators.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Because the name covers several disorders, there is no single control. What reduces internal browning depends entirely on which mechanism is operating in the lot at hand, which returns the question to storage history. Once the tissue is brown nothing recovers it; all of the following act before the disorder develops.',
        },
        {
          type: 'list',
          items: [
            'Establish which mechanism is in play before acting, using atmosphere and temperature records rather than the appearance of the tissue.',
            'Hold each commodity within its own temperature tolerance, since chilling is a leading contributor in chilling-sensitive commodities and a store set for a different commodity will cause it.',
            'Specify and monitor controlled atmospheres against sourced guidance for the commodity and cultivar, recognising that a mismanaged atmosphere causes the very disorder the technique is meant to suppress.',
            'Take storage duration seriously as a cause in its own right: senescent browning needs no fault to explain it, and a lot held beyond its useful life will brown regardless of how well the store was run.',
            'Treat cultivar and orchard history as part of the risk picture, since susceptibility is established before harvest and some lots are predisposed on arrival.',
            'Sample systematically when cutting, and report findings as an estimate from a sample rather than as the condition of the lot.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-pineapples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
  ],
  causedByConditions: [
    'Chilling injury in chilling-sensitive commodities, where internal discolouration is one expression of holding below the tolerated temperature',
    'Controlled-atmosphere injury from an atmosphere carrying excessive carbon dioxide or insufficient oxygen for the commodity',
    'Senescence, where tissue at the end of its storage life loses cell integrity without any excursion having occurred',
    'Water-core that has degenerated into brown, disorganised tissue rather than dissipating during storage',
    'Cultivar susceptibility and mineral-nutrition status established before harvest, which predispose some lots regardless of handling',
    'Extended storage duration, which compounds every one of the above',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  confusableWith: [
    'Chilling injury — internal discolouration is one of its characteristic expressions, so a chilled lot and a controlled-atmosphere-injured lot present identically on the cutting board; only the temperature and atmosphere record separates them',
    'Controlled-atmosphere injury — excessive carbon dioxide or insufficient oxygen browns internal tissue directly, and the result is indistinguishable by eye from chilling, senescent, or water-core-derived browning',
    'Senescence — an old lot browns internally with no fault anywhere in the chain, so finding brown flesh is not evidence that an excursion occurred; storage duration is the shared cue that appearance cannot supply',
    'Degenerated water-core — water-core regions that break down produce brown flesh, so the same cut surface may record a pre-harvest condition rather than any storage failure',
    'Freezing injury — thawed freeze-damaged flesh discolours as it breaks down, adding brown internal tissue to the list of shared endpoints',
    'Internal rots — pathogens colonising internal tissue also discolour it, and early lesions can present as diffuse browning before any organism is apparent',
    'Bruise damage that has aged — impact-damaged flesh browns internally beneath intact skin, which is a mechanical cause wearing the same appearance',
  ],
  diagnosticLimitations: [
    'Internal browning is a description of an appearance, not an identification of a disorder. Chilling injury, controlled-atmosphere injury, senescence, degenerated water-core, and cultivar or mineral-nutrition disorders all converge on the same brown tissue through unrelated mechanisms, and the tissue does not record which one occurred.',
    'The cause cannot be resolved by cutting fruit, however much of it is cut. Separating the candidates requires the storage atmosphere and temperature history of the lot; where no such record exists, the honest position is that the cause is unknown.',
    'The disorder is invisible externally. Affected units grade as sound on appearance, so a lot cannot be screened for internal browning non-destructively by eye, and a clean external inspection is not evidence of a clean lot.',
    'Detection is destructive: the units examined are consumed by the examination. Any statement about the rest of the lot is an inference from a sample, and internal disorders are frequently distributed unevenly by store position, bin position, fruit size, maturity, or orchard block, so a conveniently drawn sample can mislead in either direction.',
    'Controlled-atmosphere storage appears as both a control and a cause, so the presence of a controlled atmosphere neither implicates nor exonerates it — only the atmosphere record distinguishes the technique working from the technique failing.',
    'Non-destructive internal assessment is available in some commercial settings but is not universal, and its absence is the normal case rather than an exception; where it is not available, the destructive sample is the only source of information.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Internal physiological disorders of stored fruit, and commodity storage recommendations',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Controlled-atmosphere storage disorders and store management in pome fruit and potatoes',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling, storage atmosphere, and temperature management principles',
    },
    {
      sourceId: 'cip',
      citedFor: 'Internal discolouration disorders of stored potato tubers',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Physiology of internal browning disorders and their relationship to storage conditions',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, but the mix of causes shifts with the storage technology in use: long-term controlled-atmosphere storage makes atmosphere injury a leading contributor where it is common, while in chains without it chilling and senescence dominate the same presentation.',
  limitations: [
    'This entry gives no temperatures, atmosphere compositions, durations, or thresholds. Storage specifications are commodity-, cultivar-, and system-specific and are set by sourced post-harvest guidance and by qualified operators, not by any general figure.',
    'Because the name covers several unrelated disorders, nothing here identifies which one affects a given lot; the entry describes how to frame the question, not how to answer it from appearance.',
    'Symptom descriptions are indicative only and do not confirm a cause. This entry is not a basis for accepting, rejecting, or apportioning liability for a consignment.',
    'Internal browning is not reversible once established; all measures described are preventive, and no handling or storage step recovers affected tissue.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Internal Browning: An Appearance, Not One Cause',
    description:
      'Internal browning names a look, not a disorder. Chilling, CA injury, senescence and water-core all produce it, and cutting fruit alone cannot tell them apart.',
    keywords: [
      'internal browning',
      'internal breakdown',
      'brown heart',
      'controlled atmosphere injury',
      'storage disorder',
    ],
  },
  structuredData: { article: true },
};

import type { PostHarvestDefectContent } from '@/types/content';

export const superficialScald: PostHarvestDefectContent = {
  id: 'post-harvest-defect-superficial-scald',
  slug: 'superficial-scald',
  contentType: 'post-harvest-defect',
  title: 'Superficial Scald',
  defectClass: 'physiological',
  alternativeNames: ['Storage scald', 'Scald', 'Common scald'],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Superficial scald is a storage disorder of apples and pears in which the skin develops diffuse, irregular browning while the flesh beneath usually remains sound. It appears only after an extended period in store, which means it cannot be detected when the fruit goes in.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Superficial scald is a disorder of the skin of stored apples and pears. It presents as diffuse, irregular, brown or bronzed patches on the surface — often on the greener or less exposed side of the fruit — with edges that fade into sound skin rather than forming a defined lesion. What sits underneath is the key to the name: the flesh beneath a scalded patch is typically unaffected, and the injury does not extend into the fruit. In principle this separates it from the internal disorders it is filed alongside, because scald is a surface event with sound tissue below while an internal disorder is the reverse — sound skin with damaged tissue below.',
    },
    {
      type: 'paragraph',
      text: 'The characteristic that governs everything practical about scald is its latency. It does not appear at harvest and it does not appear when fruit enters the store. It develops only after an extended period of cold storage, and often becomes fully apparent only once the fruit is brought back to warm conditions afterwards. Fruit destined to scald is therefore visually indistinguishable from fruit that is not at the moment of storage-in, and the decision to store a lot is made without any way of inspecting for the disorder it may later develop. Susceptibility differs greatly between cultivars — some are notoriously prone and others essentially unaffected — so the risk attached to a lot is largely fixed before it ever reaches the store door.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Physiological — a storage disorder of the skin',
    },
    {
      label: 'Commodities affected',
      value:
        'Apples and pears specifically. It is a pome-fruit storage disorder, not a general produce defect',
    },
    {
      label: 'Appearance',
      value:
        'Diffuse, irregular brown or bronzed patches on the skin with edges fading into sound tissue, rather than a defined lesion',
    },
    {
      label: 'Depth of damage',
      value:
        'Surface and skin only — the flesh beneath a scalded patch is typically unaffected',
      note: 'This is what distinguishes it in principle from internal disorders, which show sound skin over damaged flesh',
    },
    {
      label: 'Latency',
      value:
        'Appears only after an extended period in store, and often becomes fully apparent only on return to warm conditions',
      note: 'It is therefore not detectable at the point of storage-in — susceptible and unaffected fruit look identical going in',
    },
    {
      label: 'Cultivar susceptibility',
      value:
        'Large. Some cultivars are highly prone and others are effectively unaffected, so risk is substantially fixed before storage',
    },
    {
      label: 'Not chilling injury',
      value:
        'Apples and pears are not chilling-sensitive in the way tropical produce is, and are routinely held near their freezing point; scald is not cold damage of that kind',
    },
  ],
  sections: [
    {
      id: 'surface-not-internal',
      heading: 'A skin disorder, with sound flesh beneath',
      body: [
        {
          type: 'paragraph',
          text: 'Superficial scald is superficial in the literal sense. The browning occupies the skin and the cell layers immediately below it, and cutting through a scalded patch normally reveals flesh of ordinary colour and texture. That geometry is diagnostically useful in principle: an internal disorder gives sound skin over discoloured flesh, and scald gives discoloured skin over sound flesh, so the cut fruit distinguishes them where the intact fruit cannot. It is worth stating plainly that this is a principle rather than a rule that always holds — severe or advanced scald can involve tissue below the surface, and a fruit may carry scald and an unrelated internal disorder at the same time, in which case the cut surface shows both and attributes neither.',
        },
        {
          type: 'paragraph',
          text: 'The disorder is associated with the oxidation of compounds that accumulate in the skin during storage, and the browning that results is the visible endpoint of that chemistry. What matters for anyone handling fruit is that this is a process occurring in the skin over time in store, driven by the condition of the fruit when it went in and by the environment it has been held in since — not an injury inflicted at a moment that could be located in a handling record.',
        },
      ],
    },
    {
      id: 'latency',
      heading: 'Why it cannot be found at storage-in',
      body: [
        {
          type: 'paragraph',
          text: 'Latency is the operational heart of this disorder. At the moment a lot is graded and placed into store, fruit that will scald badly and fruit that will not are indistinguishable — there is no early symptom, no partial expression, nothing for an inspector to grade against. The disorder develops through the storage period and frequently declares itself only when fruit is warmed for market. The decision to commit a lot to long storage is therefore always made without information about the defect that may end it, and the loss is discovered at the point where the most storage cost has already been incurred.',
        },
        {
          type: 'list',
          items: [
            'Storage-in inspection cannot detect scald: no symptom exists yet to detect.',
            'Grading standards applied at intake describe the fruit as it is, not the disorder it will develop.',
            'Because expression often follows warming, a lot can pass inspection leaving the store and fail after it arrives.',
            'Risk assessment before storage rests on cultivar, growing conditions, and maturity rather than on inspecting the fruit for the disorder.',
            'By the time scald appears, the storage period that produced it is over and cannot be corrected.',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Latency is not the same as slow onset',
          text: 'The point is not that scald develops gradually and could be caught early. The point is that it is absent as an observable at storage-in and appears later, so no inspection at the store door — however careful — carries information about it. Assessment before storage is a judgement about risk from cultivar and history, not a detection of the disorder.',
        },
      ],
    },
    {
      id: 'not-chilling',
      heading: 'What it is confused with, and why the confusion misleads',
      body: [
        {
          type: 'paragraph',
          text: 'Scald is regularly explained as chilling injury, and the explanation is wrong. It is a plausible error: the disorder appears after long cold storage, it involves browning, and it often becomes obvious on warming — a description that reads like chilling injury written out. But apples and pears are not chilling-sensitive in the sense that banana, avocado, mango, and cucumber are. They do not carry a high chilling threshold that a cold store violates; they are routinely and correctly held close to their freezing point for months, and that practice is not the cause of scald. Calling scald chilling injury implies the store was too cold and points management toward raising temperature, which is the wrong lever.',
        },
        {
          type: 'paragraph',
          text: 'The confusion with controlled-atmosphere injury runs differently and is harder to dismiss. Controlled-atmosphere storage is used on pome fruit partly because it suppresses scald, so it is a genuine control. An atmosphere that is wrong for the cultivar, though — carbon dioxide too high or oxygen too low — causes injury of its own, and some of that injury browns the fruit. The same store can therefore be the reason a lot did not scald or the reason it is brown for a different cause entirely, and appearance will not say which. That question is answered by the atmosphere record and by knowing what the cultivar tolerates, both of which come from sourced guidance and qualified operators rather than from the fruit.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Controlled atmosphere sits on both sides',
          text: 'Correctly specified, controlled-atmosphere storage genuinely reduces superficial scald and is used for that reason. Mismanaged, it injures fruit and produces browning that can be mistaken for scald or for an internal disorder. This entry gives no gas concentrations, set points, or procedures: atmosphere specification is cultivar-specific, is set by sourced guidance, and is a matter for qualified operators.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Nothing recovers scalded fruit — the skin does not repair, and a lot found scalded at the end of storage is a loss already incurred. Every useful measure acts either before the fruit is stored or through the conditions maintained during storage, and the largest single factor is the choice of what to store in the first place.',
        },
        {
          type: 'list',
          items: [
            'Treat cultivar as the primary risk variable: susceptibility differs greatly, and a prone cultivar committed to long storage carries a risk that no storage practice removes entirely.',
            'Take account of maturity at harvest and growing conditions, which modify susceptibility and are fixed before the fruit reaches the store.',
            'Specify storage conditions and, where used, controlled atmospheres against sourced guidance for the cultivar, recognising the technique controls scald when right and injures fruit when wrong.',
            'Manage ethylene and the ripening environment as part of the storage regime, since the storage physiology that produces scald is bound up with the fruit ripening state.',
            'Match intended storage duration to the lot: latency means the disorder is a function of time in store, and a susceptible lot marketed early may never express it.',
            'Where browning appears, use the atmosphere and temperature record to separate scald from atmosphere injury rather than reading it from the skin.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [{ type: 'commodity', slug: 'fresh-apples' }],
  causedByConditions: [
    'Extended cold storage of a susceptible cultivar, over which the skin chemistry that produces the disorder develops',
    'Cultivar susceptibility, which differs greatly and is fixed before the fruit reaches the store',
    'Maturity at harvest and growing conditions, which modify how prone a lot is',
    'Storage conditions and atmosphere that do not suit the cultivar being held',
    'Return to warm conditions after storage, which commonly brings latent scald into full expression',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  confusableWith: [
    'Chilling injury — the shared cue is browning that appears after long cold storage and worsens on warming, but apples and pears are not chilling-sensitive the way tropical produce is and are routinely held near their freezing point, so explaining scald as chilling injury points management at the wrong lever',
    'Controlled-atmosphere injury — excessive carbon dioxide or insufficient oxygen browns pome fruit, and because the same store both suppresses scald and can cause injury, the browning alone cannot say whether the atmosphere worked or failed',
    'Internal browning — the shared cue is brown tissue in stored apples; in principle scald is skin with sound flesh beneath and internal browning is sound skin over brown flesh, but a fruit can carry both at once and the cut surface then attributes neither',
    'Sunburn or field surface injury — also browns or bronzes the skin, but is established in the orchard before harvest rather than developing in store, and the fruit arrives already showing it',
    'Bruising and abrasion — handling damage discolours the surface too, though it forms defined marks at contact points rather than diffuse patches fading into sound skin',
    'Senescent skin breakdown — an old lot deteriorates at the surface as well, so long-stored fruit may be brown simply because it is finished rather than because it scalded',
  ],
  diagnosticLimitations: [
    'Scald is undetectable at the point of storage-in. Fruit that will scald and fruit that will not are visually identical when the lot enters store, so no intake inspection carries information about it and the decision to store is always made without it.',
    'Browning on stored pome fruit does not identify scald. Controlled-atmosphere injury, senescent surface breakdown, and pre-harvest surface injury all brown the skin, and separating them requires the atmosphere and temperature record and the cultivar rather than the appearance.',
    'The surface-versus-internal distinction is a principle, not a test. Advanced scald can involve tissue below the skin, and a fruit may carry scald together with an unrelated internal disorder, in which case the cut surface shows both and attributes neither.',
    'Cultivar susceptibility varies so widely that observations from one cultivar do not transfer to another; the same storage regime produces heavy scald in one and none in another, so a symptom cannot be read against a general expectation.',
    'Because expression frequently follows warming, a lot can pass inspection on despatch and present as scalded on arrival, with the storage period that caused it long over and beyond correction.',
    'Controlled-atmosphere storage is both a control for scald and, mismanaged, a cause of browning, so its presence neither implicates nor exonerates it without the atmosphere record.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Superficial scald of apples and pears: symptoms, storage relationship, and cultivar susceptibility',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Pome fruit storage management and controlled-atmosphere storage disorders',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Physiology of superficial scald and its development during long-term storage',
    },
    {
      sourceId: 'psu-extension',
      citedFor: 'Apple storage disorders and post-harvest quality management',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Wherever apples and pears are held in long-term storage, which concentrates the disorder in the temperate producing regions and the storage-based supply chains that serve them; the cultivars grown in a region largely determine how much of a problem it is there.',
  limitations: [
    'This entry gives no storage temperatures, atmosphere compositions, durations, or treatment specifications. These are cultivar- and system-specific and are set by sourced post-harvest guidance and qualified operators.',
    'Cultivar susceptibility varies so widely that general statements about the disorder may not describe a particular cultivar or lot, and observations do not transfer between cultivars.',
    'Symptom descriptions are indicative only. Browning on stored pome fruit does not confirm scald, and this entry is not a basis for accepting or rejecting a consignment.',
    'Scald is not reversible; nothing described here recovers affected fruit, and all measures are preventive or act on the decision of what to store and for how long.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Superficial Scald: Late Skin Disorder of Apples',
    description:
      'Superficial scald browns apple and pear skin only after months in store. Why it is not chilling injury, and why storage-in inspection cannot detect it.',
    keywords: [
      'superficial scald',
      'storage scald',
      'apple storage disorder',
      'pear scald',
      'pome fruit storage',
    ],
  },
  structuredData: { article: true },
};

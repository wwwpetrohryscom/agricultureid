import type { PostHarvestDefectContent } from '@/types/content';

export const freezingInjury: PostHarvestDefectContent = {
  id: 'post-harvest-defect-freezing-injury',
  slug: 'freezing-injury',
  contentType: 'post-harvest-defect',
  title: 'Freezing Injury',
  defectClass: 'physiological',
  alternativeNames: [
    'Freeze damage',
    'Frost injury (post-harvest)',
    'Ice damage',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Physiological disorder',
  summary:
    'Freezing injury is physical damage caused by ice forming inside harvested tissue and rupturing its cell structure; on thawing the affected tissue becomes translucent, water-soaked, and leaky. It is a fundamentally different event from chilling injury, which occurs above the freezing point with no ice involved.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Freezing injury is a mechanical event driven by a change of state. When tissue is held below the temperature at which the water in it crystallises, ice forms — between cells, within cells, or both — and the growing crystals physically tear membranes and cell walls apart. Nothing about the damage is metabolic in origin: it is structural, immediate in its cause, and irreversible from the moment the crystals form. Because the tissue is frozen while it is happening, a frozen lot can look deceptively firm and intact in the cold; the damage becomes obvious only when the ice melts and the ruptured cells release their contents.',
    },
    {
      type: 'paragraph',
      text: 'This mechanism is the reason freezing injury and chilling injury must be kept apart in any assessment, even though the two are constantly conflated and can leave superficially similar water-soaked tissue behind. Chilling injury happens above the freezing point, in commodities of tropical and subtropical origin, and involves no ice at any stage — it is a progressive disturbance of membranes and metabolism. Freezing injury happens below the freezing point, can affect commodities that are not chilling-sensitive at all, and is ice-crystal rupture. The distinction is not academic: the two are prevented by different settings, arise from different failures, and a lot diagnosed as one when it is actually the other will send an investigation to the wrong link of the chain.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value:
        'Physiological disorder — structural rupture by ice-crystal formation',
    },
    {
      label: 'Mechanism',
      value:
        'Water in the tissue crystallises; ice physically ruptures membranes and cell walls',
      note: 'A physical change of state, not a metabolic disturbance',
    },
    {
      label: 'Contrast with chilling injury',
      value:
        'Chilling injury occurs ABOVE the freezing point and involves no ice at all; freezing injury requires ice and occurs below it',
      note: 'The classic confusion in post-harvest assessment — the two have different causes, different susceptible commodities, and different remedies',
    },
    {
      label: 'Appearance on thawing',
      value:
        'Translucent, water-soaked, sodden tissue that collapses and leaks as the ruptured cells release their contents',
    },
    {
      label: 'Susceptible commodities',
      value:
        'Any commodity held below its own freezing point, including produce that is not chilling-sensitive — apples, potatoes, and leafy vegetables all freeze',
      note: 'Chilling sensitivity and freezing susceptibility are separate properties; a commodity may have one, both, or neither',
    },
    {
      label: 'Reversibility',
      value:
        'None. The structural damage is done when the ice forms, and thawing reveals it rather than repairing it',
    },
    {
      label: 'Where the freezing point is set',
      value:
        'This entry gives no freezing-point temperatures: the point at which a commodity freezes is specific to the commodity and to the solutes dissolved in its tissue',
      note: 'Consult FAO, USDA-ARS, or the applicable extension post-harvest handling reference for the commodity in question',
    },
  ],
  sections: [
    {
      id: 'mechanism',
      heading: 'Ice, not cold: what actually happens',
      body: [
        {
          type: 'paragraph',
          text: 'Harvested tissue is mostly water, but that water is not pure — it carries sugars, acids, salts, and other solutes that depress the temperature at which it crystallises below the freezing point of pure water. This is why no single freezing temperature can be quoted for fresh produce, and why this entry quotes none. The depression depends on the concentration of dissolved material in the tissue, which varies by commodity, by cultivar, by maturity, and even between parts of the same unit. A figure taken from one commodity does not transfer to another, and a figure that appears authoritative but is applied to the wrong commodity is worse than no figure at all.',
        },
        {
          type: 'paragraph',
          text: 'Once crystallisation does begin, the damage is structural. Ice forming in the spaces between cells draws water out of the cells themselves, dehydrating and distorting them; ice forming inside cells punctures membranes directly. Either way the compartments that keep the tissue organised are breached. While the lot remains frozen this may be entirely invisible — the tissue is held rigid by the ice that is destroying it. On thawing, the contents of the ruptured cells escape into the intercellular spaces, air is displaced by liquid, and the tissue takes on the characteristic translucent, glassy, water-soaked appearance and leaks freely when cut or handled.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Freezing injury is not severe chilling injury',
          text: 'These are different mechanisms, not two points on one scale. Chilling injury is a metabolic and membrane disorder that develops above the freezing point in chilling-sensitive commodities and expresses on warming. Freezing injury is ice-crystal rupture that occurs below the freezing point and can affect commodities with no chilling sensitivity whatever. Treating one as a worse version of the other leads directly to the wrong preventive setting.',
        },
      ],
    },
    {
      id: 'contrast',
      heading: 'Telling it apart from chilling injury',
      body: [
        {
          type: 'paragraph',
          text: 'Both disorders can leave water-soaked tissue, which is precisely why the shared cue is useless for separating them. What distinguishes them is not the endpoint but the history that produced it, and history is not visible in the tissue.',
        },
        {
          type: 'table',
          caption:
            'Qualitative contrast between the two disorders. Neither column can be read off appearance alone.',
          columns: ['Aspect', 'Freezing injury', 'Chilling injury'],
          rows: [
            [
              'Temperature relationship',
              'Below the freezing point of the tissue',
              'Above the freezing point, below the tolerated range',
            ],
            [
              'Ice formation',
              'Required — it is the mechanism',
              'None at any stage',
            ],
            [
              'Nature of damage',
              'Physical rupture of cell structure',
              'Progressive membrane and metabolic disturbance',
            ],
            [
              'Which commodities',
              'Any commodity taken below its own freezing point',
              'Chiefly tropical and subtropical produce',
            ],
            [
              'When it shows',
              'On thawing',
              'Typically only after return to warm temperature',
            ],
            [
              'Prevention',
              'Keep the commodity above its freezing point',
              'Keep sensitive produce above a much higher tolerance',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'In practice the separation is made from recorded temperature history rather than from the lot, and where no adequate record exists the question may simply not be answerable. A useful asymmetry is that freezing injury commonly appears as a localised pattern — the units nearest a cold-air discharge, against an exterior wall, or on the face of a pallet exposed to an open door — because freezing is usually a local excursion rather than a whole-store condition. Chilling injury is more often distributed across the lot, because the whole store was set wrong. This is a hint about where to look, not a diagnosis; a store with an even freezing excursion, or a lot with a cold spot below the chilling tolerance, will break the pattern.',
        },
      ],
    },
    {
      id: 'conditions',
      heading: 'How lots come to be frozen',
      body: [
        {
          type: 'list',
          items: [
            'Control failure in a cold store or vehicle: a faulty sensor, a failed controller, or a set point placed too close to the commodity freezing point with no margin for variation.',
            'Cold spots within a store that is correctly set on average — directly in the evaporator discharge stream, against uninsulated surfaces, or where air short-circuits through a poorly stacked pallet.',
            'Refrigerated transport in which produce sits in the delivery air stream rather than being loaded to allow air to pass around it.',
            'Ambient freezing exposure at points where the chain is not controlled at all: on a loading dock in winter, in an unheated staging area, or during an open-air transfer.',
            'Delayed field heat removal followed by aggressive over-correction, where a store is driven hard to recover temperature and overshoots.',
            'Produce held very close to its freezing point deliberately, to extend life, where the margin for error is inherently narrow and normal variation can cross it.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The recurring theme is margin. Holding close to the freezing point is a legitimate practice for some commodities and is why several are stored at very low temperatures without harm — but it removes the buffer that absorbs sensor drift, stratification, and door openings. Where that margin should sit for a given commodity is not a universal number and is not stated here; it comes from sourced post-harvest guidance for the commodity, and where guidance is silent the safe course is a conservative one.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'There is no treatment. Frozen tissue does not recover, and a thawed lot cannot be restored by any handling, packaging, or storage measure — the only useful interventions occur before the ice forms. Management is therefore entirely about control, margin, and monitoring of the environment the produce is held in.',
        },
        {
          type: 'list',
          items: [
            'Set holding temperature against sourced guidance for the specific commodity, with a deliberate margin above its freezing point rather than at it.',
            'Map cold stores and vehicles for local variation rather than trusting a single control sensor; the coldest point in the space is the one that determines whether a lot freezes.',
            'Stack and load so that delivery air passes around produce rather than through it, and keep units out of the direct discharge stream.',
            'Protect the uncontrolled links — docks, staging areas, and transfers — where ambient exposure, not equipment failure, is the usual cause in cold climates.',
            'Record temperature continuously through the chain, since a brief local excursion that causes irreversible damage may be over long before anyone looks.',
            'Where water-soaked tissue is found, treat the temperature record as the evidence and the appearance as the prompt, since freezing and chilling injury cannot be separated by looking.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A frozen lot may look sound while frozen',
          text: 'Ice holds damaged tissue rigid, so inspection of a cold lot can pass produce whose cell structure is already ruptured. The defect becomes apparent on thawing, often after the lot has moved on. Absence of visible damage in the cold store is not evidence that a freezing excursion did not occur.',
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'head-cabbage' },
  ],
  causedByConditions: [
    'Holding a commodity below the freezing point of its own tissue, so that ice forms and ruptures cell structure',
    'Control failures in cold stores or refrigerated vehicles: sensor drift, controller faults, or a set point left with no margin above the freezing point',
    'Localised cold spots in the evaporator discharge stream, against uninsulated surfaces, or where air short-circuits through a pallet',
    'Ambient freezing exposure at uncontrolled points in the chain, such as loading docks, staging areas, and open-air transfers in cold climates',
    'Aggressive temperature recovery that overshoots after a period of inadequate cooling',
    'Deliberate holding very close to the freezing point to extend storage life, which leaves little tolerance for normal variation',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  confusableWith: [
    'Chilling injury — the classic confusion: both leave translucent, water-soaked tissue, but chilling injury occurs above the freezing point with no ice at any stage, so the shared water-soaked cue cannot separate an actual freeze from non-freezing cold damage without temperature records',
    'Bacterial soft rot — also produces sodden, collapsing, leaking tissue; the wet breakdown of a thawed freeze is readily mistaken for infection, and frozen tissue is in any case rapidly colonised, which puts the rot on top of the freeze',
    'Water-core in apples — glassy, translucent, water-soaked flesh is the shared cue, but water-core is a pre-harvest sorbitol-related condition rather than ice damage, and it can be present in fruit that was never near freezing',
    'Internal browning — thawed and degenerating freeze-damaged flesh discolours, and the resulting internal browning is indistinguishable by eye from browning caused by controlled-atmosphere injury, senescence, or chilling',
    'Mechanical or impact damage — bruised tissue also appears water-soaked and darkened at the site, and a localised freeze pattern on a pallet face can be read as handling damage',
    'Senescent breakdown — tissue at the end of its life also softens and loses cell integrity, giving a sodden presentation with no cold event involved',
  ],
  diagnosticLimitations: [
    'Water-soaked, translucent tissue is shared with chilling injury, with bacterial soft rot, and with water-core, and it identifies none of them. It records that cell compartments have been breached, not what breached them, so it cannot on its own establish that ice ever formed.',
    'A frozen lot can look sound while it is still frozen, because ice holds ruptured tissue rigid. Inspection in the cold store is therefore not evidence that no freezing occurred, and the defect commonly becomes visible only after the lot has moved on and thawed.',
    'Separating freezing injury from chilling injury depends on knowing the temperature the lot experienced relative to the freezing point of that commodity. Neither figure is visible in the tissue, and where continuous temperature records are absent the distinction may not be resolvable at all.',
    'Freezing points are commodity- and solute-specific, and vary with cultivar, maturity, and even between parts of the same unit, so no general threshold exists against which an observed symptom could be checked. This entry states none.',
    'Frozen and thawed tissue is rapidly colonised by decay organisms, so the endpoint recorded is frequently a rot; the freezing event that made the tissue vulnerable leaves no separate mark of its own.',
    'The localised distribution that often accompanies a freezing excursion is a hint about where to look rather than a diagnostic test — an even excursion across a whole store, or a chilling event confined to a cold spot, produces the opposite pattern.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Commodity-specific freezing points and storage recommendations for fresh produce, and freezing injury symptoms',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest temperature management and cold chain principles for harvested commodities',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Post-harvest physiological disorders of fresh produce, including freezing and low-temperature damage',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Cold store management and temperature control in stored crops',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, but the dominant cause shifts with climate: in cold regions freezing injury arises mainly from ambient exposure at uncontrolled points such as docks and transfers, while in warm regions it is almost always a refrigeration control failure or a store cold spot.',
  limitations: [
    'This entry gives no freezing-point temperatures. The temperature at which a commodity freezes depends on the solutes dissolved in its tissue and is specific to the commodity, cultivar, and maturity; it must be taken from sourced post-harvest guidance rather than from any general figure.',
    'Symptom descriptions are indicative only. Water-soaked tissue does not confirm freezing, and this entry is not a basis for accepting, rejecting, or apportioning liability for a consignment.',
    'Freezing injury is irreversible; nothing described here recovers an affected lot, and the entry addresses prevention only.',
    'Distinguishing freezing injury from chilling injury or from rot generally requires temperature records and, in contested cases, qualified post-harvest assessment; appearance alone is insufficient.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Freezing Injury: Ice Damage in Stored Produce',
    description:
      'Freezing injury is ice rupturing cell structure, not severe chilling injury. Why thawed tissue turns translucent and leaks, and why no freezing point is quoted.',
    keywords: [
      'freezing injury',
      'freeze damage produce',
      'ice crystal damage',
      'post-harvest freezing',
      'cold store freezing',
    ],
  },
  structuredData: { article: true },
};

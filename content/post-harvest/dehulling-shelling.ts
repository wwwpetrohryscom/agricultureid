import type { PostHarvestContent } from '@/types/content';

export const dehullingShelling: PostHarvestContent = {
  id: 'post-harvest-dehulling-shelling',
  slug: 'dehulling-shelling',
  contentType: 'post-harvest',
  title: 'Dehulling and Hull Removal',
  postHarvestClass: 'processing',
  processStage: 'preparation',
  alternativeNames: [
    'Dehulling',
    'Hulling',
    'Decortication',
    'Dehusking',
    'Cracking (nuts)',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Processing',
  summary:
    "Dehulling removes the hull, husk, shell, or seed coat that encloses an edible kernel. It is distinct from threshing, which frees the seed from the plant: dehulling attacks the seed's own protective layer, and every gain in recovery is paid for in breakage.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Dehulling is the removal of the hard or fibrous layer that a seed or nut carries as its own covering — the rice husk, the sunflower or groundnut shell, the seed coat of a pulse, the pericarp of a nut. It sits immediately after threshing in most chains and is frequently confused with it, but the two operations attack different things. Threshing and shelling, in the general sense described under that entry, separate the seed from the plant structures that bore it: the ear, head, pod, or panicle. Dehulling then removes the layer that belongs to the seed itself.',
    },
    {
      type: 'paragraph',
      text: 'The distinction is not pedantic, because the difficulty is different. Plant structures are dead, dry, and mechanically weak by the time of threshing, and separating them from the seed mostly requires patience. A hull is engineered by the plant to protect the kernel it encloses, and it is often tougher than the kernel is. Removing it therefore means applying enough force to break something protective without breaking the thing it protects — and the two are pressed against each other. This defines the operation: dehulling is always a negotiated failure, and the only question is which failure you accept.',
    },
  ],
  keyFacts: [
    {
      label: 'What it removes',
      value:
        "The seed's own hull, husk, shell, or seed coat — not the plant structure",
    },
    {
      label: 'Distinct from threshing',
      value:
        "Threshing frees seed from the plant; dehulling strips the seed's own covering",
    },
    {
      label: 'The central trade-off',
      value:
        'Complete hull removal versus intact kernels; you cannot maximise both',
    },
    {
      label: 'Main mechanisms',
      value: 'Abrasion, impact, compression between rollers, and shear',
    },
    {
      label: 'Why it changes the commodity',
      value:
        'A dehulled kernel is more perishable than the hulled seed it came from',
    },
    {
      label: 'Whole-kernel premium',
      value:
        'Broken kernels usually sell into a lower-value stream than whole ones',
    },
    {
      label: 'Hard cases',
      value:
        'Tightly adhering coats, variable seed size, and seed moisture outside the workable range',
    },
  ],
  sections: [
    {
      id: 'the-negotiation',
      heading: 'Recovery against breakage',
      body: [
        {
          type: 'paragraph',
          text: 'Every dehuller sits somewhere on a single curve. Set it gently and hulls survive: the lot leaves incompletely hulled, unhulled seeds pass through, and the material must be recirculated or sold as-is. Set it aggressively and hulls come off: so do fragments of kernel, and the lot leaves broken, floury, and downgraded. There is no setting at which both problems disappear, because the force that removes an adhering hull is the same force that fractures the kernel underneath.',
        },
        {
          type: 'paragraph',
          text: 'The economics decide where on that curve to sit, and they are not symmetrical. For rice, the whole-grain fraction commands a large premium over brokens, so milling is optimised around head-rice recovery, and a small percentage-point gain in intact grains outweighs a substantial loss elsewhere. For a pulse destined to be split anyway, or an oilseed going to a crusher that will grind it regardless, breakage costs almost nothing and the operation is set for complete hull removal. The same machine, the same physics, opposite settings — because the value of an intact kernel differs.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Two ways to be wrong, and they look different',
          text: 'Under-hulling is visible: unhulled seed in the finished lot is obvious and gets corrected. Over-aggressive hulling produces brokens and fines that are separated out and sold cheaply, so the loss leaves through a side stream and is easy not to notice. The failure that is easier to see is not the one that is more expensive.',
        },
      ],
    },
    {
      id: 'mechanisms',
      heading: 'How hulls are removed',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Compression and shear between surfaces',
              description:
                'Seed passes between rollers or discs running at different speeds or with a small gap. Rubber-roll rice hullers work this way: the differential grip peels the husk off rather than crushing the grain. Gentle and selective, but the surfaces wear and the gap must track the seed size.',
            },
            {
              term: 'Abrasion',
              description:
                'The seed is rubbed against an abrasive surface or against other seeds until the coat wears away. Used where the coat adheres tightly and cannot simply be peeled, as in pulse dhal milling. Removes the coat progressively, and removes kernel with it if continued.',
            },
            {
              term: 'Impact',
              description:
                'Seed is thrown against a surface hard enough to crack the shell. Effective on brittle shells such as many nuts, and unforgiving of kernels that are also brittle.',
            },
            {
              term: 'Cracking with controlled force',
              description:
                'Nuts are compressed until the shell fails at a predictable point. Shell thickness varies by cultivar and by individual nut, so a force that opens one cracks the kernel of another.',
            },
            {
              term: 'Conditioning before hulling',
              description:
                'Many crops are pre-treated to make the coat separate more willingly — moisture adjustment, drying, or, in pulse milling, loosening the coat before abrasion. This shifts the whole curve favourably and is often worth more than any adjustment to the huller itself.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Whatever the mechanism, the operation always produces a mixture — hulled kernels, unhulled seed, broken pieces, and loose hulls — so a dehuller is invariably followed by separation, and the two are designed together. The unhulled fraction is returned; the hulls leave; the brokens are graded out.',
        },
      ],
    },
    {
      id: 'moisture-and-the-window',
      heading: 'Why moisture governs everything',
      body: [
        {
          type: 'paragraph',
          text: 'The mechanical properties of both hull and kernel change with moisture, and they do not change in the same direction. Dry seed is brittle: the hull cracks readily, and so does the kernel, so dry lots hull easily and break badly. Moist seed is tough: the kernel resists fracture, but the hull becomes pliable and grips rather than shattering, so moist lots stay unhulled. Somewhere between the two is a window in which the hull is brittle enough to fail while the kernel is still tough enough to survive.',
        },
        {
          type: 'paragraph',
          text: 'Where that window lies is specific to the commodity, the cultivar, and the machine, which is why lots are conditioned to a milling moisture rather than simply dried. It also explains a persistent field observation: a lot that hulls perfectly in the morning may break in the afternoon, having lost moisture in between, with nothing about the machine having changed.',
        },
      ],
    },
    {
      id: 'what-the-hull-was-doing',
      heading: 'What is lost when the hull comes off',
      body: [
        {
          type: 'paragraph',
          text: "A hull is a storage organ as much as a protective one, and removing it changes the commodity's post-harvest behaviour rather than merely its appearance. The kernel underneath is exposed: it can now be attacked directly by storage insects that could not penetrate the hull, it takes up and gives off moisture faster because the barrier is gone, and where the kernel is oily, its exposed surface begins to oxidise and go rancid. Brown rice keeps less well than paddy; shelled nuts keep less well than in-shell nuts. This is why dehulling is often deliberately deferred until close to sale, and why hulled kernels frequently require better storage than the seed they came from.",
        },
        {
          type: 'paragraph',
          text: "The hull itself is rarely waste. Rice husk, groundnut shell, and sunflower hull are used as fuel, bedding, litter, abrasive, and substrate, and at the volumes a mill produces the disposal or sale of the hull fraction is a real part of the operation's economics.",
        },
      ],
    },
  ],
  applicableCommodityClasses: ['cereal-grain', 'pulse', 'oilseed', 'nut'],
  applicableCommodities: [
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'brown-rice' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'pigeon-peas' },
    { type: 'commodity', slug: 'oat-grain' },
    { type: 'commodity', slug: 'almonds' },
    { type: 'commodity', slug: 'cashew-nuts' },
  ],
  equipment: [{ type: 'machinery', slug: 'thresher' }],
  measurableInputs: [
    'Seed moisture at hulling (meter)',
    'Seed size distribution and uniformity of the lot',
    'Roller gap, clearance, or abrasive setting',
    'Feed rate through the machine',
    'Proportion of the lot already free of plant material',
  ],
  measurableOutputs: [
    'Hulling efficiency: proportion of seed successfully hulled',
    'Whole-kernel recovery, and the broken fraction',
    'Unhulled seed remaining, returned for recirculation',
    'Hull fraction produced',
    'Kernel damage not visible as breakage, such as internal cracking',
  ],
  qualityEffects: [
    'Produces the edible or tradeable kernel from a seed that could not be used hulled',
    'Fractures a proportion of kernels; the whole-kernel fraction usually carries a price premium',
    'Removes the barrier that protected the kernel from insects and moisture exchange',
    'Exposes oil-rich kernel surfaces to oxidation, shortening storage life',
    'Can leave partial coat or bran on the kernel, affecting appearance and cooking behaviour',
  ],
  environmentalContext:
    'Dehulling is where large volumes of hull are generated — rice husk in particular is produced at a scale that makes its use as fuel or substrate a significant secondary industry, and its accumulation a disposal problem where it is not used. Milling is also concentrated: dehulling is one of the operations that moves out of the village and into a mill as chains formalise, which shifts both the value and the residue away from the farm.',
  relevantStandards: [
    { type: 'commodity-grade', slug: 'usda-rice-grades' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'pigeon-pea' },
    { type: 'crop', slug: 'oats' },
    { type: 'machinery', slug: 'thresher' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice hulling, milling, and head-rice recovery',
    },
    {
      sourceId: 'fao',
      citedFor: 'Dehulling and decortication in post-harvest processing',
    },
    {
      sourceId: 'icar',
      citedFor: 'Pulse dehulling and dhal milling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Kernel breakage and mechanical damage in seed processing',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Dehulling methods and the value placed on whole kernels are strongly commodity- and market-specific; rice milling in particular is optimised around whole-grain recovery in most trading markets.',
  limitations: [
    'No moisture window, machine setting, feed rate, or recovery target is given here. All are commodity-, cultivar-, and machine-specific and are set by equipment guidance and processing practice for the crop.',
    'This entry covers hull removal. Separation of seed from the plant — the ear, head, pod, or panicle — is a different operation, covered under threshing and shelling.',
    'Hulling efficiency and kernel breakage move in opposite directions; the correct setting is a commercial judgement about relative value, not a technical optimum.',
    'Kernel damage is not fully visible: internal cracking that does not appear as breakage at the mill can still cause fragmentation in later handling.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dehulling: Hull Removal Versus Kernel Breakage',
    description:
      'How hulls, husks, and shells are removed from seeds and nuts, why dehulling differs from threshing, and why hull removal is always paid for in broken kernels.',
    keywords: [
      'dehulling',
      'hulling',
      'decortication',
      'head rice recovery',
      'kernel breakage',
    ],
  },
  structuredData: { article: true },
};

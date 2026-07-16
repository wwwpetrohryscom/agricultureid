import type { PostHarvestContent } from '@/types/content';

export const waxing: PostHarvestContent = {
  id: 'post-harvest-waxing',
  slug: 'waxing',
  contentType: 'post-harvest',
  title: 'Waxing',
  postHarvestClass: 'processing',
  processStage: 'preparation',
  alternativeNames: ['Wax coating', 'Surface coating', 'Fruit coating'],
  category: 'Post-harvest operation',
  subcategory: 'Processing',
  summary:
    'Waxing applies a thin edible coating to fruit — mainly citrus and apples — largely to replace the natural wax that washing removed. It restricts water loss and restores gloss, but the same barrier restricts gas exchange, and too much of it suffocates the fruit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Waxing is the application of a thin edible coating to the surface of fruit and some vegetables after washing and before packing. It is one of the most misunderstood post-harvest operations, commonly assumed to be a cosmetic addition imposed on otherwise natural fruit. The reality is closer to the opposite: fruit grows its own wax, that natural coating is largely removed by the washing and brushing the fruit receives at the packhouse, and applied wax is mostly a replacement for what the packing line stripped off.',
    },
    {
      type: 'paragraph',
      text: "What the coating does is straightforward physics. The fruit's surface is a barrier between a wet interior and a dry atmosphere, and water leaves continuously across it. Water loss is the dominant cause of shrivel, softening, and lost saleable weight in stored fruit, and a substantial share of it goes through the cuticle rather than through the stem or lenticels. Restoring a barrier slows that loss. The difficulty is that the same barrier also slows the movement of oxygen in and carbon dioxide out — and the fruit is still respiring. A coating heavy enough to stop water is heavy enough to asphyxiate the tissue it is protecting.",
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A thin edible coating applied to fruit after washing, before packing',
    },
    {
      label: 'Why it exists',
      value:
        'Mostly to replace the natural wax that washing and brushing removed',
    },
    {
      label: 'Primary benefit',
      value:
        'Reduces water loss, and therefore shrivel and lost saleable weight',
    },
    {
      label: 'Secondary benefit',
      value: 'Restores gloss, which markets read as freshness',
    },
    {
      label: 'The constraint',
      value: 'The same barrier restricts oxygen in and carbon dioxide out',
    },
    {
      label: 'Failure mode',
      value:
        'Too heavy a coating causes fermentation, off-flavours, and internal breakdown',
    },
    {
      label: 'Main commodities',
      value: 'Citrus and apples; also cucumbers, some stone fruit, and swede',
    },
  ],
  sections: [
    {
      id: 'replacing-what-was-removed',
      heading: 'Restoring a barrier the packhouse removed',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit arrives from the field carrying a natural cuticular wax — the bloom on a plum, the dusty sheen on an unwashed apple, the matte finish of an orange straight off the tree. That layer is a functioning water barrier that the plant built. Washing to remove soil, spray residues, and sooty moulds, and brushing to do it thoroughly, takes much of it away or redistributes it, which is why unwaxed washed fruit often looks duller than it did on the tree and loses water faster than it did before it was cleaned.',
        },
        {
          type: 'paragraph',
          text: 'So the honest description of waxing is a repair. It does not usually make fruit better than nature made it; it partly restores a property that a necessary earlier operation destroyed. This also explains why waxing is concentrated in exactly the commodities that get washed and brushed hard and then stored or shipped long distances — citrus above all, where the fruit is handled heavily, travels far, and is sold on appearance.',
        },
      ],
    },
    {
      id: 'the-gas-exchange-trap',
      heading: 'The trap: water out, oxygen in, same door',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit is alive after harvest. It respires: it consumes oxygen, produces carbon dioxide, and needs to exchange both with the atmosphere across its surface. Water vapour leaves across that same surface. A coating cannot discriminate — it is a barrier to molecular movement, and it impedes everything crossing it, in both directions.',
        },
        {
          type: 'paragraph',
          text: 'This gives coating selection an unusual character: the objective is not maximum barrier but a specific, tuned permeability. Get it right and you have restricted water loss while leaving enough gas exchange for normal aerobic respiration — and, incidentally, created a mild internal atmosphere modification that can slow ripening slightly, which is a bonus. Get it wrong in the direction of too much coating and the fruit runs short of oxygen, switches to anaerobic metabolism, and accumulates ethanol and acetaldehyde. The result is off-flavour, internal browning, and breakdown in fruit that looks glossy and perfect from the outside. Coating injury is a real and well-documented disorder, and it is caused by the treatment intended to protect the fruit.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'More coating is not better coating',
          text: 'A heavier or less permeable coating restricts water loss more and restricts respiratory gas exchange more. Beyond a commodity- and cultivar-specific point this causes anaerobic metabolism, off-flavours, and internal breakdown — in fruit whose external appearance is unaffected and may even be improved.',
        },
        {
          type: 'paragraph',
          text: "Where that point lies depends on the commodity, the cultivar, the fruit's respiration rate, the temperature it will be held at, and how long the journey is. It cannot be generalised, and it is why coating formulations are commodity-specific products rather than a single material applied everywhere.",
        },
      ],
    },
    {
      id: 'what-goes-into-them',
      heading: 'What coatings are, and what they carry',
      body: [
        {
          type: 'paragraph',
          text: 'Post-harvest coatings are built from food-grade materials of several families — natural resins, plant- and insect-derived waxes, and polysaccharide- or protein-based films — usually applied as an emulsion and then dried. They are food additives or food-contact materials depending on the jurisdiction, and which ones are permitted, at what levels, and with what labelling is set by food law rather than by horticultural practice. Regulatory positions differ enough between markets that a coating acceptable in one destination is not necessarily acceptable in another, which makes coating an export-compliance question as much as a technical one.',
        },
        {
          type: 'paragraph',
          text: "Coatings are also frequently used as carriers. Because the coating is applied uniformly over the whole surface and then stays there, it is a convenient vehicle for post-harvest fungicides and other permitted treatments. This is worth stating plainly because it is where much of the public concern about waxed fruit actually originates — not with the wax, but with what is dissolved in it. What may be carried, at what concentration, with what pre-harvest and post-harvest interval, and with what residue limit is regulated in every significant market, and AgricultureID publishes none of it: those are matters for the product label, the applicable maximum residue limits, and the destination market's regulation.",
        },
      ],
    },
    {
      id: 'what-it-cannot-do',
      heading: 'What waxing does not do',
      body: [
        {
          type: 'list',
          items: [
            'It does not clean fruit. Waxing follows washing and seals the surface as it finds it, including any residue left there.',
            'It does not stop decay. A coating is not a fungicide, and it can make matters worse by sealing moisture against the surface if fruit is coated wet.',
            'It does not improve internal quality. Sugars, acids, and flavour are set by growing conditions and harvest maturity; a coating only slows their decline, and beyond the permeability limit accelerates it.',
            'It does not compensate for a broken cold chain. Temperature governs respiration and water loss far more powerfully than a coating does, and a coating on warm fruit is a small correction to a large problem.',
            'It does not extend shelf life indefinitely. It shifts water loss and gloss retention along by a useful margin, which is a commercial benefit, not a transformation.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The gloss it produces is worth a separate note, because it is the part consumers see and the part most often called deceptive. Gloss is a genuine signal of a restored barrier and of fruit that will lose less water — but it is also a signal that can be produced on fruit of any internal quality. A shiny orange is not thereby a good orange, and the coating cannot tell the difference.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'cucumbers' },
  ],
  measurableInputs: [
    'Coating formulation and its permitted status in the destination market',
    'Coating quantity applied per unit of fruit surface',
    'Fruit surface dryness at the point of application',
    'Drying conditions after application',
    'Fruit temperature and the temperature the lot will be held at',
  ],
  measurableOutputs: [
    'Rate of water loss and weight loss over storage',
    'Gloss, measured or assessed against a reference',
    'Internal ethanol and acetaldehyde accumulation, as indicators of anaerobic metabolism',
    'Incidence of internal breakdown and off-flavour',
    'Residues of any treatment carried in the coating, against the applicable limits',
  ],
  qualityEffects: [
    'Restricts water loss, reducing shrivel and preserving saleable weight',
    'Restores gloss that washing and brushing removed',
    'Modifies the internal atmosphere slightly, which can mildly slow ripening',
    'Restricts respiratory gas exchange; excessive coating causes fermentation and internal breakdown',
    'Can seal in surface moisture and promote decay if applied to wet fruit',
  ],
  environmentalContext:
    'Waxing exists because fruit travels. Its value rises with the length and warmth of the journey and falls to near zero for fruit sold locally within days, which is why unwaxed fruit is normal in short chains and near-universal absence of waxing in one market says nothing about practice in another. Coatings are also a recurring subject of consumer concern and of divergent regulation, so the same fruit may be waxed for one destination and not for another.',
  safetyLimitations: [
    'No coating material, formulation, application rate, or permitted-use list is given here. Coatings are regulated as food additives or food-contact materials, and what is permitted differs by jurisdiction and by commodity.',
    "Coatings are frequently used as carriers for post-harvest fungicides and other treatments. No treatment, concentration, or interval is published here; these are governed by the product label, the applicable maximum residue limits, and the destination market's regulation.",
    'Labelling of coated produce is required in some jurisdictions and not in others, and the requirements extend to the origin of the coating materials; compliance is a matter for the applicable food law.',
    'Coating does not reduce microbial hazards and is not a food-safety control; it seals the surface in the condition it finds it.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'codex-standards-overview' },
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
  ],
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'cucumber' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Post-harvest coatings, water loss, and gas exchange in fruit',
    },
    {
      sourceId: 'fao',
      citedFor: 'Waxing and surface coating in post-harvest handling of fruit',
    },
    {
      sourceId: 'efsa',
      citedFor: 'Evaluation of surface-coating substances used on fruit',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Post-harvest handling and coating of citrus and pome fruit',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global in long-distance fruit trade, concentrated in citrus and apples. Permitted coating materials, their uses, and labelling requirements are jurisdiction-specific and differ between producing and destination markets.',
  limitations: [
    'No coating material, application rate, permeability specification, or permitted-substance list is given here; these are set by jurisdiction-specific food law and by commodity-specific product guidance.',
    'The point at which a coating becomes too restrictive is commodity-, cultivar-, temperature-, and duration-specific, and cannot be generalised; coating injury results from exceeding it.',
    'Gloss is a visible effect of a restored barrier but is not evidence of internal quality, maturity, or safety.',
    'Coating is a water-loss control, not a decay control, a cleaning step, or a substitute for temperature management.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Waxing Fruit: Restoring a Barrier, Within Limits',
    description:
      'Why citrus and apples are waxed: washing strips the natural cuticular wax, coatings replace it to cut water loss — and the same barrier can suffocate the fruit.',
    keywords: [
      'fruit waxing',
      'post-harvest coating',
      'citrus wax',
      'water loss fruit',
      'coating injury',
    ],
  },
  structuredData: { article: true },
};

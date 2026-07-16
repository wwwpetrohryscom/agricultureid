import type { CommodityContent } from '@/types/content';

export const flaxFibre: CommodityContent = {
  id: 'commodity-flax-fibre',
  slug: 'flax-fibre',
  contentType: 'commodity',
  title: 'Flax Fibre',
  alternativeNames: ['Linen fibre', 'Scutched flax', 'Flax tow and line'],
  category: 'Fibre commodity',
  subcategory: 'Retted and scutched bast fibre',
  commodityClass: 'fibre',
  physicalForm: 'fibre',
  harvestedPart:
    'Bast fibre bundles from the stem, released by retting and separated by scutching',
  sourceCrop: { type: 'crop', slug: 'flax' },
  summary:
    'Flax fibre is the bast fibre of the flax stem, freed from the woody core by retting and separated by scutching. It is the fibre of linen, and it comes from fibre-type flax — a different crop type from the linseed grown for its oilseed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Flax fibre is a bast fibre: it comes from bundles running lengthwise in the outer stem of the flax plant, where they serve the living plant as structural support. Getting them out is not a matter of cutting or combing something off a surface, as with cotton, but of dismantling a stem — dissolving the natural glue that binds the fibre bundles to the woody core, then breaking that core away.',
    },
    {
      type: 'paragraph',
      text: 'The commodity that results is graded on length, fineness, colour, and cleanliness, and its quality is decided largely by how well one step — retting — was judged. Flax fibre supports the linen textile trade and a growing technical market, and it is one of the oldest traded fibres in continuous use.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fibre' },
    { label: 'Parent crop', value: 'Flax (Linum usitatissimum), fibre type' },
    { label: 'Fibre type', value: 'Bast — from the stem, not the seed' },
    { label: 'Key process step', value: 'Retting, then scutching' },
    {
      label: 'Principal use',
      value: 'Fibre — linen textiles and technical uses',
    },
    { label: 'Traded forms', value: 'Line flax (long) and tow (short)' },
    { label: 'Main by-product', value: 'Shive — the broken woody core' },
  ],
  sections: [
    {
      id: 'two-crops-one-species',
      heading: 'Fibre flax and linseed: one species, two crops',
      body: [
        {
          type: 'paragraph',
          text: 'Flax is grown either for fibre or for seed, and the two are distinct crop types with distinct commodities at the end. Fibre flax is bred and grown to produce a tall, slender, unbranched stem — long stems mean long fibre bundles — and it is sown densely to suppress branching. Linseed, grown for the oilseed, is shorter and branched, because the object is to set seed rather than to build stem.',
        },
        {
          type: 'paragraph',
          text: 'A grower chooses between these ends rather than getting both. A fibre crop harvested for seed sacrifices the stem quality that makes the fibre worth having; a linseed crop’s straw yields fibre that is short, coarse, and hard to process. Some fibre from linseed straw does find technical uses, but it is not a substitute for the fibre-type crop, and the two are not the same commodity.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Same species, different commodities',
          text: 'Fibre flax and linseed are both Linum usitatissimum. The crop type, husbandry, harvest method, and traded commodity all differ, which is why a reference must say which one it means.',
        },
      ],
    },
    {
      id: 'pulling-retting-scutching',
      heading: 'Pulling, retting, and scutching',
      body: [
        {
          type: 'paragraph',
          text: 'Fibre flax is pulled rather than cut. The fibre bundles run the full length of the stem and continue toward the root, so cutting at stubble height would throw away usable length and leave an uneven butt end. Pulling machines lift whole plants and lay them in a swath, preserving the full stem.',
        },
        {
          type: 'paragraph',
          text: 'Retting is the controlled step that everything else depends on. The fibre bundles are cemented to the woody core and to each other by pectins, and retting uses microbial and enzymatic action to break those pectins down so the fibre can be separated. In dew retting, the pulled swath is left lying in the field and the work is done by field micro-organisms under weather the grower does not control; water retting, historically important, submerges the straw instead. Judgement here is everything: under-retted straw will not give up its fibre and scutches badly, while over-retting attacks the fibre itself, weakening and darkening it. Retting cannot be undone in either direction.',
        },
        {
          type: 'paragraph',
          text: 'Retted straw is then baled and taken to a scutching mill, where it is broken and beaten to shatter the woody core and shake it out. This yields long, aligned line flax; the shorter, tangled fibre separated alongside it is tow, a genuine second stream with its own uses; and the shattered woody core falls out as shive. Hackling — combing the line flax — refines it further and produces more tow.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Flax fibre is bought on length, fineness, strength, colour, and cleanliness, and — unusually among fibre commodities — much of its assessment remains a matter of expert handling and appearance rather than instrument readings alone. Colour is read as a record of retting: a well-retted, evenly weathered fibre has a characteristic even tone, while patchiness signals a swath that retted unevenly.',
        },
        {
          type: 'list',
          items: [
            'Under-retted fibre that resists separation and carries adhering core',
            'Over-retted fibre, weak and dark',
            'Uneven retting across the swath',
            'Excess shive and dust left after scutching',
            'Short, tangled, or broken fibre reducing the line fraction',
            'Weathering damage from a swath caught by poor weather',
          ],
        },
        {
          type: 'paragraph',
          text: 'Grading is by trade convention and buyer specification rather than by a single international standard, and the terms used vary between the European growing regions that dominate fibre-flax supply. This entry reproduces no grade tables.',
        },
      ],
    },
    {
      id: 'uses-and-streams',
      heading: 'Uses and accompanying streams',
      body: [
        {
          type: 'paragraph',
          text: 'Line flax is spun into linen yarn for apparel and household textiles, the market that has carried the fibre for millennia. Tow goes to coarser yarns, twines, and — increasingly — to nonwoven and composite applications, where flax is used as a reinforcement fibre rather than a textile one. Technical and composite demand has made the short-fibre stream more valuable than it once was.',
        },
        {
          type: 'paragraph',
          text: 'Shive, the woody core broken out at scutching, leaves the mill in large volume and is put to use as animal bedding, particleboard furnish, and fuel. It is a low-value residual relative to the fibre and is modelled here as a by-product of flax fibre production.',
        },
      ],
    },
  ],
  primaryUses: ['fibre'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Fibre length and the line-to-tow split',
    'Fineness',
    'Strength',
    'Colour and evenness (as a record of retting)',
    'Cleanliness and residual shive',
    'Degree of retting',
  ],
  commonDefects: [
    'Under-retting, leaving fibre bound to the core',
    'Over-retting, weakening and darkening the fibre',
    'Uneven retting across the swath',
    'Residual shive and dust',
    'Short and broken fibre',
    'Weathering damage in the swath',
  ],
  moistureContext:
    'Retted straw must be dry enough to bale and store without moulding, and fibre condition at scutching affects how cleanly the core separates. Working moisture is a mill and season matter, not a published trading specification.',
  storageContext:
    'Retted straw is baled and stored dry under cover ahead of scutching; scutched fibre is held dry and protected from damp, which stains and weakens it.',
  transportContext:
    'Straw travels short distances from field to scutching mill because it is bulky; scutched line and tow are pressed into bales and shipped internationally to spinners and processors.',
  majorProducingRegions: [
    'Western Europe (the principal fibre-flax region)',
    'Eastern Europe and Central Asia',
    'East Asia',
  ],
  majorTradingRegions: [
    'Western Europe (exporting region)',
    'East Asia (major spinning and importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '5301',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Flax, raw or processed but not spun; flax tow and waste, at heading level. Subheadings separate raw or retted flax from broken, scutched, and hackled forms.',
    },
  ],
  byProducts: [{ type: 'commodity-product', slug: 'shive' }],
  connections: [{ type: 'machinery', slug: 'baler' }],
  relatedTopics: [
    { type: 'commodity', slug: 'hemp-fibre' },
    { type: 'commodity', slug: 'jute-fibre' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Flax fibre as a traded bast fibre and its processing route',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Fibre flax sector, growing regions, and processing context',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Fibre flax and linseed as distinct crop types of one species',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Retting, scutching, and hackling as fibre preparation steps',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with fibre-flax production concentrated in a small number of temperate regions. Grading conventions are regional and contractual.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, processing specification, or customs classification.',
    'No fibre yields, retting durations, length or fineness figures, or line-to-tow ratios are given here — all are variety-, season-, and mill-specific.',
    'Grading terminology for flax varies between regions and buyers; no grade tables are reproduced.',
    'Fibre-flax production is concentrated in few regions; those named are indicative of where it matters, not a ranking.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Flax Fibre: Retted and Scutched Bast Fibre',
    description:
      'Flax fibre as a commodity: why fibre flax and linseed are different crops, how retting and scutching release the bast fibre, and what line, tow and shive are.',
    keywords: [
      'flax fibre',
      'linen fibre',
      'retting',
      'scutching',
      'line flax and tow',
    ],
  },
  structuredData: { article: true },
};

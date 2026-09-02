import type { CropContent } from '@/types/content';

export const sainfoin: CropContent = {
  id: 'crop-sainfoin',
  slug: 'sainfoin',
  contentType: 'crop',
  title: 'Sainfoin',
  scientificName: 'Onobrychis viciifolia',
  alternativeNames: ['Esparcet', 'Holy hay'],
  category: 'Forage crop',
  subcategory: 'Tannin-containing perennial legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial',
  summary:
    'Sainfoin is a forage legume that does not cause bloat. Its condensed tannins bind protein in the rumen, which removes the foam that kills animals on clover and changes how the protein is digested.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every high-protein forage legume carries a bloat risk, and grazing management on clover and alfalfa is substantially the management of that risk. Sainfoin does not: the condensed tannins throughout its tissue bind soluble protein in the rumen and collapse the stable foam that bloat consists of.',
    },
    {
      type: 'paragraph',
      text: 'That single property is why a legume with modest yield and demanding establishment persists in cultivation at all, and why interest in it rises whenever the costs of bloat, of nitrogen fertiliser, or of anthelmintic resistance rise.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Distinguishing constituent',
      value: 'Condensed tannins (proanthocyanidins) in all plant parts',
    },
    { label: 'Bloat risk', value: 'None recorded in grazing ruminants' },
    {
      label: 'Nitrogen',
      value: 'Fixes atmospheric nitrogen in symbiosis with rhizobia',
    },
    {
      label: 'Stand life',
      value: 'Short-lived perennial; declines under frequent cutting',
    },
    {
      label: 'Soil preference',
      value:
        'Calcareous, free-draining; intolerant of acidity and waterlogging',
    },
  ],
  sections: [
    {
      id: 'tannins',
      heading: 'What the tannins do in the rumen',
      body: [
        {
          type: 'paragraph',
          text: 'Condensed tannins bind soluble protein and collapse the stable protein foam that causes pasture bloat, which is why sainfoin can be grazed pure without the intake management a clover sward requires. The same binding carries protein past the rumen undegraded, so more reaches the small intestine as bypass protein.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'protein-binding',
      heading: 'Sainfoin among the tannin legumes',
      body: [
        {
          type: 'paragraph',
          text: 'Sainfoin is generally regarded as the most useful of the tannin-containing forage legumes because it combines a high capacity to bind protein with comparatively little inhibition of cellulose digestion by rumen bacteria. Tannins that bind protein well but also suppress fibre digestion trade one benefit for another; sainfoin largely does not.',
        },
      ],
    },
    {
      id: 'parasites',
      heading: 'Effect on gastrointestinal nematodes',
      body: [
        {
          type: 'paragraph',
          text: 'Tannin-containing forages including sainfoin reduce faecal egg output of gastrointestinal nematodes in grazing ruminants, and controlled feeding studies have measured substantial reductions against Haemonchus contortus. This is a supporting measure within a parasite programme rather than a treatment, and it does not replace veterinary control.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'A calcareous-soil crop',
      body: [
        {
          type: 'paragraph',
          text: 'Sainfoin evolved on chalk and limestone and performs on shallow, alkaline, free-draining ground where alfalfa is marginal and clover fails. It is intolerant of acid soils and of waterlogging, and a wet winter on heavy land is the most common cause of a lost stand.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment is the difficulty',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is large and is often sown still in the pod, which changes the seed rate calculation and the drill setting. Seedlings are slow and poorly competitive, so a weedy or cloddy seedbed loses the stand before it establishes, and sainfoin is normally sown into clean ground rather than undersown.',
        },
      ],
    },
    {
      id: 'cutting',
      heading: 'Cutting and persistence',
      body: [
        {
          type: 'paragraph',
          text: 'Sainfoin regrows from crown buds and is intolerant of frequent close cutting; two cuts a year suit it where three would suit alfalfa. Stands are shorter-lived than alfalfa and thin progressively, which is the main reason it is grown in rotation rather than as long-term ley.',
        },
      ],
    },
    {
      id: 'pollination',
      heading: 'Pollination and seed',
      body: [
        {
          type: 'paragraph',
          text: 'The flowers are showy and strongly attractive to bees, and seed set depends on insect visits. That makes sainfoin a deliberate choice in pollinator-supporting systems as well as a forage, and it makes seed production dependent on pollinator populations in the same way as red clover.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'Hay and silage',
      body: [
        {
          type: 'paragraph',
          text: 'Sainfoin dries readily and makes hay well, and the tannins reduce protein breakdown during ensiling, which is the opposite of the difficulty red clover presents. Leaf shatter in over-dry hay is the main conservation loss, so it is turned less and baled at higher moisture than a grass hay.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Rotational role',
      body: [
        {
          type: 'paragraph',
          text: 'As a legume it fixes its own nitrogen and leaves a residue for the following crop, and because it is grown on the poorer calcareous soils that residue is often the main reason for including it. Applied nitrogen suppresses fixation and is not used on an established stand.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'sclerotinia' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'slugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'chalky-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'baler' },
    { type: 'machinery', slug: 'forage-harvester' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'birdsfoot-trefoil' },
    { type: 'crop', slug: 'red-clover' },
  ],
  glossaryTerms: ['forage', 'crop-rotation', 'ruminant'],
  geographicScope:
    'Temperate calcareous regions of Europe, Central Asia and North America. Cultivar recommendations and cutting regimes are national.',
  climateContext:
    'Temperate; drought-tolerant on shallow calcareous soils and intolerant of acidity and waterlogging.',
  limitations: [
    'Condensed tannin content varies with cultivar, growth stage and environment; no concentration is given here.',
    'Anthelmintic effects are supporting measures within a parasite-management programme and are not a treatment; veterinary guidance governs.',
    'Stand life expectations vary widely with soil, cutting frequency and winter conditions.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Forage legume production context' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Condensed tannin forage legume research',
    },
    { sourceId: 'ahdb', citedFor: 'Forage legume agronomy and conservation' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Onobrychis viciifolia compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Sainfoin',
    description:
      'Onobrychis viciifolia as a forage legume: condensed tannins, why it does not cause bloat, bypass protein, calcareous soils and difficult establishment.',
    keywords: [
      'sainfoin',
      'Onobrychis viciifolia',
      'condensed tannins',
      'bloat-safe legume',
      'bypass protein',
    ],
  },
  structuredData: { article: true },
};

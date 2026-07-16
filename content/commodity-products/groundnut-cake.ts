import type { CommodityProductContent } from '@/types/content';

export const groundnutCake: CommodityProductContent = {
  id: 'commodity-product-groundnut-cake',
  slug: 'groundnut-cake',
  contentType: 'commodity-product',
  title: 'Groundnut Cake',
  alternativeNames: [
    'Peanut cake',
    'Groundnut meal',
    'Groundnut oilcake',
    'Arachis cake',
  ],
  category: 'Oilseed crushing co-product',
  subcategory: 'Protein meal',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'groundnuts' },
  producedBy: [{ type: 'processing-method', slug: 'mechanical-pressing' }],
  physicalForm: 'meal',
  summary:
    'Groundnut cake is the protein-rich solid fraction left after oil is taken from groundnut kernels. It is a valued feed protein across South Asia and Africa, and the commodity’s aflatoxin risk follows it into the cake, making provenance and storage central to its trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Groundnut cake is what remains once oil has been pressed or extracted from groundnut kernels. It is a co-product: crushers sell it as a feed protein with an established market, and in the regions where groundnut crushing is concentrated it is a mainstream ingredient rather than a marginal stream.',
    },
    {
      type: 'paragraph',
      text: 'Two facts define the product commercially. It is well regarded as a protein source, and it inherits the aflatoxin risk of the kernels it was made from. The second is not a footnote: aflatoxins are not removed by crushing, and they concentrate in the solid fraction rather than following the oil. Cake is therefore traded with attention to the provenance and condition of the kernels crushed.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of groundnut crushing' },
    { label: 'Made from', value: 'Groundnut kernels (Arachis hypogaea)' },
    { label: 'Companion stream', value: 'Groundnut oil, from the same crush' },
    { label: 'Principal use', value: 'Animal feed — a protein concentrate' },
    {
      label: 'Forms',
      value:
        'Expeller cake from pressing; extracted meal where a solvent stage follows',
    },
    {
      label: 'Key attributes',
      value:
        'Protein, residual oil, moisture, and aflatoxin status by contract',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What groundnut cake is',
      body: [
        {
          type: 'paragraph',
          text: 'Kernels are crushed by pressing, sometimes followed by solvent extraction of the press cake. Where only pressing is used, the product is an expeller cake retaining appreciable oil; where a solvent stage follows, the result is a more thoroughly de-oiled meal. Expeller cake carries more energy but keeps less well, since residual oil is what goes rancid.',
        },
        {
          type: 'paragraph',
          text: 'Where the kernels were decorticated before crushing — as is usual — the cake is comparatively low in fibre for an oilseed meal, which is part of why it is well regarded. Cake made from undecorticated material carries shell and is a poorer, more fibrous product.',
        },
      ],
    },
    {
      id: 'feed-role-and-safety',
      heading: 'Feed role and the aflatoxin question',
      body: [
        {
          type: 'paragraph',
          text: 'Groundnut cake is used across ruminant, pig, and poultry diets and is a significant protein source in South Asian and African feed markets. Formulators regard its protein favourably while noting that its amino acid profile differs from soybean meal, so it is not a like-for-like substitution.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Aflatoxin risk carries into the cake',
          text: 'Aflatoxin contamination present in the kernels is not eliminated by crushing and is associated with the solid fraction. This is a documented feed-safety hazard. AgricultureID publishes no limits, sampling plans, or acceptance criteria — maximum levels for feed materials are set by feed-safety authorities and differ by jurisdiction. Consult the applicable authority.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence for the trade is that cake is bought with regard to where the kernels came from, how they were dried and stored, and what testing the contract requires — rather than on appearance and analysis alone.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Cake ships in bulk, in bags, and as pressed slabs or cakes broken for handling; extracted meal is commonly pelleted. It is hygroscopic, and cake held moist or warm can heat, mould, and support further fungal growth — which for this material is a safety concern as well as a quality one. Cool, dry storage with stock rotation is the norm, and expeller grades with higher residual oil have the shortest keeping quality.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['food'],
  majorQualityAttributes: [
    'Protein content',
    'Residual oil content',
    'Fibre content (decorticated or not)',
    'Moisture content',
    'Aflatoxin status (contract- and jurisdiction-defined)',
  ],
  processContext:
    'The solid fraction from pressing groundnut kernels, sold as expeller cake or, where a solvent stage follows, as a more fully de-oiled meal. Groundnut oil is the simultaneous co-product.',
  storageContext:
    'Bulk, bagged, or in slab form; hygroscopic and liable to heat and mould if held moist, with high-residual-oil expeller grades keeping least well.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2305.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues resulting from the extraction of ground-nut oil, whether or not ground or pelleted.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'groundnut' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'groundnut-oil' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Groundnut cake as a feed protein and its place in oilseed processing',
    },
    {
      sourceId: 'efsa',
      citedFor: 'Aflatoxins in oilseed cake as a documented feed-safety hazard',
    },
    {
      sourceId: 'icar',
      citedFor: 'Groundnut cake use in South Asian livestock feeding',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Oilseed cakes as feed ingredients in livestock nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and aflatoxin regulation for feed materials are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or feed-safety assessment.',
    'No aflatoxin limits, sampling plans, or acceptance criteria are given here — feed-safety authorities set them and they differ by jurisdiction.',
    'Composition varies with decortication and with whether the cake is expeller or solvent-extracted; no universal analysis is given.',
    'What may be fed, to which species, and how it must be labelled are matters of jurisdiction-specific feed law.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Groundnut Cake: Co-Product of Groundnut Crushing',
    description:
      'Groundnut cake as a crushing co-product: expeller versus extracted forms, its feed protein role, why aflatoxin risk follows the cake, and storage behaviour.',
    keywords: [
      'groundnut cake',
      'peanut cake',
      'groundnut meal',
      'feed protein',
      'aflatoxin in feed',
    ],
  },
  structuredData: { article: true },
};

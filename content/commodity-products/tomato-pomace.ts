import type { CommodityProductContent } from '@/types/content';

export const tomatoPomace: CommodityProductContent = {
  id: 'commodity-product-tomato-pomace',
  slug: 'tomato-pomace',
  contentType: 'commodity-product',
  title: 'Tomato Pomace',
  alternativeNames: ['Tomato processing residue', 'Tomato skins and seeds'],
  category: 'Processing by-product',
  subcategory: 'Vegetable pomace',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'fresh-tomatoes' },
  producedBy: [{ type: 'processing-method', slug: 'tomato-paste-production' }],
  physicalForm: 'pomace',
  summary:
    'Tomato pomace is the skin, seed, and pulp residue screened out when tomatoes are processed for juice and paste. It is a genuine by-product — unavoidable, lower in value than the paste it accompanies, and used mainly as animal feed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato pomace is what is left when crushed tomatoes are pulped and screened to separate juice for concentration. The retained fraction is a wet mixture of skins, seeds, and adhering pulp. Every processing line making paste or juice produces it, in proportion to the fruit it takes in, and it emerges as a continuous stream that has to go somewhere the same day it is made.',
    },
    {
      type: 'paragraph',
      text: 'Pomace is classed here as a by-product rather than a co-product: it is a residual output of an operation run for something else, its value per tonne is well below that of the paste, and no processor crushes tomatoes in order to obtain it. That does not make it waste — it has an established feed market — but the economic distinction is real and is applied per process rather than assumed from volume.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of tomato processing' },
    { label: 'Made from', value: 'Tomatoes delivered for processing' },
    { label: 'Composition', value: 'Skins, seeds, and adhering pulp' },
    { label: 'Principal use', value: 'Animal feed' },
    {
      label: 'Handling constraint',
      value: 'Wet and highly perishable as it leaves the line',
    },
    { label: 'Companion stream', value: 'Tomato paste (the primary product)' },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What tomato pomace is',
      body: [
        {
          type: 'paragraph',
          text: 'When tomatoes are heated and pulped, the pulper and finisher screens pass the juice through and hold back the material that will not go: the fruit skins and the seeds, together with whatever pulp clings to them. That retained fraction is the pomace. Its make-up is not fixed — the proportion of seed to skin, and how much pulp is carried with it, depend on the cultivar processed and on how the extraction equipment is set.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Skin fraction',
              description:
                'The fruit’s outer layer, carrying most of the pomace’s fibre and much of its residual colour.',
            },
            {
              term: 'Seed fraction',
              description:
                'The seeds, which carry the protein and the oil in the stream and can be separated where a market for them exists.',
            },
            {
              term: 'Extraction setting',
              description:
                'How aggressively the finisher recovers juice, which determines how much pulp stays with the pomace and therefore its composition and volume.',
            },
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The established outlet is animal feed. Pomace carries fibre from the skins and protein and oil from the seeds, and it is fed either fresh to livestock near the factory or dried and incorporated into compound rations. Where volumes and economics allow, the seed can be separated and pressed for oil, which turns part of the stream into a higher-value product; and pomace is also used as a substrate for further processing or returned to land as organic matter.',
        },
        {
          type: 'list',
          items: [
            'Animal feed — fed fresh near the plant, or dried for inclusion in compound rations',
            'Seed oil — where seed is separated and pressed at sufficient scale',
            'Land application and composting — returning organic matter where no feed outlet exists',
          ],
        },
        {
          type: 'paragraph',
          text: 'Which of these actually happens is decided by distance and season more than by the composition of the pomace. A factory with livestock nearby has a same-day feed outlet; one without has to dry the stream, and drying a wet material is expensive enough that it can invert the economics of the by-product entirely.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Pomace leaves the line wet, warm, and biologically active, which makes it perishable on a timescale of hours rather than days — it ferments and spoils quickly if it is left standing. That is the central handling problem: the stream is produced continuously through a compressed processing season, at exactly the time of year when it is warmest. It is therefore moved immediately to a feed user, ensiled, or dried, and dried pomace is the form in which it travels any distance.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['oil', 'industrial'],
  majorQualityAttributes: [
    'Seed-to-skin ratio',
    'Residual pulp content',
    'Moisture content as delivered',
    'Freedom from spoilage and fermentation',
  ],
  processContext:
    'Retained on the pulper and finisher screens when heated, crushed tomatoes are separated into juice for concentration and a residue of skins, seeds, and adhering pulp; volume and composition follow the cultivar and the extraction settings.',
  storageContext:
    'Wet, warm, and rapidly perishable as produced; moved to a feed user immediately, ensiled, or dried, with dried pomace being the transportable form.',
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'tomato-paste' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Processing residues and their use as animal feed',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Tomato processing extraction streams and pomace composition context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Tomato processing by-product description and feed outlets',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and waste-stream rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or waste-management compliance statement.',
    'Composition varies with cultivar, extraction settings, and whether seed has been removed; no universal analysis is given here.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Tomato Pomace: By-Product of Tomato Processing',
    description:
      'Tomato pomace as a processing by-product: the skins and seeds screened from juice extraction, why it is a by-product, its feed uses, and handling.',
    keywords: [
      'tomato pomace',
      'tomato processing by-product',
      'tomato skins and seeds',
      'pomace feed',
      'tomato seed oil',
    ],
  },
  structuredData: { article: true },
};

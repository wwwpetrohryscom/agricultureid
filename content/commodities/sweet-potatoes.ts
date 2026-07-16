import type { CommodityContent } from '@/types/content';

export const sweetPotatoes: CommodityContent = {
  id: 'commodity-sweet-potatoes',
  slug: 'sweet-potatoes',
  contentType: 'commodity',
  title: 'Sweet Potatoes',
  alternativeNames: ['Sweetpotato', 'Kumara', 'Camote', 'Batata'],
  category: 'Root and tuber commodity',
  subcategory: 'Fresh sweet potato storage roots',
  commodityClass: 'root-tuber',
  physicalForm: 'root-tuber',
  harvestedPart: 'Storage root (a true root thickened with starch)',
  sourceCrop: { type: 'crop', slug: 'sweet-potato' },
  summary:
    'Sweet potatoes are the starchy storage roots of Ipomoea batatas, traded fresh for food use. They are cured after lifting to heal harvest wounds and set the fragile skin, and — unlike potatoes — they are chilling-sensitive and cannot be held cold.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweet potatoes are the storage roots lifted from Ipomoea batatas and sold for eating. Despite the shared name, they are not potatoes and not close relatives: the potato is a stem tuber of the nightshade family, while the sweet potato is a true root from the bindweed family. The two commodities look superficially similar in a crate and behave almost oppositely in a store.',
    },
    {
      type: 'paragraph',
      text: 'The traded root is graded on size, shape, and skin condition, and its handling is dominated by two facts of its biology: a thin, easily damaged periderm that must be set by curing, and a sensitivity to cold that puts ordinary refrigeration off limits. Flesh colour — from white and cream through to deep orange and purple — defines distinct market types rather than mere appearance.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Root and tuber' },
    { label: 'Parent crop', value: 'Sweet potato (Ipomoea batatas)' },
    { label: 'Harvested part', value: 'Storage root (true root)' },
    { label: 'Principal use', value: 'Food — fresh consumption' },
    {
      label: 'Post-harvest requirement',
      value: 'Curing to heal wounds and set the skin',
    },
    {
      label: 'Storage constraint',
      value: 'Chilling-sensitive: not stored at potato temperatures',
    },
    {
      label: 'Market types',
      value: 'By flesh colour — white, cream, orange, purple',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is, and what it is not',
      body: [
        {
          type: 'paragraph',
          text: 'The sweet potato traded as a commodity is an enlarged adventitious root. It carries no eyes or buds, and the crop is propagated from vine cuttings or from sprouts raised on roots rather than from the root itself as sold. This is a real commercial difference from the potato trade, which is built around a certified seed tuber; sweet potato planting material moves through a separate system based on vines and slips.',
        },
        {
          type: 'paragraph',
          text: 'Market types are organised by flesh colour, and the split is commercially meaningful. Orange-fleshed types are valued for their carotenoid content and dominate some markets; white- and cream-fleshed types, drier and less sweet, are staples in others; purple-fleshed types serve specific culinary and pigment markets. A buyer specifying "sweet potatoes" without specifying a type has not specified much.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Not a potato, not a yam',
          text: 'Sweet potato, potato, and yam are three unrelated crops giving three distinct commodities. In some markets sweet potatoes are sold under the name "yam", which is a retail naming convention, not a botanical or trade equivalence.',
        },
      ],
    },
    {
      id: 'curing-and-storage',
      heading: 'Curing and storage behaviour',
      body: [
        {
          type: 'paragraph',
          text: 'Sweet potato skin is thin and skins off readily during lifting and grading, and every abrasion is an entry point for rots. Curing is therefore not optional in commercial chains: roots are held warm and humid immediately after harvest so that wounds suberise and the periderm sets, after which the crop is moved to its holding conditions. A well-cured root stores for months; an uncured one does not.',
        },
        {
          type: 'paragraph',
          text: 'The second governing fact is chilling sensitivity. Sweet potatoes are tropical in origin and suffer chilling injury — internal discolouration, off-flavours, and increased decay — at temperatures well above freezing, including the range used routinely for many temperate crops. They are consequently stored cool but not cold, which is the single most important way their store management differs from that of ware potatoes. Curing and storage also shift the eating character of the root, as enzymes convert some starch to sugars and the flesh becomes sweeter and softer on cooking.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal temperature given',
          text: 'Curing and holding conditions depend on cultivar, market, and store design, and the chilling threshold is cultivar-dependent. AgricultureID publishes no figure — consult national post-harvest guidance for sweet potato.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Grading is dimensional and visual. Buyers specify a size and weight range — oversized roots are hard to sell into fresh retail and often move to processing — along with shape regularity, since long, uniform, unbranched roots command the fresh market while irregular and cracked ones do not. Skin colour and freedom from blemish complete the picture.',
        },
        {
          type: 'list',
          items: [
            'Skinning and abrasion from lifting and handling',
            'Chilling injury from storage below the crop’s tolerance',
            'Soft rots and black rot developing from wounds',
            'Weevil damage, a major defect in warm production areas',
            'Growth cracks, branching, and misshapen roots',
            'Sprouting late in the storage season',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because the crop is sold whole and unpeeled, defect assessment is largely a surface judgement, with sample roots cut to check for internal disorders and insect tunnelling. There is no international grading standard of the kind cereals have; national marketing standards and buyer specifications do the work.',
        },
      ],
    },
    {
      id: 'uses-and-trade',
      heading: 'Uses and trade',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant destination is food, either as fresh roots or through processing into purée, chips, and flour. Roots outside fresh specification, together with vines in some systems, are used as livestock feed, and starch extraction takes sweet potatoes in a few production regions. In several countries the crop is also a strategic food-security staple rather than a commercial export line, which shapes how much of it is traded at all.',
        },
        {
          type: 'paragraph',
          text: 'International trade in fresh sweet potatoes is modest relative to production, since the roots are bulky and most output is consumed domestically. Where export chains do exist they depend on careful curing, temperature control that respects the chilling limit, and packaging that protects the skin in transit.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Root size and weight range',
    'Shape regularity',
    'Skin condition and colour',
    'Flesh colour and market type',
    'Freedom from insect damage',
    'Curing status',
  ],
  commonDefects: [
    'Skinning and surface abrasion',
    'Chilling injury',
    'Soft rot and black rot',
    'Weevil tunnelling',
    'Growth cracks and branching',
    'Sprouting in store',
  ],
  moistureContext:
    'Sold as a fresh, high-moisture root and not traded on a moisture basis. Water loss in store shows up as shrivel and weight loss, so humidity is managed rather than moisture reduced.',
  storageContext:
    'Cured immediately after lifting to suberise wounds and set the skin, then held cool but above the chilling threshold, ventilated and humid.',
  transportContext:
    'Moves in cartons, crates, and bulk bins; the fragile skin makes gentle handling and protective packing central, and refrigerated transport must respect the chilling limit.',
  majorProducingRegions: [
    'East Asia',
    'Sub-Saharan Africa',
    'Southeast Asia',
    'North America',
  ],
  majorTradingRegions: [
    'North America',
    'Europe (importing region)',
    'East Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0714.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Sweet potatoes, fresh, chilled, frozen or dried, whether or not sliced or in pellets.',
    },
    {
      system: 'FAOSTAT',
      code: '122',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Sweet potatoes".',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'yams' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sweet potato as a traded root commodity and its food uses',
    },
    {
      sourceId: 'cip',
      citedFor: 'Sweet potato market types, curing, and post-harvest behaviour',
    },
    {
      sourceId: 'usda',
      citedFor: 'Fresh sweet potato grading attributes and handling context',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with production concentrated in warm temperate and tropical regions. Marketing standards are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, storage protocol, or customs classification.',
    'No curing or storage temperatures, humidities, or holding periods are given — they are cultivar-, market-, and store-specific.',
    'Retail naming of sweet potatoes as "yams" in some markets is a convention and does not reflect the commodity distinction used here.',
    'The production and trade regions given are broad indications of where the crop is significant, not ordered statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sweet Potatoes: The Traded Storage Root',
    description:
      'Sweet potatoes as a commodity: market types by flesh colour, why curing sets the fragile skin, chilling sensitivity in store, and the defects that cut grade.',
    keywords: [
      'sweet potatoes',
      'sweetpotato commodity',
      'curing sweet potatoes',
      'chilling injury',
      'storage roots',
    ],
  },
  structuredData: { article: true },
};

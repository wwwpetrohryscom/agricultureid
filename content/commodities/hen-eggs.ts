import type { CommodityContent } from '@/types/content';

export const henEggs: CommodityContent = {
  id: 'commodity-hen-eggs',
  slug: 'hen-eggs',
  contentType: 'commodity',
  title: 'Hen Eggs',
  alternativeNames: ['Shell eggs', 'Table eggs', 'Chicken eggs'],
  category: 'Livestock product commodity',
  subcategory: 'Shell eggs',
  commodityClass: 'livestock-product',
  physicalForm: 'other',
  harvestedPart: 'The intact shell egg as laid, collected from laying hens',
  sourceLivestock: { type: 'livestock', slug: 'chickens' },
  summary:
    'Hen eggs are the intact shell eggs collected from laying flocks and traded as table eggs or as material for further processing. They are unusual among commodities in being sold as discrete, individually fragile units, and they are graded on two separate axes: weight and quality.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hen eggs are the traded output of laying flocks: whole eggs in the shell, collected, sorted, and packed. The commodity is defined by the intact shell. An egg whose shell is broken has left the shell-egg trade entirely and has become either a processing input or a loss, which is why handling this commodity is largely a problem of protecting individual units from mechanical damage.',
    },
    {
      type: 'paragraph',
      text: 'Eggs are also unusual in that they are sold by count and by weight class rather than in bulk. A lot is a number of eggs of a stated size, and each egg carries its own quality status. This makes grading a per-unit assessment applied across a lot, rather than the composite laboratory measurement that determines a grain grade. Table eggs for consumption are not fertilised eggs destined for hatching — those are a different trade with different requirements and are not described here.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Livestock product (shell eggs)' },
    {
      label: 'Source animal',
      value: 'Chickens (laying flocks of Gallus gallus domesticus)',
    },
    {
      label: 'Traded unit',
      value: 'Individual intact eggs, sold by count within a weight class',
    },
    {
      label: 'Graded on',
      value: 'Weight class and shell/interior quality — two separate axes',
    },
    {
      label: 'Interior assessed by',
      value: 'Candling, and by breaking out a sample',
    },
    {
      label: 'Principal uses',
      value: 'Food — table eggs and processing into egg products',
    },
    {
      label: 'Defining vulnerability',
      value: 'Shell breakage in handling and transport',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A table egg is a self-contained package produced by the bird: a mineral shell enclosing an albumen (white) and a yolk, with an air cell that forms at the blunt end as the egg cools after laying. Each of these parts is something the trade assesses. The shell is the barrier and the thing that breaks; the albumen’s firmness indicates how the egg has been kept; the yolk’s position and outline reveal condition; the air cell grows as the egg loses moisture and gas through the shell, so its size is a running record of age and storage.',
        },
        {
          type: 'paragraph',
          text: 'This is the key to understanding eggs commercially: the egg is slowly changing from the moment it is laid, and the interior quality attributes that determine its grade drift in one direction over time. Cool storage slows that drift, but nothing reverses it. An egg cannot be improved, only preserved.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Table eggs, not hatching eggs',
          text: 'This entry covers eggs traded for food. Fertilised eggs sold for incubation are a separate commodity with different selection, handling, and certification requirements, and nothing here applies to them.',
        },
      ],
    },
    {
      id: 'grading-axes',
      heading: 'The two grading axes: weight and quality',
      body: [
        {
          type: 'paragraph',
          text: 'Eggs are classed by weight into size categories, and separately assessed for quality. The two are independent: a large egg can be of poor quality and a small egg of excellent quality. A pack is therefore described by both — a size and a quality designation — and confusing the two is one of the most common misreadings of an egg label.',
        },
        {
          type: 'paragraph',
          text: 'Quality assessment covers the shell (soundness, shape, cleanliness, texture) and the interior (air cell, albumen, yolk). The characteristic non-destructive technique is candling: passing the egg over a light source so the interior can be judged through the shell, which reveals air-cell size, yolk shadow and mobility, albumen condition, and internal defects such as blood or meat spots without breaking the egg. Because candling is inference through a shell, standards also provide for breaking out samples to check interior quality directly.',
        },
        {
          type: 'list',
          items: [
            'Shell — soundness, cleanliness, shape, and texture',
            'Air cell — depth, which increases as the egg ages',
            'Albumen — clarity and firmness',
            'Yolk — outline definition, position, and freedom from defects',
            'Weight — the separate sizing axis, applied per egg or per pack',
          ],
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and destinations',
      body: [
        {
          type: 'paragraph',
          text: 'Most hen eggs go to food use as shell eggs, sold at retail and to catering. A large secondary stream goes to breaking plants, which separate the contents from the shell to make liquid, frozen, and dried egg products for food manufacturing — a route that removes the fragility problem and produces an ingredient that can be specified, stored, and shipped like other ingredients. Eggs that are structurally sound but downgraded on appearance often move to this channel rather than being lost.',
        },
        {
          type: 'list',
          items: [
            'Table eggs — sold in shell at retail and to food service',
            'Egg products — liquid, frozen, and dried whole egg, white, and yolk',
            'Food manufacturing — as a functional ingredient in baking and prepared foods',
            'Industrial and technical uses of egg fractions, at small scale',
          ],
        },
        {
          type: 'paragraph',
          text: 'No commodity-product pages are modelled here for egg products: they are the output of a breaking and drying industry that transforms the commodity substantially, and AgricultureID does not assert a pathway it has not described in its own right.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling, storage, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Handling eggs means minimising two things: breakage and ageing. Breakage is mechanical — every transfer, drop, and vibration costs units, so packaging is not incidental to this commodity but integral to it, and the fibre or moulded pack is part of how the lot exists. Ageing is physical and biological: the egg loses moisture and carbon dioxide through the pores of the shell, the air cell grows, and the albumen thins. Cool, stable storage slows all of it.',
        },
        {
          type: 'paragraph',
          text: 'Storage practice diverges sharply between jurisdictions in ways that are worth flagging honestly. Some markets wash eggs at packing and then require refrigeration throughout distribution; others prohibit washing and keep eggs unrefrigerated in the supply chain on the reasoning that the shell’s natural cuticle is preserved and condensation is avoided. Both systems are coherent, both are regulated, and neither is the universal rule — so no single handling prescription can be stated for the commodity as a whole.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference description only',
          text: 'This entry describes hen eggs as a traded commodity. It is not food-safety guidance, poultry husbandry advice, or a handling instruction, and it makes no determination about the quality or safety of any lot. Washing, refrigeration, marking, and shelf-life rules are set by jurisdiction-specific regulation.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Weight (size class)',
    'Shell soundness and cleanliness',
    'Shell shape and texture',
    'Air cell depth',
    'Albumen firmness and clarity',
    'Yolk outline and position',
  ],
  commonDefects: [
    'Cracked, checked, or leaking shells',
    'Dirty or stained shells',
    'Misshapen or thin shells',
    'Enlarged air cell (an indicator of age or warm storage)',
    'Watery, thinned albumen',
    'Blood spots and meat spots',
  ],
  moistureContext:
    'Eggs lose moisture and carbon dioxide through the shell over time, which enlarges the air cell and thins the albumen. Storage temperature and humidity govern the rate; the change is one-way and cannot be reversed.',
  storageContext:
    'Held cool and at stable humidity to slow interior change. Whether eggs are washed and refrigerated through distribution is a regulatory choice that differs fundamentally between markets.',
  transportContext:
    'Moved in protective moulded or fibre packs on pallets; every handling step risks breakage, so packaging and transfer design are central rather than peripheral to this commodity.',
  majorProducingRegions: [
    'East Asia',
    'North America',
    'Europe and Central Asia',
    'South Asia',
    'Latin America',
  ],
  majorTradingRegions: [
    'Predominantly domestic — shell eggs are fragile and travel poorly over long distances',
    'Cross-border trade is largely regional, and in processed egg products rather than shell eggs',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0407',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Birds’ eggs, in shell, fresh, preserved or cooked, at 4-digit heading level; subheadings separate fertilised eggs for incubation from other fresh eggs and identify eggs of Gallus gallus domesticus.',
    },
  ],
  applicableGrades: [{ type: 'commodity-grade', slug: 'usda-egg-grades' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Eggs as a traded livestock commodity and their food uses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Hen egg item coverage and producing-region context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Shell egg quality factors, candling, and weight classes',
    },
    {
      sourceId: 'woah',
      citedFor: 'Animal-health context relevant to laying flocks',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Washing, refrigeration, marking, sizing, and shelf-life rules are jurisdiction-specific and differ substantively between major markets.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not food-safety guidance, husbandry advice, or a grading determination.',
    'No weight-class boundaries, quality thresholds, or shelf-life figures are given: those are set by jurisdiction-specific standards and regulation.',
    'Handling and storage practice legitimately differs between jurisdictions, so no universal prescription is stated here.',
    'Covers table eggs only; fertilised eggs for hatching are a separate trade not described on this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Hen Eggs: The Shell Egg Commodity',
    description:
      'Hen eggs as a commodity: the two grading axes of weight and quality, what candling reveals about shell and interior, and why packaging defines the trade.',
    keywords: [
      'hen eggs',
      'shell eggs',
      'table eggs',
      'egg grading',
      'egg candling',
    ],
  },
  structuredData: { article: true },
};

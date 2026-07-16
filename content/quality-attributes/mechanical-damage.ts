import type { QualityAttributeContent } from '@/types/content';

export const mechanicalDamage: QualityAttributeContent = {
  id: 'quality-attribute-mechanical-damage',
  slug: 'mechanical-damage',
  contentType: 'quality-attribute',
  title: 'Mechanical Damage',
  category: 'Quality attribute',
  subcategory: 'Cross-cutting',
  attributeClass: 'physical',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'Not a measure of when or where the damage occurred — a kernel or fruit that passes through several handling steps accumulates damage that looks the same regardless of which step caused it, and no visual assessment can attribute a given mark to a specific point in the chain. Identifying the point of damage requires impact-recording devices passed through the line, not inspection of the product afterward.',
    'Not a decay measurement — mechanical damage predicts the risk of subsequent infection by creating an entry route for pathogens; it is not itself a measurement of infection or spoilage, and a freshly damaged unit is not yet decayed.',
    'Not a measure of handling-system quality on its own — the amount of damage recorded depends on the interaction between the handling line and the commodity: a bruise-susceptible cultivar can suffer significant damage in a gentle line, while a robust cultivar can pass through a rougher line with comparatively little damage. Damage figures cannot be used to rank handling systems without accounting for cultivar susceptibility.',
    'Not a food-safety indicator by itself — damage is a physical injury; whether it leads to a food-safety issue depends on subsequent contamination and decay, which are assessed separately.',
  ],
  typicalUnits: ['% of units affected', '% by mass'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'brown-rice' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  summary:
    'Mechanical damage is physical injury inflicted by harvesting, handling, conveying, and packing — impact bruising, compression, abrasion, cuts, and internal cracking. It spans both grain (cracked kernels, invisible internal fissures) and fresh produce (bruised fruit, skinned tubers), and its central importance is that it breaks the commodity’s primary physical defence and opens an entry route for decay.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mechanical damage covers the physical injuries a harvested crop sustains as it moves from field to store to market: impacts from drops and rough conveying, compression from stacking or tight packing, abrasion between units or against equipment surfaces, cuts from blades and moving parts, and internal cracking that leaves no visible mark on the outside. It affects grain — cracked kernels and internal fissures that are invisible from the outside but govern how much of the grain survives milling intact — just as much as it affects fresh produce, where impact bruising, compression injury, and skinning are the more familiar forms.',
    },
    {
      type: 'paragraph',
      text: 'What makes mechanical damage matter beyond its immediate physical effect is what it opens up. An intact skin or pericarp is the commodity’s primary defence against the organisms that cause post-harvest decay, and most post-harvest pathogens are wound invaders — they need a break in that surface to establish an infection. Handling injury therefore does more than devalue a unit on the spot: it converts what would otherwise be a storable lot into a perishable one, shortening the time available before spoilage sets in.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Physical injury from harvesting, handling, conveying, and packing — impact bruising, compression, abrasion, cuts, and internal cracking',
    },
    {
      label: 'Scope',
      value:
        'Spans grain (cracked kernels, internal fissures) and fresh produce (bruising, skinning, cuts)',
    },
    {
      label: 'Central consequence',
      value:
        'Breaks the skin or pericarp, the commodity’s primary defence, opening an entry route for wound-invading pathogens',
    },
    {
      label: 'Often latent',
      value:
        'Bruises may not discolour for hours or days, so a load can be graded sound at intake and show damage later',
    },
    {
      label: 'Rice-specific effect',
      value:
        'Internal fissures are invisible externally but govern head rice yield during milling',
    },
    {
      label: 'Cannot be traced to a step visually',
      value:
        'No visual inspection identifies which handling step caused a given mark; impact-recording devices do that',
    },
    {
      label: 'Not a decay measurement',
      value:
        'Damage predicts risk of subsequent infection; it is not a measurement of infection itself',
    },
  ],
  sections: [
    {
      id: 'what-mechanical-damage-is',
      heading: 'What mechanical damage is',
      body: [
        {
          type: 'list',
          items: [
            'Impact bruising — internal tissue injury from a drop, collision, or rough handling, common in fruit such as apples.',
            'Compression damage — injury from stacking, tight packing, or excessive load in transit.',
            'Abrasion and skinning — surface injury from rubbing against equipment or other units, as in freshly harvested potatoes.',
            'Cuts — injury from blades, augers, or other moving parts during harvesting or conveying.',
            'Internal cracking or fissuring — fracture within a kernel, such as rice grain, that is not visible from outside.',
          ],
        },
        {
          type: 'paragraph',
          text: 'These forms occur at every stage from harvest through to packing: a combine’s threshing action can crack kernels, an auger can abrade or cut them, a fruit bin dropped onto a conveyor can bruise its contents, and a poorly padded pack line can skin tubers. The common thread is that the injury originates from a physical force applied during handling, not from a biological or chemical process.',
        },
      ],
    },
    {
      id: 'the-entry-route-for-decay',
      heading: 'Mechanical damage as the entry route for decay',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'A wound is an invitation, not just a blemish',
          text: 'An intact skin or pericarp is a commodity’s primary physical defence against infection. Most post-harvest pathogens are wound invaders that cannot establish themselves through healthy, intact tissue but readily colonise a bruise, cut, or crack. Mechanical damage therefore converts a storable lot into a perishable one: the clock on how long it can be safely held starts running the moment the injury occurs, not when decay becomes visible.',
        },
        {
          type: 'paragraph',
          text: 'This is why mechanical damage is treated as a quality-measurement attribute in its own right, distinct from decay itself: it describes the physical injury and the elevated risk that follows from it, not a confirmed infection.',
        },
      ],
    },
    {
      id: 'latency-and-invisibility',
      heading: 'Latent and invisible damage',
      body: [
        {
          type: 'paragraph',
          text: 'A substantial share of mechanical damage does not show immediately. Bruising in many fruit does not discolour until browning reactions and cell breakdown progress over hours or days, so a load can pass inspection sound at intake and reveal visible damage only once it reaches a market or a consumer. This latency is part of why mechanical-damage assessment relies on cut-sample or destructive inspection rather than surface appearance alone where accuracy matters.',
        },
        {
          type: 'paragraph',
          text: 'Internal fissuring in rice grain is a parallel case at the kernel scale: cracks that form inside the grain, often from uneven drying or rough handling, are invisible on the intact kernel but govern how much of it survives milling as whole grain rather than breaking into fragments. Head rice yield — the proportion of milled rice that remains whole — is directly reduced by fissures that no external inspection would catch before milling.',
        },
      ],
    },
    {
      id: 'attributing-damage-in-a-handling-chain',
      heading: 'Why damage cannot be traced to a step by inspection',
      body: [
        {
          type: 'paragraph',
          text: 'A unit that passes through harvesting, conveying, temporary storage, sorting, and packing accumulates damage from several independent sources along the way, and the resulting marks look alike regardless of which step produced them. Visual or manual inspection of the finished product can quantify how much damage is present, but it cannot reliably attribute a given bruise, crack, or cut to a specific piece of equipment or handling step.',
        },
        {
          type: 'paragraph',
          text: 'Identifying where in a handling chain damage is actually occurring requires instrumented methods — impact-recording devices built to travel through the line alongside the product and log the forces experienced at each point — rather than after-the-fact inspection of the product itself. This distinction matters operationally: a high damage figure tells an operator that damage is occurring, but locating the cause requires a different kind of measurement entirely.',
        },
      ],
    },
  ],
  connections: [
    { type: 'machinery', slug: 'grain-auger' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'machinery', slug: 'potato-harvester' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'potato-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling and mechanical damage as a driver of decay and loss',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Research on impact bruising, compression injury, and wound-pathogen entry in harvested commodities',
    },
    {
      sourceId: 'cip',
      citedFor:
        'Mechanical damage and skin injury in potato handling and storage',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Produce handling guidance on bruising, latency of damage expression, and post-harvest pathology',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Mechanical damage arises wherever crops are mechanically harvested, conveyed, or packed; its severity depends on the specific handling system, equipment, and commodity cultivar involved.',
  limitations: [
    'A mechanical-damage figure describes physical injury and elevated risk; it does not measure whether decay or infection has actually occurred.',
    'Damage cannot be attributed to a specific handling step by visual inspection alone; identifying the point of damage requires instrumented, impact-recording methods.',
    'Bruising and internal fissuring can be latent, so damage assessed at one point in the chain can understate what becomes visible later.',
    'Damage figures reflect the interaction between the commodity (cultivar susceptibility) and the handling system, and cannot be used to rank handling systems without accounting for that interaction.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Mechanical Damage: The Entry Route for Decay',
    description:
      'What mechanical damage is in grain and produce handling, why it breaks the commodity’s natural defence, and why it cannot be traced to a step by inspection.',
    keywords: [
      'mechanical damage',
      'bruising',
      'internal fissures',
      'post-harvest handling',
      'head rice yield',
      'produce bruising',
    ],
  },
  structuredData: { article: true },
};

import type { PostHarvestContent } from '@/types/content';

export const bulkBagFibc: PostHarvestContent = {
  id: 'post-harvest-bulk-bag-fibc',
  slug: 'bulk-bag-fibc',
  contentType: 'post-harvest',
  title: 'Bulk Bag (FIBC)',
  postHarvestClass: 'handling',
  processStage: 'transport',
  alternativeNames: [
    'FIBC',
    'Flexible intermediate bulk container',
    'Big bag',
    'Bulk tote',
    'Tonne bag',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'A bulk bag holds a load that no person can lift, in a fabric container that folds flat when empty. It sits between the sack and the silo, and unlike either of them it is always suspended over the ground on lifting equipment.',
  introduction: [
    {
      type: 'paragraph',
      text: "A flexible intermediate bulk container — an FIBC, or bulk bag — is a large woven fabric bag with lifting loops at its corners, filled through a spout at the top and usually discharged through one at the bottom. It occupies a specific and useful gap. Below it are sacks, which a person can carry but which require many handling movements per load. Above it is true bulk handling in silos, augers, and tankers, which is efficient but demands fixed infrastructure and destroys any separation between lots. The bulk bag gives much of bulk handling's efficiency while keeping each lot discrete, identified, and moveable by any forklift.",
    },
    {
      type: 'paragraph',
      text: 'That combination is why it dominates the intermediate trade in seed, pulses, nuts, dried produce, and processed agricultural materials. A bulk bag holds a commercially sensible quantity, keeps a seed lot or a certified consignment separate from the next one, folds flat to nothing when empty, and needs no infrastructure at either end beyond something that can lift. Its defining characteristic is exactly that last point, and everything serious about the bag follows from it: an FIBC in use is a very heavy load hanging in the air.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A large woven fabric container with corner lifting loops, filled and discharged by spout',
    },
    {
      label: 'Where it fits',
      value: 'Between manual sacks and true bulk handling in silos and tankers',
    },
    {
      label: 'Key advantage',
      value: 'Bulk efficiency while keeping each lot discrete and identifiable',
    },
    {
      label: 'Always suspended',
      value:
        'It is handled by lifting equipment, over the ground, every time it moves',
    },
    {
      label: 'Empty logistics',
      value: 'Folds flat, so empties cost little to return or store',
    },
    {
      label: 'Liners',
      value:
        'A separate inner liner is used where a moisture or contamination barrier is needed',
    },
    {
      label: 'Reuse',
      value:
        'Only where the bag is rated for it; single-trip bags are not reusable bags',
    },
  ],
  sections: [
    {
      id: 'the-suspended-load',
      heading: 'The hazard the bag creates by existing',
      body: [
        {
          type: 'paragraph',
          text: 'A sack is heavy. A bulk bag is a load that no person could move and that is therefore always moved by machinery — and that means it spends part of every journey suspended above the floor, in a space where people work. A failure of the fabric, of a seam, or of a lifting loop drops the entire mass without warning, and the mass is measured in hundreds of kilograms upward. FIBC failures have caused fatal and serious injuries, and the hazard is not incidental to the package: it is the direct consequence of what the package is for.',
        },
        {
          type: 'paragraph',
          text: 'The hazard has several distinct routes, and they are worth naming because they are different failures with different causes. The bag can be overloaded beyond what it is rated to carry. It can be lifted by fewer loops than the design requires, concentrating the load. Its fabric can have been degraded by sunlight, since the same UV sensitivity that ends the life of a woven polypropylene sack applies here to a bag holding a far more dangerous load. It can have been damaged, repaired informally, or reused when it was never rated for a second trip. And it can be stable when standing and unstable when lifted, because a filled fabric bag is a deformable mass whose contents shift.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Suspended bulk loads kill',
          text: "A filled FIBC is a heavy suspended load, and failures of fabric, seams, or lifting loops have caused fatal injuries. Safe working loads, safety factors, lifting arrangements, inspection, permitted reuse, and the exclusion of people from beneath suspended loads are governed by the applicable standards, the bag manufacturer's specification, and the operator's own lifting-operations arrangements under occupational-safety regulation. None of those are set out here, and no bag should be lifted on the basis of general guidance.",
        },
        {
          type: 'paragraph',
          text: 'There is a second, less obvious hazard at discharge. A bulk bag empties by gravity through a spout, and granular contents do not always flow evenly: material can bridge over the opening and then release suddenly, or the bag can collapse asymmetrically and swing. Discharge stations exist precisely because the operation is more dangerous than it appears.',
        },
      ],
    },
    {
      id: 'ratings-are-the-package',
      heading: 'The rating is the product; the fabric is incidental',
      body: [
        {
          type: 'paragraph',
          text: 'Two FIBCs can look identical and be entirely different products. Bags are made and sold against ratings — a safe working load, a safety factor, and a declaration of whether they are single-trip or rated for multiple trips — and those ratings are the thing being bought. A single-trip bag is not a cheap reusable bag; it is a bag whose rating assumed one use, and reusing it means operating outside the basis on which its strength was established.',
        },
        {
          type: 'paragraph',
          text: "This is the failure mode that recurs in practice. Bulk bags accumulate on farms and in yards because they are obviously useful objects, and they get refilled. The person refilling one generally cannot tell what it was rated for, how many trips it has done, what UV exposure it has had sitting in the yard, or whether the loops have been stressed. The bag looks fine, because woven polypropylene looks fine until it does not. Informal reuse of FIBCs is the industry's standing safety problem, and it is a direct consequence of the bag being too useful to throw away.",
        },
        {
          type: 'paragraph',
          text: "A further category exists for materials that generate static: flammable dusts, including some agricultural dusts, can be ignited by electrostatic discharge, and bags are made in specific antistatic types for those duties. Which type is required for a given material and environment is a hazardous-area assessment, not a packaging preference, and it is governed by the applicable standards and the operator's own assessment.",
        },
      ],
    },
    {
      id: 'what-it-does-for-the-crop',
      heading: 'What it does, and does not do, for the contents',
      body: [
        {
          type: 'paragraph',
          text: 'As a container for produce, the bulk bag inherits the properties of the woven polypropylene it is made from. It does not absorb moisture and it does not rot, so it survives conditions that would destroy a natural-fibre container. It also does not breathe in any useful sense: the tape is impermeable, exchange happens only through the weave, and a large mass of biological material inside it has a very small surface-to-volume ratio through which to exchange anything.',
        },
        {
          type: 'paragraph',
          text: 'That last point is a real and underrated difference from a sack. A tonne of grain in one bag has far less package surface per tonne than the same grain in many small sacks, so whatever moisture exchange the fabric permits is spread over proportionally much less area — and the interior of the mass is far from any surface. Moisture released inside a bulk bag has a long way to go and few routes out, and it condenses wherever the bag is coolest. Bulk bags therefore demand that the drying be right before filling, more strictly than sacks do, and ventilated constructions exist for exactly this reason.',
        },
        {
          type: 'paragraph',
          text: 'Where a genuine barrier is wanted — against moisture ingress, odour, or contamination — it is provided by a separate liner inside the bag rather than by the bag itself, which is the same division of labour found in lined cartons and lined crates: the outer container carries the load, the liner manages the atmosphere.',
        },
      ],
    },
    {
      id: 'the-economics',
      heading: 'Why it wins where it wins',
      body: [
        {
          type: 'list',
          items: [
            'It collapses the handling count: one lift replaces many, which removes both labour and the manual-handling injuries that go with sack work.',
            'It keeps lot identity, which true bulk handling destroys — decisive for seed, for certified and organic consignments, and for anything traceable.',
            'It folds flat empty, so the empty-return problem that dominates returnable rigid packaging barely exists.',
            'It needs no infrastructure: any yard with a forklift is a bulk-handling facility, which is why it reaches places silos never will.',
            'It suits intermediate volumes — more than a chain wants to sack, less than justifies bulk plant — which is where a large share of agricultural trade actually sits.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The costs are the mirror image: the bag needs lifting equipment at both ends, it is not divisible below the bag, it holds a mass whose moisture must be right before filling, and it carries a safety burden that a sack does not because nothing about a sack is suspended over anyone.',
        },
      ],
    },
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'oilseed',
    'nut',
    'spice',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'almonds' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'sunflower-seed' },
  ],
  equipment: [{ type: 'machinery', slug: 'grain-auger' }],
  measurableInputs: [
    'Safe working load and safety factor the bag is rated to',
    "Single-trip or multi-trip rating, and the bag's trip history",
    'Antistatic type, where the material or environment requires one',
    'Contents moisture at filling (meter)',
    'Ultraviolet exposure history of the fabric',
    'Whether a liner is fitted, and of what',
  ],
  measurableOutputs: [
    'Handling movements eliminated per tonne compared with sacks',
    'Contents moisture and localised condensation within the mass',
    'Bag failures, and the point of failure — fabric, seam, or loop',
    'Empty-return volume compared with rigid containers',
  ],
  qualityEffects: [
    'Keeps each lot discrete and identifiable, which bulk handling in silos does not',
    'Does not rot or absorb moisture, surviving conditions that destroy natural-fibre containers',
    'Exchanges moisture poorly: a large mass has little package surface per tonne and a distant interior',
    'Requires a separate liner where a genuine moisture or contamination barrier is needed',
    'Reduces manual handling, and with it the produce damage and worker injury that sack handling causes',
  ],
  environmentalContext:
    'The bag replaces many sacks with one container and folds flat when empty, so its material use and return burden per tonne compare well with the alternatives. Its end of life is the woven polypropylene problem again: it does not biodegrade, it fragments under sunlight, and its size and contamination make it awkward to recycle. Informal reuse is very widespread and is genuinely material-saving, which sits directly against the safety position that a single-trip bag must not be refilled — an unresolved tension in practice rather than a question with a clean answer.',
  safetyLimitations: [
    "A filled FIBC is a suspended load whose failure has caused fatal injuries. Safe working loads, safety factors, lifting-loop arrangements, inspection, and exclusion of people from beneath suspended loads are governed by the applicable standards, the manufacturer's specification, and the operator's lifting-operations arrangements under occupational-safety regulation.",
    'Single-trip and multi-trip bags are visually indistinguishable. Reuse of a bag not rated for it, or of a bag whose history and sun exposure are unknown, operates outside the basis on which its strength was established.',
    'Discharge is a hazard in its own right: contents can bridge and release suddenly, and bags can collapse or swing asymmetrically.',
    'Materials that generate static require specific antistatic bag types; selection is a hazardous-area assessment governed by the applicable standards, not a packaging preference. No load, rating, or bag type is specified here.',
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'almond' },
    { type: 'crop', slug: 'soybean' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Bulk and intermediate containers in post-harvest commodity handling',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Bulk handling and storage of grain and oilseeds',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Commodity storage container practice',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain handling and storage guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, wherever intermediate-volume agricultural trade meets a forklift. Standards for FIBC construction, rating, testing, and safe use are set nationally and internationally and differ between jurisdictions.',
  limitations: [
    "No safe working load, safety factor, rating, bag type, or lifting arrangement is given here. These are set by the applicable standards, the manufacturer's specification, and the operator's own lifting-operations assessment.",
    'This entry states the hazards a bulk bag creates; it does not describe how to fill, lift, stack, inspect, or discharge one, and must not be used as a basis for doing so.',
    'The bag exchanges moisture poorly because of its low surface-to-volume ratio; contents must be at a suitable moisture before filling, and the bag will not correct a marginal lot.',
    'Informal reuse is widespread and materially attractive but conflicts directly with the ratings on which bag strength is established; this entry does not resolve that tension.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bulk Bags (FIBC): Between the Sack and the Silo',
    description:
      'How flexible intermediate bulk containers keep lot identity with bulk efficiency, why a filled FIBC is always a suspended load, and why reuse is the problem.',
    keywords: [
      'FIBC',
      'bulk bag',
      'flexible intermediate bulk container',
      'big bag safety',
      'suspended load',
    ],
  },
  structuredData: { article: true },
};

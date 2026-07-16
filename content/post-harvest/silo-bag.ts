import type { PostHarvestContent } from '@/types/content';

export const siloBag: PostHarvestContent = {
  id: 'post-harvest-silo-bag',
  slug: 'silo-bag',
  contentType: 'post-harvest',
  title: 'Silo Bag',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Grain is packed into a long polythene tube laid on the ground in the field, and the tube is sealed at both ends. Enclosed, the grain and any insects and moulds inside continue to respire, consuming the oxygen in the trapped air and releasing carbon dioxide, until the atmosphere is hostile to insects and their development stops. This is the hermetic principle applied at field scale and at a size that matters commercially: a single bag holds the output of a substantial harvest, needs no building, no power, and no fixed capital, and is made where the grain is. The plastic tube is the entire storage system — which is also the vulnerability, because everything depends on a thin film staying intact.',
  riskFactors: [
    'Any breach of the film — a tear, a puncture, a bad seal, a seam failure — which admits air and reverses the whole mechanism',
    'Grain bagged too moist, which the bag cannot correct: sealing does not dry, and a wet bag moulds and spoils faster in warm conditions than dry grain would',
    'Rodents, birds, cats, dogs, and wildlife puncturing the film, which is a routine rather than exceptional occurrence in a field setting',
    'Hail, wind, and windblown debris tearing the plastic, and standing water at the base on poorly drained ground',
    'Ultraviolet degradation of the film over a long exposure, making it brittle and prone to splitting',
    'Damage during filling or extraction, and stones and stubble puncturing the underside from below',
    'Uneven bagging density, which affects both the seal and the amount of trapped air the grain must deplete',
    'No monitoring: the bag cannot be inspected inside, so spoilage is discovered on opening',
    'Partial extraction leaving the bag opened and no longer sealed, so the remaining grain reverts to aerobic storage',
    'The bag providing insect control but no protection against moisture — the most common misunderstanding of the method',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'electronic-moisture-meter' },
  ],
  safetyLimitations: [
    'The atmosphere inside a sealed grain bag is oxygen-deficient by design and will not sustain life. Large sealed bags, and the confined spaces around and inside them during extraction, are a recognised asphyxiation hazard, and an oxygen-deficient atmosphere gives no warning to the person entering it. Flowing grain during extraction behaves like a liquid and will not support a person. These are matters for trained personnel working to the operator’s own procedures and the applicable occupational-safety rules; AgricultureID gives no entry, extraction, or atmosphere procedure.',
    'Filling and extraction machinery operates in the field alongside people and has unguarded in-running points; this is addressed by the operator’s machine-guarding and lock-out procedures.',
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'sunflower-seed' },
  ],
  equipment: [{ type: 'machinery', slug: 'grain-auger' }],
  qualityEffects: [
    'Suppresses storage insects by oxygen depletion, without fumigants or insecticides and without residues',
    'Holds the moisture the grain was bagged at — it neither dries nor rewets a lot, provided the seal holds',
    'Does not control moulds where grain was sealed too moist; a low-oxygen atmosphere does not make wet grain safe',
    'Decouples harvest from marketing, letting a producer harvest at capacity and sell later without elevator queues',
    'Germination can be reduced in seed lots held in low-oxygen atmospheres, so seed and grain use are not equivalent',
    'A breach reverses the benefit silently, and the lot is discovered on opening rather than monitored during storage',
  ],
  environmentalContext:
    'Silo bags transformed grain logistics in the Southern Cone — Argentina above all, and Brazil, Paraguay, and Uruguay — where harvest arrives faster than elevators and freight can absorb it, and they have since spread through South America, Eastern Europe, and parts of Africa and Asia. Their appeal is precisely that they require no fixed infrastructure: a producer can store a whole harvest at the field edge and market it across the year without a bin, a building, or a grid connection. Their disposal is a real environmental cost, since a bag is a large single-use plastic item and collection schemes are uneven.',
  alternativeNames: [
    'Grain bag',
    'Silo bolsa',
    'Bag silo',
    'Grain sleeve',
    'Silobag',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'A silo bag stores grain in a sealed polythene tube laid in the field, where respiration depletes the oxygen and suppresses insects. It applies the hermetic principle at harvest scale, with no building or power.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A silo bag is a long polythene tube, laid on the ground at the field edge, filled with grain by a bagging machine and sealed at both ends. It is storage without a structure: no bin, no building, no fans, no electricity, no fixed capital of any kind. A producer with a bagger and an extractor can store a harvest where it was grown and take it out months later. In Argentina, where the technique became commercially decisive, silo bags are how a national harvest that arrives faster than the elevator and freight system can absorb it gets stored at all.',
    },
    {
      type: 'paragraph',
      text: 'What happens inside is hermetic storage. Sealed away from fresh air, the grain and the insects and moulds it carries go on respiring, consuming the oxygen in the trapped air and replacing it with carbon dioxide. The atmosphere becomes one in which insects cannot develop, so an infestation ends without a fumigant ever being used. Silo bags are treated here as their own entry rather than as a footnote to the hermetic principle because the field-scale realities — plastic in a field, wildlife, weather, no monitoring, an oxygen-deficient tube big enough to kill someone — are what actually determine whether the method works.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'A sealed polythene tube of grain laid on the ground in the field',
    },
    {
      label: 'Principle',
      value:
        'Hermetic: respiration depletes oxygen, raises carbon dioxide, and stops insects',
    },
    {
      label: 'Why it spread',
      value:
        'Stores a whole harvest with no building, no power, and no fixed capital',
    },
    {
      label: 'What it does not do',
      value: 'It does not dry grain; a bag sealed too moist will spoil',
    },
    {
      label: 'The whole system',
      value: 'A thin plastic film — every failure mode is a breach of it',
    },
    {
      label: 'No monitoring',
      value: 'The inside cannot be inspected; spoilage is found on opening',
    },
    {
      label: 'Serious hazard',
      value:
        'The atmosphere inside is oxygen-deficient by design and will not sustain life',
    },
  ],
  sections: [
    {
      id: 'field-scale-hermetic',
      heading: 'The hermetic principle, at field scale',
      body: [
        {
          type: 'paragraph',
          text: 'The mechanism is the same one that operates in a hermetic liner bag holding a smallholder’s sack of maize. Seal a living bulk away from fresh air and its own respiration will exhaust the oxygen; insects, which need oxygen far more urgently than dormant dry grain does, are the first to be stopped. No chemistry is involved, no residue is left, and no registration is required, which is why hermetic methods matter for organic and residue-sensitive supply chains and for growers without access to fumigants.',
        },
        {
          type: 'paragraph',
          text: 'What the silo bag changes is scale and setting, and both matter more than they sound. A hermetic liner is a small sealed unit inside a warehouse, protected by a building and handled by hand. A silo bag holds a commercially meaningful tonnage, sits in the open in a field, and is exposed to weather, wildlife, and machinery for months. The physics is identical; the engineering problem is not. A liner that is torn is one damaged sack. A silo bag that is torn is a large lot of grain quietly reverting to aerobic storage with insects in it, and no one will know until it is opened.',
        },
      ],
    },
    {
      id: 'the-film',
      heading: 'Everything depends on the film',
      body: [
        {
          type: 'paragraph',
          text: 'In a bin, the storage system has redundancy: if aeration underperforms, the grain is still dry, still in a structure, still monitorable, and still recoverable. A silo bag has none. The plastic is the seal, the roof, the wall, and the pest barrier simultaneously, and it is a thin film lying in a field. Rodents chew it. Birds peck it. Cats and dogs walk on it and wildlife investigates it. Hail punctures it, wind flexes and tears it, windblown debris cuts it, stubble and stones beneath press up into it. Ultraviolet light degrades it over a long exposure until it splits on its own.',
        },
        {
          type: 'paragraph',
          text: 'Each of those is a hole, and a hole admits air. Once air enters, oxygen returns, insects resume, and the mechanism the whole method rests on is gone — silently, since the lot cannot be seen into. This is why silo bag practice is dominated by things that have nothing to do with grain: siting on well-drained ground away from trees and wildlife runs, clearing and levelling the site, controlling rodents around the bag, walking the bag regularly to find and patch damage, and fencing where stock or wildlife are a risk. The bag is not maintenance-free storage; it is storage whose maintenance is inspection and repair of a plastic skin. Bag specifications, siting, and inspection intervals are set by the applicable national storage guidance and the manufacturer.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A silo bag does not dry grain',
          text: 'Sealing controls insects; it does nothing about moisture. Grain must be dried to a moisture suitable for the intended holding period before bagging. Grain sealed too moist will mould and spoil inside the bag, and the low-oxygen atmosphere does not prevent it. Safe bagging moisture is crop-, climate-, and duration-specific and is set by the applicable national storage guidance.',
        },
      ],
    },
    {
      id: 'oxygen',
      heading: 'An oxygen-deficient space in a field',
      body: [
        {
          type: 'paragraph',
          text: 'The feature that makes a silo bag work is also what makes it dangerous. The atmosphere inside is deliberately depleted of oxygen — that is the entire mechanism — and an oxygen-deficient atmosphere does not sustain life. It also gives no warning: it does not smell, it does not irritate, and a person entering one does not feel a gathering problem in time to leave. A large sealed bag, and the enclosed spaces created around and within it during extraction, are a genuine asphyxiation hazard, and they are one that sits in an open field rather than behind the door of a plant room where hazards are expected.',
        },
        {
          type: 'paragraph',
          text: 'The second hazard during extraction is the grain itself. Flowing grain behaves like a liquid and will not support a person, and the same engulfment risk that kills people in bins applies to grain moving out of a bag. Both hazards belong to trained personnel working to the operator’s own written procedures and to the applicable occupational-safety regulations. They are stated here because a method whose selling point is that it needs no infrastructure can easily be treated as though it needs no precautions either, and that inference is wrong.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related storage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus hermetic storage',
              description:
                'Hermetic storage is the underlying concept: seal a bulk, let respiration deplete the oxygen, control insects without chemicals. A silo bag is one implementation of it — at field scale, in the open, unmonitored, and with the plastic film as the entire system. The physics is shared; the failure modes are specific to the field.',
            },
            {
              term: 'Versus a farm grain bin',
              description:
                'A bin is a permanent structure that conditions grain with air and can be monitored and inspected. A silo bag is temporary, conditions nothing, and cannot be seen into. A bin costs capital; a bag costs a film and a machine and is disposed of afterwards.',
            },
            {
              term: 'Versus aerated storage',
              description:
                'Directly opposed approaches. Aeration deliberately moves outside air through the bulk; a silo bag exists to keep outside air out. Aerating a hermetic bag would destroy the mechanism.',
            },
            {
              term: 'Versus grain drying',
              description:
                'Drying removes water and must happen before bagging. A silo bag cannot dry grain and does not make wet grain safe; it only stops insects.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'farm-grain-bin' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Hermetic and bag storage of grain and post-harvest loss reduction',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Hermetic storage and control of stored-product insects',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Grain bagging practice, siting, and handling hazards',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Grain bag storage in South American production systems',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Widely used in South America — Argentina above all — and increasingly in Eastern Europe, Africa, and Asia. Safe bagging moisture and holding periods are set by national storage guidance for each crop and climate.',
  limitations: [
    'This entry states no bagging moisture, bag specification, holding duration, or gas concentration: all are crop-, climate-, and period-specific and are set by the applicable national storage guidance and the manufacturer.',
    'A silo bag does not dry grain and does not control moulds in grain sealed too moist; the low-oxygen atmosphere suppresses insects only.',
    'The contents of a bag cannot be inspected or monitored in the way a bin can, so a breach and the spoilage that follows it are typically discovered only on opening.',
    'The atmosphere inside a sealed bag is oxygen-deficient and will not sustain life, and extraction involves flowing grain. Nothing here is an entry, extraction, or atmosphere procedure.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Silo Bag: Sealed Field Grain Storage Explained',
    description:
      'How silo bags store grain in sealed polythene tubes: hermetic oxygen depletion stops insects, why the film is the whole system, and its safety hazard.',
    keywords: [
      'silo bag',
      'grain bag storage',
      'silo bolsa',
      'hermetic grain storage',
      'field grain storage',
    ],
  },
  structuredData: { article: true },
};

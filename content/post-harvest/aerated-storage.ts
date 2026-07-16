import type { PostHarvestContent } from '@/types/content';

export const aeratedStorage: PostHarvestContent = {
  id: 'post-harvest-aerated-storage',
  slug: 'aerated-storage',
  contentType: 'post-harvest',
  title: 'Aerated Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Fans push ambient air through a bulk of grain at a low airflow — enough to move heat, not enough to remove much water. Because each kernel exchanges heat readily with air passing over it but grain conducts heat poorly between kernels, the bulk does not cool uniformly. Instead a distinct cooling front forms at the air inlet and advances through the bulk at a rate set by the volume of air delivered: grain behind the front sits near the temperature of the incoming air, grain ahead of it remains at its original temperature. Aeration is therefore a front-driving operation, run to completion rather than by the clock, and its purpose is a cool, uniform bulk in which biological activity is suppressed and the temperature differences that drive moisture migration no longer exist.',
  riskFactors: [
    'Stopping fans before the front has passed completely through, which leaves a warm layer against a cool one and concentrates moisture at their boundary',
    'Running fans when ambient air is warmer or more humid than the bulk, which warms or rewets the grain instead of conditioning it',
    'Treating aeration as drying: the airflow is far too low to remove meaningful water, and wet grain aerated instead of dried will spoil',
    'Fines and trash concentrated in a core or layer, which resists airflow so air diverts around it and leaves the most spoilable material unconditioned',
    'Uneven grain depth over the ducts, so air short-circuits through the shallow zones',
    'Duct or floor blockage, and leaks in the plenum, which divert air away from the bulk',
    'Assuming a temperature reading at one point represents the bulk, when the whole premise of a moving front is that the bulk is not uniform during aeration',
    'In warm climates, ambient air that is never cool enough to bring the bulk to a biologically quiet temperature at all',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'electronic-moisture-meter' },
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  qualityEffects: [
    'A cool, even bulk suppresses insect development and mould growth for as long as it is maintained',
    'Removing the temperature difference between bulk and ambient air removes the driving force for moisture migration and surface crusting',
    'Preserves germination and seed vigour by keeping the grain metabolically quiet',
    'Limits the respiration losses — dry matter consumed as the grain breathes — that accumulate in warm storage',
    'Does not dry the grain, does not lower its moisture appreciably, and does not repair a lot that was stored wet or damaged',
  ],
  environmentalContext:
    'Aeration depends on the existence of ambient air cooler than the grain, so it is fundamentally a temperate and seasonal technique: it works where autumn and winter supply progressively cooler air with which to step a bulk down. In hot climates, ambient air may never be cool enough to bring grain to a quiet temperature, and refrigerated aeration or an entirely different approach is required. Humid climates constrain it further, since air that would cool the bulk may also rewet it.',
  alternativeNames: [
    'Aeration',
    'Grain aeration',
    'Ambient aeration',
    'Aeration cooling',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Aeration moves ambient air through stored grain at low airflow to bring the bulk to a cool, even temperature. It drives a cooling front through the mass — it conditions grain, but it does not dry it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Aeration is the system that makes bulk grain storage work, and it is worth describing on its own rather than as a feature of bins and silos. It consists of a fan, a plenum, and a duct or perforated floor that distributes air through the grain mass. Its purpose is narrow and specific: to bring the whole bulk to a low, uniform temperature and keep it there. It is not a drying system, it is not a pest treatment, and it does not improve grain — it establishes and maintains the condition in which grain, moulds, and insects are all too inactive to do measurable damage.',
    },
    {
      type: 'paragraph',
      text: 'The concept that makes aeration comprehensible is the cooling front. Grain is a poor conductor of heat, so cooling does not spread evenly outward from the fan. Each kernel the air touches gives up its heat quickly, but that heat is carried away rather than passed to the next kernel. The result is a sharp boundary that migrates through the bulk in the direction of airflow, with cooled grain behind it and untouched grain in front. Almost every aeration mistake — stopping too early, running in the wrong weather, misreading a temperature probe — is a failure to reason about where that front is.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Low-airflow fans moving ambient air through a grain bulk to control its temperature',
    },
    {
      label: 'Key concept',
      value:
        'A cooling front advances through the bulk; grain behind it is cooled, grain ahead is not',
    },
    {
      label: 'Purpose',
      value:
        'A cool, uniform bulk that is biologically quiet and free of moisture migration',
    },
    {
      label: 'What it is not',
      value: 'Not drying — airflow is sized to move heat, not to remove water',
    },
    {
      label: 'Run until',
      value:
        'The front has passed completely through the bulk, not for a set time',
    },
    {
      label: 'Fan control',
      value:
        'Governed by ambient air condition relative to the grain, often automatically',
    },
    {
      label: 'Requires',
      value: 'Ambient air cooler than the grain; unavailable in hot climates',
    },
  ],
  sections: [
    {
      id: 'cooling-front',
      heading: 'The cooling front',
      body: [
        {
          type: 'paragraph',
          text: 'When a fan starts, air enters the bulk at the plenum and immediately exchanges heat with the first grain it meets. That grain reaches the air temperature within a very short distance, so the air leaving it is already at grain temperature and can do no further cooling. As the run continues, the cooled zone deepens: a boundary — the front — moves through the bulk in the direction of the airflow. The distance it advances is proportional to the total volume of air pushed through, which is why the meaningful measure of an aeration run is air delivered, not hours elapsed.',
        },
        {
          type: 'paragraph',
          text: 'Two practical consequences follow. First, the run must go to completion. A front stopped mid-bulk creates a boundary between warm and cool grain inside the mass, and that boundary is exactly where moisture accumulates — the same physics as moisture migration, deliberately created. Second, temperature monitoring during a run tells you less than it appears to. A sensor behind the front reads the incoming air temperature and says nothing about the grain ahead of it; a sensor ahead of it reads the original temperature and gives no sign the fan is working. Neither indicates the bulk is cooled. The airflow needed for a given crop and depth, and the resulting front speed, are engineering values set by the applicable national storage guidance.',
        },
      ],
    },
    {
      id: 'not-drying',
      heading: 'Aeration is not drying',
      body: [
        {
          type: 'paragraph',
          text: 'This is the most consequential confusion in grain storage. Drying and aeration both move air through grain, but they are sized for different jobs and differ by more than an order of magnitude in airflow. A dryer moves a large volume of air, frequently heated, with the express purpose of carrying water out of the grain. An aeration fan moves a small volume, sized to shift a cooling front economically over hours or days. It will change the moisture of the bulk slightly — grain tends toward equilibrium with the air passing over it — but it cannot remove the water in a wet crop within any useful period.',
        },
        {
          type: 'paragraph',
          text: 'The failure mode is predictable. Grain is binned too wet, the fan is switched on in the belief that it will dry, and the grain spoils while the operator waits. Worse, aeration of wet grain can accelerate the problem: if the air is warmer or more humid than the bulk, it deposits moisture and heat rather than removing them. The relationship between grain moisture and the humidity of the air it equilibrates with is the subject of moisture content and equilibrium, and it is what determines whether a given aeration run helps or harms. The safe moisture at which a crop may be binned and then merely aerated is set by national storage guidance for that crop, climate, and holding period.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Aeration cannot rescue wet grain',
          text: 'Grain must be dried to a moisture suitable for the intended holding period before storage. An aeration system is sized to move heat, not water, and running it on wet grain in unsuitable weather makes matters worse rather than better.',
        },
      ],
    },
    {
      id: 'when-to-run',
      heading: 'Choosing when to run the fans',
      body: [
        {
          type: 'paragraph',
          text: 'Because aeration uses whatever air the atmosphere provides, its usefulness depends entirely on when the fans run. Air that is cooler and no more humid than the bulk conditions it. Air that is warmer warms the grain. Air that is more humid, even if cooler, can deposit moisture into the grain it passes over. So aeration is run selectively — typically in cool, dry conditions, often overnight — rather than continuously, and modern installations use controllers that compare ambient temperature and humidity against the target and run the fan only when the air will do useful work.',
        },
        {
          type: 'paragraph',
          text: 'In practice a bulk is stepped down rather than cooled in one go. Grain coming off a warm harvest is brought down in stages as the season provides progressively cooler air, each run driving a new front through the mass. This is also why aeration is a temperate technique. Its whole premise is that the atmosphere supplies air cooler than the grain; where it does not — in tropical and subtropical storage — no fan schedule can produce a cool bulk, and refrigerated aeration or a different storage approach must be used instead.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related systems',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus grain drying',
              description:
                'Drying removes water using high airflow and often heat. Aeration moves a cooling front using low airflow. They are different operations with different equipment, and one cannot substitute for the other.',
            },
            {
              term: 'Versus chilled grain storage',
              description:
                'Chilled storage is aeration with refrigerated air, used where the ambient atmosphere never supplies air cool enough to condition the bulk. Same front, manufactured air.',
            },
            {
              term: 'Versus a farm grain bin or flat store',
              description:
                'Those are the structures; aeration is the system inside them that does the conditioning work. A bin without functioning aeration is only a container.',
            },
            {
              term: 'Versus hermetic storage',
              description:
                'Hermetic storage seals the bulk so respiration depletes its oxygen. Aeration does the opposite — it deliberately moves outside air through the grain. The two approaches are mutually exclusive in the same bulk.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'soybean' },
    { type: 'machinery', slug: 'grain-dryer' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'chilled-grain-storage' },
    { type: 'post-harvest', slug: 'farm-grain-bin' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Aeration of stored grain, cooling fronts, and airflow resistance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain aeration and cooling guidance for temperate stores',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Aeration fan sizing, control strategy, and cooling practice',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Grain cooling, aeration management, and moisture migration',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Temperate and continental grain regions, where ambient air is seasonally cooler than the stored bulk. Airflow and control values are set by national storage guidance for each crop and climate.',
  limitations: [
    'This entry states no airflow rate, target temperature, safe moisture, or run duration: all are crop-, climate-, and depth-specific and are set by the applicable national storage guidance and engineering recommendations.',
    'Aeration requires ambient air cooler than the grain and is largely ineffective in hot climates; it is not a universally available technique.',
    'Aeration does not dry grain, does not control an established infestation, and does not repair grain stored wet or damaged.',
    'Fan, duct, and floor designs differ widely; front behaviour described here is general and does not predict performance in a particular store.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Aerated Storage: Cooling Fronts in Stored Grain',
    description:
      'How grain aeration works: fans drive a cooling front through the bulk to hold it cool and even, and why it conditions grain but never dries it.',
    keywords: [
      'aerated storage',
      'grain aeration',
      'cooling front',
      'aeration fan control',
      'grain cooling',
    ],
  },
  structuredData: { article: true },
};

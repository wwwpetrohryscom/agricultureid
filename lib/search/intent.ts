/**
 * Wave 46 §42, §43, §53 — what kind of page a query is asking for.
 *
 * The corpus publishes an entity and then several pages derived from it: a
 * crop, and its calendar, its market series, its cultivars, its hub, its
 * variety registrations. Those derived pages legitimately carry the entity's
 * name — often in more fields than the entity's own page does — so a bare
 * entity query is a term-frequency contest that the derived page can win. Wave
 * 42 met one instance of this and fixed it by removing composite names from
 * calendar documents; that was right and it was a fix for one page type.
 *
 * The general form is intent. "wheat" asks for the crop. "wheat calendar" asks
 * for the calendar. Nothing in the ranking knew the difference, so the only
 * available lever was a blanket prior on the derived type — which the brief
 * forbids for good reason: it would answer "wheat calendar" with the crop.
 *
 * So the prior is CONDITIONAL. A derived page is discounted only when the query
 * says nothing about wanting that kind of page, and the discount is lifted
 * — for that type alone — the moment the query does. The signal words are
 * enumerated here rather than inferred, because a guess about intent is worse
 * than none.
 */

/** The kinds of page the corpus publishes, for ranking purposes. */
export const PAGE_KINDS = [
  'ENTITY',
  'CONCEPT',
  'HUB',
  'CALENDAR',
  'MARKET',
  'CULTIVAR',
  'REGISTRATION',
  'EXTENSION',
  'BIOSECURITY',
  'JOURNAL',
  'OTHER',
] as const;
export type PageKind = (typeof PAGE_KINDS)[number];

/**
 * Document type → page kind.
 *
 * Only the derived kinds matter to the prior; everything not listed is OTHER
 * and is never discounted, because the corpus should not be ranking down page
 * types nobody has reasoned about.
 */
const KIND_BY_TYPE: Record<string, PageKind> = {
  'crop-calendar': 'CALENDAR',
  'market-data': 'MARKET',
  cultivar: 'CULTIVAR',
  'variety-registration': 'REGISTRATION',
  'extension-resource': 'EXTENSION',
  'biosecurity-listing': 'BIOSECURITY',
  'crop-hub': 'HUB',
};

export function pageKind(type: string): PageKind {
  return KIND_BY_TYPE[type] ?? 'OTHER';
}

/**
 * Query tokens that ask for a derived kind of page.
 *
 * Enumerated, and kept narrow. A word is here only if a reader typing it
 * alongside an entity name is asking for that kind of page rather than
 * describing the entity — "wheat price" wants the market series, "wheat rust"
 * does not want anything on this list.
 */
const INTENT_TOKENS: Record<string, PageKind> = {
  calendar: 'CALENDAR',
  calendars: 'CALENDAR',
  planting: 'CALENDAR',
  sowing: 'CALENDAR',
  harvest: 'CALENDAR',
  season: 'CALENDAR',
  seasons: 'CALENDAR',
  price: 'MARKET',
  prices: 'MARKET',
  market: 'MARKET',
  markets: 'MARKET',
  production: 'MARKET',
  trade: 'MARKET',
  cultivar: 'CULTIVAR',
  cultivars: 'CULTIVAR',
  variety: 'REGISTRATION',
  varieties: 'REGISTRATION',
  registration: 'REGISTRATION',
  registrations: 'REGISTRATION',
  registered: 'REGISTRATION',
  extension: 'EXTENSION',
  advisory: 'EXTENSION',
  quarantine: 'BIOSECURITY',
  biosecurity: 'BIOSECURITY',
  regulated: 'BIOSECURITY',
  hub: 'HUB',
  family: 'HUB',
  genus: 'HUB',
};

/** The derived kinds a query asks for, if any. */
export function intendedKinds(queryTokens: string[]): Set<PageKind> {
  const out = new Set<PageKind>();
  for (const t of queryTokens) {
    const k = INTENT_TOKENS[t];
    if (k) out.add(k);
  }
  return out;
}

/**
 * A prior on unasked-for derived pages was built, measured, and NOT shipped.
 *
 * The design was: discount a calendar, market series, cultivar, registration,
 * extension or hub page when the query says nothing about wanting one, and lift
 * the discount for that kind the moment the query does. It is the architecture
 * §42 and §43 describe and it is what would have prevented the Wave 42 defect
 * — a calendar page outranking its crop — in general rather than for calendars
 * alone.
 *
 * It moved nothing, twice. Measured across 588 regression cases at 0.85 and at
 * 1.0 the two runs are identical, and measured again after the glossary field
 * was removed from the index — which changed the landscape it was supposed to
 * act on — it narrowed one case without flipping it and pushed another back to
 * a wrong answer it had just left. The reason is that every bare entity query in this corpus already
 * returns its entity, because Wave 42 removed the composite names that let
 * calendars accumulate their crop's name and Wave 46's field saturation removed
 * the general form of that advantage. The brief is explicit that a scoring
 * change fixing nothing must be reverted, so it was, and the taxonomy it needed
 * stayed: the page kinds and the intent tokens are used by the explain report
 * and by the benchmark's intent classification, where they describe rather than
 * rank.
 *
 * Kept as a comment rather than as dormant code because dormant code is a
 * scoring change waiting to be switched on by someone who did not measure it.
 */
export function intentPrior(): number {
  return 1;
}

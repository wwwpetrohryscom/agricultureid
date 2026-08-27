import { TOOL_BY_SLUG } from '@/lib/tools/tools';
import type { ToolConfig } from '@/types/tools';

/**
 * Which tool belongs on which page, declared explicitly.
 *
 * ## Why this is a table and not a heuristic
 *
 * "Related tools" is exactly the kind of feature that invites similarity
 * scoring — match the crop page to the seed-rate calculator because both
 * mention seeds. That produces plausible, unexplainable and occasionally silly
 * results, and nobody can tell whether a given pairing was intended. So every
 * pairing below is written down, and every one carries the REASON it is there,
 * which is rendered next to the link. If a reason cannot be written, the
 * pairing does not belong.
 *
 * ## Context never changes the maths
 *
 * These are links, and only links. No value is prefilled from the page a reader
 * arrived from, so no tool can silently compute something different depending
 * on where it was opened. A calculator reached from the wheat page is the same
 * calculator, with the same empty fields, as one reached from search.
 */
export interface ToolRelevance {
  toolSlug: string;
  /** Why this tool is useful here. Rendered; never omitted. */
  reason: string;
}

/** Tools offered on every entity of a content type. */
export const RELEVANCE_BY_CONTENT_TYPE: Record<string, ToolRelevance[]> = {
  crop: [
    {
      toolSlug: 'seed-rate-calculator',
      reason:
        'Convert a target plant stand into a seed rate, allowing for germination and establishment.',
    },
    {
      toolSlug: 'row-spacing-calculator',
      reason:
        'Work out in-row spacing and plants per metre of row for a target density.',
    },
    {
      toolSlug: 'production-area-yield-calculator',
      reason:
        'Relate a harvested area and a yield to a production total, in either direction.',
    },
    {
      toolSlug: 'growing-degree-days',
      reason: 'Accumulate heat units against a base temperature.',
    },
  ],
  commodity: [
    {
      toolSlug: 'yield-converter',
      reason:
        'Move between t/ha, kg/ha, lb/acre and bu/acre using a commodity’s own standard bushel weight.',
    },
    {
      toolSlug: 'moisture-content-converter',
      reason:
        'Convert between wet-basis and dry-basis moisture before comparing figures.',
    },
    {
      toolSlug: 'production-area-yield-calculator',
      reason: 'Check a production total against an area and a yield.',
    },
  ],
  fertilizer: [
    {
      toolSlug: 'nutrient-rate-converter',
      reason:
        'Convert between a product rate and the nutrient rate it supplies, at a grade you enter.',
    },
    {
      toolSlug: 'fertilizer-nutrient-calculator',
      reason:
        'Convert a fertilizer mass and grade to nutrient mass, including P₂O₅ to P and K₂O to K.',
    },
  ],
  'post-harvest': [
    {
      toolSlug: 'grain-moisture-shrink',
      reason:
        'Quantify the mass lost when grain is dried to a target moisture.',
    },
    {
      toolSlug: 'water-removal-calculator',
      reason: 'Find the water mass a drying step has to remove.',
    },
    {
      toolSlug: 'post-harvest-loss-calculator',
      reason: 'Express a physical loss between two measured quantities.',
    },
  ],
  'irrigation-method': [
    {
      toolSlug: 'irrigation-volume-calculator',
      reason:
        'Convert an application depth over an area into a net and gross volume.',
    },
    {
      toolSlug: 'irrigation-flow-time-calculator',
      reason: 'Relate that volume to a steady delivery rate and a run time.',
    },
  ],
  'quality-attribute': [
    {
      toolSlug: 'moisture-content-converter',
      reason:
        'Convert between the two moisture bases before comparing a specification.',
    },
    {
      toolSlug: 'dry-matter-calculator',
      reason: 'Separate dry matter from water in a measured mass.',
    },
  ],
};

/** Tools offered on a specific page path, beyond any content-type rule. */
export const RELEVANCE_BY_PATH_PREFIX: {
  prefix: string;
  tools: ToolRelevance[];
}[] = [
  {
    prefix: '/agricultural-markets',
    tools: [
      {
        toolSlug: 'yield-converter',
        reason:
          'Market series are published in the source’s own units; convert a yield before comparing it with another.',
      },
      {
        toolSlug: 'production-area-yield-calculator',
        reason:
          'Check that a published production, area and yield triple is consistent.',
      },
    ],
  },
  {
    prefix: '/crop-calendars',
    tools: [
      {
        toolSlug: 'growing-degree-days',
        reason:
          'A calendar gives usual dates; degree-days give the heat accumulation behind them.',
      },
      {
        toolSlug: 'seed-rate-calculator',
        reason: 'Turn a planting decision into a seed rate.',
      },
    ],
  },
];

function resolve(entries: ToolRelevance[]): {
  tool: ToolConfig;
  reason: string;
}[] {
  const out: { tool: ToolConfig; reason: string }[] = [];
  const seen = new Set<string>();
  for (const e of entries) {
    if (seen.has(e.toolSlug)) continue;
    const tool = TOOL_BY_SLUG.get(e.toolSlug);
    // A pairing naming a tool that no longer exists is dropped rather than
    // rendered as a dead link; tools:validate fails on it separately.
    if (!tool) continue;
    seen.add(e.toolSlug);
    out.push({ tool, reason: e.reason });
  }
  return out;
}

/** Tools declared relevant to a content type. */
export function toolsForContentType(contentType: string) {
  return resolve(RELEVANCE_BY_CONTENT_TYPE[contentType] ?? []);
}

/** Tools declared relevant to a page path. */
export function toolsForPath(path: string) {
  const match = RELEVANCE_BY_PATH_PREFIX.find((r) => path.startsWith(r.prefix));
  return resolve(match?.tools ?? []);
}

/** Every tool slug named by any rule — used by the validator. */
export function referencedToolSlugs(): string[] {
  return [
    ...new Set([
      ...Object.values(RELEVANCE_BY_CONTENT_TYPE).flatMap((v) =>
        v.map((e) => e.toolSlug),
      ),
      ...RELEVANCE_BY_PATH_PREFIX.flatMap((r) =>
        r.tools.map((e) => e.toolSlug),
      ),
    ]),
  ].sort();
}

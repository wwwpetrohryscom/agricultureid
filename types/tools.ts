import type { ProvenancedClaim } from '@/types/content';

/**
 * Phase 3C — versioned formula registry types. Calculators resolve formulas by
 * id/version and never duplicate the maths in a component.
 *
 * Phase 5E extends this for commodity calculators. Two decisions worth stating,
 * because they shape everything else:
 *
 * 1. **A formula produces ONE scalar.** A tool that reports five numbers (water
 *    removal reports dry matter, initial water, final mass, target water, and
 *    water removed) composes five formulas. It does not grow a multi-output
 *    formula, and it never does arithmetic in the component — that is exactly
 *    the duplication the registry exists to prevent.
 * 2. **Moisture basis is never inferred.** It is an explicit input, typed, and
 *    carried through every conversion. Silent basis switching is the single
 *    most dangerous failure mode in commodity moisture maths: 20% wet-basis and
 *    20% dry-basis are different quantities, and nothing about a bare "20"
 *    reveals which one it is.
 */

/**
 * How a moisture percentage is denominated.
 *
 * - `wet-basis` — water ÷ TOTAL mass. Bounded below 100% by definition: a lot
 *   cannot be more than entirely water.
 * - `dry-basis` — water ÷ DRY-MATTER mass. Unbounded above: a lot with twice as
 *   much water as solids is 200% dry-basis, which is not an error.
 *
 * Commodity trading and grading almost always mean wet-basis; drying and
 * process engineering often mean dry-basis. Getting this wrong silently changes
 * every downstream number, which is why `acceptedBases` is a required field.
 */
export type MoistureBasis = 'wet-basis' | 'dry-basis';

export const MOISTURE_BASES: readonly MoistureBasis[] = [
  'wet-basis',
  'dry-basis',
] as const;

export interface FormulaTestCase {
  inputs: Record<string, number | string>;
  /** Expected primary output value. */
  expect: number;
  /** Absolute tolerance for the comparison (default very small). */
  tolerance?: number;
  note?: string;
}

/** A declared valid range for an input. Values outside it are rejected. */
export interface FormulaInput {
  key: string;
  label: string;
  unit?: string;
  /** Inclusive lower bound, when the maths or physics imposes one. */
  min?: number;
  /** Inclusive upper bound, when the maths or physics imposes one. */
  max?: number;
  /** Why the range is what it is (e.g. "wet-basis moisture cannot reach 100%"). */
  rangeNote?: string;
}

export interface CalcFormula {
  formulaId: string;
  name: string;
  /** Mathematical-definition version. */
  formulaVersion: string;
  /** Implementation version (bump on code change, even if maths is unchanged). */
  calcVersion: string;
  /** Human-readable expression. */
  expression: string;
  /** Input keys the formula consumes, with units and valid ranges. */
  inputs: FormulaInput[];
  output: { label: string; unit: string };
  assumptions: string[];
  /** Geographic / crop / system applicability. */
  applicability: string;
  /**
   * Commodity slugs this formula is defined for, when it is commodity-specific
   * (e.g. a bushel conversion). Empty/omitted means commodity-independent —
   * mass balance does not care what the commodity is. Every slug must resolve.
   */
  commodityApplicability?: string[];
  /** Moisture bases the formula accepts. Required for any moisture maths. */
  acceptedBases?: MoistureBasis[];
  /** Source registry ids supporting the formula (must resolve). */
  sourceIds: string[];
  /** Field-level provenance for the formula's definition and any constants. */
  claims?: ProvenancedClaim[];
  limitations: string[];
  /**
   * What this formula must not be read as authorising. Required wherever a
   * result could be mistaken for an engineering, safety, grading, or commercial
   * determination.
   */
  safetyContext?: string;
  testCases: FormulaTestCase[];
  lastReviewedAt: string;
  /** Set when superseded; `replacedBy` must name a live formula id. */
  deprecated?: boolean;
  replacedBy?: string;
  /** Pure computation. Throws on invalid input (e.g. divide-by-zero). */
  compute: (inputs: Record<string, number | string>) => number;
}

export type ToolCategory =
  | 'nutrition'
  | 'planting'
  | 'water'
  | 'climate'
  | 'conversion'
  | 'commodity'
  | 'post-harvest'
  | 'storage'
  | 'processing'
  | 'trade';

export interface ToolField {
  key: string;
  label: string;
  type: 'number' | 'select';
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  help?: string;
  default?: string;
  options?: { value: string; label: string }[];
  /** Show this field only when the predicate holds (conditional inputs). */
  showIf?: (values: Record<string, string>) => boolean;
}

export interface ToolOutput {
  label: string;
  value: string;
  unit?: string;
  note?: string;
}

export interface ToolResult {
  outputs: ToolOutput[];
  /** Which formula(s) were used, for the formula panel. */
  formulaIds: string[];
  note?: string;
  error?: string;
}

export interface ToolConfig {
  slug: string;
  title: string;
  category: ToolCategory;
  purpose: string;
  /** Primary formula(s) shown in the formula panel. */
  formulaIds: string[];
  fields: ToolField[];
  /** Pure: maps field values (strings from inputs) to a result. */
  compute: (values: Record<string, string>) => ToolResult;
  /** Extra tool-specific limitations (beyond the formulas'). */
  limitations?: string[];
  /**
   * What this tool must not be mistaken for — required on every Phase 5E
   * commodity tool and enforced by the validator. A storage-capacity number
   * that does not say "this is not an engineering certification" is the kind of
   * output someone acts on.
   */
  safetyDisclosure?: string;
  /** Commodity slugs the tool is scoped to, when it is commodity-specific. */
  commodityApplicability?: string[];
  /**
   * Vocabulary people search for that the title does not contain.
   *
   * Indexed at name weight, NOT as synonyms. The distinction matters: a synonym
   * asserts two terms mean the same thing, whereas an alias only says "someone
   * looking for this probably wants this page". "storage capacity" is a
   * legitimate alias for the volume estimator — people search it — while
   * remaining something the page itself is careful to say a volume is NOT.
   *
   * Multi-word vocabulary CANNOT go in the synonym registry: `expandToken`
   * deliberately refuses to expand multi-word variants by their component words
   * (that restraint is what stops "corn" reaching sorghum via "guinea corn").
   * Aliases are the correct channel for phrases like "wet basis".
   */
  searchAliases?: string[];
}

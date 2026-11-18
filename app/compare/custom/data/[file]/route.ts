import { buildCustomMatrix } from '@/lib/comparison/custom-matrix';
import { CUSTOM_COMPARISON_TYPES } from '@/lib/comparison/custom';
import type { ComparisonEntityType } from '@/types/comparison';

/**
 * Build-time data for /compare/custom: one JSON file per comparable type,
 * exported as /compare/custom/data/{type}.json. The page assembles the
 * comparison from it in the browser (lib/comparison/custom.ts).
 */
export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return CUSTOM_COMPARISON_TYPES.map((type) => ({ file: `${type}.json` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ file: string }> },
) {
  const { file } = await params;
  const type = file.replace(/\.json$/, '') as ComparisonEntityType;
  return Response.json(buildCustomMatrix(type));
}

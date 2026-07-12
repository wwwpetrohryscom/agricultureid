import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { contentTypeSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Fertilizers';
const PATH = '/fertilizers';
const DESCRIPTION =
  'Mineral, compound, organic, and micronutrient fertilizers — their composition, the nutrients they supply, and evidence-based principles for their use.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on fertilizers: composition, nutrient content, the deficiencies they address, application principles, and environmental considerations.',
  path: PATH,
});

export default function FertilizersPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={contentTypeSorted('fertilizer')}
      note="Application rates, timing, and product choices depend on the crop, soil test, yield goal, and local regulations. Entries describe principles, not universal prescriptions."
    />
  );
}

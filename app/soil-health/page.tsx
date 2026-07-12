import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { contentTypeSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Soil Health';
const PATH = '/soil-health';
const DESCRIPTION =
  'The properties and processes that determine how soils function — structure, pH, salinity, organic matter, cation exchange, biology, and testing.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on soil health: physical, chemical, and biological soil properties and processes, and how they are assessed and managed.',
  path: PATH,
});

export default function SoilHealthPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={contentTypeSorted('soil-topic')}
      note="These entries cover soil properties and processes. For individual soil types and textures, see the Soils section."
    />
  );
}

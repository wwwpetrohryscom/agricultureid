import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { contentTypeSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Climate';
const PATH = '/climate';
const DESCRIPTION =
  'The climate factors that shape agriculture — temperature, rainfall, drought, frost, humidity, and growing-degree days — and how they affect crops.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on climate factors in agriculture: temperature, water, and stress factors, and the metrics used to relate climate to crop growth.',
  path: PATH,
});

export default function ClimatePage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={contentTypeSorted('climate')}
      note="Climate effects are strongly regional and interact with crop, soil, and management. Entries describe general principles, not local forecasts or thresholds."
    />
  );
}

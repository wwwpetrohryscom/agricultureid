import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { cultivarsSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Cultivars';
const PATH = '/cultivars';
const DESCRIPTION =
  'Crop varieties, cultivars, and landraces tied to their parent species, origin, breeding history, registry status, and authoritative sources.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Structured cultivar and variety records — parent species, origin, breeding type, registry status, adaptation, and documented traits, each sourced.',
  path: PATH,
});

export default function CultivarsPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={cultivarsSorted()}
      note="Registry listing or variety protection is jurisdiction- and date-specific, and does not by itself indicate current commercial availability, universal cultivation approval, or a recommendation. Trait and adaptation notes are region-specific."
    />
  );
}

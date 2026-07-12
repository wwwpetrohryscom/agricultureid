import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { contentTypeSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Machinery';
const PATH = '/machinery';
const DESCRIPTION =
  'Agricultural machinery and equipment — from tractors and tillage tools to seeding, crop protection, harvest, and precision-farming technology.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on agricultural machinery: what each category of equipment does, where it fits in the production cycle, and key considerations.',
  path: PATH,
});

export default function MachineryPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={contentTypeSorted('machinery')}
      note="Entries describe categories of equipment and their roles. Specific machine selection depends on scale, crop, terrain, and local conditions."
    />
  );
}

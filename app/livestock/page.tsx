import type { Metadata } from 'next';
import { HubIndex } from '@/components/content/HubIndex';
import { livestockSorted } from '@/lib/content/registry';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Livestock';
const PATH = '/livestock';
const DESCRIPTION =
  'Farm animal species — production context, breeds and types, nutrition and feeding, and health and welfare principles.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Reference entries on farm livestock species: types and breeds, nutrition and feeding, health and welfare principles, and production context — fully sourced.',
  path: PATH,
});

export default function LivestockPage() {
  return (
    <HubIndex
      title={TITLE}
      path={PATH}
      description={DESCRIPTION}
      items={livestockSorted()}
      note="These entries are general species overviews. Animal health, medicines, and welfare are governed by regional regulation and professional veterinary advice."
    />
  );
}

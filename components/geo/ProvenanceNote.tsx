import { ExternalLink } from '@/components/ui/ExternalLink';
import type { AgriculturalStatistic } from '@/types/geo';

/**
 * Compact provenance line for a statistic or snapshot. A statistic is never
 * shown without its source, dataset version, and retrieval date.
 */
export function ProvenanceNote({
  sourceDataset,
  sourceVersion,
  retrievedAt,
  sourceUrl,
  estimate,
}: {
  sourceDataset: string;
  sourceVersion: string;
  retrievedAt: string;
  sourceUrl?: string;
  estimate?: boolean;
}) {
  return (
    <p className="text-xs leading-5 text-ink-500">
      Source:{' '}
      {sourceUrl ? (
        <ExternalLink
          href={sourceUrl}
          className="underline underline-offset-2 hover:text-forest-700"
        >
          {sourceDataset}
        </ExternalLink>
      ) : (
        sourceDataset
      )}{' '}
      · dataset version {sourceVersion} · retrieved {retrievedAt}
      {estimate && (
        <span className="ml-1 font-medium text-clay-700">
          · modeled estimate
        </span>
      )}
    </p>
  );
}

export function statProvenance(s: AgriculturalStatistic) {
  return {
    sourceDataset: s.sourceDataset,
    sourceVersion: s.sourceVersion,
    retrievedAt: s.retrievedAt,
    estimate: s.estimateFlag,
  };
}

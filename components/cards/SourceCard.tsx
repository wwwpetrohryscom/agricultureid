import { Badge } from '@/components/ui/Badge';
import { ExternalLink } from '@/components/ui/ExternalLink';
import {
  SOURCE_RELIABILITY_LABEL,
  SOURCE_TYPE_LABEL,
  type Source,
} from '@/types/sources';

const RELIABILITY_TONE = {
  authoritative: 'forest',
  high: 'olive',
  moderate: 'clay',
} as const;

interface SourceCardProps {
  source: Source;
  /** Optional index for a numbered citation list. */
  index?: number;
  /** What this source was cited for on the page. */
  citedFor?: string;
}

/** A single source rendered as a provenance card. Used in articles and /sources. */
export function SourceCard({ source, index, citedFor }: SourceCardProps) {
  return (
    <li className="rounded-card border border-ink-100 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {typeof index === 'number' && (
            <span className="mr-1.5 text-sm font-semibold text-ink-400">
              [{index}]
            </span>
          )}
          <ExternalLink
            href={source.url}
            className="font-semibold text-forest-700 underline decoration-forest-300 underline-offset-2 hover:decoration-forest-600"
          >
            {source.title}
          </ExternalLink>
          <p className="mt-1 text-sm text-ink-600">{source.organization}</p>
        </div>
        <Badge tone={RELIABILITY_TONE[source.reliability]} className="shrink-0">
          {SOURCE_RELIABILITY_LABEL[source.reliability]}
        </Badge>
      </div>

      {citedFor && (
        <p className="mt-2 text-sm text-ink-700">
          <span className="font-medium text-ink-800">Cited for:</span>{' '}
          {citedFor}
        </p>
      )}

      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-500">
        <div className="flex gap-1">
          <dt className="font-medium">Type:</dt>
          <dd>{SOURCE_TYPE_LABEL[source.sourceType]}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">Jurisdiction:</dt>
          <dd>{source.jurisdiction}</dd>
        </div>
        <div className="flex gap-1">
          <dt className="font-medium">Accessed:</dt>
          <dd>{source.accessDate}</dd>
        </div>
      </dl>
    </li>
  );
}

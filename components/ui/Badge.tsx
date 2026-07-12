import type { ReactNode } from 'react';

type Tone = 'forest' | 'olive' | 'clay' | 'neutral';

const TONES: Record<Tone, string> = {
  forest: 'bg-forest-100 text-forest-800',
  olive: 'bg-olive-100 text-olive-800',
  clay: 'bg-clay-100 text-clay-800',
  neutral: 'bg-parchment-200 text-ink-700',
};

/** Small, static status pill. */
export function Badge({
  children,
  tone = 'neutral',
  className = '',
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

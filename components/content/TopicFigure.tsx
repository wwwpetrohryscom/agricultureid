import type { AnyContent, ContentType } from '@/types/content';

/**
 * Original, on-topic SVG figure used as the lead image for pages without a
 * photograph (typically abstract topics). Fully original vector art — no
 * third-party media, always relevant, zero licensing risk.
 */

// Simple, recognizable line-art scene per content type, drawn on a 400x225
// canvas in the brand palette.
function Scene({ type }: { type: ContentType }) {
  const stroke = '#234a34';
  const accent = '#6f6a2f';
  const soft = '#8db69a';
  switch (type) {
    case 'nutrient':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round">
          <path d="M200 165 V95" />
          <path
            d="M200 120 C170 120 150 100 150 72 C182 74 200 96 200 120 Z"
            fill={soft}
            stroke={stroke}
          />
          <path
            d="M200 108 C230 108 250 88 250 60 C218 62 200 84 200 108 Z"
            fill={accent}
            stroke={stroke}
          />
          <circle cx="200" cy="175" r="6" fill={accent} stroke="none" />
          <path d="M120 175 H280" stroke={soft} />
        </g>
      );
    case 'fertilizer':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round">
          <circle cx="150" cy="90" r="5" fill={accent} stroke="none" />
          <circle cx="168" cy="70" r="5" fill={accent} stroke="none" />
          <circle cx="186" cy="92" r="5" fill={accent} stroke="none" />
          <circle cx="158" cy="110" r="5" fill={accent} stroke="none" />
          <path d="M230 60 V150" />
          <path
            d="M230 100 C205 100 190 82 190 60 C216 62 230 80 230 100 Z"
            fill={soft}
            stroke={stroke}
          />
          <path d="M110 175 H300" stroke={soft} />
        </g>
      );
    case 'soil':
    case 'soil-topic':
      return (
        <g stroke={stroke} strokeWidth="3">
          <rect x="90" y="70" width="220" height="30" fill="#c08659" />
          <rect x="90" y="100" width="220" height="35" fill="#8a5a34" />
          <rect x="90" y="135" width="220" height="40" fill="#5c3e2a" />
          <path
            d="M150 70 C150 55 165 50 175 60"
            fill="none"
            stroke={soft}
            strokeWidth="4"
          />
        </g>
      );
    case 'climate':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round">
          <circle cx="150" cy="85" r="24" fill={accent} stroke="none" />
          <path d="M150 45 V32 M150 138 V125 M110 85 H97 M203 85 H190 M122 57 L113 48 M178 57 L187 48" />
          <path
            d="M235 95 a26 26 0 0 1 52 0 a18 18 0 0 1 -4 35 H239 a18 18 0 0 1 -4 -35Z"
            fill="#dceadf"
            stroke={stroke}
          />
          <path d="M245 150 v14 M265 150 v18 M285 150 v14" stroke={soft} />
        </g>
      );
    case 'irrigation-method':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round">
          <path d="M120 60 H280" strokeWidth="6" />
          <path d="M150 66 v20 M200 66 v20 M250 66 v20" stroke={soft} />
          <path
            d="M150 92 l0 14 M200 92 l0 14 M250 92 l0 14"
            stroke="#5d9270"
          />
          <path
            d="M200 150 C185 150 175 138 175 122 C196 124 200 138 200 150 Z"
            fill={soft}
            stroke={stroke}
          />
        </g>
      );
    case 'machinery':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round">
          <path d="M120 140 h70 l10 -35 h35 v35 h30" />
          <rect x="205" y="80" width="35" height="25" fill={soft} />
          <circle cx="150" cy="150" r="22" fill="#dceadf" />
          <circle cx="150" cy="150" r="8" fill={accent} stroke="none" />
          <circle cx="255" cy="152" r="14" fill="#dceadf" />
          <circle cx="255" cy="152" r="5" fill={accent} stroke="none" />
        </g>
      );
    case 'farming-system':
      return (
        <g fill="none" stroke={stroke} strokeWidth="3.5" strokeLinecap="round">
          <path d="M100 170 C150 150 250 150 300 170" />
          <path d="M100 150 C150 132 250 132 300 150" stroke={soft} />
          <path
            d="M170 130 v-30 M170 100 c-14 0 -22 -10 -22 -24 c16 0 22 10 22 24Z"
            fill={soft}
            stroke={stroke}
          />
          <path
            d="M235 120 l25 -22 l25 22 v30 h-50 Z"
            fill="#dceadf"
            stroke={stroke}
          />
        </g>
      );
    case 'plant-disease':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round">
          <path
            d="M200 175 C150 150 150 90 200 60 C250 90 250 150 200 175 Z"
            fill={soft}
            stroke={stroke}
          />
          <path d="M200 60 V175" />
          <circle cx="175" cy="110" r="7" fill={accent} stroke="none" />
          <circle cx="222" cy="95" r="6" fill={accent} stroke="none" />
          <circle cx="215" cy="140" r="8" fill={accent} stroke="none" />
        </g>
      );
    case 'pest':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round">
          <ellipse
            cx="200"
            cy="115"
            rx="26"
            ry="34"
            fill={soft}
            stroke={stroke}
          />
          <path d="M200 82 V70 M186 84 l-8 -12 M214 84 l8 -12" />
          <path d="M174 105 h-24 M174 120 h-26 M174 135 h-22 M226 105 h24 M226 120 h26 M226 135 h22" />
        </g>
      );
    case 'livestock':
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinejoin="round">
          <path
            d="M150 150 v-30 a45 30 0 0 1 100 0 v30"
            fill={soft}
            stroke={stroke}
          />
          <path
            d="M150 120 q-14 -6 -18 -24 q16 2 22 18"
            fill={soft}
            stroke={stroke}
          />
          <path d="M160 150 v18 M190 150 v18 M210 150 v18 M240 150 v18" />
        </g>
      );
    case 'crop':
    default:
      return (
        <g fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round">
          <path d="M200 175 V90" />
          <path
            d="M200 130 C165 130 145 108 145 78 C182 80 200 104 200 130 Z"
            fill={soft}
            stroke={stroke}
          />
          <path
            d="M200 115 C235 115 255 93 255 63 C218 65 200 89 200 115 Z"
            fill={accent}
            stroke={stroke}
          />
          <path d="M120 175 H280" stroke={soft} />
        </g>
      );
  }
}

export function TopicFigure({
  item,
  className = '',
}: {
  item: AnyContent;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-card border border-ink-100 bg-[#f7f3e8] ${className}`}
      role="img"
      aria-label={`Illustrative diagram for ${item.title}`}
    >
      <svg
        viewBox="0 0 400 225"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="225" fill="#fdfcf8" />
        <rect y="188" width="400" height="37" fill="#eef3ee" />
        <Scene type={item.contentType} />
      </svg>
    </div>
  );
}

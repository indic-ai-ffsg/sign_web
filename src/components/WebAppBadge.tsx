import { APP_URL, CTA_EYEBROW, CTA_LABEL } from '../content'
import './WebAppBadge.css'

type Props = {
  compact?: boolean
}

// Drawn to match the store badges it stands beside — black, same height, small line
// over a large one — so the three read as one set of ways in.
export function WebAppBadge({ compact = false }: Props) {
  return (
    <a className={compact ? 'web-app-badge web-app-badge--compact' : 'web-app-badge'} href={APP_URL}>
      <svg
        aria-hidden="true"
        className="web-app-badge__icon"
        fill="none"
        focusable="false"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <rect height="12" rx="1.5" width="18" x="3" y="4" />
        <path d="M9 20h6M12 16v4" />
      </svg>
      <span className="web-app-badge__text">
        {/* Kept out of the accessible name, so the link is announced as the same
            "Open web app" everywhere. */}
        <span aria-hidden="true" className="web-app-badge__eyebrow">
          {CTA_EYEBROW}
        </span>
        <span className="web-app-badge__label">{CTA_LABEL}</span>
      </span>
    </a>
  )
}

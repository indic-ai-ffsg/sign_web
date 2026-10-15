import { LottieScene } from './LottieScene'
import { stores } from '../content'
import playUrl from '../assets/lottie/google-play-download-button.json?url'
import appStoreUrl from '../assets/lottie/ios-store-download-now-button.json?url'
import './StoreBadges.css'

// Both badges are fully drawn and motionless from f100 to f150, then an outro scales
// them to zero by f210. Holding f120 keeps the finished badge and never reaches that.
const BADGE_STOP_FRAME = 120

type Props = {
  compact?: boolean
}

export function StoreBadges({ compact = false }: Props) {
  const badges = [
    { ...stores.play, src: playUrl },
    { ...stores.appStore, src: appStoreUrl },
  ]

  return (
    <div className={compact ? 'store-badges store-badges--compact' : 'store-badges'}>
      {badges.map((badge) => (
        <a
          aria-label={badge.label}
          className="store-badges__badge"
          href={badge.url}
          key={badge.url}
          rel="noreferrer"
          target="_blank"
        >
          <LottieScene
            className="store-badges__art"
            ratio={2}
            src={badge.src}
            stopAt={BADGE_STOP_FRAME}
          />
        </a>
      ))}
    </div>
  )
}

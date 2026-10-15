import { SentencePanel } from '../components/SentencePanel'
import { WebAppBadge } from '../components/WebAppBadge'
import { hero } from '../content'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">{hero.title}</h1>
          <div className="hero__body measure">
            {hero.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="hero__actions">
            <WebAppBadge />
            <p className="hero__note">{hero.ctaNote}</p>
          </div>
        </div>

        <div className="hero__panel">
          <SentencePanel />
        </div>
      </div>
    </section>
  )
}

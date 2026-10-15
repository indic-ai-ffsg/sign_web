import { LottieScene } from '../components/LottieScene'
import { WebAppBadge } from '../components/WebAppBadge'
import { closing } from '../content'
import { useReveal } from '../reveal'
import sceneUrl from '../assets/lottie/help-sign.json?url'
import './ClosingCta.css'

export function ClosingCta() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section aria-labelledby="closing-heading" className="section closing">
      <div className={`shell closing__inner ${reveal.className}`} ref={reveal.ref}>
        <div className="closing__copy">
          <h2 className="closing__title" id="closing-heading">
            {closing.heading}
          </h2>
          <p className="closing__body">{closing.body}</p>
          <WebAppBadge />
        </div>
        <LottieScene className="closing__scene" loop src={sceneUrl} />
      </div>
    </section>
  )
}

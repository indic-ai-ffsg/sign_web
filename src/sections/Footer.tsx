import { SocialIcon } from '../components/SocialIcon'
import { StoreBadges } from '../components/StoreBadges'
import { LOGO_ALT, footer, nav, social, stores } from '../content'
import logoUrl from '../assets/logo.png'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand">
          <img alt={LOGO_ALT} height={170} src={logoUrl} width={204} />
          <p className="site-footer__tagline">{footer.tagline}</p>
        </div>

        {/* The header hides these links below 75rem, so on a narrower screen this is
            the only way to move around the page. */}
        <nav className="site-footer__block">
          <h2 className="site-footer__heading">{footer.navHeading}</h2>
          <ul className="site-footer__links">
            <li>
              <a href="#journey">{nav.journey}</a>
            </li>
            <li>
              <a href="#shapes">{nav.shapes}</a>
            </li>
            <li>
              <a href="#practice">{nav.practice}</a>
            </li>
            <li>
              <a href="#schools">{nav.schools}</a>
            </li>
          </ul>
        </nav>

        <div className="site-footer__block">
          <h2 className="site-footer__heading">{stores.heading}</h2>
          <StoreBadges />
        </div>

        <div className="site-footer__block">
          <h2 className="site-footer__heading">{social.heading}</h2>
          <ul className="site-footer__social">
            {social.links.map((link) => (
              <li key={link.id}>
                <a
                  aria-label={link.label}
                  className="site-footer__social-link"
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialIcon id={link.id} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell site-footer__legal">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}

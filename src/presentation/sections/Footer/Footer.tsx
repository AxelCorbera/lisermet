// Footer — copyright, links rápidos, redes sociales
// import { FaInstagram } from 'react-icons/fa';
import { es } from '../../../l10n/es';
import styles from './Footer.module.css';

export function Footer() {
  const { copyright, 
    // tagline, links, social, logoAlt 
  } = es.footer;

  return (
    <footer className={styles.footer}>
      {/* <div className={styles.container}>
        <div className={styles.brand}>
          <a href="#inicio" className={styles.logo}>
            <img src="./assets/logo.png" alt={logoAlt} className={styles.logoImg} />
            <span className={styles.logoFallback}>LISERMET</span>
          </a>
          <p className={styles.tagline}>{tagline}</p>
        </div>

        <nav className={styles.linksNav} aria-label="Links rápidos del footer">
          <ul className={styles.linksList}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social}>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={social.instagramLabel}
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div> */}

      <div className={styles.bottom}>
        <span className={styles.copyright}>{copyright}</span>
      </div>
    </footer>
  );
}

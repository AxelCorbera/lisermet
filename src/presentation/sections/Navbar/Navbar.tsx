// Barra de navegación fija — transparente sobre el hero, fondo oscuro al hacer scroll
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { es } from '../../../l10n/es';
import { Button } from '../../components/Button/Button';
import styles from './Navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { links, cta } = es.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <img src="./assets/logo.png" alt={es.hero.logoAlt} className={styles.logoImg} />
          <span className={styles.logoFallback}>LISERMET</span>
        </a>

        <nav className={[styles.nav, menuOpen ? styles.open : ''].filter(Boolean).join(' ')}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contacto" variant="primary" className={styles.ctaBtn} onClick={closeMenu}>
            {cta}
          </Button>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {menuOpen && <div className={styles.backdrop} onClick={closeMenu} />}
    </header>
  );
}

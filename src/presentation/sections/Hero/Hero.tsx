// Hero — sección de bienvenida a pantalla completa con imagen de fondo, tagline y CTAs
import { Button } from '../../components/Button/Button';
import { es } from '../../../l10n/es';
import styles from './Hero.module.css';

export function Hero() {
  const { tagline, subtitulo, cta, ctaSecundario } = es.hero;
  const taglineLines = tagline.split('\n');

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.badge}>Metalúrgica · San Martín, Buenos Aires</p>

        <h1 className={styles.tagline}>
          {taglineLines.map((line, i) => (
            <span key={i} className={styles.taglineLine}>
              {line}
            </span>
          ))}
        </h1>

        <div className={styles.accentLine} aria-hidden="true" />

        <p className={styles.subtitulo}>{subtitulo}</p>

        <div className={styles.ctas}>
          <Button href="#contacto" variant="primary">
            {cta}
          </Button>
          <Button href="#nosotros" variant="outline">
            {ctaSecundario}
          </Button>
        </div>
      </div>

      <a href="#nosotros" className={styles.scrollIndicator} aria-label="Desplazarse hacia abajo">
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

// Sección Quiénes Somos — historia, valores y fotografía de la empresa
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { es } from '../../../l10n/es';
import styles from './QuienesSomos.module.css';

export function QuienesSomos() {
  const ref = useScrollAnimation<HTMLElement>();
  const { sectionLabel, titulo, descripcion, descripcion2, valores, imagenAlt } = es.quienesSomos;

  return (
    <section id="nosotros" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.textCol}>
          <SectionTitle label={sectionLabel} title={titulo} />

          <p className={`${styles.descripcion} animate-on-scroll`}>{descripcion}</p>
          <p className={`${styles.descripcion} animate-on-scroll`}>{descripcion2}</p>

          {/* <ul className={styles.valores}>
            {valores.map((v, i) => (
              <li
                key={i}
                className={`${styles.valor} animate-on-scroll`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={styles.valorTitulo}>{v.titulo}</span>
                <span className={styles.valorDesc}>{v.descripcion}</span>
              </li>
            ))}
          </ul> */}
        </div>

        <div className={`${styles.imgCol} animate-on-scroll slide-right`}>
          <div className={styles.imgWrapper}>
            <img src="/assets/quienes-somos.jpg" alt={imagenAlt} className={styles.img} />
            <div className={styles.imgAccent} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

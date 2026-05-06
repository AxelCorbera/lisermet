// Sección Servicios — cards full-image con título visible y descripción en hover
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { getServicios } from '../../../data/repositories/serviciosRepository';
import { es } from '../../../l10n/es';
import styles from './Servicios.module.css';

export function Servicios() {
  const ref = useScrollAnimation<HTMLElement>();
  const servicios = getServicios();
  const { sectionLabel, titulo } = es.servicios;

  return (
    <section id="servicios" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <SectionTitle label={sectionLabel} title={titulo} light centered />

        <div className={styles.grid}>
          {servicios.map((s, i) => (
            <article
              key={s.id}
              className={`${styles.card} animate-on-scroll`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img src={s.imagen} alt={s.imagenAlt} className={styles.cardImg} />
              <div className={styles.hoverOverlay} aria-hidden="true">
                <p className={styles.cardDesc}>{s.descripcion}</p>
              </div>
              <div className={styles.cardBottom}>
                <h3 className={styles.cardTitle}>{s.titulo}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

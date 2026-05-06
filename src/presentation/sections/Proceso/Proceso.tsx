// Sección Proceso — flujo de 5 pasos de un proyecto nuevo, diseño horizontal con línea animada
import { FiMail, FiFileText, FiCheckCircle, FiSettings, FiPackage } from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { es } from '../../../l10n/es';
import styles from './Proceso.module.css';

const STEP_ICONS = [FiMail, FiFileText, FiCheckCircle, FiSettings, FiPackage];

export function Proceso() {
  const ref = useScrollAnimation<HTMLElement>();
  const { sectionLabel, titulo, subtitulo, pasos } = es.proceso;

  return (
    <section id="proceso" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <SectionTitle label={sectionLabel} title={titulo} centered light />
        <p className={`${styles.subtitulo} animate-on-scroll`}>{subtitulo}</p>

        <div className={`${styles.steps} animate-on-scroll`}>
          {/* Connecting line drawn behind circles */}
          <div className={styles.line} aria-hidden="true" />

          {pasos.map((paso, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={paso.id}
                className={`${styles.step} animate-on-scroll`}
                style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
              >
                {/* Number badge */}
                <span className={styles.number}>0{i + 1}</span>

                {/* Icon circle */}
                <div className={styles.iconCircle}>
                  <Icon size={26} aria-hidden="true" />
                </div>

                {/* Text */}
                <div className={styles.content}>
                  <h3 className={styles.stepTitle}>{paso.titulo}</h3>
                  {/* <p className={styles.stepDesc}>{paso.descripcion}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

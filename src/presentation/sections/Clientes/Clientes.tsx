// Sección Clientes — logos o nombres de empresas cliente con efecto hover
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { es } from '../../../l10n/es';
import styles from './Clientes.module.css';

export function Clientes() {
  const ref = useScrollAnimation<HTMLElement>();
  const { sectionLabel, titulo, subtitulo, items } = es.clientes;

  return (
    <section id="clientes" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <SectionTitle label={sectionLabel} title={titulo} centered />
        <p className={`${styles.subtitulo} animate-on-scroll`}>{subtitulo}</p>

        <div className={styles.grid}>
          {items.map((cliente, i) => (
            <div
              key={cliente.id}
              className={`${styles.logoCard} animate-on-scroll`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {cliente.logo ? (
                <img
                  src={cliente.logo}
                  alt={cliente.nombre}
                  className={styles.logoImg}
                  loading="lazy"
                  onError={(e) => {
                    /* Si el logo no existe, mostrar el nombre */
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (sibling) sibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <span
                className={styles.logoNombre}
                style={{ display: cliente.logo ? 'none' : 'flex' }}
              >
                {cliente.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

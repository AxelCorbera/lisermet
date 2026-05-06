// Título de sección reutilizable — etiqueta de categoría + h2 + línea de acento
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  label: string;
  title: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionTitle({ label, title, light = false, centered = false }: SectionTitleProps) {
  const lines = title.split('\n');

  return (
    <div
      className={[
        styles.wrapper,
        light ? styles.light : '',
        centered ? styles.centered : '',
        'animate-on-scroll',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <div className={styles.line} />
    </div>
  );
}

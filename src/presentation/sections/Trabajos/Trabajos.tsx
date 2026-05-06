// Sección Trabajos — carousel con páginas de 6 imágenes y overlay al hover
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ImageModal } from '../../components/ImageModal/ImageModal';
import { getTrabajos } from '../../../data/repositories/trabajosRepository';
import { es } from '../../../l10n/es';
import styles from './Trabajos.module.css';

const ITEMS_PER_PAGE = 6;

export function Trabajos() {
  const ref = useScrollAnimation<HTMLElement>();
  const trabajos = getTrabajos();
  const { sectionLabel, titulo, subtitulo } = es.trabajos;

  const [page, setPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const totalPages = Math.ceil(trabajos.length / ITEMS_PER_PAGE);

  // Build array of pages, each with up to ITEMS_PER_PAGE items
  const pages = Array.from({ length: totalPages }, (_, pi) =>
    trabajos.slice(pi * ITEMS_PER_PAGE, (pi + 1) * ITEMS_PER_PAGE),
  );

  return (
    <section id="trabajos" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <SectionTitle label={sectionLabel} title={titulo} centered />
        <p className={`${styles.subtitulo} animate-on-scroll`}>{subtitulo}</p>

        <div className={`${styles.carouselWrapper} animate-on-scroll`}>
          {/* Prev button */}
          <button
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Trabajos anteriores"
          >
            <FiChevronLeft size={28} />
          </button>

          {/* Viewport */}
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((pageItems, pi) => (
                <div key={pi} className={styles.page}>
                  {pageItems.map((t, i) => (
                    <div
                      key={t.id}
                      className={styles.item}
                      style={{ transitionDelay: `${i * 0.06}s` }}
                      onClick={() => setSelectedImage({ src: t.imagen, alt: t.alt })}
                    >
                      <img
                        src={t.imagen}
                        alt={t.alt}
                        className={styles.img}
                        loading="lazy"
                      />
                      <div className={styles.overlay} aria-hidden="true">
                        <span className={styles.overlayLabel}>{t.alt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Trabajos siguientes"
          >
            <FiChevronRight size={28} />
          </button>
        </div>

        {/* Dot indicators */}
        {totalPages > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1} de trabajos`}
              />
            ))}
          </div>
        )}
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        imageSrc={selectedImage?.src || ''}
        altText={selectedImage?.alt || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

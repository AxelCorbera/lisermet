// Hook para disparar animaciones de aparición al entrar en el viewport con IntersectionObserver
import { useEffect, useRef } from 'react';

export function useScrollAnimation<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options },
    );

    const targets = container.querySelectorAll<HTMLElement>('.animate-on-scroll');
    targets.forEach((el) => observer.observe(el));

    if (container.classList.contains('animate-on-scroll')) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

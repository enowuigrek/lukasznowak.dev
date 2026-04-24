import { useEffect } from 'react';

/**
 * Hook globalny — obsługuje:
 * IntersectionObserver dla .fade-in i .glitch-in (dodaje .visible)
 *
 * Używany zarówno na HomePage jak i na ProjectPage
 */
export default function useGlitchEffects() {
  useEffect(() => {
    const animElements = document.querySelectorAll('.fade-in, .glitch-in, .slide-in-left, .slide-in-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    animElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

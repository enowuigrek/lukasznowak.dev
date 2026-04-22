import { useEffect, useRef } from 'react';

/**
 * Hook globalny — obsługuje:
 * 1. IntersectionObserver dla .fade-in i .glitch-in (dodaje .visible)
 * 2. Scroll glitch — RGB split na pseudo-elementach przy scrollowaniu
 *
 * Używany zarówno na HomePage jak i na ProjectPage
 */
export default function useGlitchEffects() {
  const scrollTimeout = useRef(null);

  // Fade-in / glitch-in animations (staggered)
  useEffect(() => {
    const animElements = document.querySelectorAll('.fade-in, .glitch-in');
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

  // Scroll glitch effect — RGB split przy scrollowaniu
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const dir = currentScrollY > lastScrollY ? 1 : -1;
      lastScrollY = currentScrollY;

      document.documentElement.style.setProperty('--scroll-dir', dir);
      document.documentElement.classList.add('scroll-glitch-active');

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove('scroll-glitch-active');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);
}

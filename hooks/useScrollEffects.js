import { useEffect } from 'react';

export default function useScrollEffects() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ─── vhsIn / cardIn — wejście elementów ───
    const vhsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          vhsObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.vhs-in, .card-in').forEach(el => vhsObserver.observe(el));

    // ─── wipeIn — etykiety sekcji wjeżdżają jak pasek na taśmie ───
    const wipeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          wipeObserver.unobserve(entry.target);
        });
      },
      { threshold: 0 }
    );
    const labels = document.querySelectorAll('.label');
    labels.forEach(el => {
      el.classList.add('wipe-in');
      wipeObserver.observe(el);
    });

    // ─── trackingBar — pasek zakłóceń po screenshocie ───
    const trackingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const visual = entry.target;
          const bar = visual.querySelector('.tracking-bar');
          if (bar) {
            bar.style.animation = 'none';
            void bar.offsetWidth;
            bar.style.animation = '';
            visual.classList.add('tracking-active');
          }
          trackingObserver.unobserve(visual);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.project-card-visual').forEach(el => trackingObserver.observe(el));

    // ─── rgbSplit — rozjazd kanałów RGB na tytule projektu ───
    const rgbObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('rgb-split');
          rgbObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.rgb-split-target').forEach(el => rgbObserver.observe(el));

    // ─── Parallax na mockupach (skip gdy reduced-motion) ───
    let parallaxHandler = null;
    if (!prefersReduced) {
      const mockups = Array.from(document.querySelectorAll('.project-card-visual'));
      parallaxHandler = () => {
        mockups.forEach(el => {
          const rect = el.getBoundingClientRect();
          const p = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
          el.style.transform = `translateY(${(p * -18).toFixed(1)}px)`;
        });
      };
      window.addEventListener('scroll', parallaxHandler, { passive: true });
      parallaxHandler();
    }

    return () => {
      vhsObserver.disconnect();
      wipeObserver.disconnect();
      trackingObserver.disconnect();
      rgbObserver.disconnect();
      if (parallaxHandler) {
        window.removeEventListener('scroll', parallaxHandler);
      }
    };
  }, []);
}

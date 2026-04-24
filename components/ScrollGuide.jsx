'use client';

import { useEffect, useState } from 'react';
import '../styles/scroll-guide.css';

/**
 * ScrollGuide — pionowy "playhead" po prawej stronie viewport.
 * - Pokazuje numer aktualnej sekcji (01/12) i jej label
 * - Cienka pionowa linia z kropką, która podąża za scrollem
 * - Glyph poniżej dryfuje raz w lewo, raz w prawo (zależnie od indexu sekcji)
 * - Ukrywa się na hero (najlepiej żeby nie zasłaniał intra) i na mobile
 */
export default function ScrollGuide() {
  const [sections, setSections] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  // Pobierz sekcje przy mount
  useEffect(() => {
    const found = Array.from(document.querySelectorAll('main .section[id]'));
    const data = found.map((el) => ({
      id: el.id,
      label: el.dataset.guide || el.id.replace(/-/g, ' '),
      el,
    }));
    setSections(data);
  }, []);

  // Track aktywnej sekcji + progress
  useEffect(() => {
    if (sections.length === 0) return;

    const handleScroll = () => {
      const vh = window.innerHeight;
      const midline = window.scrollY + vh * 0.45;

      let nextIdx = 0;
      sections.forEach((s, i) => {
        const top = s.el.offsetTop;
        if (midline >= top) nextIdx = i;
      });
      setActiveIdx(nextIdx);

      // Progress wewnątrz sekcji
      const current = sections[nextIdx]?.el;
      if (current) {
        const top = current.offsetTop;
        const h = current.offsetHeight || 1;
        const p = Math.min(1, Math.max(0, (midline - top) / h));
        setProgress(p);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sections]);

  if (sections.length === 0) return null;

  const total = sections.length;
  const current = sections[activeIdx];
  const onHero = current?.id === 'hero';
  const dir = activeIdx % 2 === 0 ? -1 : 1; // -1 = left drift, 1 = right

  return (
    <aside
      className={`scroll-guide ${onHero ? 'hidden' : 'visible'}`}
      aria-hidden="true"
      style={{ '--guide-progress': progress, '--guide-dir': dir }}
    >
      <div className="scroll-guide-rail">
        <span className="scroll-guide-dot" />
      </div>
      <div className="scroll-guide-meta">
        <span className="scroll-guide-counter">
          {String(activeIdx + 1).padStart(2, '0')}
          <span className="scroll-guide-divider">/</span>
          {String(total).padStart(2, '0')}
        </span>
        <span className="scroll-guide-label">{current?.label}</span>
        <span className="scroll-guide-glyph">▼</span>
      </div>
    </aside>
  );
}

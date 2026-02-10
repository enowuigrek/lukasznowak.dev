import { useEffect, useRef, useCallback } from 'react';
import '../styles/glitch.css';

export default function GlitchText({ text, as: Tag = 'h1', className = '' }) {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Dystans od centrum elementu — normalizowany do -3..3
    const dx = ((e.clientX - centerX) / (window.innerWidth / 2)) * 3;
    const dy = ((e.clientY - centerY) / (window.innerHeight / 2)) * 3;

    ref.current.style.setProperty('--glitch-x', dx.toFixed(2));
    ref.current.style.setProperty('--glitch-y', dy.toFixed(2));
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <Tag
      ref={ref}
      className={`glitch-text ${className}`}
      data-text={text}
    >
      {text}
    </Tag>
  );
}

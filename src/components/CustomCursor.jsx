import { useEffect, useRef, useCallback } from 'react';
import '../styles/cursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const rafId = useRef(null);

  const handleMouseMove = useCallback((e) => {
    target.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseDown = useCallback(() => {
    cursorRef.current?.classList.add('clicking');
  }, []);

  const handleMouseUp = useCallback(() => {
    cursorRef.current?.classList.remove('clicking');
  }, []);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const animate = () => {
      // Lerp
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;

      const cursorSize = isHovering.current ? 32 : 20;
      const dotSize = 3;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${pos.current.x - cursorSize}px, ${pos.current.y - cursorSize}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${target.current.x - dotSize}px, ${target.current.y - dotSize}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    // Hover detection for interactive elements
    const handleMouseOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover], input, textarea');
      if (el) {
        isHovering.current = true;
        cursorRef.current?.classList.add('hovering');
        dotRef.current?.classList.add('hovering');
      }
    };

    const handleMouseOut = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover], input, textarea');
      if (el) {
        isHovering.current = false;
        cursorRef.current?.classList.remove('hovering');
        dotRef.current?.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}

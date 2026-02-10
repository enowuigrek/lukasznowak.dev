import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar({ activeSection, scrollContainerRef }) {
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 50);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  // Logo widoczne tylko gdy NIE jesteśmy na hero
  useEffect(() => {
    setLogoVisible(activeSection !== 'hero');
  }, [activeSection]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'uslugi', label: 'Usługi' },
    { id: 'projekty', label: 'Projekty' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <button
        className={`navbar-logo glitch-logo ${logoVisible ? 'visible' : ''}`}
        onClick={() => scrollTo('hero')}
        data-text="ŁUKASZ NOWAK"
      >
        ŁUKASZ NOWAK
      </button>

      <ul className="navbar-links">
        {links.map(({ id, label }) => (
          <li key={id}>
            <button
              className={`navbar-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

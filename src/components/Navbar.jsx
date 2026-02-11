import { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/navbar.css';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);

  // Scroll listener na window
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo widoczne tylko gdy NIE jesteśmy na hero
  useEffect(() => {
    setLogoVisible(activeSection !== 'hero');
  }, [activeSection]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Interactive cursor glitch on logo
  const handleLogoMouseMove = useCallback((e) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const dx = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 4;
    const dy = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * 2;
    logoRef.current.style.setProperty('--logo-glitch-x', dx.toFixed(2));
    logoRef.current.style.setProperty('--logo-glitch-y', dy.toFixed(2));
  }, []);

  const handleLogoMouseLeave = useCallback(() => {
    if (!logoRef.current) return;
    logoRef.current.style.setProperty('--logo-glitch-x', '0');
    logoRef.current.style.setProperty('--logo-glitch-y', '0');
  }, []);

  const links = [
    { id: 'uslugi', label: 'Usługi' },
    { id: 'projekty', label: 'Projekty' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <button
          ref={logoRef}
          className={`navbar-logo glitch-logo ${logoVisible ? 'visible' : ''}`}
          onClick={() => scrollTo('hero')}
          data-text="ŁUKASZ NOWAK"
          onMouseMove={handleLogoMouseMove}
          onMouseLeave={handleLogoMouseLeave}
        >
          ŁUKASZ NOWAK
        </button>

        {/* Desktop links */}
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

        {/* Hamburger button — mobile only */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`mobile-menu-link glitch-word ${activeSection === id ? 'active' : ''}`}
                onClick={() => scrollTo(id)}
                data-text={label}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';
import GlitchText from './GlitchText';
import '../styles/hero.css';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const subtitleWords = [
    { text: 'Strony WWW', key: 'strony' },
    { text: 'E-commerce', key: 'ecom' },
    { text: 'Aplikacje webowe', key: 'web' },
  ];

  // Autorskie marki — klikalne logo. Miejsce na kolejne (Peria, Job Odyssey, etc.)
  const brands = [
    { slug: 'when', label: 'WHEN', logo: '/when-logo.svg', href: '/projekt/when' },
  ];

  return (
    <section className="section hero" id="hero" data-guide="Intro">


      <div className="hero-inner fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            <GlitchText text="ŁUKASZ" as="span" className="hero-title-line" />
            <GlitchText text="NOWAK" as="span" className="hero-title-line" />
          </h1>

          <p className="hero-description">
            Zanim zacznę cokolwiek robić, pytam co nie działa.
            Nie każdy problem rozwiązuje strona.
          </p>

          <p className="hero-subtitle">
            {subtitleWords.map((word, i) => (
              <span key={word.key}>
                <span className="glitch-word" data-text={word.text}>{word.text}</span>
                {i < subtitleWords.length - 1 && (
                  <span className="hero-subtitle-dot">&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span>
                )}
              </span>
            ))}
          </p>

          <button
            className="hero-cta glitch-hover"
            data-text="UMÓW 15-MINUTOWĄ DIAGNOZĘ"
            onClick={scrollToContact}
          >
            <div className="glitch-bg-blue" />
            <div className="glitch-bg-red" />
            <span>UMÓW 15-MINUTOWĄ DIAGNOZĘ</span>
            <span className="arrow">&rarr;</span>
          </button>
        </div>

        <div className="hero-brands">
          <span className="hero-brands-label">Autorskie marki</span>
          <div className="hero-brands-list">
            {brands.map(({ slug, label, logo, href }) => (
              <Link
                key={slug}
                href={href}
                className="hero-brand glitch-hover"
                data-text={label}
                aria-label={`Zobacz projekt ${label}`}
              >
                <div className="glitch-bg-blue" />
                <div className="glitch-bg-red" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={`${label} — logo`} className="hero-brand-logo" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-indicator-text">SCROLL</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}

'use client';

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

  return (
    <section className="section hero" id="hero" data-guide="Intro">


      <div className="hero-content fade-in">
        <h1 className="hero-title">
          <GlitchText text="ŁUKASZ" as="span" className="hero-title-line" />
          <GlitchText text="NOWAK" as="span" className="hero-title-line" />
        </h1>

        <p className="hero-description">
          Projektuję i koduję strony internetowe, sklepy i narzędzia webowe.
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

        <div className="hero-status">
          <span className="hero-status-dot" />
          Dostępny do współpracy
        </div>

        <button
          className="hero-cta glitch-hover"
          data-text="POROZMAWIAJMY"
          onClick={scrollToContact}
        >
          <div className="glitch-bg-blue" />
          <div className="glitch-bg-red" />
          <span>POROZMAWIAJMY</span>
          <span className="arrow">&rarr;</span>
        </button>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-indicator-text">SCROLL</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}

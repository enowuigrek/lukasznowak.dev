import GlitchText from './GlitchText';
import '../styles/hero.css';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section hero" id="hero">
      <div className="hero-grid" />

      <div className="hero-content fade-in">
        <span className="label hero-label">Portfolio / {new Date().getFullYear()}</span>

        <GlitchText text="ŁUKASZ" className="hero-title" />
        <GlitchText text="NOWAK" className="hero-title" />

        <p className="hero-subtitle">
          Projekty webowe&nbsp;&nbsp;•&nbsp;&nbsp;E-commerce&nbsp;&nbsp;•&nbsp;&nbsp;Automatyzacje
        </p>

        <button
          className="hero-cta glitch-hover"
          data-text="POROZMAWIAJMY →"
          onClick={scrollToContact}
        >
          <div className="glitch-bg-blue" />
          <div className="glitch-bg-red" />
          <span>POROZMAWIAJMY</span>
          <span className="arrow">→</span>
        </button>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-indicator-text">SCROLL</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}

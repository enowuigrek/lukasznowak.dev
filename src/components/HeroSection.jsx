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
    <section className="section hero" id="hero">
      <div className="hero-grid" />

      <div className="hero-content fade-in">
        <GlitchText text="ŁUKASZ" className="hero-title" />
        <GlitchText text="NOWAK" className="hero-title" />

        <p className="hero-description">
          Tworzę strony, sklepy i&nbsp;narzędzia, które pracują na Twój biznes — i&nbsp;przy okazji dobrze wyglądają.
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

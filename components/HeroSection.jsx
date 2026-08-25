'use client';

import '../styles/hero.css';

export default function HeroSection() {
  return (
    <section className="section section--light hero" id="hero" data-guide="Intro">
      <div className="hero-inner">
        <h1 className="hero-title">Łukasz Nowak</h1>
        <p className="hero-subtitle">Systemy rezerwacji, sklepy, panele.</p>
        <p className="hero-description">
          Przejmują to co odciąga Cię od tego, co naprawdę robisz.
        </p>
      </div>
    </section>
  );
}

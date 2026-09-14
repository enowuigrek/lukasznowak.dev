'use client';

import '../styles/hero.css';

export default function HeroSection() {
  return (
    <section className="section section--light hero" id="hero" data-guide="Intro">
      <div className="hero-inner">
        <p className="label hero-label">Robię strony i aplikacje · Częstochowa</p>
        <h1 className="hero-title">Łukasz Nowak</h1>
        <p className="hero-description">
          Żebyś mógł skupić się na tym, co naprawdę robisz.
        </p>
        <div className="hero-pills">
          {['Rezerwacje', 'E-commerce', 'Sklepy', 'Strony', 'SEO'].map(tag => (
            <span key={tag} className="hero-pill">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

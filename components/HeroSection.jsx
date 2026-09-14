'use client';

import '../styles/hero.css';

export default function HeroSection() {
  return (
    <section className="section section--light hero" id="hero" data-guide="Intro">
      <div className="hero-inner">
        <h1 className="hero-title">Łukasz Nowak</h1>
        <div className="hero-pills">
          {['Rezerwacje', 'E-commerce', 'Sklepy', 'Strony', 'SEO'].map(tag => (
            <span key={tag} className="hero-pill">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

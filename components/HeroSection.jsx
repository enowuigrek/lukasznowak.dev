'use client';

import '../styles/hero.css';

const pills = ['Rezerwacje', 'E-commerce', 'Sklepy', 'Strony', 'SEO'];

export default function HeroSection() {
  return (
    <section className="section hero" id="hero" data-guide="Intro">

      {/* Video background — dodaj /hero.webm i /hero.mp4 (H.264, <2MB, 6-10s loop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="hero-video"
        aria-hidden="true"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient od dołu */}
      <div className="hero-gradient" aria-hidden="true" />

      {/* Scanline CRT */}
      <div className="hero-scanline" aria-hidden="true" />

      <div className="hero-inner">
        <h1 className="hero-title">Łukasz Nowak</h1>
        <div className="hero-pills">
          {pills.map(tag => (
            <span key={tag} className="hero-pill">{tag}</span>
          ))}
        </div>
      </div>

    </section>
  );
}

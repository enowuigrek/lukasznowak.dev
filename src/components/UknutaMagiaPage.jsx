import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VHSOverlay from './VHSOverlay';
import Footer from './Footer';
import useGlitchEffects from '../hooks/useGlitchEffects';
import '../styles/project-page.css';
import '../styles/peria-page.css';
import '../styles/uknuta-magia-page.css';

const stack = [
  'React',
  'SCSS',
  'Supabase',
  'EmailJS',
  'Netlify',
];

export default function UknutaMagiaPage() {
  useGlitchEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <VHSOverlay />

      <nav className="project-page-nav">
        <Link
          to="/"
          className="project-page-back glitch-word"
          data-text="← POWRÓT"
        >
          ← POWRÓT
        </Link>
      </nav>

      <main>
        {/* Hero */}
        <section className="project-page-hero">
          <h1 className="uknuta-title">Uknuta Magia</h1>
          <p className="peria-tagline">
            Bajka dla dzieci — prosto do rąk małego czytelnika.
          </p>
          <p className="peria-intro">
            Sklep internetowy dla autora. Jeden produkt, zero kosztów miesięcznych. Zamówienie, płatność, potwierdzenie — i&nbsp;książka jedzie.
          </p>
        </section>

        {/* Historia */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Historia">Historia</span>
          </div>
          <div className="uknuta-historia-layout">
            <div>
              <p className="peria-text">
                Adrian napisał bajkę dla dzieci. Gotową do druku, gotową do sprzedaży — brakowało tylko miejsca, gdzie ktoś mógłby ją zamówić. Bez Allegro, bez prowizji, bez miesięcznych abonamentów.
              </p>
              <p className="peria-text" style={{ marginTop: '1.5rem' }}>
                Potrzebował prostego sklepu dopasowanego do jednej książki i&nbsp;jednego autora. Czegoś, co wygląda jak jego, a&nbsp;nie jak kolejny szablon.
              </p>
            </div>
            <img
              src="/uknuta-magia-logo.svg"
              alt="Uknuta Magia — okładka"
              className="uknuta-cover"
            />
          </div>
        </section>

        {/* Co powstało? */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Co powstało?">Co powstało?</span>
          </div>
          <p className="peria-text">
            Prosty sklep z&nbsp;jednym produktem. Zamawiasz, płacisz, dostajesz maila z&nbsp;potwierdzeniem. Adrian dostaje powiadomienie i&nbsp;widzi zamówienie w&nbsp;swoim panelu — imię, adres, status. Pakuje i&nbsp;wysyła. Koniec procesu.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Panel do zarządzania zamówieniami też napisany ode mnie — Adrian nie potrzebuje żadnych zewnętrznych narzędzi. Wszystko w&nbsp;jednym miejscu, dostosowane do jego potrzeb.
          </p>
        </section>

        {/* Bez kosztów */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Zero kosztów miesięcznych">Zero kosztów miesięcznych</span>
          </div>
          <p className="peria-text">
            Supabase i&nbsp;Netlify na darmowych planach — zamówienia wpadają do bazy, panel działa, maile idą. Jedyny koszt to domena.
          </p>
          <blockquote className="peria-blockquote">
            Sprzedaż okazjonalna, zgodna z&nbsp;obowiązującymi przepisami prawa. Bez działalności, bez kasy fiskalnej, bez zbędnej biurokracji.
          </blockquote>
        </section>

        {/* CTA */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Książka jest. Możesz zajrzeć.">Książka jest. Możesz zajrzeć.</span>
          </div>
          <a
            href="https://uknutamagia.pl"
            className="uknuta-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="uknuta-cta-title">Uknuta Magia</span>
          </a>
          <p className="strzykawa-cta-url">uknutamagia.pl</p>
        </section>

        {/* Stack */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Stack">Stack</span>
          </div>
          <div className="strzykawa-stack">
            {stack.map((tech) => (
              <span key={tech} className="strzykawa-stack-tag">{tech}</span>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

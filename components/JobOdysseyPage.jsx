'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import VHSOverlay from './VHSOverlay';
import Footer from './Footer';
import useGlitchEffects from '../hooks/useGlitchEffects';
import '../styles/project-page.css';
import '../styles/peria-page.css';
import '../styles/job-odyssey-page.css';

const stack = [
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS 4',
  'React Router v7',
  'Supabase',
  'PostgreSQL',
  'Supabase Edge Functions',
  '@react-pdf/renderer',
  'Netlify',
];

export default function JobOdysseyPage() {
  useGlitchEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <VHSOverlay />

      <nav className="project-page-nav">
        <Link
          href="/"
          className="project-page-back glitch-word"
          data-text="← POWRÓT"
        >
          ← POWRÓT
        </Link>
      </nav>

      <main>
        {/* Hero */}
        <section className="project-page-hero">
          <h1 className="jo-title">Job <span>Odyssey</span></h1>
          <p className="peria-tagline">
            Osobisty CRM do szukania pracy — wszystko w jednym miejscu.
          </p>
          <p className="peria-intro">
            Webowa aplikacja, która zamienia chaos rekrutacyjny w&nbsp;kontrolowany proces. Aplikacje na kanbanie, generator CV z&nbsp;własnym edytorem, śledzenie czy rekruter otworzył Twoje linki — bez rozrzuconych zakładek, bez arkuszy.
          </p>
        </section>

        {/* Pomysł */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Pomysł">Pomysł</h2>
          </div>
          <p className="peria-text">
            Szukanie pracy wygląda zawsze tak samo — dziesiątki zakładek, rozmowy w kalendarzu, CV w czterech wersjach rozrzucone po folderach. Każde narzędzie jest gdzie indziej. Żadne nie rozmawia z&nbsp;drugim.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Job Odyssey to jedno miejsce na cały proces. Bez miesięcznych opłat, bez zbędnych funkcji — narzędzie zbudowane pod własne potrzeby i otwarte dla każdego.
          </p>
        </section>

        {/* Aplikacje */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Aplikacje">Aplikacje</h2>
          </div>
          <p className="peria-text">
            Dwa widoki — lista z&nbsp;rozwijanymi kartami albo kanban z&nbsp;dziewięcioma kolumnami. Drag&#8209;and&#8209;drop między statusami: od "zapisane" przez "zaproszenie do rozmowy" aż do "oferta odrzucona". Dla każdej aplikacji: firma, stanowisko, link do oferty, wynagrodzenie, źródło, notatki.
          </p>
          <blockquote className="peria-blockquote">
            Zmiana statusu na zaproszenie automatycznie pyta o&nbsp;dodanie wpisu w&nbsp;kalendarzu rozmów.
          </blockquote>
        </section>

        {/* Generator CV */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Generator CV">Generator CV</h2>
          </div>
          <p className="peria-text">
            Wbudowany edytor CV — bez Canvy, bez Worda. Wypełniasz formularz, podglądasz wynik w&nbsp;HTML, generujesz PDF jednym kliknięciem. Sekcje można zwijać, włączać i&nbsp;wyłączać. Linki kontaktowe zaciągają się z&nbsp;profilu.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Możesz mieć kilka wersji CV — każda dostosowana do innego stanowiska, każda z własną nazwą i&nbsp;wygenerowanym plikiem PDF w&nbsp;chmurze.
          </p>
        </section>

        {/* Śledzenie linków */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Śledzenie linków">Śledzenie linków</h2>
          </div>
          <p className="peria-text">
            Przy każdej aplikacji możesz wygenerować otagowane CV — PDF identyczny wizualnie, ale z&nbsp;linkami przekierowującymi przez serwer. Wysyłasz CV rekruterowi. Kliknie LinkedIn albo GitHub — dostajesz powiadomienie.
          </p>
          <blockquote className="peria-blockquote">
            Wiesz, że ktoś przejrzał CV — zanim oddzwoni. Albo nie oddzwoni — też wiesz.
          </blockquote>
        </section>

        {/* Rozmowy i pytania */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Rozmowy i pytania">Rozmowy i pytania</h2>
          </div>
          <p className="peria-text">
            Rozmowy kwalifikacyjne mają własny widok — data, godzina, link do Meet albo Zoom, notatki co poszło dobrze i&nbsp;co mogło pójść lepiej. Powiązane z&nbsp;konkretną aplikacją.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Baza pytań rekrutacyjnych z&nbsp;kategoriami i&nbsp;poziomami trudności. Licznik ile razy dane pytanie padło na rozmowie. Do tego biblioteka historii STAR — Situation, Task, Action, Result — z&nbsp;tagami i&nbsp;ratingiem skuteczności.
          </p>
        </section>

        {/* Stack */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Stack">Stack</h2>
          </div>
          <div className="strzykawa-stack">
            {stack.map((tech) => (
              <span key={tech} className="strzykawa-stack-tag">{tech}</span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <h2 className="label" data-text="Działa. Możesz zajrzeć.">Działa. Możesz zajrzeć.</h2>
          </div>
          <p className="peria-text">
            Aplikacja jest dostępna za darmo — wystarczy konto.
          </p>
          <a
            href="https://job-odyssey.netlify.app"
            className="strzykawa-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="jo-cta-label">Otwórz Job Odyssey →</span>
          </a>
          <p className="strzykawa-cta-url">job-odyssey.netlify.app</p>
        </section>

        {/* Postaw kawę */}
        <section className="project-page-coffee glitch-in">
          <div className="coffee-inner">
            <h2 className="label" data-text="Wsparcie">Wsparcie</h2>
            <h2 className="coffee-heading">
              Aplikacja pomogła Ci w&nbsp;rekrutacji?
            </h2>
            <p className="coffee-text">
              Job Odyssey jest darmowe i&nbsp;open source. Jeśli ułatwiło Ci szukanie pracy — możesz postawić kawę.
            </p>
            <a
              href="https://buycoffee.to/lukasznowak.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://buycoffee.to/static/img/share/share-button-white.png"
                alt="Postaw mi kawę na buycoffee.to"
                className="buycoffee-btn"
              />
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

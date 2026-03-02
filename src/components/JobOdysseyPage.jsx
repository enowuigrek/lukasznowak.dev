import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VHSOverlay from './VHSOverlay';
import Footer from './Footer';
import useGlitchEffects from '../hooks/useGlitchEffects';
import '../styles/project-page.css';
import '../styles/peria-page.css';
import '../styles/job-odyssey-page.css';

const stack = [
  'Electron',
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS 4',
  'React Router v7',
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
          <h1 className="jo-title">Job <span>Odyssey</span></h1>
          <p className="peria-tagline">
            Osobisty CRM do szukania pracy — wszystko w jednym miejscu, dane tylko u Ciebie.
          </p>
          <p className="peria-intro">
            Desktopowa aplikacja, która zamienia chaos rekrutacyjny w&nbsp;kontrolowany proces. Aplikacje, rozmowy, CV, pytania, historii STAR — bez chmury, bez subskrypcji.
          </p>
        </section>

        {/* Pomysł */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Pomysł">Pomysł</span>
          </div>
          <p className="peria-text">
            Szukanie pracy wygląda zawsze tak samo — dziesiątki zakładek w przeglądarce, rozmowy w kalendarzu, pytania na karteczkach, CV w czterech wersjach rozrzucone po folderach. Każde narzędzie jest gdzie indziej. Żadne nie rozmawia z drugim.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Job Odyssey to jedno miejsce na cały proces. Nie kolejna aplikacja SaaS z miesięczną opłatą — desktopowy program, który trzyma dane lokalnie na Twoim komputerze. Nic nie idzie do żadnej chmury.
          </p>
        </section>

        {/* Dashboard */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Dashboard">Dashboard</span>
          </div>
          <p className="peria-text">
            Otwierasz aplikację i od razu widzisz co się dzieje — ile aplikacji wysłanych, ile aktywnych, jaki procent pracodawców w ogóle odpowiada. Wykresy, alerty o dzisiejszych rozmowach, najbliższe zaplanowane spotkania. Rekrutacja jako liczby, nie jako chaos.
          </p>
        </section>

        {/* Aplikacje */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Aplikacje">Aplikacje</span>
          </div>
          <p className="peria-text">
            Dwa widoki — lista z rozwijanymi kartami albo kanban z dziewięcioma kolumnami. Drag&#8209;and&#8209;drop między statusami: od "zapisane" przez "rozmowa" aż do "oferta odrzucona" czy "wycofany". Dla każdej aplikacji: firma, stanowisko, link, wynagrodzenie, źródło, notatki, powiązane rozmowy.
          </p>
          <blockquote className="peria-blockquote">
            Zmiana statusu na zaproszenie do rozmowy automatycznie pyta o dodanie wpisu w kalendarzu rozmów.
          </blockquote>
        </section>

        {/* Rozmowy i więcej */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Rozmowy, CV, pytania">Rozmowy, CV, pytania</span>
          </div>
          <p className="peria-text">
            Rozmowy kwalifikacyjne mają własny kanban — data, godzina, link do Meet albo Zoom, notatki podzielone na trzy sekcje: co poszło dobrze, co mogło pójść lepiej, uwagi ogólne.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Baza CV śledzi wersje dopasowane do konkretnych stanowisk — słowa kluczowe dla ATS, licznik ile razy dane CV zostało użyte, upload PDF/DOC i otwieranie w domyślnej aplikacji.
          </p>
          <p className="peria-text" style={{ marginTop: '1.5rem' }}>
            Baza pytań rekrutacyjnych z kategoriami, poziomami trudności i licznikiem ile razy dane pytanie padło na rozmowie. Do tego biblioteka historii STAR — Situation, Task, Action, Result — z ratingiem skuteczności i tagami.
          </p>
        </section>

        {/* Dane lokalne */}
        <section className="peria-section glitch-in">
          <div className="peria-section-label">
            <span className="label" data-text="Dane lokalne">Dane lokalne</span>
          </div>
          <p className="peria-text">
            Wszystko siedzi w jednym pliku JSON na Twoim dysku. Żadnego logowania, żadnej synchronizacji, żadnych danych w czyjejś chmurze. Export i import z ustawień — backup kiedy chcesz, przywrócenie w sekundę.
          </p>
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

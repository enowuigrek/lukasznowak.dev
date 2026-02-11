import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import GlitchText from './GlitchText';
import VHSOverlay from './VHSOverlay';
import Footer from './Footer';
import useGlitchEffects from '../hooks/useGlitchEffects';
import '../styles/project-page.css';

const projectData = {
  strzykawa: {
    title: 'STRZYKAWA',
    externalUrl: 'https://strzykawa.com',
    hasCoffee: false,
  },
  peria: {
    title: 'PERIA',
    externalUrl: null,
    hasCoffee: true,
  },
  'uknuta-magia': {
    title: 'UKNUTA MAGIA',
    externalUrl: 'https://uknutamagia.pl',
    hasCoffee: false,
  },
  'job-odyssey': {
    title: 'JOB ODYSSEY',
    externalUrl: null,
    hasCoffee: true,
  },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData[slug];

  // Globalny hook — glitch-in observer + scroll glitch
  useGlitchEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-page">
        <VHSOverlay />
        <nav className="project-page-nav">
          <Link to="/" className="project-page-back glitch-word" data-text="← POWRÓT">
            ← POWRÓT
          </Link>
        </nav>
        <section className="project-page-hero">
          <GlitchText text="404" as="h1" className="project-page-title" />
          <p className="project-page-desc">Projekt nie znaleziony.</p>
        </section>
      </div>
    );
  }

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
      <section className="project-page-hero">
        <GlitchText text={project.title} as="h1" className="project-page-title" />
      </section>

      {/* Content */}
      <section className="project-page-content glitch-in">
        <div className="project-page-placeholder">
          <span className="label" data-text="Wkrótce">Wkrótce</span>
          <p className="project-page-placeholder-text">
            Instrukcje, szczegóły i linki do pobrania pojawią się tutaj.
          </p>
        </div>

        <div className="project-page-actions">
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              className="project-page-btn glitch-hover"
              data-text="ODWIEDŹ STRONĘ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="glitch-bg-blue" />
              <div className="glitch-bg-red" />
              <span>ODWIEDŹ STRONĘ</span>
            </a>
          )}
          {!project.externalUrl && (
            <a
              href="#"
              className="project-page-btn glitch-hover"
              data-text="POBIERZ"
              onClick={(e) => e.preventDefault()}
            >
              <div className="glitch-bg-blue" />
              <div className="glitch-bg-red" />
              <span>POBIERZ</span>
            </a>
          )}
        </div>
      </section>

      {/* Postaw kawę — tylko dla Peria i Job Odyssey */}
      {project.hasCoffee && (
        <section className="project-page-coffee glitch-in stagger-2">
          <div className="coffee-inner">
            <span className="label" data-text="Wsparcie">Wsparcie</span>
            <h2 className="coffee-heading">
              Aplikacja jest dla Ciebie przydatna?
            </h2>
            <p className="coffee-text">
              Możesz mi za nią postawić wirtualną kawę.
            </p>
            <a
              href="#"
              className="coffee-btn glitch-hover"
              data-text="POSTAW KAWĘ"
              onClick={(e) => e.preventDefault()}
            >
              <div className="glitch-bg-blue" />
              <div className="glitch-bg-red" />
              <span>POSTAW KAWĘ</span>
            </a>
          </div>
        </section>
      )}

      <Footer />
      </main>
    </div>
  );
}

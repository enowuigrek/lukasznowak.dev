import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import GlitchText from './GlitchText';
import VHSOverlay from './VHSOverlay';
import Footer from './Footer';
import '../styles/project-page.css';

const projectData = {
  peria: {
    title: 'PERIA',
  },
  'job-odyssey': {
    title: 'JOB ODYSSEY',
  },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-page">
        <VHSOverlay />
        <nav className="project-page-nav">
          <Link to="/" className="project-page-back glitch-hover" data-text="← POWRÓT">
            <div className="glitch-bg-blue" />
            <div className="glitch-bg-red" />
            <span>← POWRÓT</span>
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
          className="project-page-back glitch-hover"
          data-text="← POWRÓT"
        >
          <div className="glitch-bg-blue" />
          <div className="glitch-bg-red" />
          <span>← POWRÓT</span>
        </Link>
      </nav>

      <section className="project-page-hero">
        <GlitchText text={project.title} as="h1" className="project-page-title" />
      </section>

      {/* Placeholdery — tu będą instrukcje, linki do pobrania itp. */}
      <section className="project-page-content">
        <div className="project-page-placeholder">
          <span className="label">Wkrótce</span>
          <p className="project-page-placeholder-text">
            Instrukcje, szczegóły i linki do pobrania pojawią się tutaj.
          </p>
        </div>

        <div className="project-page-actions">
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
        </div>
      </section>

      {/* Buy me a coffee */}
      <section className="project-page-coffee">
        <div className="coffee-inner">
          <span className="label">Wsparcie</span>
          <h2 className="coffee-heading">
            Aplikacja jest dla Ciebie przydatna?
          </h2>
          <p className="coffee-text">
            Możesz mi za nią postawić wirtualną kawę.
          </p>
          <a
            href="#"
            className="coffee-btn glitch-hover"
            data-text="☕ POSTAW KAWĘ"
            onClick={(e) => e.preventDefault()}
          >
            <div className="glitch-bg-blue" />
            <div className="glitch-bg-red" />
            <span>☕ POSTAW KAWĘ</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

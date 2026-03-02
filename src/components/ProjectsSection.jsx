import { Link } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    category: 'E-commerce',
    description: 'Sklep online z kawą specialty — zbudowany na Shopify z autorskim frontendem w React. Filtrowanie produktów, koszyk, płatności online, wszystko dopasowane do marki.',
    tags: ['Sklep online', 'Kawa speciality', 'Zamówienia i dostawy', 'Płatności online'],
    href: '/projekt/strzykawa',
    logo: '/strzykawa-logo.png',
  },
  {
    number: '02',
    title: 'Peria',
    category: 'Aplikacja',
    description: 'Aplikacja do organizacji myśli i notatek głosowych. Transkrypcja mowy przez AI, inteligentny asystent do porządkowania treści. Dane zapisywane lokalnie — Twoje notatki zostają u Ciebie.',
    tags: ['Organizacja myśli', 'Notatki głosowe', 'Asystent AI', 'Zapis lokalny'],
    href: '/projekt/peria',
  },
  {
    number: '03',
    title: 'Job Odyssey',
    category: 'Aplikacja',
    description: 'Szukanie pracy potrafi być chaosem — dziesiątki ogłoszeń, różne etapy, maile do śledzenia. Job Odyssey pomaga ogarnąć cały proces: zapisujesz aplikacje, śledzisz statusy, widzisz statystyki. Koniec z arkuszami i karteczkami.',
    tags: ['Szukanie pracy', 'Śledzenie aplikacji', 'Dashboard', 'Organizacja procesów'],
    href: '/projekt/job-odyssey',
  },
  {
    number: '04',
    title: 'Uknuta Magia',
    category: 'E-commerce',
    description: 'Autorski sklep z książką — prosty i skuteczny. Prezentacja, koszyk, płatności i panel do zarządzania zamówieniami. Bez wielkich platform, bez prowizji — pełna kontrola nad sprzedażą.',
    tags: ['Sprzedaż książek', 'Sklep autorski', 'Koszyk z płatnościami', 'Panel zarządzania'],
    href: '/projekt/uknuta-magia',
    titleClass: 'project-card-title-gold',
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="projekty">
      <div className="projects-header glitch-in">
        <span className="label" data-text="Wybrane projekty">Wybrane projekty</span>
      </div>

      <div className="projects-grid">
        {projects.map(({ number, title, category, description, tags, href, logo, logoClass, titleClass }, index) => (
          <Link
            key={number}
            className={`project-card glitch-in stagger-${index + 1}`}
            to={href}
          >
            <div className="project-card-bg" />

            <div className="project-card-overlay">
              <span className="project-card-number">{number}</span>
              {logo ? (
                <img
                  src={logo}
                  alt={title}
                  className={logoClass || 'project-card-logo'}
                />
              ) : (
                <h3 className={titleClass || 'project-card-title'} data-text={title}>{title}</h3>
              )}
              {description && <p className="project-card-description">{description}</p>}
              <div className="project-card-tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-card-tag">{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

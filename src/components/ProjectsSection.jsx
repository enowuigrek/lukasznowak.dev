import { Link } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    category: 'E-commerce',
    tags: ['Sklep online', 'Kawa speciality', 'Zamówienia i dostawy', 'Płatności online'],
    href: '/projekt/strzykawa',
  },
  {
    number: '02',
    title: 'Peria',
    category: 'Aplikacja',
    tags: ['Organizacja myśli', 'Notatki głosowe', 'Asystent AI', 'Praca offline'],
    href: '/projekt/peria',
  },
  {
    number: '03',
    title: 'Uknuta Magia',
    category: 'E-commerce',
    tags: ['Sprzedaż książek', 'Sklep autorski', 'Koszyk i płatności', 'Panel zarządzania'],
    href: '/projekt/uknuta-magia',
  },
  {
    number: '04',
    title: 'Job Odyssey',
    category: 'Aplikacja',
    tags: ['Śledzenie rekrutacji', 'Dashboard', 'Statystyki aplikacji', 'Organizacja procesów'],
    href: '/projekt/job-odyssey',
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="projekty">
      <div className="projects-header glitch-in">
        <span className="label">Wybrane projekty</span>
      </div>

      <div className="projects-grid">
        {projects.map(({ number, title, category, tags, href }, index) => (
          <Link
            key={number}
            className={`project-card glitch-in stagger-${index + 1}`}
            to={href}
          >
            <div className="project-card-bg" />
            <span className="project-card-arrow">&nearr;</span>

            <div className="project-card-overlay">
              <span className="project-card-number">{number}</span>
              <span className="project-card-category">{category}</span>
              <h3 className="project-card-title" data-text={title}>{title}</h3>
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

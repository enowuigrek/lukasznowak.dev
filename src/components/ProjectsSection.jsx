import { Link } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    category: 'E-commerce',
    tags: ['Sklep online', 'Kawa speciality', 'Zamowienia i dostawy', 'Platnosci online'],
    href: 'https://strzykawa.com',
    external: true,
  },
  {
    number: '02',
    title: 'Peria',
    category: 'Aplikacja',
    tags: ['Organizacja mysli', 'Notatki glosowe', 'Asystent AI', 'Praca offline'],
    href: '/projekt/peria',
    external: false,
  },
  {
    number: '03',
    title: 'Uknuta Magia',
    category: 'E-commerce',
    tags: ['Sprzedaz ksiazek', 'Sklep autorski', 'Koszyk i platnosci', 'Panel zarzadzania'],
    href: 'https://uknutamagia.pl',
    external: true,
  },
  {
    number: '04',
    title: 'Job Odyssey',
    category: 'Aplikacja',
    tags: ['Sledzenie rekrutacji', 'Dashboard', 'Statystyki aplikacji', 'Organizacja procesow'],
    href: '/projekt/job-odyssey',
    external: false,
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="projekty">
      <div className="fade-in">
        <div className="projects-header">
          <span className="label">Wybrane projekty</span>
        </div>

        <div className="projects-grid">
          {projects.map(({ number, title, category, tags, href, external }) => {
            const content = (
              <>
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
              </>
            );

            if (external) {
              return (
                <a
                  key={number}
                  className="project-card"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={number} className="project-card" to={href}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

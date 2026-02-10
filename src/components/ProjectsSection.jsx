import { Link } from 'react-router-dom';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    category: 'E-commerce',
    tags: ['Kawa speciality', 'Shopify API', 'Sklep online', 'InPost'],
    pattern: 'pattern-1',
    href: 'https://strzykawa.com',
    external: true,
  },
  {
    number: '02',
    title: 'Peria',
    category: 'PWA',
    tags: ['Łap myśli', 'AI organizacja', 'Voice input', 'Offline'],
    pattern: 'pattern-2',
    href: '/projekt/peria',
    external: false,
  },
  {
    number: '03',
    title: 'Uknuta Magia',
    category: 'E-commerce',
    tags: ['Sprzedaż książek', 'Supabase', 'Panel admina', 'Checkout'],
    pattern: 'pattern-3',
    href: 'https://uknutamagia.pl',
    external: true,
  },
  {
    number: '04',
    title: 'Job Odyssey',
    category: 'Desktop app',
    tags: ['Tracker rekrutacji', 'Electron', 'Dashboard', 'CRM'],
    pattern: 'pattern-4',
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
          {projects.map(({ number, title, category, tags, pattern, href, external }) => {
            const content = (
              <>
                <div className={`project-card-bg ${pattern}`} />
                <span className="project-card-arrow">↗</span>

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

import Link from 'next/link';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    category: 'E-commerce',
    description: 'Sklep online z kawą specialty — zbudowany na Shopify z autorskim frontendem w React. Filtrowanie produktów, koszyk, płatności online, wszystko dopasowane do marki.',
    tags: ['Shopify', 'React', 'E-commerce'],
    href: '/projekt/strzykawa',
  },
  {
    number: '02',
    title: 'Peria',
    category: 'Aplikacja',
    description: 'Aplikacja do organizacji myśli i notatek głosowych. Transkrypcja mowy przez AI, inteligentny asystent do porządkowania treści. Dane zapisywane lokalnie.',
    tags: ['React', 'AI', 'Notatki głosowe'],
    href: '/projekt/peria',
  },
  {
    number: '03',
    title: 'Job Odyssey',
    category: 'Aplikacja',
    description: 'Osobisty CRM do szukania pracy. Kanban aplikacji, generator CV, śledzenie linków. Koniec z arkuszami i rozrzuconymi zakładkami.',
    tags: ['React', 'Supabase', 'SaaS'],
    href: '/projekt/job-odyssey',
  },
  {
    number: '04',
    title: 'Uknuta Magia',
    category: 'E-commerce',
    description: 'Autorski sklep z książką dla dzieci. Zamówienie, płatność, panel zarządzania. Zero kosztów miesięcznych — jedyny koszt to domena.',
    tags: ['React', 'Supabase', 'Sklep autorski'],
    href: '/projekt/uknuta-magia',
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="projekty" data-guide="Projekty">
      <div className="projects-header glitch-in">
        <h2 className="label" data-text="Wybrane projekty">Wybrane projekty</h2>
      </div>

      <div className="projects-grid">
        {projects.map(({ number, title, category, description, tags, href }, i) => (
          <Link
            key={number}
            href={href}
            className="project-card fade-in"
            style={{ '--card-i': i }}
          >
            <div className="project-card-header">
              <span className="project-card-number">{number}</span>
              <span className="project-card-category">{category}</span>
            </div>

            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-desc">{description}</p>

            <div className="project-card-footer">
              <div className="project-card-tags">
                {tags.map((tag) => (
                  <span key={tag} className="project-card-tag">{tag}</span>
                ))}
              </div>
              <span className="project-card-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

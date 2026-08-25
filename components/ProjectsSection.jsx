import Link from 'next/link';
import '../styles/projects.css';

// show: false — Peria, Job Odyssey, Uknuta Magia (projekty własne bez wdrożeń klientów)
const projects = [
  {
    number: '01',
    title: 'Strzykawa — palarnia kawy, Częstochowa',
    category: 'E-commerce',
    description: 'Headless Shopify z własnym frontendem React + Netlify. SEO setup z JSON-LD, Google Merchant Center i AEO Tracker monitorujący widoczność marki w odpowiedziach AI.',
    tags: ['Headless', 'Shopify', 'React', 'SEO'],
    href: '/projekt/strzykawa',
  },
  {
    number: '02',
    title: 'WHEN — system rezerwacji',
    category: 'Narzędzie autorskie',
    description: 'Autorski system rezerwacji wdrażany u pierwszych klientów. Multi-tenant, embeddable widget, panel admina. Bez prowizji od cudzego ruchu.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    href: '/projekt/when',
  },
];

export default function ProjectsSection() {
  return (
    <section className="section section--light projects" id="realizacje" data-guide="Realizacje">
      <div className="projects-header">
        <p className="label">Realizacje</p>
      </div>

      <div className="projects-grid">
        {projects.map(({ number, title, category, description, tags, href }, i) => (
          <Link
            key={number}
            href={href}
            className={`project-card slide-in-${i % 2 === 0 ? 'left' : 'right'}`}
            style={{ '--i': i }}
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

import Link from 'next/link';

const allProjects = [
  { slug: 'strzykawa', label: 'Strzykawa', category: 'E-commerce' },
  { slug: 'peria', label: 'Peria', category: 'Aplikacja' },
  { slug: 'job-odyssey', label: 'Job Odyssey', category: 'Aplikacja' },
  { slug: 'uknuta-magia', label: 'Uknuta Magia', category: 'E-commerce' },
];

export default function RelatedProjects({ currentSlug }) {
  const others = allProjects.filter((p) => p.slug !== currentSlug);

  return (
    <section className="project-page-related glitch-in">
      <div className="peria-section-label">
        <h2 className="label" data-text="Pozostałe projekty">Pozostałe projekty</h2>
      </div>
      <div className="related-projects-grid">
        {others.map(({ slug, label, category }) => (
          <Link key={slug} href={`/projekt/${slug}`} className="related-project-link glitch-word" data-text={label}>
            <span className="related-project-category">{category}</span>
            <span className="related-project-name">{label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

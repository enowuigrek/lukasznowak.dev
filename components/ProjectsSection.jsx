import Image from 'next/image';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    subtitle: 'Palarnia kawy, Częstochowa',
    description: 'Headless Shopify z własnym frontendem React. SEO setup z JSON-LD, Google Merchant Center i AEO Tracker monitorujący widoczność marki w odpowiedziach AI.',
    tags: ['Headless', 'Shopify', 'React', 'SEO'],
    href: 'https://strzykawa.com',
    desktopImg: '/screenshots/strzykawa-desktop.png',
    mobileImg: '/screenshots/strzykawa-mobile.png',
  },
  {
    number: '02',
    title: 'WHEN',
    subtitle: 'Autorski system rezerwacji',
    description: 'Multi-tenant system rezerwacji wdrażany u pierwszych klientów. Bez prowizji, bez vendor lock-in. Panel admina, embeddable widget.',
    tags: ['Next.js', 'Supabase', 'TypeScript'],
    href: 'https://whenbooking.pl',
    desktopImg: '/screenshots/when-desktop.png',
    mobileImg: '/screenshots/when-mobile.png',
  },
];

export default function ProjectsSection() {
  return (
    <section className="section section--light projects" id="realizacje" data-guide="Realizacje">
      <div className="projects-header">
        <p className="label">Realizacje</p>
      </div>

      <div className="projects-grid">
        {projects.map(({ number, title, subtitle, description, tags, href, desktopImg, mobileImg }, i) => (
          <a
            key={number}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card slide-in-${i % 2 === 0 ? 'left' : 'right'}`}
            style={{ '--i': i }}
          >
            {/* Mockup — desktop + mobile side by side */}
            <div className="project-card-mockup">
              <div className="project-card-mockup-desktop">
                <Image src={desktopImg} alt={`${title} — desktop`} width={1280} height={480} className="project-card-mockup-img" unoptimized />
              </div>
              <div className="project-card-mockup-mobile">
                <Image src={mobileImg} alt={`${title} — mobile`} width={375} height={812} className="project-card-mockup-img" unoptimized />
              </div>
            </div>

            <div className="project-card-header">
              <span className="project-card-number">{number}</span>
              <span className="project-card-category">{subtitle}</span>
            </div>

            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-desc">{description}</p>

            <div className="project-card-tags">
              {tags.map((tag) => (
                <span key={tag} className="project-card-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

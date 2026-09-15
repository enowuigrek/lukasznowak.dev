import Image from 'next/image';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa',
    subtitle: 'Palarnia kawy, Częstochowa',
    description: 'Headless Shopify z własnym frontendem React. SEO setup z JSON-LD, Google Merchant Center i AEO Tracker monitorujący widoczność marki w odpowiedziach AI.',
    role: 'Frontend + SEO',
    stack: 'Headless Shopify · React · Next.js',
    href: 'https://strzykawa.com',
    desktopImg: '/screenshots/strzykawa-desktop.png',
    mobileImg: '/screenshots/strzykawa-mobile.png',
  },
  {
    number: '02',
    title: 'WHEN',
    subtitle: 'Autorski system rezerwacji',
    description: 'Multi-tenant system rezerwacji wdrażany u pierwszych klientów. Bez prowizji, bez vendor lock-in. Panel admina, embeddable widget.',
    role: 'Fullstack',
    stack: 'Next.js · Supabase · TypeScript',
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

      <div className="project-rows">
        {projects.map(({ number, title, subtitle, description, role, stack, href, desktopImg, mobileImg }, i) => (
          <div key={number} className="project-row fade-in" style={{ '--i': i }}>

            {/* Kolumna tekstowa */}
            <div className="project-row-content">
              <div className="project-row-meta">
                <span className="project-row-number">{number}</span>
                <span className="project-row-category">{subtitle}</span>
              </div>
              <h3 className="project-row-title">{title}</h3>
              <p className="project-row-desc">{description}</p>
              <div className="project-row-metrics">
                <div className="project-row-metric">
                  <span className="project-row-metric-label">Rola</span>
                  <span className="project-row-metric-value">{role}</span>
                </div>
                <div className="project-row-metric">
                  <span className="project-row-metric-label">Stack</span>
                  <span className="project-row-metric-value">{stack}</span>
                </div>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row-link"
              >
                Zobacz projekt →
              </a>
            </div>

            {/* Kolumna wizualna */}
            <div className="project-row-visual">
              <div className="mockup-browser">
                <div className="mockup-browser-bar">
                  <span className="mockup-browser-dot" />
                  <span className="mockup-browser-dot" />
                  <span className="mockup-browser-dot" />
                </div>
                <div className="mockup-browser-screen">
                  <Image
                    src={desktopImg}
                    alt={title}
                    width={1280}
                    height={720}
                    className="project-row-img"
                    unoptimized
                  />
                </div>
              </div>
              {mobileImg && (
                <div className="mockup-phone-mini">
                  <Image
                    src={mobileImg}
                    alt={`${title} — mobile`}
                    width={375}
                    height={812}
                    className="project-row-img"
                    unoptimized
                  />
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

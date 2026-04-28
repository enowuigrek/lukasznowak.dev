import Link from 'next/link';
import '../styles/tools.css';

const tools = [
  {
    slug: 'when',
    name: 'WHEN',
    tagline: 'System rezerwacji online dla salonów',
    description: 'Pełnoprawny system rezerwacji — grafiki pracowników, ceny per grupa, widget do osadzenia jedną linijką HTML. Klient rezerwuje sam, Ty otwierasz panel. Mogę wdrożyć go u Ciebie w ramach projektu strony.',
    logo: '/when-logo.svg',
    href: '/projekt/when',
    status: 'live',
  },
];

export default function ToolsSection() {
  return (
    <section className="section tools" id="narzedzia" data-guide="Narzędzia">
      <div className="tools-header glitch-in">
        <h2 className="label" data-text="Autorskie narzędzia">Autorskie narzędzia</h2>
        <p className="tools-intro">
          Buduję własne narzędzia internetowe — żeby rozwiązywały konkretne problemy i&nbsp;żebym
          mógł je wdrażać u&nbsp;klientów bez płacenia za zewnętrzne SaaSy.
        </p>
      </div>

      <div className="tools-grid">
        {tools.map(({ slug, name, tagline, description, logo, href }) => (
          <Link key={slug} href={href} className="tool-card slide-in-left" style={{ '--i': 0 }}>
            <div className="tool-card-logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt={`${name} — logo`} className="tool-card-logo" />
            </div>
            <div className="tool-card-body">
              <p className="tool-card-tagline">{tagline}</p>
              <p className="tool-card-desc">{description}</p>
              <span className="tool-card-link glitch-word" data-text="Zobacz projekt →">Zobacz projekt →</span>
            </div>
          </Link>
        ))}

        {/* Placeholder for future tools */}
        <div className="tool-card tool-card-coming">
          <div className="tool-card-coming-inner">
            <span className="tool-card-coming-label">Wkrótce</span>
            <p className="tool-card-coming-text">
              Kolejne narzędzia w drodze — dziennik z&nbsp;AI, Peria, Job Odyssey jako produkty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

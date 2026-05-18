import Link from 'next/link';
import '../styles/projects.css';

const projects = [
  {
    number: '01',
    title: 'Strzykawa — headless Shopify dla lokalnej palarni kawy',
    category: 'E-commerce',
    description: 'Migracja z domyślnego Shopify na headless React + Netlify, SEO setup z JSON-LD, Google Merchant Center i autorski AEO Tracker monitorujący widoczność marki w odpowiedziach AI na tle 30 polskich palarni.',
    tags: ['Headless', 'Shopify', 'React', 'SEO', 'AEO'],
    href: '/projekt/strzykawa',
    featured: true,
  },
  {
    number: '02',
    title: 'WHEN — system rezerwacji bez prowizji dla mikrofirm',
    category: 'Narzędzie autorskie',
    description: 'Autorski SaaS jako alternatywa dla Booksy. Twoi klienci, Twoja strona, Twoja baza — bez prowizji od cudzego ruchu. Multi-tenant, embeddable widget, panel admina. Testowany produkcyjnie z pierwszymi klientami w Częstochowie.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'SaaS'],
    href: '/projekt/when',
    featured: true,
  },
  {
    number: '03',
    title: 'Peria — voice-first PWA inspirowana filozofią perypatetyków',
    category: 'Aplikacja',
    description: 'Progressive Web App z głosowym interfejsem i integracją OpenAI. Głos jako świadoma decyzja designerska, nie skrót — inspiracja: Arystoteles i filozofia myślenia w ruchu.',
    tags: ['PWA', 'OpenAI', 'Voice'],
    href: '/projekt/peria',
    featured: false,
  },
  {
    number: '04',
    title: 'Job Odyssey — tracker aplikacji rekrutacyjnych z CV trackowaniem',
    category: 'Aplikacja',
    description: 'Zbudowany dla siebie podczas szukania pracy. Generuje CV z otagowanymi linkami per aplikacja — widzisz kto kliknął co i kiedy. Koniec wysyłania CV w próżnię.',
    tags: ['React', 'Vite', 'SaaS', 'AI tooling'],
    href: '/projekt/job-odyssey',
    featured: false,
  },
  {
    number: '05',
    title: 'Uknuta Magia — e-commerce MVP dla autora książki dziecięcej',
    category: 'E-commerce',
    description: 'Pełny sklep bez Shopify: strona produktowa, formularz zamówień z kalkulatorem dostawy, panel admina ze statusami i automatyczne powiadomienia e-mail. Produkcja na uknutamagia.pl.',
    tags: ['React', 'Vite', 'Supabase', 'SCSS'],
    href: '/projekt/uknuta-magia',
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="projekty" data-guide="Projekty">
      <div className="projects-header glitch-in">
        <h2 className="label" data-text="Wybrane projekty">Wybrane projekty</h2>
      </div>

      <div className="projects-grid">
        {projects.map(({ number, title, category, description, tags, href, featured }, i) => (
          <Link
            key={number}
            href={href}
            className={`project-card slide-in-${i % 2 === 0 ? 'left' : 'right'}${featured ? ' project-card--featured' : ''}`}
            style={{ '--i': 0 }}
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

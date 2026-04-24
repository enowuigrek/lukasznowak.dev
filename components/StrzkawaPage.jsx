'use client';

import GlitchText from './GlitchText';
import ProjectPageLayout from './ProjectPageLayout';
import '../styles/strzykawa-page.css';

const stack = [
  'React',
  'Vite',
  'Tailwind CSS',
  'Shopify Storefront API',
  'GraphQL',
  'Netlify',
  'Netlify Edge Functions',
  'Cloudflare',
  'Przelewy24',
  'BLIK',
  'InPost',
];

export default function StrzkawaPage() {
  return (
    <ProjectPageLayout slug="strzykawa">
      {/* Hero */}
      <section className="project-page-hero">
        <div className="fade-in">
          <h1 className="sr-only">Strzykawa — Sklep online z kawą specialty</h1>
          <img
            src="/strzykawa-logo.png"
            alt="Strzykawa"
            className="strzykawa-logo"
          />
          <p className="peria-tagline">
            Świeżo palona kawa — prosto pod Twoje drzwi.
          </p>
          <p className="peria-intro">
            Sklep internetowy dla częstochowskiej palarni specialty. Projekt graficzny, kod i&nbsp;integracje. Od zera, pod markę.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Historia">Historia</h2>
        </div>
        <p className="peria-text">
          Częstochowska palarnia z&nbsp;charakterem, własnym piecem i&nbsp;ludźmi, którzy wracają po więcej. Brakowało jednego — miejsca, gdzie ktoś z&nbsp;drugiego końca Polski mógłby zamówić tę samą kawę, którą pije przy barze na Dąbrowskiego&nbsp;4.
        </p>
        <p className="peria-text" style={{ marginTop: '1.5rem' }}>
          Standardowe szablony Shopify wyglądają jak standardowe szablony Shopify. Strzykawa potrzebowała sklepu, który wygląda jak ona — ciepło, prosto, z&nbsp;charakterem.
        </p>
      </section>

      {/* Co powstało? */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Co powstało?">Co powstało?</h2>
        </div>
        <p className="peria-text">
          Sklep internetowy z&nbsp;kompletnym frontendem napisanym ręcznie, podłączonym do Shopify jako silnika e-commerce w&nbsp;tle. Klient widzi Strzykawę. Shopify robi resztę.
        </p>
        <p className="peria-text" style={{ marginTop: '1.5rem' }}>
          Wybierasz kawę, dodajesz do koszyka, wybierasz dostawę kurierem InPost, płacisz BLIK-iem i&nbsp;czekasz na paczkę. Proste. Pod spodem — trochę mniej proste.
        </p>
      </section>

      {/* Design */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Design">Design</h2>
        </div>
        <p className="peria-text">
          Projekt graficzny od zera pod markę. Ciemna zieleń, ciepłe akcenty, dużo przestrzeni. Na desktopie i&nbsp;na telefonie — ten sam klimat.
        </p>
        <blockquote className="peria-blockquote">
          Każdy element — od karty produktu, przez koszyk, po animacje — dopasowany do miejsca, w&nbsp;którym gra gramofon i&nbsp;pachnie świeżo paloną kawą.
        </blockquote>
      </section>

      {/* Wyzwania */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Wyzwania">Wyzwania</h2>
        </div>
        <p className="peria-text">
          Headless Shopify na najtańszym planie to droga, której Shopify oficjalnie nie wspiera. Ograniczony dostęp do checkoutu, ograniczone API. React SPA nie serwuje meta tagów dla social media — crawlery Facebooka czy Messengera widzą pusty HTML.
        </p>
        <blockquote className="peria-blockquote">
          Każdy problem miał rozwiązanie. Żadne nie było oczywiste.
        </blockquote>
      </section>

      {/* Efekt */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Efekt">Efekt</h2>
        </div>
        <p className="peria-text">
          Nowa kawa pojawia się w&nbsp;panelu Shopify — strona się aktualizuje. Klient zamawia. Paczka jedzie. Właściciel nadaje etykietę w&nbsp;InPost Managerze i&nbsp;wraca do tego, co lubi robić — palić kawę, nie walczyć z&nbsp;technologią.
        </p>
      </section>

      {/* CTA */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Sklep działa. Możesz zajrzeć.">Sklep działa. Możesz zajrzeć.</h2>
        </div>
        <a
          href="https://strzykawa.com"
          className="strzykawa-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/strzykawa-logo.png"
            alt="Strzykawa — przejdź do sklepu"
            className="strzykawa-cta-logo"
          />
        </a>
        <p className="strzykawa-cta-url">strzykawa.com</p>
      </section>

      {/* Stack */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Stack">Stack</h2>
        </div>
        <div className="strzykawa-stack">
          {stack.map((tech) => (
            <span key={tech} className="strzykawa-stack-tag">{tech}</span>
          ))}
        </div>
      </section>
    </ProjectPageLayout>
  );
}

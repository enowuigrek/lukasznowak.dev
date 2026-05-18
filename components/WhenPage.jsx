'use client';

import ProjectPageLayout from './ProjectPageLayout';

const stack = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'Supabase',
  'Tailwind CSS',
  'Resend',
  'Vercel',
];

const features = [
  {
    number: '01',
    title: 'WIDGET DO OSADZENIA',
    description: 'Jedna linijka HTML i formularz rezerwacji pojawia się na Twojej stronie. WordPress, Wix, własny kod — wszędzie.',
  },
  {
    number: '02',
    title: 'GRAFIKI PRACOWNIKÓW',
    description: 'Każdy pracownik ma swój kalendarz, godziny pracy, urlopy. Klient wybiera konkretną osobę albo dowolną.',
  },
  {
    number: '03',
    title: 'CENY PER GRUPA',
    description: 'Junior, senior, master — każda grupa może mieć inne ceny za tę samą usługę. Bez kombinowania.',
  },
  {
    number: '04',
    title: 'POWIADOMIENIA EMAIL',
    description: 'Klient dostaje potwierdzenie z linkami do anulowania i zmiany terminu. Bez dzwonienia, bez SMS-ów.',
  },
];

export default function WhenPage() {
  return (
    <ProjectPageLayout slug="when">
      {/* Hero */}
      <section className="project-page-hero">
        <div className="fade-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/when-logo.svg"
            alt="WHEN — system rezerwacji online"
            className="when-hero-logo"
          />
          <p className="peria-tagline">
            System rezerwacji online dla salonów, gabinetów i&nbsp;studiów.
          </p>
          <p className="peria-intro">
            Klient rezerwuje sam, Ty otwierasz panel. Bez telefonów, bez wiadomości, bez Excela.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Dlaczego WHEN?">Dlaczego WHEN?</h2>
        </div>
        <p className="peria-text">
          Większość systemów rezerwacji to&nbsp;subskrypcyjne SaaSy z&nbsp;miesięcznymi opłatami i&nbsp;funkcjami,
          których nikt nie używa. WHEN jest moim autorskim narzędziem — postawione raz,
          dopasowane do konkretnego salonu, bez vendor lock-inu.
        </p>
        <p className="peria-text" style={{ marginTop: '1.5rem' }}>
          Mogę je wdrożyć u&nbsp;Ciebie w&nbsp;ramach projektu strony albo jako osobne wdrożenie —
          z&nbsp;Twoimi kolorami, Twoim brandem, Twoją domeną.
        </p>
      </section>

      {/* Co to umie */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Co potrafi">Co potrafi</h2>
        </div>
        <div className="peria-features-grid">
          {features.map(({ number, title, description }) => (
            <div className="peria-feature" key={number}>
              <span className="peria-feature-number">{number}</span>
              <h3 className="peria-feature-title">{title}</h3>
              <p className="peria-feature-description">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dla kogo */}
      <section className="peria-section glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Dla kogo">Dla kogo</h2>
        </div>
        <p className="peria-text">
          Barber shop, gabinet kosmetyczny, studio jogi, fizjoterapia, weterynarz, groomer —
          wszędzie tam, gdzie liczy się kalendarz, dostępność i&nbsp;szybkie umawianie wizyt.
          Działa też dla zajęć grupowych z&nbsp;limitem miejsc.
        </p>
      </section>

      {/* Demo */}
      <section className="peria-section section-light glitch-in">
        <div className="peria-section-label slide-in-left">
          <h2 className="label" data-text="Zobacz w działaniu">Zobacz w działaniu</h2>
        </div>
        <p className="peria-text">
          Postaw demo w&nbsp;30 sekund — bez rejestracji, bez podpinania karty. Wybierz branżę
          i&nbsp;wejdź prosto do panelu managera z&nbsp;gotowymi danymi.
        </p>
        <a
          href="https://whenbooking.pl"
          className="peria-cta-btn glitch-hover"
          data-text="OTWÓRZ DEMO"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '2rem' }}
        >
          <div className="glitch-bg-blue" />
          <div className="glitch-bg-red" />
          <span>OTWÓRZ DEMO</span>
        </a>
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

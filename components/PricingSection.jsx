'use client';

import '../styles/pricing.css';

const plans = [
  {
    type: 'Strona WWW',
    tagline: 'Prezentacja firmy',
    audience: 'Dla małych firm, freelancerów i lokalnych biznesów',
    priceFrom: 'od 2 500 zł',
    priceRange: 'Najczęściej: 3 000 – 4 500 zł',
    desc: 'Wizytówka, strona firmowa, landing page lub portfolio.',
    includes: [
      'Projekt i kod od zera',
      'Responsywna na każdym urządzeniu',
      'SEO techniczne i meta tagi',
      'Formularz kontaktowy',
      'Wdrożenie i konfiguracja domeny',
    ],
    cta: 'Zapytaj o wycenę',
  },
  {
    type: 'Sklep internetowy',
    tagline: 'Sprzedaż online',
    audience: 'Dla marek, twórców i biznesów sprzedających produkty',
    priceFrom: 'od 5 500 zł',
    priceRange: 'Najczęściej: 6 500 – 9 000 zł',
    desc: 'Shopify lub własny sklep w Next.js z pełną obsługą zamówień.',
    includes: [
      'Koszyk, checkout, płatności online',
      'Panel zarządzania produktami',
      'Integracja z bramką płatniczą',
      'E-mail po zamówieniu',
      'SEO e-commerce',
    ],
    cta: 'Zapytaj o wycenę',
  },
  {
    type: 'Aplikacja webowa',
    tagline: 'Automatyzacja i system biznesowy',
    audience: 'Dla startupów, SaaS i firm potrzebujących narzędzia',
    priceFrom: 'od 8 000 zł',
    priceRange: 'Najczęściej: 10 000 – 18 000 zł',
    desc: 'Dashboard, SaaS, narzędzie wewnętrzne lub MVP z backendem.',
    includes: [
      'React / Next.js + baza danych',
      'Logowanie i konta użytkowników',
      'API i integracje zewnętrzne',
      'Panel administracyjny',
      'Deploy i hosting',
    ],
    cta: 'Zapytaj o wycenę',
  },
];

const sharedBenefits = [
  '3 miesiące wsparcia po wdrożeniu',
  'Kod w Twoim repozytorium',
  'Bez vendor lock-in — strona zostaje Twoja',
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section pricing" id="cennik" data-guide="Cennik">
      <div className="pricing-header fade-in">
        <p className="label">Cennik</p>
        <h2 className="pricing-heading">Punkt wyjścia.</h2>
        <p className="pricing-intro">
          W przypadku bardziej złożonych projektów odpowiedź na pytanie „ile to kosztuje?"
          najczęściej brzmi: „to zależy". Zakres funkcji, termin realizacji, integracje czy
          specyfika branży potrafią mocno wpłynąć na końcową wycenę.
        </p>
        <p className="pricing-intro">
          Dlatego poniżej podaję orientacyjne ceny startowe, które pomagają określić punkt wejścia.
          Dopiero po krótkiej rozmowie i dobraniu odpowiednich rozwiązań mogę przygotować realną,
          indywidualną wycenę dopasowaną do konkretnego projektu.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.type} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            {plan.badge && (
              <div className="pricing-badge">{plan.badge}</div>
            )}

            <div className="pricing-card-top">
              <p className="pricing-type">{plan.type}</p>
              <p className="pricing-tagline">{plan.tagline}</p>
              <p className="pricing-audience">{plan.audience}</p>

              <div className="pricing-price-block">
                <p className="pricing-price">{plan.priceFrom}</p>
                <p className="pricing-price-range">{plan.priceRange}</p>
              </div>

              <p className="pricing-desc">{plan.desc}</p>
            </div>

            <ul className="pricing-includes">
              {plan.includes.map((item) => (
                <li key={item} className="pricing-include-item">
                  <span className="pricing-check">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="pricing-cta" onClick={scrollToContact}>
              {plan.cta} →
            </button>
          </div>
        ))}
      </div>

      {/* Wspólne benefity — to co dostajesz w każdym pakiecie */}
      <div className="pricing-shared">
        <p className="pricing-shared-label">W każdym pakiecie</p>
        <ul className="pricing-shared-list">
          {sharedBenefits.map((b) => (
            <li key={b} className="pricing-shared-item">
              <span className="pricing-shared-check">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="pricing-note">
        Nie wiesz który pakiet pasuje? <button className="pricing-note-link" onClick={scrollToContact}>Napisz</button> — razem to ustalimy.
      </p>
    </section>
  );
}

'use client';

import Link from 'next/link';
import '../styles/pricing.css';

const plans = [
  {
    type: 'Strona WWW',
    tagline: 'Prezentacja firmy',
    priceFrom: '3 000 zł netto',
    includes: [
      'Do 5 sekcji (Hero, O nas, Usługi, Referencje, Kontakt)',
      'Projekt i kod — bez szablonów, bez page builderów',
      'Wersja mobilna, dostosowana do każdego ekranu',
      'Formularz kontaktowy + integracja z pocztą',
      'Podstawowe SEO (meta tagi, sitemap, Open Graph)',
      'Wdrożenie na serwer lub hosting (Vercel/Netlify)',
      '1 miesiąc wsparcia po wdrożeniu',
    ],
    addon: {
      type: 'when',
      text: 'Opcjonalnie: integracja z autorskim systemem rezerwacji',
    },
    cta: 'Zapytaj o wycenę',
  },
  {
    type: 'E-commerce',
    tagline: 'Sprzedaż online',
    priceFrom: '6 000 zł netto',
    includes: [
      'Shopify z własnym frontendem (Next.js)',
      'Strona główna, lista produktów, karta produktu, koszyk, checkout',
      'Integracja z bramką płatniczą (Stripe lub Przelewy24)',
      'Wersja mobilna i dostosowanie do standardów e-commerce',
      'Konfiguracja domeny, SSL, środowiska produkcyjnego',
      '2 miesiące wsparcia po wdrożeniu',
    ],
    cta: 'Zapytaj o wycenę',
  },
  {
    type: 'Aplikacja webowa',
    tagline: 'Narzędzie na miarę',
    priceFrom: '8 000 zł netto',
    includes: [
      'Wycena indywidualna po briefie',
      'Next.js + baza danych (Supabase / PostgreSQL)',
      'Logowanie, role użytkowników, panele',
      'Integracje z API i zewnętrznymi serwisami',
      'Dokumentacja techniczna i instrukcja użytkowania',
      '3 miesiące wsparcia po wdrożeniu',
      'Kod w Twoim repozytorium — bez vendor lock-in',
    ],
    cta: 'Zapytaj o wycenę',
  },
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

              <div className="pricing-price-block">
                <p className="pricing-price">{plan.priceFrom}</p>
              </div>
            </div>

            <ul className="pricing-includes">
              {plan.includes.map((item) => (
                <li key={item} className="pricing-include-item">
                  <span className="pricing-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {plan.addon?.type === 'when' && (
              <Link href="/projekt/when" className="pricing-addon" aria-label="Zobacz projekt WHEN">
                <span className="pricing-addon-text">{plan.addon.text}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/when-logo.svg" alt="WHEN" className="pricing-addon-logo" />
              </Link>
            )}

            <button className="pricing-cta" onClick={scrollToContact}>
              {plan.cta} →
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        Nie wiesz który pakiet pasuje? <button className="pricing-note-link" onClick={scrollToContact}>Napisz</button> — razem to ustalimy.
      </p>
    </section>
  );
}

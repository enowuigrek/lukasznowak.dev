'use client';

import { useState } from 'react';
import '../styles/configurator.css';

const steps = [
  {
    id: 'type',
    question: 'Co chcesz zbudować?',
    options: [
      { value: 'strona', label: 'Strona WWW', desc: 'Wizytówka, portfolio, landing page' },
      { value: 'sklep', label: 'Sklep internetowy', desc: 'E-commerce z koszykiem i płatnościami' },
      { value: 'aplikacja', label: 'Aplikacja webowa', desc: 'Dashboard, SaaS, narzędzie z backendem' },
    ],
  },
  {
    id: 'scope',
    question: 'Jaki zakres?',
    multi: true,
    optionsByType: {
      strona: [
        { value: 'pages_many', label: '4–10 podstron', price: 800 },
        { value: 'pages_xl', label: 'Powyżej 10 podstron', price: 2000 },
        { value: 'cms', label: 'CMS — edytuję treści sam', price: 1200 },
        { value: 'blog', label: 'Blog / artykuły', price: 800 },
        { value: 'multilang', label: 'Wersja angielska', price: 1000 },
      ],
      sklep: [
        { value: 'products_mid', label: '20–200 produktów', price: 1000 },
        { value: 'products_xl', label: 'Powyżej 200 produktów', price: 2500 },
        { value: 'courier', label: 'Integracja z kurierem', price: 800 },
        { value: 'subscriptions', label: 'Subskrypcje / abonamenty', price: 1500 },
        { value: 'multicurrency', label: 'Sprzedaż zagraniczna', price: 1200 },
      ],
      aplikacja: [
        { value: 'auth', label: 'Logowanie użytkowników', price: 1500 },
        { value: 'admin', label: 'Panel administracyjny', price: 2000 },
        { value: 'api', label: 'Integracje z zewnętrznymi API', price: 1500 },
        { value: 'realtime', label: 'Dane w czasie rzeczywistym', price: 2000 },
        { value: 'pdf', label: 'Generowanie PDF / raportów', price: 1000 },
      ],
    },
  },
  {
    id: 'timeline',
    question: 'Kiedy potrzebujesz?',
    options: [
      { value: 'relaxed', label: 'Spokojnie', desc: '2+ miesiące — standardowe tempo', multiplier: 1 },
      { value: 'standard', label: 'Standardowo', desc: '4–6 tygodni', multiplier: 1 },
      { value: 'rush', label: 'Pilnie', desc: 'Poniżej 3 tygodni — dopłata za priorytet', multiplier: 1.3 },
    ],
  },
];

const basePrices = { strona: 2500, sklep: 5500, aplikacja: 8000 };

function formatPrice(n) {
  return new Intl.NumberFormat('pl-PL').format(Math.round(n / 100) * 100);
}

function calcPrice(type, scope, timeline) {
  const base = basePrices[type] || 0;
  const scopeOptions = steps[1].optionsByType[type] || [];
  const extras = scopeOptions
    .filter((o) => scope.includes(o.value))
    .reduce((sum, o) => sum + o.price, 0);
  const multiplier = steps[2].options.find((o) => o.value === timeline)?.multiplier || 1;
  const total = (base + extras) * multiplier;
  return { low: total * 0.9, high: total * 1.15 };
}

export default function ConfiguratorSection() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState(null);
  const [scope, setScope] = useState([]);
  const [timeline, setTimeline] = useState(null);
  const [done, setDone] = useState(false);

  const toggleScope = (val) => {
    setScope((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const canNext = () => {
    if (step === 0) return !!type;
    if (step === 1) return true;
    if (step === 2) return !!timeline;
    return false;
  };

  const next = () => {
    if (step < 2) { setStep(step + 1); }
    else { setDone(true); }
  };

  const reset = () => {
    setStep(0); setType(null); setScope([]); setTimeline(null); setDone(false);
  };

  const currentStep = steps[step];
  const price = done && type && timeline ? calcPrice(type, scope, timeline) : null;

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section configurator" id="konfigurator">
      <div className="configurator-header">
        <p className="label">Konfigurator</p>
        <h2 className="configurator-heading">Ile może kosztować Twój projekt?</h2>
        <p className="configurator-intro">
          Odpowiedz na 3 pytania — dostaniesz orientacyjny zakres cenowy.
        </p>
      </div>

      <div className="configurator-body">
        {!done ? (
          <>
            {/* Step indicator */}
            <div className="configurator-steps">
              {steps.map((s, i) => (
                <div key={s.id} className={`configurator-step-dot ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`} />
              ))}
            </div>

            <p className="configurator-question">{currentStep.question}</p>

            {/* Step 0 & 2 — single choice */}
            {(step === 0 || step === 2) && (
              <div className="configurator-options">
                {currentStep.options.map((opt) => {
                  const selected = step === 0 ? type === opt.value : timeline === opt.value;
                  return (
                    <button
                      key={opt.value}
                      className={`configurator-option ${selected ? 'selected' : ''}`}
                      onClick={() => step === 0 ? (setType(opt.value), setScope([])) : setTimeline(opt.value)}
                    >
                      <span className="configurator-option-label">{opt.label}</span>
                      {opt.desc && <span className="configurator-option-desc">{opt.desc}</span>}
                      {opt.multiplier > 1 && <span className="configurator-option-badge">+30%</span>}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step 1 — multi choice */}
            {step === 1 && type && (
              <div className="configurator-options">
                {steps[1].optionsByType[type].map((opt) => {
                  const selected = scope.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      className={`configurator-option ${selected ? 'selected' : ''}`}
                      onClick={() => toggleScope(opt.value)}
                    >
                      <span className="configurator-option-label">{opt.label}</span>
                      <span className="configurator-option-price">+{formatPrice(opt.price)} zł</span>
                    </button>
                  );
                })}
                <p className="configurator-multi-hint">Możesz wybrać kilka. Pomiń jeśli nic nie dotyczy.</p>
              </div>
            )}

            <div className="configurator-nav">
              {step > 0 && (
                <button className="configurator-back" onClick={() => setStep(step - 1)}>
                  ← Wróć
                </button>
              )}
              <button
                className="configurator-next"
                onClick={next}
                disabled={!canNext()}
              >
                {step < 2 ? 'Dalej →' : 'Pokaż wycenę →'}
              </button>
            </div>
          </>
        ) : (
          /* Result */
          <div className="configurator-result">
            <p className="configurator-result-label">Orientacyjna wycena</p>
            <p className="configurator-result-price">
              {formatPrice(price.low)} – {formatPrice(price.high)} zł
            </p>
            <p className="configurator-result-note">
              To punkt startowy, nie oferta. Finalna wycena zawsze po rozmowie — zależy od szczegółów, które tu nie padły.
            </p>
            <div className="configurator-result-actions">
              <button className="configurator-cta" onClick={scrollToContact}>
                Porozmawiajmy →
              </button>
              <button className="configurator-restart" onClick={reset}>
                Zacznij od nowa
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
